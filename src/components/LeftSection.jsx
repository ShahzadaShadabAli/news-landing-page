const LeftSection = () => {
    return (
        <div className="flex-1">
            <img src="/assets/images/image-web-3-mobile.jpg" className="hidden max-md:block" width="100%" alt="" />
            <img src="/assets/images/image-web-3-desktop.jpg" width="100%" className="hidden md:block" alt="" />

            <div className="flex mt-9 justify-between max-lg:flex-col">
            <h1 className="inter-bold text-[3.5rem] max-lg:text-[4rem] leading-[3.4rem] max-md:w-[90%] w-[21rem]">The Bright Future of Web 3.0?</h1>
            <div>
            <p className="text-[#626162] text-[15px] w-[20.5rem] max-lg:mt-5 max-md:w-full max-lg:text-[16px]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className="inter-semibold text-sm tracking-[.2em] bg-[#f35e53] px-8 mt-8 py-[.8rem] transition-all hover:bg-black hover:text-white">READ MORE</button>
            </div>
            </div>
         </div>
    );
}
 
export default LeftSection;