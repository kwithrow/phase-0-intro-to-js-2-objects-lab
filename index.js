const employee = {
    name: "Kirstie",
    streetAddress: "1024 Edgemont"
}
 let updateEmployeeWithKeyAndValue = (employee, key, value) => {
     return Object.assign({}, employee, {[key]: value});
 }

 let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
     employee[key] = value;
     return employee;
 }

 let deleteFromEmployeeByKey = (employee, key) => {
     const newObj = Object.assign({}, employee)
     delete newObj[key]
     return newObj;
 }

 let destructivelyDeleteFromEmployeeByKey = (employee,key) => {
     delete employee[key];
     return employee;
 }
