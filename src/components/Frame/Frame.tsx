import { FC, PropsWithChildren } from "react";
import "./Frame.css";
const Frame: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className="frame">{children}</div>;
};

export default Frame;
