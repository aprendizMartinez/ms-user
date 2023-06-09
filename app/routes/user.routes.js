import { Router } from "express";
import * as controller from "../controllers/user.controllers" 


const route = Router();

route.get("/", (req, res)=>{
    res.send("<h1>Hola mundo</h1>");
});

route.get("/user",controller.findAllUser);
route.get("/user/:id",controller.findUser);
route.post("/user",controller.insertUser);
route.put("/user",controller.updateUser);
route.delete("/user/:id", controller.deleteUser)

export default route;