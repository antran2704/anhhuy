export default function config() {
    const value =
    {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || '3306',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '123456',
        database: process.env.MYSQL_DATABASE || 'codedb',
        connectionLimit: 10
    };

    return { value };
}