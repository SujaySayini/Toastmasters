
import React from 'react'
import Search from './Search'
//import {Link} from 'react-router-dom'
import './ErrorPage.css';




function ErrorPage(props) {
  return (
    <div className='page'>
        <div className='container'>
            <div className='searchResult'>
            OOps.. Result is not found
            </div>
           
        </div>
       
    </div>
  )
}

export default ErrorPage
////<a class="btn btn-primary" href = "#" onClick={() =>{props.swap('Search')}}>Go back to Search Page</a> 