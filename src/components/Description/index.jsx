import React from 'react'
import sofaOttoman from 'assets/images/sofaOttoman.png'

const Description = () => {
    return (
        <div className='w-full h-auto  pt-12'>
            <div className='md:px-12 lg:px-52'>
                <div className='lg:text-2xl md:text-lg text-xs flex items-center md:flex md:justify-between lg:justify-center gap-5 lg:gap-14 mx-5'>
                    <p className=''>Description</p>
                    <p className='text-gary6'>Additional Information</p>
                    <p className='text-gray6'>Reviews [5]</p>
                </div>
                <div className='text-gray6'>
                    <p className='mt-9 text-xs mx-5'>
                        Embodying the raw, wayward spirit of rock ‘n’ roll,
                        the Kilburn portable active stereo speaker takes the
                        unmistakable look and sound of Marshall, unplugs the
                        chords, and takes the show on the road.
                    </p>
                    <p className='mt-8 text-xs mx-5'>
                        Weighing in under 7 pounds,
                        the Kilburn is a lightweight piece of vintage
                        styled engineering. Setting the bar as one of the
                        loudest speakers in its class, the Kilburn is a compact,
                        stout-hearted hero with a well-balanced audio which
                        boasts a clear midrange and extended highs for a
                        sound that is both articulate and pronounced.
                        The analogue knobs allow you to fine tune the controls
                        to your personal preferences while the guitar-influenced
                        leather strap enables easy and stylish travel.
                    </p>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-center mt-12 px-5'>
                <div className='lg:w-[605px] lg:h-[348px] bg-[#F9F1E7] rounded-md'>
                    <img src={sofaOttoman} alt='' />
                </div>
                <div className='lg:w-[605px] lg:h-[348px] bg-[#F9F1E7] rounded-md'>
                    <img src={sofaOttoman} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Description
