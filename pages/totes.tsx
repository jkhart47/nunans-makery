import Image from 'next/image';
import bags from "../public/tote-bags.png";

const HomePage = () => {
  return (
      <>
          {/* This is a local import, so the 
          height and width props are optional */}
          <div>
            <Image alt="tote-bags" 
                src={bags} layout="intrinsic"/>
          </div>
          <main>
            <h1>At Home or On The Go!</h1>
          </main>
      </>
  );
};

export default HomePage;
