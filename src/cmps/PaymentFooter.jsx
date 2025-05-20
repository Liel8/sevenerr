import { Link } from 'react-router-dom'

export function PaymentFooter() {
  return (
    <footer className="app-footer-container main-layout payment-footer">
      <div className="content text-body-3 page-container">
        <span className="text">
          <span className="co-grey">
            Payments are processed by Fiverr International Ltd., Fiverr Limited, and Fiverr Inc. See 
            <span> </span>
          </span>
          <Link
            className="terms-link"
            to="/content/payments-terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
             Payment Terms
          </Link>
        </span>
      </div>
    </footer>
  )
}
