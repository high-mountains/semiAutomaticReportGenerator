'use client'

import { useAuth } from '../context/AuthContext'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated, user, isLoading } = useAuth()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate(`/login?redirect_to=${window.location.pathname}`)
    }, [isAuthenticated])

    if (isLoading) return null

    if (isAuthenticated) {
        return <div>{children}</div>
    } else return (
        <div className='path w-full h-screen flex items-center justify-center'>
            Loading
        </div>
    )
}

export default AuthLayout
