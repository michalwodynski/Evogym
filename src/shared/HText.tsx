import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HText({ children }: Props) {
  return (
    <h2 className="font-montserrat basis-3/5 text-3xl font-bold">{children}</h2>
  );
}
