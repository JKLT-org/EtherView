import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';

 const App = () => {
    return (
        <div className="App" >
            Here is our app!
            <header className="App-header">
            </header>
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                </Routes> 
            </Router>
        </div>

    )
}

export default App;

