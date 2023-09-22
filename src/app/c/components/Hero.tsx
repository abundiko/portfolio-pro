import { FaPlay, FaLink, FaWindows } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex h-[90vh] container mx-auto">
      <div className="w-3/12 relative py-20">
        <div className="flex justify-between items-end px-8">
          <div className="w-4/12 aspect-square bg-[url(/images/c/graph.png)] bg-light rounded-lg shadow-lg" />
          <div className="w-16 h-16 aspect-square bg-[url(/images/c/thumb.png)] bg-cover" />
        </div>
        <div className="w-full aspect-square bg-[url(/images/c/man.png)] bg-cover" />
      </div>
      <div className="w-6/12 pt-20">
        <h1 className="font-bold text-7xl text-center">
          Make Your <br /> Future Better
        </h1>
        <p className="my-4 opacity-90 text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <div className="flex gap-5 justify-center my-6">
          <button className="rounded-3xl bg-c-primary bg-gradient-to-t from-[#00000033] px-5 py-2 text-light flex items-center shadow gap-2">
            <span>Get started</span>
            <div className="h-8 w-8 flex rounded-full items-center justify-center text-black bg-orange-700">
              <FaLink />
            </div>
          </button>
          <button className="rounded-3xl px-5 py-2 flex items-center shadow gap-2">
            <div className="h-8 w-8 flex rounded-full items-center justify-center text-light bg-orange-700">
              <FaPlay />
            </div>
            <span>Play our video</span>
          </button>
        </div>
        <div className="py-10 w-full px-20  mx-auto">
          <div className="border-b-2 w-full" />
        </div>
        <div className="w-full flex items-center text-center">
          <h2 className="font-semibold text-base w-3/12 opacity-50 text-black">
            <FaWindows className="inline" /> Microsoft
          </h2>
          <h2 className="font-semibold text-xl w-3/12 opacity-50 text-black">
            Google
          </h2>
          <h2 className="font-semibold text-xl w-3/12 opacity-50 text-black">
            Apple
          </h2>
          <h2 className="font-semibold text-xl w-3/12 opacity-50 text-black">
            Amazon
          </h2>
        </div>
      </div>
      <div className="w-3/12 relative py-20">
        <div className="flex justify-between items-end px-8">
          <div className="w-16 h-16 aspect-square bg-[url(/images/c/bulb.png)] bg-cover" />
          <div className="w-4/12 aspect-square bg-[url(/images/c/graph.png)] bg-light rounded-lg shadow-lg" />
        </div>
        <div className="w-full aspect-square bg-[url(/images/c/lady.png)] bg-cover" />
      </div>
    </section>
  );
}
