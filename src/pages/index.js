import React from "react"
import Footer from "../components/footer";
import Header from '../components/header'
import Nav from "../components/nav";
import Repos from '../components/repos'

export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <Repos />
      <Footer />
    </>
  
  );
}
