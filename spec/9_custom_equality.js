describe("custom equality", function () {

    var myCustomEquality = function (first, second) {

        if (typeof first == "string" && typeof second == "string") {
            return first[0] == second[1];
        }

    };

    beforeEach(function () {
        jasmine.addCustomEqualityTester(myCustomEquality);
    });

    it("should be custom equal", function () {
        expect("abc").toEqual("aaa");
    });

    it("should be custom not equal", function () {
        expect("abc").not.toEqual("abc");
    });
});