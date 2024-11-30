import {createBrowserRouter} from 'react-router-dom'
import Home from '../ui/pages/Home.jsx'
import Layout from '../ui/layout/Layout.jsx'
import ErrorPage from '../ui/pages/Error.jsx'
const routes = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : "",
                element : <Home/>
            }
        ]
    }
])


export default routes