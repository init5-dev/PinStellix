const Footer = () => {
  return (
    <footer className='footer footer-center bg-base-300 text-base-content p-4 mt-8 -mb-4 w-[100vw]'>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by <a className="link font-semibold" href="https://github.com/init5-dev" target="_blank" rel="noopener noreferrer">Nelson
          Ochagavía</a>
        </p>
      </aside>
    </footer>
  )
}

export default Footer
