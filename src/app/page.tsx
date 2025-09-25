"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import StackRoadmapTimeline from '@/components/sections/layouts/roadmap/StackRoadmapTimeline';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "brainRot", colorTemplate: 2, textAnimation: "flip" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          buttonText="Join the Community"
          onButtonClick={() => {/* Handle Join Community click */}}
          navItems={[
            { name: "hero", id: "hero" },
            { name: "about", id: "about" },
            { name: "roadmap", id: "roadmap" },
            { name: "how-to-buy", id: "how-to-buy" },
            { name: "tokenomics", id: "tokenomics" },
            { name: "faq", id: "faq" },
            { name: "footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to BrainRot Memecoin"
          subtitle="Join our chaotic and fun crypto journey"
          contractAddress="0x1234567890"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          title="What is BrainRot?"
          descriptions={[
            "BrainRot is a meme-inspired cryptocurrency designed for fun and community impact.",
            "It aims to bring together enthusiasts in the vibrant crypto space.",
            "Join us as we redefine the meme coin experience with creativity and innovation."
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <StackRoadmapTimeline
          items={[
            { stepNumber: "1", title: "Q1 2023", description: "Concept and community building", image: "" },
            { stepNumber: "2", title: "Q2 2023", description: "Token launch and marketing", image: "" },
            { stepNumber: "3", title: "Q3 2023", description: "Partnerships and exchanges", image: "" },
            { stepNumber: "4", title: "Q4 2023", description: "Community rewards and engagement", image: "" },
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "1", image: "/images/logo.svg", title: "Get a Wallet", description: "Create a digital wallet to store your tokens.", isCenter: true },
            { position: "2", image: "/images/logo.svg", title: "Buy Token", description: "Purchase BrainRot tokens through a supported exchange.", isCenter: false },
            { position: "3", image: "/images/logo.svg", title: "Join the Community", description: "Connect with us on social media and stay updated.", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Understanding the allocation and distribution of BrainRot Token."
          kpiItems={[
            { value: "50%", description: "Liquidity" },
            { value: "20%", description: "Team" },
            { value: "15%", description: "Marketing" },
            { value: "15%", description: "Community Rewards" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          title="Frequently Asked Questions"
          description="Find answers to common questions about BrainRot Memecoin."
          image="/images/logo.svg"
          imageAlt="FAQ Image"
          items={[
            { title: "How to buy BrainRot?", content: "You can buy BrainRot on several popular exchanges!" },
            { title: "What is the purpose of BrainRot?", content: "BrainRot aims to create a fun community-driven meme coin." },
            { title: "Is BrainRot safe to invest?", content: "As with any investment, please do your own research before participating!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <GradientFooter
          items={[
            { label: "Privacy Policy", onClick: () => {/* Handle Privacy Policy */} },
            { label: "Terms of Service", onClick: () => {/* Handle Terms of Service */} },
            { label: "Contact Us", onClick: () => {/* Handle Contact Us */} },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
