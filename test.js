
let array = [1,2,3,4,5,];
let [a,b,...r] = array;
console.log(r);


let person = {name:"han", age:30}
let {name} = person;
console.log(name);


let person2 = person;
let person3 = {...person};
let person4 = {...person, addr:'seoul'};
person.name='kim';
console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person==person2);
console.log(person==person3);





