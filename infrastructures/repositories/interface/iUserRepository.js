export default function iUserRepository(repository) {
    const findByUserName = (params) => repository.findByUserName(params);

    return {
        findByUserName
    };
}
