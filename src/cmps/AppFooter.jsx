import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn, FaXTwitter, FaPinterestP } from 'react-icons/fa6'
import { useLocation } from "react-router-dom"
import { PaymentFooter } from './PaymentFooter'

export function AppFooter() {
  const location = useLocation()

  const isPaymentPage = location.pathname.includes('/payment')
  if (isPaymentPage) return <PaymentFooter />

  return (
    <footer className="app-footer-container main-layout">
      <section className="app-footer with-border-top flex">
        <div className="left flex">
          <div className="logo-container">
            <span className="logo">
              sevenerr<span className="dot"></span>
            </span>
          </div>
          <p className="empty">© Sevnerr International Ltd. 2025</p>
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
