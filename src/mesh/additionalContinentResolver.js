const resolvers = {
  Continent: {
    testProperty: async (root, args, context) => {
      console.log("context in additionalContinentResolver", context);
      return "TestPropertyString";
    },
  },
};

// The following will give partial information about the ContinentsAPI source
//  but not the actual context with the express `req` object

// const resolvers = {
//   Continent: {
//     testProperty: async (root, args, { ContinentsAPI }) => {
//       console.log("context in additional-continent-resolver", ContinentsAPI);
//       return "TestPropertyString";
//     },
//   },
// };

module.exports = { resolvers };
