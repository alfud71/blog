import { AiFillGithub, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Me",
  description: "Mimi에게 메일 보내기",
};
const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "",
  },
  { icon: <AiFillYoutube />, url: "" },
  { icon: <AiFillInstagram />, url: "" },
];

function page() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>sonmr@solid.co.kr</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="norefoerrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

export default page;
