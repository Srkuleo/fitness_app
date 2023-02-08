import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  DarkModeIcon,
  SignOutIcon,
  StartIcon,
} from "../components/svg";

/* Povećati ikonice, smanjiti tekst, promeniti boju ikonice na hover da bude siva a ovako zelena, tekst siv a na hover beo
bg hover zelen, dugme uvek zeleno na hover tamnije 
U state-u namestiti hover za icon i tekst
*/

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <div className="bg-slate-50">
          <div className="m-1 flex flex-col items-center gap-20 rounded-2xl bg-gray-sand ">
            <div className="fixed top-6 right-18 flex flex-col items-end gap-2">
              <button className="m-0 flex flex-row items-center gap-3 rounded-lg bg-green-600/90 px-3 py-1 font-medium text-yellow-50 transition-all ease-out hover:bg-green-400/80">
                Options
                {ArrowDownIcon}
              </button>
              <div className="flex flex-col rounded-lg bg-slate-50 p-1 text-slate-600">
                <Link
                  className="flex flex-row items-center gap-2 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-green-600 hover:text-yellow-50"
                  href="/"
                >
                  <span className=" text-green-500 ">{UserIcon}</span>
                  Srkuleo
                </Link>
                <button className="flex flex-row items-center gap-2 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-green-600 hover:text-yellow-50">
                  <span className=" text-green-500 ">{EditIcon}</span>
                  Edit
                </button>
                <button className="flex flex-row items-center gap-2 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-green-600 hover:text-yellow-50">
                  <span className=" text-green-500 ">{LogsIcon}</span>
                  View logs
                </button>
                <button className="flex flex-row items-center gap-2 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-green-600 hover:text-yellow-50">
                  <span className=" text-green-500 ">{DarkModeIcon}</span>
                  Dark mode
                </button>
                <div className="my-1 border-b border-green-500/20"></div>
                <Link
                  className="flex flex-row items-center gap-2 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-green-600 hover:text-yellow-50"
                  href="/"
                >
                  <span className=" text-green-500 ">{SignOutIcon}</span>
                  Sign out
                </Link>
              </div>
            </div>

            <h1 className="mt-28 bg-gradient-to-l from-emerald-400 to-green-400 bg-clip-text text-4xl font-bold uppercase leading-normal text-transparent">
              Welcome to NoteSet, you are signed in.
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h3 className="mb-2 text-xl text-yellow-50">
                Choose your workout for today:
              </h3>
              <div className="grid grid-cols-3 gap-1 rounded-xl bg-gradient-to-r from-emerald-500/70 to-green-600/80 p-1 text-center text-lg text-yellow-50">
                <button className="focus:shadow-outline rounded-lg border-2 border-transparent py-1 px-14 font-bold hover:bg-green-400/60 focus:border-green-500 focus:bg-slate-50 focus:text-emerald-700">
                  Push
                </button>
                <button className="focus:shadow-outline rounded-lg border-2 border-transparent py-1 px-14 font-bold hover:bg-green-400/60 focus:border-green-500 focus:bg-slate-50 focus:text-green-600">
                  Pull
                </button>
                <button className="focus:shadow-outline rounded-lg border-2 border-transparent py-1 px-14 font-bold hover:bg-green-400/60 focus:border-green-500 focus:bg-slate-50 focus:text-green-600">
                  Leg
                </button>
              </div>
              <div className="rounded-xl bg-slate-50 px-24 py-20 text-lg">
                Here is tooltip for selected workout.
              </div>
            </div>
            <button className="mb-10 flex flex-row items-center gap-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-2 text-lg font-semibold uppercase text-yellow-50 hover:from-orange-600 hover:to-red-700">
              Start
              {StartIcon}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignedIn;
