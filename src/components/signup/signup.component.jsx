import React from 'react';

import "./signup.style.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import{auth, updateUserProfileDoc} from '../../firebase/firebase.utils';

class Signup extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} =this.state;
        
        

        if(password !== confirmPassword){
            alert('password does not match');
            return;
        }

        
        try {
            const {user}= await auth.createUserWithEmailAndPassword(email, password);
    
            await updateUserProfileDoc(user, {displayName})
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

            })
            
        } catch (error) {
            console.error(error.message);        
            
        }


    }

    handleChange = event=>{
        const{name, value}= event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} =this.state;
        return(
            <div className="sign-up">
                <h2>I Don't have account </h2>
                <span>sign up with your email and password</span>
            
                <form className='sign-up-form' onSubmit={this.handleSubmit} >

                    <FormInput
                        name="displayName" 
                        type="text"
                        value={displayName} 
                        onChange={this.handleChange}
                        label='Display Name'
                        required               
                    />

                    <FormInput
                        name="email" 
                        type="email"
                        value={email} 
                        onChange={this.handleChange}
                        label='Email ID'
                        required               
                    />

                    <FormInput
                        name="password" 
                        type="password"
                        value={password} 
                        onChange={this.handleChange}
                        label='Password'
                        required               
                    />

                    <FormInput
                        name="confirmPassword" 
                        type="password"
                        value={confirmPassword} 
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required               
                    />

                    <div className="buttons">

                        <CustomButton type="submit">
                            Sign-Up

                        </CustomButton>
                    </div>

                    </form>
            </div>
        )
    }
}

export default Signup;