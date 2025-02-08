import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banneer'
import { GlobalCss } from './styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
