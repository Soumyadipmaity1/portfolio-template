'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, type LucideIcon } from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:top-4 px-4 pb-4 sm:pb-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-md mx-auto overflow-hidden">
              <div className="relative bg-gray-900/[0.75] 
                           backdrop-blur-lg rounded-2xl shadow-lg 
                           border border-white/20 dark:border-gray-800/50">
                <div className="relative z-10">
                  <motion.div
                    initial={false}
                    animate={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Inner gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  to-transparent from-gray-900/40 
                                 pointer-events-none" />

                    <ul className="flex items-center justify-around sm:justify-evenly p-2">
                      {navItems.map((item) => (
                        <li key={item.path}>
                          <Link href={item.path}>
                            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl
                                        relative transition-colors duration-200 group">
                              <motion.div
                                style={{ position: 'relative' }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <item.icon
                                  size={24}
                                  strokeWidth={2}
                                  className={`transition-colors duration-200
                                    ${pathname === item.path 
                                      ? 'text-purple-400' 
                                      : 'text-gray-400 group-hover:text-purple-300'
                                    }`}
                                />
                                <AnimatePresence mode="wait">
                                  {pathname === item.path && (
                                    <motion.div
                                      layoutId="navActive"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ 
                                        opacity: 1, 
                                        scale: 1,
                                        transition: {
                                          type: "spring",
                                          stiffness: 200,
                                          damping: 20
                                        }
                                      }}
                                      exit={{ 
                                        opacity: 0, 
                                        scale: 0.8,
                                        transition: {
                                          duration: 0.2,
                                          ease: "easeOut"
                                        }
                                      }}
                                      style={{
                                        position: 'absolute',
                                        inset: 0,
                                        margin: '-0.5rem',
                                        backgroundColor: 'rgba(167, 139, 250, 0.15)',
                                        borderRadius: '0.75rem',
                                        zIndex: -10,
                                      }}
                                    />
                                  )}
                                </AnimatePresence>
                              </motion.div>
                              <span className={`text-xs font-medium transition-colors duration-200
                                ${pathname === item.path 
                                  ? 'text-purple-400' 
                                  : 'text-gray-400 group-hover:text-purple-300'
                                }`}>
                                {item.label}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Floating gradient effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 
                             via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl 
                             animate-gradient -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Navigation; 