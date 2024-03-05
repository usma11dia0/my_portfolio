import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { 
  BleepsProviderSettings,
  BleepsProvider
} from '@arwes/react';

const bleepsSettings: BleepsProviderSettings = {
  bleeps: {
    intro: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }
      ],
      volume: 0.1,
    },
    click: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }
      ]
    },
    error: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/error.mp3', type: 'audio/mp3' }
      ],
      volume: 0.5,
    },
    looping: {
      sources: [
        { src: 'https://arwes.dev/assets/sounds/type.mp3', type: 'audio/mpeg' }
      ],
      volume: 0.2,
    }
  }
};

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <BleepsProvider {...bleepsSettings}>
        <Component {...pageProps} />
      </BleepsProvider>
    </>
  );
}
