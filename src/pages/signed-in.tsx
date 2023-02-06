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
        <div className="flex h-screen w-screen flex-col">
          <div className="flex h-3/5 flex-col items-center gap-10 bg-gradient-to-tr from-gray-600 to-slate-900">
            <div className="fixed top-6 right-18 flex h-14 w-56 flex-col items-end gap-2">
              <button className="m-0 flex flex-row items-center gap-3 rounded-md border-2 bg-slate-50 px-3 py-1 font-bold text-green-600 transition-all ease-out hover:border-yellow-50 hover:bg-green-600/90 hover:text-yellow-50">
                Options
                {ArrowDownIcon}
              </button>
              <div className="flex flex-col rounded-md bg-slate-50 p-1 text-green-600">
                <Link
                  className="flex flex-row items-center gap-1 py-1 pr-24 pl-2 text-left font-medium transition-all ease-out hover:rounded-lg hover:bg-green-600/90 hover:text-yellow-50"
                  href="/"
                >
                  {UserIcon}
                  Srkuleo
                </Link>
                <button className="flex flex-row items-center gap-1 py-1 pr-24 pl-2 text-left font-medium transition-all ease-out hover:rounded-lg hover:bg-green-600/90 hover:text-yellow-50">
                  {EditIcon}
                  Edit
                </button>
                <button className="flex flex-row items-center gap-1 py-1 pr-24 pl-2 text-left font-medium transition-all ease-out hover:rounded-lg hover:bg-green-600/90 hover:text-yellow-50">
                  {LogsIcon}
                  View logs
                </button>
                <button className="flex flex-row items-center gap-1 py-1 pr-24 pl-2 text-left font-medium transition-all ease-out hover:rounded-lg hover:bg-green-600/90 hover:text-yellow-50">
                  {DarkModeIcon}
                  Dark mode
                </button>
                <div className="my-1 border-b border-green-600/30"></div>
                <Link
                  className="flex flex-row items-center gap-2 py-1 pr-24 pl-2 text-left font-medium transition-all ease-out hover:rounded-lg hover:bg-green-600/90 hover:text-yellow-50"
                  href="/"
                >
                  {SignOutIcon}
                  Sign out
                </Link>
              </div>
            </div>
            <div className="text-center">
              <p className="mt-28 mb-10 bg-gradient-to-tl from-cyan-400 via-teal-500 to-green-500 bg-clip-text text-4xl font-bold uppercase leading-normal text-transparent">
                Welcome to NoteSet, you are signed in.
              </p>
              <p className="mb-10 text-xl text-yellow-50">
                Choose your workout for today:
              </p>
            </div>
          </div>
          <div className="h-2/5 bg-slate-50"></div>
        </div>
      </main>
    </>
  );
};

export default SignedIn;
