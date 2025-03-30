import { useSelector } from 'react-redux'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn,FaXTwitter, FaPinterestP } from 'react-icons/fa6'

export function AppFooter() {

	return (
		<footer class="app-footer-container main-layout">
        <section class="app-footer with-border-top flex">	
          <div class="left flex">
            <span class="severr-logo">severr</span>
            <p class="empty"> &copy; Severr International Ltd. 2025</p>
          </div>		

        <div class="right flex">
        <a 
          href="https://www.tiktok.com/@your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="TikTok"
          className="text-gray-600 text-2xl hover:text-black transition"
        >
          <FaTiktok />
        </a>
        <a 
          href="https://www.instagram.com/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="text-gray-600 text-2xl hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="text-gray-600 text-2xl hover:text-blue-700 transition"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://www.facebook.com/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="text-gray-600 text-2xl hover:text-blue-600 transition"
        >
          <FaFacebookF />
        </a>
        <a 
          href="https://www.pinterest.com/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Pinterest"
          className="text-gray-600 text-2xl hover:text-red-600 transition"
        >
          <FaPinterestP />
        </a>
        <a 
          href="https://www.twitter.com/your_username" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="X (Twitter)"
          className="text-gray-600 text-2xl hover:text-black transition"
        >
          <FaXTwitter />
        </a>
        </div>
        </section>

		</footer>
	)
}