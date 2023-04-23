import './App.scss'
import Navbar from './layouts/navbar/Navbar'
import ExploreTopBooks from './layouts/home/ExploreTopBooks.tsx'
import Carousel from './layouts/home/Carousel.tsx'

function App() {

  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </>
  )
}

export default App
