// PSUEDOCODE

//---> Check for each demand if there is a supply available.
//--->If no supply is available at that moment move to the next demand follow FIFO
//--->Only make the deal if the demand price is more or equal to supply price and demand required quantity is less than or equal to supply quantity
//--->If deal is done then display in the format of demand order id followed by supply order id, price/kg & finally quantity for which deal is done.

const inputData = `
d1 09:47 tomato 110/kg 1kg
d2 09:45 potato 150/kg 10kg
d3 09:48 tomato 190/kg 10kg

s1 09:45 potato 90/kg 1kg
s2 09:43 potato 60/kg 7kg
s3 09:45 potato 55/kg 2kg
s4 09:45 tomato 20/kg 11kg

`;


/**
 * Returns the matched outputData
 * @param {string} inputData
 * @returns {string}
 */
// function matchOrders(inputData) {

function parseOrders(rawInput) {
  // parse the supply and demand data ;function parseInput(inputData) {
  return rawInput
    .trim()
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const [id, time, vegetable, price, quantity] = line.trim().split(" ");
      return {
        id: id,
        time: time,
        vegetable: vegetable,
        price: Number(price.replace("/kg", "")),
        quantity: Number(quantity.replace("kg", ""))
      }
    })
}



const orders = parseOrders(inputData);





function createSupplyHashmap(orders) {
  const hashmap = {};

  for (let order of orders) {
    if (!order.id.startsWith("s")) continue;

    const veg = order.vegetable;
    if (!hashmap[veg]) {
      hashmap[veg] = [];
    }

    hashmap[veg].push(order);
  }
  console.log("hashmap", hashmap)
  return hashmap;
}

createSupplyHashmap(orders)

function createDemandQueue(orders) {
  let vegetableMap = [];

  for (let order of orders) {
    if (!order.id.startsWith("d")) continue;

    const veg = order.vegetable;
    if (!vegetableMap[veg]) {
      vegetableMap[veg] = [];
    }
    vegetableMap[veg].push(order);
  }
  console.log("vegMap", vegetableMap);
  const demandQueues = Object.values(vegetableMap);
  console.log("demandQueues", demandQueues);
  return demandQueues;
}

createDemandQueue(orders);
//   /**
//    * Returns the supplies from the order list.
//    * @param {object} parsed input data
//    * @returns {Array} supplies
//    */
//   function separateSupplies(orders) {
//     // format the parsed supplyData into an object
//     let supplies = [];
//     for (let object of orders) {
//       console.log(object)
//       if (object.id.startsWith("s"))
//         supplies.push(object);
//     }
//     return supplies;
//   }



//   /**
//    * Returns the supplies from the order list.
//    * @param {object} parsed input data
//    * @returns {Array} demands
//    */
//   function separateDemands(orders) {
//     // format the parsed demandData into an object
//     let demands = [];
//     for (let object of orders) {
//       if (object.id.startsWith("d")) {
//         demands.push(object);
//       }
//     }
//     return demands;

//   }



//   /**
//    * Sorts the supplies and demand on basis of price and time from the order list.
//    * @param {Array} demands
//    *  * @param {Array} supplies
//    * @returns {Array} sorted supplies and demands
//    */
//   function sortByPriceTimePriority(supplies, demands) {

//     supplies.sort((a, b) =>
//       a.price !== b.price
//         ? a.price - b.price
//         : a.time.localeCompare(b.time)
//     );

//     demands.sort((a, b) =>
//       a.price !== b.price
//         ? b.price - a.price
//         : a.time.localeCompare(b.time)
//     );
//   }



//   /**
//    * Returns the matched pairs
//    * @param {Array}  supplies
//    * @param {Array}  demands
//    * @returns {object} Matched pair of demand and supplies based on the rules
//    */
//   function executeMatching(supplies, demands) {
//     // Match for each supply what is the most profitable demand requirement ;
//     console.log("supplies", supplies);
//     console.log("demands", demands)
//     let trades = []
//     for (let buyOrder of demands) {
//       for (let sellOrder of supplies) {

//         if (sellOrder.quantity === 0) continue;
//         if (sellOrder.vegetable !== buyOrder.vegetable) continue;
//         if (buyOrder.price < sellOrder.price) continue;

//         const tradeQty = Math.min(buyOrder.quantity, sellOrder.quantity);

//         buyOrder.quantity -= tradeQty;
//         sellOrder.quantity -= tradeQty;

//         trades.push(
//           {
//             traded: {
//               demand: buyOrder.id,
//               supply: sellOrder.id,
//               price: `${sellOrder.price}/kg`,
//               quantity: `${tradeQty}kg`
//             },
//           }
//         );

//         if (buyOrder.quantity === 0) break;

//       }


//     }
//     return trades;
//   }



//   /**
//    * Formats the matched object into string format
//    * @param {Object} trades
//    * @returns {String} formatted output
//    */
//   // Format the match and return the output in the desired format;
//   function formatTrades(trades) {
//     // Format the matched demand and supply datatype into output of string format and return it ;
//     const outputArray = trades.map((trade) => {
//       const { demand, supply, price, quantity } = trade.traded;

//       return `${demand}${supply}${price}${quantity}`

//     })

//     const formattedOutput = outputArray.join("\n")
//     return formattedOutput;
//   }




//   const orders = parseOrders(inputData)

//   console.log("order", orders)

//   const supplies = separateSupplies(orders);
//   const demands = separateDemands(orders);

//   sortByPriceTimePriority(supplies, demands);

//   const trades =
//     executeMatching(supplies, demands);
//   console.log("trades", trades);
//   console.log("Final Output\n", formatTrades(trades))
//   return formatTrades(trades);

//   // console.log(parseOrders(inputData))
//   // console.log(separateSupplies(supplies))
//   // console.log(separateDemands(demands))
//   // console.dir(
//   //   executeMatching(supplies, demands),
//   //   { depth: null }
//   // );
//   // return OutputData;
// }

// matchOrders(inputData)



