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
    <div className="bg-pic font"
    style={{
      minHeight: "100vh", // Equivalent to min-h-screen
      display: "flex", // Equivalent to flex
      alignItems: "center", // Equivalent to items-center
    }}>
      <div className="card"
      style={{
        marginLeft: "auto", // Equivalent to mx-auto
        marginRight: "auto", // Equivalent to mx-auto
        width: "100%", // Equivalent to w-full
        maxWidth: "1024rem", // Equivalent to max-w-[1024rem]
        boxShadow: "0 20rem 25rem -5rem rgba(0, 0, 0, 0.1), 0 10rem 10rem -5rem rgba(0, 0, 0, 0.04)", // Equivalent to shadow-xl
      }}>
        <div
        style={{
          display: "grid", // Equivalent to grid
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // Default: grid-cols-1
          opacity: 0.8, // Equivalent to opacity-80
          backgroundColor: "#f5f5f5", // Replace with actual color for bg-base-100
          borderRadius: "0.75rem", // Equivalent to rounded-xl
        }}>
          {/* <div className="font">
            <LandingIntro />
          </div> */}
          {/* <div
          style={{
            paddingTop: '96rem',
            paddingBottom: '96rem',
            paddingLeft: '40rem',
            paddingRight: '40rem'
          }}> */}
            {/* <h2
            style={{
              fontSize: "30rem", // Equivalent to text-[30rem]
              fontWeight: 600, // Equivalent to font-semibold
              marginBottom: "8rem", // Equivalent to mb-[8rem]
              textAlign: "center", // Equivalent to text-center
            }}>ログイン</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-[12rem]">
                <InputText
                  autoFocus={true}
                  type="emailId"
                  defaultValue={loginObj.userId}
                  updateType="userId"
                  containerStyle="mt-[12rem]"
                  labelTitle="ユーザーID"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-[12rem]"
                  labelTitle="パスワード"
                  updateFormValue={updateFormValue}
                />
              </div> */}

              {/* <div className="text-right">
                <Link replace to="/forgot-password">
                  <span className="text-[14rem]  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                  パスワードをお忘れですか？
                  </span>
                </Link>
              </div> */}

              {/* <ErrorText styleClass="mt-[32rem]">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-[8rem] w-full btn-primary bg-[#00C3D0] border-[#00C3D0] h-[44rem] text-[20rem] rounded-[4rem]"
                }
              >
                ログイン
              </button> */}

              {/* <div className="text-center  mt-[16rem]">
                Are you new here?{" "}
                <Link to="/register" replace>
                  <span className="  inline-block  hover:text-[#00C3D0] underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div> */}
            {/* </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
