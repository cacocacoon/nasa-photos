import { useRoutes } from 'react-router-dom'
import Home from 'pages/Home'

function App() {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
    ])

    return element
}

export default App
