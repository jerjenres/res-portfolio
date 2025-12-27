"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Navbar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl py-3 px-4 transition-all bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg"
          )}
        >
          <div className="flex items-center">
            {/* Navigation */}
            <div className="flex-1 flex justify-center gap-1 md:gap-6">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={item.href}
                    className={cn("relative", active ? "" : "hidden md:block")}
                  >
                    {active ? (
                      <span
                        className="text-sm md:text-sm font-medium text-primary transition-all"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm md:text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                      >
                        {item.label}
                      </Link>
                    )}

                    {active && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="h-[2px] w-full bg-primary absolute -bottom-1 left-0 hidden md:block"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-muted/50 shadow-sm"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="p-0 bg-black text-white border-l border-white/10"
                >
                  <SheetTitle asChild>
                    <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                  </SheetTitle>

                  <div className="flex flex-col h-full">
                    {/* Nav links */}
                    <div className="flex-1 px-6 py-6 flex flex-col gap-2">
                      {NAV_ITEMS.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <motion.div
                            whileTap={{ scale: 0.97 }}
                            key={item.href}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-3 px-4 text-lg font-medium rounded-md transition-all",
                                active
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-muted/40 hover:text-primary"
                              )}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>



                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
