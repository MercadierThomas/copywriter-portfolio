export default function Header() {
    return (
      <nav className="p-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span className="font-bold">Thomas Mercadier | Copywriter</span>
          <div className="space-x-4">
            <a href="#projects" className="hover:text-gray-600">Projets</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </nav>
    )
  }