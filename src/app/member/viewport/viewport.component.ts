//
//
// File name : viewport.component.ts 
// Created by: Jerry Hsieh @ 2018-02-05
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit, AfterViewInit } from '@angular/core';

import throttle from 'lodash/throttle';
import get from 'lodash/get';

const _ = { get, throttle };
const wheelThreshold = 0
const onWheelThrottleWaitTime = 1600
const pageChangeThrottleWaitTime = 900


@Component({
    selector: 'app-viewport',
    templateUrl: './viewport.component.html',
    styleUrls: ['./viewport.component.css']
})

export class ViewportComponent implements OnInit, AfterViewInit {
    currentIndex: number = 0;
    nOfIndex = 10;

    constructor() { }
    ngOnInit() { }

    ngAfterViewInit() {
        this._jumpToPageViaHash();
    }
    _jumpToPageViaHash() {
        const { hash } = _.get(window, 'location')
        if (hash) {
            const targetIndex = parseInt(hash.substring(1), 10)
            if (targetIndex >= 0 && targetIndex < this.nOfIndex) {
                this.currentIndex = targetIndex;
            }
        }
    }
    onKeyDown = (e) => {
        switch (e.key) {
            case 'PageDown':
            case 'Down':
            case 'Enter':
            case ' ':
            case 'ArrowRight':
            case 'Right':
            case 'ArrowDown':
            case 'Spacebar':
                e.preventDefault()
                return this.changeIndex(this.currentIndex + 1)
            case 'ArrowUp':
            case 'Up':
            case 'ArrowLeft':
            case 'Left':
            case 'PageUp':
                e.preventDefault()
                return this.changeIndex(this.currentIndex - 1)
            default:
                return null
        }
    }
    /*
    When a user swipes on laptop touchpad with two fingers once,
    it will cause lots of wheeling events during about 1.6s.
    So we need to throttle it.
  */
    onWheel = throttle((e) => {
        if (Math.abs(e.deltaY) > wheelThreshold) {
            if (e.deltaY > 0) {
                return this.changeIndex(this.currentIndex + 1)
            }
            if (e.deltaY < 0) {
                return this.changeIndex(this.currentIndex - 1)
            }
        }
    }, onWheelThrottleWaitTime, { leading: true, trailing: false })

    _isIndexValueValid(index) {

        return (index >= 0 && index < this.nOfIndex)
    }

    changeIndex = _.throttle((targetIndex) => {
        if (this._isIndexValueValid(targetIndex)) {
            if (targetIndex !== this.currentIndex) {
                this.currentIndex = targetIndex;
            }
        }
    }, pageChangeThrottleWaitTime, { leading: true, trailing: false })

    goToNextIndex = () => {
        return this.changeIndex(this.currentIndex + 1)
    }

    goToPrevIndex = () => {
        return this.changeIndex(this.currentIndex - 1)
    }

}
