const Sequelize = require('sequelize');
//Op is used to perform operator method in code
const  {DataTypes,Op}  = Sequelize; // We can change type : Sequelize.DataTypes.INTEGER -->TO --> type : DataTypes.INTEGER,
const bcrypt = require('bcrypt');
const zlib = require('zlib');
const { error } = require('console');

// Connect to Database
const sequelize = new Sequelize('sequelize','root','Vignesh@2127',{
    dialect : 'mysql'
});



// Checking Database connection using async - await
// async function myFunction(){
//     await sequelize.authenticate();
//     console.log("Connected to the database successfully");
// }

// myFunction();

// Another Method - Checking Database connection using then()

// sequelize.authenticate().then(() =>{
//     console.log("Connected to the Database successfully");
// }).catch((err) => {
//     console.log("Error Connecting to the database!..");
// })

//Drop the table

//sequelize.drop({match : /_test$/}); //Drop the table end with '_test' (Eg: sulekha_test)

//Create Table and column

// const User = sequelize.define('user',{
//     user_id:{
//         type : DataTypes.INTEGER,
//         primaryKey : true,
//         autoIncrement : true
//     },
//     username : {
//         type : DataTypes.STRING,
//         allowNull : false,
//         // Validate the length of the string
//         validate : {
//             len : [3,16]
//         },
//         get (){
//             const rawValue = this.getDataValue('username');
//             return rawValue.toUpperCase();
//         }
//     },
//     password : {
//         type : DataTypes.STRING,
//         set (value) {
//             const salt = bcrypt.genSaltSync(12);
//             const hash = bcrypt.hashSync(value,salt);
//             this.setDataValue('password', hash);
//         }
//     },
//     age : {
//         type : DataTypes.INTEGER,
//         defaultValue : 21 // By default set 21 to all user
//     },
//     Sulekha : {
//         type : DataTypes.BOOLEAN,
//         defaultValue : true
//     },
//     description : {
//         type : DataTypes.STRING,
//         set(value){
//             const compressed = zlib.deflateSync(value).toString('base64');
//             this.setDataValue('description',compressed);
//         },
//         get(){
//             const value = this.getDataValue('description');
//             const uncompressed = zlib.inflateSync(Buffer.from(value,'base64')); //decompress bulk data
//             return uncompressed.toString();
//         }
//     },
//     aboutUser: {
//         type : DataTypes.VIRTUAL, //If we mention virtual it should not added to the table
//         get(){
//             return ` ${this.username} ${this.description}`; 
//         }
//     }
// },
// {
//         freezeTableName : true,
//         timestamps : false // Remove the updated time  
// });
//Sync mySQL workbench
//sync(force:true)
//sync(alter:true)
// User.sync().then((data) => {
//     console.log("Table and mode synced");
// }).catch((err) => {
//     console.log("Table and mode not synced");
// });

// User.sync({force:true});

// User.sync({alter : true}).then(() => {
//     const user = User.build ({username : 'Vignesh', password : '12345', age : 26, Sulekha : true});
//     // console.log(user.username);
//     // console.log(user.password); 
//     user.username = 'Vignesh Rithik'; // if we use this method, value cant be overide
//    return user.save();

//Another method to add data to the table
// return User.create({
//     username : 'Vignesh',
//     password : 123456789, // if we not assign value it will take it as null
//     age : 26, // if we not assign value it will take it as default value : 21
//     Sulekha : true
// });

//Bulk create
// return User.bulkCreate([
//     {
//     username : 'Tom',
//     password : 123, // if we not assign value it will take it as null
//     age : 22, // if we not assign value it will take it as default value : 21
// },
// {
//     username : 'Jerry',
//     password : 456, // if we not assign value it will take it as null
//     age : 23,
// },{
//     username : 'Ribbu'
// }
// ],
// {validate:true});


// }).then((data) => {
//     // console.log(data);
//     // console.log(data.toJSON());
//     console.log("Data added to the DB");
//     data.username = 'Vignesh Rithik'; // Update the Username = Vignesh --> Vignesh Rithik
//     return data.save();
// }).then((data) => {
//     console.log("User Updated");
//     console.log(data.toJSON());
// }).catch((err) => {
//   console.log(err);  
// });
// }).then((data) => {
//     // console.log(data);
//     // console.log(data.toJSON());
//     data.username = 'Vignesh Rithik';
//     return data.destroy(); // Delete
// }).then((data) => {
//     console.log("User Destory");
//     console.log(data.toJSON());
// }).catch((err) => {
//   console.log(err);  
// });
// }).then((data) => {
//     // console.log(data);
//     // console.log(data.toJSON());
//     data.username = 'Vignesh Rithik';
//     data.age = 35;
//     return data.save({fields : ['age']}); // this command will update only age field
// }).then((data) => {
//     console.log("User Update age field");
//     console.log(data.toJSON());
// }).catch((err) => {
//   console.log(err);  
// });
// }).then((data) => {
//     data.increment({age : 1})
//     // data.decrement({age : 1})
// }).catch((err) => {
//   console.log(err);  
// });
// }).then((data) => {
//     data.forEach((element) =>{
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//   console.log(err);  
// });
// User.sync({alter:true}).then((data) => {
    // return User.findAll(); // select whole table
    // return User.findAll({attributes : [['username','My_Name'],['password','My_password']]}); //Eg: ['username','My_Name'] = [My_Name = 'Vignesh']
    // return User.findAll({attributes : [[sequelize.fn('SUM',sequelize.col('age')),'sum_age']]}); //Eg sum_age : 407(Total of age column)
    // return User.findAll({attributes : [[sequelize.fn('AVG',sequelize.col('age')),'avg_age']]}); //Eg : avg_age : 25.43 (Average of age column)
    // return User.findAll({attributes : {exclude : ['password']}}); // Print everything in the table except password column
    // return User.findAll({where : {age : 35}}); //Using where class
    // return User.findAll({attributes :['username'], where : {age : 35}});
    // return User.findAll({where :{age : 22, username : 'Tom'}}) // print --> Username : tom and his age is 22
    // return User.findAll({limit:5}); //print top 5 data in the table
    // return User.findAll({order : [['age','DESC']]}); //Print the data in desc order
    // return User.findAll({order :[['age','ASC']]}); //Print the data in Asce order
    // return User.findAll({
    //     attributes : ['username', [sequelize.fn('SUM',sequelize.col('age')),'sum_age']],
    //     group : 'username'})
    // return User.findAll({where : {
    //     // Using OR operator
    //     [Op.or] : {username : 'Vignesh Rithik', age : 26} 
    // }})
    // return User.findAll({where : {
    //     //And Operator
    //     [Op.and] : {username : 'vignesh',age:35}
    // }})
    // return User.findAll({where : {
    //     //Greater than operator
    //     age :{
    //         [Op.gt] : 26
    //     }
    // }})
    // return User.findAll({where : {
    //     //Less than Operator
    //     age : {
    //         [Op.lt] : 25
    //     }
    // }})
    // return User.findAll({where : {
    //     age : {
    //         [Op.or] : {
    //             [Op.lt] : 25,
    //             [Op.eq] : null
    //         }
    //     }
    // }});
    // return User.findAll({where:
    //     //Print the username based on char length
    //     sequelize.where(sequelize.fn('char_length',sequelize.col('username')), 7)
    // });

    //----------- Update -------------

    // return User.update({username : 'Hrithik'}, {
    //     where : {age : 35}
    // })

    // return User.update({username : 'Haribbu'},{
    //     where : {
    //         age : {
    //             [Op.gt] : 30
    //         }
    //     }
    // })

    //----------- Destroy -------------
    // return User.destroy({where : {username : 'Haribbu'}});
    
    // Clear all the data in the table
    // return User.destroy({truncate : true})

    // return User.max('age'); //Print highest value in the table
    // return User.min('age'); //Print least value in the table
    // return User.sum('age'); // Print sum of age column
    // return User.sum('age',{where : {age : 22}}); // Print sum of age is 22 
    // return User.findAll({raw : true}); // Help to print in JSON format
    // return User.findByPk(12); // return full of row value of mention Primary key value (User_id(1) is primary key here)
//     return User.findAll({where : 
//         {age : 26},
//         raw : true
// })
    // return User.findOne(); // return 1st row value
    // return User.findOne({where : {
    //     age : {
    //         [Op.or] : {
    //             [Op.lt] : 47,
    //             [Op.eq] : null
    //         }
    //     }
    // }})

    // findOrCreate method will create or find the data
    // return User.findOrCreate({where : {username : 'Rishi'},
    // defaults : {
    //     age : 50
    // } });

    // Find and count
    // return User.findAndCountAll({
    //     where : {username : 'Vignesh'},
    //     raw : true
    // })

    // return User.create({
    //     username : 'Jason',
    //     password : 'Jason654%^$',
    //     description : 'This is sequelize sulekha business description'
    // })
    // return User.findOne({where : {username : 'Ribbu'}});

    // }).then((data) =>{
    // console.log(data);
    // const [result, created] = data 
    // console.log(created); // return boolean value
    // const {count,rows} = data;
    // console.log(count); // return no.of count
    // console.log(rows); // return whole values
    
    //---- Get and Set method ----//
    // console.log(data.username);
    // console.log(data.password); //print : $2b$12$aVkZYa5YWBivgWKX/Jc9BOHdg636QVEHyvEiAnt5MKb13yldFVD12
    // console.log(data.description); //Sync unencrypted value to the table
    // console.log(data.aboutUser);
    // data.forEach((element) =>{
    //     console.log(element.toJSON());
    // })
// }).catch((err) => {
//     console.log(err);
// })

//-------------- Constraints and validators --------------//
// const User = sequelize.define('user',{
//     user_id:{
//         type : DataTypes.INTEGER,
//         primaryKey : true,
//         autoIncrement : true
//     },
//     username : {
//         type : DataTypes.STRING,
//         allowNull : false,
//         // Validate the length of the string
//         validate : {
//             len : [3,16]
//         },
//         // get (){
//         //     const rawValue = this.getDataValue('username');
//         //     return rawValue.toUpperCase();
//         // }
//     },
//     password : {
//         type : DataTypes.STRING,
//         // set (value) {
//         //     const salt = bcrypt.genSaltSync(12);
//         //     const hash = bcrypt.hashSync(value,salt);
//         //     this.setDataValue('password', hash);
//         // }
//     },
//     age : {
//         type : DataTypes.INTEGER,
//         defaultValue : 21, // By default set 21 to all user
//         // validate : {
//         //     isOldEnough(value) {
//         //         if (value < 16){
//         //             throw new Error ("Too young");
//         //         }
//         //     }
//         // }
//         validate : {
//         //     isNumeric : {
//         //         msg : "Age field should be numeric"
//         //     }
//                 isNumeric : true
//         }
//     },
//     Sulekha : {
//         type : DataTypes.BOOLEAN,
//         defaultValue : true
//     },
//     description : {
//         type : DataTypes.STRING,
//         // set(value){
//         //     const compressed = zlib.deflateSync(value).toString('base64');
//         //     this.setDataValue('description',compressed);
//         // },
//         // get(){
//         //     const value = this.getDataValue('description');
//         //     const uncompressed = zlib.inflateSync(Buffer.from(value,'base64')); //decompress bulk data
//         //     return uncompressed.toString();
//         // }
//     },
//     aboutUser: {
//         type : DataTypes.VIRTUAL, //If we mention virtual it should not added to the table
//         get(){
//             return ` ${this.username} ${this.description}`; 
//         }
//     },
//     email : {
//         type : DataTypes.STRING,
//         unique : true,
//         allowNull : true,
//         // validate : {
//         //     isEmail : true // throws error if it invalid email
//         // }
//         // validate : {
//         //     isIn : {
//         //         args : ['me@gmail.com','me@gmail.org'],
//         //         msg : "The provided email must be one of the following....."
//         // }
//         // }
//         validate : {
//             myEmailValidator(value) {
//                 if(value === null) {
//                     throw new Error("Please enter an email address")
//                 }
//             }
//         }
//     }
// },
// {
//         freezeTableName : true,
//         timestamps : false, // Remove the updated time 
//         validate : {
//             passwordFieldValidation() {
//                 if(this.username === this.password) {
//                     throw new Error ("Password cannot be your username")
//                 }
//             }
//         } 
// });

// User.sync({alter : true}).then(() => {

//     // return User.create({
//     //     username : 'Santhosh',
//     //     email : 'sandi' // throws error
//     // })
//     // const us = User.build({email : 'hello'});
//     // return us.validate();
//     return User.create({
//         username : 'Hrithik',
//         password : 'Hrithik', // throw error : Password cannot be your username
//         age : 25,
//         email : null // throw : Please enter an email address

//     })
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// ------- SQL injection and raw queries ------- //

// const User = sequelize.define('user',{
//     user_id:{
//         type : DataTypes.INTEGER,
//         primaryKey : true,
//         autoIncrement : true
//     },
//     username : {
//         type : DataTypes.STRING,
//         allowNull : false,
//         // Validate the length of the string
//         validate : {
//             len : [3,16]
//         },
       
//     },
//     password : {
//         type : DataTypes.STRING,
        
//     },
//     age : {
//         type : DataTypes.INTEGER,
//         defaultValue : 21, // By default set 21 to all user
//         // validate : {
//         //     isOldEnough(value) {
//         //         if (value < 16){
//         //             throw new Error ("Too young");
//         //         }
//         //     }
//         // }
//         validate : {
//         //     isNumeric : {
//         //         msg : "Age field should be numeric"
//         //     }
//                 isNumeric : true
//         }
//     },
//     Sulekha : {
//         type : DataTypes.BOOLEAN,
//         defaultValue : true
//     },
//     description : {
//         type : DataTypes.STRING,
       
//     },
//     aboutUser: {
//         type : DataTypes.VIRTUAL, //If we mention virtual it should not added to the table
//         get(){
//             return ` ${this.username} ${this.description}`; 
//         }
//     },
//     email : {
//         type : DataTypes.STRING,
//         unique : true,
//         allowNull : true,
       
//         validate : {
//             myEmailValidator(value) {
//                 if(value === null) {
//                     throw new Error("Please enter an email address")
//                 }
//             }
//         }
//     }
// },
// {
//         freezeTableName : true,
//         timestamps : false, // Remove the updated time 
//         validate : {
//             passwordFieldValidation() {
//                 if(this.username === this.password) {
//                     throw new Error ("Password cannot be your username")
//                 }
//             }
//         } 
// });

// function myFunction(){
//     console.log('Running SQL statment.........'); // Logging purpose
// }

// User.sync({alter : true}).then(() => {
//     // return sequelize.query(`UPDATE user SET age= 20 where username = 'Ribbu'`);
//     // return sequelize.query(`SELECT * FROM user`,{type : Sequelize.QueryTypes.SELECT});
//     // return sequelize.query(`UPDATE user SET age = 21 WHERE username = 'Ribbu'`,{type : Sequelize.QueryTypes.UPDATE});
//     // return sequelize.query(`SELECT * FROM user LIMIT 2`,{model : User}); //print 1st 2 row data
//     // return sequelize.query(`SELECT * FROM user LIMIT 2`,{model : User, plain : true}); //print only 1st row value
//     // return sequelize.query(`SELECT * FROM user WHERE username : username`,{
//     //     replacements : [username = 'Ribbu'], //Replace username to 'ribbu on above command 
//     //     plain : true
//     // });
//     // return sequelize.query(`Select * FROM user WHERE username IN ( username)`,{
//     //     replacements : {username : ['Jerry','Ribbu']}
//     // });

//     return sequelize.query(`Select * FROM user WHERE username LIKE = 'username'`,{
//         replacements : [username = 'Ribb%']
//     });

// }).then((data)=>{
//     console.log(data);
//     // [result,metadata] = data;
//     // console.log(result);
//     // console.log(metadata);
// }).catch((err)=>{
//     console.log(err);
// })

//-------- Paranoid tables ---------//

const User = sequelize.define('user',{
    user_id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        // Validate the length of the string
        validate : {
            len : [3,16]
        },
       
    },
    password : {
        type : DataTypes.STRING,
        
    },
    age : {
        type : DataTypes.INTEGER,
        defaultValue : 21, // By default set 21 to all user
        // validate : {
        //     isOldEnough(value) {
        //         if (value < 16){
        //             throw new Error ("Too young");
        //         }
        //     }
        // }
        validate : {
        //     isNumeric : {
        //         msg : "Age field should be numeric"
        //     }
                isNumeric : true
        }
    },
    Sulekha : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    },
    description : {
        type : DataTypes.STRING,
       
    },
    aboutUser: {
        type : DataTypes.VIRTUAL, //If we mention virtual it should not added to the table
        get(){
            return ` ${this.username} ${this.description}`; 
        }
    },
    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : true,
       
        validate : {
            myEmailValidator(value) {
                if(value === null) {
                    throw new Error("Please enter an email address")
                }
            }
        }
    }
},
{
        freezeTableName : true,
        timestamps : true, // Remove the updated time 
        validate : {
            passwordFieldValidation() {
                if(this.username === this.password) {
                    throw new Error ("Password cannot be your username")
                }
            }
        },
        paranoid : true, //this method is used to delete but data not remove from the table and create "DeleteAT" column and date and time will be recorded then if we use "force : true" in Sync method, data removed from the database
        deletedAt : 'timeDestroyed' // Replace column name from deletedAt to timeDestroyed
    });

function myFunction(){
    console.log('Running SQL statment.........'); // Logging purpose
}

User.sync({alter : true}).then(() => {
    return User.destroy({where : { user_id: 1 }});
}).then((data)=>{
    console.log(data);
    // [result,metadata] = data;
    // console.log(result);
    // console.log(metadata);
}).catch((err)=>{
    console.log(err);
})