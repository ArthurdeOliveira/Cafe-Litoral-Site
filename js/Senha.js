const input = document.querySelector("input"),
      showHide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      iconText = document.querySelector(".icon-text"),
      Text = document.querySelector(".text");

//Mostrando e escondendo a senha:
showHide.addEventListener("click", ()=>
{
    if(input.type === "password"){
        input.type = "text"
        showHide.classList.replace("fa-eye-slash", "fa-eye");
    }else
    {
        input.type = "password"
        showHide.classList.replace("fa-eye", "fa-eye-slash");
    }
})

//Indicando a força da senha:

let alphabet = /[a-zA-Z]/, //Da letra a até a z e da A até a Z
    numbers = /[0-9]/,  //números de 1 à 9
    scharacters = /[!,@,#,$,%,^,&,*,(,),-,_,+,=,~,?]/; //Caracteres especiais

    input.addEventListener("keyup", ()=>
    {
        indicator.classList.add("active");

        let val = input.value;
        if(val.match(alphabet) || val.match(numbers) || val.match(scharacters))
        {
            Text.textContent = "Senha fraca";
            iconText.style.color = "#FF6333";
            showHide.style.color = "#FF6333";
            input.style.borderColor = "#FF6333";
        }
        if(val.match(alphabet) && val.match(numbers) && val.length >= 6)
        {
            Text.textContent = "Senha razoável";
            iconText.style.color = "#cc8500";
            showHide.style.color = "#cc8500";
            input.style.borderColor = "#cc8500";
        }
        if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) &&  val.length >= 8)
        {
            Text.textContent = "Senha forte";
            iconText.style.color = "#22C32A";
            showHide.style.color = "#22C32A";
            input.style.borderColor = "#22C32A";
        }

        if(val == "")
        {
            indicator.classList.remove("active");
            showHide.style.color = "#A6A6A6";
            input.style.borderColor = "#d3d3d3";
        }
    })
