import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';
function ContentWrapper(props){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    {props.products && <ContentRowTop products={props.products} users_count = {props.users_count} product_categories_count ={props.product_categories_count} products_count = {props.products_count}/>}
                    {props.products && <Movie products={props.products}/>}
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;