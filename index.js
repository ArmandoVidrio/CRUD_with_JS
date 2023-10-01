
// Objetos genericos

var techProduct1 = {
    title: "Smartphone",
    description: "Potente smartphone con la última tecnología.",
    imageUrl: "https://example.com/smartphone.jpg",
    unit: "unidad",
    stock: 15,
    pricePerUnit: 500,
    category: "Tecnología",
};

var techProduct2 = {
    title: "Laptop Ultradelgada",
    description: "Laptop ultradelgada para la máxima portabilidad.",
    imageUrl: "https://example.com/laptop.jpg",
    unit: "unidad",
    stock: 10,
    pricePerUnit: 1200,
    category: "Tecnología",
};

var techProduct3 = {
    title: "Auriculares Inalámbricos",
    description: "Sumérgete en tu música con estos auriculares inalámbricos de alta calidad.",
    imageUrl: "https://example.com/earphones.jpg",
    unit: "par",
    stock: 20,
    pricePerUnit: 80,
    category: "Tecnología",
};

var techProduct4 = {
    title: "Smartwatch Deportivo",
    description: "Supervisa tu actividad física y mide tu rendimiento con este smartwatch deportivo.",
    imageUrl: "https://example.com/smartwatch.jpg",
    unit: "unidad",
    stock: 25,
    pricePerUnit: 150,
    category: "Tecnología",
};

var jsonSucio = {
    title: "Producto Sucio",
    category: "Tecnología",
    description: "Controla tu actividad física y recibe notificaciones con estilo.",
    imageUrl: "https://example.com/smartwatch.jpg",
    stock: 30,
    pricePerUnit: 150,
    unit: "unidad",
    year: 2023,
    month: 9,
    company: "GadgetHub",
};

///ESTE SERA EL QUE CONVERTIREMOS A JSON
var techProduct5 = {
    uuid: "df2008a5-1c40-4dd1-9db7-8aacc03ae2fb",
    title: "Cámara Mirrorless",
    description: "Captura momentos inolvidables con esta cámara mirrorless de alta resolución.",
    imageUrl: "https://example.com/camera.jpg",
    unit: "unidad",
    stock: 12,
    pricePerUnit: 800,
    category: "Tecnología",
};

//PROBAR METODOS ESTATICOS
console.log("CREANDO LOS OBJETOS")
var smartphone = Product.createFromObject(techProduct1);

var laptop = Product.createFromObject(techProduct2);

var audifonos = Product.createFromObject(techProduct3);

var reloj = Product.createFromObject(techProduct4);


///creamos un json sucio (con atributos que ni al caso)
var productoSucio = Product.createFromObject(jsonSucio);


///CREAMOS PRODUCTOS CON LAS FUNCIONES DE DATA HANDLER
createProduct(smartphone);
createProduct(laptop);
createProduct(audifonos);
createProduct(reloj);
createProduct(productoSucio);
console.table(getProducts());

//ACTUALIZAMOS UN PRODUCTO
console.log("ACTUALIZANDO NUESTRA LAPTOP...")
let nuevalap = new Product('Laptop tuneada','laptop cambiada','http.com.web','unidad',50,100,'category');
updateProduct(laptop._uuid,nuevalap);
console.table(getProducts());
console.log("PRODUCTO ACTUALIZADO")


///ELIMINAMOS EL PRODUCTO
console.log("BORRAREMOS NUESTRO PRODUCTO SUCIO");
deleteProduct(productoSucio._uuid);
console.table(getProducts());
console.log("ELIMINADA CON EXITO");

///CARRITO DE COMPRAS
let carrito = new ShoppingCart(getProducts());
console.log("Agregando OBJETOS AL CARRITO");
carrito.addItem(laptop._uuid,2);
carrito.addItem(reloj._uuid,10);
carrito.addItem(audifonos._uuid,5);
console.table(carrito.proxyArray);
console.log("Elementos agregados con exito");

console.log("")
console.log("ACTUALIZAMOS LOS PRODUCTOS DE NUESTRO CARRITO CON LOS DIFERENTES CASOS")
carrito.updateItem(laptop._uuid,0);
carrito.updateItem(audifonos._uuid,27)
console.table(carrito.proxyArray);
console.log("Elementos actualizados correctamente")

///CALCULAR TOTAL
console.log("-----TOTAL-----")
console.log("Total de compras: $",carrito.CalculateTotal());



