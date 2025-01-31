"use client"

export default function Footer() {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("sakarias.lilja@gmail.com");
        } catch (error) {
            console.error("Failed to copy email address:", error);
        }
    };
    
    return(
        <footer className="py-5 px-3 text-fuchsia-200 flex flex-row-reverse">
            <button title="Copy address" className="mx-1 italic" onClick={handleCopy}>sakarias.lilja@gmail.com</button>
            <p>Contact me at:</p>
        </footer>
    );
}