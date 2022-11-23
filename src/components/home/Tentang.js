import React, { useEffect, useState } from 'react';
import { Image, Button, Card } from 'antd';
import PengumumanCard from './PengumumanCard';
import Gambartentang from '../../assets/images/Gambar tentang.png';
import Gambartentang2 from '../../assets/images/Gambar 2.png';
import Gambarteks from '../../assets/images/Gambar teks.png';
import { LANDING_STATIS, PATH } from '../../config/baseApi';
import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;


function Tentang() {
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
        <div className=' font-sans '>
            <div className='text-center p-10'>
                <h1 className='md:text-6xl text-2xl font-bold '>Selamat Datang di UT Verse</h1>
                <p className='md:text-2xl text-indigo-900'>UT Verse adalah sebuah aplikasi/platform dimana anda dapat merasakan pengalaman dunia virtual dalam 3D. Jelajahi dunia anda kapanpun dan dimanapun.</p>
            </div>


            <div class="grid grid-cols-2 gap-2 md:p-20 ml-10">
            <div>
                 <div className='flex-1 md:px-100 md:mb-20 md:mt-20 md:ml-20 '>
                    <Image
                        alt='Gambar tentang'
                        src={Gambartentang}
                    />
                </div>
            </div>
            <div>
        
                <div className='flex-1 md:px-100 md:mb-20 md:mt-20 p-1 mr-2'>
                    <img
                        alt='Gambar teks'
                        src={Gambarteks}
                    />
                </div>
                    
        
            </div>
            <div>
                 <div className='flex-1 md:mt-20 md:p-20'>
                    <div className='md:mt-10'>
                        <h1 className='md:text-4xl text-sm text-indigo-900 mt-10 text-justify'>Tatakelola Virtual</h1>
                        <p className='md:mt-10 md:text-2xl text-xs text-justify'>Tatakelola yang baik diperlukan untuk memastikan lingkungan kerja agar selalu positif dan kondusif. Lakukan pegelolaan, pemantauan, dan evaluasi pekerjaan anda dari manapun dan kapanpun secara virtual.</p>
                    
                    </div>
                    
                </div>
                
            </div>
            <div>
                 <div className='flex-1 md:-100 md:mt-20 mt-10'>
                    <Image
                        alt='Gambar tentang'
                        src={Gambartentang2}
                    />
                </div>
            </div>
            </div>

            </div>
            {}


            {}
            {}
        </div>
    )
}

export default Tentang