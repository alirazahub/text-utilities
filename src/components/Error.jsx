import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

function Error() {

  const location = useLocation();
  return (
    <div className="container">

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <Link to="/"> Home </Link>
    <li className="breadcrumb-item "> {location.pathname} </li>
    
  </ol>
</nav>
<div className='display-1 notFound text-center'>Not Found! 404</div>
<Link to='/' className='btn btn-outline-primary' >Go Back to HOME PAGE</Link>
    </div>
  )
}

export default Error;