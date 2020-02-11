import React from "react";
import axios from 'axios';

import {
    Link
  } from "react-router-dom";
import { Button } from 'antd';
import Logo from "../.././Logo.png";

class Jobs extends React.Component {
    state = {
      jobs: []
    }
  
    componentDidMount() {
      axios.get(`https://shoppify-career.herokuapp.com/jobs?url=messanger-store.myshopify.com`)
        .then(res => {
          var jobs = res.data.data;
          this.setState({ jobs });
        })
    }

    render() {
        var { jobs } = this.state;
        console.log(jobs);
        return(
        <div>
        <div className='logo-with-title'>
            <img src={Logo} className="App-logo" alt="logo" />
            <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>JOBS</h2>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
       { jobs.map((job, index)=>
        <div key = {index}>
            <div className="row-job">

                <div className="job-div">
                    <div className="description-div">
                        <h3 className="job-heading"><Link to={`/jobs/${job.id}`} style={{ color: "black"}}>{job.title}</Link></h3>
                        <p className="job-location">{job.description}</p>
                    </div>

                    <div className="button-div">
                        <Button type="primary primary-btnn" ><Link to={`/apply_job/${job.id}`} >APPLY</Link></Button>
                    </div>

                </div>
            </div>

            <hr style={{ borderTop: '1px rgba(0, 0, 0, 0.1)', width: '70%'  }}></hr>

        </div>
       )}
        </div>
    );
    }
}
export default Jobs;