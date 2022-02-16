import React from 'react'
import cl from './BookItem.module.css'
import {useNavigate} from 'react-router-dom'

const BookItem = (props) => {
    const navigate = useNavigate()
    const book = props.book.volumeInfo

    return (
        <div
            onClick={() => navigate(`./${props.book.id}`)}
            className={cl.wrapper}>
            {book.imageLinks ?
                <div>
                    <img src={book.imageLinks.thumbnail} alt='smallThumbnail'/>
                </div>
                :
                <div>Обложки нет</div>
            }
            {book.categories &&
                <div>
                    <span>{book.categories[0]}</span>
                </div>
            }
            <h2
                className={cl.title}>
                {book.title}
            </h2>
            {book.authors &&
                <div>
                    {
                        book.authors.map((author, index) =>
                            <div key={index}>{author}</div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default BookItem