describe("jasmine.objectContaining", function() {
    var foo;

    beforeEach(function() {
        foo = {
            a: 1,
            b: 2,
            c: 3,
            bar: "baz"
        };
    });

    it("matches objects with the expect key/value pairs", function() {
        var result = {
            a: 1,
            b: 2,
            c: 3,
            bar: "fizz"
        };

        //Change assertion to check that "foo" variable is equal to "result" ignoring "bar" property
        expect(foo).toEqual(result);
    });

});