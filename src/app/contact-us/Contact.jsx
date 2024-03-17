import Image from "next/image";
import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <div className="grid  gap-[60px]  lg:grid-cols-2">
        <div>
          <Image className="w-full lg:w-[576px]" src="/contact/build.svg" width={576} height={500} alt="" />
        </div>
        <div>
          <div className="mb-10">
            <h3 className="text-4xl font-semibold pb-4">
              The first thing we build is relationships
            </h3>
            <p className="text-[#667085] font-normal text-base">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
