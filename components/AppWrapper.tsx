import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default AppWrapper;
