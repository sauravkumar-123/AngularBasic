export class Product {

    productCode :string;
    productName :string;
    price :Number;
    category :string;
    imagePath :string;

    constructor(productCode :string="", productName :string="", price :Number=0, category :string='', imagePath :string=""){
        this.productCode=productCode;
        this.productName=productName;
        this.price=price;
        this.category=category;
        this.imagePath=imagePath;
    }
    
}
