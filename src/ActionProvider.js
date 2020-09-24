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

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
