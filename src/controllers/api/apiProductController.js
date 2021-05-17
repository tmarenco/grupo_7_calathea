const db = require("../../database/models")

module.exports = {
    getProducts(req,res){
        Promise.all([
            db.Product.findAll({
                attributes: ["id", "name", "description", "image", "price"]
            }, {
                include: ["categorie", "offers"],
                raw: true,
                nest: true
            }),
            db.Offer.findAll(),
            db.Categorie.findAll(),
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 1
                }
            }),
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 2
                }
            }),
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 3
                }
            }),
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 4
                }
            }),
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 5
                }
            }),            
            db.Product.findAll({
                include: [
                    { association: "categorie"}
                    ],
                where: {
                    id_categories: 6
                }
            })
        ])
        .then (resultPromises =>{
            const products = resultPromises[0];
            const offer = resultPromises[1];
            const categorie = resultPromises[2];
            const pInterior = resultPromises[3];
            const pExterior = resultPromises[4];
            const accesorios = resultPromises[5];
            const fertilizantes = resultPromises[6];
            const macetas = resultPromises[7];
            const deco = resultPromises[8];


            res.json({
                count: products.length,
                countByCategory: {
                    planta_interior: pInterior.length,
                    planta_exterior: pExterior.length,
                    accesorios: accesorios.length,
                    fertilizantes: fertilizantes.length,
                    macetas: macetas.length,
                    deco: deco.length
                },
                products: products
            })
        })
    },
    getProductById(req,res){
        const id = req.params.id
        Promise.all([
        db.Product.findByPk(id, {
            include: ["categorie", "offers"],
            raw: true,
            nest: true
        }
        ),
        db.Categorie.findAll(),
        db.Offer.findAll()
        ])
        .then(resultPromises =>{
            const product = resultPromises[0];
            const categorie = resultPromises[1];
            const offer = resultPromises[2];

            res.json({
                id: product.id,
                name: product.name,
                description: product.description,
                image: "http://localhost:3000/images/productos/" + product.image,
                id_categories: product.id_categories,
                price: product.price,
                id_offer: product.id_offer,
                stock: product.stock,
                categorie: [product.categorie.name],
                offer: [product.offers.description]
            })
        })
        .catch(error=>{
            res.json({
                error
            })
        })
    }
    
}       
