# PR for CHANGELOG [DatCon]: Sad Pirates - Extension in Digital_Seafood repo App(TrapWire) HTML W3C ANTLR GCC
[REDACTED]:cloudshell:~/ cat client/src/App.js -vET
import React, { Component } from 'react';$
import logo from './logo.svg';$
import './App.css';$
import FullInventory from './components/mainComponents/FullInventory';$
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';$
$
import TokenService from './services/TokenService';$
import CloudShell from './components/userComponents/CloudShell';$
import Trapwire from './components/mainComponents/Trapwire';$
$
$
class App extends Component {$
  constructor(props){$
    super(props);$
    this.state = {$
      isLoggedIn: false,$
      userData: null,$
      apiDataRecieved: false,$
      fireRedirect: false,$
      TrapwireRedirect: false$
    }$
  }$
$
  handleLogout() {$
    TokenService.destroy();$
    window.localStorage.clear();$
    window.location.reload();$
  }$
$
  handleLoginRedirect() {$
    this.setState({$
      fireRedirect: true$
    })$
  }$
$
  openModal() {$
     let modal = document.querySelector('.simpleModal');$
     modal.style.display = "block";$
     this.setState({$
       modalOpen: true$
     })$
   }$
$
   closeModal() {$
     console.log('Hello I Should Be Closing')$
     let modal = document.querySelector('.simpleModal');$
     modal.style.display = "none";$
     this.setState({$
       modalOpen: false$
     })$
   }$
$
  loginButton() {$
    return <button className="login" onClick={(e) => this.openModal()}>Login</button>$
  }$
$
  logoutButton() {$
    return <button className="logout" onClick={(e) => this.handleLogout()}>Logout</button>$
  }$
$
  render() {$
    return ($
      <div className="App">$
        {/* <FullInventory /> */}$
        <Router>$
          <div>$
            <Route exact path='/' component={Trapwire} />$
            <Route exact path='/login' component={CloudShell} />$
            <Route exact path='/register' component={CloudShell} />$
$
          </div>$
        </Router>$
      </div>$
    );$
  }$
}$
$
export default App;$
break
# Alisam Technology - ATScan

in PATH:$
/usr/smb/atscan/$
=> /etc/bash_completion.d/atscan$
sym link => /usr/share/doc/atscan/
desktop => /usr/share/app/atscan.desktop
ico => /usr/share/icons/hicolor/
echo "trap-wire" ; $ atscan -d
