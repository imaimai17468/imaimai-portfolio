import { DragProps } from "./Drag.type";
import { motion } from "framer-motion";

export const Drag: React.FC<DragProps> = ({
  children,
  container,
  className,
}) => {
  return (
    <motion.div className={className} drag dragConstraints={container}>
      {children}
    </motion.div>
  );
};

export default Drag;
