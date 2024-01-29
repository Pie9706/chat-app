import { mapNodes } from '../declarations';
import { utilityGetMessages } from '../utilities/messages/getMessages';
import { utilityGetEmailLogged } from '../utilities/user/getEmailLogged';

export function componentChat() {
  const email = utilityGetEmailLogged();
  const messages = utilityGetMessages();
  let i = 0;
  const message = messages[i];

  return `
    <div id="backgroundLogout"><button id=${mapNodes.buttonLogout}>Logout ${email}</button></div>
    
    <div id=${mapNodes.messageList}>${messages || 'Non ci sono messaggi'}</div>
    <div id="send-message-container"><input id=${mapNodes.inputMessage} type="text" placeholder='Scrivi un messaggio' />  
    <button id=${mapNodes.buttonSend} >Send</button></div>`;
}
