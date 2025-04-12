import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center mt-10">
      <p className="text-[#582066] font-medium">Seamless experience</p>
      <p className="text-5xl font-medium mt-5 md:text-6xl">
        Unleashing the Next Generation of Card Solutions
      </p>
      <p className="mt-6 text-lg px-10 md:px-30">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </p>
      <div className="flex justify-center mt-10 gap-2 bg-[#582066] text-white mx-2 py-2 rounded-xl font-medium md:justify-self-center md:px-5 md:py-2">
        <p>Unlock your Card</p>
        <ArrowRight />
      </div>
      <p className="mt-5 text-[#5A6475]">*No credit card required</p>
    </div>
  );
}
