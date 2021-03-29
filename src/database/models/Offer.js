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
    return Offer;
    }