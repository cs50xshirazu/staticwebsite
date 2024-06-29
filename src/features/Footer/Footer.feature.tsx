import { FooterBox } from "@/components";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-fit bg-primary py-8 p-page text-white mt-16">
      <img src="/images/footerLine.svg" className="w-full" alt="" />
      <div className="w-full grid grid-cols-3 gap-20 md:grid-cols-1  md:gap-3">
        <div className="w-full flex gap-2 justify-start items-end md:order-3">
          <img src="/icons/cs50xShiraz.svg" alt="" />
          <img src="/icons/shirazu.svg" alt="" />
          <img src="/icons/shirazUniversity.svg" alt="" />
        </div>
        <FooterBox
          title="لینک های مفید:"
          items={[
            { link: "https://cs50.harvard.edu", name: "Cs50" },
            { link: "https://shirazu.ac.ir", name: "دانشگاه شیراز" },
          ]}
        />
        <FooterBox
          title="ما را در شبکه های اجتماعی دنبال کنید:"
          items={[
            {
              link: "https://instagram.com/cs50xshirazu",
              name: "اینستاگرام",
              // icon: <img src="./icons/github.svg" />,
            },
            {
              link: "https://t.me/cs50xshirazu",
              name: "تلگرام",
              // icon: <img src="./icons/discord.svg" />,
            },
          ]}
        />
      </div>
      <img src="/images/footerLine.svg" className="w-full" alt="" />
      <div className="flex justify-between mt-5 px-20 md:px-5 sm:flex-col sm:items-center sm:gap-5">
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M8.4 9.04984C8.44167 8.77484 8.53334 8.53317 8.65 8.33317C8.9 7.8665 9.325 7.62484 9.9 7.6165C10.275 7.6165 10.6167 7.78317 10.8583 8.02484C11.0917 8.28317 11.25 8.6415 11.25 8.99984H12.75C12.7333 8.60817 12.6583 8.24984 12.5 7.9165C12.375 7.59984 12.1833 7.3165 11.9333 7.08317C10.725 5.9665 8.48334 6.12484 7.45833 7.3915C6.38333 8.78317 6.35833 11.2165 7.45 12.6082C8.45833 13.8498 10.6667 14.0248 11.8667 12.9165C12.125 12.7082 12.3333 12.4498 12.5 12.1498C12.6333 11.8498 12.725 11.5332 12.7333 11.1915H11.25C11.25 11.3665 11.1917 11.5248 11.1167 11.6665C11.0417 11.8248 10.9417 11.9498 10.8333 12.0582C10.5583 12.2748 10.2333 12.3915 9.88334 12.3915C9.58333 12.3832 9.33334 12.3248 9.14167 12.1998C8.92563 12.0784 8.75354 11.8917 8.65 11.6665C8.23334 10.9165 8.3 9.87484 8.4 9.04984ZM10 1.6665C5.41667 1.6665 1.66667 5.4165 1.66667 9.99984C2.10833 21.0582 17.9167 21.0498 18.3333 9.99984C18.3333 5.4165 14.5833 1.6665 10 1.6665ZM10 16.6665C6.325 16.6665 3.33333 13.6748 3.33333 9.99984C3.7 1.15817 16.3 1.15817 16.6667 9.99984C16.6667 13.6748 13.675 16.6665 10 16.6665Z"
              fill="#F2DEBA"
            />
          </svg>
          2023-2024 تمامی حقوق برای Cs50xShiraz و دانشگاه شیراز محفوظ می باشد.
        </div>
        <div className="flex gap-3">
          <img src="./icons/twitter.svg" className="size-4" alt="" />
          <img src="./icons/github.svg" className="size-4" alt="" />
          <img src="./icons/instagram.svg" className="size-4" alt="" />
          {/* <img src="./icons/twitter.svg" className="size-4" alt="" /> */}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
