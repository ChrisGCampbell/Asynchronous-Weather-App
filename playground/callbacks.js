/**
 * Created by Chris-Campbell on 12/18/2016.
 */
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Name'
    };
    callback(user);
};

getUser(31, (user) => {
console.log(user);
});