import { Injectable } from '@angular/core';

@Injectable()
export class DynamicComponentService {
    protected component = null;

    constructor() { }

    setComponent(component: any) {
        this.component = component;
    }

    getComponent() {
        return this.component;
    }

    destroyComponent() {
        this.component.destroy();
    }

}
