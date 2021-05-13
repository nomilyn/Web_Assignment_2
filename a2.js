/*********************************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nomilyn Cayton      Student ID: 118 902 204     Date: February 1, 2021
*
*********************************************************************************************/

let serverData = require("./modules/serverDataModule.js");

serverData.initialize().then(_ => {
    serverData.getAllEmployees().then(employeeData => {
        console.log(`Successfully retrieved ${employeeData.length} employees`);
    }).catch(e=>{ 
        console.log(e);
    });
    serverData.getDepartments().then(deptData => {
        console.log(`Successfully retrieved ${deptData.length} departments`); 
    }).catch(e => { 
        console.log(e);
    });
    serverData.getManagers().then(mgr => {
        console.log(`Successfully retrieved ${mgr} managers`); 
    }).catch(e => { 
        console.log(e);
    });
}).catch(e => { 
    console.log(e);
});