import React from 'react';
import './signin_signup_page.style.scss'

import SignIn from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';



const Signin_Signup=()=>(
    <div className="sign-in-and-sign-up">

        <SignIn/>
        <Signup/>

    </div>
)


export default Signin_Signup