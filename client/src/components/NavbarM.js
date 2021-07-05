import React from 'react';
import {Link} from 'react-router-dom';

function NavbarM(){
    return (
        <React.Fragment>
        <nav style={{background:"lightblue",height:"45px",textAlign:'center',display:"block"}}>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/">Home</Link>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/posts">Posts</Link>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/posts/id/comments">Posts Id</Link>
        </nav>
        </React.Fragment>
    );
}

export default NavbarM;
