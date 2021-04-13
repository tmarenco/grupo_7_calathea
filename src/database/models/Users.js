module.exports = (sequelize, dataTypes) => {
    const alias = "Users";
    const columns = {
        id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },

        first_name:{
                type: dataTypes.STRING(20)
            
            },
        last_name : {
            type: dataTypes.STRING(20)

        },
        
        phone: {
            type: dataTypes.INTEGER
            },

        email: {
            type: dataTypes.STRING(30) 
        },

        image: {
            type: dataTypes.STRING(45)
            },
            
        id_category:{
                type: dataTypes.INTEGER
            },

        password : {
            type: dataTypes.STRING(20)
        },

        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
    };

    const config = {
        tableName: "users",
        paranoid : true
    };

    const Users = sequelize.define(alias, columns, config);

    Users.associate = models => {
        Users.belongsTo(models.CategorieUser, { // belogsTo porque la tabla productos es la que tiene la FK de categorie
           as: "CategorieUser", // as es un nombre que le ponemos a la relacion
           foreignKey: "id_category" // nombre de la columna que es foreignkey en la tabla products
        });
    
    };
    return Users
}