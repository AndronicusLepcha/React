import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(   // creating direct html tree || evaluatled expression 
  'a',  // type
  {'href':'https://google.com'}, // props
  'click to visit google' // inner Html
  // variables comes here

)

ReactDOM.createRoot(document.getElementById('root')).render(
  // // <React.StrictMode>
    
  //   reactElement
  // // </React.StrictMode>,

  <React.StrictMode>
    <App />
    </React.StrictMode>
)
