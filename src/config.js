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
import InfoJP from "./components/InfoJP/InfoJP";
import InfoJKK from "./components/InfoJKK/InfoJKK";
import InfoJKM from "./components/InfoJKM/InfoJKM";
import LinkList from "./components/SimulasiManfaat/LinkList";
import CekStatusKepesertaan from "./components/CekStatusKepesertaan/CekStatusKepesertaan";
import ListCekSaldo from "./components/CekSaldo/ListCekSaldo";
import BelumPunyaSSO from "./components/BelumPunyaSSO/BelumPunyaSSO";
import TanpaRegistrasi from "./components/TanpaRegistrasi/TanpaRegistrasi";
import DaftarBPJS from "./components/DaftarBPJS/ListDaftar";
import KritikSaran from "./components/KritikSaran/ListKritikSaran";

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
      widgetName: "InfoJP",
      widgetFunc: (props) => <InfoJP {...props} />,
    },
    {
      widgetName: "InfoJKK",
      widgetFunc: (props) => <InfoJKK {...props} />,
    },
    {
      widgetName: "InfoJKM",
      widgetFunc: (props) => <InfoJKM {...props} />,
    },
    {
      widgetName: "CekStatusKepesertaan",
      widgetFunc: (props) => <CekStatusKepesertaan {...props} />,
    },
    {
      widgetName: "CekSaldo",
      widgetFunc: (props) => <ListCekSaldo {...props} />,
    },
    {
      widgetName: "BelumPunyaSSO",
      widgetFunc: (props) => <BelumPunyaSSO {...props} />,
    },
    {
      widgetName: "TanpaRegistrasi",
      widgetFunc: (props) => <TanpaRegistrasi {...props} />,
    },
    {
      widgetName: "DaftarBPJS",
      widgetFunc: (props) => <DaftarBPJS {...props} />,
    },
    {
      widgetName: "KritikSaran",
      widgetFunc: (props) => <KritikSaran {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LearningOptions {...props} />,
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
