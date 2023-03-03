const HeadingText = ({ page }: { page: string }) => {
  return (
    <div>
      <p className="text-xl font-bold text-slate-main600 dark:text-yellow-text50">
        {page === "sign in"
          ? "Sign in and start your workout."
          : "A minimalistic approach to tra-cking your workout progress."}
      </p>
      <p className="mt-4 mb-3 italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </div>
  );
};

export default HeadingText;
