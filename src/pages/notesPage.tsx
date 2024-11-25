import React, { useState, useEffect } from "react";
import Sidebar from "../utils/Sidebar"; // Your sidebar component
import { db } from "../firebase-config"; // Firebase configuration
import { collection, addDoc, getDocs } from "firebase/firestore";
import AzureOCR from "../Azurecomp";
import Footer from "../utils/footer.tsx"; // Your OCR component

const NotesPage: React.FC = () => {
    const [notes, setNotes] = useState<{ id: string; title: string; text: string }[]>([]);
    const [selectedNote, setSelectedNote] = useState<{ id: string; title: string; text: string } | null>(null);

    // Load notes from Firebase on mount
    useEffect(() => {
        const fetchNotes = async () => {
            const notesCollection = collection(db, "notes");
            const notesSnapshot = await getDocs(notesCollection);
            const notesList = notesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as { id: string; title: string; text: string }[];
            setNotes(notesList);
        };
        fetchNotes();
    }, []);

    // Add a new note to Firebase
    const saveNote = async (title: string, text: string) => {
        const newNote = { title, text };
        const docRef = await addDoc(collection(db, "notes"), newNote);
        setNotes([...notes, { id: docRef.id, ...newNote }]);
    };
    const handleTextToSpeech = () => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(selectedNote.text);
            utterance.lang = "en-US";
            utterance.rate = 1;
            speechSynthesis.speak(utterance);
        } else {
            alert("Text-to-Speech is not supported in this browser.");
        }
    };
    return (
        <>
        <div style={{ display: "flex", height: "100vh", backgroundColor: "#353636" }} className="pb-3">
            <Sidebar
                notes={notes}
                onNoteClick={(note) => setSelectedNote(note)}
            />
            <div style={{ flex: 1, padding: "1rem" }}>
                {selectedNote ? (
                    <div className="container" style={{backgroundColor: "#353636"}}>
                        <h2 className='text-white'>{selectedNote.title}</h2>
                        <hr className="text-white"/>
                        <textarea
                            rows={25}
                            cols={132}
                            value={selectedNote.text}
                            readOnly
                            style={{backgroundColor: "#353636", textDecoration: "none", border: "none"}}
                            className="ps-4"
                        />
                        <button className="btn btn-outline-secondary mb-3" onClick={handleTextToSpeech}>
                            Text-to-Speech
                        </button>
                    </div>
                ) : (
                    <AzureOCR onSave={saveNote}/>
                )}
            </div>
        </div>
            <div className="text-center bg-secondary text-white p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2024 Copyright:
                <a className="text-reset fw-bold" href="#">TDI</a>
            </div> </>
            );
            };

            export default NotesPage;
