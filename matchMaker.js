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
function matchMaker(inputData) {

  function parseInput(inputData) {
    // parse the supply and demand data ;

  }

  function formatSupply(parsedData) {
    // format the parsed supplyData into an object
  }

  function formatDemand(parsedData) {
    // format the parsed demandData into an object

  }

  function matcher(formatedSupply, formatedDemand) {
    // Match for each supply what is the most profitable demand requirement ;
  }

  // Format the match and return the output in the desired format;
  function formatData(matchedData) {
    // Format the matched demand and supply datatype into output of string format and return it ;
  }

  return OutputData;
}


