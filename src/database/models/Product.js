module.exports = (sequelize, dataTypes) => {
    const alias = "Product"
    const columns = {
        id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },

        name:{
                type: dataTypes.STRING(50)
            
            },
        description : {
            type: dataTypes.STRING(150)

        },
        
        image: {
            type: dataTypes.STRING(45)
            },

        id_categories : {
            type: dataTypes.INTEGER 
        },


        price: {
            type: dataTypes.INTEGER
            },
            
        id_offer:{
                type: dataTypes.INTEGER
            },


        stock : {
            type: dataTypes.INTEGER
        },


        order : {
            type: dataTypes.INTEGER 
        },

        

    }
    const config = {
        tableName: "products",
        paranoid : true
    }

    const Product = sequelize.define(alias, columns, config);

    // Foreignkey con tabla categoria

    Product.associate = models => {
         Product.belongsTo(models.Categorie, { // belogsTo porque la tabla productos es la que tiene la FK de categorie
            as: "categorie", // as es un nombre que le ponemos a la relacion
            foreignKey: "id_categories" // nombre de la columna que es foreignkey en la tabla products
        })
        Product.belongsTo(models.Offer,{
            as: "offers",
            foreignKey: "id_offer"
        })
    }


    return Product;
}