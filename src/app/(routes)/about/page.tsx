import { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About | Jerjen Res Pangalay",
  description: "Learn more about Jerjen Res Pangalay - 4th Year BSIT Student at Cebu Institute of Technology - University",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
    </>
  );
}
