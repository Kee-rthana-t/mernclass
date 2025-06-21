import Page from "./component/Page.jsx"
import Login from "./component/Login.jsx";
import AfterLogin from "./component/AfterLogin.jsx";
function App(){
  let login =false;
  return login ? <Login/> : <AfterLogin/>
  }
export default App;