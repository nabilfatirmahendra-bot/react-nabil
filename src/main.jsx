import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/Preloader.jsx'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <PreLoader />

      <div className="min-h-screen container mx-auto px-4">
        <Navbar />
        <App />
        <Footer />
      </div>
    </StrictMode>
  )
} else {
  // Fallback: log if root element is missing (useful during tests)
  console.error('Root element not found: #root')
}
