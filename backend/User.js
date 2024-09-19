
class User {
    #firstname
    #lastname
    constructor(firstname, lastname) {
        this.#firstname = firstname
        this.#lastname = lastname
    }

    getFirstname() {
        return this.#firstname
    }
    getLastname() {
        return this.#lastname
    }

    getFullname() {
        return `${this.#firstname} ${this.#lastname}`
    }
}

export default User