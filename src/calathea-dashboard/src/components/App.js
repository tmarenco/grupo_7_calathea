import React, {Component} from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';


const apiUsers ="http://localhost:3000/api/users"
const apiProducts = "http://localhost:3000/api/products"


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users: null,
      users_count: null,
      products_count: null,
      product_categories_count: null,
      products: null
    }
  }

  componentDidMount(){
    Promise.all([
      fetch(apiUsers).then(res=>res.json()),
      fetch(apiProducts).then(res=>res.json())
    ]).then(results=>{
      this.setState({
        users_count: results[0].count,
        users: results[0].users,
        products_count: results[1].count,
        product_categories_count: results[1].countByCategory,
        products: results[1].products
      })
    })    
  }

  render(){

    const {users, users_count, products_count, product_categories_count, products} = this.state;

    return(
      <React.Fragment>
      <div id="wrapper">
        <SideBar/>
        <ContentWrapper users_count = {users_count} users = {users} products_count = {products_count} product_categories_count ={product_categories_count} products={products}/>
      </div>
  </React.Fragment>
    )
  }
}


