const fs = require('fs');

const Users = {
    
    fileName: '../data/users.json',
    
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    
    findAll: function(){
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(User => User.identificador === id);
        return userFound;
    },
    generateID: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        return lastUser.identificador +1;
},
    create: function(userData){
        let allUsers = this.findAll();
        newUser = {
            identificador: this.generateID(),
            ...userData}
            
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;
        
}
}

console.log(Users.create({nombre: "iru", email: "login.succes"}))