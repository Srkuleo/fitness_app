export const SignContentHeading = ({ page }: { page: string }) => {
  return (
    <>
      <p className="mb-3 text-lg font-bold text-slate-main600 dark:text-slate-light50 xs:text-xl">
        {page === "sign in"
          ? "Sign in, start tracking."
          : "Sign up for free!"}
      </p>
      <p className="mb-3 text-sm italic text-slate-main600 dark:text-slate-light300 xs:text-base">
        continue with
      </p>
    </>
  );
};
