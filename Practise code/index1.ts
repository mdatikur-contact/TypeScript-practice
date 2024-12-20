// function signature
let userInfo1: () =>void
let userInfo2: (name: string) =>void
let userInfo3: (name: string, age:number) =>string
 userInfo1 = () =>{
    console.log("Atikur is 25 years");
}
userInfo2 = (name: string) =>{
    console.log(`${name} is 25 years`);
 };
 userInfo3 = (name: string, age:number) =>{
    return(`${name} is ${age} years`);
 };
userInfo1();
userInfo2("Atik");
console.log(userInfo3("Atik", 25));
