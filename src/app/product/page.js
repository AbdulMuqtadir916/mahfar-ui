
'use client'

import Image from "next/image"
import Link from "next/link"

export default function Prodcut({ params }) {
    console.log(params)
    return (
        <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] pt-28 w-full pb-[59px] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[117px] gap-[30px]">
                <Link className="" href="/product/roofing-solution/classic">
                    <div
                        className='group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
                    >
                        <Image
                            className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
                            alt="roofing"
                            src="/roofSol.svg"
                            width="0"
                            height="0"
                        />
                        <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
                            <div className="text-zinc-800 text-[22px]  ">
                                Roofing Solution
                            </div>
                            <div className="w-[42px]  cursor-pointer h-[42px] relative ">
                                <Image
                                    alt="arrow"
                                    src="/icon-arrow-narrow-right.svg"
                                    height={42}
                                    width={42}
                                ></Image>
                            </div>
                        </div>
                    </div>
                </Link>
                <div
                    className='w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
                >
                    <Image
                        className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
                        alt="roofing"
                        src="/thermalInsulation.svg"
                        width="0"
                        height="0"
                    />
                    <div className=" h-[42px]  pt-[6px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex">
                        <div className="text-zinc-800 text-[22px]  ">
                            Thermal Insulation
                        </div>
                        <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                            <Image
                                alt="arrow"
                                src="/icon-arrow-narrow-right.svg"
                                height={42}
                                width={42}
                            ></Image>
                        </div>
                    </div>
                </div>
                <div
                    className='w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
                >
                    <Image
                        className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
                        alt="roofing"
                        src="/AcoustucInsul.svg"
                        width="0"
                        height="0"
                    />
                    <div className=" h-[42px]  pt-[6px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex">
                        <div className="text-zinc-800 text-[22px]  ">
                            Acoustic Insulation
                        </div>
                        <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                            <Image
                                alt="arrow"
                                src="/icon-arrow-narrow-right.svg"
                                height={42}
                                width={42}
                            ></Image>
                        </div>
                    </div>
                </div>
                <Link className="" href="/product/composite-wood/decking">
                    <div
                        className='w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
                    >
                        <Image
                            className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
                            alt="roofing"
                            src="/compositeWood.svg"
                            width="0"
                            height="0"
                        />
                        <div className=" h-[42px]  pt-[6px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex">
                            <div className="text-zinc-800 text-[22px]  ">Composite Wood</div>
                            <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                                <Image
                                    alt="arrow"
                                    src="/icon-arrow-narrow-right.svg"
                                    height={42}
                                    width={42}
                                ></Image>
                            </div>
                        </div>
                    </div>
                </Link>
                <div
                    className='w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
                >
                    <Image
                        className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
                        alt="roofing"
                        src="/waterProofing.svg"
                        width="0"
                        height="0"
                    />
                    <div className=" h-[42px]  pt-[6px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex">
                        <div className="text-zinc-800 text-[22px]  ">Water Proofing</div>
                        <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                            <Image
                                alt="arrow"
                                src="/icon-arrow-narrow-right.svg"
                                height={42}
                                width={42}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


