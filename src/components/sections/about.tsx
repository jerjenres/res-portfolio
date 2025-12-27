"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import {
  ScrollReveal,
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building innovative solutions at the intersection of
              cloud computing, full-stack development, and emerging technologies.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Intro + Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — About Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hi! I am Jerjen Res Pangalay, currently a 4th Year BSIT Student at Cebu Institute of Technology - University.
                With a strong interest in technology and full-stack development, I love creating impactful
                solutions and digital experiences that make a real difference.
              </p>

              <p>
                As a fullstack developer and UI/UX designer, I focus on user experience, layout structuring,
                and visual consistency. My passion lies in leveraging technology and design to solve
                real-world problems and create meaningful digital experiences.
              </p>

              <p>
                I am committed to continuous learning and staying updated with the latest technologies
                in web development. Whether it is building responsive web applications or designing
                intuitive user interfaces, I strive to deliver high-quality solutions that exceed expectations.
              </p>
            </div>

            {/* RIGHT — FLOATING PHOTO + CARD */}
            <div className="relative flex flex-col items-center">

              {/* FLOATING IMAGE */}
              <div className="md:absolute md:-top-24 relative">
                <div className="relative w-48 h-48 md:w-75 md:h-75 rounded-full p-[4px] bg-gradient-to-br from-[var(--teal)] via-[var(--lavender)] to-[var(--teal-light)] shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full relative">

                    <Image
                      src="/me/me.png"
                      alt="Jerjen Res Pangalay"
                      fill
                      className="object-cover rounded-full"
                    />

                  </div>
                </div>

              </div>
              <br className="md:block hidden" /><br className="md:block hidden" /><br className="md:block hidden" />


            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
