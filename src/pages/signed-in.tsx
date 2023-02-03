import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <div className="h-screen w-screen bg-ohp bg-cover bg-no-repeat">
          <div className="h-screen bg-gradient-to-r from-gray-600/95 to-slate-800/95">
            <div className="m-auto flex h-screen w-3/5 flex-col items-center">
              <p className="mb-20 text-xl text-yellow-50">
                Welcome to NoteSet, you are signed in!
              </p>
              <Link href="/" className="sign-btn">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignedIn;
