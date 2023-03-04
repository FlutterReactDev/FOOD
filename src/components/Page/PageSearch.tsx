import Navbar from "@components/Navbar";
import { FC, PropsWithChildren } from "react";

const PageSearch: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <Navbar.End>{children}</Navbar.End>;
};

export default PageSearch;
