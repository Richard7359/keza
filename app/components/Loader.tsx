import { cn } from "@/lib/utils";

export default function Loader({ isActive }: { isActive?: boolean }) {
  return (
    <div className="loader fixed inset-0 z-[100] overflow-hidden">
      <div
        className={cn(
          !isActive ? "bg-black/20" : "bg-black/20 dark:bg-dark",
          "relative h-[.2rem] "
        )}
      >
        <span className="spinAnimation absolute left-0 top-0 z-[101] inline-block h-full w-2/5 rounded-md bg-primary shadow-md lg:w-1/4"></span>
      </div>
      <div className="overlay inset-0 h-full  bg-black/20"></div>
    </div>
  );
}
