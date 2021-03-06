module.exports = (sequelize, dataTypes) => {
    const alias = "Offer"
    const columns = {
        id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },

        description : {
            type: dataTypes.STRING(10),

        },

      
    }
    const config = {
        tableName: "offer",
        
    }

    const Offer = sequelize.define(alias, columns, config);

    Offer.associate = models => {
        Offer.hasMany(models.Product, { 
           as: "offers", 
           foreignKey: "id_offer" 
   })
   }


    return Offer;
    }