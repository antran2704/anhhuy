import mySql from 'mysql2';
import config from './config.js';

export default function connectionPool() {
    const pool = mySql.createPool(config().value);
    return pool;
}
