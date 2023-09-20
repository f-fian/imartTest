import Sequelize,{DataTypes} from 'sequelize';


const sequelize = new Sequelize(
  'imart',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres', // Change the dialect to 'postgres'
  }
);

const Employee = sequelize.define('employee', {
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





