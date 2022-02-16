import React from 'react'
import cl from './BookIdCard.module.css'
import parse from 'html-react-parser'
import {Button} from 'antd'

const BookIdCard = ({book}) => {
    // Парсит html теги, в случае, если они есть в свойстве description
    const parsedDescription = book.description ? parse(book.description) : null
    const coverImage = setCover(book.imageLinks)

    function setCover(coverList) {
        return (
            coverList.smallThumbnail ??
            coverList.thumbnail
        )
    }

    return (
        <div className={cl.wrapper}>
            <Button/>
            <div className={cl.wrapper__cover}>
                <div>
                    <img src={coverImage || 'Обложки нет'} alt='Cover'/>
                </div>
            </div>
            <div className={cl.wrapper__text}>
                <div className={cl.title}>
                    <h2>{book.title}</h2>
                </div>
                {book.categories &&
                    <div className={cl.categories}>
                        <ul>
                            {
                                book.categories.map((category, index) =>
                                    <li key={index}>{category}</li>)
                            }
                        </ul>
                    </div>
                }
                {book.authors &&
                    <div className={cl.authors}>
                        <ul>
                            {
                                book.authors.map((author, index) =>
                                    <li key={index}>{author}</li>
                                )
                            }
                        </ul>
                    </div>
                }
                {book.description &&
                    <div className={cl.description}>
                        <p>{parsedDescription}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default BookIdCard