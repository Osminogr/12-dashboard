import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  children: ReactNode;
}

const CompoundCardPart: React.FC<CardDataStatsProps> = ({
  title,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark m-6 max-w-full ">
        <h2 className="py-2 font-black dark:font-white text-title-xl">{title}</h2>
        <hr/>
      <div className="p-6 grid">
        {children}
      </div>
    </div>
  );
};

export default CompoundCardPart;
