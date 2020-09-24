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

  handleJHP = () => {
    const message = this.createChatBotMessage(
      "Simulasi JHP",
      {
        widget: "JHP",
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

  handleCekSaldo = () => {
    const message = this.createChatBotMessage(
      "Cek Saldo",
      {
        widget: "CekSaldo",
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

  handleRegistrasi = () => {
    const message = this.createChatBotMessage(
      "Untuk melakukan registrasi SSO silahkan mengunjungi https://bit.ly/3i8E5Uk",
    );

    this.updateChatbotState(message);
  };

  handleTanpaRegistrasi = () => {
    const message = this.createChatBotMessage(
      "Tanpa Registrasi",
      {
        widget: "TanpaRegistrasi",
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

  handleSyarat = () => {
    const message = this.createChatBotMessage(
      "Berikut adalah beberapa persyaratan pengambilan kartu BPJS Kesehatan yang harus dipenuhi :\n" +
      "\n" +
      "1. Mengisi formulir yang disediakan dengan lengkap.\n" +
      "2. Membawa 1 lembar fotokopi KTP dan KK, 1 lembar fotokopi KTP atau akta kelahiran bagi peserta yang belum punya, 1 lembar pas foto peserta ukuran 3 x 4.\n" +
      "3. Menyiapkan bukti Virtual account / e-ID yang telah dicetak.\n" +
      "4. Bukti pembayaran iuran BPJS Kesehatan dari bank/PPOB.",
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
    );

    this.updateChatbotState(message);
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
