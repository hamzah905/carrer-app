import React from "react";
import Logo from "../.././Logo.png";

const JobDetail = () => {
return(
    <div>
      <div className="custom-header">
          <div className="custom-logo">   
              <img src={Logo} className="App-logo" alt="logo" />
                  <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>HOME</h2>
          </div>
      </div>
      <br></br>
      <p style={{marginLeft: '2%', paddingTop: '4px'}}>Welcome to Home page.</p>
    </div>
);
}

export default JobDetail;