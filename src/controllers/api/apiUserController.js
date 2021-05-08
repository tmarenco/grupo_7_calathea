const db = require("../../database/models")

module.exports = {
    getUsers(req,res){
        db.Users.findAll({
            attributes: ["id", "first_name", "last_name", "email"]
        })
            .then(users => {
                res.json({
                    count: users.length,
                    users: users
                })
            })
    },
    getUserById(req,res){
        const id = req.params.id
        db.Users.findByPk(id)
            .then(user =>{
                res.json({
                    id: user.id,
                    name: user.first_name + " " + user.last_name,
                    phone: user.phone,
                    email: user.email,
                    image: "http://localhost:3000/images/user-images/" + user.image
                })
            })
            .catch(error=>{
                res.json({
                    error
                })
            })
    }
    
}       