// import { useSelector } from 'react-redux'
// import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn,FaXTwitter, FaPinterestP } from 'react-icons/fa6'

// export function AppFooter() {

// 	return (
// 		<footer class="app-footer-container main-layout">
//         <section class="app-footer with-border-top flex">	
//           <div class="left flex">
//             <span class="severr-logo">severr</span>
//             <p class="empty"> &copy; Severr International Ltd. 2025</p>
//           </div>		
 
//         <div class="right flex">
//           <ul className='sochial flex'>       
//             <a 
//               href="https://www.tiktok.com/@your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="TikTok"
//               className="text-gray-600 text-2xl hover:text-black transition"
//             >
//               <FaTiktok />
//             </a>
//             <a 
//               href="https://www.instagram.com/your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="Instagram"
//               className="text-gray-600 text-2xl hover:text-pink-500 transition"
//             >
//               <FaInstagram />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="LinkedIn"
//               className="text-gray-600 text-2xl hover:text-blue-700 transition"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a 
//               href="https://www.facebook.com/your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="Facebook"
//               className="text-gray-600 text-2xl hover:text-blue-600 transition"
//             >
//               <FaFacebookF />
//             </a>
//             <a 
//               href="https://www.pinterest.com/your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="Pinterest"
//               className="text-gray-600 text-2xl hover:text-red-600 transition"
//             >
//               <FaPinterestP />
//             </a>
//             <a 
//               href="https://www.twitter.com/your_username" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               aria-label="X (Twitter)"
//               className="text-gray-600 text-2xl hover:text-black transition"
//             >
//               <FaXTwitter />
//             </a>
//         </ul>
//         </div>
//       </section>

// 		</footer>
// 	)
// }

import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn, FaXTwitter, FaPinterestP } from 'react-icons/fa6'

export function AppFooter() {
  return (
    <footer className="app-footer-container main-layout">
      <section className="app-footer with-border-top flex">
        <div className="left flex">
          <span className="severr-logo">sevenerr</span>
          <p className="empty">© severr International Ltd. 2025</p>
        </div>

        <div className="right flex">
          <ul className="social flex">
            <li>
              <a
                href="https://www.tiktok.com/@your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
