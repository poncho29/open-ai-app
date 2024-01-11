import { useState } from "react";

import { GtpMessages, MyMessage, TextMessageBox, TextMessageBoxFile, TypingLoader } from "../../components";

interface Message {
  text: string;
  isGtp: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGtp: false }]);

    // TODO use-case

    setIsLoading(false);

    // TODO: Añadir el mensaje de GTP
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GtpMessages text='Hola, escribe tu texto en español y te ayudo con las correcciones' />

          {messages.map((message, index) => (
            message.isGtp ? (
              <GtpMessages key={index} text='Esto es de OpenAI' />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          ))}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      {/* <TextMessageBox
        disabledCorrections
        placeholder="Escribe aquí..."
        onSendMessage={handlePost}
      /> */}
      <TextMessageBoxFile
        disabledCorrections
        placeholder="Escribe aquí..."
        onSendMessage={handlePost}
      />
    </div>
  )
}
