(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z6;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var equals = kotlin_kotlin.$_$.f6;
  var hashCode = kotlin_kotlin.$_$.m6;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var classMeta = kotlin_kotlin.$_$.c6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var VOID = kotlin_kotlin.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.c7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var joinToString = kotlin_kotlin.$_$.u3;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var joinToString_0 = kotlin_kotlin.$_$.v3;
  var reversed = kotlin_kotlin.$_$.p4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var Collection = kotlin_kotlin.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.r6;
  var backgroundRepeat = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var backgroundSize = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var backgroundImage = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var copyToArray = kotlin_kotlin.$_$.h3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var lastOrNull = kotlin_kotlin.$_$.y3;
  var get_lastIndex = kotlin_kotlin.$_$.x3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var listOf = kotlin_kotlin.$_$.b4;
  var emptyList = kotlin_kotlin.$_$.j3;
  var addAll = kotlin_kotlin.$_$.w2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var listOfNotNull = kotlin_kotlin.$_$.a4;
  var isNumber = kotlin_kotlin.$_$.s6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.k8;
  var charSequenceGet = kotlin_kotlin.$_$.a6;
  var isWhitespace = kotlin_kotlin.$_$.g8;
  var interfaceMeta = kotlin_kotlin.$_$.o6;
  var checkCountOverflow = kotlin_kotlin.$_$.a3;
  var checkIndexOverflow = kotlin_kotlin.$_$.b3;
  var getOrNull = kotlin_kotlin.$_$.r3;
  var toList = kotlin_kotlin.$_$.y4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var to = kotlin_kotlin.$_$.ha;
  var lazy = kotlin_kotlin.$_$.z9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var KProperty1 = kotlin_kotlin.$_$.l7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var Enum = kotlin_kotlin.$_$.i9;
  var toString_0 = kotlin_kotlin.$_$.v1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(TransitionEventListener, 'TransitionEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(JustifyContent, 'JustifyContent', classMeta);
  setMetadataFor(JustifyContentKeyword, 'JustifyContentKeyword', classMeta, JustifyContent);
  setMetadataFor(JustifyContentPosition, 'JustifyContentPosition', classMeta, JustifyContent);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(CSSAnimation, 'CSSAnimation', classMeta);
  setMetadataFor(BackgroundRepeat, 'BackgroundRepeat', classMeta);
  setMetadataFor(RepeatStyle, 'RepeatStyle', classMeta, BackgroundRepeat);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BackgroundSize, 'BackgroundSize', classMeta);
  setMetadataFor(Keyword, 'Keyword', classMeta, BackgroundSize);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(BoxShadow, 'BoxShadow', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, BoxShadow);
  setMetadataFor(Repeatable, 'Repeatable', classMeta, BoxShadow);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(CSSPosition, 'CSSPosition', classMeta, VOID, VOID, CSSPosition_init_$Create$);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Appearance, 'Appearance', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword_1, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(MixBlendMode, 'MixBlendMode', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(Keyword_2, 'Keyword', classMeta, Transition);
  setMetadataFor(Repeatable_0, 'Repeatable', classMeta, Transition);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Name, 'Name', classMeta, TransitionProperty);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(CSSFilter, 'CSSFilter', classMeta);
  setMetadataFor(Shape, 'Shape', classMeta);
  setMetadataFor(Circle, 'Circle', classMeta, Shape, VOID, Circle_init_$Create$);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(RadialGradient, 'RadialGradient', classMeta);
  setMetadataFor(ByShape, 'ByShape', classMeta, RadialGradient);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Stop, 'Stop', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta, VOID, VOID, ColorStopsBuilder);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta);
  setMetadataFor(ByAngle, 'ByAngle', classMeta, LinearGradient);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(SVGElementAttrsScope, 'SVGElementAttrsScope', classMeta, VOID, [AttrsScope]);
  function stroke(value) {
    return this.w2l('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.w2l('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.w2l('stroke-linejoin', value.toString());
  }
  function strokeWidth(value) {
    return this.w2l('stroke-width', toString(value));
  }
  function fill(value) {
    return this.w2l('fill', value.toString());
  }
  function fillRule(value) {
    return this.w2l('fill-rule', value.toString());
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.w2l('x', toString(value));
  }
  function y(value) {
    this.w2l('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.w2l('height', toString(value));
  }
  function width_0(value) {
    this.w2l('width', toString(value));
  }
  function width_1(value) {
    this.w2l('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.w2l('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGFillRule, 'SVGFillRule', classMeta, Enum);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.w2l('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  function cx(value) {
    this.w2l('cx', toString(value));
  }
  function cy(value) {
    this.w2l('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticTransitionEvent, 'SyntheticTransitionEvent', classMeta, SyntheticEvent);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.z2t_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a2u_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.b2u_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.c2u_1 = LinkedHashSet_init_$Create$();
    this.d2u_1 = null;
  }
  protoOf(ComparableAttrsScope).w2l = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.a2u_1.m2(attr, value);
    this.z2t_1.w2l(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).b2m = function (classes) {
    this.b2u_1.c1(classes);
  };
  protoOf(ComparableAttrsScope).f2m = function (listener) {
    this.c2u_1.w(listener);
    this.z2t_1.f2m(listener);
  };
  protoOf(ComparableAttrsScope).a2m = function (builder) {
    var tmp0_elvis_lhs = this.d2u_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.d2u_1 = style;
    this.z2t_1.a2m(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.a2u_1, this.a2u_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.b2u_1, this.b2u_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.c2u_1, this.c2u_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.d2u_1, this.d2u_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.a2u_1);
    result = imul(31, result) + hashCode(this.b2u_1) | 0;
    result = imul(31, result) + hashCode(this.c2u_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.d2u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).w2l = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).b2m = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).f2m = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).a2m = function (builder) {
    return Unit_instance;
  };
  function TransitionEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(TransitionEventListener).fh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.i2u_1(new SyntheticTransitionEvent(event, event));
  };
  protoOf(TransitionEventListener).handleEvent = function (event) {
    return this.fh(event);
  };
  function SyntheticEventListener(event, listener) {
    this.h2u_1 = event;
    this.i2u_1 = listener;
    this.j2u_1 = this.h2u_1;
  }
  protoOf(SyntheticEventListener).o25 = function () {
    return this.j2u_1;
  };
  protoOf(SyntheticEventListener).fh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.i2u_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.fh(event);
  };
  function onTransitionEnd(_this__u8e3s4, listener) {
    var evtListener = new TransitionEventListener('transitionend', listener);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.f2m(evtListener);
  }
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.w2l('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.w2l('aria-disabled', value.toString());
  }
  function JustifyContentKeyword(value) {
    JustifyContent.call(this, value);
  }
  function JustifyContentPosition(value) {
    JustifyContent.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).k2u = function () {
    return new JustifyContentPosition('center');
  };
  protoOf(Companion).l2u = function () {
    return new JustifyContentKeyword('space-between');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyContent(value) {
    this.m2u_1 = value;
  }
  protoOf(JustifyContent).toString = function () {
    return this.m2u_1;
  };
  function justifyContent(_this__u8e3s4, justifyContent) {
    _this__u8e3s4.y2o('justify-content', justifyContent);
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.y2o('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).k2u = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion_0).n2u = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion_0).o2u = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifyItems(value) {
    this.p2u_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.p2u_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.y2o('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).k2u = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_1).n2u = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_1).o2u = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JustifySelf(value) {
    this.q2u_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.q2u_1;
  };
  function _get_count__iw3m8u($this) {
    return $this;
  }
  function AnimationIterationCount__toString_impl_5t3trp($this) {
    var tmp0_safe_receiver = _get_count__iw3m8u($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'infinite' : tmp1_elvis_lhs;
  }
  function AnimationIterationCount__hashCode_impl_rk9qkk($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.r2u_1 = name;
    this.s2u_1 = duration;
    this.t2u_1 = timingFunction;
    this.u2u_1 = delay;
    this.v2u_1 = iterationCount;
    this.w2u_1 = direction;
    this.x2u_1 = fillMode;
    this.y2u_1 = playState;
  }
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.s2u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.t2u_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp1_safe_receiver));
    }
    if (!(this.u2u_1 == null)) {
      if (this.s2u_1 == null) {
        this_0.w('0s');
      }
      this_0.w(toString(this.u2u_1));
    }
    var tmp2_safe_receiver = this.v2u_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.z2u_1;
      this_0.w(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.w2u_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.x2u_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.y2u_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp5_safe_receiver));
    }
    this_0.w(this.r2u_1);
    var tmp$ret$14 = this_0.c3();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.r2u_1);
    result = imul(result, 31) + (this.s2u_1 == null ? 0 : hashCode(this.s2u_1)) | 0;
    result = imul(result, 31) + (this.t2u_1 == null ? 0 : hashCode(this.t2u_1)) | 0;
    result = imul(result, 31) + (this.u2u_1 == null ? 0 : hashCode(this.u2u_1)) | 0;
    result = imul(result, 31) + (this.v2u_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.v2u_1.z2u_1)) | 0;
    result = imul(result, 31) + (this.w2u_1 == null ? 0 : hashCode(this.w2u_1)) | 0;
    result = imul(result, 31) + (this.x2u_1 == null ? 0 : hashCode(this.x2u_1)) | 0;
    result = imul(result, 31) + (this.y2u_1 == null ? 0 : hashCode(this.y2u_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.r2u_1 === tmp0_other_with_cast.r2u_1))
      return false;
    if (!equals(this.s2u_1, tmp0_other_with_cast.s2u_1))
      return false;
    if (!equals(this.t2u_1, tmp0_other_with_cast.t2u_1))
      return false;
    if (!equals(this.u2u_1, tmp0_other_with_cast.u2u_1))
      return false;
    if (!equals(this.v2u_1, tmp0_other_with_cast.v2u_1))
      return false;
    if (!equals(this.w2u_1, tmp0_other_with_cast.w2u_1))
      return false;
    if (!equals(this.x2u_1, tmp0_other_with_cast.x2u_1))
      return false;
    if (!equals(this.y2u_1, tmp0_other_with_cast.y2u_1))
      return false;
    return true;
  };
  function animation(_this__u8e3s4, animations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(animations.length === 0)) {
      _this__u8e3s4.t2o('animation', joinToString_0(animations, ', '));
    }
  }
  function RepeatStyle(value) {
    BackgroundRepeat.call(this, value);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).a2v = function () {
    return new RepeatStyle('no-repeat');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function BackgroundRepeat(value) {
    this.b2v_1 = value;
  }
  protoOf(BackgroundRepeat).toString = function () {
    return this.b2v_1;
  };
  function Keyword(value) {
    BackgroundSize.call(this, value);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).c2v = function () {
    return new Keyword('cover');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function BackgroundSize(value) {
    this.d2v_1 = value;
  }
  protoOf(BackgroundSize).toString = function () {
    return this.d2v_1;
  };
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return backgroundImage_1(_this__u8e3s4, Companion_instance_27.e2v(gradient));
  }
  function background(_this__u8e3s4, color, backgrounds) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (backgrounds.length === 0)
      return Unit_instance;
    var backgrounds_0 = reversed(backgrounds);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    this_0.v5(joinToString(backgrounds_0, ', '));
    if (!(color == null)) {
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        this_0.w5(_Char___init__impl__6a9atx(32));
      }
      this_0.u5(color);
    }
    var tmp$ret$3 = this_0.toString();
    _this__u8e3s4.t2o('background', tmp$ret$3);
    var defaultBlendMode = Companion_instance_17.f2v();
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(backgrounds_0, 10));
    var tmp0_iterator = backgrounds_0.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
      var tmp0_elvis_lhs = item.l2v_1;
      var tmp$ret$4 = tmp0_elvis_lhs == null ? defaultBlendMode : tmp0_elvis_lhs;
      destination.w(tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(destination, Collection)) {
        tmp_0 = destination.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var tmp0_iterator_0 = destination.l();
      while (tmp0_iterator_0.z()) {
        var element = tmp0_iterator_0.b1();
        // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>.<anonymous>' call
        if (!(element.toString() === defaultBlendMode.toString())) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp = destination;
    } else {
      tmp = null;
    }
    var blendModes = tmp;
    if (!(blendModes == null)) {
      _this__u8e3s4.t2o('background-blend-mode', joinToString(blendModes));
    }
  }
  function backgroundRepeat_0(_this__u8e3s4, backgroundRepeat_0) {
    backgroundRepeat(_this__u8e3s4, backgroundRepeat_0.toString());
  }
  function backgroundSize_0(_this__u8e3s4, backgroundSize_0) {
    backgroundSize(_this__u8e3s4, backgroundSize_0.toString());
  }
  function backgroundImage_1(_this__u8e3s4, backgroundImage_0) {
    backgroundImage(_this__u8e3s4, backgroundImage_0.toString());
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.y2o('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2o('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.y2o('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.y2o('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.y2o('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.y2o('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_4() {
  }
  protoOf(Companion_4).p2v = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function BoxSizing(value) {
    this.q2v_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.q2v_1;
  };
  function Keyword_0(value) {
    BoxShadow.call(this, value);
  }
  function Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    if (inset) {
      this_0.v5('inset');
      this_0.w5(_Char___init__impl__6a9atx(32));
    }
    this_0.u5(offsetX);
    this_0.w5(_Char___init__impl__6a9atx(32));
    this_0.u5(offsetY);
    if (!(blurRadius == null)) {
      this_0.w5(_Char___init__impl__6a9atx(32));
      this_0.u5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.w5(_Char___init__impl__6a9atx(32));
        this_0.w5(_Char___init__impl__6a9atx(48));
      }
      this_0.w5(_Char___init__impl__6a9atx(32));
      this_0.u5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.w5(_Char___init__impl__6a9atx(32));
      this_0.u5(color);
    }
    var tmp$ret$1 = this_0.toString();
    BoxShadow.call(this, tmp$ret$1);
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.r2v_1 = new Keyword_0('none');
    this.s2v_1 = new Keyword_0('inherit');
    this.t2v_1 = new Keyword_0('initial');
    this.u2v_1 = new Keyword_0('revert');
    this.v2v_1 = new Keyword_0('unset');
  }
  protoOf(Companion_5).w2v = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    return new Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function BoxShadow(value) {
    Companion_getInstance_6();
    this.x2v_1 = value;
  }
  protoOf(BoxShadow).toString = function () {
    return this.x2v_1;
  };
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow(_this__u8e3s4, boxShadows) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(boxShadows.length === 0)) {
      boxShadow_0(_this__u8e3s4, joinToString_0(boxShadows, VOID, VOID, VOID, VOID, VOID, BoxShadow$toString$ref()));
    }
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('box-shadow', value);
  }
  function BoxShadow$toString$ref() {
    var l = function (p0) {
      return p0.toString();
    };
    l.callableName = 'toString';
    return l;
  }
  function CSSPosition_init_$Init$(x, y, $this) {
    x = x === VOID ? get_percent(50) : x;
    y = y === VOID ? get_percent(50) : y;
    CSSPosition.call($this, '' + x + ' ' + y);
    return $this;
  }
  function CSSPosition_init_$Create$(x, y) {
    return CSSPosition_init_$Init$(x, y, objectCreate(protoOf(CSSPosition)));
  }
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function CSSPosition(value) {
    this.y2v_1 = value;
  }
  protoOf(CSSPosition).toString = function () {
    return this.y2v_1;
  };
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z2v_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.a2w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).y2o = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.z2v_1;
    var value_0 = toString(value);
    this_0.m2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).a2p = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.a2w_1;
    var value_0 = toString(value);
    this_0.m2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.z2v_1, other.z2v_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.a2w_1, other.a2w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.z2v_1);
    result = imul(31, result) + hashCode(this.a2w_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.z2v_1.q()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.a2w_1.q();
    }
    return tmp;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).b2w = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_7).c2w = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function Cursor(value) {
    this.d2w_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.d2w_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.y2o('cursor', cursor);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).e2w = function () {
    return new Appearance('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Appearance(value) {
    this.f2w_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.f2w_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.y2o('appearance', appearance);
  }
  function Companion_9() {
  }
  protoOf(Companion_9).g2w = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_9).h2w = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_9).f2v = function () {
    return new FontWeight('normal');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function FontWeight(value) {
    this.i2w_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.i2w_1;
  };
  function Companion_10() {
  }
  protoOf(Companion_10).f2v = function () {
    return new FontStyle('normal');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function FontStyle(value) {
    this.j2w_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return this.j2w_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.y2o('font-weight', weight);
  }
  function fontStyle(_this__u8e3s4, style) {
    _this__u8e3s4.y2o('font-style', style);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).l2w = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.m2w_1;
    var repeatTracks = copyToArray(this_1);
    this.m2w_1.w(Companion_instance_13.n2w(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2w_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).o2w = function (track) {
    this.m2w_1.w(track);
  };
  protoOf(GridTrackBuilderInRepeat).p2w = function (value) {
    return this.o2w(Companion_instance_12.s2w(value));
  };
  protoOf(GridTrackBuilderInRepeat).q2w = function (min, max) {
    return this.o2w(Companion_instance_12.t2w(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).r2w = function (min, max) {
    return this.q2w(Companion_instance_12.u2w(min), Companion_instance_12.s2w(max));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.m2w_1));
  }
  function gridAutoRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridAutoRows(_this__u8e3s4, toTrackListString(this_0.m2w_1));
  }
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.w2w_1 = min;
    this.x2w_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword_1() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_11() {
  }
  protoOf(Companion_11).u2w = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_11).s2w = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_11).t2w = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.z2w_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.b2x_1 = names;
  }
  function Companion_12() {
  }
  protoOf(Companion_12).n2w = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function GridEntry(value) {
    this.c2x_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.c2x_1;
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function toTrackListString_0(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.b2x_1;
        var elements = element.b2x_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.t(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.w(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.z2w_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.w(element_0);
              }
            }
            var tmp_0;
            if (destination_0.q()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.q()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.l();
    while (tmp0_iterator.z()) {
      var element_2 = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword_1) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.w2w_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.x2w_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              }
            }
          }
        }
      }
    }
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.g2x(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.d2x_1 = null;
    this.e2x_1 = null;
    this.f2x_1 = null;
  }
  protoOf(GridBuilderInAuto).h2x = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.d2x_1 = this_0.m2w_1;
  };
  protoOf(GridBuilderInAuto).i2x = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.e2x_1 = this_0.m2w_1;
  };
  protoOf(GridBuilderInAuto).g2x = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.d2x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.e2x_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.f2x_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.d2x_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.e2x_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    var rules = this_0.q2p();
    _this__u8e3s4.f2o(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.j2x_1 = name;
    this.k2x_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).j2o = function () {
    return this.k2x_1;
  };
  protoOf(CSSLayerRuleDeclaration).v2n = function () {
    return '@layer ' + this.j2x_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = this.j2x_1 === other.j2x_1 ? equals(this.k2x_1, other.k2x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).l2x = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function VerticalAlign(value) {
    this.m2x_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.m2x_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.y2o('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.t2o('padding-inline', joinToString_0(value, ' '));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.u2o('z-index', value);
  }
  function Companion_14() {
  }
  protoOf(Companion_14).e2w = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function ListStyleType(value) {
    this.n2x_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.n2x_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.y2o('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.y2o('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.y2o('list-style-image', image);
    }
  }
  function Companion_15() {
  }
  protoOf(Companion_15).o2x = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function ObjectFit(value) {
    this.p2x_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.p2x_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.y2o('object-fit', objectFit);
  }
  function Companion_16() {
  }
  protoOf(Companion_16).f2v = function () {
    return new MixBlendMode('normal');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function MixBlendMode(value) {
    this.q2x_1 = value;
  }
  protoOf(MixBlendMode).toString = function () {
    return this.q2x_1;
  };
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.y2o('outline', this_0);
  }
  function CSSOutline() {
    this.r2x_1 = null;
    this.s2x_1 = null;
    this.t2x_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.r2x_1, other.r2x_1) ? equals(this.s2x_1, other.s2x_1) : false) ? equals(this.t2x_1, other.t2x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.t2x_1, this.s2x_1, this.r2x_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.r2x_1 = $width;
      $this$outline.s2x_1 = $style;
      $this$outline.t2x_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_17() {
  }
  protoOf(Companion_17).u2x = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_17).v2x = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_17).w2x = function () {
    return new Overflow('auto');
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function Overflow(value) {
    this.x2x_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.x2x_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.y2o('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.y2o('overflow', overflow);
  }
  function Companion_18() {
  }
  protoOf(Companion_18).y2x = function () {
    return new ScrollBehavior('smooth');
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function ScrollBehavior(value) {
    this.z2x_1 = value;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.z2x_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.y2o('scroll-behavior', scrollBehavior);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).c2y = function (fallback) {
    return this.f2y(fallback);
  };
  protoOf(PropertyValue).g2y = function (fallback) {
    return this.c2y((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).k2y = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.f2y(tmp);
  };
  protoOf(NumberValue).g2y = function (fallback) {
    return this.k2y((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.d2y_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.e2y_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).h2y = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.g2y(fallback) : $super.g2y.call(this, fallback);
  };
  protoOf(StyleVariable).f2y = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.d2y_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.e2y_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.l2y_1 = defaultFallback;
    this.m2y_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).n2y = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.l2y_1, this.m2y_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.o2y_1 = defaultFallback;
    this.p2y_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).n2y = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.o2y_1, this.p2y_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.y2o('--' + variable.e2y_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.v5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).x6())), '-vars'), '-variables'));
      this_0.w5(_Char___init__impl__6a9atx(45));
    }
    this_0.v5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.u2o('--' + variable.e2y_1, value);
  }
  function Companion_19() {
  }
  protoOf(Companion_19).e2w = function () {
    return new UserSelect('none');
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function UserSelect(value) {
    this.q2y_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.q2y_1;
  };
  function Companion_20() {
  }
  protoOf(Companion_20).r2y = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_20).s2y = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    return Companion_instance_21;
  }
  function WhiteSpace(value) {
    this.t2y_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.t2y_1;
  };
  function Companion_21() {
  }
  protoOf(Companion_21).k2u = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_21).n2u = function () {
    return new TextAlign('start');
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function TextAlign(value) {
    this.u2y_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.u2y_1;
  };
  function Companion_22() {
  }
  protoOf(Companion_22).v2y = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_22).e2w = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function TextDecorationLine(value) {
    this.w2y_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.w2y_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.y2o('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.y2o('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.y2o('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.t2o('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.y2o('translate', tx);
  }
  function scale(_this__u8e3s4, s) {
    _this__u8e3s4.u2o('scale', s);
  }
  function Keyword_2(value) {
    Transition.call(this, value);
  }
  function Repeatable_0(property, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    this_0.w(property.toString());
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.w(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.w(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.w('0s');
      }
      this_0.w(toString(delay));
    }
    var tmp$ret$6 = this_0.c3();
    Transition.call(this, joinToString(tmp$ret$6, ' '));
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.x2y_1 = new Keyword_2('none');
    this.y2y_1 = new Keyword_2('inherit');
    this.z2y_1 = new Keyword_2('initial');
    this.a2z_1 = new Keyword_2('revert');
    this.b2z_1 = new Keyword_2('unset');
  }
  protoOf(Companion_23).c2z = function (property, duration, timingFunction, delay) {
    return new Repeatable_0(Companion_instance_26.d2z(property), duration, timingFunction, delay);
  };
  protoOf(Companion_23).e2z = function (property, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.c2z(property, duration, timingFunction, delay) : $super.c2z.call(this, property, duration, timingFunction, delay);
  };
  protoOf(Companion_23).f2z = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = Companion_getInstance_24().c2z(item, duration, timingFunction, delay);
      destination.w(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_23).g2z = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.f2z(properties, duration, timingFunction, delay) : $super.f2z.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function Transition(value) {
    Companion_getInstance_24();
    this.h2z_1 = value;
  }
  protoOf(Transition).toString = function () {
    return this.h2z_1;
  };
  function Companion_24() {
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_26.d2z(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.i2z_1 = property;
    this.j2z_1 = duration;
    this.k2z_1 = timingFunction;
    this.l2z_1 = delay;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.w(this.i2z_1.toString());
    var tmp0_safe_receiver = this.j2z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.k2z_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.w(toString(tmp1_safe_receiver));
    }
    if (!(this.l2z_1 == null)) {
      if (this.j2z_1 == null) {
        this_0.w('0s');
      }
      this_0.w(toString(this.l2z_1));
    }
    var tmp$ret$6 = this_0.c3();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.i2z_1);
    result = imul(result, 31) + (this.j2z_1 == null ? 0 : hashCode(this.j2z_1)) | 0;
    result = imul(result, 31) + (this.k2z_1 == null ? 0 : hashCode(this.k2z_1)) | 0;
    result = imul(result, 31) + (this.l2z_1 == null ? 0 : hashCode(this.l2z_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.i2z_1, tmp0_other_with_cast.i2z_1))
      return false;
    if (!equals(this.j2z_1, tmp0_other_with_cast.j2z_1))
      return false;
    if (!equals(this.k2z_1, tmp0_other_with_cast.k2z_1))
      return false;
    if (!equals(this.l2z_1, tmp0_other_with_cast.l2z_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.t2o('transition', joinToString_0(transitions));
    }
  }
  function transition_0(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.t2o('transition', joinToString_0(transitions));
    }
  }
  function Name(value) {
    TransitionProperty.call(this, value);
  }
  function Companion_25() {
  }
  protoOf(Companion_25).d2z = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Name(customValue);
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function TransitionProperty(value) {
    this.m2z_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.m2z_1;
  };
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_26() {
  }
  protoOf(Companion_26).e2v = function (gradient) {
    return new Gradient(gradient);
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  function CSSImage(value) {
    this.n2z_1 = value;
  }
  protoOf(CSSImage).toString = function () {
    return this.n2z_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  function CSSFilter(value) {
    this.p2z_1 = value;
  }
  protoOf(CSSFilter).toString = function () {
    return this.p2z_1;
  };
  function saturate(amount) {
    return new CSSFilter('saturate(' + amount + ')');
  }
  function blur(radius) {
    return new CSSFilter('blur(' + radius + ')');
  }
  function Circle_init_$Init$($this) {
    Circle.call($this, '');
    return $this;
  }
  function Circle_init_$Create$() {
    return Circle_init_$Init$(objectCreate(protoOf(Circle)));
  }
  function Circle(args) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.Circle.<init>.<anonymous>' call
    this_0.v5('circle');
    this_0.v5(args);
    var tmp$ret$1 = this_0.toString();
    Shape.call(this, tmp$ret$1);
  }
  function Companion_27() {
  }
  protoOf(Companion_27).q2z = function () {
    return Circle_init_$Create$();
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function Shape(value) {
    this.r2z_1 = value;
  }
  protoOf(Shape).toString = function () {
    return this.r2z_1;
  };
  function ByShape(shape, position, entries) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.ByShape.<init>.<anonymous>' call
    this_0.v5(shape.toString());
    if (!(position == null)) {
      this_0.v5(' at ' + position);
    }
    this_0.v5(', ');
    this_0.v5(joinToString_0(entries));
    var tmp$ret$1 = this_0.toString();
    RadialGradient.call(this, tmp$ret$1);
  }
  function RadialGradient(gradientStr) {
    this.s2z_1 = gradientStr;
  }
  protoOf(RadialGradient).toString = function () {
    return 'radial-gradient(' + this.s2z_1 + ')';
  };
  function radialGradient(shape, position, init) {
    position = position === VOID ? null : position;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.radialGradient.<anonymous>' call
    return new ByShape(shape, position, this_0.u2z().slice());
  }
  function Simple(value) {
    Color.call(this, '' + value);
  }
  function Stop(color, stop) {
    Color.call(this, '' + color + ' ' + stop);
  }
  function Color(value) {
    Entry.call(this, value);
    this.w2z_1 = value;
  }
  function Hint() {
  }
  function Entry(entryStr) {
    this.x2z_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.x2z_1;
  };
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2z_1 = ArrayList_init_$Create$();
  }
  protoOf(ColorStopsBuilder).u2z = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = this.t2z_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        if (element instanceof Color) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$0 >= 2)) {
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator_0 = this.t2z_1.l();
    while (tmp0_iterator_0.z()) {
      var item = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.t2z_1, i - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.t2z_1, i + 1 | 0);
          tmp_0 = tmp_2 instanceof Color;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp_0) {
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.t2z_1;
    return copyToArray(this_1);
  };
  protoOf(ColorStopsBuilder).y2z = function (color) {
    return this.t2z_1.w(new Simple(color));
  };
  protoOf(ColorStopsBuilder).z2z = function (color, stop) {
    return this.t2z_1.w(new Stop(color, stop));
  };
  function ByAngle(angle, entries) {
    LinearGradient.call(this, '' + angle + ', ' + joinToString_0(entries));
  }
  function LinearGradient(gradientStr) {
    this.a30_1 = gradientStr;
  }
  protoOf(LinearGradient).toString = function () {
    return 'linear-gradient(' + this.a30_1 + ')';
  };
  function linearGradient(angle, init) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.linearGradient.<anonymous>' call
    return new ByAngle(angle, this_0.u2z().slice());
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).yl = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple_0(handle) {
    RefCallback.call(this);
    this.b30_1 = handle;
  }
  protoOf(Simple_0).c30 = function (scope, element) {
    this.b30_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.d30_1 = effect;
  }
  protoOf(Disposable).c30 = function (scope, element) {
    return this.d30_1(scope, element);
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.e30_1 = keys;
    this.f30_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.e30_1 + ', refCallback=' + this.f30_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.e30_1);
    result = imul(result, 31) + hashCode(this.f30_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.e30_1, tmp0_other_with_cast.e30_1))
      return false;
    if (!equals(this.f30_1, tmp0_other_with_cast.f30_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g30_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).h30 = function (keys, handle) {
    this.g30_1.w(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).i30 = function (keys, effect) {
    this.g30_1.w(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).j30 = function (other) {
    if (!(other == null)) {
      this.g30_1.c1(other.k30_1);
    }
  };
  protoOf(Builder).c3 = function () {
    return new ElementRefScope(this.g30_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.k30_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.k30_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.k30_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.k30_1, tmp0_other_with_cast.k30_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.s1n(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.t1n();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.k30_1.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.e30_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.c3();
  }
  function disposableRef(keys, effect) {
    return refScope(disposableRef$lambda(keys, effect));
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.f30_1.c30($this$DisposableEffect, $transform($this_registerRefScope.h2r($this$DisposableEffect)));
    };
  }
  function disposableRef$lambda($keys, $effect) {
    return function ($this$refScope) {
      $this$refScope.i30($keys.slice(), $effect);
      return Unit_instance;
    };
  }
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-5556169);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-5556169, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag (GenericTag.kt:125)');
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        tmp = Companion_getInstance_29().m30(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_30().o30(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 8 | 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver_0 = $composer_0.n1p();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.k1u(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_28() {
    Companion_instance_29 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l30_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_28).m30 = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.l30_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.v2(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.m2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.r30_1;
    element$factory();
    return this_0.p2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.p30_1, this$0.q30_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_29();
    this.p30_1 = namespace;
    this.q30_1 = qualifiedName;
    var tmp = this;
    tmp.r30_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).d23 = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_29() {
    Companion_instance_30 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n30_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_29).o30 = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.n30_1;
    var value = this_0.v2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.m2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.t30_1;
    element$factory_0();
    return this_0.p2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.s30_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_30();
    this.s30_1 = name;
    var tmp = this;
    tmp.t30_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).d23 = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h_0(receiver);
    }, null);
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).u30 = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(275418487);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(275418487, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path (Svg.kt:1098)');
      }
      var tmp = Companion_instance_32.b31(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.k1u(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_31() {
  }
  protoOf(Companion_31).b31 = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).d31 = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.w2l('d', joinToString(this_0.e31_1, ' '));
  };
  protoOf(SVGPathAttrsScope).f31 = function (value) {
    this.w2l('d', value);
  };
  var SVGFillRule_NonZero_instance;
  var SVGFillRule_EvenOdd_instance;
  var SVGFillRule_entriesInitialized;
  function SVGFillRule_initEntries() {
    if (SVGFillRule_entriesInitialized)
      return Unit_instance;
    SVGFillRule_entriesInitialized = true;
    SVGFillRule_NonZero_instance = new SVGFillRule('NonZero', 0);
    SVGFillRule_EvenOdd_instance = new SVGFillRule('EvenOdd', 1);
  }
  function SVGFillRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillRule).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function CoordinateAttrs() {
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e31_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).n31 = function (x, y) {
    this.e31_1.w('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).o31 = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.e31_1.w(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).p31 = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.o31(x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.o31.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).q31 = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.e31_1.w(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).r31 = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.q31(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.q31.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).s31 = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.e31_1.w(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).t31 = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.s31(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.s31.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).u31 = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.e31_1.w(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).v31 = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.u31(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.u31.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).w31 = function () {
    this.e31_1.w('Z');
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.x9_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.toSvgValue.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charSequenceGet(this_0, 0);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      var tmp_0 = toString(tmp$ret$4);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + this_0.substring(1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function Companion_32() {
  }
  protoOf(Companion_32).x31 = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_32).y31 = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.x31(width, height) : $super.x31.call(this, width, height);
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  function ViewBox(x, y, width, height) {
    this.z31_1 = x;
    this.a32_1 = y;
    this.b32_1 = width;
    this.c32_1 = height;
  }
  function SVGElementAttrsScope(attrs) {
    this.v30_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).w2l = function (attr, value) {
    return this.v30_1.w2l(attr, value);
  };
  protoOf(SVGElementAttrsScope).c2m = function (classes) {
    this.v30_1.c2m(classes);
  };
  protoOf(SVGElementAttrsScope).b2m = function (classes) {
    this.v30_1.b2m(classes);
  };
  protoOf(SVGElementAttrsScope).d2m = function (value) {
    return this.v30_1.d2m(value);
  };
  protoOf(SVGElementAttrsScope).j2m = function (listener) {
    this.v30_1.j2m(listener);
  };
  protoOf(SVGElementAttrsScope).g2m = function (listener) {
    this.v30_1.g2m(listener);
  };
  protoOf(SVGElementAttrsScope).h2m = function (listener) {
    this.v30_1.h2m(listener);
  };
  protoOf(SVGElementAttrsScope).i2m = function (listener) {
    this.v30_1.i2m(listener);
  };
  protoOf(SVGElementAttrsScope).f2m = function (listener) {
    this.v30_1.f2m(listener);
  };
  protoOf(SVGElementAttrsScope).a2m = function (builder) {
    this.v30_1.a2m(builder);
  };
  protoOf(SVGElementAttrsScope).e2m = function (value) {
    return this.v30_1.e2m(value);
  };
  function PresentationAttrs() {
  }
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(302969729);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(302969729, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg (Svg.kt:433)');
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_instance_31.u30(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.k1u(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Polyline(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(741814780);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(741814780, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline (Svg.kt:1161)');
      }
      var tmp = Companion_instance_34.d32(attrs);
      GenericTag('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.k1u(Polyline$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_33() {
  }
  protoOf(Companion_33).d32 = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    return Companion_instance_34;
  }
  function SVGPolylineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function Circle_0(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-2079059220);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-2079059220, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle (Svg.kt:804)');
      }
      var tmp = Companion_instance_35.f32(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.k1u(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_34() {
  }
  protoOf(Companion_34).f32 = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).h32 = function (value) {
    this.w2l('r', toString(value));
  };
  function Line(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-846499000);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-846499000, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line (Svg.kt:979)');
      }
      var tmp = Companion_instance_36.k32(attrs);
      GenericTag('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.k1u(Line$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_35() {
  }
  protoOf(Companion_35).k32 = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_36;
  function Companion_getInstance_36() {
    return Companion_instance_36;
  }
  function SVGLineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGLineAttrsScope).m32 = function (value) {
    this.w2l('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).n32 = function (value) {
    this.w2l('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).o32 = function (value) {
    this.w2l('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).p32 = function (value) {
    this.w2l('y2', toString(value));
  };
  function Rect(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(151044952);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(151044952, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect (Svg.kt:1223)');
      }
      var tmp = Companion_instance_37.q32(attrs);
      GenericTag('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.k1u(Rect$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_36() {
  }
  protoOf(Companion_36).q32 = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_37;
  function Companion_getInstance_37() {
    return Companion_instance_37;
  }
  function SVGRectAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGRectAttrsScope).s32 = function (value) {
    this.w2l('rx', toString(value));
  };
  function Group(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-214649536);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-214649536, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Group (Svg.kt:874)');
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.svg.Group.<anonymous>' call
        tmp = Companion_instance_38.t32(tmp0_safe_receiver);
      }
      GenericTag('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp0_safe_receiver_0 = $composer_0.n1p();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.k1u(Group$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_37() {
  }
  protoOf(Companion_37).t32 = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function SVGGroupAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.je_1) + ',' + toString(it.ke_1);
  }
  function PointsAttrs() {
  }
  function CenterCoordinateAttrs() {
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Polyline$lambda($this_Polyline, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline($this_Polyline, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle_0($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Line$lambda($this_Line, $attrs, $$changed) {
    return function ($composer, $force) {
      Line($this_Line, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Rect$lambda($this_Rect, $attrs, $$changed) {
    return function ($composer, $force) {
      Rect($this_Rect, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Group$lambda($this_Group, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group($this_Group, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGFillRule_EvenOdd_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_EvenOdd_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SyntheticTransitionEvent(nativeEvent, transitionEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.f33_1 = transitionEventDetails.propertyName;
    this.g33_1 = transitionEventDetails.elapsedTime;
    this.h33_1 = transitionEventDetails.pseudoElement;
  }
  function SyntheticEvent(nativeEvent) {
    this.i33_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j33_1 = this.i33_1.target;
    this.k33_1 = this.i33_1.bubbles;
    this.l33_1 = this.i33_1.cancelable;
    this.m33_1 = this.i33_1.composed;
    this.n33_1 = this.i33_1.currentTarget;
    this.o33_1 = this.i33_1.eventPhase;
    this.p33_1 = this.i33_1.defaultPrevented;
    this.q33_1 = this.i33_1.timeStamp;
    this.r33_1 = this.i33_1.type;
    this.s33_1 = this.i33_1.isTrusted;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).c2m = classes;
  protoOf(ComparableAttrsScope).d2m = id;
  protoOf(ComparableAttrsScope).e2m = tabIndex;
  protoOf(ComparableAttrsScope).g2m = onClick;
  protoOf(ComparableAttrsScope).h2m = onMouseEnter;
  protoOf(ComparableAttrsScope).i2m = onMouseLeave;
  protoOf(ComparableAttrsScope).j2m = onAnimationEnd;
  protoOf(DummyAttrsScope).c2m = classes;
  protoOf(DummyAttrsScope).d2m = id;
  protoOf(DummyAttrsScope).e2m = tabIndex;
  protoOf(DummyAttrsScope).g2m = onClick;
  protoOf(DummyAttrsScope).h2m = onMouseEnter;
  protoOf(DummyAttrsScope).i2m = onMouseLeave;
  protoOf(DummyAttrsScope).j2m = onAnimationEnd;
  protoOf(ComparableStyleScope).t2o = property;
  protoOf(ComparableStyleScope).u2o = property_0;
  protoOf(ComparableStyleScope).z2o = variable;
  protoOf(CalcScopeInstance).o2z = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).w30 = stroke;
  protoOf(SVGGraphicalElementAttrsScope).h31 = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).i31 = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).x30 = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).y30 = fill;
  protoOf(SVGGraphicalElementAttrsScope).g31 = fillRule;
  protoOf(SVGSvgAttrsScope).z30 = width_1;
  protoOf(SVGSvgAttrsScope).a31 = viewBox;
  protoOf(SVGPolylineAttrsScope).e32 = points;
  protoOf(SVGCircleAttrsScope).i32 = cx;
  protoOf(SVGCircleAttrsScope).j32 = cy;
  protoOf(SVGRectAttrsScope).j31 = x;
  protoOf(SVGRectAttrsScope).k31 = y;
  protoOf(SVGRectAttrsScope).l31 = height;
  protoOf(SVGRectAttrsScope).m31 = width_0;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
  Companion_instance_21 = new Companion_20();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  CalcScopeInstance_instance = new CalcScopeInstance();
  Companion_instance_28 = new Companion_27();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  Companion_instance_33 = new Companion_32();
  Companion_instance_34 = new Companion_33();
  Companion_instance_35 = new Companion_34();
  Companion_instance_36 = new Companion_35();
  Companion_instance_37 = new Companion_36();
  Companion_instance_38 = new Companion_37();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = onTransitionEnd;
  _.$_$.b = blur;
  _.$_$.c = calc;
  _.$_$.d = linearGradient;
  _.$_$.e = radialGradient;
  _.$_$.f = saturate;
  _.$_$.g = CSSAnimation;
  _.$_$.h = ComparableStyleScope;
  _.$_$.i = NumberValue;
  _.$_$.j = StyleVariable_3;
  _.$_$.k = StyleVariable_2;
  _.$_$.l = StyleVariable_0;
  _.$_$.m = StyleVariable_1;
  _.$_$.n = animation;
  _.$_$.o = appearance;
  _.$_$.p = ariaDisabled;
  _.$_$.q = ariaHidden;
  _.$_$.r = backgroundImage_0;
  _.$_$.s = backgroundRepeat_0;
  _.$_$.t = backgroundSize_0;
  _.$_$.u = background;
  _.$_$.v = borderBottom;
  _.$_$.w = borderColor;
  _.$_$.x = borderLeft;
  _.$_$.y = borderStyle;
  _.$_$.z = borderTop;
  _.$_$.a1 = borderWidth;
  _.$_$.b1 = boxShadow;
  _.$_$.c1 = boxSizing_0;
  _.$_$.d1 = cursor;
  _.$_$.e1 = fontStyle;
  _.$_$.f1 = fontWeight;
  _.$_$.g1 = gridAutoRows_0;
  _.$_$.h1 = gridTemplateColumns_0;
  _.$_$.i1 = grid;
  _.$_$.j1 = isNotEmpty;
  _.$_$.k1 = justifyContent;
  _.$_$.l1 = justifyItems;
  _.$_$.m1 = justifySelf;
  _.$_$.n1 = layer;
  _.$_$.o1 = listStyle;
  _.$_$.p1 = objectFit;
  _.$_$.q1 = outline;
  _.$_$.r1 = overflowY;
  _.$_$.s1 = overflow;
  _.$_$.t1 = paddingInline;
  _.$_$.u1 = scale;
  _.$_$.v1 = scrollBehavior;
  _.$_$.w1 = setVariable;
  _.$_$.x1 = setVariable_0;
  _.$_$.y1 = textAlign;
  _.$_$.z1 = textDecorationLine;
  _.$_$.a2 = transition;
  _.$_$.b2 = transition_0;
  _.$_$.c2 = translateX;
  _.$_$.d2 = translate;
  _.$_$.e2 = userSelect;
  _.$_$.f2 = verticalAlign;
  _.$_$.g2 = whiteSpace;
  _.$_$.h2 = zIndex;
  _.$_$.i2 = Circle_0;
  _.$_$.j2 = Group;
  _.$_$.k2 = Line;
  _.$_$.l2 = Path;
  _.$_$.m2 = Polyline;
  _.$_$.n2 = Rect;
  _.$_$.o2 = Svg;
  _.$_$.p2 = disposableRef;
  _.$_$.q2 = refScope;
  _.$_$.r2 = registerRefScope_0;
  _.$_$.s2 = registerRefScope;
  _.$_$.t2 = SVGFillRule_EvenOdd_getInstance;
  _.$_$.u2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.v2 = SVGFillType_None_getInstance;
  _.$_$.w2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.x2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.y2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.z2 = SVGStrokeType_None_getInstance;
  _.$_$.a3 = ComparableAttrsScope_init_$Create$;
  _.$_$.b3 = CSSPosition_init_$Create$;
  _.$_$.c3 = CSSTransition_init_$Create$;
  _.$_$.d3 = Companion_instance_28;
  _.$_$.e3 = Companion_instance_9;
  _.$_$.f3 = Companion_instance_3;
  _.$_$.g3 = Companion_instance_4;
  _.$_$.h3 = Companion_getInstance_6;
  _.$_$.i3 = Companion_instance_5;
  _.$_$.j3 = Companion_instance_8;
  _.$_$.k3 = Companion_instance_11;
  _.$_$.l3 = Companion_instance_10;
  _.$_$.m3 = Companion_instance_0;
  _.$_$.n3 = Companion_instance_1;
  _.$_$.o3 = Companion_instance_2;
  _.$_$.p3 = Companion_instance_15;
  _.$_$.q3 = Companion_instance_16;
  _.$_$.r3 = Companion_instance_18;
  _.$_$.s3 = Companion_instance_19;
  _.$_$.t3 = Companion_instance_22;
  _.$_$.u3 = Companion_instance_23;
  _.$_$.v3 = Companion_getInstance_24;
  _.$_$.w3 = Companion_instance_20;
  _.$_$.x3 = Companion_instance_14;
  _.$_$.y3 = Companion_instance_21;
  _.$_$.z3 = Companion_instance_33;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
