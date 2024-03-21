var customerName ='bob';
var bestCustomer;
const leastFavoriteCustomer = 'tom'

function upperCaseCustomerName(customerName){
    let newCustomerName = customerName;
    return newCustomerName.toUpperCase();
}

function setBestCustomer(){
   return bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'John';
}
console.log(upperCaseCustomerName(customerName));