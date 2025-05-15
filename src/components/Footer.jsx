import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left place-items-center md:place-items-start">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">Ditemenin.</h2>
          <p className="text-gray-400 max-w-xs">
            Temukan tour guide profesional untuk menemanimu di berbagai
            destinasi seru.
          </p>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold mb-2">Download Ditemenin App</h3>
          <div className="flex items-center md:items-start gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v3/f/f519939e72eccefffb6998f1397901b7.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v3/1/18339f1ae28fb0c49075916d11b98829.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Kontak / Sosial */}
        <div>
          <h3 className="font-semibold mb-2">Kontak</h3>
          <p className="text-gray-400">Email: support@ditemenin.com</p>
          <p className="text-gray-400">Instagram: @ditemenin</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Ditemenin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
