function person(name,age,course){
    this.name = name,
    this.age = age,
    this.course = course
}
var p1 = new person("Sharada", 30,"SSC");
var p2 = new person("srihari", 33 , "SSC");
console.log(p1);
console.log(p2);
console.log(p1.name);
console.log(p1.age);
console.log(p1.course);
console.log(p2.name);
console.log(p2.age);
console.log(p2.course);