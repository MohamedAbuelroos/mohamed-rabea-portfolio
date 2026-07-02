"use client";
import Link from "next/link";
import { infoLinks } from "@/data/info-links";
import { motion } from "framer-motion";

import Logo from "@/components/layout/logo";

export default function InfoPage() {
  return (
    <main
      className="
  relative
  flex
  min-h-screen
  items-center
  justify-center
  overflow-hidden
  px-6
  py-10
"
    >
      <div className="w-full max-w-2xl">
  
        {/* Main Card */}
        <motion.div
          className="
            rounded-xl
            border
            border-border/50
            bg-card
            p-8
            shadow-xl
          "
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Logo />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mt-8 text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
              Digital Business Card
            </p>

            <h1 className="mt-4 text-3xl font-black lg:text-4xl">
              Where Technology Meets
              <br />
              Business Solutions
            </h1>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">
              Frontend Developer specializing in modern web applications,
              enterprise dashboards, booking systems and workflow automation
              solutions.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {infoLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className={`
          group
          flex
          items-center
          gap-4
          rounded-md
          border
          p-5
          transition-all
          hover:-translate-y-1
          hover:border-violet-500

          ${item.featured ? "w-full" : ""}
        `}
                >
                  <div className="rounded-xl bg-violet-500/10 p-3">
                    <Icon size={24} className="text-violet-500" />
                  </div>

                  <div>
                    <p className="font-bold">{item.title}</p>

                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
          >
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-violet-500">10+</p>

                <p className="mt-2 text-sm text-muted-foreground">Projects</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-black text-violet-500">3+</p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-black text-violet-500">10+</p>

                <p className="mt-2 text-sm text-muted-foreground">Solutions</p>
              </div>
            </div>
          </motion.div>
          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Turning ideas into modern digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
