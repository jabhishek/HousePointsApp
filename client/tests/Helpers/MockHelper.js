var hpTests = hpTests || {};

hpTests.MockHelper = (function () {
    var getServiceMock = function ($provide, serviceName, params) {
        var newObject, _property, originalValue, _newValue;
        newObject = {};
        _property = params.property;
        _newValue = params.value;
        return $provide.decorator(serviceName, function ($delegate) {
            originalValue = $delegate[_property];
            // if typeof original property and the new value are different, return null
            if (!angular.equals(typeof originalValue, typeof _newValue)) {
                return null;
            }
            if (!angular.isDefined(originalValue) || !angular.isDefined(_newValue)) {
                return newObject;
            }
            newObject[_property] = _newValue;
            return newObject;
        });
    };

    return {
        getServiceMock: getServiceMock
    }
})();