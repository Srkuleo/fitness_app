import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, SignFormWrapper } from "../components/wrappers";
import SignIn from "../components/sign-in-page-ls";
import { LandingPageImage } from "../components/image-loader";
import NoteSetLogo from "../components/icons/note-set-logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign In</title>
        <meta
          name="description"
          content="Personalized workout tracker - sign in"
        />
      </Head>
      <main>
        <MainWrapper>
          <SignFormWrapper>
            <Header />
            <SignIn />
          </SignFormWrapper>
          <LandingPageImage altTag="deadlift" />
        </MainWrapper>
      </main>
    </>
  );
};

export const Header = () => {
  return (
    <div className="mt-3 flex">
      <NoteSetLogo />
      <div className="flex items-center gap-1 text-2xl text-yellow-text50">
        <button>GitHub</button>
        <button>Mode</button>
      </div>
    </div>
  );
};

export default Home;
