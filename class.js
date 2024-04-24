
// syntactic sugar

class Instructor{
    name;
    designtion = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}
const aamir = new Instructor('amir', 'dhaka');
console.log(aamir);