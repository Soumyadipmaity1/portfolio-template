'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home,
  User,
  Briefcase,
  Mail,
  type LucideIcon
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:top-4 px-4 pb-4 sm:pb-0"
        >
          <div className="max-w-md mx-auto">
            <motion.nav
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md 
                       rounded-2xl shadow-lg border border-purple-100/50 
                       dark:border-purple-900/50 p-2"
              initial={false}
              animate={{ y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glass effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-white/30 
                            dark:from-gray-900/50 dark:to-gray-900/30 -z-10" />

              <ul className="flex items-center justify-around sm:justify-evenly">
                {navItems.map((item) => (
                  <li key={item.path} className="relative">
                    <Link href={item.path}>
                      <motion.div
                        className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl
                          relative group transition-colors duration-200
                          ${pathname === item.path 
                            ? 'text-purple-600 dark:text-purple-400' 
                            : 'text-gray-600 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400'
                          }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative">
                          <item.icon 
                            size={24} 
                            strokeWidth={2}
                            className="transition-transform duration-200 group-hover:scale-110"
                          />
                          {pathname === item.path && (
                            <motion.div
                              layoutId="navActive"
                              className="absolute inset-0 -m-2 bg-purple-100 dark:bg-purple-900/30 
                                       rounded-xl -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </span>
                        <span className="text-xs font-medium">{item.label}</span>
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Floating gradient effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 
                          to-purple-500/10 rounded-2xl blur-xl -z-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation; 