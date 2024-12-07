"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { IAuthState, authSlice } from "@/store/authSlice"


import { useAppDispatch, useAppSelector } from "@/store/store";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

export type GlobalSettingsProps = {
  p_global_settings: IAuthState;
}

const ChemDash: React.FC = () => {
  const dispatch = useAppDispatch()
  const state_auth = useAppSelector(state => state.auth)
  
  let statist = "Не в сети"
  if (state_auth.authState) {
    statist = "В сети"
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Запланировано работ на неделю" total="15" rate="34%" levelUp>
        <svg width="800px" height="800px" viewBox="0 0 24 24" data-name="025_SCIENCE" id="_025_SCIENCE" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path className="cls-1" d="M18,22H7a4,4,0,0,1-4-4V6A4,4,0,0,1,7,2H20a1,1,0,0,1,0,2H7A2,2,0,0,0,5,6V18a2,2,0,0,0,2,2H18a1,1,0,0,0,1-1V7a1,1,0,0,1,2,0V19A3,3,0,0,1,18,22Z"/><path className="cls-1" d="M20,8H7A1,1,0,0,1,7,6H20a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M15,13H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M14,17H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/></svg>
        </CardDataStats>
        <CardDataStats title="Экспериментов за месяц" total="32" rate="4.35%" levelUp>
        <svg width="800px" height="800px" viewBox="0 0 24 24" data-name="025_SCIENCE" id="_025_SCIENCE" xmlns="http://www.w3.org/2000/svg"><defs><style>.</style></defs><path className="cls-1" d="M17.46,22H6.54a4.55,4.55,0,0,1-3.42-7.54L9,7.75V4a1,1,0,0,1,2,0V8.12a1,1,0,0,1-.25.66l-6.12,7A2.54,2.54,0,0,0,6.54,20H17.46a2.54,2.54,0,0,0,1.91-4.22l-6.12-7A1,1,0,0,1,13,8.12V6.5a1,1,0,0,1,2,0V7.75l5.88,6.71A4.55,4.55,0,0,1,17.46,22Z"/><path className="cls-1" d="M15,4.12H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M19,15H10a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M7,18a1,1,0,0,1-1-1,1,1,0,0,1,.08-.38.93.93,0,0,1,.21-.33,1,1,0,0,1,1.42,0,1,1,0,0,1,.21.33A.84.84,0,0,1,8,17a1,1,0,0,1-1,1Z"/><path className="cls-1" d="M11,21a1,1,0,0,1-.38-.08.93.93,0,0,1-.33-.21,1,1,0,0,1,0-1.42.93.93,0,0,1,.33-.21,1,1,0,0,1,1.09.21A1,1,0,0,1,11,21Z"/><path className="cls-1" d="M15,18l-.19,0a.6.6,0,0,1-.19-.06.76.76,0,0,1-.18-.09l-.15-.12A1.05,1.05,0,0,1,14,17a1,1,0,0,1,.08-.38.93.93,0,0,1,.21-.33,1.58,1.58,0,0,1,.15-.12.76.76,0,0,1,.18-.09.6.6,0,0,1,.19-.06,1,1,0,0,1,.9.27.93.93,0,0,1,.21.33A1,1,0,0,1,16,17a1,1,0,0,1-1,1Z"/><path className="cls-1" d="M12,12a1.05,1.05,0,0,1-.71-.29,1.15,1.15,0,0,1-.21-.33.94.94,0,0,1,0-.76,1,1,0,0,1,.21-.33A1,1,0,0,1,12.2,10l.18.06.18.09.15.12a1.15,1.15,0,0,1,.21.33A1,1,0,0,1,13,11a1,1,0,0,1-1,1Z"/></svg>
        </CardDataStats>
        <CardDataStats title="Обновлено описаний объектов" total="10" rate="2" levelUp>
        <svg width="800px" height="800px" viewBox="0 0 24 24" data-name="025_SCIENCE" id="_025_SCIENCE" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path className="cls-1" d="M12,21.08a1,1,0,0,1-.5-.13l-7-4A1,1,0,0,1,4,16V8a1,1,0,0,1,.5-.87l7-4a1,1,0,0,1,1,0l7,4A1,1,0,0,1,20,8V16a1,1,0,0,1-.5.87l-7,4A1,1,0,0,1,12,21.08ZM6,15.46l6,3.47,6-3.47V8.54L12,5.07,6,8.54Z"/><path className="cls-1" d="M15,14.73a1,1,0,0,1-1-1V10.27a1,1,0,0,1,2,0v3.46A1,1,0,0,1,15,14.73Z"/><path className="cls-1" d="M12,16.46a1,1,0,0,1-.5-.13l-3-1.73a1,1,0,0,1-.37-1.37,1,1,0,0,1,1.37-.36l3,1.73A1,1,0,0,1,12.87,16,1,1,0,0,1,12,16.46Z"/><path className="cls-1" d="M9,11.27A1,1,0,0,1,8.5,9.4l3-1.73a1,1,0,1,1,1,1.73l-3,1.73A.93.93,0,0,1,9,11.27Z"/><path className="cls-1" d="M21,18.2a1,1,0,0,1-.5-.14l-2-1.15A1,1,0,0,1,18,16V8a1,1,0,0,1,.5-.87l2-1.15a1,1,0,0,1,1.37.36,1,1,0,0,1-.37,1.37L20,8.54v6.92l1.5.87A1,1,0,0,1,21,18.2Z"/><path className="cls-1" d="M3,18.2a1,1,0,0,1-.5-1.87L4,15.46V8.54L2.5,7.67A1,1,0,0,1,2.13,6.3,1,1,0,0,1,3.5,5.94l2,1.15A1,1,0,0,1,6,8V16a1,1,0,0,1-.5.87l-2,1.15A1,1,0,0,1,3,18.2Z"/></svg>
        </CardDataStats>
        <CardDataStats title="Завершено текстов статей" total="3" rate="1" levelDown>
        <svg width="800px" height="800px" viewBox="0 0 24 24" data-name="025_SCIENCE" id="_025_SCIENCE" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path className="cls-1" d="M20,22H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2H20a1,1,0,0,1,1,1V18a1,1,0,0,1-2,0V4H6V20H20a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M7,7H3A1,1,0,0,1,3,5H7A1,1,0,0,1,7,7Z"/><path className="cls-1" d="M7,11H3A1,1,0,0,1,3,9H7a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M7,19H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M15,11H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M15,15H11a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/></svg>
        </CardDataStats>
      </div>
      <h1>Вы в состоянии {statist}</h1>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default ChemDash;
