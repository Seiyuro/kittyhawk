import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { BrowserRouter } from "react-router-dom"

const client = new ApolloClient({
    uri: 'http://api.kittyhawk.io/graphql?token=HWm0tPtem7oY2xJ8MBhPn7RpTTpXCaZF&'
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
        locations{
          latitude
          longitude
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
  .then(result => console.log(result));


ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')
	)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
