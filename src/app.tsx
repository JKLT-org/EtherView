import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { SignUp } from './pages/SignUp';

 const App = () => {
    const [usernameApp, setUsernameApp] = useState('')
    return (
        <div className="App" >
            <Router>
                <Routes>
                    <Route path='/' element={<Login setUsernameApp={setUsernameApp}/>}/>
                    <Route path='/signup' element={<SignUp setUsernameApp={setUsernameApp}/>}/>
                    <Route path='/dashboard' element={<Dashboard usernameApp={usernameApp}/>}/>
                </Routes> 
            </Router>
        </div>

    )
}

export default App;

