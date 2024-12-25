import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-72 md:h-52 lg:h-56 xl:h-[260px] bg-gray-800 overflow-hidden">
        <div className="flex flex-col items-center">
            <div className="bg-red-200 w-[98%] rounded-md text-center text-2xl capitalize font-bold tracking-wide py-3
             text-dark2 lg:text-3xl xl:text-3xl">
                want to see my work
            </div>
            <div className="tracking-wider capitalize my-5 text-xl font-serif text-cyan border-b-2 px-2
            rounded-r-xl lg:text-2xl xl:text-2xl xl:tracking-wider xl:hover:rounded-r-none transition-all
            xl:hover:scale-125 xl:hover:pb-2">
                <Link href={"https://github.com/mhamzazai/"} target="_blank">
                <i className="ri-github-fill text-3xl lg:text-4xl xl:text-5xl px-2 text-white"></i>
                check my gitHub
                </Link>
            </div>
            <div className="tracking-wider capitalize my-5 text-xl lg:text-2xl font-serif text-cyan
            border-b-2 px-2 rounded-l-xl xl:text-2xl xl:tracking-wider xl:hover:rounded-l-none transition-all
            xl:hover:scale-125 xl:hover:pb-2">
                <Link href={"https://www.npmjs.com/~mhamzazai"} target="_blank">
                <i className="ri-npmjs-line text-3xl lg:text-4xl xl:text-5xl px-2 text-white"></i>
                check my npm
                </Link>
            </div>
            <div className=" w-full mt-8 lg:mt-10 h-fit text-center md:hidden md:h-fit">
                <Link href={"#navbar"} legacyBehavior>
                <a className="text-2xl lg:text-[25px] text-teal-100 capitalize bg-gray-400 border-2
                border-black px-4 py-1 rounded-md lg:hover:bg-black lg:hover:text-white lg:hover:px-5
                transition-all lg:hover:py-1.5 hover:border-white lg:hover:border-[1px]">
                    back to top
                </a>
                </Link>
            </div>
        </div>
    </div>
  )
}
