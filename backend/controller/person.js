const Sequelize = require("sequelize");
const persona = require("../models").persona;

module.exports = {
  create(req, res) {
    const { body } = req;
    console.log(body);
    return persona
      .create({
        name: body.name,
        gender: body.gender,
      })
      .then((persona) => res.status(200).send(persona))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return persona
      .findAll({})
      .then((persona) => res.status(200).send(persona))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return persona
      .findAll({
        where: {
          id: req.params.id,
        },
      })
      .then((persona) => res.status(200).send(persona))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    const { body } = req;
    return persona
      .update(
        { name: body.name, gender: body.gender },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((persona) => res.status(200).send(persona))
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return persona
      .destroy({
        where: {
          id: req.params.id,
        }
      })
      .then(() => res.status(200).send({"delete":true}))
      .catch((error) => res.status(400).send(error));
  },
};
