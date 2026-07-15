import { motion } from "framer-motion";
import Button from "../components/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center text-center px-5">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm text-accent mb-4"
      >
        $ curl ./this-page
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="font-display text-7xl sm:text-8xl font-semibold text-gradient"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-sm text-muted mt-4 max-w-md"
      >
        Error: Route not found. This page either moved, was renamed, or never existed.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8">
        <Button to="/" variant="primary">
          <FiArrowLeft /> Back to Home
        </Button>
      </motion.div>
    </section>
  );
}
