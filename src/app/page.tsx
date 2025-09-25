"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import PlayfulHero from '@/components/sections/layouts/hero/BillboardHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'brainRot', colorTemplate: 2, textAnimation: 'flip' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          buttonText="Join the Community"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <PlayfulHero title="Welcome to BrainRot Memecoin" subtitle="Join the fun and invest in your future!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout
          title="About BrainRot"
          descriptions={[
            "BrainRot Memecoin is designed for meme lovers and anyone who appreciates playful and engaging cryptocurrency options.",
            "With a strong community focus, we welcome new members to join and shape the future of our token!"
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <VerticalCardRoadmap
          title="Roadmap"
          items={[
            { title: "Q4 2023", description: "Launch and initial marketing campaign." },
            { title: "Q1 2024", description: "Expand community engagement and build partnerships." },
            { title: "Q2 2024", description: "Introduce new features and enhance token utility." }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D steps={[
          { position: "left", image: "/images/placeholder1.avif", title: "Create a Wallet", description: "Set up a digital wallet to store your coins.", isCenter: true },
          { position: "center", image: "/images/placeholder2.avif", title: "Buy Tokens", description: "Purchase BrainRot tokens on the exchange.", isCenter: false },
          { position: "right", image: "/images/placeholder3.avif", title: "Join the Community", description: "Engage with our community on social media platforms!", isCenter: true }
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understanding the distribution and utility of BrainRot tokens."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 BROT" },
            { id: 2, title: "Circulating Supply", description: "500,000,000 BROT" },
            { id: 3, title: "Token Utility", description: "Used for community rewards and staking." },
            { id: 4, title: "Listing Exchanges", description: "Available on several exchanges on launch." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <BaseFooter
          columns={[
            { title: "Community", items: [{ label: "Join Discord", onClick: () => {} }, { label: "Follow Twitter", onClick: () => {} }] },
            { title: "Resources", items: [{ label: "Whitepaper", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 BrainRot Memecoin. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
