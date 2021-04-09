import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <span className="not-found__title">404</span>
            <Link to="/">
                <span className="not-found__desc">Вернуться на главную</span>
            </Link>
        </div>
    )
}

export default NotFound