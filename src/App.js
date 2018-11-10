import React, { Component } from 'react';
import './App.css';
import BodyContainer from './containers/BodyContainer';
import HeadContainer from './containers/HeadContainer';
import MapContainer from './containers/MapContainer';


import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
  }
  
  componentDidMount() {
    const client = new ApolloClient({
      uri: 'http://api.kittyhawk.io/graphql?token=HWm0tPtem7oY2xJ8MBhPn7RpTTpXCaZF'
    });
  
    client
      .query({
      query: gql`
      {
        account {
          name
          aircraft {
            manufacturer 
            model
            flights {
              duration
            }
          }
          locations{
            name
          }
          flights {
            duration
          }
          owner {
            last_name
            first_name
            email
            flights {
              id
              notes
            }
            
          }
        }
      }
    `
      })
    .then(result =>{
      console.log(result.data)
      this.setState({users:result.data})
    
    });
  }

  render() {
    return (
      <div className="App">
      <div className="head__container"> <HeadContainer/> </div>
      <div className="body__container"> 
      <Route exact path="/" render={() => (
        <div >
          <h1>Welcome to Kitty Hawk </h1>
          <Link to="/users" >Get your Info!</Link>
      </div>
      )} />
      <Route exact path="/users" render={() => (
        <BodyContainer users={this.state.users}/>
      )} />
      <Route exact path="/map" render={() => (
        <MapContainer locations={this.state.locations}/>
      )} />
      
      </div>
      </div>
    );
  }
}

export default App;

