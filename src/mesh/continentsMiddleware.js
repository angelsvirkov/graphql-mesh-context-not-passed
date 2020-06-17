module.exports = next => (root, args, context, info) => {
  console.log("context in continentsMiddleware", context);

  return next(root, args, context, info);
};
