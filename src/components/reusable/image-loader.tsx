import { type SignProps, type ImageProps } from "../../types/types";
import Image from "next/image";

export const ImageLoaderDiv = ({ img }: Pick<SignProps, "img">) => {
  return (
    <>
      <ImageLoader src={img.src} alt={img.alt} />
      <ImageFilter />
      {img.alt === "deadlift" && <ImageIntroductionText />}
    </>
  );
};

const ImageLoader = ({ src, alt }: ImageProps) => {
  return <Image src={src} alt={alt} fill priority={true} />;
};

const ImageFilter = () => {
  return (
    <div className="z-10 h-full w-full bg-gradient-to-tl from-black via-slate-900 to-slate-400 opacity-30"></div>
  );
};

const ImageIntroductionText = () => {
  return (
    <p className="absolute bottom-64 right-28 w-5/12 text-right text-xl text-yellow-50">
      <span className="text-3xl font-bold text-green-500">Note</span>
      <span className="text-3xl text-slate-400">Set</span> is highly
      personalized, flexible workout tracker and planner, aiming to replace
      conventional use of a{" "}
      <span className="line-through decoration-slate-600">notebook</span>
      .
      <br /> Sign up now{" "}
      <span className="font-bold italic text-green-500">for free</span> to see
      all the benefits at your hand.
    </p>
  );
};
