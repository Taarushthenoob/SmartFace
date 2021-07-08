import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
// import Footer from './components/Footer/Footer';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '135cffec10c843f796841d32891cf440',
});

const parameters = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  calculateFace = (bounds) => {
    const image = document.getElementById('inputImg');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: bounds.left_col * width,
      topRow: bounds.top_row * height,
      rightCol: width - bounds.right_col * width,
      bottomRow: height - bounds.bottom_row * height,
    };
  };

  displayBox = (data) => {
    console.log(data);
    this.setState({ box: data });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .initModel({
        id: Clarifai.FACE_DETECT_MODEL,
        version: '34ce21a40cc24b6b96ffee54aabff139',
      })
      .then((generalModel) => {
        return generalModel.predict(this.state.input);
      })
      .then((response) => {
        var concepts =
          response['outputs'][0]['data']['regions'][0]['data']['concepts'][0];
        var box =
          response['outputs'][0]['data']['regions'][0]['region_info'][
            'bounding_box'
          ];
        console.log(concepts);
        console.log(box);
        this.displayBox(this.calculateFace(box));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (dest) => {
    if (dest === 'home') this.setState({ isSignedIn: true });
    else this.setState({ isSignedIn: false });

    this.setState({ route: dest });
  };

  render() {
    return (
      <div className="App">
        <Particles className="form" params={parameters} />
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {this.state.route === 'home' ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition url={this.state.imageUrl} box={this.state.box} />{' '}
          </div>
        ) : this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
