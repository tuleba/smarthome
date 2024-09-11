import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Connect from "@/components/connect/page";
import SocialConnect from "@/components/social/page";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Connect />
      <SocialConnect />
      {children}
      <Footer />
    </div>
  );
}
