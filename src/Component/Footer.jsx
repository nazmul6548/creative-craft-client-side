import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="font-[sans-serif] bg-[#27282b] py-12 px-16  ">
      <div className="grid max-md-grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h4 className="text-white font-bold text-lg">About Us</h4>
          <p className="text-sm mt-6 text-gray-400">Our journey began with a simple love for art and a desire to share that love with others. What started as a humble studio has blossomed into a thriving community of artists, crafters, and enthusiasts alike.... <a href='javascript:void(0)' className="text-sm font-semibold text-[#007bff]">Read
              more</a></p>

          <ul className="grid max-sm:grid-cols-1 sm:grid-cols-2 mt-12 gap-2">
            <li className="flex items-center max-sm:mb-8">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 482.6 482.6">
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000" />
                </svg>
              </div>
              <a href="javascript:void(0)" className="text-[#fff] text-sm ml-3">
                <small className="block">Tel</small>
                <strong>0185-9336548</strong>
              </a>
            </li>
            <li className="flex items-center">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff'
                  viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
              </div>
              <a href="javascript:void(0)" className="text-[#fff] text-sm ml-3">
                <small className="block">Mail</small>
                <strong>nazmul6548@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">Newsletter</h4>
          <p className="text-sm mt-6 text-gray-400">Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!</p>
          <div className="bg-[#343538] flex px-2 py-1 rounded-full mt-12">
            <input type='email' placeholder='Click for LogIn'
              className="w-full outline-none text-gray-400 text-sm bg-transparent pl-4" />
            <Link to="/logIn">
            <button type='button'
              className="bg-white hover:bg-gray-100 transition-all text-gray-600 font-semibold text-sm rounded-full px-5 py-2 ml-4">Submit</button>
            </Link>
          </div>
          <ul className="flex items-center justify-end mt-8 space-x-4">
            <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" href="https://web.facebook.com/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 24 24">
                  <path
                    d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                    data-original="#000000" />
                </svg>
              </a>
            </li>
            <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 511 512">
                  <path
                    d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                    data-original="#000000" />
                </svg>
              </a>
            </li>
            <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" href="https://www.youtube.com/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff'
                  viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#fff" />
                    </clipPath>
                  </defs>
                  <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="40" clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      d="M492 255.75c0-39.49-3.501-75.479-7.497-103.698-5.191-36.655-34.801-64.96-71.646-68.567C373.764 79.658 318.529 75.75 256 75.75c-62.529 0-117.764 3.908-156.857 7.735-36.845 3.607-66.455 31.912-71.646 68.567C23.501 180.271 20 216.26 20 255.75c0 39.49 3.501 75.479 7.497 103.698 5.191 36.655 34.801 64.96 71.646 68.567 39.093 3.827 94.328 7.735 156.857 7.735 62.529 0 117.764-3.908 156.857-7.735 36.845-3.607 66.455-31.912 71.646-68.567C488.499 331.229 492 295.24 492 255.75Z"
                      data-original="#000000" />
                    <path
                      d="m245.5 185.291 75.914 45.165c19.448 11.57 19.448 39.518 0 51.088L245.5 326.709c-20.024 11.913-45.5-2.39-45.5-25.544v-91.335c0-23.153 25.476-37.457 45.5-25.544z"
                      data-original="#000000" />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-16 bg-[#43454e] w-full" />
      <div className="grid max-md-grid-cols-1 lg:grid-cols-3 gap-16">
        <p className="text-gray-400 text-sm">© 2024 All Rights Reserved</p>
        <p className="text-gray-400 text-sm lg:col-span-2">Terms of Service | Privacy Policy | Contact Us</p>
      </div>
    </footer>
    );
};

export default Footer;