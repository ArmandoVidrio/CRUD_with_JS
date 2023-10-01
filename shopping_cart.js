class ShoppingCartException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}
class ProductProxy{
    constructor(UUID,amount){
        this.UUID=UUID;
        this.amount=amount;
    }
}

class ShoppingCart{
    constructor(products){
        this.productArray = products;
        this.proxyArray = [];
    }

    addItem(productUUid,amount){
        if(this.proxyArray.find(element => productUUid === element.UUID) === undefined){
            this.proxyArray.push(new ProductProxy(productUUid,amount));
        }
        //El producto ya esta en nuestro arreglo de proxys
        else{
            let index = this.proxyArray.findIndex(element => productUUid === element.UUID);
            this.proxyArray[index].amount += amount;
        }
    }

    updateItem(uuid, amount) {
        let index = this.proxyArray.findIndex(element => element.UUID === uuid);
        // Validaciones
        if (amount < 0) {
            throw new ShoppingCartException("Non negative amounts to update");
        }
        if (amount === 0) {
            this.removeItem(uuid);
            return; // Salir de la función después de remover el elemento
        }
        // Verificar si el elemento no se encuentra en el array
        if (index !== -1) {
            // Actualizar la cantidad si el elemento se encuentra en el array
            this.proxyArray[index].amount = amount;
        }else{
            throw new ShoppingCartException("Item not found in the shopping cart");
        }
    }


    removeItem(productUUID){
        if(this.proxyArray.find(element => productUUID === element.UUID) === undefined){
            throw new ShoppingCartException("The product is not in the shopping cart");
        }
        else{
            let index = this.proxyArray.findIndex(element => productUUID === element.UUID);
            this.proxyArray.splice(index,1);
        }
    }

    CalculateTotal(){
        let total = 0;
        for (let proxy of this.proxyArray){
            let product = getProductById(proxy.UUID);
            total += proxy.amount * product.pricePerUnit;
        }
        return total;
    }
}

