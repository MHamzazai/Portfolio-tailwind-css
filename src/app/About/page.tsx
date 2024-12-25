import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 pb-5 md-pb-5">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div className="relative w-full h-48 sm:h-64 md:h-full flex justify-end items-center mt-32 md:mt-0">
          <Image
            src="/images/my-image-1.jpg" // Replace with your image path
            alt="Your Name"
            width={200}
            height={200}
            className="object-cover rounded-3xl shadow-lg transform transition-all duration-500 lg:hover:scale-110 lg:hover:-rotate-2 lg:hover:shadow-white"
          />
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col justify-center space-y-4 px-4 md:px-0 mt-16 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-gray-300 text-center md:text-left">
            Hi, I'm{" "}
            <span className="text-teal-100 font-semibold tracking-wider">MHamzazai</span>, a
            passionate full-stack developer with a knack for building responsive
            and user-friendly web applications. I specialize in technologies
            like Next.js, Tailwind CSS, and React.
          </p>
          <p className="text-base sm:text-lg text-gray-300 text-center md:text-left">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sipping coffee while
            brainstorming the next big idea.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/Contact"
              className="mt-4 px-6 py-2 bg-teal-500 text-gray-900 font-medium rounded shadow-md hover:bg-teal-400 transition duration-200 lg:hover:scale-110 lg:hover:shadow-lg lg:hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
