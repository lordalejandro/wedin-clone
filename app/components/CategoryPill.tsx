"use client"

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

type CategoryPillProps = {
  key: string;
  label: string;
  selected?: boolean;
};

const CategoryPill: React.FC<CategoryPillProps> = ({
  selected,
  label,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      updatedQuery.category = "";
    }

    const url = qs.stringifyUrl(
      {
        url: "/gifts",
        query: updatedQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        rounded-full
        py-1 px-4
        transition
        cursor-pointer
        hover:bg
        ${selected ? "bg-primaryBackgroundColor text-white" : "border border-secondaryBorderColor"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <div className={`${selected ? "text-white" : "text-primaryTextColor"}`}>{label}</div>
    </div>
  );
};

export default CategoryPill;
