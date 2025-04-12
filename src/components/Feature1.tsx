import { ArrowRight } from "lucide-react";

export default function Feature1() {
  return (
    <div className="mt-20 text-center px-2">
      <p className="font-medium text-3xl">
        Elevating Card Programs with Cutting-Edge Technology
      </p>
      <p className="text-[#5A6475] mt-4 text-lg">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
      <div className="flex justify-center text-[#582066] mt-8">
        <p>Compare all Pro features</p>
        <ArrowRight />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center mt-10 lg:justify-center">
        <div className="flex flex-col items-center text-center p-4 ">
          <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#F4EFF6] mb-3">
            <img src="earth.svg" alt="" />
          </div>
          <p className="font-medium text-black">Globally Accepted</p>
          <p className="text-gray-500 text-sm mt-3 m-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#F4EFF6] mb-3">
            <img src="key.svg" alt="" />
          </div>
          <p className="font-medium text-black">Biometric Integrated</p>
          <p className="text-gray-500 text-sm mt-3 m-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#F4EFF6] mb-3">
            <img src="lock.svg" alt="" />
          </div>
          <p className="font-medium text-black">Fully Secured</p>
          <p className="text-gray-500 text-sm mt-3 m-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  );
}
