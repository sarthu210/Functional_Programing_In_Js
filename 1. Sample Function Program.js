class Family{
  constructor(people,lastname)
  {
    this.people = people;
    this.lastName = lastname;
  }
  
  names()
  {
    return this.people.map(person => person.name + " " + this.lastName);
    
  }
}

const family = new Family([{name: 'Soham'} , {name: 'Sarthak'} ], 'Nande');

family.names();
