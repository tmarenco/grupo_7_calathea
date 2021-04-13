module.exports = (sequelize, dataTypes) => {
    const alias = "CategorieUser";
    const columns = {
        id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },

        description: {
            type: dataTypes.STRING(45),

        }
    };
    const config = {
        tableName: "categories_user",
        timestamps: false
    };

    const CategorieUser = sequelize.define(alias, columns, config);
    
    CategorieUser.associate = models => {
        CategorieUser.hasMany(models.Users, { 
           as: "Users", 
           foreignKey: "id_category" 
        });
    }



    return CategorieUser;
};