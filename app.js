/*jshint node: true */
'use strict';

class PromiseSample {
    constructor() {
        this.message = 'I am PromiseSample\'s instance.';

        this.a = (result) => {
            console.log(result);
            console.log(this.message);
            return Promise.resolve('I am a');
        };

        this.b = function(result) {
            console.log(result);
            console.log(this.message);
            return Promise.resolve('I am b');
        }.bind(this);
    }

    c() {
        return (result) => {
            console.log(result);
            console.log(this.message);
            return Promise.resolve('I am c');
        };
    }

    d(result) {
        console.log(result);
        console.log(this.message);
        return Promise.resolve('I am d');
    }

    e() {
        return new Promise(function(resolve) {
            // console.log(result);
            console.log(this.message);
            // return Promise.resolve('I am c');
            resolve('I am e');
        }.bind(this));
    }

    exec() {
        const promise = new Promise(function(resolve, reject) {
            resolve('ok');
        });

        promise
        .then(this.d.bind(this))
        .catch(function(err) {
            console.log(err);
        })
        .then(function(result) {
            console.log('result', result);
        });
    }
}

const promiseSample = new PromiseSample();
promiseSample.exec();
