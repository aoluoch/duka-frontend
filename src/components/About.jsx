import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At Duka, we understand the importance of convenience and speed when shopping for your everyday essentials. Our platform is designed to provide you with a seamless experience, offering a wide range of high-quality FMCG products, from household necessities to personal care and groceries. Whether you need to restock your pantry, find the best deals on cleaning supplies, or get the latest personal hygiene products, we’ve got you covered.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_1280.jpg" alt="Veg" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our mission is to ensure that you can easily find what you need, when you need it, without hassle. With competitive prices, fast delivery, and a user-friendly interface, ShopFast is your one-stop shop for all your daily essentials. Shop with confidence, knowing that your favorite products are just a few clicks away, ready to be delivered to your doorstep.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg" alt="Alexa featured Img" />
                            
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://cdn.pixabay.com/photo/2018/07/26/09/56/ecommerce-3563183_1280.jpg" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://cdn.pixabay.com/photo/2018/07/26/09/56/ecommerce-3563183_1280.jpg" alt="Olivia featured Img" />
                            
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://cdn.pixabay.com/photo/2020/05/25/17/13/coupon-5219531_1280.jpg" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://cdn.pixabay.com/photo/2020/05/25/17/13/coupon-5219531_1280.jpg" alt="Liam featued Img" />
                            
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://cdn.pixabay.com/photo/2018/11/28/04/17/mail-3842930_1280.jpg" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://cdn.pixabay.com/photo/2018/11/28/04/17/mail-3842930_1280.jpg" alt="Elijah featured img" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
