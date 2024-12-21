//generic 
const printUserInfo1= <X,y>(userid: X, userAge:y ) =>{
    console.log(`user id ${userid}, age =${userAge}`);
}
printUserInfo1(true, 25)
printUserInfo1(1010,"25")
printUserInfo1("1010",25)