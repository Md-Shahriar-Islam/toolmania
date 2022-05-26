import React from 'react';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import { SpinnerCircular } from 'spinners-react';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let error, name;
    if (gerror || giterror) {
        error = gerror?.message || giterror?.message
    }
    if (gloading || gitloading) {
        return <div className="flex justify-center">
            <SpinnerCircular />
        </div>
    }
    if (guser || gituser) {
        navigate("/home")
    }

    return (
        <div className="w-screen lg:w-1/4 mx-auto">
            <GoogleLoginButton onClick={() => signInWithGoogle()} />
            <GithubLoginButton onClick={() => signInWithGithub()} />
            {
                gerror ? error : "successfully logged in"
            }

        </div>
    );
};

export default Social;