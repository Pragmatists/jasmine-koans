describe("A spy", function() {
    beforeEach(function () {
        pending();
    });

    var foo, bar = null;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

    });

    it("tracks that the spy was called", function() {
        //create spy on 'setBar' method using 'spyOn'

        foo.setBar(123);

        //Add assertion that "setBar" method have been called
    });

    it("tracks all the arguments of its calls", function() {
        //create spy on 'setBar' method using 'spyOn'

        foo.setBar(123);
        foo.setBar(456, 'another param');

        //Add assertion that "setBar" method have been called with params
    });

    it("stops all execution on a function", function() {
        //create spy on 'setBar' method using 'spyOn'

        //What is the value of "bar" at this point? Write assertion on expected "bar" value
    });
});
