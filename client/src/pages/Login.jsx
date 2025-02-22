import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogin } from "../api/authApi";
import { login } from "../redux/slices/authSlice";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const containerRef = useRef(null);

  //animation
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  }, []);
  //animation End

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const { data } = await userlogin(userData);
      localStorage.setItem("token", data.token);
      dispatch(login(data.user));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <section ref={containerRef} className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <h1
          ref={titleRef}
          className="items-center mb-6 text-2xl font-semibold text-gray-900  dark:text-white"
        >
          Wllcome to My page
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div ref={formRef} className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold dark:text-white loading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  font-medium text-gray-900  dark:text-white"
                >
                  Your Email
                </label>
                <input
                  value={userData.email}
                  type="email"
                  placeholder="Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm  font-medium text-gray-900  dark:text-white"
                >
                  Password
                </label>
                <input
                  value={userData.password}
                  type="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? (
                  <>
                    <span>Loading....</span>
                  </>
                ) : (
                  " Create an account"
                )}
              </button>
            </form>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
