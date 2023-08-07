import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import ShowPage from './pages/showPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/show/:name' element={<ShowPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;