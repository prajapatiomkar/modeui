import { Menu, LogIn } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-6 border-y-1 border-[#E6E7E9] px-2 my-1">
      <p className="font-medium text-2xl">Mode UI</p>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 bg-[#F1F1F2] py-2 px-4 rounded-xl">
          <p className="">Login</p>
          <LogIn color="#5A6475" />
        </div>
        <Menu />
      </div>
    </div>
  );
}
