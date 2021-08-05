import React, { Component} from 'react'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Navigation from './Component/Navigation/Navigation'
import Logo from './Component/Logo/Logo'
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm'
import './App.css'
import Rank from './Component/Rank/Rank'

const particlesOptions = {
      number:{
        value:30,
        density:{
          enable:true,
          value_area:1000
        }
      } 
    }
const app= new Clarifai.App({
    apiKey:'f4ef3c9bb7244bf59ff7f2bffaa9ebe4'
})

class App extends Component  {
    constructor() {
        super()
        this.state = {
            input: '',
        }
    }
    onInputChange = (event)=> {
     console.log(event.target.value)
    }
    onButtonSubmit = ()=> {
        console.log('click')
        app.models.predict("",
         "https://samples.clarifai.com/face-det.jpg").then(
             function(response) {
               console.log(response)
             }, function(err) {
                 // there was an error
             })
    }
    render() {
        return(
            <div>
                <Particles className ='particles pa5' params={particlesOptions} />
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange}
                 onButtonSubmit={this.onButtonSubmit}/>
                 
            </div>
        )
    }
}

export default App