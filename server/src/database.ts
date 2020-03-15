import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.getConnection((err, connection) => {
//     if (err) throw err; connection.release();
//     console.log('DB is connected');

     if (err) {
       console.log('Error in database connection: ', err.message, err.stack);
     } else {
       connection.release();
       console.log('DB is connected');
     }
});

export default pool;
