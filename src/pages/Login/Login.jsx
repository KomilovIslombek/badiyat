import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginPhoto from '../../images/Frame.svg';
import './Login.scss';

const Login = ({userSign}) => {
    const navigate = useNavigate();
    if(userSign == true){
        navigate('/') 
        console.log(userSign);
    }
    let count = 0;
    function sign(e) {
        e.preventDefault();
        const name = e.target.elements.name.value; // admin 
        const pass = e.target.elements.pass.value; // 1118

        if(name == 'admin' && pass == 1118){
            window.localStorage.setItem('sign', true);
            navigate('/')
        } else {
            count += 1;
            if(count == 1) {
                alert("Sizda 2 ta imkoniyat qoldi");
            } else if(count == 2) {
                alert("Sizda 1 ta imkoniyat qoldi");
            } else if(count == 3) {
                alert("You are banned btother)");
            } 
        }
    }
    
    return (
        <div className='login'>
            <div className="login__page">
                <div className="login__banner">
                    <img src={loginPhoto} alt="" />
                </div>
                <div className="login__form">
                    <h1>Kirish</h1>
                    <form onSubmit={sign}>
                        <input type="text" placeholder='ismingiz ?' required name="name"/><br/>
                        <input type="password" placeholder='parolingiz ?' required name="pass"/><br />
                        <input type="submit" className='submit' value="yuborish" />
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;