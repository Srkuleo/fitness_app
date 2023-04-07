import { circles } from "./circles";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0">
      {circles}
      {curve}
    </div>
  );
};

const curve = (
  <svg
    className="fixed bottom-0 right-0"
    width="1400"
    height="800"
    viewBox="0 0 1400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1400 0C1276.35 618.603 930.958 765.645 0 800H1400V0Z"
      fill="url(#paint0_linear_117_16)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_117_16"
        x1="1016.46"
        y1="320.932"
        x2="1502.3"
        y2="472.756"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.148087" stopColor="#F97316" stopOpacity="0.7" />
        <stop offset="0.666185" stopColor="#927A15" stopOpacity="0.7" />
        <stop offset="1" stopColor="#2D8015" stopOpacity="0.7" />
      </linearGradient>
    </defs>
  </svg>
);

export default BackgroundPattern;
