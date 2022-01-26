// For loop
const SumToVersion1 = (value) => {
  let accumulator = 0;
  for (let i = 1; i <= value; i++) {
    accumulator += i;
  }
  return accumulator;
};

// Friedrich Gauss Forumula
const SumToVersion2 = (n) => (n * (n+1) / 2);

//Recursion
const SumToVersion3 = (n) => n === 1 ? 1 : n + SumToVersion3(n-1)

console.log(`VERSION 1: `, SumToVersion1(1000));
console.log(`VERSION 2: `, SumToVersion2(1000));
console.log(`VERSION 3: `, SumToVersion3(1000));
