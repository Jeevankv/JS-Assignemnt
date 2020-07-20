const student = {
    name:"Helsinki",
    age:24,
    project:{
        dicegame:"Two Player Dicegame using Javascript"
    }
}

const {name,age,project:{dicegame}} = student 
console.log(`Name:${name},  Age:${age},  Project :${dicegame}`)
