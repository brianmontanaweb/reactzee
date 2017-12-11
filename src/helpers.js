export function randomDiceArray(options) {
  //problem: build out a random array of values, leverage config object
  let defaultOptions = {
    amount: 6,
    max: 6
  };
  //Check for default options against user updated options, default must exist or the key will get tossed
  options = Object.keys(defaultOptions).reduce((accu, element) => {

    if(options.hasOwnProperty(element)) {
      accu[element] = options[element];
    } else {
      accu[element] = defaultOptions[element];
    }
    return accu;
  }, {});

  return new Array(options.amount)
    .fill(1)
    .reduce(accu => {
      accu.push(Math.ceil(Math.random() * options.max));
      return accu;
    }, []);
}