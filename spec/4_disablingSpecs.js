//Disable suite with failing test
describe("A disabled suite", function () {
    beforeEach(function () {
        pending();
    });

    var foo;

    beforeEach(function () {
        foo = 2
    });

    it("has all specs disabled", function () {
        expect(foo).toEqual(1);
    });
});

//Disable failing spec
describe("Pending specs", function () {
    beforeEach(function () {
        pending();
    });

    it("can be declared 'xit'", function () {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    it("can be declared by calling 'pending' in the spec body", function () {
        expect(true).toBe(false);
        pending();
    });
});

