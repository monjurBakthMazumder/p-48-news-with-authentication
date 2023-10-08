import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Component/Shared/Navbar/Navbar";
import useAuth from "../../../Hock/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import swal from 'sweetalert';
const Login = () => {
    const {login, resetEmail} = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        login(email,password)
        .then(()=> {
            // navigate after login
            navigate(location?.state ? location?.state: '/')
            swal("Successful!", "Successfully login!", "success");

        })
        .catch(()=> {
            swal ( "Oops" ,  "Your email or password don't match!" ,  "error" )
        })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            swal ( "Oops" ,  "Please enter valid email!" ,  "error" )
            return 
        }
        resetEmail(email)
        .then(()=> {
            swal("Check email!", "Check email and set new password!", "success");
        })
    }
    return (
        <div>
            <Navbar/>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col md:w-3/4 lg:w-1/2">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <SocialLogin/>
                        <div className="divider mb-0">OR</div>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                ref={emailRef}
                                required 
                                placeholder="Email" 
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text":"password"}
                                    name="password" 
                                    required 
                                    placeholder="Password" 
                                    className="input input-bordered w-full pr-8" />
                                <span 
                                    className="absolute -ml-7 mt-3 text-2xl cursor-pointer"
                                    onClick={()=> setShowPassword(!showPassword)}
                                >{ showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</span>
                            </div>
                            <label className="label">
                                <a 
                                    href="#" 
                                    className="label-text-alt link link-hover"
                                    onClick={handleForgetPassword}
                                >Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center text-xs font-semibold mt-5">Don&apos;t Have a account? please <Link to={'/registration'} className="text-blue-700 underline cursor-pointer">Registration</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;