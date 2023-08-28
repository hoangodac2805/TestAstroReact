class BaseStore {
    protected store : any;
    constructor(initialStore : any){
        this.store = initialStore
    }

    protected getStore() : void{
        return this.store
    }
    protected setStore(newStore: any):void{
        this.store = newStore
    }
}