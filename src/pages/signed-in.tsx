import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import NoteSetLogo from "../components/logos/note-set-logo";
import {
  SignedInPageWrapper,
  FixedLogoWrapper,
  HeadingTextWrapper,
} from "../components/wrappers";
import {
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  DarkModeIcon,
  SignOutIcon,
  StartIcon,
  SelectedIcon,
} from "../components/svg";

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <SignedInPageWrapper>
          <FixedLogoWrapper>
            <NoteSetLogo />
          </FixedLogoWrapper>
          <HeadingTextWrapper>Welcome, Srkuleo!</HeadingTextWrapper>
          <OptionsMenu />
          <WorkoutRadioButtons />
        </SignedInPageWrapper>
      </main>
    </>
  );
};

const OptionsMenu = () => {
  return (
    <div className="fixed top-7 right-18 flex flex-col items-end gap-2">
      <button className="m-0 flex items-center gap-3 rounded-lg bg-green-dark700 px-3 py-1 font-medium text-yellow-text50 transition-all ease-out hover:bg-green-light400/60">
        Options
        {ArrowDownIcon}
      </button>
      <div className="flex flex-col rounded-lg bg-slate-light50 p-1 text-green-dark700">
        <Link
          className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
          href="/"
        >
          {UserIcon}
          Srkuleo
        </Link>
        <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
          {EditIcon}
          Edit
        </button>
        <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
          {LogsIcon}
          View logs
        </button>
        <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
          {DarkModeIcon}
          Dark mode
        </button>
        <div className="my-1 border-b border-green-main500/20"></div>
        <Link
          className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
          href="/"
        >
          {SignOutIcon}
          Sign out
        </Link>
      </div>
    </div>
  );
};

const WorkoutRadioButtons = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="mb-2 text-xl text-yellow-text50">
        Choose your workout for today:
      </h3>
      <div className="flex flex-col gap-2 rounded-xl">
        <button className="focus:shadow-outline flex items-center gap-10 rounded-lg bg-slate-light100 from-green-dark800 to-green-main500 p-3 text-xl text-slate-main600 focus:bg-gradient-to-r focus:text-yellow-text50">
          <div className="pr-48 text-left">
            <p className="font-semibold">Upper 1</p>
            <p className="text-sm italic">workout tooltip</p>
          </div>
          {SelectedIcon}
        </button>
        <button className="focus:shadow-outline flex items-center gap-10 rounded-lg bg-slate-light100 from-green-dark800 to-green-main500 p-3 text-xl text-slate-main600 focus:bg-gradient-to-r focus:text-yellow-text50">
          <div className="pr-48 text-left">
            <p className="font-semibold">Lower 1</p>
            <p className="text-sm italic">workout tooltip</p>
          </div>
        </button>
        <button className="focus:shadow-outline flex items-center gap-10 rounded-lg bg-slate-light100 from-green-dark800 to-green-main500 p-3 text-xl text-slate-main600 focus:bg-gradient-to-r focus:text-yellow-text50">
          <div className="pr-48 text-left">
            <p className="font-semibold">Upper 2</p>
            <p className="text-sm italic">workout tooltip</p>
          </div>
        </button>
        <button className="focus:shadow-outline flex items-center gap-10 rounded-lg bg-slate-light100 from-green-dark800 to-green-main500 p-3 text-xl text-slate-main600 focus:bg-gradient-to-r focus:text-yellow-text50">
          <div className="pr-48 text-left">
            <p className="font-semibold">Lower 2</p>
            <p className="text-sm italic">workout tooltip</p>
          </div>
        </button>
      </div>
      <button className="mt-12 flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-button500 to-red-button500 px-8 py-2 text-lg font-semibold uppercase text-yellow-text50 hover:from-orange-button600 hover:to-red-button700">
        Start
        {StartIcon}
      </button>
    </div>
  );
};

export default SignedIn;
