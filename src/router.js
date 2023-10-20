import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './containers/NotFound/NotFound.js';

const AppRouter = () => (
    <BrowserRouter basename='/zenbittech'>
        <Routes>

            <Route
                path='/'
                element={<Login />}
            />

            <Route
                path='/login'
                element={<Login />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />


            <Route
                path='/main'
                element={<Main />}
            />

        </Routes>
    </BrowserRouter>
)

export default AppRouter;