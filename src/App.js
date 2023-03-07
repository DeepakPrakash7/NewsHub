import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
  import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=6;

  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})

    };
  
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
        <Route exact path='/' element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} q='india' category='general' />}></Route>

          <Route exact path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} q='india' category='business' />}></Route>

          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize}q='india' category='entertainment' />}></Route>

          <Route exact path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} q='india' category='health' />}></Route>

          <Route exact path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} q='india' category='science' />}></Route>

          <Route exact path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} q='india' category='sports' />}></Route>

          <Route exact path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} q='india' category='technology' />}></Route>

        </Routes>

        </Router>
      </div>
    )
  }
}


