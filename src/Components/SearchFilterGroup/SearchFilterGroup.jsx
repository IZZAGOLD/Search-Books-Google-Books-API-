import React, {useState} from 'react'
import cl from './SearchFilterGroup.module.css'
import {Button, Input, Select} from 'antd'
import {useActions} from '../../hooks/useActions'

const {Option} = Select

const SearchFilterGroup = ({setQueryParams, navigate}) => {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('relevance')
    const {removeBooks} = useActions()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (query.length) {
                removeBooks([])
                setQueryParams([query, category, sort])
                navigate(`../`)
            } else {
                alert('Строка поиска пуста')
            }
        }
    }

    const handleChangeButtonSearch = () => {
        removeBooks([])
        navigate(`../`)
        setQueryParams([query, category, sort])
    }

    const handleChangeCategory = (value) => {
        setCategory(value)
    }

    const handleChangeSort = (value) => {
        setSort(value)
    }

    const handleChangeInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div>
            <div className={cl.search}>
                <Input
                    onKeyDown={handleKeyDown}
                    onChange={handleChangeInput}
                    placeholder='Search'
                />
                <Button
                    size={'large'}
                    type='primary'
                    onClick={handleChangeButtonSearch}
                    disabled={!query.length}>
                    Search
                </Button>
            </div>
            <div className={cl.wrapper__sort}>
                <div className={cl.sort}>
                    <Select
                        defaultValue='Categories'
                        style={{width: 240}}
                        onChange={handleChangeCategory}>
                        <Option value='' disabled>all</Option>
                        <Option value='art'>art</Option>
                        <Option value='biography'>biography</Option>
                        <Option value='computers'>computers</Option>
                        <Option value='history'>history</Option>
                        <Option value='medical'>medical</Option>
                        <Option value='poetry'>poetry</Option>
                    </Select>
                </div>
                <div className={cl.sort}>
                    <Select
                        defaultValue='Sorting'
                        style={{width: 240}}
                        onChange={handleChangeSort}>
                        <Option value='' disabled>relevance</Option>
                        <Option value='relevance'>relevance</Option>
                        <Option value='newest'>newest</Option>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterGroup