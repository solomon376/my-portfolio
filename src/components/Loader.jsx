import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [text, setText] = useState("");
  const word = "<Welcome />";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(typing);
        setTimeout(() => setLoading(false), 800); // fade after pause
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-mono font-bold text-white tracking-wide"
          >
            {text}
            <span className="animate-pulse text-primary">|</span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
