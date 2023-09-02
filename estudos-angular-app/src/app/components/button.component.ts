import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    label: string = "Etiqueta"
    buttonText:string = 'Evan';
    buttonTexts:string[] = ['VENDER', 'COMPRAR']
    buttonNumber:number = 7;
    buttonObject = {
        label: 'adcionar ao carrinho',
        cancel: 'cancelar compra',
    }

    getAlert() {
        alert("Evandro");
        console.log("Evan Joseph");
        
    }

    mousePassandoPorCima(){
        console.log(this.label);
        
    }
}
