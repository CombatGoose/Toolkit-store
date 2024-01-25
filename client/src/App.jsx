import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;