export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to SoloPilot</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Your all-in-one AI assistant for freelancers. Manage your clients, track time, and get paid faster — all from one place.
      </p>
      <a
        href="/sign-up"
        className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </main>
  );
}
