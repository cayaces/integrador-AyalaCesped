import express from 'express';

const router = express.Router();

import { app, io } from '../index.js'

const products = [];

router.get("/realTimeProducts", (req, res) => {
    res.render("realTimeProducts", { products });
})

router.post("/realTimeProducts", (req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    const newProduct = { name, description };
    products.push(newProduct);

    io.emit("newProduct", newProduct);

    res.redirect("/realTimeProducts"); 
});


export default router;