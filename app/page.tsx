"use client";
import FeatureBoxContainer from "@/components/FeatureBoxContainer";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import HeadingSecondary from "@/components/ui/HeadingSecondary";
import LinkShortenBox from "@/components/ui/LinkShortenBox";
import UrlBox from "@/components/ui/UrlBox";
import Image from "next/image";
import useStore from "@/store/useStore";

export default function Home() {
  const { url } = useStore((state) => state);

  return (
    <main>
      <Container>
        <section className="hero | pb-2">
          <HeroSection />
        </section>
      </Container>

      <section className="pb-32 mt-32 bg-primary-100">
        <Container style={{ position: "relative" }}>
          <div className="flex flex-col items-center gap-10">
            <div
              className="searchBar |
          bg-primary-700
          p-10
          rounded-md
          absolute
          top-[-5rem]
          w-full
          left-1/2 transform -translate-x-1/2"
            >
              <LinkShortenBox />
            </div>
            <ul className="flex flex-col w-full m-24 mb-4 gap-7">
              {url.map((url) => {
                console.log(url);

                return (
                  <UrlBox
                    href={url.shortedLink}
                    shortedLink={url.shortedLink}
                    original={url.originalLink}
                    key={url.shortedLink}
                  />
                );
              })}
            </ul>
          </div>
          <div className="translate-y-32 ">
            <HeadingSecondary />
            <p className="px-5 mt-6 text-lg font-semibold text-center text-primary-300">
              Track how your links are performing across the web with our
              advanced Stastics dashboard
            </p>
          </div>

          <FeatureBoxContainer />
        </Container>
      </section>
    </main>
  );
}
