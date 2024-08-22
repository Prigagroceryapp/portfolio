"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./ui/Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit">
        <div className="h-screen w-screen fixed top-0 left-0 ring-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
