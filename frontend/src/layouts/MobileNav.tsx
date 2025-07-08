

function MobileNav() {
  return (
    <div className="absolute lg:hidden mt-[80px] w-6/12 rounded-bl-lg flex flex-col gap-1 z-50 p-5 bg-[#fffafa] text-lg font-semibold" style={{alignSelf:"flex-end"}}>
      <button className="py-2 ">Dashboard</button>
      <button className="py-2 ">Start Test</button>
      <button className="py-2 ">Login</button>
      <button className="py-2 ">Sign Up</button>
    </div>
  );
}

export default MobileNav;
