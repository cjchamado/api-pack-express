module.exports = async (req, res, next) => {
  await req.ApiPack.serialize();
  next();
};
