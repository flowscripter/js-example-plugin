/* eslint-disable max-classes-per-file */

import Debug from 'debug';
import { EXTENSION_POINT_A_ID } from './ExtensionPointA';
import { EXTENSION_POINT_B_ID } from './ExtensionPointB';

const log = Debug('PluginB');

class ExtensionA {

    constructor(hostData) {
        this.hostData = hostData;
    }

    sayHello() {
        log(`Hello from PluginB and ExtensionA, host provided data is ${this.hostData} `);
    }
}

class ExtensionB {

    constructor(hostData) {
        this.hostData = hostData;
    }

    sayGoodbye() {
        log(`Goodbye from PluginB and ExtensionB, host provided data is ${this.hostData} `);
    }
}

class ExtensionFactoryA {
    // eslint-disable-next-line class-methods-use-this
    create(hostData) {
        return Promise.resolve(new ExtensionA(hostData));
    }
}

class ExtensionFactoryB {
    // eslint-disable-next-line class-methods-use-this
    create(hostData) {
        return Promise.resolve(new ExtensionB(hostData));
    }
}

export class ExtensionDescriptorA {

    constructor() {
        this.extensionPointId = EXTENSION_POINT_A_ID;

        this.factory = new ExtensionFactoryA();

        this.extensionData = 'Extension Descriptor A data';
    }
}

export class ExtensionDescriptorB {

    constructor() {
        this.extensionPointId = EXTENSION_POINT_B_ID;

        this.factory = new ExtensionFactoryB();

        this.extensionData = 'Extension Descriptor B data';
    }
}

export default class PluginB {

    constructor() {
        this.extensionDescriptors = [
            new ExtensionDescriptorA(),
            new ExtensionDescriptorB()
        ];

        this.pluginData = 'Plugin B data';
    }
}
