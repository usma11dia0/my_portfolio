import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { type CSSObject, Global } from '@emotion/react';
import { 
  createAppTheme, 
  createAppStylesBaseline,
  type AnimatorGeneralProviderSettings,
  AnimatorGeneralProvider,
  Animator,
  BleepsProviderSettings,
  BleepsProvider
} from '@arwes/react';
import { useState } from "react";

const animatorsSettings: AnimatorGeneralProviderSettings = {
  // Durations in seconds.
  duration: {
    enter: 0.2,
    stagger: 0.5
  }
};

const bleepsSettings: BleepsProviderSettings = {
  // Shared global audio settings.
  master: {
    volume: 0.75
  },
  bleeps: {
    intro: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }
      ]
    },
    click: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }
      ]
    },
    error: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/error.mp3', type: 'audio/mp3' }
      ]
    }
  }
};

export default function App({ Component, pageProps }: AppProps) {

  const [active] = useState(true);

  return (
    <>
      {/* <AnimatorGeneralProvider {...animatorsSettings}>
        <Animator combine manager='stagger' active={active}> */}
          <BleepsProvider {...bleepsSettings}>
            <Component {...pageProps} />
          </BleepsProvider>
        {/* </Animator>
      </AnimatorGeneralProvider> */}
    </>
  );
}
