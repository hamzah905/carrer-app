import React from "react";
import axios from 'axios';
import { Button } from 'antd';
// import {baseURL} from "../.././utils";

class LinkedinButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isAuthorized: false,
          firstName: null,
          lastName: null,
          headline: null,
          profileURL: null,
          pictureURL: null,
          location: null,
          positions: null,
          summary: null
        };
      }
    
      componentDidMount() {
        window.addEventListener('message', this.handlePostMessage);
      }
    
      handlePostMessage = (event) => {
        if (event.data.type === "profile") {
          this.updateProfile(event.data.profile);
        //   Alert.success(`Login successful: ${event.data.profile.localizedFirstName}`,{position:'top'});
        }
      };
    
      updateProfile = (profile) => {
        console.log(profile)
          this.setState({
            isAuthorized: true,
            firstName: profile.localizedFirstName,
            lastName: profile.localizedLastName,
            headline: profile.headline.localized[`${profile.headline.preferredLocale.language}_${profile.headline.preferredLocale.country}`],
            profileUrl: `https://www.linkedin.com/in/${profile.vanityName}`,
            summary: profile.summary.localized[`${profile.summary.preferredLocale.language}_${profile.summary.preferredLocale.country}`].rawText
          })
      }
    
      requestProfile = () => {
        // const url = this.props.url_param
        // const job_id = this.props.job_id
        // var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77sonxvucgwcn5&redirect_uri=https://careers-shopify-app.now.sh/jobs/${parseInt(job_id)}/apply?url=${url}&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77sonxvucgwcn5&redirect_uri=http%3A%2F%2F64.225.30.37%2Fjobs%2F2%2Fapply&scope=r_liteprofile%20r_emailaddress%20r_basicprofile`
        axios.get(`${oauthUrl}`)
        .then(res => {
        })
        var width = 450,
          height = 730,
          left = window.screen.width / 2 - width / 2,
          top = window.screen.height / 2 - height / 2;
    
        window.open(
          oauthUrl,
          "Linkedin",
          "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
            width +
            ", height=" +
            height +
            ", top=" +
            top +
            ", left=" +
            left
        );
      };

    render() {
        return( 
            <Button type="primary primary-btnn" className="apply-btn-linkedin" 
            onClick={this.requestProfile}>APPLY via LINKEDIN
            {/* <Link to={`/jobs/${parseInt(this.props.match.params.job_id)}/apply`} >APPLY via LINKEDIN</Link> */}
            </Button>
        );
    }
    };
  
export default LinkedinButton;