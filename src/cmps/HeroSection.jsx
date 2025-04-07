export function HeroSection() {
    return (
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/hero.dd1871e.png"
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"
            type="video/mp4"
          />
        </video>
  
        <div className="hero-overlay">
          <div className="hero-content full">
            <h1 className="hero-title">
              Our freelancers <br />
              will take it from here
            </h1>

            <form className="search-form">
              <input
                type="text"
                placeholder="Search for any service..."
                autoComplete="off"
              />
              <button type="submit">
                <div className="submit-button-icon">
                  <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
                    </path>
                  </svg>
                </div>
              </button>
            </form>

  
            <div className="hero-tags">
              <button>
                <p>website development</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 15 11"><path d="M9.923.969a.7.7 0 0 0-1.031 0 .8.8 0 0 0 0 1.089l2.804 2.961H1.486c-.403 0-.73.345-.73.77s.327.77.73.77h10.358L8.892 9.678a.8.8 0 0 0 0 1.09c.285.3.746.3 1.031 0l4.123-4.355a.8.8 0 0 0 0-1.09l-.07-.072-.009-.01z"></path></svg></button>
              <button>
                <p>logo design</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 15 11"><path d="M9.923.969a.7.7 0 0 0-1.031 0 .8.8 0 0 0 0 1.089l2.804 2.961H1.486c-.403 0-.73.345-.73.77s.327.77.73.77h10.358L8.892 9.678a.8.8 0 0 0 0 1.09c.285.3.746.3 1.031 0l4.123-4.355a.8.8 0 0 0 0-1.09l-.07-.072-.009-.01z"></path></svg></button>
              <button>
                <p>video editing</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 15 11"><path d="M9.923.969a.7.7 0 0 0-1.031 0 .8.8 0 0 0 0 1.089l2.804 2.961H1.486c-.403 0-.73.345-.73.77s.327.77.73.77h10.358L8.892 9.678a.8.8 0 0 0 0 1.09c.285.3.746.3 1.031 0l4.123-4.355a.8.8 0 0 0 0-1.09l-.07-.072-.009-.01z"></path></svg></button>
              <button>
                <p>architecture & interior design</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 15 11"><path d="M9.923.969a.7.7 0 0 0-1.031 0 .8.8 0 0 0 0 1.089l2.804 2.961H1.486c-.403 0-.73.345-.73.77s.327.77.73.77h10.358L8.892 9.678a.8.8 0 0 0 0 1.09c.285.3.746.3 1.031 0l4.123-4.355a.8.8 0 0 0 0-1.09l-.07-.072-.009-.01z"></path></svg></button>
            </div>
  
            <div className="trusted-by">
              <span>Trusted by:</span>
              <div className="logos">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg" alt="Meta" />
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg" alt="Google" />
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg" alt="Netflix" />
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg" alt="P&G" />
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg" alt="Paypal" />
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg" alt="Payoneer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  