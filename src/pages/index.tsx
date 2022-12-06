/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div className='w-screen gap-4 h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold'>
        Lorem Impsum
      </h1>
      <p className='max-w-md'>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
        Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      </p>
      <pre className='border border-white rounded-md p-4'>
        {`export const mona = localFont({
  src: "./Mona-Sans.woff2",
  variable: "--font-mona",
});

export const hubot = localFont({
  src: "./Hubot-Sans.woff2",
  variable: "--font-hubot",
});

export const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});`}
      </pre>
    </div>
  )
}
