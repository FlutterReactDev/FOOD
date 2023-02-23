import React, { ReactNode } from "react";

import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";
import { IComponentBaseProps } from "../types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    item?: ReactNode;
    horizontal?: "left" | "center" | "right";
    vertical?: "top" | "middle" | "end";
    hover?: boolean;
    open?: boolean;
  };

// TODO: Отрефакторить это 💩

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      className,
      item,
      horizontal,
      vertical,
      hover,
      open,
      dataTheme,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "dropdown",
      className,
      clsx({
        [`dropdown-${horizontal}`]: horizontal,
        [`dropdown-${vertical}`]: vertical,
        "dropdown-hover": hover,
        "dropdown-open": open,
      })
    );

    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {children}
      </div>
    );
  }
);

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
