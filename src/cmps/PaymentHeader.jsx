import { Link } from 'react-router-dom'

export function PaymentHeader() {
  return (
    <section className="main-layout full header-container">
      <header className="app-header payment">
        <div className="logo-container">
          <Link className="logo" to="/">
            sevenerr<span className="dot" />
          </Link>
        </div>

        <nav className="header-breadcrumbs">
          <ul>
            <li className="step done">
              <span className="crumb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#222325" />
                  <path d="M13.6202 2.6083L5.4001 10.8284L2.3797 7.80805C2.2333 7.6616 1.9959 7.6616 1.8494 7.8081L0.9655 8.6919C0.8191 8.8384 0.8191 9.0758 0.9655 9.2223L5.1349 13.3917C5.2814 13.5381 5.5188 13.5381 5.6653 13.3917L15.0344 4.0225C15.1809 3.8761 15.1809 3.6387 15.0344 3.4922L14.1505 2.6083C14.0041 2.4619 13.7667 2.4619 13.6202 2.6083Z" fill="white" />
                </svg>
              </span>
              <span className="crumb-label">Order Details</span>
              <span className="crumb-arrow">
                <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" fill="#b5b6ba" />
                </svg>
              </span>
            </li>

            <li className="step current">
              <span className="crumb-icon">2</span>
              <span className="crumb-label">Confirm & Pay</span>
              <span className="crumb-arrow">
                <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" fill="#b5b6ba" />
                </svg>
              </span>
            </li>

            <li className="step future">
              <span className="crumb-icon">3</span>
              <span className="crumb-label">Submit Requirements</span>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  )
}
