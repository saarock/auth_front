import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Layout from './Layout';
import RegisterPage from './pages/register/RegisterPage';
import { ProtectedPage, Profile } from './components';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import DashboardLayout from './UserDashboardLayout';
import UserDashPage from "./pages/userDash/UserDashPage"
import AdminDashboardLayout from './AdminDashboardLayout';
import AddProduct from './components/adminDashComponents/AddProduct';
import NotFound from './components/NotFound/NotFound';
import ProductManagePage from './pages/admin/ProductManagePage';
import ManageUser from './pages/admin/ManageUser';
import ShowAndManageProductComponent from './components/adminDashComponents/ShowAndManageProductComponent';
import Products from './pages/products/Products';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout */}
          <Route path="" element={<Layout />}>
            <Route path='/' index element={<ProtectedPage><HomePage /></ProtectedPage>} />
            <Route path="/register" element={<ProtectedPage><RegisterPage /> </ProtectedPage>} />
            <Route path="/login" element={<ProtectedPage><LoginPage /> </ProtectedPage>} />
            <Route path="/products" element={<ProtectedPage><Products/> </ProtectedPage>} />
            <Route path="*" element={<ProtectedPage><NotFound /> </ProtectedPage>} />
          </Route>

          {/* User Dashboard Layout */}
          <Route path="user/dashboard" element={<DashboardLayout />}>
            <Route path="" index element={<ProtectedPage><UserDashPage /></ProtectedPage>} />
            <Route path="profile" element={<ProtectedPage><Profile /></ProtectedPage>} />
          </Route>


          {/* Admin Dashboard layout */}

          <Route path="admin/dashboard" element={<AdminDashboardLayout />}>
            <Route path='add-product' index element={<ProtectedPage><AddProduct /></ProtectedPage>} />
            <Route path='manage-product' index element={<ProtectedPage><ProductManagePage/></ProtectedPage>} />
            <Route path='manage-users' index element={<ProtectedPage><ManageUser/></ProtectedPage>} />
            <Route path='my-details' index element={<ProtectedPage><Profile/></ProtectedPage>} />
           
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
