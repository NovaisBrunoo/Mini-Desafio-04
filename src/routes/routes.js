import Home from '../page/Home'
import SingUp from '../page/SingUp'
import Main from '../page/Main';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getItem } from '../utils/storage'

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}
function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SingUp' element={<SingUp />} />
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main' element={<Main />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;