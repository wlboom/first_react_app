import './App.css';
import Header from '../Header/Header';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from '../../Pages/About';
import Blog from '../../Pages/Blog';
import Contacts from '../../Pages/Contacts';
import Home from '../../Pages/Home';
import Footer from '../Footer/Footer';

function App() {
    return (
        <div className="app-container">
            <Router>
                <div className="app-content">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/blog" component={Blog}/>
                    </Switch>
                </div>
                <div className="app-footer">
                    <Footer/>
                </div>
            </Router>                
        </div>
    );
}

export default App;
