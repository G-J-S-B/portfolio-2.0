import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
function App() {
  return (
    <main>
      <Header />
      <div className='container'>
      <Hero />
      </div>
      <Footer />
    </main>
  )
}

export default App
