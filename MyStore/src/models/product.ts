// Model class that represents the Product.
export class Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    // amount: Optional attribute, which will be used for determining the amount of
    // the specific product to be purchased.
    amount?: number;
    
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.url = '';
        this.description = '';
    }
}