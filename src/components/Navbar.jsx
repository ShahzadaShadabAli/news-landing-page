const Navbar = () => {

    const handleClick = () => {
        const sidebar = document.querySelector('.sidebar')
        const overlay = document.querySelector('.overlay')
        const navs = document.querySelectorAll('.hidden-nav')
        sidebar.classList.remove('translate-x-[22.5rem]')
        overlay.classList.replace('opacity-0', 'opacity-60')
        overlay.classList.replace('hidden', 'fixed')
        navs.forEach((nav, i) => {
          i++
          nav.classList.remove(`slide-out-${i}`)
          nav.classList.add(`slide-in-${i}`)
        })
    }

    const handleClose = () => {
        const sidebar = document.querySelector('.sidebar')
        const overlay = document.querySelector('.overlay')
        const navs = document.querySelectorAll('.hidden-nav')
        sidebar.classList.add('translate-x-[22.5rem]')
        overlay.classList.replace('opacity-60', 'opacity-0')
        overlay.classList.replace('fixed', 'hidden')
        navs.forEach((nav, i) => {
          i++
          nav.classList.remove(`slide-in-${i}`)
          nav.classList.add(`slide-out-${i}`)
        })
    }

  return (
    <nav className="flex justify-between">
      <img src="/assets/images/logo.svg" alt="" />
      <ul className="flex inter gap-[2.5rem] text-[15px] items-center text-[#626162] max-md:hidden">
        <li className="hover:text-[#f35e53] cursor-pointer">Home</li>
        <li className="hover:text-[#f35e53] cursor-pointer">New</li>
        <li className="hover:text-[#f35e53] cursor-pointer">Popular</li>
        <li className="hover:text-[#f35e53] cursor-pointer">Trending</li>
        <li className="hover:text-[#f35e53] cursor-pointer">Categories</li>
      </ul>
      <img
      onClick={handleClick}
        src="/assets/images/icon-menu.svg"
        className="md:hidden cursor-pointer"
        alt=""
      />

      {/* SideBar */}
        <div className="hidden w-full opacity-0 top-0 right-0 left-0 h-full bg-black overlay fading-effect"></div>
        <div className="w-[20.5rem] h-full fixed translate-x-[22.5rem] top-0 right-0 bg-white p-8 sidebar swipe-effect">
          <img
            onClick={handleClose}
            src="assets/images/icon-menu-close.svg"
            className="cursor-pointer float-right"
            alt=""
          />
          <ul className="flex inter flex-col mt-32 gap-[2rem] text-[18px] text-black">
            <li className="hover:text-[#f35e53] hidden-nav cursor-pointer">Home</li>
            <li className="hover:text-[#f35e53] hidden-nav cursor-pointer">New</li>
            <li className="hover:text-[#f35e53] hidden-nav cursor-pointer">Popular</li>
            <li className="hover:text-[#f35e53] hidden-nav cursor-pointer">Trending</li>
            <li className="hover:text-[#f35e53] hidden-nav cursor-pointer">Categories</li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
