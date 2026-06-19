import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import SectionHeading from "./components/section-heading";

const projects = [
  {
    title: "Hull Keeper",
    description:
      "Hull Keeper is a mobile arcade game about protecting your ship, clearing debris, collecting salvage, and surviving as long as possible.",
    status: "Now Building",
    actionLabel: "Project page coming soon",
  },
  {
    title: "Future Projects",
    description:
      "Fresh concepts in the queue: small strange apps, game ideas with bite, and larger worlds still taking shape on the whiteboard.",
    status: "In Development",
    actionLabel: "More details later",
  },
  {
    title: "Experiments / Prototypes",
    description:
      "Quick tests, odd mechanics, playful interactions, and prototype builds where the best weird ideas get their first real chance.",
    status: "Lab Notes",
    actionLabel: "Prototype archive soon",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Unc Studios home">
          <span className="brand-logo-wrap">
            <Image
              src="/images/UncStudiosLogo.png"
              alt="Unc Studios illustrated logo"
              width={54}
              height={54}
              className="brand-logo"
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>Unc Studios</strong>
            <span>indie game and app studio</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </header>

      <main className="home-main">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="hero-kicker">Tiny team. Strange signals. Real builds.</p>
            <h1>Small studio. Weird ideas. Playable worlds.</h1>
            <p className="hero-text">
              Unc Studios is an indie game and app studio building strange,
              playful, and imaginative experiences from odd little ideas.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#about" className="button button-secondary">
                About Unc Studios
              </a>
            </div>
          </div>

          <aside className="hero-console" aria-label="Studio snapshot">
            <div className="hero-banner-frame">
              <Image
                src="/images/UncStudiosBanner.jpg"
                alt="Unc Studios banner artwork"
                width={1164}
                height={306}
                className="hero-banner"
                priority
              />
            </div>

            <div className="console-card console-card-feature">
              <div className="hero-logo-panel">
                <Image
                  src="/images/UncStudiosLogo.png"
                  alt="Unc Studios mascot logo"
                  width={400}
                  height={400}
                  className="hero-logo-art"
                />
              </div>

              <div className="feature-copy">
                <p className="console-label">Current Orbit</p>
                <h2>Hull Keeper</h2>
                <p>
                  Salvage, survive, and keep the ship together while the debris
                  field gets meaner.
                </p>
              </div>
            </div>

            <div className="console-strip">
              <span>Black-and-white identity</span>
              <span>Dark purple accent</span>
              <span>Indie-built</span>
            </div>

            <div className="console-grid">
              <div className="mini-panel">
                <span className="mini-label">Mood</span>
                <strong>Sleek mystery</strong>
              </div>
              <div className="mini-panel">
                <span className="mini-label">Approach</span>
                <strong>Creator-led</strong>
              </div>
              <div className="mini-panel">
                <span className="mini-label">Output</span>
                <strong>Games + apps</strong>
              </div>
              <div className="mini-panel">
                <span className="mini-label">Fuel</span>
                <strong>Odd ideas</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-divider" aria-hidden="true">
          <span />
        </section>

        <section id="about" className="content-section">
          <SectionHeading
            eyebrow="About"
            title="Built by curiosity, finished with care."
            description="Unc Studios makes creative games, apps, and interactive experiments with a personal touch. The goal is simple: take unusual ideas seriously enough to shape them into polished, playable things."
          />

          <div className="about-grid">
            <article className="info-card">
              <h3>Creator-driven work</h3>
              <p>
                Every project starts close to the spark that made it interesting
                in the first place. That means tighter decisions, sharper tone,
                and work that still feels human by the time it ships.
              </p>
            </article>

            <article className="info-card">
              <h3>Games, apps, and experiments</h3>
              <p>
                Some builds aim for replayable arcade energy. Others are useful
                tools, strange interactions, or small experiments that uncover a
                better project hiding underneath.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeading
            eyebrow="Projects"
            title="Things in the hangar"
            description="A small studio does not need a huge catalog to have a distinct voice. These are the projects actively defining what Unc Studios is becoming."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="engine-room">
            <SectionHeading
              eyebrow="Studio Personality"
              title="The Weird Little Engine Room"
              description="Some ideas start as jokes. Some start as sketches. Some start as a weird mechanic that probably should not work. Unc Studios is where those ideas get tested, shaped, and turned into real projects."
            />

            <div className="engine-room-notes">
              <div className="engine-note">
                <span className="engine-note-label">Rule 01</span>
                <p>Follow the fun, then refine it until it feels intentional.</p>
              </div>
              <div className="engine-note">
                <span className="engine-note-label">Rule 02</span>
                <p>Keep the strange bits. They are usually the point.</p>
              </div>
              <div className="engine-note">
                <span className="engine-note-label">Rule 03</span>
                <p>Polish matters, even when the idea started as a dare.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-panel">
            <SectionHeading
              eyebrow="Contact"
              title="Questions, feedback, business inquiries, or collaboration ideas?"
              description="If you want to talk about Hull Keeper, future projects, partnerships, bug reports, or a strange little idea worth exploring, reach out."
            />

            <div className="contact-actions">
              <a
                href="mailto:uncstudiosllc@gmail.com"
                className="button button-primary"
              >
                uncstudiosllc@gmail.com
              </a>
              <Link href="/privacy" className="button button-secondary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
