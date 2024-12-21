// interface
interface IUser {
    id:number;
    name: string
    age: number;
}
let users:IUser []=[];

let user1: IUser={
    id: 1,
    name: "Atikur",
    age: 25
}
let user2:IUser ={
    id: 2,
    name: "Zannatul",
    age: 24
}
users.push(user1);
users.push(user2);
const printUserInfo =(user:{id:number, name: string, age: number})=>{
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`)

}
users.forEach(user =>printUserInfo(user));
