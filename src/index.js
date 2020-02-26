import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
const API_KEY = "31227c99bbfe79e764f7bed240f26da4";


ReactDOM.render(<App/>,document.querySelector('.container'));


// https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=31227c99bbfe79e764f7bed240f26da4