describe("A spy, when configured with an alternate implementation", function() {
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
        spyOn(foo, "getBar").and.callFake(function() {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();

        //Add assertion that "foo.getBar" was called
    });


    it("when called returns the requested value", function() {
        spyOn(foo, "getBar").and.callFake(function() {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();

        //Add assertion on "fetchedBar" value
    });
});
