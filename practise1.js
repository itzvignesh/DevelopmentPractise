const Sequelize = require('sequelize');
//Op is used to perform operator method in code
const  {DataTypes,Op}  = Sequelize; // We can change type : Sequelize.DataTypes.INTEGER -->TO --> type : DataTypes.INTEGER,
// Connect to Database
const sequelize = new Sequelize('sequelize','root','Vignesh@2127',{
    dialect : 'mysql'
});

const Student = sequelize.define('student', {
    student_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            len : [3,20]
        }
    },
    favorite_subject : {
        type : DataTypes.STRING(20),//String(20) allow upto 20 char
        defaultValue : 'Maths'
    },
    school_Passed_Year : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    annual_result : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    }
},
    {
        freezeTableName : true,
        timestamps : false
    })

    // Student.sync().then(() => {
    //     console.log("Synced successfully");
    //     Student.bulkCreate([
    //         {
    //             name : 'Vignesh',
    //             school_Passed_Year : 2014
    //         },
    //         {
    //             name : 'Rithik',
    //             school_Passed_Year : 2014,
    //             favorite_subject : 'Physics',
    //             annual_result : false
    //         },
    //         {
    //             name : 'Ribbu',
    //             school_Passed_Year : 2019,
    //             favorite_subject : 'English'
    //         },
    //         {
    //             name : 'Tom',
    //             school_Passed_Year : 2019,
    //             favorite_subject : 'Tamil'
    //         },
    //         {
    //             name : 'Jerry',
    //             school_Passed_Year : 2019,
    //             favorite_subject : 'Chemistry'
    //         },
    //         {
    //             name : 'James',
    //             school_Passed_Year : 2016,
    //             favorite_subject : 'History',
    //             annual_result : false
    //         },
    //         {
    //             name : 'Cameron',
    //             school_Passed_Year : 2015,
    //             favorite_subject : 'Social'
    //         },
    //         {
    //             name : 'Velu',
    //             school_Passed_Year : 2014,
    //             favorite_subject : 'Maths'
    //         }

    //     ], {validate : true});
    // }).catch((err) => {
    //     console.log(err);
    // });

    Student.sync().then(() => {
        // return Student.findAll({where : {
        //     [Op.or] : {favorite_subject : 'maths', annual_result : false}
        // }})
        // return Student.findAll({
        //     attributes : ['name'],
        //     where : {
        //     [Op.or] : {favorite_subject : 'maths', annual_result : false}
        // }})

        // return Student.findAll({ attributes : 
        //     ['school_Passed_Year',
        //     //Below command for COUNT 
        //     [sequelize.fn('COUNT',sequelize.col('school_Passed_Year')),'num_students']
        // ],
        // group : 'school_Passed_Year'
        // })

       

    }).then((data)=>{
        data.forEach((element) => {
            console.log(element.toJSON());
        })
        
    }).catch((err)=> {
        console.log(err);
    })