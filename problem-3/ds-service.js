const setMaxDecimals = (value) =>
  Number(Math.round(value + "e" + 3) + "e-" + 3);

class DataSourceService {
  priceData = [];
  constructor() {
    DataSourceService.instance = this;
  }

  static getInstance() {
    if (!DataSourceService.instance) {
      DataSourceService.instance = new DataSourceService();
    }
    return DataSourceService.instance;
  }

  init(data) {
    for (const price of data) {
      // If i was dealing with larger data sets - I would not add these functions as part of the object
      // As per task - It seems you wish to call it directly without params - so this is a solution
      price.mid = () =>
        setMaxDecimals((price.buy / 100 + price.sell / 100) / 2);
      // Assuimg the quote currencies are always 3 strings
      price.quote = () => price.pair.substring(3);
    }
    this.priceData = data;
  }

  getPrices() {
    return this.priceData;
  }
}

module.exports = DataSourceService;
