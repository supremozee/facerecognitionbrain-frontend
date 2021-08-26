import React, { Component} from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailSignIn: '',
            passwordSignIn: ''
        }
    }
    onEmailSignIn = (event)=> {
        this.setState({emailSignIn: event.target.value})
    }
    onPasswordSignIn = (event)=> {
        this.setState({passwordSignIn: event.target.value})
    }
    onSubmitSignIn = ()=> {
        fetch('http://localhost:3000/signin', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.emailSignIn,
                password: this.state.passwordSignIn
            })
        }).then(response=> response.json())
        .then(data => {
            if (data === 'success') {
                this.props.onRouterChange('home')
            }
        })
        
    }
    render() {
        const { onRouterChange} = this.props
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100  w-50-m w-25-l shadow-5 mw6 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input onChange= {this.onEmailSignIn} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input onChange = {this.onPasswordSignIn}className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                             onClick={this.onSubmitSignIn } 
                              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouterChange('register')} href="#0"
                             className="f6 link dim black db">Register</p>
                        </div>
                    </form>
                </main>
            </article>

        )

    }
}



export default SignIn