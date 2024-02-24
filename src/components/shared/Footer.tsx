import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-fit w-full">
      <div className="flex min-h-32 justify-center items-center w-full shadow-inner p-3">
        <p>
          &copy; {new Date().getFullYear()} Donation Crowd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
