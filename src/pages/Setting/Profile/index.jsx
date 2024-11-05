import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Profile from './profile'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
      }, [])


    return(
        <Profile />
    )
}

export default InternalPage