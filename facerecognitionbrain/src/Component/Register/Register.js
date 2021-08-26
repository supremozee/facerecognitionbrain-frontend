import React, { Component} from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''

        }
    }
    onRegisterName =(event)=> {
        this.setState({registerName: event.target.value})
    }
    onRegisterEmail = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onRegisterPassword = (event)=> {
        this.setState({registerPassword: event.target.value})
    }
    onSubmitRegister = ()=> {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        }).then(res => res.json())
        .then(user=> {
            if (user) {
                this.props.loadUser(user)
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
                            <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">name</label>
                                <input onChange = {this.onRegisterName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="name" name="name" id="name" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Email</label>
                                <input onChange = {this.onRegisterEmail} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="Email" name="Email" id="Email" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input onChange = {this.onRegisterPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="Password" name="Password" id="Password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="Register" onClick={this.onSubmitRegister} />
                           <input className="b  ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="Sign In" onClick={() => onRouterChange('SignIn')} />
                        </div>
                    </form>
                </main>
            </article>
        )

    }
    
}
export default Register