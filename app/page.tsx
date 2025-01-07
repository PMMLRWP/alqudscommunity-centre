import Courses from "@/components/CoursesOffered";
import Hero from "@/components/Hero/Hero";
import Video from "@/components/Hero/Video";
import Navbar from "@/components/Navbar/Navbar";
import ProgramOverview from "@/components/ProgramOverview";
import Image from "next/image";

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
