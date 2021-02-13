import './App.css';
import Header from '../Header/Header';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/blog" component={Blog}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
