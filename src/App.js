import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const app = new Clarifai.App({
 apiKey: '96f590ed948648ea937b13471d0b4898'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      IsSignedIn: false,
    }
  }
  
  DisplayBox = (boxs) => {
    this.setState({box: boxs});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.DisplayBox(this.calculateface(response))
      .catch(err => console.log(err)))
    }

    calculateface = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = image.width;
      const height = image.height;
      return({
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      });
    }
  

    OnRouteChange = (rout) => {
      if(rout === 'signout'){
        this.setState({IsSignedIn: false})
      } else if(rout === 'home'){
        this.setState({IsSignedIn: true})
      }
      this.setState({route: rout})
    }
    
    render() {
    const {IsSignedIn, imageUrl, box} = this.state;
    return (
      <div className="App">
      
      <Particles
                id="tsparticles"
                options={{
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    }
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 35,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />  

        <Navigation IsSignedIn={IsSignedIn} OnRouteChange = {this.OnRouteChange}/>
        { (this.state.route === 'home')
          ?
                <div>
                  <Logo />
                  <Rank />
                  <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                  />
                  <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
            :
              (
                this.state.route === 'register'
                ? <Register OnRouteChange={this.OnRouteChange}/>
                : <SignIn OnRouteChange = {this.OnRouteChange}/>
              )
        } 
      </div>
    );
  }
}

export default App;
