import React from 'react'
import { Spin } from 'antd'
import cl from './Loader.module.css'

const Loader = ({size = 'large'}) => {
    return (
        <div className={cl.wrapper}>
            <Spin size={size} />
        </div>
    )
}

export default Loader