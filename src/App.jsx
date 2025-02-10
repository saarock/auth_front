import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Layout from './Layout';
import RegisterPage from './pages/register/RegisterPage';
import { PagesWrapper } from './components';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import DashPage from './pages/dash/DashPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path='/' index element={<PagesWrapper><HomePage /></PagesWrapper>} />
            <Route path="/register" element={<PagesWrapper><RegisterPage /> </PagesWrapper>} />
            <Route path="/login" element={<PagesWrapper><LoginPage /> </PagesWrapper>} />
            <Route path="/dash" element={<PagesWrapper><DashPage /></PagesWrapper>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
