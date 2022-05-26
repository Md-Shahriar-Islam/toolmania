import React from 'react';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";

const Social = () => {
    return (
        <div className="w-screen lg:w-1/4 mx-auto">
            <GoogleLoginButton onClick={() => alert("Hello")} />
            <GithubLoginButton onClick={() => alert("Hello")} />

        </div>
    );
};

export default Social;