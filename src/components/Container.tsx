import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
}
const Container = ({ children }: ContainerProp) => {
  return <div className="mx-20 px-5">{children}</div>;
};

export default Container;
