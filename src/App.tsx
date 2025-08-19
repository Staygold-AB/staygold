import { Contact, Experience, Profile, Skills } from "components";

export default function () {
  return (
    <>
      <main>
        <div className="sticky top-0">
          <Profile />
        </div>
        <div className="relative">
          <Skills />
          <Experience />
        </div>
      </main>
      <footer className="relative">
        <Contact />
      </footer>
    </>
  );
}
