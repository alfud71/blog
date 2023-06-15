import { Metadata } from "next";
import Hero from "../components/Hero";
export const metadata: Metadata = {
  title: "About Me",
  description: "Mimi 커리어 소개",
};
function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shodow-lg p-8 m-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 my-2">Who Am I?</h2>
        <p>
          개발을 사랑하는 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Career</h2>
        <p>
          쏠리드랩스 (~Now)
          <br />
          마인즈랩 (~2020)
          <br />
          이노디에스 (~2018)
        </p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Skills</h2>
        <p>
          ReactJS, AngularJS, JavaScript, HTML, CSS, SCSS
          <br />
          Git, VS Code, IntelliJ
        </p>
      </section>
    </>
  );
}

export default AboutPage;
