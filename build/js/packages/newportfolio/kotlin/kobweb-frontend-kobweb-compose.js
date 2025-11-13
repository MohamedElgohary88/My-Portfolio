(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    root['kobweb-frontend-kobweb-compose'] = factory(typeof this['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-compose'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z6;
  var interfaceMeta = kotlin_kotlin.$_$.o6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var VOID = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.c6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var equals = kotlin_kotlin.$_$.f6;
  var hashCode = kotlin_kotlin.$_$.m6;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aa;
  var isInterface = kotlin_kotlin.$_$.r6;
  var columnGap = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var rowGap = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var KProperty0 = kotlin_kotlin.$_$.k7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var toString = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var coerceIn = kotlin_kotlin.$_$.f7;
  var numberToInt = kotlin_kotlin.$_$.w6;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var justifyContent_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var alignContent = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var animation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var backgroundImage = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var backgroundRepeat = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var backgroundSize = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var joinToString = kotlin_kotlin.$_$.v3;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var gap_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var flex = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var fontStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var gridAutoRows = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var lineHeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var zIndex = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var scrollBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var height_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var width_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var transform = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var translate = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var scale = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var transition_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta);
  setMetadataFor(End, 'End', objectMeta);
  setMetadataFor(Start, 'Start', objectMeta);
  setMetadataFor(Top, 'Top', objectMeta);
  setMetadataFor(Bottom, 'Bottom', objectMeta);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(HorizontalOrVertical_0, 'HorizontalOrVertical', classMeta, SpacedAligned);
  setMetadataFor(Vertical, 'Vertical', classMeta, SpacedAligned);
  setMetadataFor(Horizontal, 'Horizontal', classMeta, SpacedAligned);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(TopStart, 'TopStart', objectMeta);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta);
  setMetadataFor(Center_0, 'Center', objectMeta);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta);
  setMetadataFor(Top_0, 'Top', objectMeta);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta);
  setMetadataFor(Start_0, 'Start', objectMeta);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta);
  setMetadataFor(End_0, 'End', objectMeta);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta);
  function then(other) {
    return other === Companion_instance_6 ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [Element]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [Element]);
  setMetadataFor(Rgb, 'Rgb', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(FontScope, 'FontScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  //endregion
  function HorizontalOrVertical() {
  }
  function End() {
  }
  var End_instance;
  function End_getInstance() {
    return End_instance;
  }
  function Start() {
  }
  var Start_instance;
  function Start_getInstance() {
    return Start_instance;
  }
  function Top() {
  }
  var Top_instance;
  function Top_getInstance() {
    return Top_instance;
  }
  function Bottom() {
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    return Bottom_instance;
  }
  function Center() {
  }
  var Center_instance;
  function Center_getInstance() {
    return Center_instance;
  }
  function SpaceEvenly() {
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    return SpaceBetween_instance;
  }
  function SpaceAround() {
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    return SpaceAround_instance;
  }
  function FromStyle() {
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    return FromStyle_instance;
  }
  function Arrangement() {
  }
  protoOf(Arrangement).l37 = function (space) {
    return new HorizontalOrVertical_0(space);
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    return Arrangement_instance;
  }
  function HorizontalOrVertical_0(spacing) {
    SpacedAligned.call(this, spacing);
  }
  function Vertical() {
  }
  function Horizontal() {
  }
  function SpacedAligned(spacing) {
    this.m37_1 = spacing;
  }
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!getKClassFromExpression(other).equals(getKClassFromExpression(this)))
      return false;
    var other_0 = other instanceof SpacedAligned ? other : THROW_CCE();
    var tmp;
    if (equals(this.m37_1, other_0.m37_1)) {
      var tmp_0;
      if (this instanceof Vertical) {
        tmp_0 = equals(this.q37_1, (other_0 instanceof Vertical ? other_0 : THROW_CCE()).q37_1);
      } else {
        if (this instanceof Horizontal) {
          tmp_0 = equals(this.o37_1, (other_0 instanceof Horizontal ? other_0 : THROW_CCE()).o37_1);
        } else {
          tmp_0 = true;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = hashCode(this.m37_1);
    if (this instanceof Vertical)
      result = result + imul(31, hashCode(this.q37_1)) | 0;
    else {
      if (this instanceof Horizontal)
        result = result + imul(31, hashCode(this.o37_1)) | 0;
    }
    return result;
  };
  function Box(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(287459556);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_6;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().r37_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(287459556, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box (Box.kt:45)');
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 721727587, true, Box$lambda(ref_0, content_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.y1o();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.t1n();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.k1u(Box$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:44)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.r37_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().s37_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.s37_1 = TopStart_instance;
  }
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(721727587, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous> (Box.kt:47)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content._v(BoxScopeInstance_instance, $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Box$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Column(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-59454311);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.l1f(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.l1f(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().t37_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().u37_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-59454311, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column (Column.kt:53)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var this_0 = columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v);
      var tmp = verticalArrangement_0._v;
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull.<anonymous>' call
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>' call
        var it = ensureNotNull(value);
        tmp_0 = setVariable_1(Companion_instance_6, get_ArrangeSpacedByVar(), it.m37_1);
      } else {
        tmp_0 = Companion_instance_6;
      }
      var tmp$ret$3 = this_0.v37(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1861113368, true, Column$lambda(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.y1o();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      Div(tmp_1, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.k1u(Column$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.c2m([toClassName_1($alignment) + '-self']);
      return Unit_instance;
    };
  }
  function ColumnScope() {
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.t37_1 = Top_instance;
    this.u37_1 = Start_instance_0;
  }
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().t37_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().u37_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-col'], toClassNames_0(verticalArrangement), [toClassName_1(horizontalAlignment)]]));
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function Column$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1861113368, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous> (Column.kt:62)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(ColumnScopeInstance_instance, $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Column$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().x37_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().y37_1 : verticalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-row'], toClassNames(horizontalArrangement), [toClassName(verticalAlignment)]]));
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-568516375);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.l1f(horizontalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.l1f(verticalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().x37_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().y37_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-568516375, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row (Row.kt:54)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var this_0 = rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v);
      var tmp = horizontalArrangement_0._v;
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull.<anonymous>' call
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>' call
        var it = ensureNotNull(value);
        tmp_0 = setVariable_1(Companion_instance_6, get_ArrangeSpacedByVar(), it.m37_1);
      } else {
        tmp_0 = Companion_instance_6;
      }
      var tmp$ret$3 = this_0.v37(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1725920680, true, Row$lambda(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.y1o();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      Div(tmp_1, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.k1u(Row$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.x37_1 = Start_instance;
    this.y37_1 = Top_instance_0;
  }
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function Row$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1725920680, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous> (Row.kt:63)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(RowScopeInstance_instance, $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Row$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance_0)) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_instance)) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_instance_0)) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_instance)) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_instance)) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_instance)) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_instance)) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_instance_0)) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_instance)) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_instance)) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_instance)) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_instance)) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_instance_0)) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_instance)) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_instance_0)) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function get_ArrangeSpacedByVar() {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    return ArrangeSpacedByVar$delegate.n2y(null, ArrangeSpacedByVar$factory());
  }
  var ArrangeSpacedByVar$delegate;
  function toClassNames(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, End_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-end'];
    } else {
      if (equals(_this__u8e3s4, Start_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-start'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassNames_1(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassNames_0(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, Top_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-top'];
    } else {
      if (equals(_this__u8e3s4, Bottom_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-bottom'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassNames_1(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function get_KOBWEB_ARRANGE_END() {
    return KOBWEB_ARRANGE_END;
  }
  var KOBWEB_ARRANGE_END;
  function get_KOBWEB_ARRANGE_START() {
    return KOBWEB_ARRANGE_START;
  }
  var KOBWEB_ARRANGE_START;
  function toClassNames_1(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, Center_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-center'];
    } else {
      if (equals(_this__u8e3s4, SpaceAround_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-space-around'];
      } else {
        if (equals(_this__u8e3s4, SpaceBetween_instance)) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = ['kobweb-arrange-space-between'];
        } else {
          if (equals(_this__u8e3s4, SpaceEvenly_instance)) {
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = ['kobweb-arrange-space-evenly'];
          } else {
            if (equals(_this__u8e3s4, FromStyle_instance)) {
              // Inline function 'kotlin.arrayOf' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = ['kobweb-arrange-from-style'];
            } else {
              if (_this__u8e3s4 instanceof SpacedAligned) {
                // Inline function 'kotlin.arrayOf' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp = ['kobweb-arrange-spaced-by', get_alignmentClassName(_this__u8e3s4)];
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function get_KOBWEB_ARRANGE_TOP() {
    return KOBWEB_ARRANGE_TOP;
  }
  var KOBWEB_ARRANGE_TOP;
  function get_KOBWEB_ARRANGE_BOTTOM() {
    return KOBWEB_ARRANGE_BOTTOM;
  }
  var KOBWEB_ARRANGE_BOTTOM;
  function get_KOBWEB_ARRANGE_CENTER() {
    return KOBWEB_ARRANGE_CENTER;
  }
  var KOBWEB_ARRANGE_CENTER;
  function get_KOBWEB_ARRANGE_SPACE_AROUND() {
    return KOBWEB_ARRANGE_SPACE_AROUND;
  }
  var KOBWEB_ARRANGE_SPACE_AROUND;
  function get_KOBWEB_ARRANGE_SPACE_BETWEEN() {
    return KOBWEB_ARRANGE_SPACE_BETWEEN;
  }
  var KOBWEB_ARRANGE_SPACE_BETWEEN;
  function get_KOBWEB_ARRANGE_SPACE_EVENLY() {
    return KOBWEB_ARRANGE_SPACE_EVENLY;
  }
  var KOBWEB_ARRANGE_SPACE_EVENLY;
  function get_alignmentClassName(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (_this__u8e3s4 instanceof Vertical) {
      var tmp1_subject = _this__u8e3s4.q37_1;
      var tmp_0;
      if (equals(tmp1_subject, Bottom_instance_0)) {
        tmp_0 = 'kobweb-arrange-bottom';
      } else if (equals(tmp1_subject, CenterVertically_instance)) {
        tmp_0 = 'kobweb-arrange-center';
      } else if (equals(tmp1_subject, FromStyle_instance_0)) {
        tmp_0 = 'kobweb-arrange-from-style';
      } else if (equals(tmp1_subject, Top_instance_0)) {
        tmp_0 = 'kobweb-arrange-top';
      } else {
        noWhenBranchMatchedException();
      }
      tmp = tmp_0;
    } else {
      if (_this__u8e3s4 instanceof Horizontal) {
        var tmp2_subject = _this__u8e3s4.o37_1;
        var tmp_1;
        if (equals(tmp2_subject, Start_instance_0)) {
          tmp_1 = 'kobweb-arrange-start';
        } else if (equals(tmp2_subject, CenterHorizontally_instance)) {
          tmp_1 = 'kobweb-arrange-center';
        } else if (equals(tmp2_subject, FromStyle_instance_0)) {
          tmp_1 = 'kobweb-arrange-from-style';
        } else if (equals(tmp2_subject, End_instance_0)) {
          tmp_1 = 'kobweb-arrange-end';
        } else {
          noWhenBranchMatchedException();
        }
        tmp = tmp_1;
      } else {
        tmp = 'kobweb-arrange-start';
      }
    }
    return tmp;
  }
  function initArrangeSpacedByStyle(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    _this__u8e3s4.w2p('.kobweb-row.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda);
    _this__u8e3s4.w2p('.kobweb-col.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda_0);
  }
  function initArrangeSpacedByStyle$lambda($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    columnGap($this$invoke, get_ArrangeSpacedByVar().h2y());
    return Unit_instance;
  }
  function initArrangeSpacedByStyle$lambda_0($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    rowGap($this$invoke, get_ArrangeSpacedByVar().h2y());
    return Unit_instance;
  }
  function ArrangeSpacedByVar$factory() {
    return getPropertyCallableRef('ArrangeSpacedByVar', 0, KProperty0, function () {
      return get_ArrangeSpacedByVar();
    }, null);
  }
  var properties_initialized_ArrangementExtensions_kt_12f99q;
  function _init_properties_ArrangementExtensions_kt__c0bxro() {
    if (!properties_initialized_ArrangementExtensions_kt_12f99q) {
      properties_initialized_ArrangementExtensions_kt_12f99q = true;
      ArrangeSpacedByVar$delegate = StyleVariable('kobweb');
    }
  }
  function initBox($this) {
    $this.w2p('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.w2p('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.w2p('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.w2p('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.w2p('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.w2p('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.w2p('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.w2p('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.w2p('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.w2p('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.w2p('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.w2p('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.w2p('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.w2p('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.w2p('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.w2p('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.w2p('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.w2p('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.w2p('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.w2p('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.w2p('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    var tmp = '.kobweb-row.' + get_KOBWEB_ARRANGE_START();
    $this.w2p(tmp, KobwebComposeStyleSheet$initRow$lambda_0);
    var tmp_0 = '.kobweb-row.' + get_KOBWEB_ARRANGE_CENTER();
    $this.w2p(tmp_0, KobwebComposeStyleSheet$initRow$lambda_1);
    var tmp_1 = '.kobweb-row.' + get_KOBWEB_ARRANGE_END();
    $this.w2p(tmp_1, KobwebComposeStyleSheet$initRow$lambda_2);
    var tmp_2 = '.kobweb-row.' + get_KOBWEB_ARRANGE_SPACE_EVENLY();
    $this.w2p(tmp_2, KobwebComposeStyleSheet$initRow$lambda_3);
    var tmp_3 = '.kobweb-row.' + get_KOBWEB_ARRANGE_SPACE_BETWEEN();
    $this.w2p(tmp_3, KobwebComposeStyleSheet$initRow$lambda_4);
    var tmp_4 = '.kobweb-row.' + get_KOBWEB_ARRANGE_SPACE_AROUND();
    $this.w2p(tmp_4, KobwebComposeStyleSheet$initRow$lambda_5);
    $this.w2p('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.w2p('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.w2p('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.w2p('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.w2p('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.w2p('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.w2p('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    var tmp = '.kobweb-col.' + get_KOBWEB_ARRANGE_TOP();
    $this.w2p(tmp, KobwebComposeStyleSheet$initCol$lambda_0);
    var tmp_0 = '.kobweb-col.' + get_KOBWEB_ARRANGE_CENTER();
    $this.w2p(tmp_0, KobwebComposeStyleSheet$initCol$lambda_1);
    var tmp_1 = '.kobweb-col.' + get_KOBWEB_ARRANGE_BOTTOM();
    $this.w2p(tmp_1, KobwebComposeStyleSheet$initCol$lambda_2);
    var tmp_2 = '.kobweb-col.' + get_KOBWEB_ARRANGE_SPACE_EVENLY();
    $this.w2p(tmp_2, KobwebComposeStyleSheet$initCol$lambda_3);
    var tmp_3 = '.kobweb-col.' + get_KOBWEB_ARRANGE_SPACE_BETWEEN();
    $this.w2p(tmp_3, KobwebComposeStyleSheet$initCol$lambda_4);
    var tmp_4 = '.kobweb-col.' + get_KOBWEB_ARRANGE_SPACE_AROUND();
    $this.w2p(tmp_4, KobwebComposeStyleSheet$initCol$lambda_5);
    $this.w2p('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.w2p('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.w2p('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.w2p('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.w2p('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.w2p('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.w2p('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.h2x(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.i2x(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.r2w(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.r2w(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.n2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.k2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.o2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.n2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.k2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.o2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.n2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.k2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.o2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.n2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.k2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.o2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.n2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.k2u());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.o2u());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.n2u());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.k2u());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.o2u());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
    initArrangeSpacedByStyle(this);
  }
  protoOf(KobwebComposeStyleSheet).u2p = function (selector, cssRule) {
    return this.t2p(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function TopStart() {
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    return TopStart_instance;
  }
  function TopCenter() {
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    return TopCenter_instance;
  }
  function TopEnd() {
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    return TopEnd_instance;
  }
  function CenterStart() {
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    return CenterStart_instance;
  }
  function Center_0() {
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    return Center_instance_0;
  }
  function CenterEnd() {
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    return CenterEnd_instance;
  }
  function BottomStart() {
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    return BottomStart_instance;
  }
  function BottomCenter() {
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    return BottomCenter_instance;
  }
  function BottomEnd() {
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    return BottomEnd_instance;
  }
  function Top_0() {
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    return Top_instance_0;
  }
  function CenterVertically() {
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    return CenterVertically_instance;
  }
  function Bottom_0() {
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    return Bottom_instance_0;
  }
  function Start_0() {
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    return Start_instance_0;
  }
  function CenterHorizontally() {
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    return CenterHorizontally_instance;
  }
  function End_0() {
  }
  var End_instance_0;
  function End_getInstance_0() {
    return End_instance_0;
  }
  function FromStyle_0() {
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    return FromStyle_instance_0;
  }
  function Element() {
  }
  function Companion() {
  }
  protoOf(Companion).e38 = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).v37 = function (other) {
    return other;
  };
  var Companion_instance_6;
  function Companion_getInstance_1() {
    return Companion_instance_6;
  }
  function Modifier() {
  }
  function thenIf(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp = other;
    } else {
      tmp = Companion_instance_6;
    }
    return _this__u8e3s4.v37(tmp);
  }
  function ChainedModifier(current, next) {
    this.f38_1 = current;
    this.g38_1 = next;
  }
  protoOf(ChainedModifier).e38 = function (initial, operation) {
    return this.g38_1.e38(this.f38_1.e38(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.f38_1, other.f38_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.g38_1, other.g38_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.f38_1) + imul(31, hashCode(this.g38_1)) | 0;
  };
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.v37(new StyleModifier(styles));
  }
  function StyleModifier(styles) {
    this.h38_1 = styles;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.h38_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.h38_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.h38_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function AttrsModifier(attrs) {
    this.i38_1 = attrs;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.i38_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.i38_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.i38_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.v37(new AttrsModifier(attrs));
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.h38_1($this_null);
      }
      return Unit_instance;
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.e38(Unit_instance, toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.h38_1($this$style);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.i38_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.a2m(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.e38(Unit_instance, toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function Rgb(value) {
    this.j38_1 = value;
  }
  protoOf(Rgb).k38 = function () {
    return this.j38_1 >> 16 & 255;
  };
  protoOf(Rgb).l38 = function () {
    return this.j38_1 >> 8 & 255;
  };
  protoOf(Rgb).m38 = function () {
    return this.j38_1 >> 0 & 255;
  };
  protoOf(Rgb).n38 = function () {
    return this.j38_1 >> 24 & 255;
  };
  protoOf(Rgb).o38 = function () {
    return toColorFloat(this.k38());
  };
  protoOf(Rgb).p38 = function () {
    return toColorFloat(this.l38());
  };
  protoOf(Rgb).q38 = function () {
    return toColorFloat(this.m38());
  };
  protoOf(Rgb).r38 = function () {
    return toColorFloat(this.n38());
  };
  protoOf(Rgb).s38 = function () {
    return Companion_instance_7.u38(255 - this.k38() | 0, 255 - this.l38() | 0, 255 - this.m38() | 0, this.n38());
  };
  protoOf(Rgb).v38 = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_instance_7.w38(this.o38() * darkeningMultiplier, this.p38() * darkeningMultiplier, this.q38() * darkeningMultiplier, this.r38());
  };
  protoOf(Rgb).x38 = function (red, green, blue, alpha) {
    return Companion_instance_7.w38(red, green, blue, alpha);
  };
  protoOf(Rgb).y38 = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.o38() : red;
    green = green === VOID ? this.p38() : green;
    blue = blue === VOID ? this.q38() : blue;
    alpha = alpha === VOID ? this.r38() : alpha;
    return $super === VOID ? this.x38(red, green, blue, alpha) : $super.x38.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).z38 = function () {
    return this;
  };
  protoOf(Rgb).toString = function () {
    return this.n38() === 255 ? 'rgb(' + this.k38() + ', ' + this.l38() + ', ' + this.m38() + ')' : 'rgba(' + this.k38() + ', ' + this.l38() + ', ' + this.m38() + ', ' + this.r38() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.k38() === other.k38();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.l38() === other.l38();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.m38() === other.m38();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.n38() === other.n38();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.k38();
    result = imul(31, result) + this.l38() | 0;
    result = imul(31, result) + this.m38() | 0;
    result = imul(31, result) + this.n38() | 0;
    return result;
  };
  function Companion_0() {
    this.t38_1 = 0.3;
  }
  protoOf(Companion_0).a39 = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).b39 = function (r, g, b) {
    return this.u38(r, g, b, 255);
  };
  protoOf(Companion_0).u38 = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).w38 = function (r, g, b, a) {
    return this.u38(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_7;
  function Companion_getInstance_2() {
    return Companion_instance_7;
  }
  function Colors() {
  }
  protoOf(Colors).c39 = function () {
    return Companion_instance_7.u38(0, 0, 0, 0);
  };
  protoOf(Colors).d39 = function () {
    return Companion_instance_7.b39(0, 0, 0);
  };
  protoOf(Colors).e39 = function () {
    return Companion_instance_7.b39(0, 0, 255);
  };
  protoOf(Colors).f39 = function () {
    return Companion_instance_7.b39(100, 149, 237);
  };
  protoOf(Colors).g39 = function () {
    return Companion_instance_7.b39(0, 255, 255);
  };
  protoOf(Colors).h39 = function () {
    return Companion_instance_7.b39(169, 169, 169);
  };
  protoOf(Colors).i39 = function () {
    return Companion_instance_7.b39(47, 79, 79);
  };
  protoOf(Colors).j39 = function () {
    return Companion_instance_7.b39(30, 144, 255);
  };
  protoOf(Colors).k39 = function () {
    return Companion_instance_7.b39(0, 128, 0);
  };
  protoOf(Colors).l39 = function () {
    return Companion_instance_7.b39(211, 211, 211);
  };
  protoOf(Colors).m39 = function () {
    return Companion_instance_7.b39(135, 206, 250);
  };
  protoOf(Colors).n39 = function () {
    return Companion_instance_7.b39(128, 0, 128);
  };
  protoOf(Colors).o39 = function () {
    return Companion_instance_7.b39(238, 130, 238);
  };
  protoOf(Colors).p39 = function () {
    return Companion_instance_7.b39(255, 255, 255);
  };
  protoOf(Colors).q39 = function () {
    return Companion_instance_7.b39(245, 245, 245);
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
  }
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.s38().v38(byPercent).s38();
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.<get-luminance>.<anonymous>' call
    var rgb = _this__u8e3s4.z38();
    return rgb.o38() * 0.299 + rgb.p38() * 0.587 + rgb.q38() * 0.114;
  }
  function ariaHidden_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaDisabled_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      ariaHidden($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function alignItems_0(_this__u8e3s4, alignItems) {
    return styleModifier(_this__u8e3s4, alignItems$lambda(alignItems));
  }
  function justifyContent_1(_this__u8e3s4, justifyContent) {
    return styleModifier(_this__u8e3s4, justifyContent$lambda(justifyContent));
  }
  function justifyContent_2(_this__u8e3s4, justifyContent) {
    return styleModifier(_this__u8e3s4, justifyContent$lambda_0(justifyContent));
  }
  function alignContent_0(_this__u8e3s4, alignContent) {
    return styleModifier(_this__u8e3s4, alignContent$lambda(alignContent));
  }
  function alignItems$lambda($alignItems) {
    return function ($this$styleModifier) {
      alignItems($this$styleModifier, $alignItems);
      return Unit_instance;
    };
  }
  function justifyContent$lambda($justifyContent) {
    return function ($this$styleModifier) {
      justifyContent_0($this$styleModifier, $justifyContent);
      return Unit_instance;
    };
  }
  function justifyContent$lambda_0($justifyContent) {
    return function ($this$styleModifier) {
      justifyContent($this$styleModifier, $justifyContent);
      return Unit_instance;
    };
  }
  function alignContent$lambda($alignContent) {
    return function ($this$styleModifier) {
      alignContent($this$styleModifier, $alignContent);
      return Unit_instance;
    };
  }
  function onAnimationEnd(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onAnimationEnd$lambda(listener));
  }
  function animation_0(_this__u8e3s4, animations) {
    return styleModifier(_this__u8e3s4, animation$lambda(animations));
  }
  function onAnimationEnd$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.j2m($listener);
      return Unit_instance;
    };
  }
  function animation$lambda($animations) {
    return function ($this$styleModifier) {
      animation($this$styleModifier, $animations.slice());
      return Unit_instance;
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return styleModifier(_this__u8e3s4, backgroundImage$lambda(gradient));
  }
  function background_0(_this__u8e3s4, color, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(color, backgrounds));
  }
  function backgroundRepeat_0(_this__u8e3s4, backgroundRepeat) {
    return styleModifier(_this__u8e3s4, backgroundRepeat$lambda(backgroundRepeat));
  }
  function backgroundSize_0(_this__u8e3s4, backgroundSize) {
    return styleModifier(_this__u8e3s4, backgroundSize$lambda(backgroundSize));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function backgroundImage$lambda($gradient) {
    return function ($this$styleModifier) {
      backgroundImage($this$styleModifier, $gradient);
      return Unit_instance;
    };
  }
  function background$lambda($color, $backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, $color, $backgrounds.slice());
      return Unit_instance;
    };
  }
  function backgroundRepeat$lambda($backgroundRepeat) {
    return function ($this$styleModifier) {
      backgroundRepeat($this$styleModifier, $backgroundRepeat);
      return Unit_instance;
    };
  }
  function backgroundSize$lambda($backgroundSize) {
    return function ($this$styleModifier) {
      backgroundSize($this$styleModifier, $backgroundSize);
      return Unit_instance;
    };
  }
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda(scope));
  }
  function BorderScope(styleScope) {
    this.r39_1 = styleScope;
  }
  protoOf(BorderScope).s39 = function (color) {
    return borderColor(this.r39_1, color);
  };
  protoOf(BorderScope).t39 = function (lineStyle) {
    return borderStyle(this.r39_1, lineStyle);
  };
  protoOf(BorderScope).u39 = function (width) {
    return borderWidth(this.r39_1, width);
  };
  function borderRadius_1(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_1(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda_0(width, style, color));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderRadius_2(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRight = topRight === VOID ? get_px(0) : topRight;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    bottomLeft = bottomLeft === VOID ? get_px(0) : bottomLeft;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeft, topRight, bottomRight, bottomLeft));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.apply' call
      var this_0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(this_0);
      return Unit_instance;
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_instance;
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderRadius$lambda_0($topLeft, $topRight, $bottomRight, $bottomLeft) {
    return function ($this$styleModifier) {
      borderRadius_0($this$styleModifier, $topLeft, $topRight, $bottomRight, $bottomLeft);
      return Unit_instance;
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return boxShadow_1(_this__u8e3s4, [Companion_getInstance_0().w2v(offsetX, offsetY, blurRadius, spreadRadius, color, inset)]);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow_1(_this__u8e3s4, boxShadows) {
    return styleModifier(_this__u8e3s4, boxShadow$lambda(boxShadows));
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_instance;
    };
  }
  function boxShadow$lambda($boxShadows) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $boxShadows.slice());
      return Unit_instance;
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function backdropFilter(_this__u8e3s4, filters) {
    return styleModifier(_this__u8e3s4, backdropFilter$lambda(filters));
  }
  function backdropFilter$lambda($filters) {
    return function ($this$styleModifier) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (!($filters.length === 0)) {
        $this$styleModifier.t2o('backdrop-filter', joinToString($filters, ' '));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function appearance_0(_this__u8e3s4, appearance) {
    return styleModifier(_this__u8e3s4, appearance$lambda(appearance));
  }
  function id(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.c2m($classes.slice());
      return Unit_instance;
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_instance;
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.d2m($value);
      return Unit_instance;
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function gap_2(_this__u8e3s4, rowGap, columnGap) {
    return styleModifier(_this__u8e3s4, gap$lambda_0(rowGap, columnGap));
  }
  function flex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flex$lambda(value));
  }
  function rowGap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, rowGap$lambda(value));
  }
  function columnGap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, columnGap$lambda(value));
  }
  function flexDirection_0(_this__u8e3s4, flexDirection) {
    return styleModifier(_this__u8e3s4, flexDirection$lambda(flexDirection));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gap$lambda_0($rowGap, $columnGap) {
    return function ($this$styleModifier) {
      gap_0($this$styleModifier, $rowGap, $columnGap);
      return Unit_instance;
    };
  }
  function flex$lambda($value) {
    return function ($this$styleModifier) {
      flex($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function rowGap$lambda($value) {
    return function ($this$styleModifier) {
      rowGap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function columnGap$lambda($value) {
    return function ($this$styleModifier) {
      columnGap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function flexDirection$lambda($flexDirection) {
    return function ($this$styleModifier) {
      flexDirection($this$styleModifier, $flexDirection);
      return Unit_instance;
    };
  }
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function font(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, font$lambda(scope));
  }
  function FontScope(styleScope) {
    this.v39_1 = styleScope;
  }
  protoOf(FontScope).w39 = function (values) {
    return fontFamily(this.v39_1, values.slice());
  };
  protoOf(FontScope).x39 = function (value) {
    return fontSize(this.v39_1, value);
  };
  protoOf(FontScope).y39 = function (value) {
    return fontStyle(this.v39_1, value);
  };
  protoOf(FontScope).z39 = function (value) {
    return fontWeight(this.v39_1, value);
  };
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_instance;
    };
  }
  function font$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new FontScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridAutoRows_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridAutoRows$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function gridAutoRows$lambda($block) {
    return function ($this$styleModifier) {
      gridAutoRows($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function onMouseLeave(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onMouseLeave$lambda(listener));
  }
  function onMouseEnter(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onMouseEnter$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.e2m($value);
      return Unit_instance;
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_instance;
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_instance;
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.g2m($listener);
      return Unit_instance;
    };
  }
  function onMouseLeave$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.i2m($listener);
      return Unit_instance;
    };
  }
  function onMouseEnter$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.h2m($listener);
      return Unit_instance;
    };
  }
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function OverflowScope(styleScope) {
    this.a3a_1 = styleScope;
  }
  protoOf(OverflowScope).b3a = function (overflowY_0) {
    return overflowY(this.a3a_1, overflowY_0);
  };
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function lineHeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function margin_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(all));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function margin_2(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, right, bottom, left));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function padding_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda_2(top, right, bottom, left));
  }
  function margin_3(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_2(topBottom, leftRight));
  }
  function lineHeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda_0(value));
  }
  function zIndex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, zIndex$lambda(value));
  }
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_instance;
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_instance;
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_instance;
    };
  }
  function margin$lambda_0($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_instance;
    };
  }
  function margin$lambda_1($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function margin$lambda_2($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function lineHeight$lambda_0($value) {
    return function ($this$styleModifier) {
      lineHeight_0($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function zIndex$lambda($value) {
    return function ($this$styleModifier) {
      zIndex($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, $type, $position, $image);
      return Unit_instance;
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_instance;
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_instance;
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function scrollBehavior_0(_this__u8e3s4, scrollBehavior) {
    return styleModifier(_this__u8e3s4, scrollBehavior$lambda(scrollBehavior));
  }
  function scrollBehavior$lambda($scrollBehavior) {
    return function ($this$styleModifier) {
      scrollBehavior($this$styleModifier, $scrollBehavior);
      return Unit_instance;
    };
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function height_1(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function width_1(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function maxWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(size));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function height_2(_this__u8e3s4, auto) {
    return styleModifier(_this__u8e3s4, height$lambda_0(auto));
  }
  function width_2(_this__u8e3s4, auto) {
    return styleModifier(_this__u8e3s4, width$lambda_0(auto));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function maxWidth$lambda($size) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function height$lambda_0($auto) {
    return function ($this$styleModifier) {
      height_0($this$styleModifier, $auto);
      return Unit_instance;
    };
  }
  function width$lambda_0($auto) {
    return function ($this$styleModifier) {
      width_0($this$styleModifier, $auto);
      return Unit_instance;
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_instance;
    };
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_instance;
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_instance;
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_instance;
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function transform_0(_this__u8e3s4, transformContext) {
    return styleModifier(_this__u8e3s4, transform$lambda(transformContext));
  }
  function translate_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translate$lambda(tx));
  }
  function scale_0(_this__u8e3s4, s) {
    return styleModifier(_this__u8e3s4, scale$lambda(s));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function transform$lambda($transformContext) {
    return function ($this$styleModifier) {
      transform($this$styleModifier, $transformContext);
      return Unit_instance;
    };
  }
  function translate$lambda($tx) {
    return function ($this$styleModifier) {
      translate($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function scale$lambda($s) {
    return function ($this$styleModifier) {
      scale($this$styleModifier, $s);
      return Unit_instance;
    };
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition_2(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition_3(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_1(transitions));
  }
  function onTransitionEnd_0(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onTransitionEnd$lambda(listener));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function transition$lambda_1($transitions) {
    return function ($this$styleModifier) {
      transition_0($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function onTransitionEnd$lambda($listener) {
    return function ($this$attrsModifier) {
      onTransitionEnd($this$attrsModifier, $listener);
      return Unit_instance;
    };
  }
  function setVariable_1(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable_2(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda_0(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(ColumnScopeInstance).w37 = align;
  protoOf(ChainedModifier).v37 = then;
  protoOf(StyleModifier).e38 = fold;
  protoOf(StyleModifier).v37 = then;
  protoOf(AttrsModifier).e38 = fold;
  protoOf(AttrsModifier).v37 = then;
  //endregion
  //region block: init
  End_instance = new End();
  Start_instance = new Start();
  Top_instance = new Top();
  Bottom_instance = new Bottom();
  Center_instance = new Center();
  SpaceEvenly_instance = new SpaceEvenly();
  SpaceBetween_instance = new SpaceBetween();
  SpaceAround_instance = new SpaceAround();
  FromStyle_instance = new FromStyle();
  Arrangement_instance = new Arrangement();
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  KOBWEB_ARRANGE_END = 'kobweb-arrange-end';
  KOBWEB_ARRANGE_START = 'kobweb-arrange-start';
  KOBWEB_ARRANGE_TOP = 'kobweb-arrange-top';
  KOBWEB_ARRANGE_BOTTOM = 'kobweb-arrange-bottom';
  KOBWEB_ARRANGE_CENTER = 'kobweb-arrange-center';
  KOBWEB_ARRANGE_SPACE_AROUND = 'kobweb-arrange-space-around';
  KOBWEB_ARRANGE_SPACE_BETWEEN = 'kobweb-arrange-space-between';
  KOBWEB_ARRANGE_SPACE_EVENLY = 'kobweb-arrange-space-evenly';
  TopStart_instance = new TopStart();
  TopCenter_instance = new TopCenter();
  TopEnd_instance = new TopEnd();
  CenterStart_instance = new CenterStart();
  Center_instance_0 = new Center_0();
  CenterEnd_instance = new CenterEnd();
  BottomStart_instance = new BottomStart();
  BottomCenter_instance = new BottomCenter();
  BottomEnd_instance = new BottomEnd();
  Top_instance_0 = new Top_0();
  CenterVertically_instance = new CenterVertically();
  Bottom_instance_0 = new Bottom_0();
  Start_instance_0 = new Start_0();
  CenterHorizontally_instance = new CenterHorizontally();
  End_instance_0 = new End_0();
  FromStyle_instance_0 = new FromStyle_0();
  Companion_instance_6 = new Companion();
  Companion_instance_7 = new Companion_0();
  Colors_instance = new Colors();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = Column;
  _.$_$.c = Row;
  _.$_$.d = rowClasses;
  _.$_$.e = get_isBright;
  _.$_$.f = lightened;
  _.$_$.g = alignContent_0;
  _.$_$.h = alignItems_0;
  _.$_$.i = animation_0;
  _.$_$.j = appearance_0;
  _.$_$.k = ariaDisabled_0;
  _.$_$.l = ariaHidden_0;
  _.$_$.m = backdropFilter;
  _.$_$.n = backgroundColor_0;
  _.$_$.o = backgroundImage_0;
  _.$_$.p = backgroundRepeat_0;
  _.$_$.q = backgroundSize_0;
  _.$_$.r = background_0;
  _.$_$.s = borderBottom_0;
  _.$_$.t = borderLeft_0;
  _.$_$.u = borderRadius_1;
  _.$_$.v = borderRadius_2;
  _.$_$.w = borderTop_0;
  _.$_$.x = border_1;
  _.$_$.y = border_0;
  _.$_$.z = bottom_0;
  _.$_$.a1 = boxShadow_0;
  _.$_$.b1 = boxSizing_0;
  _.$_$.c1 = classNames;
  _.$_$.d1 = color_0;
  _.$_$.e1 = columnGap_0;
  _.$_$.f1 = cursor_0;
  _.$_$.g1 = display_0;
  _.$_$.h1 = fillMaxHeight;
  _.$_$.i1 = fillMaxSize;
  _.$_$.j1 = fillMaxWidth;
  _.$_$.k1 = flexDirection_0;
  _.$_$.l1 = flexGrow_0;
  _.$_$.m1 = flex_0;
  _.$_$.n1 = fontFamily_0;
  _.$_$.o1 = fontSize_0;
  _.$_$.p1 = fontWeight_0;
  _.$_$.q1 = font;
  _.$_$.r1 = gap_1;
  _.$_$.s1 = gap_2;
  _.$_$.t1 = gridAutoRows_0;
  _.$_$.u1 = gridTemplateColumns_0;
  _.$_$.v1 = height_1;
  _.$_$.w1 = height_2;
  _.$_$.x1 = id;
  _.$_$.y1 = justifyContent_1;
  _.$_$.z1 = justifyContent_2;
  _.$_$.a2 = left_0;
  _.$_$.b2 = lineHeight_2;
  _.$_$.c2 = lineHeight_1;
  _.$_$.d2 = listStyle_0;
  _.$_$.e2 = margin_2;
  _.$_$.f2 = margin_1;
  _.$_$.g2 = margin_3;
  _.$_$.h2 = margin_0;
  _.$_$.i2 = maxWidth_0;
  _.$_$.j2 = minHeight_0;
  _.$_$.k2 = minWidth_0;
  _.$_$.l2 = objectFit_0;
  _.$_$.m2 = onAnimationEnd;
  _.$_$.n2 = onClick;
  _.$_$.o2 = onMouseEnter;
  _.$_$.p2 = onMouseLeave;
  _.$_$.q2 = onTransitionEnd_0;
  _.$_$.r2 = opacity_0;
  _.$_$.s2 = outline_0;
  _.$_$.t2 = overflow_0;
  _.$_$.u2 = overflow_1;
  _.$_$.v2 = paddingInline_0;
  _.$_$.w2 = padding_3;
  _.$_$.x2 = padding_0;
  _.$_$.y2 = padding_2;
  _.$_$.z2 = padding_1;
  _.$_$.a3 = position_0;
  _.$_$.b3 = right_0;
  _.$_$.c3 = rowGap_0;
  _.$_$.d3 = scale_0;
  _.$_$.e3 = scrollBehavior_0;
  _.$_$.f3 = setVariable_2;
  _.$_$.g3 = setVariable_1;
  _.$_$.h3 = size;
  _.$_$.i3 = tabIndex;
  _.$_$.j3 = textAlign_0;
  _.$_$.k3 = textDecorationLine_0;
  _.$_$.l3 = top_0;
  _.$_$.m3 = transform_0;
  _.$_$.n3 = transition_2;
  _.$_$.o3 = transition_3;
  _.$_$.p3 = transition_1;
  _.$_$.q3 = translateX_0;
  _.$_$.r3 = translate_0;
  _.$_$.s3 = userSelect_0;
  _.$_$.t3 = verticalAlign_0;
  _.$_$.u3 = whiteSpace_0;
  _.$_$.v3 = width_1;
  _.$_$.w3 = width_2;
  _.$_$.x3 = zIndex_0;
  _.$_$.y3 = styleModifier;
  _.$_$.z3 = thenIf;
  _.$_$.a4 = toAttrs;
  _.$_$.b4 = toStyles;
  _.$_$.c4 = Center_instance;
  _.$_$.d4 = SpaceBetween_instance;
  _.$_$.e4 = Start_instance;
  _.$_$.f4 = Top_instance;
  _.$_$.g4 = Arrangement_instance;
  _.$_$.h4 = KobwebComposeStyleSheet_getInstance;
  _.$_$.i4 = Companion_instance_7;
  _.$_$.j4 = Colors_instance;
  _.$_$.k4 = CenterEnd_instance;
  _.$_$.l4 = CenterHorizontally_instance;
  _.$_$.m4 = CenterStart_instance;
  _.$_$.n4 = CenterVertically_instance;
  _.$_$.o4 = Center_instance_0;
  _.$_$.p4 = Start_instance_0;
  _.$_$.q4 = TopCenter_instance;
  _.$_$.r4 = TopStart_instance;
  _.$_$.s4 = Companion_instance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map
