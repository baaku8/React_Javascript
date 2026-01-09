// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Baaku from './Baaku.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />      // its mandatory to just return a single component here so we use , <></> to give chkma
                   // also sb function ka naam capital letter se shuru hona mandatory hae  .. here function===>component.
// )           <></> is also called fragment in react.

createRoot(document.getElementById('root')).render(
  <>
    <Baaku/>
    <App />
  </>
)
