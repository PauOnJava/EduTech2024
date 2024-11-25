import React,{useState} from "react";
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

interface AzureOCRProps {
    onSave: (title: string, text: string) => void;
}

const AzureOCR: React.FC<AzureOCRProps> = ({onSave}) => {
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const endpoint = import.meta.env.ENDPOINT; // completeaza cu link-ul api-ului

    const apiKey = import.meta.env.APIKEY; // completeaza cu key-ul apiului

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setImage(file);
        setText('');
    };

    const handleSave = () => {
        if (title && text) {
            onSave(title, text);
            setTitle("");
            setText("");
            setImage(null);
        }
    }

        const process = async () => {
            if (!image) return (console.log('n ai nimerit'));
            setIsLoading(true);

            const credentials = new ApiKeyCredentials({inHeader: {'Ocp-Apim-Subscription-Key': apiKey}});
            const client = new ComputerVisionClient(credentials, endpoint);

            try {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    if (reader.result) {
                        const response = await client.readInStream(image);
                        const operationId = response.operationLocation?.split('/').pop();

                        let result;
                        while (!result || result.status === 'running') {
                            await new Promise((resolve) => setTimeout(resolve, 1000));
                            result = await client.getReadResult(operationId!);
                        }

                        if (result?.status === 'succeeded') {
                            const extractedText = result.analyzeResult?.readResults
                                ?.map((r) => r.lines.map((line) => line.text).join('\n'))
                                .join('\n');
                            setText(extractedText || 'No text found');
                        } else {
                            setText('Failed to extract text.');
                        }
                    }
                };
                reader.readAsArrayBuffer(image);
            } catch (error) {
                console.error('eroare in ocr: ', error);
                setText('Error processing the image.');
            } finally {
                setIsLoading(false);
            }
        };
    const handleTextToSpeech = () => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "en-US";
            utterance.rate = 1;
            speechSynthesis.speak(utterance);
        } else {
            alert("Text-to-Speech is not supported in this browser.");
        }
    };
        return (
            <div className="container bg-dark text-light p-4 rounded shadow-lg ">
        <h1 className="text-center mb-4">Welcome to Sphera Note </h1>

                <div className="row justify-content-lg-start align-items-center">
                    <div className="input-group mb-4 w-50">
                        <input
                            type="file"
                            className="form-control bg-dark text-secondary"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        {image && (
                            <button className="btn btn-secondary" onClick={process}>
                                Extract Text
                            </button>
                        )}
                    </div>
                    {text &&
                        <div className="row align-items-center mb-4">
                        <div className="input-group mb-4 w-50">
                            <input
                                type="text"
                                className="form-control text-dark btn-outline-dark"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                        <div className="col-md-4 text-end">
                            <button className="btn btn-outline-secondary w-100" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div></div>}

                </div>
                {isLoading && <p className="text-center mt-3">Processing...</p>}
                {text && (
                    <div className="mt-4">
            <textarea
                rows={15}
                cols={50}
                className="form-control bg-dark text-light mb-3 border border-dark"
                value={text}
                readOnly
            />
                        <button className="btn btn-outline-secondary" onClick={handleTextToSpeech}>
                            Text-to-Speech
                        </button>

                    </div>
                )}
            </div>

        );
};


export default AzureOCR;