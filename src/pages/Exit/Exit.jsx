import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
    const navigate = useNavigate();
    const register = JSON.parse(window.localStorage.getItem("sign"))
    if(register == true) {
        localStorage.removeItem("sign");
        navigate('/login');
    }
    return (
        <>
            
        </>
    );
};


export default Exit;