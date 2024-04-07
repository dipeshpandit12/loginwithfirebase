
import './AuthenticationPage.css';

function AuthenticationPage({children}){
    return(
        <>
         <div className="authentication-page">
            {children}
        </div>
        </>
    )
}

export default AuthenticationPage;