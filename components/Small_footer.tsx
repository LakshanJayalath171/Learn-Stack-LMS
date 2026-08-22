import Image from 'next/image'

const Small_footer = () => {
  return (
    <div className='w-screen h-full flex items-center justify-between px-10 py-6'>
        <div className='flex items-center justify-center gap-2'>
            <Image src="/images/Logo.png" alt="logo" width={50} height={50} />
            <h2 className='text-special font-bold'>Learn Stack</h2>
        </div>

        <div className='flex items-center justify-center gap-3'>
            <p className='text-secondary font-light'>Privacy Policy</p>
            <p className='text-secondary font-light'>Terms of Service</p>
            <p className='text-secondary font-light'>Cookie Policy</p>
            <p className='text-secondary font-light'>Contact Support</p>
        </div>

        <div>
            <p className='text-secondary font-light'>© 2024 Learn Stack. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Small_footer