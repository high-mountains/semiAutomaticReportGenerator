import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../../features/dashboard/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
      }, [])


    return(
        <Dashboard />
    )
}

export default InternalPage