import type { WorkoutProps } from "../types/types";

export const SignContentHeading = ({ page }: { page: string }) => {
  return (
    <div>
      <p className="text-xl font-bold text-slate-main600 dark:text-yellow-text50">
        {page === "sign in"
          ? "Sign in and start your workout."
          : "A minimalistic approach to tracking your workout progress."}
      </p>
      <p className="mb-3 mt-4 italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </div>
  );
};

export const CardsHeading = ({ workouts }: { workouts: WorkoutProps[] }) => {
  return (
    <div className="text-center">
      <h1 className="mb-18 text-5xl font-bold text-orange-button500">
        Welcome, Srkuleo.
      </h1>
      <h3 className="text-2xl font-semibold text-slate-main600 dark:text-yellow-text50">
        {workouts.length > 0 ? "Swipe left or right to choose a workout" : ""}
      </h3>
    </div>
  );
};
