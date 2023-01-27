import Image from "next/image";

export const AppIntroduction = () => {
  return (
    <>
      <Image src="/images/deadlift.jpg" alt="deadlift" fill priority={true} />
      <div className="z-10 h-full w-full bg-gradient-to-tl from-slate-900 to-slate-400 opacity-30"></div>
      <p className="absolute bottom-64 right-10 max-w-xl text-right text-3xl text-yellow-50">
        Random text place, something about app and its purpose blah blah blah
        blah
      </p>
    </>
  );
};
