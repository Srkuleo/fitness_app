import Link from "next/link";

const LinkQuestions = ({ page }: { page: "sign in" | "sign up" }) => {
  return page === "sign in" ? (
    <div className="my-4 space-y-2 text-xs text-slate-main600 dark:text-slate-light300">
      <p>
        Forgot your{" "}
        <Link
          className="border-b text-sm font-semibold text-green-main500"
          href="/"
        >
          password?
        </Link>
      </p>
      <p>
        New to Noteset?{" "}
        <Link
          className="border-b text-sm font-semibold text-green-main500"
          href="/sign-up"
        >
          Sign up here.
        </Link>
      </p>
    </div>
  ) : (
    <p className="my-4 text-xs text-slate-main600 dark:text-slate-light300">
      Already have an acount?{" "}
      <Link
        href="/"
        className="border-b text-sm font-semibold text-green-main500"
      >
        Sign in here.
      </Link>
    </p>
  );
};

export default LinkQuestions;
