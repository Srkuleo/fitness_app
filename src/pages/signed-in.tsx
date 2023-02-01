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
        <p className="mb-20">Welcome to NoteSet, you are signed in!</p>
        <Link href="/" className="sign-btn">
          Sign Out
        </Link>
      </main>
    </>
  );
};

export default SignedIn;
