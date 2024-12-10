import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import InputText from "../../components/Input/InputText";
import ErrorText from "../../components/Typography/ErrorText";
import LandingIntro from "./LandingIntro";
import { signin, resetError } from "./userSlice";

function Login() {
  const navigate = useNavigate();
  const { login, setPending } = useAuth()
  
  const INITIAL_LOGIN_OBJ = {
    password: "",
    userId: "",
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  useEffect(() => {
  },[])
  const submitForm = async (e) => {
    try {
      e.preventDefault();

      const credential = {
        email: loginObj.userId,
        password: loginObj.password
      }
      
      if (login) {
        if (setPending) setPending(true)
        login(
            credential,
            () => {
                navigate('/pdf')
                setErrorMessage('')
            },
            () => {
                setErrorMessage('Incorrect email address or password.')
            },
        )
        if (setPending) setPending(false)
    }
    } catch (error) {
      console.log(error);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-pic flex items-center">
      <div className="card mx-auto w-full max-w-[1024px]  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1 opacity-80 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-[96px] px-[40px]">
            <h2 className="text-[30px] font-semibold mb-[8px]} text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-[12px]">
                <InputText
                  autoFocus={true}
                  type="emailId"
                  defaultValue={loginObj.userId}
                  updateType="userId"
                  containerStyle="mt-[12px]"
                  labelTitle="User Email"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-[12px]"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-[32px]">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-[8px] w-full btn-primary bg-[#00C3D0] border-[#00C3D0] h-[44px] text-[20px] rounded-[4px]"
                }
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
