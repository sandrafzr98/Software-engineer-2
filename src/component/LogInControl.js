import React from "react";
import { Carousel } from  'react-responsive-carousel';
import DemoCarousel from "./Carousel";
import '../styles/CO-H.css';
import Bienvenue from "./Bienvenue";
import Main from "./SignInUP";
import Banner from "./Banner";
import "../styles/Carousel.css"


class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  function UserGreeting(props) {
    return (<Main/>);
  }
  
  function GuestGreeting(props) {
    return (<div><Carousel/><Bienvenue/></div>);
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
      return(<div class="deco"> 
      <DemoCarousel/>
      <div class="banner">
      <Banner/>
      </div>
      <Bienvenue/></div>);
 
    }
     return(<div><Banner/><Main/></div>)
  }
  
  function LoginButton(props) {
    return (
      <button class="CO-H" onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button class="CO-H" onClick={props.onClick}>
        Logout
      </button>
    );
  }
export default LoginControl ;