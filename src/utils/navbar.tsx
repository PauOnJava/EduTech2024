
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand" href="/public">
                    <img
                        src="https://atelierulviselor.ro/includes/logo.png"
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-text-top"
                    />
                </a>

                {/* Butonul pentru meniul responsive */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Meniul */}
                <div className="collapse navbar-collapse text-white" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-white">
                            <a className="nav-link active text-white" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                        </li>
                        <SignedIn>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/notes">Workspace</a>
                            </li>
                            <li className="nav-item">
                                <UserButton />
                            </li>
                        </SignedIn>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

