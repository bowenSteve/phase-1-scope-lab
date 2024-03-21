var customerName ='bob';
var bestCustomer;
const leastFavoriteCustomer = 'tom'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 
    return customerName;
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
