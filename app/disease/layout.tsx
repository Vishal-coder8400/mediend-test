import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Expert Care at mediEND",
    default: "Expert Care at mediEND",
  },
};

export default function DiseaseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
