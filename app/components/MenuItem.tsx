import type { NextPage } from "next";
import React from "react";

type Props = {
  onClick: () => void;
  label: string;
};
const MenuItem: NextPage<Props> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-3 py-3 hover:bg-neutral-100 transition"
    >
      {label}
    </div>
  );
};

export default MenuItem;
