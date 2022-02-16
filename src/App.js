import React from 'react'
import 'antd/dist/antd.css'
import './styles/App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './Components/AppRouter/AppRouter'

const App = () => {
    return (
        <main className={'App'}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </main>
    )
}

export default App