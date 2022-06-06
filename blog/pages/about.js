import Head from 'next/head'
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <Head>
                <title>MomsOwnBlog</title>
                <link rel="icon" href="/MomsOwnBlogLogo.jpg" />

            </Head>

            <main className="flex flex-col  justify-center space-y-4 text-center" >
                <h1 className="text-3xl my-8 font-bold text-center">
                    About Us
                </h1>
                <p> A blogging initiative to help people cook comfort food.</p>
                 <div className="logo-img">

                 <Image className="rounded-lg "
                    src="/MomsOwnBlogLogo.jpg"
                    alt="MomsOwnBlogLogo"
                    width={500}
                    height={500}
                 />

                 </div>

            </main>

        </div>
    )
}
