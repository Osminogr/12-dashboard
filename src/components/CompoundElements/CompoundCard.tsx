"use client";
import React from "react";
import Image from "next/image";
import CompoundCardPart from "@/components/CompoundElements/CompoundCardPart"
import CompoundExternalLink from "@/components/CompoundElements/CompoundExternalLink"

const CompoundCard: React.FC = () => {

  return (
    <div className="col-span-12 border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 min-h-fit max-w-full">
        
        <CompoundCardPart title='Общие данные'>
        <p className="mb-4">n-Hexane can cause male reproductive toxicity according to an independent committee of scientific and health experts.</p>

        <p className="mb-4">California Office of Environmental Health Hazard Assessment (OEHHA)</p>
        <p className="mb-4">N-hexane is a clear colorless liquid with a petroleum-like odor. Flash points -9 °F. Less dense than water and insoluble in water. Vapors heavier than air. Used as a solvent, paint thinner, and chemical reaction medium.</p>
        </CompoundCardPart>

        <CompoundCardPart title='Внешние источники'>
            <CompoundExternalLink title="PubChem" link='https://pubchem.ncbi.nlm.nih.gov/compound/8058'></CompoundExternalLink>
            <CompoundExternalLink title="ChemSpider" link='https://www.chemspider.com/Chemical-Structure.7767.html'></CompoundExternalLink>
            <CompoundExternalLink title="Wikipedia" link='https://en.wikipedia.org/wiki/Hexane'></CompoundExternalLink>
        </CompoundCardPart>

        <CompoundCardPart title='Изображения'>
            Заглушка
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
