class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
        this.luCoins=0;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has added coins and total coins: ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has removed coin and the coin left :${this.luCoins} coins`);
        return this;
    }


}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course){
       user.courses.pop(course);
       console.log(user);
   }
}


let user1 = new User('jeevan',20,'jeevan@gmail.com')
let user2 = new User('manoj',20,'manoj@gmail.com')
let user3 = new User('Anoynomous',25,"anoy@gmail.com")
let mod = new Moderator('Akshay',25,'akshay@gmail.com')
let admin = new Admin('Abhay',30,'abhay@gmail.com')

mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.removeCoins();

admin.addCourse(user1,"javascript")
admin.addCourse(user1,"python")
admin.deleteCourse(user1,"javascript")
admin.addCourse(user1,"Django")
admin.addCourse(user2,"Datascience")
admin.addCourse(user2,"c")
admin.deleteCourse(user2,"c")

