export class User {
    constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getFullname(){
      console.log(this.firstname + " " + this.lastname);
    }
  }