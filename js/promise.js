
class Promise {
    constructor(nbfn){
        nbfn(this.runSuccess.bind(this), this.runFail.bind(this));
    }

    runSuccess(ret){
        this.thenFn(ret);
    }

    runFail(err){
        this.catchFn(err);
    }

    then(f){
        console.log('then >> ', f);
        this.thenFn = f;
        return this;
    }

    catch(errFn){
        this.catchFn = errFn;
    }
}

const promi = (delay) => new Promise(
    (resolve, reject) => {
        setTimeout(resolve, delay, 'done');
        // setTimeout(reject, delay, 'error');
    }
);
// promi(1000).then(console.log);
promi(1000)
.then(console.log)
.then(console.log)
// .then(promi(1000))
.then(console.log)
.catch(err => console.log("Error >> ", err));


