import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' hshah339@gatech.edu');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
      <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Hi, I'm Heet Shah</p>
                <p className="grid-subtext">
                  With 4 years of experience, I have gained intermediary skills in frontend and backend development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools such as <b className={"text-green-700"}>Python, Java, C, JS, React, and TensorFlow.</b>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                    height={326}
                    width={326}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{
                      lat: 33.753746,
                      lng: -84.386330,
                      text: 'Atlanta, Georgia',
                      color: 'green',
                      size: 0.5,
                      altitude: 0.1
                    }]}
                    pointsData={[{
                      lat: 33.753746,
                      lng: -84.386330,
                      color: 'red',
                      size: 0.5,
                      pulse: true
                    }]}
                />
              </div>
              <div>
                <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
                <p className="grid-subtext">I&apos;m based in <b className={"text-red-400"}>Atlanta, Georgia</b> and open to remote work worldwide.</p>
                <a href={"#contact"}><Button name="Let's talk" isBeam containerClass="w-full mt-10" /></a>

              </div>
            </div>
          </div>

          <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
              <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Interests</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code. Programming is my passion.
                  I enjoy exploring new technologies, and enhancing my skills. Aside from coding, I love watching movies,
                  playing basketball, and travelling.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
              <img
                  src="assets/grid4.png"
                  alt="grid-4"
                  className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">hshah339@gatech.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;