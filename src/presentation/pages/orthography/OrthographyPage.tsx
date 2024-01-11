import { GtpMessages, MyMessage } from "../../components"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GtpMessages text='Hola, escribe tu texto en español y te ayudo con las correcciones' />

          <MyMessage text='Hola Mundo' />
        </div>
      </div>
    </div>
  )
}
