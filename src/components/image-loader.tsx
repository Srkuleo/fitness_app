import { TextWrapper } from "./wrappers";

export const ImageLoaderDiv = ({ altTag }: { altTag?: string }) => {
  if (altTag === "deadlift") {
    return (
      <div className="relative h-full rounded-2xl bg-deadlift bg-cover">
        <ImageFilter />
        <SignInText />
      </div>
    );
  }
  return (
    <div className="relative h-full rounded-2xl bg-squat bg-cover">
      <ImageFilter />
      <SignUpText />
    </div>
  );
};

const ImageFilter = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-gradient-to-tl from-black via-black/60 to-tp"></div>
  );
};

const SignInText = () => {
  return (
    <TextWrapper>
      <span className="text-3xl font-bold text-green-main500">Note</span>
      <span className="text-3xl text-slate-light300/80">Set</span> is highly
      personalized, flexible workout tracker and planner, aiming to replace
      conventional use of a notebook.
      <br />
      Sign up now{" "}
      <span className="font-bold italic text-green-main500">for free</span> to
      see all the benefits at your hand.
    </TextWrapper>
  );
};

const SignUpText = () => {
  return (
    <TextWrapper>
      Listening to your favorite playlist or podcast while writting down every
      session in a gym. Never easier, just install{" "}
      <span className="text-3xl font-bold text-green-main500">Note</span>
      <span className="text-3xl text-slate-light300/80">Set</span> and get all
      the benefits of a digital, personalized notebook. <br />
      <br />
      Sign up{" "}
      <span className="font-bold italic text-green-main500">for free</span>!
    </TextWrapper>
  );
};
