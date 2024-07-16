export default (req, res) => {
  return res.end(new Date().toISOString());
};
