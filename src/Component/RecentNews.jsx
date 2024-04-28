
const RecentNews = () => {
    return (
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="w-full ">
              <div className="mx-auto mb-[60px] max-w-[100%] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent Items
                </h2>
                <p className="text-base text-body-color dark:text-dark-6 w-full md:w-3/4 m-auto">
                "Explore our latest creations in paper and glass art! 🎨✨ Discover the intricate designs and vibrant colors that adorn our pieces, crafted with precision and passion.Whether you're seeking a statement centerpiece for your home or a unique gift for a loved one.
                </p>
              </div>
            </div>
          </div>
  
          <div className=" flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 w-full">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://i.ibb.co/ykgFSzm/2149835475.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-block rounded bg px-4 py-1 text-center text-xs font-semibold leading-loose text-black border-2 border-black">
                    Apr 28, 2024
                  </span>
                  <h3>
                    <a
                      href="/#"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Where Creativity Flourishes - Explore Our Class Designs!
                    </a>
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                  Dive into DIY Delights with Our Design Workshops - Explore the Boundless Possibilities of Paper and Glass Artistry, and Let Your Imagination Soar
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 w-full">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://i.ibb.co/MRRCXD2/2148164424.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-block rounded  px-4 py-1 text-center text-xs font-semibold leading-loose text-black border-2 border-black">
                    Jan 22, 2024
                  </span>
                  <h3>
                    <a
                      href="/#"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                     Unleashing Your Inner Maker with Our Craft Classes
                    </a>
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                  Unleashing Your Inner Maker with Our Craft Classes - Embark on a Journey of Discovery and Innovation as You Dive into Handcrafted Design Techniques!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 w-full">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://i.ibb.co/FHr9gwT/2148164331.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-block rounded  px-4 py-1 text-center text-xs font-semibold leading-loose text-black border-2 border-black">
                    Dec 22, 2024
                  </span>
                  <h3>
                    <a
                      href="/#"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                       Dive into DIY Delights with Our Design Workshops
                    </a>
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                  Where Creativity Flourishes - Immerse Yourself in a World of Artisanal Inspiration with Our Unique Craft Classes! From Paper Quilling to Glass Blowing, Unleash Your Creativity Today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RecentNews;