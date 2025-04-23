function tryCatchFn(){
    try {
        throw new Error("오류!!");
    } catch (err) {
        console.error(err);
    } finally {
        console.log('finally!!');
    }
}

const promiseThrow = () => new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            // throw new Error("오류!!"); 
            reject(new Error("오류!!"));
        }, 1000);
    } catch (err) {
        console.log("err");
        console.error(err);
    } finally {
        console.log('finally!!');
    }
    console.log('The End');
});

// promiseThrow().then(console.log).catch(console.log);

const asyncThrow = async() =>{
    try {
        // throw new Error('오류났어요!!')
        await promiseThrow();
    } catch (err) {
        console.error("catch >>", err);
    } finally {
        console.log('finally!!');
    }
};

asyncThrow();