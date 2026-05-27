type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-[10px] rounded-[4px] bg-black/40 p-[16px]">
      <h3 className="font-right-slab text-[20px] font-light leading-[100%] text-[#FFE7EA] md:text-[24px]">
        {title}
      </h3>

      <p className="font-manrope text-[14px] font-normal leading-[140%] text-white">
        {description}
      </p>
    </div>
  );
};

export default Card;
