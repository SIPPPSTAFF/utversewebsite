import React from "react";

function AppTicket() {
   return (
      <div class="w-full h-40 bg-Ticket rounded-xl outline outline-offset-2 outline-white mt-32">
         <div class=" items-end w-full h-full ">
            <div class="px-4 py-16">
               <div className="flex justify-between">
                  <div class="w-full md:w-6/12">
                     <div class="font-extrabold mb-2 text-2xl pl-4">Ticketing SIPPP</div>
                     <h6 class="font-semibold leading-tight text-sm text-gray-400 pl-4">
                        Keluhan ataupun kendala aplikasi dapat disampaikan
                        <br /> dengan membuat tiket ke dalam aplikasi Ticketing SIPPP
                     </h6>
                  </div>
                  <div class="my-auto md:w-6/12">
                     <div class="inline-flex items-center justify-center pl-40 ">
                        <a href="#" class="shadow-xl bg-indigo-500 w-80 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-full">
                           Buat Tiket
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default AppTicket;
