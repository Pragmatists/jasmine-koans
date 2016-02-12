describe("A spy, when configured to fake a return value", function() {
    beforeEach(function () {
        pending();
    });
    var foo, bar, fetchedBar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

    });

    it("tracks that the spy was called", function() {
        spyOn(foo, "getBar").and.returnValue(745);

        foo.getBar();

        //Add assertion that "foo.getBar" was called
    });


    it("when called returns the requested value", function() {
        spyOn(foo, "getBar").and.returnValue(745);

        foo.setBar(123);
        fetchedBar = foo.getBar();

        //Add assertion on "fetchedBar" value
    });
});
