import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Calendar from '../../features/calendar'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
      }, [])


    return(
        <Calendar />
    )
}

export default InternalPage