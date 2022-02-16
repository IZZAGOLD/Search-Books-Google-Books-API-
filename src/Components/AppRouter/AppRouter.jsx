import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Books from '../Books/Books'
import BooksList from '../BooksList/BooksList'
import BookId from '../BookId/BookId'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Books />}>
                <Route index element={<BooksList />} />
                <Route path=':id' element={<BookId />} />
            </Route>
        </Routes>
    )
}

export default AppRouter