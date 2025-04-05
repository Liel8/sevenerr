
// export function HeroSection() {
//     return (
//         <section className="hero-section">
//             <video autoPlay muted loop playsInline className="hero-video">
//                 <source src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version" type="video/mp4" />
//                 Your browser does not support the video tag.
//                 </video>
//             <div className="hero-overlay">
//                 <div className="hero-content container">
//                     <h1 className="hero-title">
//                         Our freelancers <br /> will take it from here
//                     </h1>

//                     <div className="hero-search">
//                         <input
//                             type="text"
//                             className="search-input"
//                             placeholder="Search for any service..."
//                         />
//                         <button className="search-btn">
//                             <i className="fa fa-search" />
//                         </button>
//                     </div>

//                     <div className="hero-tags">
//                         <button>website development</button>
//                         <button>logo design</button>
//                         <button>video editing</button>
//                         <button>architecture & interior design</button>
//                     </div>
               
//                     <div className="trusted-by-container main-layout">
//                         <span>Trusted by:</span>
//                         <ul className="trusted-by-logos">
//                             <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA8BAMAAADlIOv7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAtUExURUdwTL+/xcHBxMLCxcLCxcHBxb+/w7+/xcHBxMLCxcLCxcHBxcDAw7+/xMLCxcE7KKIAAAAOdFJOUwAgg9+jv0AQYO9vz1Awzj1g9gAAAf5JREFUSMftkruLE1EUxs9MMjthNsWEBR8IYTobGVwCsio7ZCsbCcqyqAhDbHxCEAJCwJVso7BIwEa7INhYaMBKbSy0sQo2tgs7j7DXWc/f4HfuXTV2llvMB3PvnXN+c89riEqVKnVYdfctloU3/n+g35kvkxVzdh8vdqsttsXWywNv/ekcWh8zp9+W1Dq/x1uVZ2IccXDgdoo5domvvuLn0RWaZJpNsVrRXzafYzsJHiE87grLiG6zZo/+YV1djMWnkR7v4hhfEjZ+QdTMwC5c4w/U/8itFfI+qQvnh3AO0QSd5XQmbFPirIINGbc3sSSIywUsFWWyRBMGiZxs5Vu8xYHFZzY7swf3ips3arxypAN2RyoaKcnPyYR1x20ntThwUp8Wc51vBUcbxPSHlL0mCdupsBTORvtgHyGKpzS7A8YFO9mXsv0wl02z/Txqg+0VGxvr7AsrhZBUgL2XUR+t8gxbY/aFZZHvINjop2Ene+RGy1TnZ7/vpThDJ4Nm0oBI2N6eYaeZaVucU7Uw7LEtYStmYFWwAxxrYAd8KpZWHOeLYWZYPaHA4zWqvUOwru7BHTwYJy/LP4l9d56lWF0fZ7Cn59xInU2lqyHnethfWA3/YXGLOin+hE7gPmGt7a52u5+fyNowf1QDc3z4+pZ89hX224+1pVSpUodRvwDckuhV8J1HpgAAAABJRU5ErkJggg==" alt="Meta" /></li>
//                             <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB4BAMAAADmlMYeAAAAKlBMVEVHcEzQ0NXDw8fDw8bFxcjHx8rExMfDw8bDw8bDw8bDw8bDw8bExMbCwsU/vMhgAAAADXRSTlMACXvBLRhJ8+arkdNl8gibMQAAA8NJREFUaN7tV9tLVEEYn2O7S5oPm9i9QIVulFCk3WBhNUroAtuFLlig5gWKhZIylBYKyofggJQWBAs+SUJCET10WdioQAofbMNdXb//pW/mm5mdvfjgnn0J5vey5zdzzm/mu84sYxYWFhYWFhYWFhYW/wt8e48++PA2UgGlCwngWOxazUen+vuKB7fHgJBdjVYI/hRblwCFpaA3qQHIodWTVC2XeNZ76ewr/H3iSSqKCi3MYcyZhUzYi5QPfT5Ej87MPU9u34aBU3upDXuSmgN4WlYyFkk5LkC4MlJVUCI9ypNaB3C3QlLnABpKvVh/ciVy6Xy+1AY12VzSVYE3AMPfShJM5MOsqalRSvn34SQpxCFTQklUZSZJJGQSMdMag3mScnaLlhKhbaZkKNdL0FY5UhFWmmS01EWaFPXmwqJ2Gr3GWI0q7vfMIB8p3hIk5cimIgoOG0u+FAR51sLxaSyoFKUwEpdIVM1IqWp8+vwrQYu6RVIRP746wdhWfE6yItJCVpEUSo9ivcVEBBKFBkKkRmYtvveYKTLASZW0YUZJhci0OchEeASzBVLsBsABWQgLbIdJNpElvAUIKT8fZKwuIZITF4gYEYyi2+dkqjl8x9FSJCClasU6p7nv3onNJPP6RBbVUyp980gGiTTBJaka/vF3bspXPBTWCkGNODpDF1cU0mJAOsAgcZLCAPbt4UovGaXNstFyYmh8Qo3gjoMhRdCDEb3IDElhL+ClkNlJ/RiE93MtZz63K5IySLxAag3VQTdTo3BQS3UAjOXM4DGIq2Th1s4oEtIGAozodnAFq1EdpP4ED1GzqnDuciRBSbJ6xolptwuHqy5gHKRngC+rgurj2an6mS9GJGn6IaAcHdQWphvFU11MHBnozPucoif+liYdyqUupYrzidy9hcdgKsj8t1ApHRbHdRan/HHuuEAhCdMlg6Sa+Sgvyod6W6jxxeU/Q+RUGGzzz5IwkhGTLIV9zbqcN6P2T6cdP51UGaBAB/1VRRdMsmwSKeVT1ymVUCf0CxOUa66kSZM0mESlXxSMNspxUw6MSy7b7KhJ6F7RSRvUDVlqp3JZfv0I8uEfmv/m84MyxLdNMsut6dJSrI5rpfJui/X9bSZtnz62K2iQKU16XrzuwjZ+h9GJwjZOH3pe3k1BFe4jz3fpgKqQMc+3clfYUr3C7WAVqJJ3sWi5Fylmlj4vHDysUp5dhZW42NsTojrwhk6V7JOepdQdIRX0LMWuVWpTslzT45X563i5aX+3/QNtYWFhYWFhYbEC/gHYyV9+k7ZqCQAAAABJRU5ErkJggg==" alt="Google" /></li>
//                             <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAB4BAMAAADWGNc/AAAAJFBMVEVHcEzDw8PDw8PDw8PDw8PExMTExMTMzMzDw8PGxsbExMTCwsIl9HYuAAAAC3RSTlMA7aK73VyRDHcmQg+QhvkAAAJKSURBVGje7ZY9bxpBEIZHYHQOVSRboqBBWLKi0OVchSaS3dG4seSExkplKY2pUEQTuUrkJl0k09C4iFIdd2DI/LnMzrIfYLByk5TzFqe7ud3nZmf33VsAlUqlUqlUKpVKpfpvQpzR9RMi31v5G4xidFf4PvQ4RmwBvEDMV7FcxqkiLgEqNg+OfRdx9hEXAAPEhot9EXESfr5DvHKxdyIOdBAn0OPh2NgycIoLI2i32xSnK9fPxp5wflEqdVdmE1sETu7nsYnZ6v3U917n7FFpfJlNrJBxqNCzkSszj38i4pil48vMnCsRB7qITVdm5ryUcfqmbx5i+FvGGZi+s4gzDRya4W8bnILm//U2TgXt4vOc7CZeh4sNjos94dTRmiG0OxdxzGJ2ZbbtWjLOXSieqSPio4wzNlMUOF2cPccp0jR9u4uzDJx5H3M/X8Ph8GaDM98178bx8ygfMknnmfWzk5NgCBlOdbXBlOXsW2/6cdWEnD2e6pBPIuSwvxohH2NcCae77q+pBZfm0P6TxX6fwyjmfL5/+DsO2XTRjfafKVQ9JztrrpLexsHD0zfH145DX1/2vVFNu5rnuH/MDk74F1l3tQZ+4zD5JCIOuX1S8Q7jdh0Bp2bqVfev2fr9Nc5hzIlPJmucKs95jzbB8L2R5WSnx9cXP4ewnfNw+fXjUXrWBDg66bHZG1yk85BPxTm4hDr86xo7Z3A+NNaDspzbE7N0aHSPIZ/kww/BUS6xe73d9w5evf+nc+H9baqHY5VKpVKpVCqVqoz+AAajAORcSRAaAAAAAElFTkSuQmCC" alt="Netflix" /></li>
//                             <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB4CAMAAABM+bV3AAAAolBMVEVHcEzY2NjW1tbY2Nj9/f3u7u7ExMTIyMj+/v7MzMzJycne3t729vb7+/vX19fHx8f////////IyMjKysrFxcXFxcXp6enHx8fHx8fy8vLExMTFxcXHx8f+/v7c3Nz////b29vT09P+/v7////8/PzQ0ND+/v7X19fl5eX8/Pz////8/Pz////+/v7CwsL////FxcXR0dHb29vi4uLv7+/19fUkaZWwAAAALnRSTlMAzBq+/QP0/oT9LAkOOf5WKmTN7bqN/uFJ+XOkY+eN2WnfrlXTq0vrnLuPosXDPmNSEgAAA6dJREFUaN7tl9mWojAQhlFZRVHE7bjhvvYY1vd/tUkgVYAB2+PFnLnIf9O2hkryVdWfoChSUlJSUlJSUlJSUlJSUlL/hbTRsyrdG23aHz3Z37QulhUEgeHtOptu/aj5U1SwO/8WvP9wjOpDRqtu3AB/jqIQn7AevbfBb1GxloB/2NWNXMKwKSFExafCP1ojleEtgpCjLQXZv17Y51PdWB0CqoQJ48dmU3g3tfiYGQLf0gm679CHJFcI/6t2bfDePoGlj0sjtKv3lk3MwyeQClKb3rY/hSeWVQy9D9hQ/JAxcqgZb//A9M+x9nvxCmwwvJWFb69Guq6P5rCafQrFNet90BuTVzYk5V84pK8oK7Y5hvqUL9UkkNXn4JPWm8HoFMID2ilN7ZjtIiUxVN1QjRHNJ33dFdhA5QTqXlmw6Gq+oYCNv6mARu8qX7FRedVF5NCFZss2RIvwTHDxE+U7NjEs/qhNsvqhYrwNOvoIc9e3kCBkY+HiDdjNOavZCBq5Q8ljXj4iX8cmBjT7fO6YfxW2Wdk4MH71HZsEEn20cyuNeXRapIqPbHT7KzbcTWLi08Uuso+skILLkFUl+gXYgea2Stq+hl9gWaYlMmFCMrMvfjWznnKLugE2vSPm+rkRVl+cg0maJpHBg/tu5l3jvIScK+9+szBrPCxN8FeW+lfzez0DLWeakqNL12oveFoCEzHv0atnGOJhCTOKbJyEiQJa30xG2Z7oNXs+EkNw4vVTmFFkk7gH13XPfb6CQRY8yGEV57NPAPQCj9w3XYxsDL9mU2HuZE+rp9hetoti9WiW97CZzQp+ikzx6wit+aooG/pnq/ygGXcFNt47Nv3ynvTc7NE86fJPdIdt5SaE7zeci1nN4j1lLfhEkJZ6uKN42R3mjp4AJEyn2eGQjXMX9lS5NRiUjUE3eMC2gmA+moTIZlzLRimxofTh+SvbrgrnJD95h2gS4gXKrmeThw+rBhrk1fmAvuJVaGIXz5uvllU2POF4uliljh+qScUwfUi1rjWzmVbYaPkRYCR5biF3uyybB3CdJYs3TJsPl+LaPa1O3eZ+ENL7clC6XWd2e1c5njHNrhk33kkGhal41YbTBlWXu3Y9vgEG+LAG3h59ceDJWwpstD1ePNavt615MbXVoQ6ndYAQXWXbPUZB+UVjtq05uQ5mIeEqaS9aXmAYVmvDZ952uOgxoilDs3UJDfrO481Og49ORSkpKSkpKSkpKSkpKSkpqX+hv3pOJM6pXcIGAAAAAElFTkSuQmCC" alt="P&G" /></li>
//                             <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAB4BAMAAACUW6SoAAAAJFBMVEVHcEzDw8fDw8bDw8bFxcfDw8bGxsnDw8bExMfQ0NPDw8bCwsXFd2Z+AAAAC3RSTlMAcNe9OIoc7VMJoJaIe0QAAAMSSURBVGje7ZY9bxNBEIY38Qc+09gkRYQbC4ERuiYNBbrmCkBIbiyldIMCIkhuSAESuiZUWHJjCqo0SYeUhvhCznj/HLuze7Mftu8cEQkhzVtY67vnZmdnZ2aXMRKJRCKRSCQSiUQikf696hEHZQ/OX/8lfMR5qkZNjkrjMqPF8ETMpkbbhuO/yowWw0P09NTi+KDEaDF8wflCjfo2d1VitBgOOb9Uow6/wfqLYfFsjoHgWbt9kEhuVmK0EK6LZ9dqKJNEOv0GUqXEaCHcEM9+qmGio1PdxGghvCWeddFn5fQGyy+GZRKfoc/8gxgEkNHCiYMwexqzL+32Liw3awFXE06mS7BDVzDNpM98P1/RJdsKwYm3ankhxl7ue+rDLn1H/J6Ywhvkg6t6qNLlo1peR2+MstLzYObSI/Ebm8I7yVOw+9XKw1RVUKp7hfjCg5lLy8qYmsJ7+e79PXiz6yU3eCT6URBBYrtwq+rSHdw7p/BmR/a/uV51C4PkwlOPNv1kYr/4BO3y0d4O1naock9S6dSDmUdHWLlDC8teyd9jERcI1m8dvGu9TR4cNzza9JPI4h5WuN7ABtfVMYJoHernDsw8OjCNKzHY8bSfZxAse1/nzoxFuv84MPPoKuZ03cT9xxQW+znvt5CQ4MQLnZ4ubNEyLIOGrjb9UToej59PdSzO0GgrdyLS2erCFi2Ntmp6cbpKu1brVqbgg9jeyN4S7NOmnzSdwybJMVgouDPSRuMl2Ke3cQ4svPw8UJPVsF1WsBB82Kfv4stTjl2AWU1pkte8iqP2z4V9eqQqOq9S57RIxYvv5lwLEo4TuLBPT/DlxOng0HwWe/cTjimodqq3AvZp00/kJwvERiuO9T6U5ArYp81VIjIu6YijVHUEkTnNXdinTT9JnJtGoDs5T7A67DRyYZ9OcHLhc2bdiQ4VtRhidXRwm1SZPWPr6CjPfV/BhbolDvNEhqb3ZM2JvUSvO9l3Hssj9xsc0PpsyuJN6c0EYZvf8t29ucml9aayt+nWNPT2m0QikUgkEolEIpH+H/0Bs4jY3Z22e4kAAAAASUVORK5CYII=" alt="PayPal" />
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export function HeroSection() {
//     return (
//         <section className="hero-section">
//             <video autoPlay muted loop playsInline className="hero-video">
//                 <source src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             <div className="hero-overlay">
//                 <div className="container hero-content main-layout">
//                     <h1 className="hero-title">
//                         Our freelancers <br /> will take it from here
//                     </h1>

//                     <div className="hero-search">
//                         <input
//                             type="text"
//                             className="search-input"
//                             placeholder="Search for any service..."
//                         />
//                         <button className="search-btn">
//                             <i className="fa fa-search" />
//                         </button>
//                     </div>

//                     <div className="hero-tags">
//                         <button>website development</button>
//                         <button>logo design</button>
//                         <button>video editing</button>
//                         <button>architecture & interior design</button>
//                     </div>
//                 </div>
//             </div>

//             {/* מחוץ ל-overlay */}
//             <div className="trusted-by-container main-layout">
//                 <div className="container">
//                     <span>Trusted by:</span>
//                     <ul className="trusted-by-logos">
//                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA8BAMAAADlIOv7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAtUExURUdwTL+/xcHBxMLCxcLCxcHBxb+/w7+/xcHBxMLCxcLCxcHBxcDAw7+/xMLCxcE7KKIAAAAOdFJOUwAgg9+jv0AQYO9vz1Awzj1g9gAAAf5JREFUSMftkruLE1EUxs9MMjthNsWEBR8IYTobGVwCsio7ZCsbCcqyqAhDbHxCEAJCwJVso7BIwEa7INhYaMBKbSy0sQo2tgs7j7DXWc/f4HfuXTV2llvMB3PvnXN+c89riEqVKnVYdfctloU3/n+g35kvkxVzdh8vdqsttsXWywNv/ekcWh8zp9+W1Dq/x1uVZ2IccXDgdoo5domvvuLn0RWaZJpNsVrRXzafYzsJHiE87grLiG6zZo/+YV1djMWnkR7v4hhfEjZ+QdTMwC5c4w/U/8itFfI+qQvnh3AO0QSd5XQmbFPirIINGbc3sSSIywUsFWWyRBMGiZxs5Vu8xYHFZzY7swf3ips3arxypAN2RyoaKcnPyYR1x20ntThwUp8Wc51vBUcbxPSHlL0mCdupsBTORvtgHyGKpzS7A8YFO9mXsv0wl02z/Txqg+0VGxvr7AsrhZBUgL2XUR+t8gxbY/aFZZHvINjop2Ene+RGy1TnZ7/vpThDJ4Nm0oBI2N6eYaeZaVucU7Uw7LEtYStmYFWwAxxrYAd8KpZWHOeLYWZYPaHA4zWqvUOwru7BHTwYJy/LP4l9d56lWF0fZ7Cn59xInU2lqyHnethfWA3/YXGLOin+hE7gPmGt7a52u5+fyNowf1QDc3z4+pZ89hX224+1pVSpUodRvwDckuhV8J1HpgAAAABJRU5ErkJggg==" alt="Meta" /></li>
//                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB4BAMAAADmlMYeAAAAKlBMVEVHcEzQ0NXDw8fDw8bFxcjHx8rExMfDw8bDw8bDw8bDw8bDw8bExMbCwsU/vMhgAAAADXRSTlMACXvBLRhJ8+arkdNl8gibMQAAA8NJREFUaN7tV9tLVEEYn2O7S5oPm9i9QIVulFCk3WBhNUroAtuFLlig5gWKhZIylBYKyofggJQWBAs+SUJCET10WdioQAofbMNdXb//pW/mm5mdvfjgnn0J5vey5zdzzm/mu84sYxYWFhYWFhYWFhYW/wt8e48++PA2UgGlCwngWOxazUen+vuKB7fHgJBdjVYI/hRblwCFpaA3qQHIodWTVC2XeNZ76ewr/H3iSSqKCi3MYcyZhUzYi5QPfT5Ej87MPU9u34aBU3upDXuSmgN4WlYyFkk5LkC4MlJVUCI9ypNaB3C3QlLnABpKvVh/ciVy6Xy+1AY12VzSVYE3AMPfShJM5MOsqalRSvn34SQpxCFTQklUZSZJJGQSMdMag3mScnaLlhKhbaZkKNdL0FY5UhFWmmS01EWaFPXmwqJ2Gr3GWI0q7vfMIB8p3hIk5cimIgoOG0u+FAR51sLxaSyoFKUwEpdIVM1IqWp8+vwrQYu6RVIRP746wdhWfE6yItJCVpEUSo9ivcVEBBKFBkKkRmYtvveYKTLASZW0YUZJhci0OchEeASzBVLsBsABWQgLbIdJNpElvAUIKT8fZKwuIZITF4gYEYyi2+dkqjl8x9FSJCClasU6p7nv3onNJPP6RBbVUyp980gGiTTBJaka/vF3bspXPBTWCkGNODpDF1cU0mJAOsAgcZLCAPbt4UovGaXNstFyYmh8Qo3gjoMhRdCDEb3IDElhL+ClkNlJ/RiE93MtZz63K5IySLxAag3VQTdTo3BQS3UAjOXM4DGIq2Th1s4oEtIGAozodnAFq1EdpP4ED1GzqnDuciRBSbJ6xolptwuHqy5gHKRngC+rgurj2an6mS9GJGn6IaAcHdQWphvFU11MHBnozPucoif+liYdyqUupYrzidy9hcdgKsj8t1ApHRbHdRan/HHuuEAhCdMlg6Sa+Sgvyod6W6jxxeU/Q+RUGGzzz5IwkhGTLIV9zbqcN6P2T6cdP51UGaBAB/1VRRdMsmwSKeVT1ymVUCf0CxOUa66kSZM0mESlXxSMNspxUw6MSy7b7KhJ6F7RSRvUDVlqp3JZfv0I8uEfmv/m84MyxLdNMsut6dJSrI5rpfJui/X9bSZtnz62K2iQKU16XrzuwjZ+h9GJwjZOH3pe3k1BFe4jz3fpgKqQMc+3clfYUr3C7WAVqJJ3sWi5Fylmlj4vHDysUp5dhZW42NsTojrwhk6V7JOepdQdIRX0LMWuVWpTslzT45X563i5aX+3/QNtYWFhYWFhYbEC/gHYyV9+k7ZqCQAAAABJRU5ErkJggg==" alt="Google" /></li>
//                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAB4BAMAAADWGNc/AAAAJFBMVEVHcEzDw8PDw8PDw8PDw8PExMTExMTMzMzDw8PGxsbExMTCwsIl9HYuAAAAC3RSTlMA7aK73VyRDHcmQg+QhvkAAAJKSURBVGje7ZY9bxpBEIZHYHQOVSRboqBBWLKi0OVchSaS3dG4seSExkplKY2pUEQTuUrkJl0k09C4iFIdd2DI/LnMzrIfYLByk5TzFqe7ud3nZmf33VsAlUqlUqlUKpVKpfpvQpzR9RMi31v5G4xidFf4PvQ4RmwBvEDMV7FcxqkiLgEqNg+OfRdx9hEXAAPEhot9EXESfr5DvHKxdyIOdBAn0OPh2NgycIoLI2i32xSnK9fPxp5wflEqdVdmE1sETu7nsYnZ6v3U917n7FFpfJlNrJBxqNCzkSszj38i4pil48vMnCsRB7qITVdm5ryUcfqmbx5i+FvGGZi+s4gzDRya4W8bnILm//U2TgXt4vOc7CZeh4sNjos94dTRmiG0OxdxzGJ2ZbbtWjLOXSieqSPio4wzNlMUOF2cPccp0jR9u4uzDJx5H3M/X8Ph8GaDM98178bx8ygfMknnmfWzk5NgCBlOdbXBlOXsW2/6cdWEnD2e6pBPIuSwvxohH2NcCae77q+pBZfm0P6TxX6fwyjmfL5/+DsO2XTRjfafKVQ9JztrrpLexsHD0zfH145DX1/2vVFNu5rnuH/MDk74F1l3tQZ+4zD5JCIOuX1S8Q7jdh0Bp2bqVfev2fr9Nc5hzIlPJmucKs95jzbB8L2R5WSnx9cXP4ewnfNw+fXjUXrWBDg66bHZG1yk85BPxTm4hDr86xo7Z3A+NNaDspzbE7N0aHSPIZ/kww/BUS6xe73d9w5evf+nc+H9baqHY5VKpVKpVCqVqoz+AAajAORcSRAaAAAAAElFTkSuQmCC" alt="Netflix" /></li>
//                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB4CAMAAABM+bV3AAAAolBMVEVHcEzY2NjW1tbY2Nj9/f3u7u7ExMTIyMj+/v7MzMzJycne3t729vb7+/vX19fHx8f////////IyMjKysrFxcXFxcXp6enHx8fHx8fy8vLExMTFxcXHx8f+/v7c3Nz////b29vT09P+/v7////8/PzQ0ND+/v7X19fl5eX8/Pz////8/Pz////+/v7CwsL////FxcXR0dHb29vi4uLv7+/19fUkaZWwAAAALnRSTlMAzBq+/QP0/oT9LAkOOf5WKmTN7bqN/uFJ+XOkY+eN2WnfrlXTq0vrnLuPosXDPmNSEgAAA6dJREFUaN7tl9mWojAQhlFZRVHE7bjhvvYY1vd/tUkgVYAB2+PFnLnIf9O2hkryVdWfoChSUlJSUlJSUlJSUlJSUlL/hbTRsyrdG23aHz3Z37QulhUEgeHtOptu/aj5U1SwO/8WvP9wjOpDRqtu3AB/jqIQn7AevbfBb1GxloB/2NWNXMKwKSFExafCP1ojleEtgpCjLQXZv17Y51PdWB0CqoQJ48dmU3g3tfiYGQLf0gm679CHJFcI/6t2bfDePoGlj0sjtKv3lk3MwyeQClKb3rY/hSeWVQy9D9hQ/JAxcqgZb//A9M+x9nvxCmwwvJWFb69Guq6P5rCafQrFNet90BuTVzYk5V84pK8oK7Y5hvqUL9UkkNXn4JPWm8HoFMID2ilN7ZjtIiUxVN1QjRHNJ33dFdhA5QTqXlmw6Gq+oYCNv6mARu8qX7FRedVF5NCFZss2RIvwTHDxE+U7NjEs/qhNsvqhYrwNOvoIc9e3kCBkY+HiDdjNOavZCBq5Q8ljXj4iX8cmBjT7fO6YfxW2Wdk4MH71HZsEEn20cyuNeXRapIqPbHT7KzbcTWLi08Uuso+skILLkFUl+gXYgea2Stq+hl9gWaYlMmFCMrMvfjWznnKLugE2vSPm+rkRVl+cg0maJpHBg/tu5l3jvIScK+9+szBrPCxN8FeW+lfzez0DLWeakqNL12oveFoCEzHv0atnGOJhCTOKbJyEiQJa30xG2Z7oNXs+EkNw4vVTmFFkk7gH13XPfb6CQRY8yGEV57NPAPQCj9w3XYxsDL9mU2HuZE+rp9hetoti9WiW97CZzQp+ikzx6wit+aooG/pnq/ygGXcFNt47Nv3ynvTc7NE86fJPdIdt5SaE7zeci1nN4j1lLfhEkJZ6uKN42R3mjp4AJEyn2eGQjXMX9lS5NRiUjUE3eMC2gmA+moTIZlzLRimxofTh+SvbrgrnJD95h2gS4gXKrmeThw+rBhrk1fmAvuJVaGIXz5uvllU2POF4uliljh+qScUwfUi1rjWzmVbYaPkRYCR5biF3uyybB3CdJYs3TJsPl+LaPa1O3eZ+ENL7clC6XWd2e1c5njHNrhk33kkGhal41YbTBlWXu3Y9vgEG+LAG3h59ceDJWwpstD1ePNavt615MbXVoQ6ndYAQXWXbPUZB+UVjtq05uQ5mIeEqaS9aXmAYVmvDZ952uOgxoilDs3UJDfrO481Og49ORSkpKSkpKSkpKSkpKSkpqX+hv3pOJM6pXcIGAAAAAElFTkSuQmCC" alt="P&G" /></li>
//                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAB4BAMAAACUW6SoAAAAJFBMVEVHcEzDw8fDw8bDw8bFxcfDw8bGxsnDw8bExMfQ0NPDw8bCwsXFd2Z+AAAAC3RSTlMAcNe9OIoc7VMJoJaIe0QAAAMSSURBVGje7ZY9bxNBEIY38Qc+09gkRYQbC4ERuiYNBbrmCkBIbiyldIMCIkhuSAESuiZUWHJjCqo0SYeUhvhCznj/HLuze7Mftu8cEQkhzVtY67vnZmdnZ2aXMRKJRCKRSCQSiUQikf696hEHZQ/OX/8lfMR5qkZNjkrjMqPF8ETMpkbbhuO/yowWw0P09NTi+KDEaDF8wflCjfo2d1VitBgOOb9Uow6/wfqLYfFsjoHgWbt9kEhuVmK0EK6LZ9dqKJNEOv0GUqXEaCHcEM9+qmGio1PdxGghvCWeddFn5fQGyy+GZRKfoc/8gxgEkNHCiYMwexqzL+32Liw3awFXE06mS7BDVzDNpM98P1/RJdsKwYm3ankhxl7ue+rDLn1H/J6Ywhvkg6t6qNLlo1peR2+MstLzYObSI/Ebm8I7yVOw+9XKw1RVUKp7hfjCg5lLy8qYmsJ7+e79PXiz6yU3eCT6URBBYrtwq+rSHdw7p/BmR/a/uV51C4PkwlOPNv1kYr/4BO3y0d4O1naock9S6dSDmUdHWLlDC8teyd9jERcI1m8dvGu9TR4cNzza9JPI4h5WuN7ABtfVMYJoHernDsw8OjCNKzHY8bSfZxAse1/nzoxFuv84MPPoKuZ03cT9xxQW+znvt5CQ4MQLnZ4ubNEyLIOGrjb9UToej59PdSzO0GgrdyLS2erCFi2Ntmp6cbpKu1brVqbgg9jeyN4S7NOmnzSdwybJMVgouDPSRuMl2Ke3cQ4svPw8UJPVsF1WsBB82Kfv4stTjl2AWU1pkte8iqP2z4V9eqQqOq9S57RIxYvv5lwLEo4TuLBPT/DlxOng0HwWe/cTjimodqq3AvZp00/kJwvERiuO9T6U5ArYp81VIjIu6YijVHUEkTnNXdinTT9JnJtGoDs5T7A67DRyYZ9OcHLhc2bdiQ4VtRhidXRwm1SZPWPr6CjPfV/BhbolDvNEhqb3ZM2JvUSvO9l3Hssj9xsc0PpsyuJN6c0EYZvf8t29ucml9aayt+nWNPT2m0QikUgkEolEIpH+H/0Bs4jY3Z22e4kAAAAASUVORK5CYII=" alt="PayPal" /></li>
//                     </ul>
//                 </div>    
//             </div>
//         </section>
//     );
// }

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
          <div className="hero-content">
            <h1 className="hero-title">
              Our freelancers <br />
              will take it from here
            </h1>
  
            <div className="search-container">
              <input type="text" placeholder="Search for any service..." />
              <button>
                <i className="fa fa-search" />
              </button>
            </div>
  
            <div className="hero-tags">
              <button>website development</button>
              <button>logo design</button>
              <button>video editing</button>
              <button>architecture & interior design</button>
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
    );
  }
  