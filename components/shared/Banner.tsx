// import Typewriter from 'typewriter-effect';

interface BannerProps {
  texts: string[];
}

export default function Banner({ texts }: BannerProps) {

  return (
    <div
      className="uppercase w-full h-fit py-3 bg-gradient-to-r from-brown to-brown/90 z-10 flex items-center justify-center text-black text-xs font-semibold overflow-hidden shadow-md"
    >
      {/* <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
        }}
      /> */}
      {texts[0]}
    </div>
  );
}
