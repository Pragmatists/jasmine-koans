describe("A spy, when configured to throw an error", function() {
    var foo, bar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };


    });

    it("throws the value", function() {
        spyOn(foo, "setBar").and.throwError("quux");

        expect(function() {
            foo.setBar(123)
        }).toThrowError("quux");
    });
});