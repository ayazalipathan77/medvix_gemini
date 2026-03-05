import { Activity } from "lucide-react";

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-[#0056b3] rounded-xl text-white shadow-lg shadow-blue-900/20">
        <Activity size={20} strokeWidth={2.5} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00a651] rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl leading-none text-gray-900 tracking-tight">
          MedVix
        </span>
        <span className="font-sans text-[0.6rem] font-medium text-gray-500 uppercase tracking-widest leading-none mt-0.5">
          Solutions
        </span>
      </div>
    </div>
  );
}
