import Navbar from "@components/Navbar";
import { FC, PropsWithChildren } from "react";

const PageTitle: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <Navbar.Start>{children}</Navbar.Start>;
};

export default PageTitle;
