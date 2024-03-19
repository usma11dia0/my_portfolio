import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'App Developer',
        1500,
      ]}
      wrapper="span"
      className="
        text-[2rem] text-[#55e6a5] font-bold uppercase
        sm:text-[2rem] 
        md:text-[3rem]
        lg:text-[2.5rem]
        xl:text-[3rem]
      "
      repeat={Infinity}
    />
  );
};

export default TextEffect;
