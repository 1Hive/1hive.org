import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

const landingHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>1Hive</title>
    <meta
      name="description"
      content="1Hive is a global community building public goods and shared infrastructure for humanity."
    />
    <meta property="og:title" content="1Hive" />
    <meta
      property="og:description"
      content="A global community building public goods and shared infrastructure for humanity."
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#ffdd0f" />
    <style>
      :root {
        color-scheme: light;
        --paper: oklch(98% 0.012 91);
        --paper-deep: oklch(94% 0.026 90);
        --ink: oklch(20% 0.026 78);
        --muted: oklch(43% 0.032 78);
        --rule: oklch(86% 0.04 89);
        --honey: oklch(86% 0.18 89);
        --honey-deep: oklch(70% 0.16 82);
        --wing: oklch(72% 0.13 190);
        --leaf: oklch(58% 0.12 140);
        --shadow: oklch(26% 0.025 78 / 0.12);
        font-family:
          ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background:
          radial-gradient(circle at 82% 12%, color-mix(in oklch, var(--wing) 30%, transparent), transparent 22rem),
          radial-gradient(circle at 18% 0%, color-mix(in oklch, var(--honey) 46%, transparent), transparent 28rem),
          linear-gradient(180deg, var(--paper), var(--paper-deep));
        color: var(--ink);
        margin: 0;
        min-height: 100vh;
      }

      body::before {
        background-image: linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px);
        background-size: 4.5rem 4.5rem;
        content: "";
        inset: 0;
        mask-image: linear-gradient(90deg, black, transparent 58%);
        opacity: 0.22;
        pointer-events: none;
        position: fixed;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .shell {
        isolation: isolate;
        margin: 0 auto;
        max-width: 1360px;
        min-height: 100vh;
        padding: clamp(1.25rem, 2.4vw, 2.25rem);
        position: relative;
      }

      .nav {
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.4rem 0;
      }

      .brand {
        align-items: center;
        display: inline-flex;
        gap: 0.75rem;
        font-size: 1.35rem;
        font-weight: 850;
        letter-spacing: -0.055em;
      }

      .brand img {
        display: block;
        height: 2.45rem;
        width: auto;
      }

      .nav-links {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        justify-content: flex-end;
      }

      .nav-links a {
        border-radius: 999px;
        color: var(--muted);
        font-size: 0.95rem;
        font-weight: 720;
        padding: 0.65rem 0.85rem;
      }

      .nav-links a:hover {
        background: color-mix(in oklch, var(--honey) 34%, transparent);
        color: var(--ink);
      }

      .hero {
        display: grid;
        gap: clamp(2rem, 4.5vw, 4.5rem);
        grid-template-columns: minmax(0, 1fr) minmax(12rem, 21rem);
        min-height: min(78vh, 46rem);
        padding: clamp(3.25rem, 7vw, 6.5rem) 0 clamp(2.5rem, 6vw, 5rem);
      }

      .hero-copy {
        align-self: end;
      }

      .kicker {
        color: color-mix(in oklch, var(--muted) 72%, var(--honey-deep));
        font-size: 0.82rem;
        font-weight: 850;
        letter-spacing: 0.14em;
        margin: 0 0 1.1rem;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(3.1rem, 8vw, 7.2rem);
        letter-spacing: -0.045em;
        line-height: 0.96;
        margin: 0;
        max-width: 10.5ch;
      }

      .support {
        color: var(--muted);
        font-size: clamp(1.12rem, 1.6vw, 1.35rem);
        line-height: 1.55;
        margin: clamp(1.25rem, 2.2vw, 1.9rem) 0 0;
        max-width: 44rem;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.75rem;
      }

      .button {
        align-items: center;
        border: 1px solid var(--ink);
        border-radius: 999px;
        display: inline-flex;
        font-weight: 850;
        justify-content: center;
        min-height: 3rem;
        padding: 0.9rem 1.15rem;
      }

      .button.primary {
        background: var(--ink);
        color: var(--paper);
      }

      .button:hover {
        background: var(--honey);
        color: var(--ink);
      }

      .hero-mark {
        align-self: center;
        display: grid;
        gap: 1.5rem;
        justify-items: end;
      }

      .hero-mark img {
        filter: drop-shadow(0 1.4rem 2.8rem var(--shadow));
        height: auto;
        max-width: 18rem;
        width: min(100%, 26vw);
      }

      .section {
        border-top: 1px solid var(--rule);
        display: grid;
        gap: clamp(1.5rem, 3.5vw, 3.5rem);
        grid-template-columns: minmax(12rem, 0.45fr) minmax(0, 1fr);
        padding: clamp(2.75rem, 6vw, 5rem) 0;
      }

      .section h2 {
        font-size: clamp(1.85rem, 3.6vw, 3.3rem);
        letter-spacing: -0.04em;
        line-height: 1.05;
        margin: 0;
        max-width: 11ch;
      }

      .link-list {
        display: grid;
      }

      .link-list a {
        align-items: baseline;
        border-top: 1px solid var(--rule);
        display: grid;
        gap: 0.7rem 1.5rem;
        grid-template-columns: 3rem minmax(10rem, 0.8fr) minmax(12rem, 1fr);
        padding: 1rem 0;
      }

      .link-list a:last-child {
        border-bottom: 1px solid var(--rule);
      }

      .link-list a:hover {
        background: linear-gradient(90deg, color-mix(in oklch, var(--honey) 22%, transparent), transparent);
      }

      .link-list span {
        color: var(--honey-deep);
        font-size: 0.82rem;
        font-weight: 850;
      }

      .link-list strong {
        font-size: 1.18rem;
        letter-spacing: -0.035em;
      }

      .link-list em {
        color: var(--muted);
        font-style: normal;
        line-height: 1.45;
      }

      .infra {
        background: color-mix(in oklch, var(--honey) 18%, var(--paper));
        border: 1px solid var(--rule);
        border-radius: 1.2rem;
        display: grid;
        gap: clamp(1.4rem, 3vw, 2.4rem);
        grid-template-columns: minmax(0, 0.85fr) minmax(18rem, 1fr);
        margin-bottom: clamp(2.5rem, 5vw, 4rem);
        padding: clamp(1.35rem, 3.5vw, 2.6rem);
      }

      .infra h2 {
        font-size: clamp(1.85rem, 3.4vw, 3.2rem);
        letter-spacing: -0.04em;
        line-height: 1.05;
        margin: 0;
        max-width: 14ch;
      }

      .infra p {
        color: var(--muted);
        font-size: 1.06rem;
        line-height: 1.6;
        margin: 0;
        max-width: 34rem;
      }

      .infra-copy {
        display: grid;
        gap: 0.9rem;
      }

      .infra-links {
        display: grid;
        gap: 0;
      }

      .infra-links a {
        border-top: 1px solid color-mix(in oklch, var(--rule) 78%, var(--ink));
        display: grid;
        gap: 0.2rem;
        padding: 0.85rem 0;
      }

      .infra-links a:last-child {
        border-bottom: 1px solid color-mix(in oklch, var(--rule) 78%, var(--ink));
      }

      .infra-links a:hover {
        color: var(--ink);
      }

      .infra-links strong {
        font-size: 1rem;
        letter-spacing: -0.025em;
      }

      .infra-links span {
        color: var(--muted);
        font-size: 0.95rem;
        line-height: 1.45;
      }

      .footer {
        align-items: center;
        border-top: 1px solid var(--rule);
        color: var(--muted);
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
        padding: 1.2rem 0 0;
      }

      .footer nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
      }

      .footer a {
        font-weight: 720;
      }

      @media (max-width: 900px) {
        .nav {
          align-items: flex-start;
          flex-direction: column;
        }

        .hero,
        .section,
        .infra {
          grid-template-columns: 1fr;
        }

        .hero {
          min-height: auto;
        }

        .hero-mark {
          justify-items: start;
          order: -1;
        }

        .hero-mark img {
          max-width: 8rem;
          width: 34vw;
        }

        .link-list a {
          grid-template-columns: 3rem 1fr;
        }

        .link-list em {
          grid-column: 2;
        }
      }

      @media (max-width: 560px) {
        .shell {
          padding: 1rem;
        }

        h1 {
          font-size: clamp(2.9rem, 15vw, 4.8rem);
        }

        .actions .button {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <header class="nav" aria-label="Site header">
        <a class="brand" href="/" aria-label="1Hive home">
          <img src="/static/1hive-logo.svg" alt="" aria-hidden="true" />
          <span>1Hive</span>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          <a href="/wiki">Wiki</a>
          <a href="/How-you-can-contribute">Contribute</a>
          <a href="/Join-the-community">Community</a>
          <a href="/Participate-with-your-agent">Bring your agent</a>
          <a href="/Navigating-core-community-infrastructure">Infrastructure</a>
          <a href="https://gardens.1hive.org">DAO</a>
        </nav>
      </header>

      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <h1 id="hero-title">Public goods for humanity.</h1>
          <p class="support">1Hive is building a community-owned economy for public goods. We coordinate around Honey, open infrastructure, and useful work people can inspect and improve. Start with one contribution, on your own or with your personal agent.</p>
          <div class="actions">
            <a class="button primary" href="/How-you-can-contribute">Find your first contribution</a>
            <a class="button" href="/Participate-with-your-agent">Bring your agent</a>
            <a class="button" href="/wiki">Explore the wiki</a>
          </div>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <img src="/static/1hive-logo.svg" alt="" />
        </div>
      </section>

      <section class="section" aria-labelledby="start-title">
        <div>
          <p class="kicker">Start here</p>
          <h2 id="start-title">Help build the commons.</h2>
        </div>
        <nav class="link-list" aria-label="Wiki starting points">
          <a href="/Our-mission-and-values"><span>01</span><strong>Mission and values</strong><em>Understand the principles and ambitions behind the work.</em></a>
          <a href="/Why-Honey"><span>02</span><strong>Why Honey?</strong><em>Explore Honey's role in a public goods economy.</em></a>
          <a href="/How-you-can-contribute"><span>03</span><strong>Make a contribution</strong><em>Choose a small outcome, prepare it, and get it reviewed.</em></a>
          <a href="/Participate-with-your-agent"><span>04</span><strong>Bring your agent</strong><em>Use your existing agent, shared instructions, and reusable skills.</em></a>
          <a href="/Improvement-proposals"><span>05</span><strong>Plan an improvement</strong><em>A working-draft process and template for changes that need a plan.</em></a>
          <a href="/Curating-community-contributions"><span>06</span><strong>Curate useful work</strong><em>Evaluate contributions and check the relevant funding process.</em></a>
        </nav>
      </section>

      <section class="infra" aria-labelledby="infra-title">
        <div class="infra-copy">
          <p class="kicker">Core infrastructure</p>
          <h2 id="infra-title">The stack for shared resources.</h2>
          <p>Explore the governance deployments, discussion spaces, and open-source tools documented by 1Hive. Check current rules, activity, and funding at the source before relying on them.</p>
          <p><a class="button primary" href="/Navigating-core-community-infrastructure">See the full map</a></p>
        </div>
        <nav class="infra-links" aria-label="Core infrastructure links">
          <a href="https://gardens.1hive.org/#/xdai/garden/0x8ccbeab14b5ac4a431fffc39f4bec4089020a155"><strong>Gardens v1</strong><span>The documented Common Pool governance deployment.</span></a>
          <a href="https://app.gardens.fund/gardens/100/0x71850b7e9ee3f13ab46d67167341e4bdc905eef9/0xe2396fe2169ca026962971d3b2e373ba925b6257"><strong>Gardens v2</strong><span>References for modular signaling and allocation experiments.</span></a>
          <a href="https://celeste.1hive.org/#/dashboard"><strong>Celeste</strong><span>The dispute-resolution system documented for 1Hive governance.</span></a>
          <a href="/Navigating-core-community-infrastructure"><strong>Infrastructure map</strong><span>Find sources and learn what to verify before taking action.</span></a>
        </nav>
      </section>

      <footer class="footer">
        <span>Global community. Shared infrastructure. Public goods.</span>
        <nav aria-label="Community links">
          <a href="https://discord.gg/1hive">Discord</a>
          <a href="https://forum.1hive.org">Forum</a>
          <a href="https://github.com/1Hive">GitHub</a>
          <a href="https://gardens.1hive.org">DAO</a>
        </nav>
      </footer>
    </main>
  </body>
</html>
`

export const LandingPage: QuartzEmitterPlugin = () => ({
  name: "LandingPage",
  async *emit(ctx) {
    const fp = await write({
      ctx,
      slug: "index" as never,
      ext: ".html",
      content: landingHtml,
    })
    yield fp
  },
  async *partialEmit(ctx) {
    const fp = await write({
      ctx,
      slug: "index" as never,
      ext: ".html",
      content: landingHtml,
    })
    yield fp
  },
})
