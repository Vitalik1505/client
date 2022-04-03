import {makeAutoObservable} from "mobx"

export default class InterStore {
    constructor() {
        this._inters = []
        makeAutoObservable(this);
    }
    setInters(inters) {
        this._inters = inters;
    }
   
    get inters() {
        return this._inters
    } 
}
