(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var protoOf = kotlin_kotlin.$_$.z6;
  var asList = kotlin_kotlin.$_$.y2;
  var interfaceMeta = kotlin_kotlin.$_$.o6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var VOID = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.v2;
  var classMeta = kotlin_kotlin.$_$.c6;
  var Enum = kotlin_kotlin.$_$.i9;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.c7;
  var hashCode = kotlin_kotlin.$_$.m6;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var equals = kotlin_kotlin.$_$.f6;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var toString_0 = kotlin_kotlin.$_$.ga;
  var numberToDouble = kotlin_kotlin.$_$.v6;
  var getNumberHashCode = kotlin_kotlin.$_$.j6;
  var defineProp = kotlin_kotlin.$_$.e6;
  var isInterface = kotlin_kotlin.$_$.r6;
  var Collection = kotlin_kotlin.$_$.o2;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var listOfNotNull = kotlin_kotlin.$_$.a4;
  var joinToString = kotlin_kotlin.$_$.u3;
  var joinToString_0 = kotlin_kotlin.$_$.v3;
  var contains = kotlin_kotlin.$_$.u7;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.j3;
  var copyToArray = kotlin_kotlin.$_$.h3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fa;
  var lazy = kotlin_kotlin.$_$.z9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.l7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.f2m(new MouseEventListener('click', listener));
  }
  function onMouseEnter(listener) {
    this.f2m(new MouseEventListener('mouseenter', listener));
  }
  function onMouseLeave(listener) {
    this.f2m(new MouseEventListener('mouseleave', listener));
  }
  function onAnimationEnd(listener) {
    this.f2m(new AnimationEventListener('animationend', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.b2m(asList(classes));
  }
  function id(value) {
    return this.w2l('id', value);
  }
  function tabIndex(value) {
    return this.w2l('tabindex', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
  setMetadataFor(ButtonType, 'ButtonType', classMeta, Enum);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(Percentage, 'Percentage', classMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.y2o(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.y2o(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.a2p(variableName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  function add(selector, style) {
    this.f2o(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.x2p();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.u2p(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.u2p(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.r2p(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder], StyleSheet_init_$Create$);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder], CSSRulesHolderState);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta, VOID, VOID, CSSBorder);
  setMetadataFor(sam$org_jetbrains_compose_web_css_TransformFunction$0, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', classMeta);
  setMetadataFor(sam$org_jetbrains_compose_web_css_TransformFunction$0_0, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', classMeta);
  setMetadataFor(sam$org_jetbrains_compose_web_css_TransformFunction$0_1, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', classMeta);
  setMetadataFor(sam$org_jetbrains_compose_web_css_TransformFunction$0_2, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', classMeta);
  setMetadataFor(TransformBuilderImplementation, 'TransformBuilderImplementation', classMeta, VOID, VOID, TransformBuilderImplementation);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.w2l('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.w2l('src', value);
  }
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.w2l('type', value.z2l_1);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.w2l('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.k2m_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l2m_1 = LinkedHashMap_init_$Create$();
    this.m2m_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n2m_1 = ArrayList_init_$Create$();
    this.o2m_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.p2m_1 = ArrayList_init_$Create$();
    this.q2m_1 = 8;
  }
  protoOf(AttrsScopeBuilder).j2m = function (listener) {
    this.k2m_1.j2m(listener);
  };
  protoOf(AttrsScopeBuilder).g2m = function (listener) {
    this.k2m_1.g2m(listener);
  };
  protoOf(AttrsScopeBuilder).h2m = function (listener) {
    this.k2m_1.h2m(listener);
  };
  protoOf(AttrsScopeBuilder).i2m = function (listener) {
    this.k2m_1.i2m(listener);
  };
  protoOf(AttrsScopeBuilder).f2m = function (listener) {
    this.k2m_1.f2m(listener);
  };
  protoOf(AttrsScopeBuilder).b2m = function (classes) {
    this.p2m_1.c1(classes);
  };
  protoOf(AttrsScopeBuilder).c2m = function (classes) {
    addAll(this.p2m_1, classes);
  };
  protoOf(AttrsScopeBuilder).a2m = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.m2m_1);
  };
  protoOf(AttrsScopeBuilder).w2l = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.l2m_1.m2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).t2m = function () {
    return this.l2m_1;
  };
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r2m_1 = ArrayList_init_$Create$();
    this.s2m_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).f2m = function (listener) {
    this.r2m_1.w(listener);
  };
  protoOf(EventsListenerScopeBuilder).u2m = function () {
    return this.r2m_1;
  };
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.z2l_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  function SyntheticEventListener(event, listener) {
    this.v2m_1 = event;
    this.w2m_1 = listener;
    this.x2m_1 = this.v2m_1;
    this.y2m_1 = 0;
  }
  protoOf(SyntheticEventListener).o25 = function () {
    return this.x2m_1;
  };
  protoOf(SyntheticEventListener).fh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.w2m_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.fh(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.d2n_1 = 0;
  }
  protoOf(MouseEventListener).fh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.w2m_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.fh(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.i2n_1 = 0;
  }
  protoOf(AnimationEventListener).fh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.w2m_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.fh(event);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().s2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.m2(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().v2(element.name)).w(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.k2n_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.m2n_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function Percentage(value) {
    CSSKeyframe.call(this);
    this.o2n_1 = value;
    this.p2n_1 = 8;
  }
  protoOf(Percentage).toString = function () {
    return toString(this.o2n_1);
  };
  protoOf(Percentage).hashCode = function () {
    return hashCode(this.o2n_1);
  };
  protoOf(Percentage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Percentage))
      return false;
    var tmp0_other_with_cast = other instanceof Percentage ? other : THROW_CCE();
    if (!equals(this.o2n_1, tmp0_other_with_cast.o2n_1))
      return false;
    return true;
  };
  function CSSKeyframe() {
    this.q2n_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.r2n_1 = keyframe;
    this.s2n_1 = style;
    this.t2n_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).u2n = function () {
    return this.s2n_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).v2n = function () {
    return this.r2n_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.r2n_1 + ', style=' + this.s2n_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.r2n_1);
    result = imul(result, 31) + hashCode(this.s2n_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.r2n_1, tmp0_other_with_cast.r2n_1))
      return false;
    if (!equals(this.s2n_1, tmp0_other_with_cast.s2n_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.w2n_1 = name;
    this.x2n_1 = keys;
    this.y2n_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).v2n = function () {
    return '@keyframes ' + this.w2n_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.w2n_1 + ', keys=' + this.x2n_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.w2n_1);
    result = imul(result, 31) + hashCode(this.x2n_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.w2n_1 === tmp0_other_with_cast.w2n_1))
      return false;
    if (!equals(this.x2n_1, tmp0_other_with_cast.x2n_1))
      return false;
    return true;
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function Raw(string) {
    this.z2n_1 = string;
    this.a2o_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.z2n_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.z2n_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.z2n_1 === tmp0_other_with_cast.z2n_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.b2o_1 = name;
    this.c2o_1 = value;
    this.d2o_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.b2o_1 === other.b2o_1 ? toString_0(this.c2o_1) === toString_0(other.c2o_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.c2o_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.c2o_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.b2o_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.e2o(rulesBuild);
    _this__u8e3s4.f2o(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.g2o_1 = query;
    this.h2o_1 = rules;
    this.i2o_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).j2o = function () {
    return this.h2o_1;
  };
  protoOf(CSSMediaRuleDeclaration).v2n = function () {
    return '@media ' + this.g2o_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.h2o_1, other.h2o_1) ? equals(this.g2o_1, other.g2o_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.k2o_1 = selector;
    this.l2o_1 = style;
    this.m2o_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).u2n = function () {
    return this.l2o_1;
  };
  protoOf(CSSStyleRuleDeclaration).v2n = function () {
    return this.k2o_1.o2o();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.k2o_1 + ', style=' + this.l2o_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.k2o_1);
    result = imul(result, 31) + hashCode(this.l2o_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.k2o_1, tmp0_other_with_cast.k2o_1))
      return false;
    if (!equals(this.l2o_1, tmp0_other_with_cast.l2o_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.s2o_1 = 0;
  }
  function Companion_10() {
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_s(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.s' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 's');
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function CSSUnitValueTyped(value, unit) {
    this.d2p_1 = value;
    this.e2p_1 = unit;
    this.f2p_1 = 0;
  }
  protoOf(CSSUnitValueTyped).p2 = function () {
    return this.d2p_1;
  };
  protoOf(CSSUnitValueTyped).g2p = function () {
    return this.e2p_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.d2p_1 + this.e2p_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.d2p_1);
    result = imul(result, 31) + hashCode(this.e2p_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.d2p_1, tmp0_other_with_cast.d2p_1))
      return false;
    if (!equals(this.e2p_1, tmp0_other_with_cast.e2p_1))
      return false;
    return true;
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2o_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w2o_1 = ArrayList_init_$Create$();
    this.x2o_1 = 0;
  }
  protoOf(StyleScopeBuilder).b2p = function () {
    return this.v2o_1;
  };
  protoOf(StyleScopeBuilder).c2p = function () {
    return this.w2o_1;
  };
  protoOf(StyleScopeBuilder).y2o = function (propertyName, value) {
    this.b2p().w(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).a2p = function (variableName, value) {
    this.c2p().w(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.b2p(), other.b2p()) ? nativeEquals(this.c2p(), other.c2p()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.h2p_1 = name;
    this.i2p_1 = value;
    this.j2p_1 = 8;
  }
  protoOf(StylePropertyDeclaration).le = function () {
    return this.h2p_1;
  };
  protoOf(StylePropertyDeclaration).me = function () {
    return this.i2p_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.h2p_1 + ', value=' + this.i2p_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.h2p_1);
    result = imul(result, 31) + hashCode(this.i2p_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.h2p_1 === tmp0_other_with_cast.h2p_1))
      return false;
    if (!equals(this.i2p_1, tmp0_other_with_cast.i2p_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.j() === properties.j()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.k(tmp0);
        if (!(element.h2p_1 === otherProp.h2p_1 ? toString(element.i2p_1) === toString(otherProp.i2p_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_11() {
    this.k2p_1 = 0;
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.l2p_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m2p_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.n2p_1 = customPrefix == null ? '' + getKClassFromExpression(this).x6() + '-' : customPrefix;
    this.o2p_1 = customPrefix == null;
    this.p2p_1 = 0;
  }
  protoOf(StyleSheet).q2p = function () {
    return this.l2p_1.q2p();
  };
  protoOf(StyleSheet).f2o = function (cssRule) {
    this.l2p_1.f2o(cssRule);
  };
  protoOf(StyleSheet).r2p = function (selector, style) {
    this.l2p_1.r2p(selector, style);
  };
  protoOf(StyleSheet).s2p = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.q2p();
  };
  protoOf(StyleSheet).e2o = function (rulesBuild) {
    return this.s2p(rulesBuild);
  };
  protoOf(StyleSheet).u2p = function (selector, cssRule) {
    return this.t2p(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.y2p_1 = mutableStateListOf();
    this.z2p_1 = 0;
  }
  protoOf(CSSRulesHolderState).q2p = function () {
    return this.y2p_1;
  };
  protoOf(CSSRulesHolderState).f2o = function (cssRule) {
    this.y2p_1.i1m(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.b2q_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.b2q_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.b2q_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.b2q_1 === tmp0_other_with_cast.b2q_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.d2q_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.d2q_1 === other.d2q_1 ? this.e2q() == other.e2q() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).e2q = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.e2q();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.d2q_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('background-color', value);
  }
  function backgroundRepeat(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('background-repeat', value);
  }
  function backgroundSize(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('background-size', value);
  }
  function backgroundImage(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('background-image', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.y2o('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius_0(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    _this__u8e3s4.t2o('border-radius', '' + topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft);
  }
  function CSSBorder() {
    this.f2q_1 = null;
    this.g2q_1 = null;
    this.h2q_1 = null;
    this.i2q_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.f2q_1, other.f2q_1) ? equals(this.g2q_1, other.g2q_1) : false) ? equals(this.h2q_1, other.h2q_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.f2q_1, this.g2q_1, this.h2q_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.f2q_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.g2q_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.h2q_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.y2o('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('max-width', value);
  }
  function height_0(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('height', value);
  }
  function width_1(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('width', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.u2o('flex-grow', value);
  }
  function flex(_this__u8e3s4, value) {
    _this__u8e3s4.u2o('flex', value);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('flex-direction', flexDirection);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('align-items', alignItems);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('justify-content', justifyContent);
  }
  function alignContent(_this__u8e3s4, alignContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('align-content', alignContent);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('align-self', alignSelf);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('gap', value);
  }
  function gap_0(_this__u8e3s4, rowGap, columnGap) {
    _this__u8e3s4.t2o('gap', '' + rowGap + ' ' + columnGap);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('row-gap', value);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('column-gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('grid-template-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('grid-auto-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.t2o('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('grid-auto-columns', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.u2o('opacity', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('line-height', value);
  }
  function lineHeight_0(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.y2o('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function transform(_this__u8e3s4, transformContext) {
    var transformBuilder = new TransformBuilderImplementation();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    transformContext(transformBuilder);
    _this__u8e3s4.t2o('transform', transformBuilder.toString());
  }
  function sam$org_jetbrains_compose_web_css_TransformFunction$0(function_0) {
    this.j2q_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).b1z = function () {
    return this.j2q_1();
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_0(function_0) {
    this.k2q_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_0).b1z = function () {
    return this.k2q_1();
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_1(function_0) {
    this.l2q_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_1).b1z = function () {
    return this.l2q_1();
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_2(function_0) {
    this.m2q_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_2).b1z = function () {
    return this.m2q_1();
  };
  function TransformBuilderImplementation$rotate$lambda($a) {
    return function () {
      return 'rotate(' + $a + ')';
    };
  }
  function TransformBuilderImplementation$scale$lambda($sx) {
    return function () {
      return 'scale(' + toString($sx) + ')';
    };
  }
  function TransformBuilderImplementation$translateX$lambda($tx) {
    return function () {
      return 'translateX(' + $tx + ')';
    };
  }
  function TransformBuilderImplementation$translateY$lambda($ty) {
    return function () {
      return 'translateY(' + $ty + ')';
    };
  }
  function TransformBuilderImplementation$toString$lambda(it) {
    return it.b1z();
  }
  function TransformBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n2q_1 = ArrayList_init_$Create$();
  }
  protoOf(TransformBuilderImplementation).o2q = function (a) {
    var tmp = TransformBuilderImplementation$rotate$lambda(a);
    this.n2q_1.w(new sam$org_jetbrains_compose_web_css_TransformFunction$0(tmp));
  };
  protoOf(TransformBuilderImplementation).p2q = function (sx) {
    var tmp = TransformBuilderImplementation$scale$lambda(sx);
    this.n2q_1.w(new sam$org_jetbrains_compose_web_css_TransformFunction$0_0(tmp));
  };
  protoOf(TransformBuilderImplementation).q2q = function (tx) {
    var tmp = TransformBuilderImplementation$translateX$lambda(tx);
    this.n2q_1.w(new sam$org_jetbrains_compose_web_css_TransformFunction$0_1(tmp));
  };
  protoOf(TransformBuilderImplementation).r2q = function (ty) {
    var tmp = TransformBuilderImplementation$translateY$lambda(ty);
    this.n2q_1.w(new sam$org_jetbrains_compose_web_css_TransformFunction$0_2(tmp));
  };
  protoOf(TransformBuilderImplementation).toString = function () {
    return joinToString(this.n2q_1, ' ', VOID, VOID, VOID, VOID, TransformBuilderImplementation$toString$lambda);
  };
  function CSSSelector() {
    this.n2o_1 = 0;
  }
  protoOf(CSSSelector).o2o = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(-492369756);
      sourceInformation($composer_1, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.t1n();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.i1i();
      if ($composer_2.a1o()) {
        var tmp_1 = $composer_2;
        tmp_1.c1o(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.f1o();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.o2m_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).s1n(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.p2m_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.m2m_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.t2m();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.k2m_1.u2m();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.n2m_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).t1n();
      $composer_2.s1n(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.s1n(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.t1n();
      $composer_2.t1n();
      $composer_2.h1o();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.u2q_1 = node;
    this.v2q_1 = emptyList();
  }
  protoOf(DomElementWrapper).j2k = function () {
    return this.u2q_1;
  };
  protoOf(DomElementWrapper).w2q = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.v2q_1.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.u2q_1.removeEventListener(element.o25(), element);
    }
    this.v2q_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.v2q_1.l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.u2q_1.addEventListener(element_0.o25(), element_0);
    }
  };
  protoOf(DomElementWrapper).x2q = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.le();
      var item = element.me();
      applicator(this.u2q_1, item);
    }
  };
  protoOf(DomElementWrapper).y2q = function (styleApplier) {
    var tmp0_subject = this.u2q_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.u2q_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.u2q_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.b2p().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.le();
        var value = element.me();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.c2p().l();
      while (tmp0_iterator_0.z()) {
        var element_0 = tmp0_iterator_0.b1();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).z2q = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.u2q_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.u2q_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.l2().l();
    while (tmp0_iterator.z()) {
      var element_0 = tmp0_iterator.b1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.u2q_1.setAttribute(element_0.o2(), element_0.p2());
    }
  };
  protoOf(DomElementWrapper).a2r = function (classes) {
    this.u2q_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.q()) {
      var tmp = this.u2q_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.d23();
      $scope.f2r(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.a2r(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.y2q(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.z2q(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.w2q(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.x2q(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.g2r());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.e2r_1 = 8;
  }
  protoOf(ElementScopeImpl).f2r = function (_set____db54di) {
    this.d2r_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).g2r = function () {
    var tmp = this.d2r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).h2r = function (_this__u8e3s4) {
    return this.g2r();
  };
  function ElementScopeBase() {
    this.i2r_1 = 0;
    this.j2r_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  function get_Header() {
    _init_properties_Elements_kt__eyv5nt();
    return Header;
  }
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  function get_Br() {
    _init_properties_Elements_kt__eyv5nt();
    return Br;
  }
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.l2r_1;
    el$factory();
    return this_0.p2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.k2r_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.k2r_1 = tagName;
    var tmp = this;
    tmp.l2r_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).d23 = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      $composer_0.s1n(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.e1p(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var $composer_1 = $composer_0;
      $composer_1.s1n(1886828752);
      sourceInformation($composer_1, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.o1n();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.i1i();
      if ($composer_1.a1o()) {
        var tmp_2 = $composer_1;
        tmp_2.c1o(Text$lambda_0(tmpCache));
      } else {
        $composer_1.f1o();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_1);
      $composer_1.h1o();
      $composer_1.t1n();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Text$lambda_2(value, $changed));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-892332201);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-892332201, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:569)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Header_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(790946064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(790946064, $dirty, -1, 'org.jetbrains.compose.web.dom.Header (Elements.kt:220)');
      }
      TagElement(get_Header(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Header$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.s1n(-671457079);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.l1f(src) | $composer_0.l1f(alt_0._v)) | $composer_0.n1o(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1386364631);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1386364631, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      $composer_0.s1n(-671461516);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.l1f(href_0._v) | $composer_0.n1o(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A.<anonymous>' call
        var value = A$lambda(href_0, attrs_0);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-606646835, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(17018421, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Br_0(attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1362499962);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1362499962, $dirty, -1, 'org.jetbrains.compose.web.dom.Br (Elements.kt:621)');
      }
      TagElement(get_Br(), attrs_0._v, null, $composer_0, 384 | 112 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Br$lambda(attrs_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.s1n(-671448825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.n1o(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.y1o();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      TagElement(tmp, tmpCache, tmp0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.j2k();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Header$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Header_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Br$lambda($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Br_0($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.m2r_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).yl = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.m2r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.h2r($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.l1f($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.j();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.e1i();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.v2n() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.u2n().b2p().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.le();
        var value = element.me();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.u2n().c2p().l();
      while (tmp0_iterator_0.z()) {
        var element_0 = tmp0_iterator_0.b1();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.j2o().l();
        while (tmp0_iterator_1.z()) {
          var element_1 = tmp0_iterator_1.b1();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.x2n_1.l();
          while (tmp0_iterator_2.z()) {
            var element_2 = tmp0_iterator_2.b1();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.v2n() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.v2n() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.z2r_1 = animationEventDetails.animationName;
    this.a2s_1 = animationEventDetails.elapsedTime;
    this.b2s_1 = animationEventDetails.pseudoElement;
    this.c2s_1 = 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.d2s_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e2s_1 = this.d2s_1.target;
    this.f2s_1 = this.d2s_1.bubbles;
    this.g2s_1 = this.d2s_1.cancelable;
    this.h2s_1 = this.d2s_1.composed;
    this.i2s_1 = this.d2s_1.currentTarget;
    this.j2s_1 = this.d2s_1.eventPhase;
    this.k2s_1 = this.d2s_1.defaultPrevented;
    this.l2s_1 = this.d2s_1.timeStamp;
    this.m2s_1 = this.d2s_1.type;
    this.n2s_1 = this.d2s_1.isTrusted;
    this.o2s_1 = 0;
  }
  protoOf(SyntheticEvent).p2s = function () {
    return this.d2s_1.preventDefault();
  };
  protoOf(SyntheticEvent).q2s = function () {
    return this.d2s_1.stopPropagation();
  };
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.d2t_1 = nativeEvent;
    this.e2t_1 = nativeEvent.altKey;
    this.f2t_1 = nativeEvent.button;
    this.g2t_1 = nativeEvent.buttons;
    this.h2t_1 = nativeEvent.clientX;
    this.i2t_1 = nativeEvent.clientY;
    this.j2t_1 = nativeEvent.ctrlKey;
    this.k2t_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.l2t_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.m2t_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.n2t_1 = nativeEvent.offsetX;
    this.o2t_1 = nativeEvent.offsetY;
    this.p2t_1 = nativeEvent.pageX;
    this.q2t_1 = nativeEvent.pageY;
    this.r2t_1 = nativeEvent.region;
    this.s2t_1 = nativeEvent.relatedTarget;
    this.t2t_1 = nativeEvent.screenX;
    this.u2t_1 = nativeEvent.screenY;
    this.v2t_1 = nativeEvent.shiftKey;
    this.w2t_1 = nativeEvent.x;
    this.x2t_1 = nativeEvent.y;
    this.y2t_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).d2m = id;
  protoOf(AttrsScopeBuilder).e2m = tabIndex;
  protoOf(EventsListenerScopeBuilder).g2m = onClick;
  protoOf(EventsListenerScopeBuilder).h2m = onMouseEnter;
  protoOf(EventsListenerScopeBuilder).i2m = onMouseLeave;
  protoOf(EventsListenerScopeBuilder).j2m = onAnimationEnd;
  protoOf(StyleScopeBuilder).t2o = property;
  protoOf(StyleScopeBuilder).u2o = property_0;
  protoOf(StyleScopeBuilder).z2o = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.p2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.g2p();
  });
  protoOf(StyleSheet).t2p = style_0;
  protoOf(StyleSheet).v2p = style;
  protoOf(StyleSheet).w2p = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).x2p = get_hover;
  protoOf(CSSRulesHolderState).r2p = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = StyleSheet_init_$Init$;
  _.$_$.c = StyleSheet_init_$Create$;
  _.$_$.d = Companion_instance_8;
  _.$_$.e = Companion_instance_5;
  _.$_$.f = Companion_instance_9;
  _.$_$.g = Companion_instance_0;
  _.$_$.h = Companion_instance_1;
  _.$_$.i = Companion_instance;
  _.$_$.j = From_getInstance;
  _.$_$.k = To_getInstance;
  _.$_$.l = Companion_instance_2;
  _.$_$.m = Companion_instance_6;
  _.$_$.n = Companion_instance_7;
  _.$_$.o = Companion_instance_3;
  _.$_$.p = Companion_instance_4;
  _.$_$.q = classes;
  _.$_$.r = id;
  _.$_$.s = tabIndex;
  _.$_$.t = AttrsScope;
  _.$_$.u = onAnimationEnd;
  _.$_$.v = onClick;
  _.$_$.w = onMouseEnter;
  _.$_$.x = onMouseLeave;
  _.$_$.y = type;
  _.$_$.z = CSSBorder;
  _.$_$.a1 = CSSGroupingRuleDeclaration;
  _.$_$.b1 = Percentage;
  _.$_$.c1 = CSSKeyframeRuleDeclaration;
  _.$_$.d1 = CSSKeyframesRuleDeclaration;
  _.$_$.e1 = MediaFeature;
  _.$_$.f1 = Raw;
  _.$_$.g1 = property;
  _.$_$.h1 = property_0;
  _.$_$.i1 = variable;
  _.$_$.j1 = StyleScopeBuilder;
  _.$_$.k1 = StyleScope;
  _.$_$.l1 = StyleSheet;
  _.$_$.m1 = alignContent;
  _.$_$.n1 = alignItems;
  _.$_$.o1 = alignSelf;
  _.$_$.p1 = backgroundColor;
  _.$_$.q1 = backgroundImage;
  _.$_$.r1 = backgroundRepeat;
  _.$_$.s1 = backgroundSize;
  _.$_$.t1 = borderRadius;
  _.$_$.u1 = borderRadius_0;
  _.$_$.v1 = border;
  _.$_$.w1 = bottom;
  _.$_$.x1 = boxSizing;
  _.$_$.y1 = color;
  _.$_$.z1 = color_0;
  _.$_$.a2 = columnGap;
  _.$_$.b2 = get_cssRem;
  _.$_$.c2 = get_deg;
  _.$_$.d2 = display;
  _.$_$.e2 = get_em;
  _.$_$.f2 = flexDirection;
  _.$_$.g2 = flexGrow;
  _.$_$.h2 = flex;
  _.$_$.i2 = fontFamily;
  _.$_$.j2 = fontSize;
  _.$_$.k2 = get_fr;
  _.$_$.l2 = gap_0;
  _.$_$.m2 = gap;
  _.$_$.n2 = gridArea;
  _.$_$.o2 = gridAutoColumns;
  _.$_$.p2 = gridAutoRows;
  _.$_$.q2 = gridTemplateColumns;
  _.$_$.r2 = gridTemplateRows;
  _.$_$.s2 = height;
  _.$_$.t2 = height_0;
  _.$_$.u2 = justifyContent;
  _.$_$.v2 = left;
  _.$_$.w2 = lineHeight_0;
  _.$_$.x2 = lineHeight;
  _.$_$.y2 = margin;
  _.$_$.z2 = maxWidth;
  _.$_$.a3 = media;
  _.$_$.b3 = minHeight;
  _.$_$.c3 = minWidth;
  _.$_$.d3 = get_ms;
  _.$_$.e3 = opacity;
  _.$_$.f3 = padding;
  _.$_$.g3 = get_percent;
  _.$_$.h3 = position;
  _.$_$.i3 = get_px;
  _.$_$.j3 = right;
  _.$_$.k3 = rowGap;
  _.$_$.l3 = get_s;
  _.$_$.m3 = style_1;
  _.$_$.n3 = top;
  _.$_$.o3 = transform;
  _.$_$.p3 = unaryMinus;
  _.$_$.q3 = get_vh;
  _.$_$.r3 = width_0;
  _.$_$.s3 = width;
  _.$_$.t3 = width_1;
  _.$_$.u3 = A_0;
  _.$_$.v3 = Br_0;
  _.$_$.w3 = Button_0;
  _.$_$.x3 = Div_0;
  _.$_$.y3 = ElementBuilder;
  _.$_$.z3 = Header_0;
  _.$_$.a4 = Img_0;
  _.$_$.b4 = P_0;
  _.$_$.c4 = Span_0;
  _.$_$.d4 = Style_0;
  _.$_$.e4 = TagElement;
  _.$_$.f4 = Text_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
