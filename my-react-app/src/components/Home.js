import React from 'react';
import NavBar from './NavBar';
import "./styles.css"

const Home = () => {
const [query, setQuery] = React.useState('');
    return (
        <div className="auth-form-container">
            <p>This is a paragraph and I am writing on the home page</p>
            <p>This is another paragraph, hi hey hello whatsup yo</p>
            <span className="main">Welcome Back</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet tempor pulvinar at arcu libero sit id dignissim sollicitudin.</p>
            <input placeholder="Enter Event to Search" onChange={event => setQuery(event.target.value)} />
        {
            // Data.map((post, index) => {
            // <div key={index}>
            //     <p>{post.title}</p>
            //     <p>{post.author}</p>
            // </div>
            // })
        }
        </div>
    )
}
export default Home