const {
  createClient,
  getClients,
  getClientByClientId,
  updateClients,
} = require("./client.controller");
const clientRouter = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

clientRouter.post("/", checkToken, createClient);
clientRouter.get("/", checkToken, getClients);
clientRouter.get("/:id", checkToken, getClientByClientId);
clientRouter.patch("/", checkToken, updateClients);

module.exports = clientRouter;
