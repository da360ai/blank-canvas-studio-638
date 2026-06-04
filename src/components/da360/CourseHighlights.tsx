import { Clock, BookOpen, Award, Briefcase, GraduationCap, FileText, Users, Globe, Calendar, Layers, Target, Lightbulb, BarChart3, Rocket, Star, PenTool } from "lucide-react";

const highlights = [
  { icon: Calendar, title: "Course Duration", value: "6+6 Months", color: "text-green-600", bg: "bg-green-50" },
  { icon: Clock, title: "Time", value: "Half Day", color: "text-red-500", bg: "bg-red-50" },
  { icon: BookOpen, title: "Industry-Relevant Topics", value: "30+", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Rocket, title: "AI-Powered Tools in Action", value: "30+", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: BarChart3, title: "Hours of Learning", value: "240+", color: "text-slate-700", bg: "bg-slate-100" },
  { icon: FileText, title: "Brand-Focused Case Studies", value: "50+", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: Layers, title: "Ready-to-Use Marketing Frameworks", value: "10", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Users, title: "No.of.Individual Courses", value: "15", color: "text-yellow-600", bg: "bg-yellow-50" },
  { icon: Target, title: "Capstone-Level Projects", value: "5+", color: "text-red-600", bg: "bg-red-50" },
  { icon: Award, title: "Globally Recognized Certifications", value: "22+", color: "text-green-600", bg: "bg-green-50" },
  { icon: GraduationCap, title: "Outcome-Focused Curriculum", value: "100%", color: "text-amber-700", bg: "bg-amber-50" },
  { icon: Briefcase, title: "Paid Internship", value: "6 Months Included", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: PenTool, title: "Digital Marketing Templates", value: "15+", color: "text-red-500", bg: "bg-red-50" },
  { icon: Star, title: "Experts As Guest Lecturers", value: "15+", color: "text-green-600", bg: "bg-green-50" },
  { icon: Globe, title: "Global Learning Frameworks", value: "7+", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Lightbulb, title: "Industry Event Exposure", value: "5+", color: "text-yellow-500", bg: "bg-yellow-50" },
];

const CourseHighlights = () => (
  <section className="section-spacing px-4">
    <div className="max-w-[1200px] mx-auto bg-[#1a1a1a] rounded-3xl p-8 md:p-12">
      <h2 className="font-heading text-4xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] italic text-white mb-4">
        Course Highlights
      </h2>
      <p className="text-white/80 text-lg mb-[40px] max-w-4xl italic">
        Unlock the Future of Marketing with Our Leadership in Digital Marketing, AI & Entrepreneurship Program
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {highlights.map(({ icon: Icon, title, value, color, bg }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-4 flex items-start gap-3"
          >
            <div className={`${bg} rounded-lg w-10 h-10 flex items-center justify-center shrink-0`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-black leading-tight">{title}</h3>
              <p className="text-black/60 font-semibold text-sm mt-0.5">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseHighlights;
