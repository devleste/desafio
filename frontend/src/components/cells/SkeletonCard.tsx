import Button from '@components/atoms/Button';
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { IoLanguage } from 'react-icons/io5';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { MdMale, MdOutlineEmail } from 'react-icons/md';

const SkeletonCard = ({ layoutMode }: { layoutMode: string }) => {
  const gridLayout =
    'bg-skeleton-secondary  border border-skeleton-secondary  shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl mx-auto p-4 gap-4 flex-col [&>.contactCardAvatar>img]:h-28 [&>.contactCardAvatar>img]:mt-[-40px] [&>.contactCardAvatar>img]:shadow-[0_3px_10px_rgb(0,0,0,0.1)] [&>.contactCardInfo>h2]:text-center  [&>.contactCardInfo>.cardInfo]:mx-auto [&>.contactCardButtons]:w-full [&>.contactCardButtons]:justify-between [&>.contactCardInfo>.name]:mx-auto';

  const listLayout =
    'w-full rounded-b-[0px] [&>.contactCardAvatar>.img]:w-[100px] [&>.contactCardAvatar>.img]:h-[100px] pb-[60px] [&>.contactCardInfo]:absolute [&>.contactCardInfo]:left-[120px] [&>.contactCardInfo]:transform [&>.contactCardButtons]:absolute [&>.contactCardButtons]:bottom-3 [&>.contactCardButtons]:left-0 [&>.contactCardButtons>.btn]:w-12 [&>.contactCardButtons>.btn]:h-7';
  return (
    <div
      className={`relative flex justify-between items-center sm:flex border  border-b-[#00937333] pb-4 ${
        layoutMode === 'list' ? listLayout : gridLayout
      }`}
    >
      <div className="contactCardAvatar relative sm:mb-0 mb-3">
        <div className="gender absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] h-7 w-7 text-xl rounded-full bg-skeleton-secondary  p-1"></div>
        <div className="flex img items-center justify-center w-[112px] h-[112px] rounded-xl bg-skeleton-primary">
          <svg
            className="fill-skeleton-secondary text-skeleton-secondary w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>

      <div className="contactCardInfo flex flex-col items-start gap-1">
        <div className="name bg-skeleton-primary pb-2 h-2.5 rounded-full w-36"></div>

        <div className="cardInfo flex items-center gap-1 text-gray-500 text-sm pb-[10px]">
          <div className="h-4 w-4 rounded-full bg-skeleton-primary  p-1"></div>
          <div className="bg-skeleton-primary w-40 h-2.5  rounded-full mx-auto"></div>
        </div>

        <div className="cardInfo flex items-center gap-1 text-gray-500 text-sm pb-[10px]">
          <div className="h-4 w-4 rounded-full bg-skeleton-primary  p-1"></div>
          <div className="bg-skeleton-primary w-20 h-2.5  rounded-full mx-auto"></div>
        </div>

        <div className="cardInfo flex items-center gap-1 text-gray-500 text-sm">
          <div className="h-4 w-4 rounded-full bg-skeleton-primary  p-1"></div>
          <div className="bg-skeleton-primary w-20 h-2.5  rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="contactCardButtons flex items-center gap-1 h-9  text-sm text-gray-500">
        <div className="btn bg-skeleton-primary w-[96px] h-8 rounded-md mx-auto"></div>
        <div className="btn bg-skeleton-primary w-[106px] h-8 rounded-md mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
