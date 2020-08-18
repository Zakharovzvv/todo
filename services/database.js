const Sequelize=require('sequelize');
const keys=require('../keys')

const db=keys.DB_NAME;
const sequelize= new Sequelize(keys.DB_NAME,keys.DB_USER_NAME,keys.DB_PASSWORD,{
  host:'sql7.freesqldatabase.com',
  port:'3306',
  dialect:'mysql'
});

module.exports=sequelize;
