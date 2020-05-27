import React, { Component } from 'react';
import Filter from '../components/Filter'
import DisplayItems from '../components/DisplayItems'
import Sort from '../components/Sort'
import SearchForm from '../components/SearchForm.js'


export default class Home extends Component{
    state={
        showFilter:false,
        items: [],
        itemShow: []
      }
     
    toggleFilter=()=>{
        this.setState({
         showFilter:!this.state.showFilter
         })
    }
      componentDidMount(){
      fetch('http://localhost:3000/items')
      .then(res => res.json)
      .then(data =>{
        this.setState({items: data})})
      }
      handleSearch = (event) =>{
        let searchValue = event.target.value
        let values = this.state.items.filter(item => item.name.includes('searchValue'))
        this.setState({itemShow:values})
      }

render(){
    return(
        <div className = "home">
        <div className={this.state.showFilter?"change":"filterContainer"} onClick={this.toggleFilter}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
            {this.state.showFilter? <Filter />:""}
              <h1> Hi, this is home!</h1>
              <SearchForm onSearch ={this.handleSearch}/>
        
        </div>
    )
}    
}