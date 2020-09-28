import React from "react";

// import { isAuthenticated, login } from '@/service/auth'

const SignIn: React.FC = () => {
  // React.useEffect(() => {
  //   isAuthenticated().then((login) => {
  //     if (login) {
  //       toApp()
  //     }
  //   })
  // }, [])

  async function handleLogin() {
    // const result = await login()
    // if (result.isAuthenticated) {
    //   toApp()
    // }
    toApp();
  }

  function toApp() {
    window.location.assign("/");
  }

  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default SignIn;
