import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import PageSearch from "./PageSearch";
import PageTitle from "./PageTitle";

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

const Page: FC<PropsWithChildren<PageProps>> = (props) => {
  const { children, className } = props;
  const classes = twMerge(className, "flex flex-col overflow-y-auto");
  return <div className={classes}>{children}</div>;
};

export default Object.assign(Page, {
  Header: PageHeader,
  Title: PageTitle,
  Search: PageSearch,
  Content: PageContent,
});
