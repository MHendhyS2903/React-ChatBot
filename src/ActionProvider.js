class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Info Program",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleSimulasiManfaat = () => {
    const message = this.createChatBotMessage(
      "Simulasi Manfaat",
      {
        widget: "davis",
      }
    );

    this.updateChatbotState(message);
  };

  handleSimulasiIuran = () => {
    const message = this.createChatBotMessage(
      "Simulasi Iuran",
      {
        widget: "SimulasiIuran",
      }
    );

    this.updateChatbotState(message);
  };

  handleKlaim = () => {
    const message = this.createChatBotMessage(
      "Klaim",
      {
        widget: "Klaim",
      }
    );

    this.updateChatbotState(message);
  };

  handleCekStatus = () => {
    const message = this.createChatBotMessage(
      "Klaim",
      {
        widget: "CekStatusKlaim",
      }
    );

    this.updateChatbotState(message);
  };
  
  handleInfoAntrian = () => {
    const message = this.createChatBotMessage(
      "Untuk mengetahui informasi tentang antrian silahkan mengunjungi https://bit.ly/3i8E5Uk",
      {
        widget: "",
      }
    );

    this.updateChatbotState(message);
  };

  handleKPJ = () => {
    const message = this.createChatBotMessage(
      "Klaim",
      {
        widget: "KPJ",
      }
    );

    this.updateChatbotState(message);
  };

  handleCekIbu = () => {
    const message = this.createChatBotMessage(
      "Klaim",
      {
        widget: "CekIbu",
      }
    );

    this.updateChatbotState(message);
  };

  handleJHT = () => {
    const message = this.createChatBotMessage(
      "Simulasi JHT",
      {
        widget: "JHT",
      }
    );

    this.updateChatbotState(message);
  };

  handleJHP = () => {
    const message = this.createChatBotMessage(
      "Simulasi JHP",
      {
        widget: "JHP",
      }
    );

    this.updateChatbotState(message);
  };

  handlePengaduan = () => {
    const message = this.createChatBotMessage(
      "Menu Pengaduan",
      {
        widget: "Pengaduan",
      }
    );

    this.updateChatbotState(message);
  };
  handleJHP = () => {
    const message = this.createChatBotMessage(
      "Simulasi JHP",
      {
        widget: "JHP",
      }
    );

    this.updateChatbotState(message);
  };

  handleKetidaksesuaian = () => {
    const message = this.createChatBotMessage(
      "Ketidaksesuaian",
      {
        widget: "Ketidaksesuaian",
      }
    );

    this.updateChatbotState(message);
  };
  handleCekStatusKepesertaan = () => {
    const message = this.createChatBotMessage(
      "Cek Status Kepesertaan",
      {
        widget: "CekStatusKepesertaan",
      }
    );

    this.updateChatbotState(message);
  };

  handleAkunSIPP = () => {
    const message = this.createChatBotMessage(
      "Akun SIPP",
      {
        widget: "AkunSIPP",
      }
    );

    this.updateChatbotState(message);
  };

  handleCekSaldo = () => {
    const message = this.createChatBotMessage(
      "Cek Saldo",
      {
        widget: "CekSaldo",
      }
    );

    this.updateChatbotState(message);
  };

  handleDaftarPerusahaan = () => {
    const message = this.createChatBotMessage(
      "Perusahaan Belum Terdaftar",
      {
        widget: "DaftarPerusahaan",
      }
    );

    this.updateChatbotState(message);
  };
        
  handleBelumPunyaSSO = () => {
    const message = this.createChatBotMessage(
      "Belum Punya Akun SSO",
      {
        widget: "BelumPunyaSSO",
        
      }
    );

    this.updateChatbotState(message);
  };

  handleResetAkun = () => {
    const message = this.createChatBotMessage(
      "Reset Akun BPJSku",
      {
        widget: "ResetAkun",
      }
    );

    this.updateChatbotState(message);
  };
  handleRegistrasi = () => {
    const message = this.createChatBotMessage(
      "Untuk melakukan registrasi SSO silahkan mengunjungi https://bit.ly/3i8E5Uk",
    );

    this.updateChatbotState(message);
  };

  handleInfoProgram = () => {
    const message = this.createChatBotMessage(
      "Info Program BPJSku",
      {
        widget: "InfoProgram",
      }
    );

    this.updateChatbotState(message);
  };
  handleTanpaRegistrasi = () => {
    const message = this.createChatBotMessage(
      "Cek Saldo Tanpa Registrasi",
      {
        widget: "TanpaRegistrasi",
      }
    );

    this.updateChatbotState(message);
  };

  handleInfoJHT = () => {
    const message = this.createChatBotMessage(
      "JHT adalah program nasional yang dijalankan berdasarkan prinsip asuransi sosial atau tabungan wajib. Tujuannya adalah menjamin setiap peserta menerima sejumlah uang tunai secara sekaligus apabila memasuki masa pensiun di kemudian hari.",
      {
        widget: "InfoJHT",
      }
    );

    this.updateChatbotState(message);
  };
  
  handleInfoJP = () => {
    const message = this.createChatBotMessage(
      "JP adalah Program ini memberi jaminan berupa uang tunai setiap bulan kepada peserta yang memasuki masa pensiun, peserta yang mengalami cacat total tetap, atau keluarga ahli waris dari peserta yang meninggal dunia.",
      {
        widget: "InfoJP",
      }
    );

    this.updateChatbotState(message);
  };

  handleInfoJKK = () => {
    const message = this.createChatBotMessage(
      "JKK adalah manfaat berupa uang tunai dan/atau pelayanan kesehatan yang diberikan pada saat Pekerja mengalami kecelakaan kerja atau penyakit yang disebabkan oleh lingkungan kerja.",
      {
        widget: "InfoJKK",
      }
    );

    this.updateChatbotState(message);
  };

  handleInfoJKM = () => {
    const message = this.createChatBotMessage(
      "JKK adalah program Jamsostek yang dikelola BPJS Ketenagakerjaan sebagai asuransi jiwa bagi peserta. Manfaat program ini berupa uang tunai yang diberikan kepada ahli waris dari peserta yang meninggal dunia saat kepesertaan masih aktif dan bukan akibat kecelakaan kerja.",
      {
        widget: "InfoJKM",
      }
    );

    this.updateChatbotState(message);
  };

  handleDaftarBPJS = () => {
    const message = this.createChatBotMessage(
      "Daftar BPJS Ketenagakerjaan",
      {
        widget: "DaftarBPJS",
      }
    );

    this.updateChatbotState(message);
  };

  handleDaftarTenaga = () => {
    const message = this.createChatBotMessage(
      "Tenaga Kerja Belum Terdaftar",
      {
        widget: "DaftarTenaga",
      }
    );

    this.updateChatbotState(message);
  };
  handleSyarat = () => {
    const message = this.createChatBotMessage(
      "Berikut adalah beberapa persyaratan pengambilan kartu BPJS Kesehatan yang harus dipenuhi :\n" +
      "\n" +
      "1. Mengisi formulir yang disediakan dengan lengkap.\n" +
      "2. Membawa 1 lembar fotokopi KTP dan KK, 1 lembar fotokopi KTP atau akta kelahiran bagi peserta yang belum punya, 1 lembar pas foto peserta ukuran 3 x 4.\n" +
      "3. Menyiapkan bukti Virtual account / e-ID yang telah dicetak.\n" +
      "4. Bukti pembayaran iuran BPJS Kesehatan dari bank/PPOB.",
      {
        widget: "InfoJKM"
      }
    );

    this.updateChatbotState(message);
  };

  handleKritikSaran = () => {
    const message = this.createChatBotMessage(
      "Kritik dan Saran",
      {
        widget: "KritikSaran",
      }
    );

    this.updateChatbotState(message);
  };

  handleBeriKritikSaran = () => {
    const message = this.createChatBotMessage(
      "Silahkan tuliskan kritik dan saran di kolom pesan anda. Terima Kasih :)",

      {
        widget: "InfoJKM"
      }
    );

    this.updateChatbotState(message);
  };

  handleKosong = () => {
    const message = this.createChatBotMessage(
      "Mohon maaf, menu belum bersedia",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleConsole = () => {
    console.log("test")
  };


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
