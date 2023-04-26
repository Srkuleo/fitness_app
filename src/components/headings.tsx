import type { WorkoutProps } from "../types/types";

export const SignContentHeading = ({ page }: { page: string }) => {
  return (
    <>
      <p className="text-xl font-bold text-slate-main600 dark:text-yellow-text50">
        {page === "sign in"
          ? "Sign in, start your workout."
          : "Sign up, enjoy tracking."}
      </p>
      <p className="mb-3 mt-4 italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </>
  );
};

export const CardsHeading = ({ workouts }: { workouts: WorkoutProps[] }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-orange-button500 md:mb-8 md:text-5xl">
        Welcome, Srkuleo.
      </h1>
      <h3 className="mb-2 text-lg font-semibold text-slate-main600 dark:text-yellow-text50 md:text-2xl">
        {workouts.length > 0 ? "Swipe left or right to choose a workout" : ""}
      </h3>
    </>
  );
};
