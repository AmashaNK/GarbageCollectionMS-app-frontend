import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login'
import SignupForm from './Components/Pages/SignupForm'
import HomePage from './Components/Pages/HomePage'
import Navbar from './Components/Navbar'
import NewsPage from './Components/Pages/NewsPage'
import AboutUs from './Components/Pages/AboutUs'
import ContactUs from './Components/Pages/ContactUs'

function App() {
    return ( <
        Router >
        <
        div >
        <
        Navbar / >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < HomePage / > }
        />  <
        Route exact path = '/news'
        element = { < NewsPage / > }
        /> <
        Route exact path = '/contact-us'
        element = { < ContactUs / > }
        /> <
        Route exact path = '/about-us'
        element = { < AboutUs / > }
        /> <
        Route exact path = '/login'
        element = { < Login / > }
        />  <
        Route exact path = '/signup'
        element = { < SignupForm / > }
        />  <
        /Routes>    <
        /div>  <
        /Router>
    );
}

export default App;