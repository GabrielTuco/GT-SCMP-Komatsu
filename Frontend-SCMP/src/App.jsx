import { CssBaseline, Stack } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './themes/theme'
import { Navbar } from './components/navbar/Navbar'
import { Login } from './pages/login/Login'
import { PrincipalPanel } from './pages/Usuario/PrincipalPanel/PrincipalPanel'
import { WorkPanel } from './pages/Usuario/WorkPanel/WorkPanel'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Routes>
          <Route index path='/' element={<Login></Login>} />
          <Route index path='/Home' element={<PrincipalPanel></PrincipalPanel>} />
          <Route index path='/Work-panel' element={<WorkPanel></WorkPanel>} />
        </Routes>

      </ThemeProvider>
    </div>

  )
}

export default App
