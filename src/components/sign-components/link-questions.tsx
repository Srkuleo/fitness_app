import Link from "next/link";

const LinkQuestions = ({ page }: { page: string }) => {
  return page === "sign in" ? (
    <>
      <p className="mb-2 text-xs text-slate-main600 dark:text-slate-light300">
        Forgot your{" "}
        <Link className="border-b font-semibold text-green-main500" href="/">
          password?
        </Link>
      </p>
      <p className="text-xs text-slate-main600 dark:text-slate-light300">
        New to Noteset?{" "}
        <Link
          className="border-b font-semibold text-green-main500"
          href="/sign-up"
        >
          Sign up here.
        </Link>
      </p>
    </>
  ) : (
    <p className="text-xs text-slate-main600 dark:text-slate-light300">
      Already have an acount?{" "}
      <Link href="/" className="border-b font-semibold text-green-main500">
        Sign in here.
      </Link>
    </p>
  );
};

export default LinkQuestions;
