const Sequelize = require('sequelize');
//Op is used to perform operator method in code
const  {DataTypes,Op}  = Sequelize; // We can change type : Sequelize.DataTypes.INTEGER -->TO --> type : DataTypes.INTEGER,
// Connect to Database
const sequelize = new Sequelize('sequelize','root','Vignesh@2127',{
    dialect : 'mysql'
});

const Consumer = sequelize.define('consumer', {
    username : {
        type: DataTypes.STRING,
        
    },
    password : {
        type : DataTypes.STRING,

    }
},{
    timestamps : false
});

const Post = sequelize.define('post',{
    message : {
        type : DataTypes.STRING
    }
},{
    timestamps : false
})

// Consumer.hasMany(Post);
// Post.belongsTo(Consumer);

let consumer , post;

// sequelize.sync({alter : true}).then(()=>{

//    return Consumer.findOne({where : {username : 'Vignesh'}});

// }).then((data)=> {
//     consumer = data;
//     return Post.findAll();
// }).then((data)=>{
//     post = data;
//     return consumer.addPosts(post); // customer id set '1' to all messages in post table
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//---------- To count the post ----------//

// sequelize.sync({alter : true}).then(()=>{

//     return Consumer.findOne({where : {username : 'Vignesh'}});
 
//  }).then((data)=>{
//      consumer = data;
//      return consumer.countPosts(); // no.of rows in post table
//  }).then((data)=>{
//      console.log(data);
//  }).catch((err)=>{
//      console.log(err);
//  })

 //----------- Remove post ---------------//

//  sequelize.sync({alter : true}).then(()=>{

//     return Consumer.findOne({where : {username : 'Vignesh'}});
 
//  }).then((data)=>{
//      consumer = data;
//      return Post.findOne(); // if change to findAll() remove the all post
//  }).then((data)=>{
//     post = data;
//     return consumer.removePost(post); // remove the post[it means remove the customer id]
//  }).then((data)=>{
//      console.log(data);
//  }).catch((err)=>{
//      console.log(err);
//  })

//--------- delete the all data in the post table ----------//

Consumer.hasMany(Post,{onDelete : 'CASCADE'});
Post.belongsTo(Consumer,{onDelete : 'CASCADE'});

sequelize.sync({alter : true}).then(()=>{
    return Consumer.findOne();
 }).then((data)=>{
    consumer = data;
    return Post.findOne();
 }).then((data)=>{
    post = data;
    post.setConsumer(consumer);
 }).catch((err)=>{
     console.log(err);
 })