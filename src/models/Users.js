const fs = require('fs');

const Users = {
    // fileName nos trae el JSON de usuarios
    fileName: './data/users.json',

    // getData lee el JSON de usuario y lo convierne en un array
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

  // findAll funcion que trae a todos los usuarios ya convertido en un array, si parecido a getData pero a futuro se usara esta funcion
    findAll: function(){
        return this.getData();
    },

    // findByPk funcion que encuntra por id a un usuario

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(User => User.identificador === id);
        return userFound;
    },

    //findByField funcion que encuentra a un usuario por alguno de sus campos ( nombre, email)

    findByField: function(field , text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(User => User[field] === text);
        return userFound;

    },
    // generateID funcion que al ultimo id de la lista le suma 1, asi incremente el id 
    generateID: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        return lastUser.identificador +1;
},
    // create funcion que crea un usuario nuevo con su respectivo id(genrateId)
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            identificador: this.generateID(),
            ...userData}
            
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
        
},

// delete funcion que elimina un usuario. lo que hace la funcion es filtar el usuario a eliminar y retorna un nuevo array con todos los usuario menos el filtrado(eliminado)
    delete : function (identificador) {
        let allUsers = this.findAll();
        let finalUser = allUsers.filter(oneUser => oneUser.identificador !== identificador);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;

        
    }

}
// exportamos el modulo

module.exports = Users


//pruebas:

//console.log(Users.delete(7))
//console.log(Users.create({nombre: "iru", email: "login.succes"}))