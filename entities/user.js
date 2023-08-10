export default function user(
    id,
    username,
    password,
    email,
    phone,
    firstname,
    lastname,
    createdat
) {
    return {
        getId: () => id,
        getUserName: () => username,
        getPassword: () => password,
        getEmail: () => email,
        getPhone: () => phone,
        getFirstName: () => firstname,
        getLastName: () => lastname,
        getFullName: () => `${firstname} ${lastname}`,
        getCreatedAt: () => createdat
    };
}
