"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import CompoundCardPart from "@/components/CompoundElements/CompoundCardPart"
import CompoundExternalLink from "@/components/CompoundElements/CompoundExternalLink"
import CompoundImage from "@/components/CompoundElements/CompoundImage"
import { COMPOUND_DATA } from "@/types/compound_card_data"
import {fetcher} from "@/fetcher"
import {GetStaticProps} from "next";
import { useAppDispatch } from "@/store/store";
import axios from "axios";


const card_data: COMPOUND_DATA = {
    base_name:"",
    links: [
    ],
    images: [
    ],
    basedata: {
        description:''
    }
  };

let f_load = true;


const CompoundCard: React.FC =(props) => {
    console.log(props)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (f_load == true) {
            f_load = false;
            
        }
    },[]);

  return (
    <div className="col-span-12 border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 min-h-fit max-w-full">
        <h2 className="py-2 dark:font-white text-title-xl text-black-2">{card_data.base_name}</h2>
        <CompoundCardPart title='Изображения'>
        {card_data.images?.map((ext_link,key) => (
                <CompoundImage key={key} title={ext_link.name} link={ext_link.url}></CompoundImage>
            ))}
        </CompoundCardPart>
        
        <CompoundCardPart title='Общие данные'>
        {card_data.basedata?.description}
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

export const getStaticProps: GetStaticProps = () => {
    const response = fetcher('https://api.somesite.com/global_settings')
    console.log("hi")
    return {
        props: {
            data: response  
        },
        revalidate: 1,
    }
}