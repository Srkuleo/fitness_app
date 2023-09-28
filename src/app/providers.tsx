"use client";

import type { WrapperProp } from "../types/types";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: WrapperProp) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
