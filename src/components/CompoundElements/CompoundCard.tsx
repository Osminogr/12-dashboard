"use client";
import React from "react";
import Image from "next/image";

import CompoundCardPart from "@/components/CompoundElements/CompoundCardPart"
import CompoundExternalLink from "@/components/CompoundElements/CompoundExternalLink"
import CompoundImage from "@/components/CompoundElements/CompoundImage"

import { COMPOUND_DATA } from "@/types/compound_card_data"


const card_data: COMPOUND_DATA = {
    base_name: "Hexane",
    description: "Lorem ipsum sid amer",
    external_links: [
        {name:"PubChem",link:"https://pubchem.ncbi.nlm.nih.gov/compound/8058"},
        {name:"ChemSpider",link:"https://www.chemspider.com/Chemical-Structure.7767.html"},
        {name:"Wikipedia",link:"https://en.wikipedia.org/wiki/Hexane"}
    ],
    images: [
        {name: "Скелетная формула гексана", link:"https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8058&t=l"}
    ],
    structures: [
        
    ]
  };

const CompoundCard: React.FC = () => {

  return (
    <div className="col-span-12 border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 min-h-fit max-w-full">
        
        <CompoundCardPart title='Изображения'>
        {card_data.images?.map((ext_link) => (
                <CompoundImage title={ext_link.name} link={ext_link.link}></CompoundImage>
            ))}
        </CompoundCardPart>
        
        <CompoundCardPart title='Общие данные'>
        {card_data.description}
        </CompoundCardPart>

        <CompoundCardPart title='Внешние источники'>
            {card_data.external_links?.map((ext_link) => (
                <CompoundExternalLink title={ext_link.name} link={ext_link.link}></CompoundExternalLink>
            ))}
        </CompoundCardPart>

        
        
        <CompoundCardPart title='Структуры'>
            Заглушка
        </CompoundCardPart>
        
        <CompoundCardPart title='Связанные эксперименты'>
            Заглушка
        </CompoundCardPart>

        <CompoundCardPart title='Связанные реакции'>
            Заглушка
        </CompoundCardPart>

        <CompoundCardPart title='Связанные статьи'>
            Заглушка
        </CompoundCardPart>

        <CompoundCardPart title='Связанные вычисления'>
            Заглушка
        </CompoundCardPart>

    </div>
  );
};

export default CompoundCard;
