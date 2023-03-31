export function setup() {
 const buttons = document.querySelectorAll('.cta-button');
 const counter = document.querySelector('.counter span');

let count = 0;
  if(counter && buttons){
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          count++;
          counter.innerHTML = count.toString();
          btn.classList.add('cta-animation');
          counter!.classList.add('count-animation');
          setTimeout(() => {
            btn.classList.remove('cta-animation');
            counter.classList.remove('count-animation');
          }, 600);
        });
      });
    }
}
