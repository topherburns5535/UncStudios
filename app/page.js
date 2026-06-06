import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="card">
        <p className="eyebrow">Independent game developer</p>
        <h1>Unc Studios</h1>
        <p>Creator of Hull Keeper</p>
        <p>
          Contact:{" "}
          <a href="mailto:uncstudiosllc@gmail.com">uncstudiosllc@gmail.com</a>
        </p>

        <nav className="links" aria-label="Site links">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </section>
    </main>
  );
}
