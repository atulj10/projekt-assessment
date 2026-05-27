import type { ReactNode } from "react";

type ZoneCardProps = {
  title: string;
  description: string;
  ageLabel: string;
  className?: string;
  badgeClassName?: string;
  children?: ReactNode;
};

const ZoneCard = ({ title, description, ageLabel, className = "", badgeClassName = "", children }: ZoneCardProps) => {
  return (
    <div className={`rounded-xl p-6 h-full flex flex-col items-start justify-center ${className}`}>
      <h2 className="text-[40px] font-right-slab leading-tight mb-3">{title}</h2>
      <p className="text-lg mb-6 font-manrope leading-relaxed">{description}</p>
      <span className={`font-manrope text-base font-semibold px-3 py-1.5 rounded ${badgeClassName}`}>{ageLabel}</span>
      {children}
    </div>
  );
};

export default ZoneCard;
