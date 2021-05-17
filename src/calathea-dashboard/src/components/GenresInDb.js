import React from 'react';
import Genre  from './Genre';


function GenresInDb(props){

    let genres = [
        {genre: 'Planta interior: ' + props.product_categories_count.planta_interior},
        {genre: 'Planta exterior: ' + props.product_categories_count.planta_exterior},
        {genre: 'Accesorios: ' + props.product_categories_count.accesorios},
        {genre: 'Fertilizantes: ' + props.product_categories_count.fertilizantes},
        {genre: 'Macetas: ' + props.product_categories_count.macetas},
        {genre: 'Deco: ' + props.product_categories_count.deco}
    ]

    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Cantidad de productos por categoría</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default GenresInDb;