import ReactLogo from '../assets/images/react.svg?react';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex justify-center">
        <a className="h-96 w-96" href="https://react.dev" target="_blank">
          <ReactLogo className="h-full w-full" alt="React" />
        </a>
      </div>
      <h1 className="text-2xl">React Boilerplate</h1>
      <p className="text-16 text-gray-500">Built with Vite</p>
    </div>
  );
}
