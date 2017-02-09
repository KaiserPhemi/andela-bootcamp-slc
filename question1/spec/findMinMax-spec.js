(function() {
  'use strict';

  var findMinMax = require("../app/findMinMax").findMinMax;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-66, 78] for [4, -66, 6, 44, 7, 78, -8, 68, 2]', function () {
        expect(findMinMax([4, -66, 6, 44, 7, 78, -8, 68, 2])).toEqual([-66, 78]);
      });

      it("should return [-66, 78] for [4, -66, 6, 44, 7, 78, -8, 'femi', 2]", function () {
        expect(findMinMax([4, -66, 6, 44, 7, 78, -8, 'femi', 2])).toEqual([-66, 78]);
      });

      it("should return [-80, 78] for [4, -80, 6, 44, true, 78, -8, 'femi', 2]", function () {
        expect(findMinMax([4, -80, 6, 44, true, 78, -8, 'femi', 2])).toEqual([-80, 78]);
      });

      it("should return [-66, 78] for [4, -66, 6, 44, 6.8, 78, -8, 5.1, 2]", function () {
        expect(findMinMax([4, -66, 6, 44, 6.8, 78, -8, 5.1, 2])).toEqual([-66, 78]);
      });

      it("should return ['akinwa', 'femi'] for ['andela','femi','akinwa']", function () {
        expect(findMinMax(['andela','femi','akinwa'])).toEqual(['akinwa', 'femi']);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [0] for [0, 0, 0, 0]', function () {
        expect(findMinMax([0, 0, 0, 0])).toEqual([0]);
      });
      


    });

  });

})();