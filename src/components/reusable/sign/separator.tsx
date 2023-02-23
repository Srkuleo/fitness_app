export const Separator = () => {
  return (
    <div className="mx-2 my-3 flex items-center gap-1">
      <div className="w-32 border-b border-green-main500/70"></div>
      <p className="text-sm italic text-slate-main600 dark:text-slate-light300">
        or
      </p>
      <div className="w-32 border-b border-green-main500/70"></div>
    </div>
  );
};
