import React from 'react';
import { BrowserRouter } from "react-router-dom"

import Routes from "./routes/routes"
import GlobalStyle from "./styles/Global"


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App
