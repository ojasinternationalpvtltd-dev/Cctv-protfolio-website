import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host:     process.env.DB_HOST || 'r40.merodns.com',
  port:     Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'ojasinte_clients_db',
  user:     process.env.DB_USER || 'ojasinte_clientuser',
  password: process.env.DB_PASS || 'dB?@C@RzlpS$eN2*',
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;