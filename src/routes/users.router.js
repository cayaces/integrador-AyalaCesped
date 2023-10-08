const { Router } = require("express")
const { userModel } = require("../models/user.model")

const router = Router()

//get
router.get("/", async (req, res) => {
    try {
        let users = await userModel.find()
        res.send({ result: "success", payload: users })
    } catch (error) {
        console.log(error)
    }
})

//post
router.post("/", async (req, res) => {
    let { nombre, precio, stock, categoria, codigo } = req.body

    if (!nombre || !precio || !stock || !categoria || !codigo) {
        res.send({ status: "error", error: "Debe ingresar los datos correspondientes" })
    }
    let result = await userModel.create({nombre, precio, stock, categoria, codigo})
    res.send({ result: "success", payload: result })

})

//put
router.put("/:uid", async (req, res) =>{
    let {uid} = req.params

    let userToReplace = req.body
    if(!userToReplace.nombre || !userToReplace.precio || !userToReplace.stock || !userToReplace.categoria || !userToReplace.codigo){
        res.send({status: "error", error: "no hay datos en parametros"})

    }

    let result = await userModel.updateOne({_id: uid}, userToReplace)
    res.send({ result: "success", payload: result })
})

//delete
router.delete("/uid", async(req, res) => {
    let {uid} = req.params
    let result = await userModel.deleteOne({_id: uid })
    res.send({ result: "success", payload: result })
})

module.exports = router