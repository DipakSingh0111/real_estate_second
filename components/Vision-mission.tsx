import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      {/* Vision Card */}
      <div className="bg-[#FAFBFD] p-8 sm:p-10 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-[#E0E8FF] rounded-2xl flex items-center justify-center shrink-0">
            <Eye className="w-7 h-7 text-[#1A43BF] stroke-[1.8]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B132A]">Vision</h3>
            <span className="w-6 h-[2px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          To be the most trusted real estate brand, recognized for delivering
          exceptional properties and creating spaces that enhance lives and
          communities.
        </p>
      </div>

      {/* Mission Card */}
      <div className="bg-[#FAFBFD] p-8 sm:p-10 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-[#E0E8FF] rounded-2xl flex items-center justify-center shrink-0">
            <Target className="w-7 h-7 text-[#1A43BF] stroke-[1.8]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B132A]">Mission</h3>
            <span className="w-6 h-[2px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          To provide reliable real estate solutions with integrity, innovation,
          and customer focus, helping our clients achieve their property goals
          and build a better tomorrow.
        </p>
      </div>
    </div>
  );
}
