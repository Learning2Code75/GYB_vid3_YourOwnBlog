import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="mx-auto w-11/12">
      <header>
        <div className="header-div">
          <Image className="rounded-lg company-logo"
                    src="/MomsOwnBlogLogo.jpg"
                    alt="MomsOwnBlogLogo"
                    width={50}
                    height={50}
                 />
          <h1 className="text-2xl my-8 font-bold text-center">MomsOwnBlog</h1>
          <a className="instaHolder" href="https://www.instagram.com/takshila_gujarathi_choksi/" target="_blank">
             <FaInstagram className="insta" />
          </a>
        </div>
        <div className="ytcontainer">
          <div className="g-ytsubscribe" data-channelid="UC0UARGiSBq_raXNcZc5BzBg" data-layout="full" data-count="default"></div>
        </div>

        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4 navbar ">
            <li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a className="text-xl font-extrabold">Home</a></Link></li>
            <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about"><a className="text-xl font-extrabold">About</a></Link></li>
            <li className={router.pathname == "/contribute" ? "active" : ""}><Link href="/contribute"><a className="text-xl font-extrabold">Contribute</a></Link></li>
          </ul>

        </nav>
      </header>

      <Component {...pageProps} />

    </div>

  )
}

export default MyApp
