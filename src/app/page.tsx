import "./globals.css"

export default function Home() {
  return (
  <div className="flex bg-transparent w-full flex-col gap-3 text-center">
    <div className="relative isolate px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-8xl font-semibold tracking-tight bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
          Sakarias Lilja
        </h1>
        <div className="items-center text-slate-500 text-sm">
          <svg 
            className="fill-current inline-block align-top"
            width="18"
            height="18"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg">
              <path className="clr-i-outline clr-i-outline-path-1" d="M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z"></path>
              <path className="clr-i-outline clr-i-outline-path-2" d="M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2ZM23.59,24l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31a9.78,9.78,0,1,1,19.56,0C27.78,17.79,25.36,21.4,23.59,24Z"></path>
          </svg>
          Helsinki, Finland
        </div>
        <p>
          Computer Science student at Aalto University
        </p>
      </div>
    </div>
    <div className="divider">About</div>
    <div>
      <p>
        This is the about section of my page.
      </p>
    </div>
    <div className="divider">Portfolio</div>
    <div>
      <p>
        These are my projects.
      </p>
    </div>
  </div>
  );
}