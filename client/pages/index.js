import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from "../components/Dashboard";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loader from '../components/Loader';
import {BrowserRouter as Router, Route,link,Switch, Routes, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import contactUs from '../components/contactUs';
import Track from '../components/Track';
import Player from '../components/Player';



export default function Home() {
  const router=useRouter()
  const [sidetoggle, setSidetoglebar]= useState (false)
  const{status, data:session}=useSession({
    required:true,  //require unauthenticated session every time 
    onUnauthenticated(){
      router.push("/auth/signin");
    }
  })
  if(status==="loading"){
    return <Loader/>
  }
  return (
    <div className="">
      <Head>
        <title>Baripify</title>
      </Head>
      <Router>
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="./contactUs" component={<contactUs/>}/>
        </Routes>
      </Router>
    </div>
  )
}
