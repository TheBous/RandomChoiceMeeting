/**
 * Created by thebous on 31/07/17.
 */
class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    setName(name) {
        this.name = name;
    }

    setSurname(surname) {
        this.surname = surname;
    }
}
