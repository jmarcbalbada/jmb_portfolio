import React from "react";

const Footer = () => {
  return (
    <footer className="mb-8 text-center text-slate-400">
      <p className="flex items-center justify-center gap-2">
        &copy; {new Date().getFullYear()}{" "}
        <a href="mailto:jmarcbalbada@gmail.com" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
          <i className="fa-solid fa-envelope"></i>
          jmarcbalbada@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
