import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import Aurora from "./components/Aurora/Aurora";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import PixelTransition from "./components/PixelTransition/PixelTransition";
import { Timeline } from "./components/Timelines/timeline";
import GradientText from "./components/GradientText/GradientText";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import { HeroParallax } from "./components/hero-parallax/hero-parallax";
import TiltCard from "./components/TiltCard/TiltCard";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandDiscord,
  IconBrandLine,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Home() {
  const images1 = [
    { src: "/images/experience/kasir1.png", alt: "Kasir 1" },
    { src: "/images/experience/kasir2.png", alt: "Kasir 2" },
    { src: "/images/experience/kasir3.png", alt: "Kasir 3" },
    { src: "/images/experience/kasir4.png", alt: "Kasir 4" },
  ];
  const images2 = [
    { src: "/images/experience/smart1.png", alt: "smart 1" },
    { src: "/images/experience/smart2.png", alt: "smart 2" },
    { src: "/images/experience/smart3.png", alt: "smart 3" },
    { src: "/images/experience/smart4.png", alt: "smart 4" },
  ];
  const images3 = [
    { src: "/images/experience/vr1.png", alt: "vr 1" },
    { src: "/images/experience/vr2.png", alt: "vr 2" },
    { src: "/images/experience/vr3.png", alt: "vr 3" },
    { src: "/images/experience/vr4.png", alt: "vr 4" },
  ];
  const images4 = [
    { src: "/images/experience/antrian1.png", alt: "antrian 1" },
    { src: "/images/experience/antrian2.png", alt: "antrian 2" },
    { src: "/images/experience/antrian3.png", alt: "antrian 3" },
    { src: "/images/experience/antrian4.png", alt: "antrian 4" },
  ];
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This is a restaurant cashier website to simplify the sales process
            and stock management system. this website uses react js technology
            and the backend uses a json server.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ As a fullstack developer
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Used tech React js and Json server
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Working on your own projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images1.map((img, i) => (
              <TiltCard
                key={i}
                className="w-full h-44 md:h-60 lg:h-72 rounded-lg shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </TiltCard>
            ))}

            <div>
              <Link href="https://github.com/badaso404/web-kasir-resto">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-2 py-1 rounded-lg border text-sm "
                >
                  Project
                </GradientText>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            focus on creating responsive and innovative mobile application
            interfaces. While working with react native framework, I was also
            able to coordinate with the team very well and actively. This
            application aims to help the process of running an merdeka
            curriculum.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ As FrontEnd Mobile Developer and UI/UX
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Used Techonology react native and figma
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ working on team
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images2.map((img, i) => (
              <TiltCard
                key={i}
                className="w-full h-44 md:h-60 lg:h-72 rounded-lg shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </TiltCard>
            ))}

            <div>
              <Link href="https://github.com/badaso404/smartedu5p">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-2 py-1 rounded-lg border text-sm "
                >
                  Project
                </GradientText>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            created a game by maximizing unreal engine 5 software by using
            blueprint technology and based on virtual reality. I was able to
            work under pressure and change ideas during the development process.
            This game is to help pindad practitioners
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Fullstack game VR developer
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Used tech Unreal Engine 5
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Working as a team in internship
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images3.map((img, i) => (
              <TiltCard
                key={i}
                className="w-full h-44 md:h-60 lg:h-72 rounded-lg shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </TiltCard>
            ))}

            <div>
              <Link href="https://gitd3ti.vokasi.uns.ac.id/Bagas/simulator-tembak-reaksi-pt.pindad">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-2 py-1 rounded-lg border text-sm "
                >
                  Project
                </GradientText>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            creating websites with the laravel language. I had the opportunity
            to be a project leader and learn to create a project timeline. this
            website is a website queue for pati police.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ FrontEnd Developer and Project Manager
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Used tech Laravel 10
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Working as a team in internship
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images4.map((img, i) => (
              <TiltCard
                key={i}
                className="w-full h-44 md:h-60 lg:h-72 rounded-lg shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </TiltCard>
            ))}

            <div>
              <Link href="https://gitd3ti.vokasi.uns.ac.id/abhipraya/sistem-antrian">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-2 py-1 rounded-lg border text-sm "
                >
                  Project
                </GradientText>
              </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "More",
      content: (
        <div>
          <Link href="https://github.com/badaso404">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="px-6 py-4 rounded-lg border "
            >
              More Project
            </GradientText>
          </Link>
        </div>
      ),
    },
  ];
  const products = [
    {
      title: "Sistem Antrian",
      link: "https://gomoonbeam.com",
      thumbnail: "/images/experience/antrian1.png",
    },
    {
      title: "Kasir",
      link: "https://cursor.so",
      thumbnail: "/images/experience/kasir1.png",
    },
    {
      title: "Introduce",
      link: "https://userogue.com",
      thumbnail: "/images/experience/porto1.png",
    },

    {
      title: "Smart Edu-P5",
      link: "https://editorially.org",
      thumbnail: "/images/experience/smart1.png",
    },
    {
      title: "Portofolio",
      link: "https://editrix.ai",
      thumbnail: "/images/experience/porto4.png",
    },
    {
      title: "Simulator G2 Elite",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/images/experience/vr1.png",
    },

    {
      title: "Antrian",
      link: "https://algochurn.com",
      thumbnail: "/images/experience/antrian3.png",
    },
    {
      title: "Smart Mobile",
      link: "https://ui.aceternity.com",
      thumbnail: "/images/experience/smart3.png",
    },
    {
      title: "Creativox",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/experience/porto3.png",
    },
    {
      title: "Simulator VR",
      link: "https://smartbridgetech.com",
      thumbnail: "/images/experience/vr2.png",
    },
    {
      title: "",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Simulator VR",
      link: "https://cremedigital.com",
      thumbnail: "/images/experience/vr1.png",
    },
    {
      title: "Polres Pati",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/images/experience/antrian4.png",
    },
    {
      title: "Personal web",
      link: "https://invoker.lol",
      thumbnail: "/images/experience/porto4.47.png",
    },
    {
      title: "Creativox",
      link: "https://efreeinvoice.com",
      thumbnail: "/images/experience/porto1.png",
    },
  ];
  const defaultItems = [
    {
      image: `/images/contact/ig.jpg`,
      text: "",
      link: "https://www.instagram.com/tas.hantu",
    },
    {
      image: `/images/contact/discord.jpg`,
      text: "",
      link: "https://discordapp.com/users/392159001250627586",
    },
    {
      image: `/images/contact/linkedin.jpg`,
      text: "",
      link: "https://www.linkedin.com/in/bgsprtm56",
    },
    {
      image: `/images/contact/line.jpg`,
      text: "",
      link: "https://line.me/ti/p/E8T8maFUHJ",
    },
    {
      image: `/images/contact/github.jpg`,
      text: "",
      link: "https://github.com/badaso404",
    },
    {
      image: `/images/contact/linktree.png`,
      text: "",
      link: "https://linktr.ee/tas.hantu",
    },
  ];
  const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000000] ">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full ">
        <Aurora
          colorStops={["#98D8EF", "#1e68ad", "#7835b8"]}
          blend={0.5}
          amplitude={3.0}
          speed={0.5}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full pl-7">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={400}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold relative z-10 ">
                      I'm ready to work as a
                    </h1>
                    <RotatingText
                      texts={[
                        "Fullstack Developer",
                        "Frontend developer",
                        "Mobile Developer",
                        "UI/UX Designer",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#2c8fb3] text-[#F2EFE7] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2500}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hello, i'm Bagas Pratama"
                    className="text-6xl font-semibold text-center"
                    delay={100}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText
                    text="Software Developer"
                    className="text-6xl font-semibold text-center text-[#2c8fb3]"
                    delay={100}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <div className="flex">
                  <BlurText
                    text="I'm fresh graduated as associate degree and would like to have the opportunity to work as a front end and mobile developer. i already have about one years of experience in these two sections with front and developer and mobile developer, and then one years in game developer. My personality is easy to adapt to anyone, hardworking, and responsible. "
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      <div className="container px-0 py-10 max-w-full ">
        <ScrollVelocity texts={["Hallo Holla", "nice to meet u guys"]} />
      </div>

      <div className="container mx-auto py-10">
        <div className="max-w-7xl py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
            About me
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            I&apos;ve been a few experience for the past 2 years. Here&apos;s u
            can more know me.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <PixelTransition
            firstContent={
              <img
                src="bagas.JPG"
                alt="default"
                className="w-full h-full object-cover"
              />
            }
            secondContent={
              <div className="w-full h-full grid place-items-center bg-[#1e68ad]">
                <p className="font-black text-5xl text-white">Holla</p>
              </div>
            }
            gridSize={18}
            pixelColor="#98D8EF"
            animationStepDuration={0.6}
            className="custom-pixel-card"
          />
          <div className="w-full md:w-1/2">
            <BlurText
              text="this my website for anyone to reach me. i wanna say hello are you guys and i hope u always stay healty. let's enjoy look at my website. Now im looking for a job anything but have to related with my background.  "
              delay={20}
              animateBy="words"
              direction="top"
              className="text-justify text-xl"
            />
          </div>
        </div>

        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <BlurText
              text="my background is front end developer, fullstack developer, and mobile developer. my personality is easy to adapt to anyone, hardworking, and responsible. I hope we can make new networking and if u see my website now please add me in my ig or linkedin. u can see my medsos at the very bottom of this page."
              delay={20}
              animateBy="words"
              direction="top"
              className="text-justify text-xl"
            />
            <div className="w-full md:w-1/2">
              <PixelTransition
                firstContent={
                  <img
                    src="pratama.JPG"
                    alt="default"
                    className="h-full w-full object-cover"
                  />
                }
                secondContent={
                  <div className="h-full w-full grid place-items-center bg-[#1e68ad]">
                    <p className="font-black text-5xl text-white">Hallo</p>
                  </div>
                }
                gridSize={18}
                pixelColor="#98D8EF"
                animationStepDuration={0.6}
                className="custom-pixel-card"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <Timeline data={data} />
        <HeroParallax products={products} />
      </div>
      <div className="container px-0 py-10 max-w-full">
        <ScrollVelocity texts={["Hallo Holla", "nice to meet u guys"]} />
        <div className="container mx-auto py-10">
          <div className="max-w-7xl py-20 px-4 md:px-8 lg:px-10 ">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white font-bold ">
              Contact me
            </h2>
          </div>
          <div className="relative h-[600px] overflow-hidden -mt-60">
            <CircularGallery
              items={defaultItems}
              bend={0}
              textColor="#ffffff"
              borderRadius={0.05}
            />
          </div>
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="flex flex-col gap-6 px-20">
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-3 text-sm font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 text-sm font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Gmail
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Discord
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex flex-col gap-6 px-20">
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandLine className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Line
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Linkedin
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Instagram
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
