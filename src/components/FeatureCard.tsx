import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: FunctionComponent<Props> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <Image src={image} alt={title} width={60} height={60} className="object-contain" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
