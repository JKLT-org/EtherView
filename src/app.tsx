import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { SignUp } from './pages/SignUp';

 const App = () => {
    return (
        <div className="App" >
            <header className="App-header">
            </header>
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes> 
            </Router>
        </div>

    )
}

export default App;

