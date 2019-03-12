import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBook from './components/RecipeBook'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/styles/index.scss'

ReactDOM.render(
  <RecipeBook />,
  document.getElementById('root')
);