import Image from "next/image";
import React from "react";

const Address = () => {
  return (
    <div className="mb-40">
      <div>
        <h5 className="text-[#00A8CF] leading-9 font-semibold text-base">
          Contact Us
        </h5>
        <h2 className="pb-5 font-semibold text-4xl">Get in touch</h2>
        <h6 className="font-normal text-xl text-[#667085]">
          Our friendly team would love to hear from you.
        </h6>
      </div>
      <div className="mt-[90px] w-full grid grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-20">
        <div className="row-span-1  md:col-span-1 ">
          <div className="flex mb-12 gap-6 ">
            <div>
              <Image
                className="min-w-[30px]"
                src="/contact/email.svg"
                height={48}
                width={48}
                alt="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-base font-normal  text-[#667085]">
                Our friendly team is here to help.
              </p>
              <h4 className="text-[#00A8CF] text-base font-semibold">
                info@mahfartrading.com
              </h4>
            </div>
          </div>
          <div className="flex mb-12 gap-6">
            <div>
              <Image
                className=""
                src="/contact/location.svg"
                height={48}
                width={48}
                alt="location"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="text-base font-normal  text-[#667085]">
                Come say hello at our office HQ.
              </p>
              <h4 className="text-[#00A8CF] max-w-[240px] text-base font-semibold">
                Flat 12, Bldg 266, Road 1204, Block 712, Salmabad, Kingdom of
                Bahrain
              </h4>
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <Image
                className="min-w-[30px]"
                src="/contact/phone.svg"
                height={48}
                width={48}
                alt="phone"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-base font-normal  text-[#667085]">
                Mon-Fri from 8am to 5pm.
              </p>
              <h4 className="text-[#00A8CF] text-base font-semibold">
                +973 3777 8311
              </h4>
            </div>
          </div>
        </div>
        <div className="row-span-1 md:col-span-2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459240.7256748141!2d50.2579232082667!3d25.941194531951663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48524e6a47a211%3A0x2e9450e2dbda1046!2sBahrain!5e0!3m2!1sen!2sin!4v1710675386056!5m2!1sen!2sin"
            width="600"
            height="0"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Address;
