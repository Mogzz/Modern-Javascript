function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

}

const morgan = new Person("morgan");

console.log(morgan);

Person.prototype = {

  getFullName: function() {
    return this.firstname + " " + this.lastname;
  },
  calcAge: function() {
    const diff = Date.now() - this.birthday.getTime();
    const age = new Date(diff);
    return age.getUTCFullYear - 1970;
  }
}

//using classes to construct objects
class Person {
  //construct the object
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  //add methods to prototype
  greeting() {
    return 'Hello there ${this.firstname} ${this.lastname}';
  }
  static addNumbers(x, y) { //use static methods if no object data is being used
    return x + y;
  }
}

const morgan = new Person('Morgan', 'Parry');

class Customer extends Person { //creating a sub object off the main one with extends
  constructor(firstname, lastname, phone, membership) {
    super(firstname, lastname);
    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Doe', 555 - 555 - 5555, "Standard");