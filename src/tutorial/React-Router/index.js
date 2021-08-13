import React from 'react'
import About from './About'
import Error from './Error'
import Home from './Home'
import People from './People'
import Person from './Person'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //we want to use router in our webpage to navigate through diff pages using links

function ReactRouterDom() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about"> {/* /about in the link will lead us to "About" component*/}
                    <About />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/person/:id" children={<Person />}></Route>
                <Route path="*">  {/* * means this page will open no matter from what page i try to access invalid link*/}
                    <Error />
                </Route>

            </Switch>
        </Router>
    )
}

export default ReactRouterDom
