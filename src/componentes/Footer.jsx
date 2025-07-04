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
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Customer Testimonials
      </h2>
      <div className="space-y-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <img alt={t.name} className="w-12 h-12 rounded-full mr-0 sm:mr-4 mb-2 sm:mb-0" src={t.img} />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <div className="flex justify-center sm:justify-start text-yellow-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="material-icons text-sm">star</span>
                  ))}
                  {[...Array(5 - t.stars)].map((_, i) => (
                    <span key={i} className="material-icons text-sm">star_border</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center sm:text-left">"{t.text}"</p>
            <div className="flex justify-center sm:justify-start items-center text-gray-500 text-sm gap-4">
              <button className="flex items-center hover:text-orange-accent">
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
    <div className="max-w-screen-xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Need help now? Call us 24/7!
      </h2>
      <a
        href="/request"
        className="bg-orange-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-lg"
      >
        Call Now
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-custom-dark text-gray-300 py-16 px-4 sm:px-6">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">DOMINATOR TOWING & RECOVERY TEAM</h5>
          <p className="mb-2">6601 Grissom Rd Denton TX 76208</p>
            <p className="mb-2">
    Phone: <a className="hover:text-orange-accent transition-colors block" href="tel:+1-469-809-0244">+1-469-809-0244</a>
    <a className="hover:text-orange-accent transition-colors block" href="tel:+1-940-442-9806">+1-940-442-9806</a>
  </p>
          <p className="text-sm text-orange-accent font-semibold">DENTON – TEXAS – USA</p>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Navigation</h5>
          <ul className="space-y-2">
            <li><a className="hover:text-orange-accent" href="#">Home</a></li>
            <li><a className="hover:text-orange-accent" href="/services">Services</a></li>
            <li><a className="hover:text-orange-accent" href="/about">About</a></li>
            <li><a className="hover:text-orange-accent" href="/gallery">Gallery</a></li>
            <li><a className="hover:text-orange-accent" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Business Hours</h5>
          <p>Open 24/7 – Every day of the year</p>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            {/* tus íconos SVG aquí... */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-sm mb-4 md:mb-0">© 2025 Dominator Towing & Recovery LLC. All rights reserved.</p>
        <a id="back-to-top" className="flex items-center hover:text-orange-accent">
          <span className="material-icons mr-1">arrow_upward</span>Back to top
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
      <path d="..." />
    </svg>
  </a>
</>

  );
};

export default Footer;
