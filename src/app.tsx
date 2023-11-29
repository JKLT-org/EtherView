import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { SignUp } from './pages/SignUp';

 const App = () => {
    return (
        <div className="App" >
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes> 
            </Router>
        </div>

    )
}

export default App;

