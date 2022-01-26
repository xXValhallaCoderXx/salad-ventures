const https = require("https");
const DS = require("./ds-service");

const fetchBinaryData = () => {
  const TEMP_DATA = [];
  return new Promise((resolve, reject) => {
    https
      .get("https://static.ngnrs.io/test/prices", (res) => {
        if (res.statusCode === 200) {
          res.on("data", (chunk) => {
            TEMP_DATA.push(chunk);
          });
          res.on("end", () => {
            const parsedData = JSON.parse(Buffer.concat(TEMP_DATA).toString());
            // Would make sure this is blocking on large data set
            DS.getInstance().init(parsedData.data.prices);
            resolve();
          });
        } else {
          reject("Sorry, an error occured");
        }
      })
      .on("error", (err) => {
        reject("Sorry, an error occured");
      });
  });
};

const init = async () => {
  try {
    await fetchBinaryData();
    const prices = DS.getInstance().getPrices();
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  } catch {
    console.log("Error loading datasource");
  }
};

init();
