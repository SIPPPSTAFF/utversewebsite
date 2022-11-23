import React from 'react';

function PengumumanCard({ appSippp }) {
    const URL = 'http://localhost:3003/assets/images/'
    return (
        <>
            <div className="p-4 rounded-lg items-center relative flex-col min-w-0 break-words bg-white w-full mb-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='text-center mx-auto inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg'>
                            <img className="h-36 mx-12" src={URL + appSippp.image} alt={appSippp.title} />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <a href="#">
                            <div className="m-2">
                                <p className="font-medium text-gray-900 text-xl">{appSippp.title}</p>
                                <p className="text-sm text-gray-500">{appSippp.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PengumumanCard