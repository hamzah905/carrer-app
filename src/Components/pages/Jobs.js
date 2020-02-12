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
        <div className="container">
            <div className="custom-header">
                <div className="custom-logo">
                    <img src={Logo} className="App-logo" alt="logo" />
                    <h2>JOBS</h2>
                </div>
            </div>
        

       { jobs.map((job, index)=>
        <div key = {index}>
            <div className="row">
                <div className="custom-detail-section">
                    <div className="custom-job-detail">
                        <h3 className="custom-job-heading"><Link to={`/jobs/${job.id}`}>{job.title}</Link></h3>
                        <p className="custom-job-location">{job.description}</p>
                    </div>
                    <div className="custom-apply-btn">
                        <Button type="btn primary-btn" ><Link to={`/apply_job/${job.id}`} >APPLY</Link></Button>
                    </div>
                </div>
            </div>
        </div>
       )}
        </div>
    );
    }
}
export default Jobs;