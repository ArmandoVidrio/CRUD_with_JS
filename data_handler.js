var arrayofproducts = [];

function getProducts(){
    return arrayofproducts;
}
function getProductById(uuid) {
    return arrayofproducts.find(product => product._uuid===uuid);
}
function createProduct(product){
    arrayofproducts.push(product);
}
function updateProduct(uuid,updateProduct){
    let index = arrayofproducts.findIndex(p => p._uuid === uuid);
    arrayofproducts[index] = updateProduct;
}
function deleteProduct(uuid){
    let index = arrayofproducts.findIndex(p => p._uuid === uuid);
    arrayofproducts.splice(index,1);
}
function findProduct(query){
    let interpretation = query.split(':');
    let category = interpretation[0];
    let title = interpretation[1];

    if(title === ""){
        console.log("Categoria",category);
        return arrayofproducts.filter(p => p._category === category);
    }
    else if (category === ""){
        console.log("Producto",title);
        return arrayofproducts.filter(p => p._title === title);
    }
    else{
        return arrayofproducts.filter(p => p._title === title && p._category === category);
    }

}
