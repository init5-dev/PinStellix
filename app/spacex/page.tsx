import Image from 'next/image'
import SidebarGroup from '../lib/components/SidebarGroup'
import categories from '@/app/lib/mocks/contents/categories.json'

export default function SpaceX () {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-6 md:gap-6 items-center sm:items-start w-full lg:max-w-3xl'>
        <div className='w-full'>
          <Image
            layout='responsive'
            width={1024}
            height={768}
            src='/spacex-launch.webp'
            alt='SpaceX Rocket Launch'
            className='w-full h-auto rounded-t-lg shadow-lg'
          />
          <div className='flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-6 rounded-b-lg'>
            <h1 className='text-4xl font-extrabold text-white'>
              SpaceX Missions & Innovations
            </h1>
            <p className='text-justify font-semibold text-gray-300 mt-4 max-w-3xl'>
              SpaceX is revolutionizing space travel with cutting-edge rocket
              technology and ambitious missions. From launching reusable
              spacecraft to pushing the boundaries of interplanetary
              exploration, SpaceX continues to innovate. At PinStellix, we bring
              you the latest updates and in-depth information on every mission
              SpaceX embarks on.
            </p>
          </div>
        </div>

        <section className='bg-gray-900 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>
            Explore SpaceX Data!
          </h2>
          <p className='text-justify mb-4'>
            At PinStellix, we integrate real-time data from SpaceX to offer a
            comprehensive view of their ongoing missions. Track upcoming
            launches, view mission details, and explore interactive data on
            rockets, satellites, and more.
          </p>
          <p className='text-justify mb-6'>
            Whether {"you're"} interested in following the latest developments with
            Starship, staying updated on Falcon 9 launches, or exploring the
            technological innovations that make these missions possible, we have
            you covered.
          </p>
          <SidebarGroup
            categories={categories.spacex}
            smCols={1}
            mdCols={4}
          />
        </section>

        <section className='bg-gray-900 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>SpaceX Milestones</h2>
          <p className='mb-4 text-justify'>
            Since its founding in 2002, SpaceX has achieved numerous historic
            milestones in space exploration. {"Here's"} a look at some key
            accomplishments:
          </p>
          <ul className='list-disc pl-5 flex flex-col gap-2'>
            <li className='text-justify'>
              <strong>Falcon 1 (2008):</strong> The first privately developed
              liquid-fueled rocket to reach orbit.
            </li>
            <li className='text-justify'>
              <strong>Dragon (2012):</strong> First commercial spacecraft to
              deliver cargo to the International Space Station (ISS).
            </li>
            <li className='text-justify'>
              <strong>Falcon Heavy (2018):</strong> The most powerful rocket in
              operation today, capable of lifting over 63 tons into orbit.
            </li>
            <li className='text-justify'>
              <strong>Starship (Future):</strong> {"SpaceX's"} fully reusable rocket
              system designed for missions to Mars and beyond.
            </li>
          </ul>
        </section>

        <section className='bg-gray-800 text-gray-300 p-8 rounded-lg w-full max-w-4xl'>
          <h2 className='text-3xl font-semibold mb-6'>
            Latest SpaceX Missions
          </h2>
          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='flex-1'>
              <Image
                objectFit='cover'
                width={918}
                height={768}
                src='/falcon9-launch.jpg'
                alt='Falcon 9 Launch'
                className='w-full h-64 rounded-lg shadow-lg'
              />
              <h3 className='text-2xl font-semibold my-4'>Falcon 9</h3>
              <p className='text-justify text-gray-300'>
                The workhorse of SpaceX, Falcon 9 is known for its reliability
                and reusability. It has successfully launched hundreds of
                payloads into orbit, including Starlink satellites and ISS
                resupply missions.
              </p>
            </div>
            <div className='flex-1'>
              <Image
                objectFit='cover'
                width={918}
                height={768}
                src='/starship.webp'
                alt='Starship Prototype'
                className='w-full h-64 rounded-lg shadow-lg'
              />
              <h3 className='text-2xl font-semibold my-4'>Starship</h3>
              <p className='text-justify text-gray-300'>
                {"SpaceX's"} most ambitious project to date, Starship is designed
                for deep space missions, including the colonization of Mars.
                Currently undergoing development and testing, {"it's"} poised to
                become the future of space travel.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
