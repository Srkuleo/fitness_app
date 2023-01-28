import Image from "next/image";

export const AppIntroduction = () => {
  return (
    <>
      <Image src="/images/deadlift.jpg" alt="deadlift" fill priority={true} />
      <div className="opacity-30 z-10 h-full w-full bg-gradient-to-tl from-black via-slate-900 to-slate-400"></div>
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
    </>
  );
};
