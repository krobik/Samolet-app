import React from 'react'

const baseRoutes = [
    {
        name: 'main',
        path: '/',
        component: React.lazy(() => import(/* webpackPreload: true */'../views/home')),
        exact: true,
    },
    {
        name: 'card',
        path: '/library/:id',
        component: React.lazy(() => import(/* webpackPreload: true */'../views/libraryDetail'))
    },
]

export default baseRoutes