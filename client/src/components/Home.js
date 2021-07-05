import React from 'react'
import background from '../image/background.jpg';
import Footer from './Footer';
function Home(){
    return (
        <React.Fragment>
        
        <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat' , backgroundSize: 'cover'}}>
        <div>
        <div>
            <p style={{textAlign: "center",fontSize: "45px"}}>WELCOME EVERYONE</p>
            <h5 style={{textAlign: "center", fontSize: "30px"}}>Happy to see you</h5>
        </div>
        </div>
        </div>
        <Footer />
        </React.Fragment>
        
    )
}

export default Home;
