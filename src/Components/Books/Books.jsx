import React, {useEffect, useState} from 'react'
import SearchFilterGroup from '../SearchFilterGroup/SearchFilterGroup'
import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'
import {Button} from 'antd'
import Loader from '../Loader/Loader'
import cl from './Books.module.css'
import {Outlet, useNavigate} from 'react-router-dom'

//  <Outlet /> является частью роутинга, по умолчанию является <BookList />, при клике на книгу - <BookId />

const Books = () => {
    const navigate = useNavigate()
    const [queryParams, setQueryParams] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const {books, isBooksLoading, totalItems} = useSelector(state => state.books)
    const {getBooks} = useActions()

    const handleChangeButtonLoadMore = () => {
        setStartIndex(startIndex + 30)
        navigate(`../`)
    }

    useEffect(() => {
        if (queryParams.length) {
            getBooks(...queryParams, startIndex)
        }
    }, [queryParams, startIndex])

    return (
        <div className={cl.wrapper}>
            <SearchFilterGroup
                navigate={navigate}
                setQueryParams={setQueryParams}
            />
            <Outlet 
                context={[books, totalItems]}
            />
            {
                isBooksLoading ?
                    <Loader/>
                    :
                    books.length > 0 &&
                    ((startIndex+30) < totalItems) &&
                    <Button
                        style={{width: '100%'}}
                        size={'large'}
                        type='primary'
                        onClick={handleChangeButtonLoadMore}
                    >
                        Загрузить ещё
                    </Button>
            }
        </div>
    )
}

export default Books