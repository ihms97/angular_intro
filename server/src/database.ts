import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.getConnection((err, connection) => {
//     if (err) throw err; connection.release();
//     console.log('DB is connected');

     if (err) {
       console.log('Error al establecer conexión con la base de datos: ', err.message, err.stack);
     } else {
       connection.release();
       console.log('La base de datos ha establecido conexión exitosamente.');
     }
});

export default pool;
