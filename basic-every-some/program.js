function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        if (submittedUsers.every((su) => goodUsers.some(gu => gu.id === su.id))) {
            return submittedUsers;
        }
    };
}

module.exports = checkUsersValid