import {
    SET_BOOKS,
    SET_BOOK,
    SET_IS_BOOKS_LOADING,
    REMOVE_BOOKS,
    SET_TOTAL_ITEMS,
} from './consts';

const initialState = {
    isBooksLoading: false,
    totalItems: 0,
    books: [],
    bookId: null
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return {...state, books: [...state.books, ...action.payload], isBooksLoading: false}
        case SET_BOOK:
            return {...state, book: action.payload, isBooksLoading: false}
        case REMOVE_BOOKS:
            return {...state, books:  action.payload}
        case SET_IS_BOOKS_LOADING:
            return {...state, isBooksLoading: action.payload}
        case SET_TOTAL_ITEMS:
            return {...state, totalItems: action.payload}
        default:
            return state;

    }
}