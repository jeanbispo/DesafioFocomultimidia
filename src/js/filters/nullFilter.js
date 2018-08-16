app.filter('nullfilter', function () {
  return function (array) {
    return array.filter(function (data) {
      return data !== null;
    });
  };
});