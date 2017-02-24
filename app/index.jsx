import React from "react";
import ReactDOM from "react-dom";
import styles from './styles/main';
import MuiThemeProvider from 'MaterialUI/styles/MuiThemeProvider';
import './fonts/index.css';
import MainLayout from './components/layouts/main-layout';
import RecipeList from './components/views/recipe-list';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';

class Dummy extends React.Component {

    render() {
        return <div>HELLLO</div>
        
        
    }
}

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
          <Route path='/list' component={Dummy} />
        </Route>
        <Route path='/list' component={Dummy}/>

        
    </Router>
  </MuiThemeProvider>
    
), document.getElementById('root')
);  
