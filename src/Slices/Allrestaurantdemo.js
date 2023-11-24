

const Allrestaurantdemo = ({ settings, Slider, slides }) => {



    return (
        <>
            <div className="pt-5 mx-auto w-[500px] md:w-[401px] lg:w-[600px] xl:w-[800px] 2xl:w-[1040px] 3xl:w-[11px] h-auto relative">
                <div>
                    <Slider {...settings}>
                        {slides.map((i) => {
                            return (
                                <>
                                    <div className="flex flex-col justify-center items-center">
                                        <div key={i.id} className="w-[350px] md:w-[130px] lg:w-[142px] rounded-lg overflow-hidden">
                                            <img src={i.photo_url} className="w-full h-full bg-cover hover:scale-110 transition  duration-300 ease-in text-center" alt="" />
                                        </div>
                                        <p className="text-center">{i.restaurant_name}</p>
                                    </div>
                                </>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Allrestaurantdemo;