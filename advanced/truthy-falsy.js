const products = []
const product = products[0]

if(product != undefined) 
{
    console.log('product found')
}else {
    console.log('product not found!')
}

// Truthy = values that resolve to true in boolean context
// falsy = values that resolve to false in boolean context
// falsy values = false, 0 empty string, null, undefined, NaN

//truthy/false used to check if something exists and not comparison ex. ( number === 1 ) 

if(product) // if product has something it should return true
{
    console.log('product found')
}else {
    console.log('product not found!')
}

console.log('5' - 5 + '451' + 3)