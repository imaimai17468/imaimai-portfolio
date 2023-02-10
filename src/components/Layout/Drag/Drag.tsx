import { DragProps } from "./Drag.type";
import { motion } from "framer-motion";

export const Drag: React.FC<DragProps> = ({
  children,
  container,
  className,
  drag = true
}) => {
  return (
    <motion.div className={className} drag={drag} dragConstraints={container}>
      {children}
    </motion.div>
  );
};

export default Drag;
