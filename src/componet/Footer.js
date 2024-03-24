
import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";

const Footer = () => {
    // const sections = [
    //     {
    //       title: "Solutions",
    //       items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
    //     },
    //     {
    //       title: "Support",
    //       items: ["Pricing", "Documentation", "Guides", "API Status"],
    //     },
    //     {
    //       title: "Company",
    //       items: ["About", "Blog", "Jobs", "Press", "Partners"],
    //     },
    //     {
    //       title: "Legal",
    //       items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
    //     },
    //   ];


    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
                <div className="">
                    <h1>OUR COMMITMENTS</h1>
                    <h6 className="py-4">We take the service we provide to our clients very seriously, and we start every engagement by establishing a thorough understanding of the client’s ambitions and goals. At Addmarc, we are committed to providing smart solutions that can result in a 30 to 35% revenue increase to your bottom line. Our solutions will also offer a high mind share as well as better brand recall factor to you, at no extra cost.</h6>
                </div>
                


                {/* {sections.map((section, index) => (
                  <div key={index}>
                    <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                    <ul>
                      {section.items.map((item, i) => (
                        <li key={i} className="py-1 text-gray-500 hover:text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))} */}

                <div className="col-span-2 pt-8 md:pt-5 px-5">
                    <p className="font-bold uppercase">LET US CALL YOU BACK:</p>
                    <p className="py-2">
                    Fields marked with an * are required.
                    </p>
             
                   



  
        <div className="relative flex flex-col justify-center  overflow-hidden w-25">
            <div className="">
            
                <form className="">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-white-800"
                        >
                            Firstname
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-white-800"
                        >
                           Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-white-800"
                        >
                          Phone
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                    <label
                            for="email"
                            className="block text-sm font-semibold text-white-800"
                        >
                            Message
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

                
                </div>
            </div>

            {/* <div className="flex flex-col max-w-[1240px]  py-4 mx-auto justify-center sm:flex-row text-center text-gray-500">
                <p className="py-4 text-centre">All Rights Reserved, 2018. Addmarc Hospitality Marketing Services Pvt. Ltd. .Site designed by Softechmochand</p>

            </div> */}
        </div>
    );
};

export default Footer;

