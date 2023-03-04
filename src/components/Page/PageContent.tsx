import { PropsWithChildren, FC } from "react";

const PageContent: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <main className="flex-1">{children}</main>;
};

export default PageContent;
