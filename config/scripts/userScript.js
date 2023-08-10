export default function script() {
    const findByUserName = (username) => `SELECT * FROM User WHERE username = '${username}'`;

    return {
        findByUserName
    };
}