const client = require("../../Model/clientschema");

const clientread1 = async (req, res) => {
  const _id = req.params.id;
  const read = await client.findById({ _id });
  res.json(read);
};

module.exports = clientread1;
