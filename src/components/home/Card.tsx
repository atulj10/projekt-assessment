type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-2.5 rounded bg-black/40 p-4">
      <h3 className="font-right-slab text-xl font-light leading-none text-footer-text md:text-2xl">
        {title}
      </h3>

      <p className="font-manrope text-sm font-normal leading-[140%] text-white">
        {description}
      </p>
    </div>
  );
};

export default Card;
