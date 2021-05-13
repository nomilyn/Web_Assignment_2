const fs = require('fs');

class Data {
    constructor(employees, departments) {
        this.employees  = employees;
        this.departments = departments;
    }
}

let allData = null;

//initialize()
module.exports.initialize = function() {
    return new Promise(function(resolve, reject){
        fs.readFile('./data/employees.json', function(err, employeeDataFromFile) {
            if(err) {
                reject("Unable to read employees.json");
            }
            else {
                fs.readFile('./data/departments.json', function(err, departmentDataFromFile) {
                    if(err) {
                        reject("Unable to read departments.json");
                    }
                    else {
                        allData = new Data(JSON.parse(employeeDataFromFile),JSON.parse(departmentDataFromFile));
                        resolve();
                    } 
                });
            } 
        });
    });
}

module.exports.getAllEmployees = function() {
    return new Promise(function(resolve, reject) {
        if(allData.employees.length > 0) {
            resolve(allData.employees);
        }
        else {
            reject("no results returned for Employees");
        }
    });
}

module.exports.getDepartments = function() {
    return new Promise(function(resolve, reject) {
        if(allData.departments.length > 0) {
            resolve(allData.departments);
        }
        else {
            reject('no results returned for Departments');
        }
    });
}

module.exports.getManagers = function() {
    return new Promise(function(resolve, reject) {
        if(allData.employees.length > 0) {
            let ctrManager = 0;    
            for(let i= 0; i < allData.employees.length; i++)
            {
                if(allData.employees[i].isManager == true) {
                    ctrManager++;
                }
            }    
            resolve(ctrManager);
        }
        else {
            reject("no results returned for Managers");
        }
    });
}
