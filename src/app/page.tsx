import ImageToggler from "../Components/toggleImage/toggleImage";

export default function Home() {
  return (
    <div>
      {/* Container for all the content */}
      <div className="w-full min-h-screen flex flex-col xl:flex-row bg-gray-600 lg:bg-[#37474F]">
        {/* Left side of content */}
        <div className="h-full xl:h-screen w-full overflow-hidden flex flex-col items-center border-b-2 border-black">
          {/* Greeting */}
          <div className="text-2xl font-sans tracking-wide mt-6 sm:mt-4 lg:mt-8 text-teal-100 font-bold lg:text-teal-50 mr-auto pl-4 border-l-2 lg:border-red-200 border-black py-1 ml-2 rounded-t-xl md:ml-6 md:pl-3 xl:text-5xl xl:border-l-4 transition-all duration-300 hover:scale-105 hover:text-teal-300">
            Assalam-U-Alikum
          </div>

          {/* Title */}
          <div className="text-2xl my-3 mr-auto pr-4 pl-8 sm:pl-5 capitalize font-sans font-medium text-white lg:text-cyan border-r-2 border-black lg:border-red-200 py-1 rounded-t-xl md:pr-5 xl:text-5xl xl:my-6 xl:border-r-4 transition-all duration-300 hover:scale-105 hover:text-red-300">
            I am
          </div>

          {/* Name */}
          <div className="capitalize text-2xl sm:text-[28px] md:text-[35px] font-semibold tracking-wider text-gray-700 sm:text-gray-600 lg:text-white px-4 border-x-2 sm:border-x-4 border-red-300 py-3 rounded-lg sm:rounded-xl bg-gray-300 lg:bg-teal-800 mt-2 mb-5 sm:mr-auto sm:ml-40 xl:text-[53px] xl:py-5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600 hover:bg-teal-700">
            M.Hamza Zai
          </div>

          {/* Description */}
          <div className="mb-4 sm:mb-5 lg:text-white text-teal-100">
            <p className="text-center px-2 capitalize text-lg sm:text-xl tracking-wide leading-relaxed md:text-start md:px-4 xl:px-12 xl:mt-6 xl:text-[26px] xl:leading-10 xl:tracking-wide transition-all duration-300 hover:text-teal-400">
              I am a{" "}
              <span className="text-teal-50 sm:text-cyan font-bold px-[6px] transition-all duration-300 hover:text-red-400">
                front-end
              </span>{" "}
              developer. I learned HTML, CSS, and TypeScript, and some of the
              frameworks of CSS like:
            </p>
            <ol className="text-center sm:text-start sm:pl-8 md:pl-12 lg:pl-36 xl:pl-40 my-1">
              <li className="text-base sm:text-lg md:text-xl xl:text-2xl tracking-wide capitalize text-gray-50 font-bold sm:text-gray-600 lg:text-white xl:leading-10 transition-all duration-300 hover:text-teal-400">
                <span className="font-mono font-black text-white sm:text-hotPink">
                  1)
                </span>{" "}
                Bootstrap.
              </li>
              <li className="text-base sm:text-lg md:text-xl xl:text-2xl tracking-wide capitalize text-gray-50 font-bold sm:text-gray-600 lg:text-white xl:leading-10 transition-all duration-300 hover:text-teal-400">
                <span className="font-mono font-semibold text-white sm:text-hotPink">
                  2)
                </span>{" "}
                Tailwind CSS.
              </li>
            </ol>
            <p className="text-start px-4 sm:px-6 xl:px-12 text-lg sm:text-xl capitalize tracking-wide leading-6 sm:leading-8 xl:text-[25px] xl:tracking-wide xl:leading-10 transition-all duration-300 hover:text-teal-400">
              I also have some knowledge about{" "}
              <span className="text-teal-50 sm:text-cyan font-bold px-1 transition-all duration-300 hover:text-red-400">
                Back-end
              </span>
              as I learned TypeScript. Currently, I am learning{" "}
              <span className="text-teal-50 sm:text-cyan font-bold px-2 transition-all duration-300 hover:text-red-400">
                Next.js 14.
              </span>
            </p>
          </div>
        </div>

        {/* Right side of content */}
        <div className="h-full xl:h-screen pt-16 sm:pt-10 xl:pt-8 w-full bg-gray-800 sm:bg-teal-700 lg:bg-teal-900 xl:bg-transparent border-t-2 xl:border-t-0">
          <ImageToggler />
        </div>
      </div>
    </div>
  );
}
