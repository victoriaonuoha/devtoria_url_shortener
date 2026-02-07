export default function HomePage() {
  return (
    <div className="mt-1 overflow-hidden  md:flex-row-reverse md:items-center flex-col flex">
      <div className="pl-6 w-[120%] md:w-[80%]">
        <img src="/images/illustration-working.svg" alt="" className="overflow-x-hidden" />
      </div>
      <div className="text-center md:text-left px-7 lg:px-28 space-y-5">
        <h1 className="text-3xl lg:text-6xl font-bold">More than just <br /> shorter links</h1>
        <p className="text-[#35323e] text-xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-[#2acfcf] py-3 px-12 rounded-4xl text-white font-bold cursor-pointer">Get Started</button>
      </div>
    </div>
  ); 
}
