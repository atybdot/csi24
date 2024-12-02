import {createBrowserRouter} from 'react-router-dom'
import Home from '../ui/pages/Home.jsx'
import Events from '../ui/pages/Events.jsx'
import Layout from '../ui/layout/Layout.jsx'
import ErrorPage from '../ui/pages/Error.jsx'
import Gallery from '$pages/Gallery.jsx'
const routes = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "events/",
                element: <Events />
            },
            {
                path : "gallery",
                element : <Gallery />
            },
            {
                path : "faculty",
                element : <p>faculty</p>
            },
            {
                path : "about-us",
                element : <p>about-us</p>
            }
        ]
    }
])


export default routes