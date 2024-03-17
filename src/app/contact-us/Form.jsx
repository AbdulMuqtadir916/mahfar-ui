import React from "react";

const Form = () => {
  return (
    <div className="w-full">
      <form>
        {/* Fitst And Last Name */}
        <div className="flex w-full items-center gap-7 mb-8">
          <div className="w-1/2">
            <label
              className="block  font-medium mb-[8px] text-sm text-[#344054]"
              htmlFor=""
            >
              First Name
            </label>
            <input
              className="px-4 py-3 w-full border rounded-lg border-[#D0D5DD]"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <label
              className="block font-medium text-sm mb-[8px] text-[#344054]"
              htmlFor=""
            >
              Last Name
            </label>
            <input
              className="px-4 py-3  w-full border rounded-lg border-[#D0D5DD]"
              type="text"
              name="lasttName"
              id="lasttName"
              placeholder="Last Name"
            />
          </div>
        </div>
        {/* Email */}
        <div className="w-full  mb-8">
          <label
            className="block  font-medium mb-[8px] text-sm text-[#344054]"
            htmlFor=""
          >
            Email
          </label>
          <input
            className="px-4 w-full py-3 border rounded-lg border-[#D0D5DD]"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        {/* Phone Number */}
        <div className="w-full  mb-8">
          <label
            className="block  font-medium mb-[8px] text-sm text-[#344054]"
            htmlFor=""
          >
            Phone Number
          </label>
          <input
            className="px-4 w-full py-3 border rounded-lg border-[#D0D5DD]"
            type="tel"
            name="phone"
            id="phone"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        {/* Message */}
        <div className="w-full  mb-8">
          <label
            className="block  font-medium mb-[8px] text-sm text-[#344054]"
            htmlFor=""
          >
            Message
          </label>
          <textarea
            rows="4"
            className="px-4 w-full py-3 border  text-sm text-[#344054] rounded-lg border-[#D0D5DD]"
          >
            Message
          </textarea>
        </div>
        {/* Button */}
        <input
          type="submit"
          placeholder="Send Message"
          className="w-full bg-[#00A8CF] py-[12px] rounded-lg cursor-pointer text-base text-white font-semibold shadow-[ 0px 1px 2px 0px #1018280D]"
        />
      </form>
    </div>
  );
};

export default Form;
