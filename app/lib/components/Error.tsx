const Error = ({message}: {message: string}) => {
  return (
    <div className='lg:px-[25vw] min-h-screen flex items-start justify-center'>
      <div role='alert' className='alert alert-error mt-32'>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Error
