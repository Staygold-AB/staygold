import avatar from "assets/avatar.png";
import { Container } from "components";
import { ExternalLinkIcon, MailIcon, UserIcon } from "icons";

export function Contact() {
  return (
    <article className="min-h-dvh place-content-center place-items-center bg-amber-200">
      <Container className="mx-auto flex max-w-5xl flex-col sm:flex-row sm:justify-center">
        <img
          src={avatar}
          alt="Portrait of Patrick Chan"
          className="mx-auto aspect-square max-w-64 sm:mx-0"
        />
        <div className="min-w-80 self-center rounded-lg border-4 border-black bg-blue-200 p-4">
          <h1 className="text-2xl">Get in touch!</h1>
          <ul className="text-xl">
            <li className="space-x-2">
              <MailIcon className="inline-block h-6" />
              <a href="mailto:contact@staygold.se" className="underline">
                contact@staygold.se
              </a>
            </li>
            <li className="space-x-2">
              <UserIcon className="inline-block h-6" />
              <a
                href="https://www.linkedin.com/in/patrick-chan/"
                className="space-x-1 underline"
              >
                <span>LinkedIn</span>
                <ExternalLinkIcon className="inline-block h-4" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </article>
  );
}
