import React from "react";
import { Header } from "../componends/header";
import { Gallery } from "../componends/gallery";
import { Footer } from "../componends/footer";

export function GalleryPage(){
    return(
        <>
        <section>
        <Header />
        <Gallery />
        <Footer />
        </section>
       
        </>
    )
}