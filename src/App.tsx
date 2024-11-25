import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Home from "./pages/home.tsx";
import NotesPage from "./pages/notesPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in/*" element={<SignIn afterSignInUrl="/notes" />} />
            <Route path="/sign-up/*" element={<SignUp afterSignUpUrl="/notes" />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route
                path="/notes"
                element={
                    <>
                        <SignedIn>
                            <NotesPage />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
        </Routes>
    );
};

export default App;

