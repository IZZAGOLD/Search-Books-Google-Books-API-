import React from 'react'
import BookItem from '../BookItem/BookItem'
import cl from './BooksList.module.css'
import {useOutletContext} from 'react-router-dom'

const BooksList = () => {
    const [books, totalItems] = useOutletContext()

    if (totalItems === 0) {
        return <h1>Книг не найдено</h1>
    }

    return (
        <>
            {totalItems &&
                <h1>Всего найдено {totalItems} книг!</h1>
            }
            <div className={cl.wrapper}>
                {
                    books.map(book =>
                        <BookItem key={book.id + book.etag} book={book}/>
                    )
                }
            </div>
        </>
    )
}

export default BooksList