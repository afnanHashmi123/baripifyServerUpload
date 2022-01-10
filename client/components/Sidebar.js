import Image from "next/image";
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompassFill } from "react-icons/ri";
  import Dashboard from "./Dashboard";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import ContactUs from "./ContactUs";

function Sidebar() {
    return (
        <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
            <Image
             src="https://rb.gy/xkacau"
              width={56}
               height={56}
               objectFit="contain"
               />
               <div className="flex flex-col space-y-8">
                   <Link to="/">
                       <HomeIcon className="sidebarIcon text-white opacity-[0.85]"/>
                   </Link>
                   <Link to="/ContactUs">
                <RiCompassFill className="sidebarIcon text-2xl" />
                   </Link>
                <FaMicrophoneAlt className="sidebarIcon ml-1" />
                <ChartBarIcon className="sidebarIcon" />
                <ClockIcon className="sidebarIcon" />
                <DotsHorizontalIcon className="sidebarIcon" />
               </div>
        </section>
    );
}
export default Sidebar
