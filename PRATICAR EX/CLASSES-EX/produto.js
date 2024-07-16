class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.precoGarantia;
    }

    get display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Quantity: ${this.quantity}`);
    }
    
    get totalPrice() {
        return this.price * this.quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, quantity, warrantlyPeriod) {
        super(id, name, price, quantity);
        this.warrantlyPeriod = warrantlyPeriod;
    }
    
    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Price: R$ ${this.price}`);
        console.log(`Quantity: ${this.quantity}`);
        console.log(`Warrantly Period (months): ${this.warrantlyPeriod}`);
        console.log(`Total Price: R$ ${this.totalPrice}`);
    }

    set priceWarrantly(priceForPeriod) {
        this.precoGarantia = this.warrantlyPeriod * priceForPeriod;
        return;
    }

    get priceWarrantly() {
        return this.precoGarantia;
    }

    get totalPrice() {
        return this.price * this.quantity + this.warrantlyPeriod;
    }
}

const copo = new PersonalCareProduct('120', 'Copo', 124, 20, 24);
copo.priceWarrantly = 10; 
copo.display();
console.log(copo.priceWarrantly);