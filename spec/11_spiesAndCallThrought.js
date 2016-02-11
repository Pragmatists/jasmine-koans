describe("A spy, when configured to call through", function() {
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
        spyOn(foo, 'getBar').and.callThrough();

        foo.getBar();

        //Add assertion that "foo.getBar" was called
    });

    it("should not affect other functions", function() {
        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);

        //Add assertion on "bar" value
    });

    it("when called returns the requested value", function() {
        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();

        //Add assertion on "fetchedBar" value
    });
});