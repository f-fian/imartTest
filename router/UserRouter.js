import express from "express";

import { createEmployee,findOneEmployee,findAllEmployee,deleteEmployee,updateEmployee} from "../controller/EmployeeController.js";


const EmployeeRouter = express.Router()


EmployeeRouter.post("/employee",createEmployee)
EmployeeRouter.get("/employee",findAllEmployee)
EmployeeRouter.get("/employee/:id",findOneEmployee)
EmployeeRouter.delete("/employee/:id",deleteEmployee)
EmployeeRouter.put("/employee/:id",updateEmployee)

export default EmployeeRouter;