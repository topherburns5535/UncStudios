import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Unc Studios",
  description: "Privacy Policy for Hull Keeper by Unc Studios.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <article className="card policy">
        <p className="eyebrow">Unc Studios LLC</p>
        <h1>Hull Keeper Privacy Policy</h1>
        <p className="meta">Effective Date: 05/15/2026</p>

        <p>
          Hull Keeper is a mobile game developed by Unc Studios LLC. This
          Privacy Policy explains how information may be collected, used, and
          shared when you use Hull Keeper.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          Hull Keeper does not require you to create an account, log in, or
          directly provide personal information to play the game.
        </p>
        <p>
          The game may store limited information on your device, such as:
        </p>
        <ul>
          <li>Game settings</li>
          <li>Sound and music preferences</li>
          <li>Graphics preferences</li>
          <li>Local gameplay progress</li>
          <li>Local high score information</li>
          <li>Remove Ads purchase status, if applicable</li>
        </ul>
        <p>
          This information is used to make the game function properly and
          improve your gameplay experience.
        </p>

        <h2>2. Advertising</h2>
        <p>Hull Keeper uses Google AdMob to show ads.</p>
        <p>
          AdMob and the Google Mobile Ads SDK may automatically collect certain
          information to provide, measure, improve, and protect advertising
          services. This may include information such as:
        </p>
        <ul>
          <li>Device information</li>
          <li>Advertising ID</li>
          <li>IP address</li>
          <li>App interactions</li>
          <li>Ad interactions</li>
          <li>Diagnostic and performance information</li>
        </ul>
        <p>
          Google may use this information to show ads, measure ad performance,
          prevent fraud, and improve its advertising services.
        </p>
        <p>
          You can learn more about how Google uses information by visiting
          Google&apos;s Privacy Policy:
        </p>
        <p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
        </p>
        <p>You can also learn more about Google advertising here:</p>
        <p>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2>3. In-App Purchases</h2>
        <p>Hull Keeper may offer an optional Remove Ads purchase.</p>
        <p>
          Purchases are processed through Google Play. We do not receive,
          collect, or store your payment card information.
        </p>
        <p>
          Google Play handles payment processing, purchase verification, and
          related transaction information.
        </p>

        <h2>4. Data Sharing</h2>
        <p>We do not sell your personal information.</p>
        <p>
          Some information may be collected or processed by third-party services
          used in Hull Keeper, including:
        </p>
        <ul>
          <li>Google AdMob</li>
          <li>Google Play services</li>
          <li>Google Play Billing, if you make an in-app purchase</li>
        </ul>
        <p>
          These third-party services may collect and process information
          according to their own privacy policies and terms.
        </p>

        <h2>5. Children&apos;s Privacy</h2>
        <p>Hull Keeper is not intended for children under the age of 13.</p>
        <p>
          We do not knowingly collect personal information from children under
          13. If you believe that a child has provided personal information
          through the game, please contact us so we can take appropriate action.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We use reasonable measures to help protect information handled by the
          game.
        </p>
        <p>
          However, no method of electronic storage or transmission is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>7. Your Choices</h2>
        <p>
          You can control certain settings inside Hull Keeper, including:
        </p>
        <ul>
          <li>Sound FX volume</li>
          <li>Music volume</li>
          <li>Graphics quality</li>
        </ul>
        <p>
          You may also be able to manage ad personalization through your device
          settings or Google account settings.
        </p>
        <p>
          If you purchase Remove Ads, ads should no longer be shown in the game
          after the purchase is confirmed or restored.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time.</p>
        <p>
          If changes are made, the updated Privacy Policy will be posted on this
          page with a new effective date.
        </p>

        <h2>9. Contact</h2>
        <p>If you have questions about this Privacy Policy, you can contact us at:</p>
        <p>Developer: Unc Studios</p>
        <p>Email: uncstudiosllc@gmail.com</p>
        <p>Location: Louisburg, North Carolina USA</p>

        <h2>Support</h2>
        <p>
          If you need help with Hull Keeper, have questions, or want to report
          a bug, contact:
        </p>
        <p>
          <a href="mailto:uncstudiosllc@gmail.com">uncstudiosllc@gmail.com</a>
        </p>

        <nav className="links" aria-label="Policy navigation">
          <Link href="/">Back to Home</Link>
        </nav>
      </article>
    </main>
  );
}
