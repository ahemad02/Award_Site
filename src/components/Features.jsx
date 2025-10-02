import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (event) => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div>
      <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
          <div className="px-5 py-32">
            <p className="font-circular-web text-lg text-blue-50">
              Into The Metagame Layer
            </p>

            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
              Immer Yourself in a rich and dynamic metaverse landscape, where
              innovation meets entertainment. Immerse yourself in a rich and
              dynamic metaverse landscape, where innovation meets entertainment.
            </p>
          </div>

          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] cursor-pointer">
            <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  radia<b>n</b>t
                </>
              }
              description="A cross-platform metagame app,turning your activities across Web2 and Web3 games into a unified experience."
              isComingSoon
            />
          </BentoTilt>

          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-7 h-[135vh] md:h-[100vh]">
            {/* Tall card on the left spanning 2 rows */}
            <BentoTilt className="row-span-1 sm:row-span-2 col-span-1 sm:col-span-1 cursor-pointer">
              <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    zig<b>m</b>a
                  </>
                }
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
                isComingSoon
              />
            </BentoTilt>

            {/* Top-right card */}
            <BentoTilt className="cursor-pointer">
              <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    n<b>e</b>xus
                  </>
                }
                description="A gamified social hub, adding a new dimension of play to social interactions for web3 communities"
                isComingSoon
              />
            </BentoTilt>

            {/* Bottom-right card */}
            <BentoTilt className="cursor-pointer">
              <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    az<b>u</b>l
                  </>
                }
                description="A cross-world AI Agent - elevating your gameplay to be more fun and productive"
                isComingSoon
              />
            </BentoTilt>
          </div>

          {/* Extra row for the last two cards */}
          <div className="grid grid-cols-2 gap-7 mt-7 h-[40vh]">
            <div className="bento-tilt_2">
              <BentoTilt className="flex size-full flex-col justify-between bg-violet-300 p-5 cursor-pointer">
                <h1 className="bento-title special-font max-w-64 text-black">
                  M<b>o</b>re Co<b>m</b>ing So<b>o</b>n
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </BentoTilt>
            </div>

            <BentoTilt className="bento-tilt_2 relative cursor-pointer">
              <video
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
