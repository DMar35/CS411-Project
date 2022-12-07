import React from 'react';
import NavBar from './NavBar';
import "./styles.css"
import {Helmet} from 'react-helmet';


const Home = () => {
    return (
        <div className="auth-form-container">
            <Helmet>
                <style>{'body { background-color: #70BD99; }'}</style>
            </Helmet>
            <span className="main-home">Welcome Back</span>
            <span className="description-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet tempor pulvinar at arcu libero sit id dignissim sollicitudin.</span>
            
        </div>
    )
}
export default Home