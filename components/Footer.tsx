export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-text-secondary/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-sm">
          © {year} <span className="text-text-primary font-semibold">Muhammad Roid Falih</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/roidpalih-coder" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            GitHub
          </a>
          <a href="https://www.instagram.com/p4llllll___" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@user1672828833892" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            TikTok
          </a>
          <a href="mailto:Roidpalih@gmail.com" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
