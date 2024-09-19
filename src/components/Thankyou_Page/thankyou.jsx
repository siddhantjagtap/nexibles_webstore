import React from 'react'
import Envelope from '../../../public/Thank_You_Page/Thank_You_Page_Illustration.svg'
import Butterfly from '../../../public/Thank_You_Page/Thank_You_Page_Butterflies.svg'
function Thankyou() {
    return (
        <div className="flex items-center justify-center h-screen " style={({ backgroundImage: "url('/Contact_Us_Page/Contact_Us_Background.jpg')" })}>
            <div className="">
                <div className='flex items-center justify-center'>
                    <img
                        src={Envelope.src}
                        alt="Envelope Icon"
                        className="w-[12rem] h-[12rem]"
                    />
                    <h1 className="text-[10rem] font-bold text-yellow-400 ml-6">Thank You!</h1>
                    <img src={Butterfly.src} alt="Butterfly 1" className="absolute right-[14rem] top-40 w-[10rem] h-[10rem]" />
                </div>
                <div className=' px-64 text-center '>
                    <p className="text-3xl text-white mb-4 ">
                        For ordering from NexiGifting. You shall receive an email soon confirming your order and the{' '}
                        <span className="font-bold text-yellow-300">tracking link</span> with it.
                    </p>
                    <p className=" text-3xl text-white mb-4">
                        If you have any questions or need assistance, feel free to reach out to us at{' '}
                        <a href="mailto:sales@artnext.in" className="text-yellow-300">sales@artnext.in</a>
                    </p>
                    <p className="text-3xl text-white">
                        Thanks again, and we hope you enjoy your personalised pouches!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Thankyou