var HelloWorld;
(function (HelloWorld) {
    var Hello = (function () {
        function Hello() {
        }
        Hello.prototype.Hello = function () {
            return 'Hello, World!';
        };
        return Hello;
    }());
    HelloWorld.Hello = Hello;
})(HelloWorld || (HelloWorld = {}));
