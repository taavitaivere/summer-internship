function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">

        <main className="
        container
        mx-auto
        px-6
        pt-16
        flex-1
        text-center">
          <h2 className="
          text-2xl
          md:text-4x1
          lg:text-6xl
          uppercase">
            My self-Introduction for
          </h2>
          <h1 className="
          text-2xl
          md:text-6x1
          lg:text-8xl
          font-black
          uppercase mb-8">
            Summer internship
          </h1>
          <div className="
          text-lg
          md:text-2x1
          lg:text-3x1
          py-2 px-4
          md:py-4
          md:px-10
          lg:py-6
          lg:px-12
          bg-black
          bg-opacity-10
          w-fit
          mx-auto
          mb-8
          rounded-lg">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/BcCOPG57S4c"
                    title="YouTube video player" frameBorder="0"
                    allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture"
                    allowFullScreen>
            </iframe>
            <br/>
            <form action="https://taiveretaavi.ikt.khk.ee/e-portfoolio/eportfoolio.html">
              <input type="submit" value="E-portfolio" className="
            bg-primary
            rounded-full
            text-lg
            md:text-2xl
            py-4 px-6
            md:px-10
            lg:py-6
            lg:px-12
            cursor-pointer
            hover:opacity-90
            duration-150"/>
            </form>
          </div>
        </main>

        <footer className="
        container
        mx-auto
        p-6
        flex
        flex-col
        items-center
        justify-between">
          <p>Built with Fun by Taavi Taivere</p>
        </footer>

    </div>
  )
}

export default App
