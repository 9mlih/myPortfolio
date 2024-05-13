import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from 'react';
//  import LoaderLogo from "../../components/Loader/LoaderLogo.js";
       

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: true,
    };
  }


  render() {
    return (
      <Redirect to="../home" />
    )
      
    
  }
}

export default Splash;
