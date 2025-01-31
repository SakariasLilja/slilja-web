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
        <footer className="py-5 px-3 text-slate-300 flex flex-row-reverse">
            <button title="Copy address" className="ml-2 italic" onClick={handleCopy}>sakarias.lilja@gmail.com</button>
            <p>Contact me:</p>
        </footer>
    );
}