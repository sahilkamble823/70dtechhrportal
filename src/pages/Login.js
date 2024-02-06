import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <main className="nk-body bg-white npc-general pg-auth">
            <div className="nk-app-root">

                <div className="nk-main ">

                    <div className="nk-wrap nk-wrap-nosidebar">

                        <div className="nk-content ">
                            <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
                                <div className="brand-logo pb-4 text-center">
                                    <a href="#" className="logo-link">
                                        <img className="logo-light logo-img logo-img-lg" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo" />
                                        <img className="logo-dark logo-img logo-img-lg" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark" />
                                    </a>
                                </div>
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-lg">
                                        <div className="nk-block-head">
                                            <div className="nk-block-head-content">
                                                <h4 className="nk-block-title text-center">Login</h4>
                                                <div className="nk-block-des text-center">
                                                    <p>Enter your credentials to get access</p>
                                                </div>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <div className="form-label-group">
                                                    <label className="form-label" for="default-01">Employee Code</label>
                                                </div>
                                                <div className="form-control-wrap">
                                                    <input type="text" className="form-control form-control-lg" id="default-01" placeholder="Enter your code" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-label-group">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <a className="link link-primary link-sm" href="#">Forgot Password?</a>
                                                </div>
                                                <div className="form-control-wrap">
                                                    <a href="#" className="form-icon form-icon-right passcode-switch lg" onClick={togglePasswordVisibility}>
                                                        <em className={`passcode-icon icon-${showPassword ? 'hide' : 'show'} icon ni ni-eye`}></em>
                                                        <em className={`passcode-icon icon-${showPassword ? 'show' : 'hide'} icon ni ni-eye-off`}></em>
                                                    </a>
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        className="form-control form-control-lg"
                                                        id="password"
                                                        placeholder="Enter your password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <Link to={'/dashboard'}>
                                                    <button className="btn btn-lg btn-primary btn-block">Login</button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    )
}
export default Login