import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import axios from 'axios';
import { Messages } from '../types.tsx';
import messagesData from '../messages.json';
import Footer from "../utils/footer.tsx";
import Navbar from "../utils/navbar.tsx";
import About from "./about.tsx";
import '../App.css';
const messages: Messages = messagesData;


const UNSPLASH_ACCESS_KEY = import.meta.env.UNSPLASH_ACCESS_KEY // api key-ul de la unsplash
const Home: React.FC = () => {
    const [currentMessage, setCurrentMessage] = useState<string>(""); // Tip pentru mesajul curent
    const saluturi: string[] = messages.saluturi; // Tiparește array-ul saluturi

    const [currentQuote, setCurrentQuote] = useState<string>(""); // Tip pentru citatul curent
    const quotes: string[] = messages.quotes;

    const [backgroundImage, setBackgroundImage] = useState<string | null>(null); // Tip pentru URL-ul imaginii de fundal

    useEffect(() => {
        setCurrentMessage(saluturi[Math.floor(Math.random() * saluturi.length)]);
        const intervalId = setInterval(() => {
            const newMessage = saluturi[Math.floor(Math.random() * saluturi.length)];
            setCurrentMessage(newMessage);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [saluturi]);

    useEffect(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        const intervalId2 = setInterval(() => {
            const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setCurrentQuote(newQuote);
        }, 30000);
        return () => clearInterval(intervalId2);
    }, [quotes]);

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random', {
                    params: { query: 'landscape' },
                    headers: {
                        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                    },
                });
                setBackgroundImage(response.data.urls.full);
            } catch (err) {
            }
        };

        fetchBackgroundImage();
    }, []);

    return (
        <>
            <Navbar />
        <div
            className="App m-0"
            style={{
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : 'url(https://jimpattersonphotography.com/wordpress/wp-content/gallery/sierra-nevada/Sierra-Nevada-Mountain-Landscape-Sailor-Lake-Sunrise.jpg)',
            }}
        >
            <header className="App-header m-0">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <motion.div
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeInOut"}}
                        className="alert text-center p-4 bg-dark bg-opacity-50"
                        style={{fontSize: "2rem", fontWeight: "bold", maxWidth: "600px"}}
                    >
                        <h1 className="fs-1 bg-body-dark text-white">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentMessage}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                    style={{display: "inline-block"}}
                                >
                                    {currentMessage}
                                </motion.span>
                            </AnimatePresence>
                        </h1>

                        <p className="fs-6 fw-normal bg-body-dark text-white ">{currentQuote}</p>
                        <a
                            className="btn btn-outline-dark text-white mt-3"
                            href="/notes"
                        >
                            Start Using!
                        </a>
                    </motion.div>
                </div>
            </header>
        </div>
            <About/>
            <Footer/></>
    );
}

export default Home;
