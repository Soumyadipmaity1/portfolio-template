const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <p>
        © {new Date().getFullYear()} All rights reserved to Ritika Banerjee. Developed by{" "}
        <a
          href="https://www.mynimalistic.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Mynimalistic
        </a>{" "}
        with ❤️
      </p>
    </footer>
  );
};

export default Footer;
