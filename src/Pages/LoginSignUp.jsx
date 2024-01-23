import React from "react";
import Sale from "../Assets/sale.jpeg"

const LoginSignUp = () => {
    return (
        <div className="LoginSignUp mt-12 mb-4">
            <div className="container">
                <main className="main row">
                    <div className="left col m-auto">
                        <img src={Sale} alt="sale-banner" />
                    </div>
                    <div className="right col">
                        <form className="sign-up">
                            <h4 className="text-3xl font-extrabold">Sign Up</h4>
                            <div className="mb-3">
                                <label for="email" className="form-label">Your Name</label>
                                <input type="email" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Create a password" />
                            </div>
                            <button type="submit" className="btn submit-btn">Create account</button>
                        </form>
                        <p className="hr-lines"> OR </p>
                        <div className="sign-in">
                            <p>Already have an account? <a href="#" className="text-red-600">Log in</a></p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default LoginSignUp