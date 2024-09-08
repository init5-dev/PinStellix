import Image from 'next/image'

export default function Home () {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-2 md:p-8 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-6 md:gap-8 lg:gap-12 items-center sm:items-start w-full lg:max-w-3xl'>
        <div className='w-full'>
          <Image
            layout='responsive'
            width={1024}
            height={768}
            src='/space-exploration.webp'
            alt='Space Exploration'
            className='w-full h-auto rounded-t-lg shadow-lg'
          />
          <div className='flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-6 rounded-b-lg'>
            <h1 className='text-4xl font-extrabold text-white'>
              Explore the Universe with PinStellix
            </h1>
            <p className='text-justify font-semibold text-gray-300 mt-4 max-w-3xl'>
              PinStellix is your gateway to the cosmos, offering a unique and
              immersive experience in space exploration. Our platform provides
              access to an extensive and continuously updated database of space
              data, drawing from the rich repositories of NASA and SpaceX.
              Whether you are captivated by the enigmatic beauty of distant
              exoplanets, the thrilling advances in rocket technology, or the
              fascinating dynamics of asteroid tracking, PinStellix is designed
              to cater to your curiosity.
            </p>

            <p className='text-justify font-semibold text-gray-300 mt-4 max-w-3xl'>
              With PinStellix, you can delve into detailed information about
              celestial objects, missions, and space phenomena. Our interactive
              features allow you to visualize and analyze data, track the latest
              space missions in real time, and explore comprehensive records of
              space missions and technological innovations. Our platform not
              only offers a treasure trove of scientific data but also empowers
              you to create and curate your own collections of space-related
              discoveries.
            </p>

            <p className='text-justify font-semibold text-gray-300 mt-4 max-w-3xl'>
              Engage with the cosmos like never before by exploring
              high-resolution images, mission details, and the latest updates
              from the forefront of space exploration. Whether {"you're"} a space
              enthusiast, a student, or just someone who marvels at the wonders
              of the universe, PinStellix provides a captivating and educational
              experience, helping you connect with the vast expanse of the
              cosmos in an interactive and meaningful way.
            </p>
          </div>
        </div>

        <section className='bg-gray-800 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>Why PinStellix?</h2>
          <p className='mb-4 text-justify '>
            PinStellix was created to make space exploration accessible and
            engaging for everyone. Inspired by the vastness and wonder of the
            universe, our application integrates powerful APIs from NASA and
            SpaceX to provide real-time, comprehensive space data. We aim to
            foster a deeper connection with the cosmos through interactive
            features and personalized collections.
          </p>
          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='flex-1'>
              <Image
                objectFit='cover'
                width={918}
                height={768}
                src='/NASA-logo-picture.png'
                alt='NASA Data'
                className='w-full h-64 rounded-lg shadow-lg'
              />
              <h3 className='text-2xl font-semibold my-4'>NASA Data</h3>
              <p className='text-justify  text-gray-300'>
                Access a wealth of information from {"NASA's"} vast array of
                space missions, celestial observations, and satellite data. From
                the Mars Rover Photos to the Exoplanet Archive, our app brings
                you detailed insights into the {"universe's"} most exciting
                discoveries.
              </p>
            </div>
            <div className='flex-1'>
              <Image
                objectFit='fill'
                width={918}
                height={768}
                src='/SpaceX-Logo-picture.png'
                alt='SpaceX Data'
                className='w-full h-64 rounded-lg shadow-lg'
              />
              <h3 className='text-2xl font-semibold my-4'>SpaceX Data</h3>
              <p className='text-justify text-gray-300'>
                Explore the latest from SpaceX, including rocket launches,
                mission histories, and spacecraft details. With real-time
                updates and comprehensive data on {"SpaceX's"} innovative
                technologies, {"you'll"} stay at the forefront of space
                exploration.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-gray-900 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>Features</h2>
          <ul className='list-disc pl-5 flex flex-col gap-2'>
            <li className="text-justify">
              <strong>Search & Discover:</strong> Delve into a rich database of
              celestial objects and space missions, powered by NASA and SpaceX
              APIs.
            </li>
            <li className="text-justify">
              <strong>Pin to Collection:</strong> Curate your personal gallery
              of space wonders. Save your favorite planets, rockets, and other
              celestial objects.
            </li>
            <li className="text-justify">
              <strong>Shareable Content:</strong> Easily share your curated
              collections and discoveries on social media.
            </li>
            <li className="text-justify">
              <strong>Interactive Data:</strong> Access detailed information,
              including mission specifics, images, and trajectories of celestial
              bodies.
            </li>
          </ul>
        </section>

        <section className='bg-gray-800 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-8'>
            <div className='col-span-1'>
              <Image
                objectFit='cover'
                width={400}
                height={400}
                src='/nelson-ochagavia.jpg'
                alt='Nelson Ochagavía is an experienced JavaScript developer specializing in React.js, Next.js, and SvelteKit, passionate about space exploration and meditation.'
                className='w-full rounded-lg shadow-lg'
              />
            </div>
            <div className='col-span-1 -mt-2'>
              <h3 className='text-3xl font-semibold mb-3'>Nelson Ochagavía</h3>
              <p className='text-justify text-gray-300'>
                As a seasoned software developer with a deep focus on JavaScript
                technologies, I specialize in frameworks such as React.js,
                Next.js, and SvelteKit. My career is driven by a relentless
                pursuit of excellence in coding and a passion for creating
                intuitive, high-performance applications.
              </p>
              <p className='text-justify text-gray-300 mt-4'>
                Beyond the world of development, I have a profound interest in
                the cosmos. The mysteries of space, from the mechanics of rocket
                science to the wonders of distant exoplanets, fuel my curiosity
                and inspire my work. This fascination is complemented by my
                dedication to the practice of meditation, which I use to
                cultivate mindfulness and clarity, enhancing both my personal
                and professional life.
              </p>
              <p className='text-justify text-gray-300 mt-4'>
                My journey is a blend of technology, science, and inner
                exploration. Through my work and personal pursuits, I strive to
                bridge the gap between our technological advancements and our
                understanding of the universe, all while maintaining a balanced
                and contemplative approach to life.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-gray-900 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>
            Join the Project!
          </h2>
          <p className='text-justify mb-4'>
            We’re always excited to welcome new collaborators to the PinStellix
            project! Whether you’re a developer, designer, or space enthusiast,
            there are countless ways to contribute to our mission of making
            space exploration accessible and engaging for everyone.
          </p>
          <p className='text-justify mb-6'>
            If you’re interested in contributing, you can start by checking out
            our GitHub repository. We welcome contributions of all kinds, from
            code and documentation to feedback and ideas.
          </p>
          <div className="flex items-center justify-center md:justify-start">
          <a
            href='https://github.com/init5-dev/PinStellix'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors'
          >
            Explore the Repository
          </a>
          </div>
        </section>
      </main>
    </div>
  )
}
