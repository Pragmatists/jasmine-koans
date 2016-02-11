describe("A spy is tracking", function () {
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

        expect(foo.setBar.calls.count()).toEqual(2);
    });


});