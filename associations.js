const Sequelize = require('sequelize');
//Op is used to perform operator method in code
const  {DataTypes,Op}  = Sequelize; // We can change type : Sequelize.DataTypes.INTEGER -->TO --> type : DataTypes.INTEGER,
// Connect to Database
const sequelize = new Sequelize('sequelize','root','Vignesh@2127',{
    dialect : 'mysql'
});

const Country = sequelize.define('country', {
    countryName : {
        type: DataTypes.STRING,
        unique:true
    }
},{
    timestamps : false
});

const Capital = sequelize.define('capital',{
    capitalName : {
        type : DataTypes.STRING,
        unique : true
    }
},{
    timestamps : false
});

// Country.hasOne(Capital);
// // Country.hasOne(Capital,{foreignKey : 'Sulekha'});
// Capital.belongsTo(Country);
let country,capital;

// sequelize.sync({alter : true}).then(() => {
    // Country.bulkCreate([
    //     {
    //         countryName : 'India'
    //     },
    //     {
    //         countryName : 'Australia'
    //     },
    //     {
    //         countryName : 'England'
    //     },
    //     {
    //         countryName : 'New Zealand'
    //     },
    // ]);

    // Capital.bulkCreate([
    //     {
    //         capitalName : 'Delhi'
    //     },
    //     {
    //         capitalName : 'sydney'
    //     },
    //     {
    //         capitalName : 'London'
    //     },
    //     {
    //         capitalName : 'Paris'
    //     },
    // ])

//     return Capital.findOne({where : {capitalName : 'london'}})

// }).then((data)=>{
//     capital = data;
//     return Country.findOne({where : {countryName : 'England'}})
// }).then((data)=>{
//     country = data;
//     country.setCapital(capital); //Based on id, country id will updated(England id value = 3 in country table and that id value in capital table (country id = 3))
// })
// .catch((err) => {
//     console.log(err);
// })

//--------- Set country id without integrate capital -----------//

// sequelize.sync({alter : true}).then(() => {

//     return Country.findOne({where : {countryName : 'Australia'}})

// }).then((data)=>{
//     country = data;
//     return country.getCapital(); // set to "Country id = 1"
// }).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

//---------- Set country id by integrate both capital and country --------//

// sequelize.sync({alter : true}).then(() => {

//     return Country.create({
//         countryName : 'US america'
//     })

// }).then((data)=>{
//     country = data;
//     return country.createCapital({
//         capitalName : 'washingtonDC'
//     })
// }).then((data)=>{
//     console.log(data.toJSON());    
// })
// .catch((err) => {
//     console.log(err);
// })

//--------------------------------------------

// sequelize.sync({alter : true}).then(() => {

//     return Country.findOne({where : { countryName : 'India'}});

// }).then((data)=>{
//     country = data;
//     return Capital.findOne({where : {capitalName : 'Delhi'}})
// }).then((data)=>{
//     capital = data;
//     return capital.setCountry(country); //India and Delhi migrated { id: 1, capitalName: 'Delhi', countryId: 1 },
// }).then((data) =>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//-------------- Deleted foreignkey ---------------

// Country.hasOne(Capital,{onDelete : 'CASCADE'});
// // Country.hasOne(Capital,{foreignKey : 'Sulekha'});
// Capital.belongsTo(Country,{onDelete : 'CASCADE'});

// sequelize.sync({alter : true}).then(()=>{
//     return Country.destroy({where : {countryName : 'US america'}}) // Data deleted from both table if it integrate together
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//----------- Change country id to another capital name -------------

// Country.hasOne(Capital,{onUpdate : 'CASCADE'});
// // Country.hasOne(Capital,{foreignKey : 'Sulekha'});
// Capital.belongsTo(Country,{onDelete : 'CASCADE'});

// sequelize.sync({alter : true}).then(()=>{
//     return Country.findOne({where : {countryName : 'England'}})
// }).then((data)=>{
//     country = data;
//     return Capital.findOne({where : { capitalName : 'washington'}});
// }).then((data)=>{
//     capital = data;
//     return country.setCapital(capital); //Country assignes to another Capital name[England = London] to [England = Washington]
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//---------- Set capital name with existing capital for country ----------//

Country.hasOne(Capital,{onUpdate : 'CASCADE'});
// Country.hasOne(Capital,{foreignKey : 'Sulekha'});
Capital.belongsTo(Country,{onDelete : 'CASCADE'});

sequelize.sync({alter : true}).then(()=>{
    return Country.findOne({where : {countryName : 'England'}})
}).then((data)=>{
    country = data;
    return Capital.findOne({where : { capitalName : 'washington'}});
}).then((data)=>{
    capital = data;
    return capital.setCountry(country); //Capital assignes to country name even it has foreignKey[England = London] to [England = London & Washington]
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
