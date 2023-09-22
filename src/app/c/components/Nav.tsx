export default function Nav() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center border-b">
        <h2 className="font-bold text-2xl">Upskill.</h2>
        <nav className="flex w-fit gap-2">
          {links.map(i =>
            <p className="py-5 mpx-2 border-b border-[#000000cc]" key={i}>
              {i}
            </p>
          )}
        </nav>
        <div className="flex">
          <button className="px-5  border-r">Login</button>
          <button className="px-5  text-c-pink">Register</button>
        </div>
      </header>
    </div>
  );
}

const links = ["Home", "About", "Pricing", "Contact", "Store", "Link"];
