'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">nestjs-intro documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'id="xs-controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'id="xs-injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'id="xs-controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'id="xs-injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostsModule.html\" data-type=\"entity-link\" >PostsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'id="xs-controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PostsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'id="xs-injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PostsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'id="xs-controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'id="xs-injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePostDto.html\" data-type=\"entity-link\" >CreatePostDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePostsMetaOptionsDto.html\" data-type=\"entity-link\" >CreatePostsMetaOptionsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetUserParamDto.html\" data-type=\"entity-link\" >GetUserParamDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePostDto.html\" data-type=\"entity-link\" >UpdatePostDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/PostsService.html\" data-type=\"entity-link\" >PostsService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));