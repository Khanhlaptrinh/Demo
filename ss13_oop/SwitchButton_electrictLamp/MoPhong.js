class ElectrictLamp {
    _Status;

    constructor(status) {
        this._status = status;
    }

    getStatus() {
        return this._status;
    }
}

class SwitchButton {
    _Lamp;
    _Status;

    constructor(Status, Lamp) {
        this._Status = Status;
        this._Lamp = Lamp;
    }
    // lay gia tri cua thuoc tinh
    getLamp() {
        return this._Lamp;
    }
    // Cap nhat gia tri cua thuoc tinh
    setLamp(lamp) {
        this._Lamp = lamp;
    }

    connectToLamp(ElectrictLamp) {
        this._Lamp = ElectrictLamp;
    }

    switchOff() {
        this._Lamp.status = false;
        return this._Status;
    }

    switchOn() {
        this._Lamp.status = true;
        return this._Status;
    }
}

let elc1 = new ElectrictLamp(true);
let switch1 = new SwitchButton(elc1, false);
console.log(switch1.switchOff());
console.log(switch1.switchOn());
console.log(switch1.switchOff());
console.log(switch1.switchOn());
console.log(switch1.switchOff());
console.log(switch1.switchOn());
