const Sequelize = require('sequelize');
//Op is used to perform operator method in code
const  {DataTypes,Op}  = Sequelize; // We can change type : Sequelize.DataTypes.INTEGER -->TO --> type : DataTypes.INTEGER,
// Connect to Database
const sequelize = new Sequelize('sequelize','root','Vignesh@2127',{
    dialect : 'mysql'
});

const Customer = sequelize.define('customer',{
    customerName : {
        type : DataTypes.STRING
    }
},{
    timestamps : false
});

const Product = sequelize.define('product',{
    productName : {
        type : DataTypes.STRING
    }
},{
    timestamps:false
});

const CustomerProduct = sequelize.define('customerproduct',{
    customerproductId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }
},{
    timestamps : false
})

Customer.belongsToMany(Product,{through : 'customerproduct'});
Product.belongsToMany(Customer,{through : 'customerproduct'});
let customer , product
//------- customer id assigned to all products -------//
// sequelize.sync({alter : true}).then(()=>{
    
//     return Customer.findOne({where : {customerName : 'Vignesh'}})
    
// }).then((data)=>{
//     customer = data;
//     return Product.findAll();
// }).then((data) =>{
//     product = data;
//     customer.addProducts(product); //customer id assigned to all products
// }).catch((err)=>{
//     console.log(err);
// })

//------- Product id assigned to all customer -------//

// sequelize.sync({alter : true}).then(()=>{
    
//     return Product.findOne({where : {productName : 'Laptop'}})
    
// }).then((data)=>{
//     product = data;
//     return Customer.findAll();
// }).then((data) =>{
//     customer = data;
//     product.addCustomers(customer); //customer id assigned to all products
// }).catch((err)=>{
//     console.log(err);
// })

//---------------- Delete ------------------//

sequelize.sync({alter : true}).then(()=>{
    
    return Customer.destroy({where : {customerName : 'Vignesh'}}); //Delete the data
    
}).then((data)=>{
   console.log(data);
}).catch((err)=>{
    console.log(err);
})