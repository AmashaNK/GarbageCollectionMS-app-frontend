import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/LoginPage/Login'
import SignupForm from './Components/Pages/SignUpPage/SignupForm'
import HomePage from './Components/Pages/HomePage/HomePage'
import NewsPage from './Components/Pages/NewsPage/NewsPage'
import AboutUs from './Components/Pages/AboutUsPage/AboutUs'
import ContactUs from './Components/Pages/ContactUsPage/ContactUs'
import Dashboard from './Components/MainPages/Admin/Dashboard'
import Collection_Route from './Components/Pages/CollectionRoutePage/Collection_Route'

function App() {
    return ( <
        Router >
        <
        div >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        /> <
        Route path = "/news"
        element = { < NewsPage / > }
        /> <
        Route path = "/contact-us"
        element = { < ContactUs / > }
        /> <
        Route path = "/about-us"
        element = { < AboutUs / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/signup"
        element = { < SignupForm / > }
        /> <
        Route path = "/admin-dashboard"
        element = { < Dashboard / > }
        /> <
        Route path = "/route"
        element = { < Collection_Route / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;