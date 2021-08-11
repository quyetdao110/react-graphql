import './App.css';
import Header from './components/Header';
import CreateLinks from './components/CreateLinks';
import LinkList from './components/LinkList';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    return ( <
        div >
        <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Header }
        />  <
        Route path = "/Link"
        component = { LinkList }
        />  <
        Route path = "/CreateLinks"
        component = { CreateLinks }
        />  < /
        Switch > <
        /Router> < /
        div >

    )
}

export default App;