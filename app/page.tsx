import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import Image from "next/image";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
              <Slide>
              <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                Jennifer Rosser
                </h1>
                <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type="social" />
              </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                      placeholder="blur"
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />
                    <div className="flex flex-col text-center gap-y-4">
                      {/* <div className="flex items-center gap-x-3">
                        <a
                          href="https://www.craft.me/s/WQpQF3jrPIodXp"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                        >
                          View Résumé <BiLinkExternal className="text-base" />
                        </a>
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}-resume`}
                          className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
                        </a>
                      </div>*/}
                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 hover:text-primary-color"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                    </div> 
                    </div>
                    </Slide>
                    </aside>
                    </section>
                    </div>
                    ))}
                   
                   
       
      </section>
      <Job />
      <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
    </main>
  );
}