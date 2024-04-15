import React from "react";

type TitleProp = {
  children: React.ReactNode;
};

const ColumnsTitle = ({ children }: TitleProp) => {
  return <h3 className="h3">{children}</h3>;
};

export { ColumnsTitle };
