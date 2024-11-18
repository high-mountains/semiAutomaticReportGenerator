'use client'

import React, { useState, useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { atom, useRecoilState } from 'recoil'
import { signInWithEmailAndPassword, User, onAuthStateChanged, signOut } from 'firebase/auth'

import { auth } from '../libs/firebase/firebase'
//api here is an axios instance which has the baseURL set according to the env.

const AuthContext = React.createContext({})

export const authState = atom({
    key: 'authState',
    default: null,
    dangerouslyAllowMutability: true,
})

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pending, setPending] = useState(false)
    const [user, setUser] = useRecoilState(authState)

    useEffect(() => {
        const authUserChangedFunction = new Promise(resolve => {
            return onAuthStateChanged(auth, user => {
                setUser(user)
                resolve(user)
            })
        })

        setIsLoading(true)
        authUserChangedFunction.finally(() => {
            setIsLoading(false)
        })
    }, [setUser])

    const login = async (credientail, handleSuccess, handleError) => {
        try {
            const res = await signInWithEmailAndPassword(auth, credientail.email, credientail.password)
            
            handleSuccess()
            toast.success('ログインしました。')
        } catch (error) {
            console.log(error)
            handleError()
            toast.error('ログインに失敗しました。')
        }
        return
    }

    const logout = async () => {
        await signOut(auth)
        toast.success('ログアウトしました。')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, isLoading, user, login, logout, pending, setPending }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)