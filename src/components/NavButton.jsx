export const NavButton = ({ children }) => {
  return (
    <div className="relative group px-2">
      <a href="#" className="relative z-10 hover:text-[#FBB239]">
        {children}
      </a>
      <span className="absolute left-0 -top-5 w-full h-[2px] bg-[#FBB239] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left origin-right"></span>
    </div>
  )
}
  