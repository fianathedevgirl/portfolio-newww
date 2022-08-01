import { createRef } from "react";
/*import github from "../../icons/github.svg";
import mastodon from "../../icons/mastodon.svg";
import twitter from "../../icons/twitter.svg";
import devdotto from "../../icons/devdotto.svg";
import flatpak from "../../icons/flatpak.png";
import gtk from "../../icons/gtk.svg";*/
// import mockup from "./mockup.png";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";

export default function Portfolio() {
    const ref = createRef<IParallax>();

    // @ts-ignore
    window.ref = ref;
    return (<div >
        <Parallax pages={5} ref={ref} >

            <ParallaxLayer
                speed={0.8}
                factor={5}
                offset={0}
                className="background-gradient z-[-3]"

            ></ParallaxLayer>

            <ParallaxLayer speed={0.8} offset={0} horizontal={true} >
                <div className="flex p-8 flex-col space-y-8 lg:space-y-0 lg:flex-row justify-center items-center w-screen h-screen">
                    <div className="mr-8 flex flex-col">
                        <h1 className="text-3xl">Nefo Fortressia</h1>
                        <h4>Hiiiii! I'm your lovely software developer ✨💖 spreading love about Rust, Linux, and other tech stuff!</h4>
                    </div>

                    <img className="mr-8 h-60 rounded-full"
                        src="/favicon.png"
                    />
                </div>

            </ParallaxLayer>
            <ParallaxLayer
                className="grid place-content-center p-8 pr-18"
                offset={1}
                speed={1.5}
            >
                <div className="text-center text-lg">
                    <h2 className="text-2xl">
                        Hiii!! 👋👋 I'm a developer working with Rust 🦀 and the Linux 🐧🐧 desktop
                        ecosystem
                    </h2>
                    <p>
                        My passion is in the DIY and creative space! ✨✨
                    </p>
                    <p>
                        My hobby is messing around with anything that can run in Linux!!! ^^
                    </p>

                    <div className="flex p-4 place-content-center">
                        <img
                            className="h-15"
                            src="/icons/gtk.svg"
                        />
                        <img
                            className="h-15"
                            src="/icons/flatpak.png"
                        />
                    </div>
                    <p>
                        Not only that!! But I have skills in Android NDK development, web dev, and sometimes I pretend I'm a Linux kernel developer by reading kernel news on <a href="https://www.phoronix.com/">Phoronix</a>. 😊
                    </p>
                    <div className="h-1 relative">

                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer speed={3} offset={2} className="relative w-screen h-screen z-20 flex place-items-center">

                <div className="absolute p-8 pr-18 lg:left-8 lg:w-[35vw] space-y-8" style={{
                    WebkitTextStroke: "0.05rem black"
                }}>
                    <span className="mb-16">
                        <h1 className="text-4xl font-semibold">Run all your FOSS apps</h1>
                        <h2 className="text-2xl">Everywhere. Anytime! 💖✨</h2>
                    </span>
                    <span>
                        <h3>
                            <span className="font-bold">Waylovely</span> is an in-development technology to allow desktop Linux-based applications to be easily compiled for and run on the Android operating system.
                        </h3>
                        <h3>It does so by running the Smithay Wayland compositor as a native Android app! 💕💕</h3>
                    </span>

                    <a className="color-white h-8 text-xl bold no-underline" href="https://github.com/waylovely-project/smithay"><p>Coming Soon 👋</p></a>
                </div>



            </ParallaxLayer>

            <ParallaxLayer speed={2} offset={2} horizontal={false} className="z-8 relative h-screen w-screen">
                <img className="absolute top-30 right-30 lg:top-10 lg:top-2 lg:right-50 h-[100vh - 2rem]" src="/waylovely-stack-phone.png" />

            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.8} className="grid place-items-center">
                <div className="w-[80vw]">
                    <h1 className="text-center text-4xl">{"Ask Mee Aanythiingg!!"}</h1>
                    <details>
                        <summary>
                            What are your interests aside from programming?
                        </summary>
                        I like reading novels and writing storiess! When I'm bored, I usually playy Genshin Impact and Minecraftt! They're very fun!! ^^
                    </details>

                    <details>
                        <summary>
                            What sort of novels do you likee?
                        </summary>
                        I like stories with female MCs and dominated by feminime tones! I'm not into boys novels ^^<br /><br />

                        For Japanese urban media (manga/anime/light novel), I really enjoy genres that are focused on relationships and the mind aspect, like the shoujou genre!! I don't really enjoy anything outside of Slice of Life, except Detective Conan!<br /><br />

                        Shounen can be nice but they have lots of inappropriate scenes The only better ones are some portion of the GL genre, like Yagakimi and Adachi and Shimamura, because while they're mainly shounen stories, they're shoujou at heart!!!
                    </details>
                    <details>
                        <summary>{'I lovee you sooo much 😍😍 <3'}</summary>

                        I loveee you tooo!! 🥰🥰🥰💖💖✨✨
                    </details>
                </div>

            </ParallaxLayer>
            <ParallaxLayer
                offset={4}
                speed={2}
                style={{
                    backgroundColor: "rgb(28,113,216)",
                    background:
                        "linear-gradient(50deg, rgba(28,113,216,1) 28%, rgba(32,132,195,1) 34%, rgba(46,194,126,1) 66%, rgba(46,194,126,1) 68%, rgba(46,194,126,1) 94%, rgba(46,194,126,1) 96%)",
                }}
            ></ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.5} className="flex justify-center items-center flex-col space-y-8 pr-12 p-8">
                <h1 className="text-4xl">Find me in my socials</h1>
                <div className="flex space-x-2 h-5 icons">
                    <a href="https://twitter.com/lovelyy_fiaa" target="_blank"><img className="h-10" src="/icons/twitter.svg" />
                    </a>
                    <a href="https://github.com/lovelyyfiaaa" target="_blank"><img className="h-10" src="/icons/github.svg" /></a>

                    <a href="https://mastodon.technology/fortressia" target="_blank"><img className="h-10" src="/icons/mastodon.svg" /></a>

                    <a href="https://dev.to/fortressia" target="_blank"><img className="h-10" src="/icons/devdotto.svg" /></a>
                </div>
            </ParallaxLayer>

        </Parallax>
        <div className="fixed font-semibold navbarrr space-y-4 right-4 top-4 nav-bar write-vertical-right flex-row place-items-center flex" >
            <a href="#" onClick={() => { ref.current?.scrollTo(0) }}><img className="h-16 rounded-full" src="/favicon.png"></img></a>
            <a href="#about" onClick={() => { ref.current?.scrollTo(1) }}>About Mee</a>
            <a href="#waylovely" className="mb-2" onClick={() => { ref.current?.scrollTo(2) }}>Waylovely</a>
            <a href="#ama" onClick={() => { ref.current?.scrollTo(3) }}> {"AMA"}</a>
            <a href="#contact" onClick={() => { ref.current?.scrollTo(4) }}>Socialss</a>
            <a href="/posts" target="_blank">Blog</a>

        </div>
    </div>);
}