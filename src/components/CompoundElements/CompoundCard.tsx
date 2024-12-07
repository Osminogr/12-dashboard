'use client'
import React from "react";
import CompoundCardPart from "@/components/CompoundElements/CompoundCardPart"
import CompoundExternalLink from "@/components/CompoundElements/CompoundExternalLink"
import CompoundImage from "@/components/CompoundElements/CompoundImage"
import { COMPOUND_DATA } from "@/types/compound_card_data"
import {fetcher} from "@/fetcher"
import { useRouter } from 'next/navigation';
import useSWR from "swr";



let card_data: COMPOUND_DATA = {
    base_name:"",
    links: [
    ],
    images: [
    ],
    basedata: {
        description:''
    }
  };


interface Props {

  "data-id": number;

}

const CompoundCard: React.FC<Props> =  (props) => {
    let endpoint = ""
    let id = -1
    try {
        id = props['data-id']
        endpoint = "/api/chemdata/compounds_def/compound_records/" + id
    } catch(err) {
        console.log(err)
    }
    const { data, error, isLoading } = useSWR(endpoint, fetcher, { refreshInterval: 5000 })
    const res: COMPOUND_DATA = data
    if (!isLoading) {
        card_data = res
    }
  return (
    <div className="border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 min-h-fit max-w-full">
        <h2 className="py-2 dark:font-white text-title-xl text-black-2">{card_data.base_name}</h2>
        <CompoundCardPart title='Изображения'>
        {card_data.images?.map((ext_link,key) => (
                <CompoundImage key={key} title={ext_link.name} link={ext_link.url}></CompoundImage>
            ))}
        </CompoundCardPart>
        
        <CompoundCardPart title='Общие данные'>
            <div className="col-span-full">
                {card_data.basedata?.description}
            </div>
        </CompoundCardPart>

        <CompoundCardPart title='Внешние источники'>
            {card_data.links?.map((ext_link,key) => (
                <CompoundExternalLink key={key} title={ext_link.name} link={ext_link.url}></CompoundExternalLink>
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
