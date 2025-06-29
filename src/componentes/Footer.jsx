import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      backToTopButton.addEventListener('click', handleClick);
      return () => backToTopButton.removeEventListener('click', handleClick);
    }
  }, []);

  const testimonials = [
    {
      name: 'Ethan Carter',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgam9Q6HN9LlGJexfvHK26UY3cB5W_6yopKPEL1sovw8gMoV7ClV6LnV0Tk-4GB38-9hiVeBr93_XqLXOlt99to3BlSFENVF0ubVYuq395r0jmfMYFM8RdJhsXRKtoK-Ok9RRpVvksBIA5Yln9Fr3R0i5WCnC8mSEAQijnSTT3VkfbgqN5XWx5kRyFxq8dIjCfk3xs9xfKXZtpqmDveapy1JyQLe1HsYXTvyhKedRCZN-QyUMlT_v4alFcjUo55JqIvsM-rLLwek8',
      stars: 5,
      text: 'Excellent service! The tow truck arrived quickly, and the driver was very professional and helpful. Highly recommend!',
      likes: 2,
    },
    {
      name: 'Olivia Bennett',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjUqkDEXIG1-IZ4k5FwFNGdaLu6rLHbxqxEXWHas7U1cihsGHxzgoJWl_Zs88Z81mEJM35KoPkgt16macYp4g4HD-9_djb_b94mx-ZfcKHpPFQ8kmlIX9f5JCMmn9Kk0F8DLDp7ClMxOPRMjRRqFPtgQmIMPnliu_AXox3g8hF8J3XkMGPOjADNCSD8eTcE8CfriakFU-DomjrqWHYHP05Z5A-1kfjl6WHLUY9mtHhut5AOcZD-PXK-oyL8nuSfK1zGR3lVThMmyU',
      stars: 4,
      text: 'Good experience overall. The response time was a bit longer than expected, but the service was efficient and the driver was courteous.',
      likes: 1,
    },
    {
      name: 'Noah Thompson',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyu9QKq1Soo3x6Srvn_aXNmlskErRGpynTsDaAoA3HChqoip4RwvFREXXK6OPomXUh6EB6Pw9VzdYgG40FF3y10NEVurG9E5vljfHnR4mBLyyA6u6wvfOmqLm5ou4B4TdWqekHSPSGWlxUy-Urksz6iHtLm8G8exkfhEZ6YlrysGPA8xpDpOK8-WnTfD6O082vZnA-EMrjWgyWQCrGKfc0HHkScJjl5X0p58vYiPXdr4_DJK-649ZIkvegaYhZyZLYML0qztqyhW8',
      stars: 5,
      text: 'Fast and reliable towing service. They were able to assist me late at night, and I really appreciated their promptness and expertise.',
      likes: 3,
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Customer Testimonials</h2>
          <div className="space-y-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img alt={t.name} className="w-12 h-12 rounded-full mr-4" src={t.img} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(t.stars)].map((_, i) => (
                        <span key={i} className="material-icons text-sm">star</span>
                      ))}
                      {[...Array(5 - t.stars)].map((_, i) => (
                        <span key={i} className="material-icons text-sm">star_border</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{t.text}"</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <button className="flex items-center mr-4 hover:text-orange-accent">
                    <span className="material-icons text-base mr-1">thumb_up</span> {t.likes}
                  </button>
                  <button className="flex items-center hover:text-orange-accent">
                    <span className="material-icons text-base mr-1">thumb_down</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Need help now? Call us 24/7!</h2>
    <a
      href="/request"
      className="bg-orange-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-lg"
    >
      Call Now
    </a>
  </div>
</section>


      {/* Footer */}
<footer class="bg-custom-dark text-gray-300 py-16 px-6">
<div class="container mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<h5 class="text-lg font-semibold text-white mb-4">DOMINATOR TOWING &amp; RECOVERY TEAM</h5>
<p class="mb-2">6601 Grissom Rd Denton TX 76208</p>
<p class="mb-2">Phone: <a class="hover:text-orange-accent transition-colors" href="tel:+1-469-809-0244">+1-469-809-0244</a></p>
<p class="text-sm text-orange-accent font-semibold">DENTON – TEXAS – USA</p>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Navigation</h5>
<ul class="space-y-2">
<li><a class="hover:text-orange-accent transition-colors" href="#">Home</a></li>
  <li><a class="hover:text-orange-accent transition-colors" href="/services">Services</a></li>
  <li><a class="hover:text-orange-accent transition-colors" href="/about">About</a></li>
  <li><a class="hover:text-orange-accent transition-colors" href="/gallery">Gallery</a></li>
  <li><a class="hover:text-orange-accent transition-colors" href="/contact">Contact</a></li>
</ul>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Business Hours</h5>
<p>Open 24/7 – Every day of the year</p>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Follow Us</h5>
<div class="flex space-x-4">
<a
  className="text-gray-300 hover:text-orange-accent transition-colors"
  href="https://www.tiktok.com/@dominator_towing"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <path d="M12.67 2h3.63c.07 2.01 1.62 3.56 3.7 3.63v3.61c-1.22.01-2.36-.34-3.33-.97v7.92c0 3.92-3.2 7.1-7.14 6.8-3.54-.28-6.34-3.38-6.24-6.93.09-3.16 2.47-5.79 5.62-6.16 1.06-.13 2.06 0 2.96.34v3.74c-.61-.3-1.32-.44-2.05-.36-1.63.18-2.83 1.6-2.74 3.24.09 1.63 1.48 2.96 3.12 2.98 1.5.03 2.73-1.09 2.91-2.51.03-.2.04-.41.04-.62V2z" />
  </svg>
</a>


<a
  className="text-gray-300 hover:text-orange-accent transition-colors"
  href="https://www.facebook.com/share/16WJYTeWzQ/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    />
  </svg>
</a>

<a
  class="text-gray-300 hover:text-orange-accent transition-colors"
  href="https://www.instagram.com/dominator_towing?igsh=eG81YjhnZ295OHhl"
  target="_blank"
  rel="noopener noreferrer"
>
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.05 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm0 1.623c-2.387 0-2.691.01-3.615.055-.926.044-1.448.2-1.769.335-.405.166-.678.382-.962.666-.283.283-.5.557-.666.962-.135.322-.291.843-.335 1.769-.045.924-.055 1.228-.055 3.615s.01 2.691.055 3.615c.044.926.2 1.448.335 1.769.166.405.382.678.666.962.283.283.557.5.962.666.322.135.843.291 1.769.335.924.045 1.228.055 3.615.055s2.691-.01 3.615-.055c.926-.044 1.448-.2 1.769-.335.405-.166.678-.382-.962-.666.283-.283.5-.557-.666-.962.135-.322-.291-.843-.335-1.769.045-.924.055-1.228.055-3.615s-.01-2.691-.055-3.615c-.044-.926-.2-1.448-.335-1.769-.166-.405-.382-.678-.666-.962-.283-.283-.5-.557-.962-.666-.322-.135-.843-.291-1.769-.335C15.006 3.633 14.703 3.623 12.315 3.623zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.148a3.148 3.148 0 110-6.296 3.148 3.148 0 010 6.296zM16.56 5.44a1.148 1.148 0 100 2.296 1.148 1.148 0 000-2.296z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
<div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
<p class="text-sm text-center md:text-left mb-4 md:mb-0">Copyright © 2025 Dominator Towing &amp; Recovery LLC. All rights reserved.</p>
<a class="flex items-center text-gray-300 hover:text-orange-accent transition-colors" href="#" id="back-to-top">
<span class="material-icons mr-1">arrow_upward</span>
          Back to top
        </a>
</div>
</div>
</footer>

      {/* WhatsApp Button */}
      <a
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg md:hidden hover:bg-green-600 transition-colors z-40"
        href="https://wa.me/14698090244"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.75 13.96c.27.13.41.42.31.72..." />
        </svg>
      </a>
    </>
  );
};

export default Footer;
