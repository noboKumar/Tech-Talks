import { Plus } from "lucide-react";

const StoryInput = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 w-36 h-44 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm border border-gray-200 dark:border-slate-700 cursor-default"
      aria-label="Add story"
    >
      <div className="cursor-pointer">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-gray-400 text-white text-2xl shadow-md">
          <Plus className="w-6 h-6" />
        </span>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Post a story
        </span>
      </div>

      {/* optional hint */}
      <span className="text-[11px] text-gray-400">Tap to add a 24h story</span>
    </div>
  );
};

export default StoryInput;
