import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './classcomponent/Footer'
import Navbar from './classcomponent/Navbar'
import HomePage  from './page/HomePage'

export default class App extends Component {
constructor() {
    super();
    this.state = {
      language:"hi",
      search:""
    };
    this.changeLang = this.changeLang.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  changeLang(input) {
    this.setState({ language: input });
  }
  changeSearch(input) {
    this.setState({ search: input });
  }
  render(){
  return (
    <>
    
    <BrowserRouter>
    <Navbar changeLang={this.changeLang} changeSearch={this.changeSearch}/>
    <Routes>
      <Route path='/'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'All'/>}></Route>
      <Route path='/all'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'all'/>}></Route>
      <Route path='/politics'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'politics'/>}></Route>
      <Route path='/crime'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'crime'/>}></Route>
      <Route path='/science'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'science'/>}></Route>
      <Route path='/entertainment'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'entertainment'/>}></Route>
      <Route path='/technology'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'technology'/>}></Route>
      <Route path='/cricket'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'cricket'/>}></Route>
      <Route path='/ipl'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'ipl'/>}></Route>
      <Route path='/economic'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'economic'/>}></Route>
      <Route path='/india'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'india'/>}></Route>
      <Route path='/jokes'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'jokes'/>}></Route>
      <Route path='/sports'  element={<HomePage search={this.state.search} language={this.state.language}  q = 'sports'/>}></Route>
    
     
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}
}
