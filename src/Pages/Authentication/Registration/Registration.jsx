import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Component/Shared/Navbar/Navbar";
import useAuth from "../../../Hock/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import swal from 'sweetalert';
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // create user
        createUser(email,password)
        .then(()=>{
            navigate('/')
            swal("Successful!", "Successfully create account!", "success");
        })
        .catch(()=>{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )

        })

    }
    return (
        <div>
            <Navbar/>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col md:w-3/4 lg:w-1/2">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <SocialLogin/>
                        <div className="divider mb-0">OR</div>
                        <form onSubmit={handleRegistration}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" required placeholder="Photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
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
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <p className="text-center text-xs font-semibold mt-5">Already have an account? please <Link to={'/login'} className="text-blue-700 underline cursor-pointer">Login</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;