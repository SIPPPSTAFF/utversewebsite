import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { BackTop, Layout } from "antd";
import { Image, Button, Card } from 'antd';
import Gambarfooter from '../../assets/images/Gambar fitur 1.png';

import Sippp from "../../assets/images/landing/sippp.png";

const { Footer } = Layout;
function AppFooter() {
   return (
      <footer>
         <div>
            <div className='tentang'> 
               <div className='container font-sans mb-20'>
                  <div className='text-center'>
                        <h1 className='md:text-5xl mt-5 text-xl font-bold '>Siap untuk memulai dunia virtualmu?</h1>
                         <p className='md:text-2xl text-xs font-bold text-indigo-900 md:mb-20 md:ml-20 md:mr-20 md:pr-20 md:pl-20 p-5 '>UT Verse merupakan produk layanan online. Anda memerlukan koneksi internet dan peralatan seperti laptop, personal komputer, atau smartphone untuk bisa menggunakan aplikasi ini.</p>
                  </div>

                  

                  <div class="grid grid-cols-2 gap-2">
                     <div className=" flex flex-col justify-end items-end "> 
                  {/* <Button
                    onClick={() => {
                            window.location.assign("https://drive.google.com/drive/u/1/folders/1I35ITpvsrZeic34jBhKVgnZpAkAkOuZV");
                        }}
                    className="mt-2 "
                    type="primary"
                    style={{ background: "#ffffff", color:"#021D5C", height: 50, borderRadius: 10, width: "30%", fontSize: 20, borderBlockColor: "#021D5C", boxShadow: 50}}
                  >
                    Masuk
                  </Button> */}

                  {/* <button 
                  className="md:text-2xl bg-white text-indigo-900 p-3 rounded-xl border-2 border-blue-500 font-bold"
                  onClick={() => {
                     window.location.assign("https://www.spatial.io/s/ut-verses-Virtual-Space-637c93f94297a90001511b78?share=4595098279816739200");
                  }}
                  >
                     Coba Sekarang
                  </button> */}


                  </div>

                  {/* <div className=" flex "> 
                  <button 
                  className="md:text-2xl bg-indigo-900 text-white p-3 rounded-xl border-2 border-blue-500 font-bold"
                  onClick={() => {
                     window.location.assign("https://www.spatial.io/s/ut-verses-Virtual-Space-637c93f94297a90001511b78?share=4595098279816739200");
                  }}
                  >
                     Daftar Sekarang
                  </button>
                  </div> */}

                  

                  {/* <div >
                  <Button
                    onClick={() => {
                            window.location.assign("https://docs.google.com/forms/d/e/1FAIpQLSe_UcoyAFZ3HOXtuY3wQWTkukUpE7-I8_GUqwtChFgu_OQXPw/viewform");
                        }}
                    className="mt-2 "
                    type="primary "
                    style={{ background: "#021D5C", color:"#ffffff", height: 50, borderRadius: 10, width: "30%", fontSize: 20}}
                  >
                    Daftar Sekarang
                  </Button>

                  </div> */}

                  </div>

                  <div className='text-center'>
                <button 
                  className="md:text-2xl bg-white text-indigo-900 p-3 rounded-xl border-2 border-blue-500 font-bold"
                  onClick={() => {
                     window.open( "https://www.spatial.io/s/ut-verses-Virtual-World-637ca5496fb2f70001c39f47?share=2591360497769489630","_blank");
                  }}
                  >
                     Coba Sekarang
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

               

                  <div class="grid grid-cols-2 gap-2 mt-5 ">
                     <div className='text-left md:mt-20 p-5'>
                        <h1 className='md:text-2xl font-bold  text-indigo-900 md:ml-20'>UT Verse</h1>
                         <p className='md:text-xl text-xs  md:ml-20 '>Jl. Pd. Cabe Raya, Pd. Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15437</p>
                      </div>

                      <div className='text-left md:mt-20 p-5'>
                        <h1 className='md:text-2xl  font-bold  text-indigo-900 md:ml-10'>Butuh bantuan? Tim kami siap membantu anda!</h1>
                        <h1 className='md:text-2xl font-bold  text-indigo-900 md:ml-10'>Hubungi Kami</h1>
                         <p className='md:text-xl text-xs md:ml-10'>Jl. Pd. Cabe Raya, Pd. Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15437</p>
                      </div>

                  </div>

                


                   
                           
                     
           
            
           
            
                  </div>
            

                
                
            </div>
         
            
            
            


            </div>
            <Footer>
            <h1 className='md:text-2xl text-sm font-bold  text-white text-center'>@2022 Universitas Terbuka. All rights reserved</h1>

            </Footer>
         
        
      </footer>
   );
}

export default AppFooter;
