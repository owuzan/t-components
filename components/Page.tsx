import classNames from "classnames";
import Head from "next/head";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
const Page = ({
  children,
  title,
  description = "Frontend Developer",
}: Props) => {
  const pageTitle = useMemo(() => {
    if (title) {
      return `${title} - Oğuzhan Yılmaz`;
    }
    return `Oğuzhan Yılmaz - Frontend Developer`;
  }, [title, description]);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="py-24"
      >
        <div className="container max-w-screen-md mx-auto">{children}</div>
      </motion.div>
    </>
  );
};

type TitleProps = {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  semanticLevel?: 1 | 2 | 3 | 4;
  noMargin?: boolean;
};
const Title = (props: TitleProps) => {
  const { children, level = 1, semanticLevel = 1, noMargin = false } = props;

  const h1Classes = useMemo(
    () => "text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold mb-6",
    []
  );
  const h2Classes = useMemo(
    () => "text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-5",
    []
  );
  const h3Classes = useMemo(
    () => "text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
    []
  );
  const h4Classes = useMemo(
    () => "text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold mb-3",
    []
  );

  const titleClasses = useMemo(() => {
    switch (level) {
      case 1:
        return h1Classes;
      case 2:
        return h2Classes;
      case 3:
        return h3Classes;
      case 4:
        return h4Classes;
      default:
        return h1Classes;
    }
  }, [level]);

  const className = useMemo((): string => {
    return classNames(titleClasses, [noMargin && "!mb-0"]);
  }, [titleClasses, noMargin]);

  if (!children) {
    return null;
  }

  switch (semanticLevel) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
};

type ContentProps = {
  children?: React.ReactNode;
};
const Content = ({ children }: ContentProps) => {
  if (!children) {
    return null;
  }
  return (
    <main className="my-12 text-xl mt-6 mx-auto text-gray-500">{children}</main>
  );
};

Page.Title = Title;
Page.Content = Content;

export default Page;
