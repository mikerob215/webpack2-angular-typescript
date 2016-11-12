var Test = (function () {
    function Test(argument) {
        this.argument = argument;
        console.log(this.argument);
    }
    return Test;
}());
new Test('test');
