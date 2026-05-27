import TicketBorder from "./TicketBorder";
import LodgeContent from "./LodgeContent";
import CardsSection from "./CardsSection";
import FooterNote from "./FooterNote";

const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#660010_0%,_#F70063_100%)] px-[20px] py-[40px] md:px-[40px] md:py-[55px]">
      <TicketBorder />

      <div className="relative z-10 text-white">
        <div className="flex flex-col gap-[40px] lg:flex-row lg:justify-between">
          <LodgeContent />
          <CardsSection />
        </div>

        <FooterNote />
      </div>
    </section>
  );
};

export default Footer;
