//
//
// File name : viewport.component.ts 
// Created by: Jerry Hsieh @ 2018-02-05
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { throttleTime } from 'rxjs/operators';

import * as $ from 'jquery';


const wheelThreshold = 0;
const onWheelThrottleWaitTime = 1600;
const pageChangeThrottleWaitTime = 900;

interface Slide {
    id: number;
    slide: string;
    image: string;
    state: string;
}

@Component({
    selector: 'app-viewport',
    templateUrl: './viewport.component.html',
    styleUrls: ['./viewport.component.css'],
    animations: [
        trigger('drop', [
            state('hide', style({ top: '20%' })),
            state('show', style({ top: '50%' })),
            transition('hide=>show', [
                animate('1s')
            ]),
            transition('show=>hide', [
                animate('1s')
            ])
        ]),
    ]
})

export class ViewportComponent implements OnInit, OnDestroy {
    currentIndex: number = 0;
    keySub: Subscription;
    mouseSub: Subscription;
    Slides: Slide[] = [];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getSlides();
        this.keySub = fromEvent(document, 'keydown')
            .subscribe(e => {
                this.onKeyDown(e);
            });
        this.mouseSub = fromEvent(document, 'mousewheel').pipe(throttleTime(onWheelThrottleWaitTime))
            .subscribe(e => {
                this.onWheel(e);
            });
    }

    ngOnDestroy() {
        this.keySub.unsubscribe();
        this.mouseSub.unsubscribe();
    }

    ngAfterViewInit() {
        this._jumpToPageViaHash();
    }

    getSlides() {
        this.Slides.push({ id: 0, slide: 'slide0', state: 'show', image: 'https://i.imgur.com/lnfiCvk.jpg' });
        this.Slides.push({ id: 1, slide: 'slide1', state: 'hide', image: 'https://i.imgur.com/SBedSdj.jpg' });
        this.Slides.push({ id: 2, slide: 'slide2', state: 'hide', image: 'https://i.imgur.com/EzsqWaB.jpg' });
        this.Slides.push({ id: 3, slide: 'slide3', state: 'hide', image: 'https://i.imgur.com/oiYeyoS.jpg' });
    }

    _jumpToPageViaHash() {
        this.route.fragment.subscribe(r => {
            console.log('got fragement ', r);
            if (r) {
                const targetIndex = parseInt(r, 10)
                if (targetIndex >= 0 && targetIndex < this.Slides.length) {
                    this.changeIndex(targetIndex);
                }
            } else {
                this.changeIndex(0);
            }
        })

    }
    onKeyDown(e) {
        switch (e.key) {
            case 'PageDown':
            case 'Down':
            case 'Enter':
            case ' ':
            case 'ArrowRight':
            case 'Right':
            case 'ArrowDown':
            case 'Spacebar': {
                e.preventDefault();
                return this.goToNextIndex();
            }
            case 'ArrowUp':
            case 'Up':
            case 'ArrowLeft':
            case 'Left':
            case 'PageUp': {
                e.preventDefault();
                this.goToPrevIndex();
            }
            default:
                return null
        }
    }

    onWheel(e) {
        if (Math.abs(e.deltaY) > wheelThreshold) {
            if (e.deltaY > 0) {
                return this.goToNextIndex();
            }
            if (e.deltaY < 0) {
                return this.goToPrevIndex();
            }
        }
    }

    _isIndexValueValid(index) {
        return (index >= 0 && index < this.Slides.length)
    }

    changeIndex(targetIndex) {
        if (this._isIndexValueValid(targetIndex)) {
            if (targetIndex !== this.currentIndex) {
                const preIndex = this.currentIndex;
                this.currentIndex = targetIndex;
                const nslide = document.getElementById('slide' + this.currentIndex);
                if (nslide) {
                    $('html, body').animate({
                        scrollTop: nslide.offsetTop - 64
                    }, pageChangeThrottleWaitTime, () => {
                        this.Slides[this.currentIndex].state = "show";
                        this.Slides[preIndex].state = 'hide';
                        console.log('after scroll');
                    })
                } else {
                    window.scrollTo(0, 0);
                }
            }
        }
    }

    goToNextIndex() {
        return this.changeIndex(this.currentIndex + 1);
    }

    goToPrevIndex() {
        return this.changeIndex(this.currentIndex - 1);
    }

}
