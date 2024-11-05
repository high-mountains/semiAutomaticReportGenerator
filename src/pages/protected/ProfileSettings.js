import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProfileSettings from '../../features/settings/profilesettings'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
      }, [])


    return(
        <ProfileSettings />
    )
}

export default InternalPage