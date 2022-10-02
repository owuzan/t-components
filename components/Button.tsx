import classNames from "classnames";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ComponentProps<T extends ElementType> {
  as?: T | ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  hierarchy?: "primary" | "secondary" | "error";
  block?: boolean;
  loading?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

type ElementProps<T extends ElementType> = Omit<
  ComponentPropsWithoutRef<T>,
  "className"
>;

type Props<T extends ElementType> = ComponentProps<T> & ElementProps<T>;

const Button = <T extends ElementType = "button">(props: Props<T>) => {
  const {
    as: Component = "button",
    size = "sm",
    hierarchy = "primary",
    block = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    loading,
    children,
    ...rest
  } = props;

  const className = classNames(
    [
      "relative flex-nowrap items-center justify-center font-medium border rounded-lg shadow transition",
      "focus:outline-none focus:ring-4",
      "disabled:ring-0 disabled:cursor-not-allowed",
    ],
    [block && "flex w-full", !block && "inline-flex"],
    [
      size === "sm" && "text-sm px-3.5 py-2 space-x-2",
      size === "md" && "text-sm px-4 py-2.5 space-x-2",
      size === "lg" && "text-base px-4.5 py-2.5 space-x-2",
      size === "xl" && "text-base px-5 py-3 space-x-2",
      size === "2xl" && "text-lg px-7 py-4 space-x-3",
    ],
    [
      hierarchy === "primary" && [
        "text-white bg-primary-600 border-primary-600",
        "hover:bg-primary-700 hover:border-primary-700",
        "focus:ring-primary-500/25",
        "disabled:bg-primary-200 disabled:border-primary-200",
      ],
      hierarchy === "secondary" && [
        "text-gray-700 bg-white border-gray-300",
        "hover:bg-gray-50 hover:border-gray-300",
        "focus:ring-gray-500/25",
        "disabled:text-gray-300 disabled:bg-white disabled:border-gray-200",
      ],
      hierarchy === "error" && [
        "text-white bg-error-600 border-error-600",
        "hover:bg-error-700 hover:border-error-700",
        "focus:ring-error-500/25",
        "disabled:text-white disabled:bg-error-200 disabled:border-error-200",
      ],
    ]
  );

  const innerClasses = classNames(
    "flex items-center",
    [
      size === "sm" && "space-x-2",
      size === "md" && "space-x-2",
      size === "lg" && "space-x-2",
      size === "xl" && "space-x-2",
      size === "2xl" && "space-x-3",
    ],
    [loading && "invisible"]
  );

  return (
    <Component className={className} {...rest}>
      <span className={innerClasses}>
        {LeftIcon && <LeftIcon />}
        <span>{children}</span>
        {RightIcon && <RightIcon />}
      </span>
      {loading && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AiOutlineLoading3Quarters className="animate-spin" size={20} />
        </span>
      )}
    </Component>
  );
};

export default Button;
