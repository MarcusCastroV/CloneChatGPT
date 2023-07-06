import { ChatMessageInput } from './ChatMessageInput'

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
}
export const Footer = ({ onSendMessage, disabled }: Props) => {
  return (
    <footer className='w-full border-t-gray-600 p-2'>
      <div className='max-w-3xl m-auto'>
      <ChatMessageInput
      disabled={disabled}
      onSend={onSendMessage}/>
      </div>
      <div className='pt-3 text-center text-xs text-gray-300'>
        Feito por Marcus Castro <br /> <a className='underline' href="https://www.linkedin.com/in/marcus-castrov/">Conheça meus outros projetos</a>
      </div>
    </footer>
  );
}