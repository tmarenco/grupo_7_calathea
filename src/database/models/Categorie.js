module.exports = (sequelize, dataTypes) => {
    const alias = "Categorie"
    const columns = {
        id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },

        name : {
            type: dataTypes.STRING(45),

        },

      
    }
    const config = {
        tableName: "categories",
        
    }

    const Categorie = sequelize.define(alias, columns, config);
    
    Categorie.associate = models => {
        Categorie.hasMany(models.Product, { 
           as: "Product", 
           foreignKey: "id_categories" 
   })
   }



    return Categorie;
    }