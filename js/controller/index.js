function validValue() {
    let value       = this.value;
    let element     = this;
    let name        = this.id;
    let labelName   = "#lbl" + name.capitalize();
    let label       = document.querySelector(labelName);
    label.innerHTML ="&nbsp;";

    if(value.isNumber()) {
        element.classList.remove("InvalidValue")
    } else {
        element.className="InvalidValue";
        label.innerHTML="Unicamente se permiten digitos en este campo";
    }
    
    return true;
}

function calc(event) {
    event.preventDefault();
    let value1 = inpValue1.value;
    let value2 = inpValue2.value;
    if(!value1.isNumber() || !value2.isNumber()){
        lblResult.innerHTML = "Verifique valores. Unicamente es posible sumar numeros";
        return false;
    }
    lblResult.innerHTML = (value1*1) + (value2*1);

    return true;
}

function cleanForm() {
    lblResult.innerHTML = "&nbsp;";
    lblValue1.innerHTML = "&nbsp;";
    lblValue2.innerHTML = "&nbsp;";
}

inpValue1.addEventListener('keyup', validValue);
inpValue2.addEventListener('keyup', validValue);
form.addEventListener('submit', calc);
form.addEventListener('reset', cleanForm);
