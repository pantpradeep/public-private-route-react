import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function Login({setIsLogin}){
    const navigate = useNavigate()
    const cookie = new Cookies()
    const [userName,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    function handleUserName(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    async function handleForm(){
        const responeBody={
            "email":userName,
            "password":password
        }
        try{
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
                method:'POST',
                body:JSON.stringify(responeBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

           if (response.ok) {
                const token = await response.json();
                // Set login cookie or do any other necessary login-related tasks
                cookie.set('isLogin', true);
                setIsLogin(true)
                console.log('token', token);
                
                // Navigate to the "about" page
               // navigate('/about');
                } else {
                console.log('Error:', response.status);
            }
        }
        catch(error){
            console.log('error',error)
        }
        
    }
   
    return (
        <div>Login Page
            <input type='text' value={userName} onChange={handleUserName}/>
            <input type='text' value={password} onChange={handlePassword}/>
            <button onClick={handleForm}>Submit</button>
        </div>
    )
}
export default Login