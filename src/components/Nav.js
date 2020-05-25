import React from "react"
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    render(){
        return(
        <div>
            <div class="topnav">
            <Link class="active" to="/">Bassy Jobs</Link>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div class="topnav-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/jobs">Jobs</Link>
                {this.props.isLoggedIn === "true" ? <Link to="/profile">Profile</Link> : null}
                {this.props.isLoggedIn === "true" ?  null : <Link to="/sign-up">Sign Up</Link>}
                {this.props.isLoggedIn === "true" ? <Link onClick={this.props.logOut} to="/login"> Log Out</Link> : <Link to="/login">Log In</Link>}
                <div className="dropdown1">
                    <button className="dropbtn">For Employers
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                    <a href="#">Employer</a>
                    </div>
                </div>
                <div className="dropdown2">
                    <button className="dropbtn">For Job Seekers
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                    <a href="#">Job Seeker</a>
                    </div>
                </div>
            </div>
        </div>

        </div>
        ) 
    }
}

export default Nav


// import React from "react"
// import { Header} from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
// import {
//     Button,
//     Container,
//     Divider,
//     Grid,
//     Icon,
//     Image,
//     List,
//     Menu,
//     Responsive,
//     Segment,
//     Sidebar,
//     Visibility,
//   } from 'semantic-ui-react'

// class Nav extends React.Component {

//     render(){
//         return(
//         // <Menu pointing secondary>
//         //  <Fragment>
//         <div > 
//             <div className={`ui inverted blue menu navbar color`}>
//             <h2 className="ui header">
//                 <i className="blue icon"></i>
//                 <br/>
//                 <div className="content"> Bassy Jobs </div>
//                 <br /><br />
//             </h2>
//             <div className="item nav-bar" >
//                 <Link to="/">Home</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/about">About</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/jobs">Jobs</Link>
//             </div>
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link to="/profile">Profile</Link>
//             </div> 
//             :
//             null
//             }
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link onClick={this.props.logOut} to="/login">
//                 Log out
//             </Link>
//             </div>
//             :
//             <div className="item nav-bar">
//             <Link to="/login">Log In</Link>
//             </div>
//             }
//             </div>
//         </div>
//         ) 
//     }
// }

// export default Nav