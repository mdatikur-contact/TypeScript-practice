interface IuserFormatter {
    formatUser: () =>string
}
class User implements IuserFormatter{ 
    constructor(private fullName: string, private age: number){


    }
    
    formatUser= () => {
        return `name:${this.fullName},age: ${this.age}`
    };
    
}
let user = new User("Atikur", 25)
console.log(user.formatUser());