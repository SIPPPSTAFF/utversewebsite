import React, { useEffect, useState } from 'react';
import { Image, Button, Card } from 'antd';
import PengumumanCard from './PengumumanCard';
import Gambarfitur from '../../assets/images/Gambar fitur 1.png';
import Gambarfitur2 from '../../assets/images/Gambar fitur 2.png';
import Gambarfitur3 from '../../assets/images/Gambar fitur 3.png';
import Gambarfitur4 from '../../assets/images/Gambar fitur 4.png';
import GambarHandphone from '../../assets/images/Handphone.png';
import GambarUTverse from '../../assets/images/UT verse bg.png';
import { LANDING_STATIS, PATH } from '../../config/baseApi';
import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;


function News() {
    const [news, setnews] = useState([])
    const readMoreReadLess = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    useEffect(() => {
        fetch(LANDING_STATIS + PATH.PENGUMUMAN)
            .then((data) => data.json())
            .then((res) => {
                console.log("RESPONSE PENGUMUMAN: ", res.data)
                setnews(res.data)
            })
            .catch((err) => console.log("DATA ERROR PENGUMUMAN: ", err))
    }, [])
    return (
        <div className='tentang'> 
            <div className='container font-sans md:mb-20'>
            <div className='text-center'>
                <h1 className='md:text-6xl text-3xl font-bold '>Fitur</h1>
                <p className='md:text-2xl text-indigo-900 md:mb-20 p-2'>UT Verse memiliki fitur-fitur yang dapat membuat kegiatan belajar dan pekerjaan anda menjadi lebih menyenangkan.</p>
            </div>


            <div class="grid grid-cols-1 gap-1 md:p-20">
            <div>
                 <div className='flex-1 px-100 md:mb-20 md:mt-20 md:p-15 p-5 md:ml-10 ml-3'>
                    <img
                        alt='Gambar fitur'
                        src={Gambarfitur}
                    />
                </div>
            </div>
            <div>
                
                <div className='flex-1 md:px-100 md:mb-20 md:mt-20 mt-6 p-5'>
                    <img
                        alt='Gambar fitur2'
                        src={Gambarfitur2}
                    />
                </div>
                    
                
            </div>
            <div>
            
                <div className='flex-1 md:px-100 md:mb-20 md:mt-20  p-6'>
                    <img
                        alt='Gambar fitur3'
                        src={Gambarfitur3}
                    />
                </div>
                    
                
            </div>
            <div>
                 <div className='flex-1 md:px-100 md:mt-20 md:ml-10 p-6'>
                    <img
                        alt='Gambar fitur4'
                        src={Gambarfitur4}
                    />
                </div>
            </div>
            </div>
            <div class="grid grid-cols-2 gap-1">
                    <div className='md:mt-10'>
                        <h1 className='md:text-6xl text-sm ml-10 mt-10'>Virtual Audit Center</h1>
                        <p className='md:mt-10 md:ml-12 ml-10 md:text-2xl text-xs text-indigo-900 text-justify'>Virtual Audit Center adalah aplikasi gawai yang bertemakan proses audit yang dilakukan sebagian 
                        atau seluruhnya secara virtual dengan unsur gamifikasi didalamnya, membuatnya menjadi inovasi dalam pembelajaran audit. </p>
                    
                    </div>

                     <div className='flex-1 px-100 mt-20'>
                    <img
                        alt='Gambar Handphone'
                        src={GambarHandphone}
                    />
                    </div>
                </div>

                <div className='text-center'>
                <button 
                  className="md:text-2xl bg-green-500 text-white p-3 rounded-2xl border-3 border-green-600 font-bold"
                  
                  onClick={() => {
                    window.open( "https://play.google.com/store/apps/details?id=com.UT.VACMobile","_blank");
                 }}
                  >
                     Unduh Sekarang
                  </button>
                    {/* <Button
                    onClick={() => {
                            window.location.assign("https://play.google.com/store/apps/details?id=com.UT.VACMobile");
                        }}
                    className="mt-2  "
                    type="primary"
                    style={{ background: "#1AA260", height: 50, borderRadius: 10, width: "30%", fontSize: 20}}
                  >
                    Unduh Sekarang
                  </Button> */}

                    
                  </div>
                  
                 
                  
                </div>

                <div>
                
            </div>
            
           


            </div>
            
            
            


        
            
            


            
            
        
    )
}

export default News