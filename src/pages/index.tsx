import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, LeftWrapper, RightWrapper } from "../components/wrappers";
import { type SignProps, inputClass } from "../types/types";
import * as svg from "../components/svg";
import SignIn from "../components/sign-in-page-ls";
import { ImageLoaderDiv } from "../components/reusable/image-loader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign In</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <MainWrapper>
          <LeftWrapper>
            <SignIn
              buttons={signInProps.buttons}
              inputs={signInProps.inputs}
              checkBox={signInProps.checkBox}
              buttonText={signInProps.buttonText}
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
  buttons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Discord" },
  ],
  inputs: [
    {
      _name: "email",
      placeholder: "Email",
      type: "email",
      className: inputClass,
    },
    {
      _name: "password",
      placeholder: "Password",
      type: "password",
      className: inputClass,
    },
  ],
  checkBox: {
    _name: "remember",
    type: "checkbox",
  },
  buttonText: "Sign in",
  img: {
    src: "/images/deadlift.jpg",
    alt: "deadlift",
  },
};

export default Home;
