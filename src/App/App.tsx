import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import useAuth from '@/hooks/useAuth'
import Layout from "./Layout";

const App: React.FC = () => {
  // const auth = useAuth()

  // React.useEffect(() => {
  //   auth.isLogin().then((login) => {
  //     if (!login) {
  //       location.assign('/sign-in')
  //       return
  //     }
  //     auth.authChecked()
  //   })
  // }, [])

  // // 認証系処理後に画面を表示する
  // if (!auth.state.initialChecked) {
  //   return <div>Loading...</div>
  // }

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
