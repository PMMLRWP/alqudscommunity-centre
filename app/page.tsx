import Courses from "@/components/CoursesOffered";
import Hero from "@/components/Hero/Hero";
import Video from "@/components/Hero/Video";
import Navbar from "@/components/Navbar/Navbar";
import ProgramOverview from "@/components/ProgramOverview";

export default function Home() {
  return (
<>
<Navbar />
<Hero />
<Video />
<ProgramOverview /> 
<Courses />

</>
  );
}
