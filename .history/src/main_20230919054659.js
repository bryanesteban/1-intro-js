

const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products);

products.forEach((el)=>{
    console.log(el);
});

for(const prod of products){
    console.log(prod);
}

for(let index = 0 ; index < products.length; i++){
    const element = products(i);
    console.log(element);
}