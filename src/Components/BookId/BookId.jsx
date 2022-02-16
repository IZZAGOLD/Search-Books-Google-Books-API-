import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useActions} from '../../hooks/useActions'
import {useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import BookIdCard from './BookIdCard/BookIdCard'

const BookId = () => {
    const params = useParams()
    const {getBooksId, setBookId} = useActions()
    const {book} = useSelector(state => state.books)

    useEffect(() => {
        getBooksId(params.id)
    }, [])

    useEffect(() => {
        return () => setBookId(null)
    }, [])

    return (
        <>
        {book &&
            <BookIdCard
            book={book.volumeInfo}
            />
        }
        </>
    )
}

export default BookId