import connectionPool from '../../../config/dbConnection.js';
import userScript from '../../../config/scripts/userScript.js';

export default function userRepository() {
    const findByUserName = (value) => {
        return connectionPool()
            .promise()
            .query(userScript().findByUserName(value))
            .then(([rows]) => {
                connectionPool().end();
                return rows;
            }).catch((err) => next(err));
    }

    return {
        findByUserName
    };
}
