import React, { ReactNode } from "react";
import Image from 'next/image'


interface CardDataStatsProps {
  title: string;
  link: string
}

const CompoundImage: React.FC<CardDataStatsProps> = ({
  title,
  link,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark w-55 col-span-1">
        <img alt={title} src={link} height={150} width={150}/>
        <h2 className="py-2 font-black dark:font-white text-md">{title}</h2>
    </div>
  );
};

export default CompoundImage;
