import { useSearchParams } from "next/navigation";
import { getCategory } from "@/app/actions/getCategory";
import CategoryPill from "../components/CategoryPill";

const Categories = async () => {
  const category = await getCategory();
  const params = useSearchParams();
  const category_url = params?.get("category");
  return (
    <div className="px-10 flex items-start gap-3 mb-10">
      {category?.map((category) => (
        <CategoryPill key={category.id} label={category.name} selected={category.name.toLowerCase() === category_url} />
      ))}
    </div>
  );
};

export default Categories;
