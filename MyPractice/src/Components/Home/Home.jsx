import React from 'react'

function Home() {
    return (
        <div className='text-white  '>
            <div className='mt-24 font-sans sm: text-4xl md:text-8xl leading-tight ml-10 flex-wrap'>

            <h1>Bouwen aan het digitale</h1>
            <h1>landschap <span className='opacity-40'>van vandaag.</span></h1>
            
            </div>

            <div className='flex items-center justify-between mt-40'>
                <div className='font-bold font-sans ml-10'>
                    <h2>Merkontwerp en websites <span className='font-semibold opacity-70'>voor bedrijven die willen evoluren</span>.</h2>
                </div>
                <div className='opacity-50 mr-16'>
                    <h1>Scrool vool meer <i class="ri-arrow-down-line"></i></h1>
                </div>
            </div>

            <div className='mt-12'>
                <img className='w-full object-cover' src="https://images.pexels.com/photos/15483667/pexels-photo-15483667/free-photo-of-flag-of-palestine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="palestine" />
            </div>
            
            
        </div>
        
    )
}
export default Home
