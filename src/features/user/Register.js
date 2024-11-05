import moment from "moment"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from './userSlice'

function Register() {

    const { token, isLoading } = useSelector(store => store.user)
    const INITIAL_REGISTER_OBJ = {
        realName: "",
        userId: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            window.socket.emit('C2S_AUTH_AUTHORIZATION', token)
            navigate(-1, { replace: true })
        }
    }, [token])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        if (registerObj.realName.trim() === "") return setErrorMessage("Name is required!")
        if (registerObj.userId.trim() === "") return setErrorMessage("Email Id is required!")
        if (registerObj.birthday.trim() === "") return setErrorMessage("Birthday is required!")
        if (registerObj.password.trim() === "") return setErrorMessage("Password is required!")
        if (registerObj.confirmPassword.trim() === "") return setErrorMessage("ConfirmPassword is required!")
        if (registerObj.confirmPassword !== registerObj.password) return setErrorMessage("Passwords does not match!")
        else {
            setLoading(true)
            const res = await dispatch(signup(registerObj));
            setErrorMessage(res?.payload?.message)
            setLoading(false)
            if(!res.payload.error)
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setRegisterObj({ ...registerObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-pic flex items-center">
            <div className="card mx-auto w-full max-w-5xl opacity-90 shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-3xl font-semibold mb-2 text-center'>Register</h2>
                        <form onSubmit={(e) => submitForm(e)}>

                            <div className="mb-4">

                                <InputText autoFocus={true} defaultValue={registerObj.realName} updateType="realName" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.userId} updateType="userId" containerStyle="mt-4" labelTitle="User Id" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.birthday} type="date" updateType="birthday" containerStyle="mt-4" labelTitle="Birthday" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />

                                <InputText defaultValue={registerObj.confirmPassword} type="password" updateType="confirmPassword" containerStyle="mt-4" labelTitle="confirm Password" updateFormValue={updateFormValue} />

                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

                            <div className='text-center mt-4'>Already have an account? <Link to="/login" replace><span className="  inline-block  hover:text-primary underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register