import Head from 'next/head'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
export default function About() {
    return (
        <div>
            <Head>
                <title>MomsOwnBlog</title>
                <link rel="icon" href="/MomsOwnBlogLogo.jpg" />


            </Head>

            <main className="flex flex-col  justify-center space-y-4 text-center" >
                <h1 className="text-3xl  font-bold text-center">
                    Send Your creations here !! 
                </h1>
                <a className="instaHolder" href="https://www.instagram.com/takshila_gujarathi_choksi/" target="_blank">
                        <FaInstagram className="insta" />
                </a>
                <p>To contribute a recipe send us a pdf in this format:</p>
                <div className="logo-img">
                 
                 <Image
                    src = "/example.png"
                    alt="Example PDF"
                    width={700}
                    height={700}
                 />   

                 </div>

            </main>

        </div>
    )
}
