import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    buttonText:string = 'Evan';
    buttonTexts:string[] = ['VENDER', 'COMPRAR']
    buttonNumber:number = 7;
    buttonObject = {
        label: 'adcionar ao carrinho',
        cancel: 'cancelar compra',
    }
}
