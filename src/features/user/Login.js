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
  // const { token, isLoading, error } = useSelector((store) => store.user);
  // const token = true
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  useEffect(() => {
    // inputRef.current.focus();
  },[])
  // useEffect(() => {
    // if (token) {
    //   navigate('/dashboard', { replace: true });
    // }
  // }, [token]);
  // useEffect(() => {
  //   // console.log("errro change");
  //  setErrorMessage(error);
  //   setTimeout(() => {
  //     dispatch(resetError());
  //   }, 3000);
  // },[error])
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
                setErrorMessage('メールアドレスまたはパスワードが正しくありません。')
            },
        )
        if (setPending) setPending(false)
    }
    } catch (error) {
      console.log(error);
    }
    // navigate('/dashboard', { replace: true });
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-pic flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1 opacity-80 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-3xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  autoFocus={true}
                  type="emailId"
                  defaultValue={loginObj.userId}
                  updateType="userId"
                  containerStyle="mt-4"
                  labelTitle="User Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <div className="text-right">
                <Link replace to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary bg-[#00C3D0] border-[#00C3D0]"
                }
              >
                Login
              </button>

              <div className="text-center  mt-4">
                Are you new here?{" "}
                <Link to="/register" replace>
                  <span className="  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
