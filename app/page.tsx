import React from "react";
import { FlipWords } from "../components/flip-words";
import { Vortex } from "@/components/vortex";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/tracing-beam";

export function VortexDemo() {
  return (
    <div className="w-[calc(100% - 4rem)] mx-auto rounded-md h-screen overflow-hidden my-4">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Want to Elevate your programming skills???
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          At Dijkstra Solutions Academy, we offer comprehensive courses designed
          to take you from beginner to expert in both DSA and Web Development.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px-2px-0px-0px-#FFFFFF40_inset]">
            View Course
          </button>
          <button className="px-4 py-2 text-white">Watch Videos</button>
        </div>
      </Vortex>
    </div>
  );
}

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("font-calsans", "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Data Structures & Algorithms BootCamp",
    description: (
      <>
        <p>
          A comprehensive program that covers the fundamentals of data
          structures and algorithms. It includes lectures and exercises to help
          students design and implement efficient solutions. This course is
          suitable for beginners and experienced programmers and aims to prepare
          students for technical interviews and placement exams.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Blockchain Development.",
    description: (
      <>
        <p>
          Course Overview: This program introduces the fundamentals of
          blockchain technology, suitable for beginners and programmers
          interested in decentralized applications (dApps), cryptocurrencies,
          and blockchain development.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web Development",
    description: (
      <>
        <p>
          Web Development Course Outline Course Overview: This program covers
          the fundamentals of web development, suitable for beginners and
          experienced programmers alike. It includes lectures, practical
          exercises, and projects aimed at mastering essential skills for
          building modern web applications.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FlipWordsDemo() {
  const words = ["DSA", "Development", "Blockchain", "Web3.0"];

  return (
    <div className="flex flex-col items-center">
      <div className="h-screen flex justify-center items-center w-full my-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
          Welcome to <span style={{ color: "white" }}>Dijkstra Solutions</span>,
          Learn <FlipWords words={words} /> <br />
          Your Shorted Path to Success{" "}
          <span style={{ color: "hotpink" }}>learn Coding</span>
        </div>
      </div>
      <TracingBeamDemo />
      <VortexDemo />
    </div>
  );
}
