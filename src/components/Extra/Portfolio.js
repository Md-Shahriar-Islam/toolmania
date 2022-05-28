import React from 'react';
import Footer from '../Business/Footer';
import me from "../images/me.jpg"

const Portfolio = () => {
    return (
        <div >
            <h1 className="text-center text-5xl">portfolio</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-96" src={me} alt="Album"></img></figure>
                <div class="card-body">
                    <h2 class="card-title">Md Shahriar Islam</h2>
                    <p>Email:mdshahriarislam23@gmail.com</p>
                    <h1 className="text-2xl">Education</h1>
                    <p>Khulna University Of Engineering And Technology</p>
                    <p>Dept:ECE,Year:3rd,Sem:1st</p>
                    <h1 className="text-2xl">Technologies and Skills </h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>TAILWIND</li>
                        <li>BOOTSTRAP</li>
                        <li>REACT</li>
                        <li>FIREBASE</li>
                        <li>DATA STRUCTURE AND ALGORITHM</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;