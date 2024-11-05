import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Charts from '../../features/charts'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
      }, [])


    return(
        <Charts />
    )
}

export default InternalPage