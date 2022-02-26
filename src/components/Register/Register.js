import React from 'react';

const Register = ({OnRouteChange}) => {
    return(
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-4 mw6 center">
    <main className="pa4 black-80">
        <div className="br3 measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="tex" name="name"  id="name" />
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
            </fieldset>
            <div className="">
            <input 
                onClick={() => OnRouteChange('home')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Register" 
            />
            </div>
        </div>
    </main>
    </article>
    )
}

export default Register;