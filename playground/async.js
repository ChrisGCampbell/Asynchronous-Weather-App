/**
 * Created by Chris-Campbell on 12/17/2016.
 */
console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
},2000);

setTimeout(() => {
    console.log("second callback");
},0);

console.log('Finishing app');