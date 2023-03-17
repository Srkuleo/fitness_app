export const SignContentHeading = ({ page }: Record<"page", string>) => {
  return (
    <div>
      <p className="text-xl font-bold text-slate-main600 dark:text-yellow-text50">
        {page === "sign in"
          ? "Sign in and start your workout."
          : "A minimalistic approach to tracking your workout progress."}
      </p>
      <p className="mt-4 mb-3 italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </div>
  );
};

export const RadioButtonHeading = () => {
  return (
    <div className="relative z-0 text-center">
      <h1 className="mt-36 mb-18 text-5xl font-bold text-orange-button500">
        Welcome, Srkuleo.
      </h1>
      <h3 className="mb-6 text-2xl font-semibold text-slate-main600 dark:text-yellow-text50">
        Slide left or right to choose a workout
      </h3>
    </div>
  );
};
