import { 
    BrowserRouter, 
    Switch, 
    Route 
} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Router = () => {
    return (
        <BrowserRouter basename="react-multiples">
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/about' exact component={ About } />
                <Route path='/contact' exact component={ Contact } />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
