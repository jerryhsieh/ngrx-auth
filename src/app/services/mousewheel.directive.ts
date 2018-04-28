//
//
// File name : mousewheel.directive.ts 
// Created by: Jerry Hsieh @ 2018-02-05
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
    selector: '[mousewheel]'
})
export class MousewheelDirective {

    constructor() { }
    @Output() mouseWheelUp = new EventEmitter();
    @Output() mouseWheelDown = new EventEmitter();

    @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
        this.mouseWheelFunc(event);
    }

    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.mouseWheelFunc(event);
    }

    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.mouseWheelFunc(event);
    }

    mouseWheelFunc(event: any) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        } else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}
