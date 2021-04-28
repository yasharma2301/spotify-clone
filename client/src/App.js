import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import Dashboard from "./components/Dashboard";

const code = new URLSearchParams(window.location.search).get("code")
function App() {
  return <div style={{ background: "#101211" }}>
    {code ? <Dashboard code={code} /> : <Login />}
  </div>
}

export default App;