

const FooterPage = () => {
    return (
        <div>
            <footer className="bg-black text-gray-300 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

    {/* Brand + Contact */}
    <div>
      <h2 className="text-3xl font-bold">
        <span className="text-blue-500">Am</span>
        <span className="text-orange-500">S</span>
        <span className="text-white">.store</span>
      </h2>

      <p className="mt-4 text-gray-400 text-sm">
        Your trusted online shopping destination.
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <p>📧 support@amsstore.com</p>
        <p>📞 +880 1331 798520</p>
        <p>📍 Bangladesh</p>
      </div>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Follow Us
      </h3>

      <div className="flex flex-col gap-3">
        <a
          href="#"
          className="hover:text-blue-400 transition duration-300"
        >
          Facebook
        </a>

        <a
          href="#"
          className="hover:text-pink-400 transition duration-300"
        >
          Instagram
        </a>

        <a
          href="#"
          className="hover:text-sky-400 transition duration-300"
        >
          Twitter / X
        </a>
      </div>
    </div>

    {/* Privacy & Policy */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Policies
      </h3>

      <div className="flex flex-col gap-3">
        <a
          href="/privacy-policy"
          className="hover:text-orange-400 transition"
        >
          Privacy Policy
        </a>

        <a
          href="/terms"
          className="hover:text-orange-400 transition"
        >
          Terms & Conditions
        </a>

        <a
          href="/refund-policy"
          className="hover:text-orange-400 transition"
        >
          Refund Policy
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
    © 2026 AmS.store. All rights reserved.
  </div>
</footer>
        </div>
    );
};

export default FooterPage;