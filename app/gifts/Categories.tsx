"use client";

import { useSearchParams } from "next/navigation";
import CategoryPill from "../../components/CategoryPill";

type Category = {
  categories:
    | {
        id: string;
        name: string;
      }[]
    | null;
};

const Categories = ({ categories }: Category) => {
  //const categories = await getCategory();
  const params = useSearchParams();
  const category_url = params?.get("category");
  //console.log(category_url);
  return (
    <div className="px-10 flex items-start gap-3 mb-8 sm:mb-10 overflow-x-auto overflow-y-hidden">
      {categories?.map((category) => (
        <CategoryPill
          key={category.id}
          id={category.id}
          label={category.name}
          selected={category.id === category_url}
        />
      ))}
    </div>
  );
};

export default Categories;
