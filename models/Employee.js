import Sequelize,{DataTypes} from 'sequelize';
import dotenv from "dotenv"


dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        connectTimeout:100000
    }
  }
);

const Employee = sequelize.define('imart_employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

sequelize.sync({force:false}).then(() => {
    console.log('table is Created');
}).catch((error) => {
    console.error('Unable to create table database: ', error);
});



export default Employee





