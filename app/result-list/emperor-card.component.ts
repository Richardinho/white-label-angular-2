import { Component, Input } from '@angular/core';

@Component({

    moduleId: module.id,

    selector : 'emperor-card',

    styleUrls : ['emperor-card.css'],

    template : `
        <div class='searchResultItem media'>
            <img alt='' src='https://white-label-elements.herokuapp.com/images/medium/{{ emperor.id }}.jpg'/>
            <div class='media-body'>
                <h3><a routerLink='/emperor' routerLinkActive='active'>{{ emperor.name }}</a></h3>
                <div class=''>
                    {{ emperor.from }} to {{ emperor.to }}
                </div>
            </div>
        </div>
    `
})

export class EmperorCardComponent {
    @Input()
    emperor: any;
}