import Image from "next/image";
import Link from "next/link";
import chico from "../../public/images/chico.png";

function Hero() {
  return (
    <section className="text-center">
      <Image
        src={chico}
        alt="chico"
        width={250}
        height={250}
        className="mx-auto rounded-full "
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm mimi"}</h2>
      <h3 className="text-xl font-sem">Front-end Engineer</h3>
      <Link
        className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2"
        href="/contact"
      >
        Contact me
      </Link>
    </section>
  );
}

export default Hero;
