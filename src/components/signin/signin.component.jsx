import React from 'react';

import './signin.style.scss'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from    '../../components/custom-button/custom-button.component'
class SignIn  extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }


        


    }

    handleSubmit= event=>{
        event.preventDefault();     

        this.setState({
            email:'',
            password:''
        })

    

    };

    handleChange= event=>{
        const {name, defaultValue}= event.target;
        this.setState({[name]:defaultValue})
        
    }


    render(){
        return(
            <div className="sign-in">
                <h2> I already Have account</h2>
                <span>sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit} >

                <FormInput
                    name="email" 
                    type="text"
                    defaultValue={this.state.email} 
                    onChange={this.handleChange}
                    label='Email'
                    required               
                />

                <FormInput
                    name="password" 
                    type="password"
                    defaultValue={this.state.password} 
                    onChange={this.handleChange}
                    label='Password'
                    required               
                />
                

                

                <CustomButton type="submit">
                    Sign-In
                
                </CustomButton>  

            </form>     
            </div>

        )
    }

}


export default SignIn;