import Link from "next/link";
import LogoSvg from "./logo-svg";
import { LogoWrapper, SignInFormWrapper } from "./wrappers";

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSvg />
      <p className="text-2xl text-yellow-50">
        <span className="text-2xl font-bold text-green-500">Note</span>Set
      </p>
    </LogoWrapper>
  );
};

export const SignInForm = () => {
  return (
    <SignInFormWrapper>
      <h3 className="mb-5 mt-10 text-2xl text-yellow-50">
        Sign in and start your workout.
      </h3>
      <div className="mb-5 w-24 border border-green-500"></div>
      <form action="#" className="flex flex-col pr-7">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email or Username"
          required
          className="mb-2 rounded-2xl p-3"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          className=" rounded-2xl p-3"
        />
        <button className="mb-10 mt-5 rounded-3xl bg-green-500 p-3 text-yellow-50">
          Sign In
        </button>
      </form>
      <p className=" text-yellow-50">
        Forgot your{" "}
        <Link className="font-semibold text-green-500" href="/">
          password
        </Link>
        ?
      </p>
      <p className="mb-16 mt-1 text-yellow-50">
        New to Noteset? Sign up{" "}
        <Link className="font-semibold text-green-500" href="/sign-up">
          here
        </Link>
        .
      </p>
    </SignInFormWrapper>
  );
};
