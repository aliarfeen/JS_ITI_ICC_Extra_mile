const btn = document.getElementById("btn");
const header =document.getElementsByTagName("h1")[0];

function greet() {

  return new Promise((resolve, reject) => {
   try {
    setTimeout(() => {
      btn.addEventListener("click", () => {
        resolve(() => {
            header.innerText = 'clicked'
        });

      });

    }, 2000);
    reject(() =>{
        header.innerText = 'Too Slow!';
    })
   } catch (error) {
    console.error(error);
   } 
  });
}
