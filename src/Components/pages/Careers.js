import React from "react";
import Logo from "../.././Logo.png";

const JobDetail = () => {
return(
    <div>
      <div className='logo-with-title'>
        <img src={Logo} className="App-logo" alt="logo" />
        <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>Home Page</h2>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <p>Welcome to Careers page.</p>
    </div>
);
}

export default JobDetail;