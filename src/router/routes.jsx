import {createBrowserRouter} from 'react-router-dom'
import App from '../App.jsx'
import Layout from '../ui/layout/Layout.jsx'
import ErrorNav from '../ui/pages/Error.jsx'
const routes = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <ErrorNav/>,
        children : [
            {
                path : "",
                element : <App/>
            }
        ]
    }
])


export default routes