import React from "react";
import { Header } from "../componends/header";
import { Hero } from "../componends/hero";
import { HomeGallery } from "../componends/home_gallery";
import { Footer } from "../componends/footer";
import { About } from "../componends/about";

export function HomePage(){
    return(
        <>
        <section>
         <Header />
        <Hero />
        <HomeGallery />
        <About />
        <Footer />
        </section>
        
        </>
    )
}