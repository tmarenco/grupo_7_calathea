import React from 'react';

import MovieList from './MovieList';

function Movie(props){

	const products = props.products
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Productos en base de datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tbody>
										{
											products.map(product => {
												return(
													<tr>
														<td>{product.id}</td>
														<td>{product.name}</td>
														<td>{product.description}</td>
														<td>{product.price}</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;