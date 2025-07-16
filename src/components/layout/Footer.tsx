export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* MarkX Title */}
        <div className="text-xl font-bold tracking-tight">MarkX</div>

        {/* Nav Links */}
        <nav className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/insight" className="hover:underline">Insight</a>
          <a href="/case-studies" className="hover:underline">Case Studies</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>

        {/* Email */}
        <div>
          ✉️ <a href="mailto:markxoffice@gmail.com" className="hover:underline text-zinc-400">markxoffice@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
