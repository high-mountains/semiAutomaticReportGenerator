import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import InputText from "../../components/Input/InputText";
import ErrorText from "../../components/Typography/ErrorText";
import LandingIntro from "./LandingIntro";

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
    // inputRef.current.focus();
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
                setErrorMessage('メールアドレスまたはパスワードが正しくありません。')
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
        <div className="grid md:grid-cols-2 grid-cols-1 opacity-80 bg-base-100 rounded-[6rem] ">
          <div>
            <LandingIntro />
          </div>
          <div className="py-[96px] px-[40px]" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h2 className="text-[30px] font-semibold mb-[8px]} text-center" style={{
              color: "#00C3D0"
            }}>ログイン</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-[12px]">
                <InputText
                  autoFocus={true}
                  type="emailId"
                  defaultValue={loginObj.userId}
                  updateType="userId"
                  containerStyle="mt-[12px] text-[#00C3D0]"
                  labelTitle="ユーザーID"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-[12px] text-[#00C3D0]"
                  labelTitle="パスワード"
                  updateFormValue={updateFormValue}
                />
              </div>

              {/* <div className="text-right">
                <Link replace to="/forgot-password">
                  <span className="text-[14px]  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                  パスワードをお忘れですか？
                  </span>
                </Link>
              </div> */}

              <ErrorText styleClass="mt-[32px]">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-[8px] w-full btn-primary bg-[#00C3D0] border-[#00C3D0] h-[44px] text-[20px] rounded-[4px]"
                }
              >
                ログイン
              </button>

              {/* <div className="text-center  mt-[16px]">
                Are you new here?{" "}
                <Link to="/register" replace>
                  <span className="  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
