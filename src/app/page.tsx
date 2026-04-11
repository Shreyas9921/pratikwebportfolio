import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

const About = dynamic(() =>
  import("@/components/About").then((m) => ({ default: m.About })),
);
const Skills = dynamic(() =>
  import("@/components/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = dynamic(() =>
  import("@/components/Projects").then((m) => ({ default: m.Projects })),
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact })),
);

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
