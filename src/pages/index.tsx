import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, LeftWrapper, RightWrapper } from "../components/wrappers";
import { type SignProps } from "../types/types";
import * as svg from "../components/svg";
import SignIn from "../components/sign-in-page-ls";
import { ImageLoaderDiv } from "../components/reusable/image-loader";

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
          <LeftWrapper>
            <SignIn
              authButtons={signInProps.authButtons}
              inputs={signInProps.inputs}
              checkBox={signInProps.checkBox}
              signButton={signInProps.signButton}
            />
          </LeftWrapper>
          <RightWrapper>
            <ImageLoaderDiv img={signInProps.img} />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const signInProps: SignProps = {
  authButtons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Discord" },
  ],
  inputs: [
    {
      _name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      _name: "password",
      placeholder: "Password",
      type: "password",
    },
  ],
  checkBox: {
    _name: "remember",
    type: "checkbox",
  },
  signButton: {
    buttonText: "Sign In",
    href: "/signed-in",
    onClick: () => console.log("Signed in"),
  },
  img: {
    altTag: "deadlift",
  },
};

export default Home;
