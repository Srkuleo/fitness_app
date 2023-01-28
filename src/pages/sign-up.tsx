import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import NoteSetLogo from "../components/logos/note-set-logo";
import {
  LeftWrapper,
  RightWrapper,
  LogoWrapper,
  MainWrapper,
  SignFormWrapper,
} from "../components/wrappers";
import ExternalAuth from "../components/external-auth";
import * as svg from "../components/svg";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noteset - Sign Up</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <MainWrapper>
          <LeftWrapper>
            <SignFormWrapper>
              <SignUp />
            </SignFormWrapper>
          </LeftWrapper>
          <RightWrapper>
            <p>Hi!</p>
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const SignUp = () => {
  return (
    <div>
      <LogoWrapper>
        <p className="text-2xl">Welcome to</p>
        <NoteSetLogo />
      </LogoWrapper>

      <p className="text-xl font-semibold">Create an account.</p>
      <ExternalAuth
        google={svg.GoogleSvg}
        twitter={svg.TwitterSvg}
        discord={svg.DiscordSvg}
        googleText="Sign up with Google"
        twitterTexT="Sign up with Twitter"
        discordText="Sign up with Discord"
      />
      <p>
        Already have an acount?{" "}
        <Link href="/" className="text-green-500">
          Sign in here.
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
