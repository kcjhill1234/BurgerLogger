const express = require("express")
const burgerModel = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burgerModel.getAll()
    const burgersToEat = burgers.filter(burger => !burger.devoured)
    const burgersDevoured = burgers.filter(burger => burger.devoured)
    res.render('index', {burgersToEat, burgersDevoured})
})

router.post("/", async (req, res) => {
    const {name} = req.body;
    const newBurger = await burgerModel.create(name);
    res.redirect('/')
})

router.put("/:id", async (req, res) => {
    const {id} = req.params;
    await burgerModel.update(id);
    res.status(200).send()
})


module.exports = router;
