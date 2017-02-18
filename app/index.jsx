import React from "react";
import ReactDOM from "react-dom";
import styles from './styles/main';
import MuiThemeProvider from 'MaterialUI/styles/MuiThemeProvider';
import './fonts/index.css';
import MainLayout from './components/layouts/main-layout'

const App = () => {
  return(
    <MuiThemeProvider>
      <MainLayout />
    </MuiThemeProvider>
  )
};
 
ReactDOM.render(
  <App />,
  document.querySelector("#container")
);  
