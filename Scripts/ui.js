// render chat templates to the DOM
// clear the list of chats (when the room changes) 
class ChatUI {
  constructor(list){
    this.list = list;
  }
  clear(){
    this.list.innerHTML = '';
  }
  render(data){
    const date = data.created_at.toDate().toString('d MMM yyyy, HH:mm');
    const html = `
    <li class="list-group-item">
      <span class="username">${data.username}</span>
      <span class="message">${data.message}</span>
      <div class="time">${date}</div>
    </li>`;

    this.list.innerHTML += html;
  }
}