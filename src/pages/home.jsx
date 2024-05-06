import { useRef } from 'react';

import ReactLogo from '../assets/images/react.svg?react';
import useScrollScale from '../hooks/use-scroll-scale.js';

export default function Home() {
  const textRef = useRef(null);
  const scrollScale = useScrollScale({
    minScale: 0.7,
    maxScale: 1.5,
    ref: textRef,
  });

  return (
    <section className="flex flex-col items-center gap-16">
      <div className="flex h-screen flex-col items-center justify-center gap-8">
        <a className="h-96 w-96" href="https://react.dev" target="_blank">
          <ReactLogo className="h-full w-full" alt="React" />
        </a>
        <h3 className="text-2xl">React Boilerplate</h3>
        <p className="text-16 text-gray-500">Built with Vite</p>
      </div>
      <div
        ref={textRef}
        className="flex h-screen items-center gap-16 text-center"
      >
        <div style={{ transform: `scale(${scrollScale})` }}>
          <h3>Lorem Ipsum</h3>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
        </div>
      </div>
    </section>
  );
}
