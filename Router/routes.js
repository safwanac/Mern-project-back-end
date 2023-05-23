const express = require("express");
const usercreate = require("../Controller/register");
const login = require("../Controller/login");
const create = require("../Controller/bookdetails");
const read = require("../Controller/booksget");
const remove = require("../Controller/bookremove");
const readbook = require("../Controller/bookread");
const bookupdate = require("../Controller/bookupdate");
const readclient = require("../Controller/Client/readclient");
const createclient = require("../Controller/Client/createclient");
const clientupdate = require("../Controller/Client/clientupdate");
const clientdelete = require("../Controller/Client/clientdelete");
const clientread1 = require("../Controller/Client/clientread1");
const createcustomer = require("../Controller/Customer/createcustomer");
const customertable = require("../Controller/Customer/customertable");
const customerread = require("../Controller/Customer/customerread");
const customerupdate = require("../Controller/Customer/customerupdate");
const customerdelete = require("../Controller/Customer/customerdelete");
const createteam = require("../Controller/TeamMember/createteam");
const teamtable = require("../Controller/TeamMember/teamtable");
const teamread = require("../Controller/TeamMember/teamread");
const teamupdate = require("../Controller/TeamMember/teamupdate");
const teamdelete = require("../Controller/TeamMember/teamdelete");
const createorder = require("../Controller/Order/createorder");
const ordertable = require("../Controller/Order/ordertable");
const orderread = require("../Controller/Order/orderread");
const orderupdate = require("../Controller/Order/orderupdate");
const orderdelete = require("../Controller/Order/orderdelete");


const router = express.Router();

router.route("/create").post(usercreate);
router.route("/login").post(login);

router.route("/book").post(create);
router.route("/read").get(read);
router.route("/delete/:id").delete(remove);
router.route("/readbook/:id").get(readbook);
router.route("/bookupdate/:id").put(bookupdate);

router.route("/readclient").get(readclient);
router.route("/createclient").post(createclient);
router.route("/clientread1/:id").get(clientread1);
router.route("/updateclient/:id").put(clientupdate);
router.route("/deleteclient/:id").delete(clientdelete);

router.route("/createcustomer").post(createcustomer);
router.route("/customertable").get(customertable);
router.route("/customerread/:id").get(customerread);
router.route("/customerupdate/:id").put(customerupdate);
router.route("/customerdelete/:id").delete(customerdelete);

router.route("/createteam").post(createteam);
router.route("/teamtable").get(teamtable);
router.route("/teamread/:id").get(teamread);
router.route("/teamupdate/:id").put(teamupdate);
router.route("/teamdelete/:id").delete(teamdelete);

router.route("/createorder").post(createorder);
router.route("/ordertable").get(ordertable);
router.route("/orderread/:id").get(orderread);
router.route("/orderupdate/:id").put(orderupdate);
router.route("/orderdelete/:id").delete(orderdelete);

module.exports = router;
