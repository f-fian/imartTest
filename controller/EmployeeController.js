
import Employee from "../models/Employee.js"

export const createEmployee = (req,res)=>{
    const {name,email} = req.body
    Employee.create({
        name,
        email
    }).then(response => {
        res.send(response)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

export const findOneEmployee = (req,res)=>{
    const {id} = req.params
    Employee.findOne({
        where:{
            id
        }
    }).then(response => {
        res.send(response)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

export const findAllEmployee = (req,res)=>{
    Employee.findAll()
    .then(response => {
        res.send(response)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

export const deleteEmployee = (req, res) => {
    const { id } = req.params;
    Employee.destroy({
        where: {
            id
        }
    })
    .then(deletedRows => {
        if (deletedRows > 0) {
            res.send(`Employee with ID ${id} deleted successfully`);
        } else {
            res.send(`No employee found with ID ${id}`);
        }
    })
    .catch(error => {
        console.error('Failed to delete the record : ', error);
        res.status(500).send("Internal Server Error");
    });
};

export const updateEmployee = (req,res)=>{

    const {id} = req.params;
    const {name,email} = req.body

    const fieldsUpdate = {}

    if(name){
        fieldsUpdate.name = name
    }
    if(email){
        fieldsUpdate.email = email
    }

    Employee.update(
        fieldsUpdate,
        {where:{id}}
    )
    .then(updatedRows => {
        if (updatedRows > 0) {
            res.send(`Employee with ID ${id} updated successfully`);
        } else {
            res.send(`No employee found with ID ${id}`);
        }
    })
    .catch(error => {
        console.error('Failed to update the record : ', error);
        res.status(500).send("Internal Server Error");
    });

    
}