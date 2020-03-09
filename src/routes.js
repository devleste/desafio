import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Contacts from "./pages/contacts"
import Contact from "./pages/contact"
import Statistics from "./pages/statistics"
import Create from "./pages/create"
import Edit from "./pages/edit"
import Index from "./pages/welcome"

function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/contacts/:id" component={Contact}/>
            <Route path="/contacts/:id/edit" component={Edit}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/create" component={Create}/>
        </Switch>
    </BrowserRouter>
}

export default Routes