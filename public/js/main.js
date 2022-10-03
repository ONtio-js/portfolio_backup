const user = document.querySelector("#user");
const social_icon = document.querySelector("#home_user");
const home_btn = document.querySelector("#home_button");
const home_buttons = document.querySelector("#home_buttons")
let showIcon = false;
let home_btn_bool = false;


user.addEventListener('click',toggle_button);
home_btn.addEventListener('click',toggle_home_button);



function toggle_button(e){
  if(!showIcon){
    social_icon.classList.remove('hidden');
    // social_icon.classList.remove('')
    setTimeout(()=>{
      social_icon.classList.remove('animate-bounce')
    },1500)
    social_icon.classList.add('animate-bounce')
    showIcon = true;
  }
  else{
    social_icon.classList.add('hidden');
    showIcon =false;
  }
}
function toggle_home_button(e){
  if(!home_btn_bool){
    home_btn.classList.add('animate-spin')
    setTimeout(() => {
      home_btn.classList.remove('animate-spin')
      home_buttons.classList.remove('hidden');
      home_btn.classList.add('hidden');
      home_btn_bool = true;
    }, 1000);
  
  }
  else{
    home_buttons.classList.add('hidden');
    home_btn.classList.remove('hidden');
    showIcon =false;
  }
}