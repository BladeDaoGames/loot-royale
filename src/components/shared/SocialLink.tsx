import { motion } from 'framer-motion';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialLink = ({ icon, label, className }: SocialLinkProps) => {
  const hoverAnimation = {
    scale: 1.1,
    rotate: 1.5,
    // Add a transition effect if needed
    transition: {
      type: "spring",
      stiffness: 300,
    }
  };

  return (
    <motion.div 
      className={`flex gap-1 justify-center items-center cursor-pointer ${className}`}
      whileHover={hoverAnimation}
    >
      {icon}
      <div className="-mb-1">{label}</div>
    </motion.div>
  );
};

export default SocialLink;
