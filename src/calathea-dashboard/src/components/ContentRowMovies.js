import React from 'react';
import SmallCard from './SmallCard';




function ContentRowTop(props){

    let productInDataBase = {
        color:   "primary",
        titulo: "Productos en base de datos",
        valor: props.products_count,
        icono: "fas fa-spa",
    }
    
    let amountUser ={
        color:   "success",
        titulo: "Usuarios en base de datos",
        valor: props.users_count,
        icono: "fas fa-user",
    }
    
    let categories = {
        color:   "warning",
        titulo: "Categorías de productos en base de datos",
        valor: Object.keys(props.product_categories_count).length,
        icono: "fas fa-columns",
    }
    
    let cardProps = [productInDataBase,amountUser,categories];

    
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;