import React from 'react'

const Footer1 = () => {
    return (
    <footer className='bg-slate-900 '>
            <div className=' sm:flex-col w-full h-full  md:overflow-hidden'>
                <div className='flex flex-row  justify-between text-white'>
                    <div className='w-1/3 px-4 py-5 mx-auto'>
                        <h1>OUR COMMITMENTS</h1>
                        <p className='py-3'>We take the service we provide to our clients very seriously, and we start every engagement by establishing a thorough understanding of the client’s ambitions and goals. At Addmarc, we are committed to providing smart solutions that can result in a 30 to 35% revenue increase to your bottom line. Our solutions will also offer a high mind share as well as better brand recall factor to you, at no extra cost.</p>
                    </div>
                     <div className='w-1/3 px-3 py-5'>
                        <h1>LET US CALL YOU BACK:</h1>
                        <p className='py-3'>Fields marked with an <span className='text-[#dc2626]'>*</span> are required</p>
                        <form action="" className='py-2 '>
                            <label for="firstname">Name*</label><br />
                            <input className='w-80 pl-3 p-2' type="text" id="firstname" placeholder='' /><br /><br />
                            <label for="">E.mail*</label><br />
                            <input className='w-80 pl-4 p-2' type="email"></input><br /><br />
                            <label for="">Phone*</label><br />
                            <input className='w-80 pl-4 p-2' type="number" /><br /><br />
                            <label for="">Message*</label><br />
                            <input className='w-80 pl-4 p-2' type="text" /><br /><br />
                            <input className='border-2 rounded-xl py-2 px-2  hover: bg-gray-500 cursor-pointer transform hover:scale-80 ' type="submit" value="Submit" />

                        </form>
                    </div>

                    <div className='w-1/3 py-5 hover:cursor-pointer '>
                        <h1>Recent Posts Extra</h1>
                        <div className='flex py-3 hover:text-[#0ea5e9]'>
                            <div className='w-16 '><img src="https://addmarc.com/wp-content/uploads/2020/01/6.jpg" alt="" /></div>
                            <div>
                                <h6 className='mx-3 py-3 text-sm'>Tuli Imperial Hotel Nagpur <br />
                                    <span className='text-sm'> January 6, 2020</span></h6>
                            </div>
                        </div>
                        <div className='flex py-3 hover:text-[#0ea5e9]'>
                            <div className='w-16'><img src="https://addmarc.com/wp-content/uploads/2019/12/5.jpg" alt="" /></div>
                            <div>
                                <h6 className='mx-3 py-3 text-base '>Hotel HG Grandiose Mount Abu Rajasthan <br />
                                    <span className='text-sm'> December 9, 2019</span></h6>
                            </div>
                        </div>
                        <div className='flex py-3 hover:text-[#0ea5e9]'>
                            <div className='w-16'><img src="https://addmarc.com/wp-content/uploads/2019/11/7.jpg" alt="" /></div>
                            <div>
                                <h6 className='mx-3 py-2 text-base '>Royal Tulip Luxury Hotel Kufri-Shimla <br />
                                    <span className='text-sm'> November 20, 2019</span></h6>
                            </div>
                        </div>
                        <div className='flex py-3 hover:text-[#0ea5e9]'>
                            <div className='w-16'><img src="https://addmarc.com/wp-content/uploads/2019/10/7.jpg" alt="" /></div>
                            <div>
                                <h6 className='mx-3 py-3 text-base'>The Fern Hotel <br />
                                    <span className='text-sm'>October 4, 2019</span></h6>
                            </div>
                        </div>
                        <div className='flex py-3 hover:text-[#0ea5e9]'>
                            <div className='w-16'><img src="https://addmarc.com/wp-content/uploads/2019/09/7.jpg" alt="" /></div>
                            <div>
                                <h6 className='mx-3 py-3 text-base'>The Deltin Hotel Daman <br />
                                    <span className='text-sm'> September 18, 2019</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer1