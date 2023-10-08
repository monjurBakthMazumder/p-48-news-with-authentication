import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import swal from 'sweetalert';
const SocialLogin = () => {
    const {loginWithGoogle, loginWithGithub} = useAuth();
    const navigate = useNavigate()
    const handleLogin = media => {
        media()
        .then(()=>{
            navigate('/')
            swal("Successful!", "Login Successful!", "success");
        })
    }
    return (
        <div>
            <button className="btn w-full" onClick={()=> handleLogin(loginWithGoogle)}>Login with Google</button>
            <button className="btn w-full mt-2" onClick={()=> handleLogin(loginWithGithub)}>Login with Github</button>
        </div>
    );
};

export default SocialLogin;