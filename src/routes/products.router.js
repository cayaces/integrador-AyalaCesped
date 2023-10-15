const { Router } = require("express")
const { productsModel } = require("../models/products.model")

const router = Router()

//get
router.get("/", async (req, res) => {
    try {
        let products = await productsModel.find()
        res.send({ result: "success", payload: products })
    } catch (error) {
        console.log(error)
    }
});

//post
router.post("/", async (req, res) => {
    let { producto, precio, stock, categoria } = req.body

    if (!producto || !precio || !stock || !categoria) {
        res.send({ status: "error", error: "Debe ingresar los datos correspondientes" })
    }
    let result = await productsModel.create({ producto, precio, stock, categoria })
    res.send({ result: "success", payload: result })
});

//put
router.put("/:pid", async (req, res) => {
    let { pid } = req.params

    let productsToReplace = req.body
    if (!productsToReplace.producto || !productsToReplace.precio || !productsToReplace.stock || !productsToReplace.categoria) {
        res.send({ status: "error", error: "no existes datos" })
    }

    let result = await productsModel.updateOne({_id: pid}, productsToReplace)
    res.send({ result: "success", payload: result })
});

//delete
router.delete("/:pid", async(req, res) => {
    let {pid} = req.params
    let result = await productsModel.deleteOne({_id: pid})
    res.send({ result: "success", payload: result })
});

module.exports = router;
