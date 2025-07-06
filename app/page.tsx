export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
        Welcome to SoloPilot
      </h1>
      <p className="text-xl text-gray-200 max-w-xl">
        Your all-in-one AI assistant for freelancers. Manage your clients, track time, and get paid faster — all from one place.
      </p>
      <div className="mt-8">
        <a
          href="#"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium rounded-lg shadow-lg transition"
        >
          Get Started
        </a>
      </div>
    </main>
  )
}
