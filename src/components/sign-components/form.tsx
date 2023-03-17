import Link from "next/link";
import { SignButton } from "../buttons";

const Form = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <form
      action="#"
      className="flex flex-col"
      id={page === "sign in" ? "sign-in" : "sign-up"}
    >
      {page === "sign up" && (
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          autoFocus
          required
          className="input-field"
        />
      )}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autoFocus={page === "sign in" && true}
        required
        className="input-field"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        className="input-field"
      />
      {page === "sign up" && (
        <input
          type="password"
          name="confirm"
          id="confirm"
          placeholder="Confirm password"
          required
          className="input-field"
        />
      )}
      <CheckBox page={page} />
      <SignButton page={page} />
    </form>
  );
};

const CheckBox = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <div className="my-3 flex gap-1 ">
      <input
        type="checkbox"
        id={page === "sign in" ? "remember-me" : "tos"}
        name={page === "sign in" ? "remember-me" : "tos"}
        className="cursor-pointer accent-green-light400"
        required={page === "sign in" ? false : true}
      />
      <label
        htmlFor={page === "sign in" ? "remember-me" : "tos"}
        className="text-xs text-slate-main600 dark:text-slate-light300"
      >
        {page === "sign in" ? "Remember me" : terms}
      </label>
    </div>
  );
};

const terms = (
  <span>
    Creating an account means you agree to the{" "}
    <Link href="/" className="border-b font-semibold text-green-main500">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/" className="border-b font-semibold text-green-main500">
      Privacy Policy
    </Link>
    .
  </span>
);

export default Form;
