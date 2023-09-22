import Hero from "./components/Hero";
import Nav from "./components/Nav";
import S1 from "./components/S1";

export default function page() {
  return (
    <main className="bg-c-light text-dark min-h-screen">
      <Nav />
      <Hero />
      <S1 />
    </main>
  );
}
