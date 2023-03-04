import Navbar from "@components/Navbar";
import { FC, PropsWithChildren } from "react";

const PageHeader: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <Navbar>{children}</Navbar>;
};
export default PageHeader;
