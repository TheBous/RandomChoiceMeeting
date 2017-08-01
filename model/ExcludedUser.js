/**
 * Created by thebous on 31/07/17.
 */

class ExcludedUser extends User{
    constructor(name, surname, exclusionDate){
        super(name, surname);
        this.exclusionDate = exclusionDate;
    }

    getExclusionDate(){
        return this.exclusionDate;
    }
}