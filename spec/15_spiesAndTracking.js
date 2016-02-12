describe("A spy is tracking", function () {
    beforeEach(function () {
        pending();
    });
    var foo, bar = null;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');
    });


    it("the number of times it was called", function () {
        foo.setBar();
        foo.setBar();

        //Add assertion that "setBar" method was called twice
    });


});
