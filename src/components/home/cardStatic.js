import React from 'react';
import { Card } from 'antd';
import Ebudget from "../../assets/images/landing/e-bugeting.svg";
import Erevenue from "../../assets/images/landing/e-rev.svg";
import Ehr from "../../assets/images/landing/e-hr.svg";
import Eex from "../../assets/images/landing/expen.svg";
import Easset from "../../assets/images/landing/easset.svg";
import Eproc from "../../assets/images/landing/eproc.svg";
import Panutan from "../../assets/images/landing/panutan.svg";
import Sippan from "../../assets/images/landing/sipan.svg";
import Eaudit from "../../assets/images/landing/eaudit.svg";
import Emr from "../../assets/images/landing/emr.svg";
import Siakun from "../../assets/images/landing/siakun.svg";
import Bppu from "../../assets/images/landing/bppu.svg";
import Eis from "../../assets/images/landing/eis.svg";
import Esign from "../../assets/images/landing/e-sign.svg";
import AppTicket from "../common/ticket";

// GREY
import epayroll from "../../assets/images/landing/grey/ehrpayroll.svg";
import erevenue from "../../assets/images/landing/grey/e-revenue.svg";
import ebudget from "../../assets/images/landing/grey/e-budget.svg";
import eex from "../../assets/images/landing/grey/e-expenditure.svg";
import panutan from "../../assets/images/landing/grey/panutan.svg";
import easset from "../../assets/images/landing/grey/e-asset.svg";
import eproc from "../../assets/images/landing/grey/e-proc.svg";
import sippan from "../../assets/images/landing/grey/sippan.svg";
import siakun from "../../assets/images/landing/grey/siakun.svg";
import eaudit from "../../assets/images/landing/grey/e-audit.svg";
import emr from "../../assets/images/landing/grey/emr.svg";
import bppu from "../../assets/images/landing/grey/bppu.svg";
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';

function CardStatic() {
    return (
        <div>
            <>
                {/* E-Budget */}
                {/* <Card
                    style={{ width: 200, height: 300 }}
                    cover={
                        <div className="rounded-lg">
                            <img
                                src={Ebudget}
                                alt="Ebudgeting"
                                style={{ padding: 50 }}
                            />
                        </div>
                    }
                >
                    <div className="text-center">
                        <Meta
                            title="E-Budgeting"
                            description="Portal Aplikasi Naskah Dinas UT dan Administrasi Perkantoran."
                        />
                    </div>
                </Card> */}





                {/* CARD STATIS */}
                {/* E-BUDGETING */}
                <div className="w-full md:w-3/12 px-4 text-center ">
                    <div className="relative flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Ebudget} />
                            </div>
                            <h6 className="text-xl font-bold">E-Budgeting</h6>
                            <a href="http://172.16.100.69:3003/home">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Penganggaran Keuangan.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Sippan */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Sippan} />
                            </div>
                            <h6 className="text-xl font-bold">SI-PPan</h6>
                            <a href="http://172.16.100.69/sippan-dev/public/">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Perencanaan dan Pengadaan.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Panutan */}
                <div className="md:w-3/12 px-4 text-center ">
                    <div className="min-w-0 break-words bg-white w-full mb-8 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Panutan} />
                            </div>
                            <h6 className="text-xl font-bold">Panutan</h6>
                            <a href="http://172.16.100.69/nadinetest/public/">
                                <p className="mt-2 mb-4 text-slate-400">Portal Aplikasi Naskah Dinas UT dan Administrasi Perkantoran.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* E-Proc */}
                <div className=" w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Eproc} />
                            </div>
                            <h6 className="text-xl font-bold">E-Proc</h6>
                            <a href="http://172.16.100.69/vms_ut/public/">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Pengadaan Barang dan Jasa.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* EIS */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Eis} />
                            </div>
                            <h6 className="text-xl font-bold">EIS</h6>
                            <a href="http://172.16.100.69/simanje/public/">
                                <p className="mt-2 mb-4 text-slate-400">Executive Information System .</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Siakun */}
                <div className="w-full md:w-3/12 px-4 text-center ">
                    <div className="relative flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Siakun} />
                            </div>
                            <h6 className="text-xl font-bold">SI-Akun</h6>
                            <a href="http://172.16.100.69/siap/public/">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Akutansi.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* E-Asset */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5  rounded-lg">
                                <img src={Easset} />
                            </div>
                            <h6 className="text-xl font-bold">E-Asset</h6>
                            <a href=" http://172.16.100.69/simonet/public/">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Penatausahaan Asset.</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* E-Sign */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Esign} />
                            </div>
                            <h6 className="text-xl font-bold">E-Sign</h6>
                            <a href="http://172.16.100.69/esign/public/">
                                <p className="mt-2 mb-4 text-slate-400">Electronic Sign .</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* E-Expand */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={Eex} />
                            </div>
                            <h6 className="text-xl font-bold">E-Expenditure</h6>
                            <a href="http://172.16.100.69:3006">
                                <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Pengeluaran Belanja .</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* EMR */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={emr} />
                            </div>
                            <h6 className="text-xl font-bold">E-MR</h6>
                            <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Manajemen Resiko.</p>
                        </div>
                    </div>
                </div>

                {/* User MANAJEMEN */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={emr} />
                            </div>
                            <h6 className="text-xl font-bold">Application & User Management</h6>
                            <p className="mt-2 mb-4 text-slate-400">Sistem Manajemen Aplikasi dan User.</p>
                        </div>
                    </div>
                </div>

                {/* Payroll */}
                <div className=" w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={epayroll} />
                            </div>
                            <h6 className="text-xl font-bold">E-HR & Payroll</h6>
                            <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Kepegawaian dan Penggajian.</p>
                        </div>
                    </div>
                </div>
                {/* E-Revenue */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5  rounded-lg">
                                <img src={erevenue} />
                            </div>
                            <h6 className="text-xl font-bold">E-Revenue</h6>
                            <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Pendapatan.</p>
                        </div>
                    </div>
                </div>
                {/* BPPU */}
                <div className="w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-200">
                        <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-25 h-25 mb-5 rounded-lg">
                                <img src={bppu} />
                            </div>
                            <h6 className="text-xl font-bold">BPPU</h6>
                            <p className="mt-2 mb-4 text-slate-400">Sistem Informasi Manajemen .</p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CardStatic