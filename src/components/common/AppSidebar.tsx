import { CLASS_CATEGORY } from "@/constants/category.constant";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui";

function AppSidebar() {
  return (
    <aside className="flex w-60 min-w-60 flex-col gap-6">
      <div className="flex items-center gap-2">
        {/* shadcn/ui의 Typography h4 컴포넌트 */}
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">카테고리</h4>
        <ChevronDown className="mt-1" />
      </div>
      <div className="flex w-full flex-col gap-2">
        {CLASS_CATEGORY.map((menu) => {
          return (
            <Button
              key={menu.id}
              variant={"ghost"}
              className="text-muted-foreground justify-start transition-all duration-500 hover:pl-6 hover:text-white"
            >
              {menu.icon}
              {menu.label}
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export { AppSidebar };
