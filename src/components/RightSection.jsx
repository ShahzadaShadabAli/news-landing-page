const RightSection = () => {
    return (  
        <div className="w-[21.7rem] max-md:w-full max-md:mt-12 px-[1.6rem] pt-[1.2rem] bg-black">
            <h1 className="text-[2.6rem] inter-semibold text-[#e1ab64]">New</h1>
            <div className="border-b border-b-[#8a8b94]">
                <h3 className="text-xl tracking-wide inter-semibold hover:text-[#e1ab64] cursor-pointer mt-5 text-white">Hydrogen VS Electric Cars</h3>
                <p className="text-[#8a8b94] inter text-[15px] leading-6 mt-2 mb-7">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="border-b border-b-[#8a8b94]">
                <h3 className="text-xl tracking-wide inter-semibold hover:text-[#e1ab64] cursor-pointer mt-7 text-white">The Downsides of AI Artistry</h3>
                <p className="text-[#8a8b94] inter text-[15px] leading-6 mt-2 mb-7">What are the possible adverse effects of on-demand AI image genera</p>
            </div>
            <div className="">
                <h3 className="text-xl tracking-wide inter-semibold hover:text-[#e1ab64] cursor-pointer mt-7 text-white">Is VC Funding Drying Up?</h3>
                <p className="text-[#8a8b94] inter text-[15px] leading-6 mt-2 mb-7">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    );
}
 
export default RightSection;