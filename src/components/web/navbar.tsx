export function Navbar() {
  return (
    <nav className="border-b border-neutral-200 bg-white py-3 sticky top-0">
      <section className="w-[900px] mx-auto flex items-center justify-between">

        <aside>
          <span>Easy Stock</span>
        </aside>

        <aside className="flex gap-x-2">
          <button type="button" className="py-1 px-3 rounded-lg bg-black text-white text-sm">Iniciar Sesión</button>
          <button type="button" className="py-1 px-3 rounded-lg border-neutral-200 border text-sm">Registrarme</button>
        </aside>
      </section>
    </nav>
  )
}