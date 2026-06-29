export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-yellow-600">
        <h1 className="text-3xl font-bold text-yellow-400">
          Aesthetic Wear Hub
        </h1>

        <div className="space-x-8 text-lg">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Women</a>
          <a href="#" className="hover:text-yellow-400">Men</a>
          <a href="#" className="hover:text-yellow-400">Accessories</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <h2 className="text-6xl font-extrabold text-yellow-400">
          Wear The Vibe
        </h2>

        <p className="mt-6 text-xl max-w-2xl text-gray-300">
          Discover premium aesthetic fashion for girls & boys.
          Curated outfits, luxury style, and trending collections.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full transition">
            Shop Women
          </button>

          <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full transition">
            Shop Men
          </button>
        </div>
      </section>
    </main>
  );
}