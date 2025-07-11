import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  postSearch(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search);
    this.setState({search:""})
  }
  render() {
    return (
     
    <>

     <nav className="navbar navbar-expand-lg navbar-light bg-light  background sticky-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/">NewsApp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/all">all</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/politics">politics</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/crime">crime</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/science">science</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/technology">technology</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/entertainment">entertainment</NavLink></li>
        <li className="nav-item"> <NavLink className="nav-link text-light" to="/sports">sports</NavLink></li>
      
        <li className="nav-item dropdown">
          <NavLink className="nav-link text-light dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            other
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/cricket">cricket</NavLink></li>
            <li><NavLink className="dropdown-item" to="/ipl">ipl</NavLink></li>
            <li><NavLink className="dropdown-item" to="/economic ">economic </NavLink></li>
            <li><NavLink className="dropdown-item" to="/india">india</NavLink></li>
            <li><NavLink className="dropdown-item" to="/jokes">jokes</NavLink></li>
         
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link text-light dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Language
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" onClick={()=>this.props.changeLang("hi") } >hindi</NavLink></li>
            <li><NavLink className="dropdown-item" onClick={()=>this.props.changeLang("en")}>english</NavLink></li>
           
         
          </ul>
        </li>
        
        </ul>
      <form className="d-flex" onSubmit={(e)=>this.postSearch(e)}>
        <input className="form-control me-2" onChange={(e)=>this.setState({search:e.target.value})} value={this.state.search}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     </>
    )
  }
}

