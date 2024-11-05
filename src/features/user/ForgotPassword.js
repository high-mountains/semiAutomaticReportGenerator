import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputText from '../../components/Input/InputText'
import ErrorText from '../../components/Typography/ErrorText'
import LandingIntro from './LandingIntro'
import { useDispatch,useSelector } from 'react-redux'
import { setUserInfo } from "../../features/user/userSlice";
import { resetError } from "./userSlice";



function ForgotPassword() {
  const dispatch = useDispatch();
  const {error } = useSelector((store) => store.user);
  useEffect(() => {
    if(error === 'ask'){
      setLinkSent(true);
    }
   setErrorMessage(error);
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  },[error])
  const INITIAL_USER_OBJ = {
    emailId: ""
  }

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [linkSent, setLinkSent] = useState(false)
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

  const submitForm = (e) => {
    e.preventDefault()
    setErrorMessage("")

    if (userObj.emailId.trim() === "") return setErrorMessage("Email Id is required!")
    else {
      setLoading(true)
      dispatch(setUserInfo({userId:userObj.emailId.trim(),ask:true}));
      setLoading(false)
    }
  }

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("")
    setUserObj({ ...userObj, [updateType]: value })
  }

  return (
    <div className="min-h-screen bg-pic flex items-center">
      <div className="card mx-auto w-full max-w-5xl opacity-90 shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className=''>
            <LandingIntro />
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Forgot Password</h2>

            {
              linkSent &&
              <>
                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                <p className='my-4 text-xl font-bold text-center'>Request send</p>
                <p className='mt-4 mb-8 font-semibold text-center'>Wait until Administrator reset your password.</p>
                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

              </>
            }

            {
              !linkSent &&
              <>
                <p className='my-8 font-semibold text-center'>Input your user ID to reset password.</p>
                <form onSubmit={(e) => submitForm(e)}>

                  <div className="mb-4">

                    <InputText autoFocus={true} type="emailId" defaultValue={userObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="User Id" updateFormValue={updateFormValue} />


                  </div>

                  <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                  <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Send Reset Link</button>

                  <div className='text-center mt-4'>Can you remember? <Link to="/login" replace><span className=" inline-block  hover:text-primary underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                </form>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword