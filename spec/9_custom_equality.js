describe("custom equality", function () {

    var myCustomEquality = function (first, second) {

        if (typeof first == "string" && typeof second == "string") {
            return first.length == second.length;
        }

    };

    beforeEach(function () {
        jasmine.addCustomEqualityTester(myCustomEquality);
    });

    it("should be custom equal because has same length", function () {
        expect("aaa").toEqual("bbb");
    });

    it("should be custom not equal because has diferent length", function () {
        expect("aaa").not.toEqual("bbbb");
    });
});