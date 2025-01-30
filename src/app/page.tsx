import "./globals.css"

export default function Home() {
  return (
  <div className="bg-transparent">
    <div className="relative isolate px-6 pt-56 lg:px-8">
      <div className="text-left">
        <h1 className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-amber-200 to-fuchsia-200 bg-clip-text text-transparent sm:text-8xl">
          Gym Lifts Web
        </h1>
        <p className="mt-10 text-lg font-medium text-pretty text-gray-600 sm:text-xl/6">
          Welcome to the web page for the Gym Lifts application!
        </p>
      </div>
    </div>
  </div>
  );
}