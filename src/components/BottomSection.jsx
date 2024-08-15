const BottomSection = () => {
    return (
        <div className="flex gap-[5.5%] max-md:justify-center flex-wrap my-16">
            <div className="flex w-[310px] gap-6 my-3">
                <img src="/assets/images/image-retro-pcs.jpg" width={90} alt="" />
                <div className="flex flex-col justify-between">
                <h1 className="inter-bold text-3xl text-[#f35e53]">01</h1>
                <h6 className="inter-bold hover:text-[#f35e53] cursor-pointer">Reviving Retro PCs</h6>
                <p className="text-[#626162]  text-[15px]">What happens when old PCs are given modern upgrades?</p>
            
                </div>
              </div>
            <div className="flex w-[310px] gap-6 my-3">
                <img src="/assets/images/image-top-laptops.jpg" width={90} alt="" />
                <div className="flex flex-col justify-between">
                <h1 className="inter-bold text-3xl text-[#f35e53]">02</h1>
                <h6 className="inter-bold hover:text-[#f35e53] cursor-pointer">Top 10 Laptops of 2022</h6>
                <p className="text-[#626162]  text-[15px]">Our best picks for various needs and budgets</p>
            
                </div>
              </div>
            <div className="flex w-[310px] gap-6 my-3">
                <img src="/assets/images/image-gaming-growth.jpg" width={90} alt="" />
                <div className="flex flex-col justify-between">
                <h1 className="inter-bold text-3xl text-[#f35e53]">03</h1>
                <h6 className="inter-bold hover:text-[#f35e53] cursor-pointer">The Growth of Gaming</h6>
                <p className="text-[#626162]  text-[15px]">What happens when old PCs are given modern upgrades?</p>
            
                </div>
              </div>
            
        </div>
    );
}
 
export default BottomSection;