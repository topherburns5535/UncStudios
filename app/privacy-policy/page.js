import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Unc Studios",
  description: "Privacy Policy for Hull Keeper by Unc Studios.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <article className="card policy">
        <p className="eyebrow">Hull Keeper</p>
        <h1>Privacy Policy</h1>
        <p className="meta">Last updated: June 6, 2026</p>

        <p>
          This Privacy Policy explains how Unc Studios handles information in
          connection with Hull Keeper.
        </p>

        <h2>Information We Collect</h2>
        <p>
          Hull Keeper does not intentionally collect personally identifiable
          information directly from players.
        </p>

        <h2>Advertising and Third-Party Services</h2>
        <p>
          Hull Keeper may use third-party services such as Google AdMob to
          display advertisements. These services may collect device identifiers,
          usage data, and other information as described in their own privacy
          policies.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          If you believe that a child has provided personal information through
          the game, please contact us and we will review the issue promptly.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:uncstudiosllc@gmail.com">uncstudiosllc@gmail.com</a>.
        </p>

        <nav className="links" aria-label="Policy navigation">
          <Link href="/">Back to Home</Link>
        </nav>
      </article>
    </main>
  );
}
