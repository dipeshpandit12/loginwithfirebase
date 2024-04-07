import {Routes,Route}from "react-router-dom";
import AuthenticationPage from './components/AuthenticationPage';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from "./components/Home"
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./components/UserAuthContext";


function App() {
  return (
    <>
    <AuthenticationPage>
    <UserAuthContextProvider>
      <Routes>
      <Route path="/home" element={
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
        }
      />
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </UserAuthContextProvider>
    </AuthenticationPage>
      </>
  );
}

export default App;
