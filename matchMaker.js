// PSUEDOCODE

//---> Check for each demand if there is a supply available.
//--->If no supply is available at that moment move to the next demand follow FIFO
//--->Only make the deal if the demand price is more or equal to supply price and demand required quantity is less than or equal to supply quantity
//--->If deal is done then display in the format of demand order id followed by supply order id, price/kg & finally quantity for which deal is done.


/**
 * Returns the matched outputData
 * @param {string} inputData
 * @returns {string}
 */
function matchMaker(input) {
  const inputData = `
d1 09:47 tomato 110/kg 1kg
d2 09:45 potato 110/kg 10kg
d3 09:48 tomato 110/kg 10kg

s1 09:45 potato 110/kg 1kg
s2 09:45 potato 110/kg 7kg
s3 09:45 potato 110/kg 2kg
s4 09:45 tomato 110/kg 11kg

`;
  function parseInput(inputData) {
    // parse the supply and demand data ;function parseInput(inputData) {
    return inputData
      .trim()
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => {
        const [id, time, vegetable, price, quantity] = line.trim().split(" ");
        return {
          id, time, vegetable, price, quantity

        }
      })

  }



  function formatSupply(parsed) {
    // format the parsed supplyData into an object
    let supply = [];
    for (let object of parsed) {
      console.log(object)
      if (object.id.startsWith("s"))
        supply.push(object);
    }
    return supply;
  }

  function formatDemand(parsed) {
    // format the parsed demandData into an object
    let demand = [];
    for (let object of parsed) {
      if (object.id.startsWith("d")) {
        demand.push(object);
      }
    }
    return demand;
  }

  function matcher(supply, demand) {
    // Match for each supply what is the most profitable demand requirement ;
    let matchedArray = []
    for (let supplyEntry of supply) {
      for (let demandEntry of demand) {
        if (supplyEntry.vegetable === demandEntry.vegetable & supplyEntry.quantity >= demandEntry.quantity & supplyEntry.price <= demandEntry.price) {
          matchedArray.push(
            {
              matched: {
                demand: demandEntry,
                supply: supplyEntry
              },
            }
          );
        }
      }
    }
    return matchedArray;
  }

  // Format the match and return the output in the desired format;
  function formatData(matchedData) {
    // Format the matched demand and supply datatype into output of string format and return it ;
  }
  const parsed = parseInput(inputData)
  console.log(parseInput(inputData))
  console.log(formatSupply(parsed))
  console.log(formatDemand(parsed))
  console.dir(matcher(formatSupply(parsed), formatDemand(parsed)), { depth: null })
  // return OutputData;
}
matchMaker()



