import React from 'react';
import noPage from '../../images/404W.jpg';
import './NoPage.scss';
const NoPage = () => {
    return (
        <div className='Nopage'>
            <img src={noPage} alt="" />
        </div>
    );
};


export default NoPage;