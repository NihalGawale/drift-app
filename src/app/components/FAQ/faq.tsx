"use client";

import { MinusIcon, PlusIcon } from "@/app/Theme/Icons/Icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useState } from "react";
import { Element } from "react-scroll";

const faqs = [
  {
    question: "What if the sneakers don’t fit? Can I return or exchange them?",
    answer:
      "We offer a 7-day hassle-free return or exchange on unworn products in original condition and packaging. If the fit isn't right or you changed your mind — no worries. We’ve got your back.",
  },
  {
    question: "Is shipping really free on all orders?",
    answer:
      "Yes! We offer free standard shipping across India on all orders — no minimum required. We believe great shoes should reach you without extra cost.",
  },
  {
    question: "How do I track my Drift order once it’s placed?",
    answer:
      "Once your order is shipped, you’ll receive a tracking link via email or SMS. You can follow every step of your sneakers' journey until they reach your doorstep.",
  },
  {
    question: "How long will it take to get my order?",
    answer: "It usually takes 7 days for your order to reach you.",
  },
  {
    question: "Are Drift shoes made for everyday wear or performance too?",
    answer:
      "Our latest drops are designed for everyday life — whether you’re heading to college, the office, a night out, or catching flights to your next adventure. Looking for performance-ready pairs? Join the #DriftersClub to stay in the loop on upcoming performance releases and exclusive drops.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <Element
      name="faq"
      className="w-full min-h-[872px] max-h-auto  relative flex justify-center py-[60px]"
    >
      <div className="w-[80%] h-full flex flex-col gap-y-20">
        <div className="w-[60%]">

        <h2 className="text-7xl font-black mb-6 tracking-wide">FAQ’s</h2>
        <div className="space-y-4 divide-y divide-black ">
          {faqs.map((faq, idx) => (
            <Disclosure
              key={idx}
              as="div"
              data-open={openIndex === idx}
              className="p-6"
            >
              {({ open }) => (
                <>
                  <DisclosureButton
                    className="group flex w-full items-center justify-between"
                    onClick={() => setOpenIndex(open ? null : idx)}
                  >
                    <span className="text-2xl font-bold">
                      {faq.question}
                    </span>
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </DisclosureButton>
                  {open && (
                    <DisclosurePanel
                      transition
                      className="mt-2 text-lg max-w-[80%] leading-8 text-[#4B4B4B]  transition duration-400 ease-out data-closed:-translate-y-6 data-closed:opacity-0 font-medium"
                    >
                      {faq.answer}
                    </DisclosurePanel>
                  )}
                </>
              )}
            </Disclosure>
          ))}
        </div>
        </div>
      </div>
    </Element>
  );
};

export default FAQ;
