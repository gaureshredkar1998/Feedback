import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'
import AboutPage from './Pages/AboutPage'
import './index.css'
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutPage />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
        <Footer />
      </Router>
    </FeedbackProvider>
  )
}

export default App
