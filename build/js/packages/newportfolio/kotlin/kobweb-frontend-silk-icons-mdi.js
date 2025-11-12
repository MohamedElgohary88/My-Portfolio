(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-frontend-silk-icons-mdi'] = factory(typeof this['kobweb-frontend-silk-icons-mdi'] === 'undefined' ? {} : this['kobweb-frontend-silk-icons-mdi']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-icons-mdi.js.map
