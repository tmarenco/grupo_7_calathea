import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';


function ContentRowTop(props){



	const lastProduct = props.products.length - 1
	const lastProductImage = "http://localhost:3000/images/productos/" + props.products[lastProduct].image

	// const apiLastProduct = "http://localhost:3000/api/products/" + props.products.length
	// let lastProductFromApi = 

	// fetch(apiLastProduct)
	// .then(response => response.json())
	// .then(producto => {
	// 	lastProductFromApi = producto
	// 	console.log(lastProductFromApi)
	// })


	


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard Calathea</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies products={props.products} users_count = {props.users_count} product_categories_count ={props.product_categories_count} products_count = {props.products_count}/>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado a la base de datos</h5>
								</div>
								<div className="card-body">
									<h5 className="m-0 font-weight-bold text-gray-800">{props.products[lastProduct].name}</h5>
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProductImage} alt="Foto último producto"/>
									</div>
									<p>{props.products[lastProduct].description}</p>
									<a className="btn btn-danger botonDetalle" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb product_categories_count ={props.product_categories_count}/>

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;