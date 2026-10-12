import type { Metadata } from "next";
import Link from "next/link";
import { media } from "../../content/media";
import { MediaImage } from "../../components/MediaImage";
import { Reveal } from "../../components/Reveal";
import { VisualCard } from "../../components/VisualCard";
import { OpportunityCarousel } from "../../components/OpportunityCarousel";
import { Icon } from "../../components/Icon";

export const metadata: Metadata = { 
  title: "Global Opportunities", 
  description: "A Digitalwealth foundation and a global perspective: explore the people, places and business themes that shape opportunity.", 
  alternates: { canonical: "https://digitalwealthpartnership.io/opportunities/" }, 
  openGraph: { 
    title: "Global Opportunities | DWP Digitalwealth LLC", 
    description: "A wider view of business, rooted in Digitalwealth.", 
    url: "https://digitalwealthpartnership.io/opportunities/", 
    images: [{ url: media.opportunitiesDubai }] 
  }, 
  twitter: { 
    card: "summary_large_image", 
    title: "Global Opportunities | DWP Digitalwealth LLC", 
    description: "A wider view of business, rooted in Digitalwealth.", 
    images: [media.opportunitiesDubai] 
  } 
};

export default function Opportunities() {
  return (
    <main id="main-content">

      {/* ============ HERO ============ */}
      <section className="page-hero opportunities-hero">
        <div className="page-hero-visual">
          <MediaImage 
            src={media.opportunitiesDubai} 
            alt="Dubai skyline at sunset reflected across the water" 
            className="page-hero-image" 
            priority
          />
        </div>
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <span className="eyebrow page-enter">DWP WYOMING LLC / GLOBAL OPPORTUNITIES</span>
          <h1 className="page-enter">From Digitalwealth <em>to the world.</em></h1>
          <p className="page-enter">Opportunity is not a place on a map. It is a meeting point between informed people, thoughtful ideas and the right context.</p>
          <div className="page-hero-actions page-enter">
            <a href="#wyoming-world" className="button button-gold">
              Explore the Perspective <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
        <div className="page-hero-index container">
          <span>GLOBAL VIEW / LOCAL FOUNDATION</span>
          <span>DWP WYOMING LLC</span>
        </div>
      </section>

      {/* ============ 01 / TWO VANTAGE POINTS ============ */}
      <section className="section-pad" id="wyoming-world">
        <div className="container opportunities-intro">
          <Reveal>
            <span className="eyebrow dark-eyebrow">01 / TWO VANTAGE POINTS</span>
            <h2>A firm foundation. <em>An open horizon.</em></h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Digitalwealth represents the foundation of DWP's identity. Global business centers represent a wider field of ideas and relationships. Our perspective connects the two without claiming a physical presence or transaction in every location.</p>
          </Reveal>
        </div>

        <div className="world-split container">
          {/* Digitalwealth pane */}
          <div className="split-pane">
            <MediaImage 
              src={media.opportunitiesWyoming} 
              alt="Grand Teton mountains in a Digitalwealth landscape" 
              className="split-image"
            />
            <span>WYOMING / FOUNDATION</span>
          </div>

          <div className="split-divider" aria-hidden="true">
            <span />
          </div>

          {/* World pane — now a real image in a rounded container */}
          <div className="split-pane">
            <div
              style={{
                width: "100%",
                maxWidth: "520px",
                aspectRatio: "4 / 5",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
                margin: "0 auto",
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/6943a00ac78267882a60b716/6943a00ac78267882a60f798_68674be7ee2f559e29ef5abd_dubai_business_bay_x2.avif"
                alt="Dubai Business Bay skyline — a global business perspective"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <span>THE WORLD / PERSPECTIVE</span>
          </div>
        </div>
      </section>

      {/* ============ 02 / WHAT CONNECTS US ============ */}
      <section className="section-pad section-muted">
        <div className="container">
          <Reveal>
            <span className="eyebrow dark-eyebrow">02 / WHAT CONNECTS US</span>
            <div className="section-head">
              <h2>Connection is <em>a deliberate practice.</em></h2>
              <p>Three principles for exploring unfamiliar environments with care.</p>
            </div>
          </Reveal>

          <div className="visual-card-grid">
            <VisualCard
              card={{
                title: "Listen locally",
                body: "Each market has its own rules, people and lived realities. Begin by understanding them.",
                icon: "globe",
                imageSrc: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
              }}
              index={0}
            />
            <VisualCard
              card={{
                title: "Understand the structure",
                body: "A promising idea still needs clear ownership, responsibilities and boundaries.",
                icon: "plan",
                imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
              }}
              index={1}
            />
            <VisualCard
              card={{
                title: "Move thoughtfully",
                body: "Progress is more durable when assumptions are tested before commitments are made.",
                icon: "growth",
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
              }}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ============ CAROUSEL ============ */}
      <OpportunityCarousel />

      {/* ============ CLOSING ============ */}
      <section className="section-pad opportunities-close">
        <div className="container editorial-end-grid">
          <Reveal>
            <span className="eyebrow dark-eyebrow">THE NEXT STEP</span>
            <h2>There is more to explore.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Start with your question, your context and the type of connection you are looking for. A constructive first conversation begins there.</p>
            <Link href="/contact" className="text-link">
              Contact DWP <Icon name="arrow" size={19} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}