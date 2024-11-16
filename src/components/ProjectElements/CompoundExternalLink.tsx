import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  link: string;
}

const CompoundExternalLink: React.FC<CardDataStatsProps> = ({
  title,
  link
}) => {
  return (
    <a href={link} className="col-span-2 block m-2">
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <h2 className="py-2 font-black dark:font-white text-title-sm text-center">{title}</h2>
    </div>
    </a>
  );
};

export default CompoundExternalLink;
