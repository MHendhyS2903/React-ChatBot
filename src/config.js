import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/Welcome/LearningOptions";
import JHT from "./components/JHT/JHT";
import JHP from "./components/JHP/JHP";
import SimulasiIuran from "./components/SimulasiIuran/SimulasiIuran";
import Klaim from "./components/Klaim/Klaim";
import CekStatusKlaim from "./components/CekStatusKlaim/CekStatusKlaim";
import KPJ from "./components/KPJ/KPJ";
import CekIbu from "./components/CekIbu/CekIbu";
import Pengaduan from "./components/Pengaduan/Pengaduan";
import Ketidaksesuaian from "./components/Ketidaksesuaian/Ketidaksesuaian";
import AkunSIPP from "./components/AkunSIPP/AkunSIPP";
import DaftarTenaga from "./components/DaftarTenaga/DaftarTenaga";
import DaftarPerusahaan from "./components/DaftarPerusahaan/DaftarPerusahaan";
import ResetAkun from "./components/ResetAkun/ResetAkun";
import InfoProgram from "./components/InfoProgram/InfoProgram";
import InfoJHT from "./components/InfoJHT/InfoJHT";
import LinkList from "./components/SimulasiManfaat/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Halo dengan customer care BPJS Ketenagakerjaan, Ada yang bisa kami bantu?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#50B35E",
    },
    chatButton: {
      backgroundColor: "#50B35E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "JHT",
      widgetFunc: (props) => <JHT {...props} />,
    },
    {
      widgetName: "JHP",
      widgetFunc: (props) => <JHP {...props} />,
    },
    {
      widgetName: "SimulasiIuran",
      widgetFunc: (props) => <SimulasiIuran {...props} />,
    },
    {
      widgetName: "Klaim",
      widgetFunc: (props) => <Klaim {...props} />,
    },
    {
      widgetName: "CekStatusKlaim",
      widgetFunc: (props) => <CekStatusKlaim {...props} />,
    },
    {
      widgetName: "KPJ",
      widgetFunc: (props) => <KPJ {...props} />,
    },
    {
      widgetName: "CekIbu",
      widgetFunc: (props) => <CekIbu {...props} />,
    },
    {
      widgetName: "Pengaduan",
      widgetFunc: (props) => <Pengaduan {...props} />,
    },
    {
      widgetName: "Ketidaksesuaian",
      widgetFunc: (props) => <Ketidaksesuaian {...props} />,
    },
    {
      widgetName: "AkunSIPP",
      widgetFunc: (props) => <AkunSIPP {...props} />,
    },
    {
      widgetName: "DaftarPerusahaan",
      widgetFunc: (props) => <DaftarPerusahaan {...props} />,
    },
    {
      widgetName: "DaftarTenaga",
      widgetFunc: (props) => <DaftarTenaga {...props} />,
    },
    {
      widgetName: "ResetAkun",
      widgetFunc: (props) => <ResetAkun {...props} />,
    },
    {
      widgetName: "InfoProgram",
      widgetFunc: (props) => <InfoProgram {...props} />,
    },
    {
      widgetName: "InfoJHT",
      widgetFunc: (props) => <InfoJHT {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "davis",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
