import {createBrowserRouter} from 'react-router-dom'
import Events from '$pages/Events.jsx'
import Gallery from '$pages/Gallery.jsx'
import Home from '$pages/Home.jsx'
import Layout from '$layout/Layout.jsx'
import ErrorPage from '$pages/Error.jsx'
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
                path : "about-us",
                element : <p>about-us</p>
            }
        ]
    }
])


export default routes