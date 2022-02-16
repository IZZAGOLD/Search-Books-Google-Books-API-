import BooksAPI from '../../../API/BooksAPI'
import {
    SET_BOOKS,
    SET_BOOK,
    SET_TOTAL_ITEMS,
    SET_IS_BOOKS_LOADING,
    REMOVE_BOOKS
} from './consts'

export const BooksActionCreators = {
    setIsBooksLoading: (payload) => ({type: SET_IS_BOOKS_LOADING, payload}),
    setTotalItems: (payload) => ({type: SET_TOTAL_ITEMS, payload}),
    setBooks: (books) => ({type: SET_BOOKS, payload: books}),
    setBookId: (book) => ({type: SET_BOOK, payload: book}),
    removeBooks: (books) => ({type: REMOVE_BOOKS, payload: books}),
    getBooks: (query, category = '', sort = 'relevance', startIndex = 0) => async (dispatch) => {
        dispatch(BooksActionCreators.setIsBooksLoading(true))
        try {
            const response = await BooksAPI.getAll(query, category, sort, startIndex)
            if (response.data.totalItems) {
                dispatch(BooksActionCreators.setBooks(response.data.items))
                dispatch(BooksActionCreators.setTotalItems(response.data.totalItems))
            } else {
                dispatch(BooksActionCreators.setTotalItems(response.data.totalItems))
            }
        } catch (error) {
            console.log(error)
            alert(error.message)
        } finally {
            dispatch(BooksActionCreators.setIsBooksLoading(false))
        }
    },
    getBooksId: (id) => async (dispatch) => {
        dispatch(BooksActionCreators.setIsBooksLoading(true))
        try {
            const response = await BooksAPI.getBookId(id)
            dispatch(BooksActionCreators.setBookId(response.data))
        } catch (error) {
            console.log(error)
            alert(error.message)
        } finally {
            dispatch(BooksActionCreators.setIsBooksLoading(false))
        }
    }
}