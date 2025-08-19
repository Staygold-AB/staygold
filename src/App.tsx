import { Contact } from "components/contact";
import { Experience } from "components/experience";
import { Profile } from "components/profile";
import { Skills } from "components/skills";

export default function () {
  return (
    <div className="relative font-mono">
      <main>
        <div className="sticky top-0">
          <Profile />
        </div>
        <div className="relative">
          <Skills />
          <Experience />
        </div>
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
