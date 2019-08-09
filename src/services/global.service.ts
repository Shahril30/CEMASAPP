'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    private $rootScope: any;

    constructor() {
        this.$rootScope = {};
    }

    public get(email: string): any {
        return this.$rootScope[email];
    }

    public set(email: string, value: any): void {
        this.$rootScope[email] = JSON.parse(JSON.stringify(value));
    }

    public setCircular(email: string, value: any): void {
        this.$rootScope[email] = value; // JSON hack will not work here
    }

    public assign(email: string, value: any): void {
        var data = this.get(email) || {};
        data = Object.assign(data, value);
        this.set(email, data);
    }

    public clear(email?: string): void {
        if (email) {
            delete this.$rootScope[email];
        } else {
            this.$rootScope = {};
        }
    }
}