(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './kobweb-frontend-compose-html-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['kobweb-frontend-compose-html-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g4;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.z6;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var listOf = kotlin_kotlin.$_$.c4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var distinct = kotlin_kotlin.$_$.i3;
  var lazy = kotlin_kotlin.$_$.z9;
  var classMeta = kotlin_kotlin.$_$.c6;
  var removeSuffix = kotlin_kotlin.$_$.k8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var toString = kotlin_kotlin.$_$.c7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var CSSAnimation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.l7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var toList = kotlin_kotlin.$_$.y4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r4;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var removePrefix = kotlin_kotlin.$_$.j8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var endsWith = kotlin_kotlin.$_$.z7;
  var startsWith = kotlin_kotlin.$_$.q8;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var to = kotlin_kotlin.$_$.ha;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var asList = kotlin_kotlin.$_$.ja;
  var asSequence = kotlin_kotlin.$_$.z2;
  var toSet = kotlin_kotlin.$_$.b5;
  var flatMap = kotlin_kotlin.$_$.p7;
  var filter = kotlin_kotlin.$_$.o7;
  var Sequence = kotlin_kotlin.$_$.n7;
  var isInterface = kotlin_kotlin.$_$.r6;
  var map = kotlin_kotlin.$_$.q7;
  var toSet_0 = kotlin_kotlin.$_$.s7;
  var subtract = kotlin_kotlin.$_$.u4;
  var sorted = kotlin_kotlin.$_$.t4;
  var joinToString = kotlin_kotlin.$_$.u3;
  var trimIndent = kotlin_kotlin.$_$.b9;
  var addAll = kotlin_kotlin.$_$.w2;
  var Map = kotlin_kotlin.$_$.r2;
  var listOf_0 = kotlin_kotlin.$_$.b4;
  var emptyList = kotlin_kotlin.$_$.j3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var mapCapacity = kotlin_kotlin.$_$.d4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var trimMargin = kotlin_kotlin.$_$.c9;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var mutableListOf = kotlin_kotlin.$_$.h4;
  var plus = kotlin_kotlin.$_$.k4;
  var interfaceMeta = kotlin_kotlin.$_$.o6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var equals = kotlin_kotlin.$_$.f6;
  var substringAfterLast = kotlin_kotlin.$_$.r8;
  var endsWith_0 = kotlin_kotlin.$_$.a8;
  var copyToArray = kotlin_kotlin.$_$.h3;
  var getValue = kotlin_kotlin.$_$.s3;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var isBlank = kotlin_kotlin.$_$.d8;
  var first = kotlin_kotlin.$_$.c8;
  var Char = kotlin_kotlin.$_$.g9;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var setOf = kotlin_kotlin.$_$.q4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var Percentage = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var hashCode = kotlin_kotlin.$_$.m6;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var enumEntries = kotlin_kotlin.$_$.u5;
  var Enum = kotlin_kotlin.$_$.i9;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var numberToDouble = kotlin_kotlin.$_$.v6;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var toIntOrNull = kotlin_kotlin.$_$.x8;
  var plus_0 = kotlin_kotlin.$_$.l4;
  var toMutableList = kotlin_kotlin.$_$.z4;
  var getKClass = kotlin_kotlin.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aa;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.s5;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e5;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ea;
  var THROW_IAE = kotlin_kotlin.$_$.q9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var KProperty0 = kotlin_kotlin.$_$.k7;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(StyleScope, 'StyleScope', classMeta);
  setMetadataFor(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, classMeta, StyleScope);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(CssStyle, 'CssStyle', classMeta);
  setMetadataFor(Restricted, 'Restricted', classMeta, CssStyle);
  setMetadataFor(Base, 'Base', classMeta, Restricted);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(CssStyleScope, 'CssStyleScope', classMeta, StyleScope);
  setMetadataFor(ComponentKind, 'ComponentKind', interfaceMeta);
  setMetadataFor(RestrictedKind, 'RestrictedKind', interfaceMeta);
  setMetadataFor(CssStyleBaseScope, 'CssStyleBaseScope', classMeta);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ImmutableCssStyle, 'ImmutableCssStyle', classMeta);
  setMetadataFor(GeneralKind, 'GeneralKind', interfaceMeta);
  setMetadataFor(ExtendingCssStyle, 'ExtendingCssStyle', classMeta, CssStyle);
  setMetadataFor(SimpleCssStyle, 'SimpleCssStyle', classMeta, CssStyle);
  setMetadataFor(CssStyle$2, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyle$4, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyle$6, VOID, classMeta, CssStyle);
  setMetadataFor(base$3, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyleVariant, 'CssStyleVariant', classMeta);
  setMetadataFor(SimpleCssStyleVariant$1, VOID, classMeta, CssStyle);
  setMetadataFor(SimpleCssStyleVariant, 'SimpleCssStyleVariant', classMeta, CssStyleVariant);
  setMetadataFor(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', classMeta, SimpleCssStyleVariant);
  setMetadataFor(CompositeCssStyleVariant, 'CompositeCssStyleVariant', classMeta, CssStyleVariant);
  setMetadataFor(addVariant$1, VOID, classMeta, CssStyle);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Keyframes_1, 'Keyframes', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(ResponsiveValues, 'ResponsiveValues', classMeta);
  setMetadataFor(LayerListBuilder, 'LayerListBuilder', classMeta, VOID, VOID, LayerListBuilder);
  setMetadataFor(SilkLayer, 'SilkLayer', classMeta, Enum);
  setMetadataFor(MutableSilkTheme$replaceStyle$newStyle$1, VOID, classMeta, CssStyle);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(rememberBreakpoint$slambda, 'rememberBreakpoint$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(Red, 'Red', objectMeta);
  setMetadataFor(Blue, 'Blue', objectMeta);
  setMetadataFor(Gray, 'Gray', objectMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.y9_1) {
      case 0:
        tmp = this.v3j();
        break;
      case 1:
        tmp = this.w3j();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.y3j(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-776510055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        $composer_0.s1n(2035960038);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.y1o();
        var tmp;
        if (false ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.e1p(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.t1n();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776510055, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.v1k(2035960081, Unit_instance);
      $composer_0.s1n(2035960185);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.e1p(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t1n();
      initSilk(tmp1_group);
      $composer_0.y1k();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.s1n(-1196466140);
      Style(null, styleSheet.q2p(), $composer_1, 0, 1);
      $composer_1.t1n();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.s1n(-1196466140);
      Style(null, styleSheet_0.q2p(), $composer_2, 0, 1);
      $composer_2.t1n();
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp2_safe_receiver = $composer_0.n1p();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k1u(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).u2p = function (selector, cssRule) {
    return this.t2p(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function Companion() {
  }
  protoOf(Companion).h3a = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.w(this_1);
    }
    return distinct(destination).j() === 1;
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_3.h3a(this$0.i3a_1);
    };
  }
  function Keyframes(name, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.i3a_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.j3a_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.k3a_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  protoOf(Keyframes).l3a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.k3a_1;
    usesColorMode$factory();
    return this_0.p2();
  };
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.m3a(keyframes.j3a_1, keyframes.i3a_1);
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.o3a_1 = prefix;
    this.p3a_1 = init;
  }
  protoOf(KeyframesProvider).o30 = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.o3a_1, this.p3a_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function toAnimation(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $composer, $changed, $default) {
    var duration_0 = duration;
    var timingFunction_0 = timingFunction;
    var delay_0 = delay;
    var iterationCount_0 = iterationCount;
    var direction_0 = direction;
    var fillMode_0 = fillMode;
    var playState_0 = playState;
    var $composer_0 = $composer;
    $composer_0.s1n(-792208502);
    if (!(($default & 1) === 0))
      duration_0 = null;
    if (!(($default & 2) === 0))
      timingFunction_0 = null;
    if (!(($default & 4) === 0))
      delay_0 = null;
    if (!(($default & 8) === 0))
      iterationCount_0 = null;
    if (!(($default & 16) === 0))
      direction_0 = null;
    if (!(($default & 32) === 0))
      fillMode_0 = null;
    if (!(($default & 64) === 0))
      playState_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-792208502, $changed, -1, 'com.varabyte.kobweb.silk.components.animation.toAnimation (Keyframes.kt:147)');
    }
    var colorMode = _this__u8e3s4.l3a() ? Companion_instance_11.r3a($composer_0, 6) : null;
    var tmp0 = toAnimation_0(_this__u8e3s4, colorMode, duration_0, timingFunction_0, delay_0, iterationCount_0, direction_0, fillMode_0, playState_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function toAnimation_0(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var tmp;
    if (_this__u8e3s4.l3a()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + _this__u8e3s4.j3a_1 + " depends on the site's color mode but no color mode was specified.";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = colorMode;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var colorMode_0 = tmp;
    var tmp_1;
    if (!(colorMode_0 == null)) {
      tmp_1 = suffixedWith(_this__u8e3s4.j3a_1, colorMode_0);
    } else {
      tmp_1 = _this__u8e3s4.j3a_1;
    }
    var finalName = tmp_1;
    return new CSSAnimation(finalName, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.l3a();
    }, null);
  }
  function displayIfAtLeast(_this__u8e3s4, breakpoint) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.x9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-at-least-' + tmp$ret$1]);
  }
  function displayUntil(_this__u8e3s4, breakpoint) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.x9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-until-' + tmp$ret$1]);
  }
  function Companion_0() {
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function ComponentStyle(name, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.s3a_1 = extraModifiers;
    this.t3a_1 = prefix;
    this.u3a_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v3a_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.t3a_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.w3a_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.x3a_1 = new SimpleCssStyle('.' + this.w3a_1, this.u3a_1, this.s3a_1, null);
  }
  protoOf(ComponentStyle).y3a = function (name, extraModifiers, init) {
    var fullName = this.w3a_1 + '-' + name;
    return new SimpleComponentVariant(fullName, new SimpleCssStyle('.' + fullName, init, extraModifiers, null), this);
  };
  function toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-842703364);
    if (isTraceInProgress()) {
      traceEventStart(-842703364, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier (ComponentStyle.kt:270)');
    }
    var tmp0 = toModifier_1(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-974293209);
    if (isTraceInProgress()) {
      traceEventStart(-974293209, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier (ComponentStyle.kt:213)');
    }
    var tmp = toModifier_1(_this__u8e3s4.x3a_1, $composer_0, 0);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3a($composer_0, 0);
    var tmp0 = tmp.v37(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.b3b_1 = extraModifiers;
    this.c3b_1 = prefix;
    this.d3b_1 = init;
  }
  protoOf(ComponentStyleProvider).o30 = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.b3b_1, this.c3b_1, this.d3b_1);
  };
  function ComponentStyle_0(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function ComponentStyle_1(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle_0(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function toAttrs_0(_this__u8e3s4, variant, finalHandler, $composer, $changed, $default) {
    var finalHandler_0 = finalHandler;
    var $composer_0 = $composer;
    $composer_0.s1n(-745290385);
    if (!(($default & 2) === 0))
      finalHandler_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-745290385, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toAttrs (ComponentStyle.kt:228)');
    }
    var tmp0 = toAttrs(toModifier_0(_this__u8e3s4, variant.slice(), $composer_0, 14 & $changed), finalHandler_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:180)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function ComponentVariant() {
  }
  protoOf(ComponentVariant).e3b = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(name, cssStyle, baseStyle) {
    ComponentVariant.call(this);
    this.f3b_1 = name;
    this.g3b_1 = cssStyle;
    this.h3b_1 = baseStyle;
  }
  protoOf(SimpleComponentVariant).z3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(25327230);
    if (isTraceInProgress()) {
      traceEventStart(25327230, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier (ComponentVariant.kt:44)');
    }
    var tmp0 = toModifier_1(this.g3b_1, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.i3b_1 = head;
    this.j3b_1 = tail;
  }
  protoOf(CompositeComponentVariant).z3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-1522694879);
    if (isTraceInProgress()) {
      traceEventStart(-1522694879, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier (ComponentVariant.kt:53)');
    }
    var tmp0 = this.i3b_1.z3a($composer_0, 0).v37(this.j3b_1.z3a($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.l3b_1 = style;
    this.m3b_1 = extraModifiers;
    this.n3b_1 = init;
  }
  protoOf(ComponentVariantProvider).o30 = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.l3b_1.v3a_1 + '-'), '-' + this.l3b_1.v3a_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.l3b_1.y3a(name, this.m3b_1, this.n3b_1);
  };
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant_2(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariant_0(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant_3(_this__u8e3s4, addVariant$lambda_0(extraModifiers), init);
  }
  function addVariant_1(_this__u8e3s4, extraModifiers, init) {
    return addVariant_3(_this__u8e3s4, extraModifiers, init);
  }
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-1181076790);
    if (isTraceInProgress()) {
      traceEventStart(-1181076790, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine (ComponentVariant.kt:90)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.l();
      if (!iterator.z()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.b1();
      while (iterator.z()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.b1();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.e3b(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function addVariant_2(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:127)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function addVariant$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(367464580);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(367464580, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:200)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function get_hover(_this__u8e3s4) {
    return get_hover_0(_this__u8e3s4);
  }
  function get_active(_this__u8e3s4) {
    return get_active_0(_this__u8e3s4);
  }
  function BreakpointSizes(sm, md, lg, xl) {
    return BreakpointSizes_0(sm, md, lg, xl);
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1400383509);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1400383509, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText (SpanText.kt:52)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier_2(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).v37(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_0.s2y());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.v37(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 262293193, true, SpanText$lambda(ref_0, text));
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
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.t1n();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.k1u(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(262293193, $changed, -1, 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous> (SpanText.kt:61)');
      }
      registerRefScope($this$Span, $ref._v, $composer_0, 72);
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q3a_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CacheByPropertyNameDelegate).n2y = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.q3a_1;
    var value = this_0.v2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.o30(name);
      this_0.m2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.q3b_1.o2j(this$1);
      return Unit_instance;
    };
  }
  function invokeLater_0($this, block) {
    $this.p3b_1.w(block);
    if ($this.o3b_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.o3b_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.s3b_1 = $outer;
    this.r3b_1 = null;
  }
  protoOf(Entry).t3b = function () {
    invokeLater_0(this.s3b_1, DeferredComposablesState$Entry$dismiss$lambda(this.s3b_1, this));
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_iterator = this$0.p3b_1.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.p3b_1.e1();
      this$0.o3b_1 = -1;
      return Unit_instance;
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.q3b_1.i1m($it);
      return Unit_instance;
    };
  }
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.u3b($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.o3b_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p3b_1 = ArrayList_init_$Create$_0();
    this.q3b_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).v3b = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).u3b = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1296527038);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1296527038, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.q3b_1.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(2037104680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(2037104680, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().i1u(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$lambda(content, state));
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
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.t1n();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.k1u(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.r3b_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.w3b_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function deferRender(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1215818569);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1215818569, $dirty, -1, 'com.varabyte.kobweb.silk.defer.deferRender (Deferred.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalDeferred();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.h1p(this_0);
      sourceInformationMarkerEnd($composer_1);
      var state = tmp0;
      $composer_0.s1n(-1824718458);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.l1f(state);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>' call
        var value = state.v3b();
        this_1.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var deferredEntry = tmp0_group;
      deferredEntry.r3b_1 = content;
      DisposableEffect(deferredEntry, deferRender$lambda(deferredEntry), $composer_0, 8);
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
      tmp1_safe_receiver.k1u(deferRender$lambda_0(content, $changed));
    }
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.u3b(ComposableSingletons$DeferredKt_getInstance().w3b_1, $composer_0, 70);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($deferredEntry) {
    this.x3b_1 = $deferredEntry;
  }
  protoOf(_no_name_provided__qut3iv).yl = function () {
    // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>.<anonymous>' call
    this.x3b_1.t3b();
  };
  function deferRender$lambda($deferredEntry) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($deferredEntry);
    };
  }
  function deferRender$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      deferRender($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.y3b_1 = config;
    this.z3b_1 = stylesheet;
    this.a3c_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.z3c('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([to(get_DisplayIfAtLeastZeroStyle(), 'silk-display-if-at-least-zero'), to(get_DisplayIfAtLeastSmStyle(), 'silk-display-if-at-least-sm'), to(get_DisplayIfAtLeastMdStyle(), 'silk-display-if-at-least-md'), to(get_DisplayIfAtLeastLgStyle(), 'silk-display-if-at-least-lg'), to(get_DisplayIfAtLeastXlStyle(), 'silk-display-if-at-least-xl'), to(get_DisplayUntilZeroStyle(), 'silk-display-until-zero'), to(get_DisplayUntilSmStyle(), 'silk-display-until-sm'), to(get_DisplayUntilMdStyle(), 'silk-display-until-md'), to(get_DisplayUntilLgStyle(), 'silk-display-until-lg'), to(get_DisplayUntilXlStyle(), 'silk-display-until-xl')]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      var style = element.le();
      var name = element.me();
      mutableTheme.a3d(name, style);
    }
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().g3d(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().k3d(SilkStyleSheet_getInstance());
    get_SilkTheme().l3d(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = asList(document.styleSheets);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      if (element instanceof CSSStyleSheet) {
        destination.w(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = destination.l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.<get-localStyleSheets>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.w(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().j3d_1.c3());
      // Inline function 'kotlin.sequences.filterIsInstance' call
      var tmp = asSequence(get_localStyleSheets(document));
      var this_0 = flatMap(tmp, initSilk$lambda$lambda);
      var tmp_0 = filter(this_0, initSilk$lambda$lambda_0);
      var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
      var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_1));
      var unregisteredLayers = subtract(referencedCssLayers, registeredCssLayers);
      var tmp_2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!unregisteredLayers.q()) {
        var tmp_3 = console;
        var tmp_4 = sorted(unregisteredLayers);
        tmp_3.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_4, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_2) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
        tmp_2 = Unit_instance;
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.l();
      while (tmp0_iterator.z()) {
        var item = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var name = item.me();
        var tmp$ret$3 = '.' + name;
        destination.w(tmp$ret$3);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_2 = get_localStyleSheets(document);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_2.l();
      while (tmp0_iterator_0.z()) {
        var element = tmp0_iterator_0.b1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_3 = asList(element.cssRules);
        var destination_1 = ArrayList_init_$Create$_0();
        var tmp0_iterator_1 = this_3.l();
        while (tmp0_iterator_1.z()) {
          var element_0 = tmp0_iterator_1.b1();
          if (element_0 instanceof CSSMediaRule) {
            destination_1.w(element_0);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_2 = destination_1.l();
        while (tmp0_iterator_2.z()) {
          var element_1 = tmp0_iterator_2.b1();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var list = asList(element_1.cssRules);
          addAll(destination_2, list);
        }
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_3 = destination_2.l();
        while (tmp0_iterator_3.z()) {
          var element_2 = tmp0_iterator_3.b1();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver = element_2 instanceof CSSLayerBlockRule ? element_2 : null;
          var tmp_5;
          if (tmp0_safe_receiver == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.takeIf' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_6;
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_safe_receiver.name === SilkLayer_GENERAL_STYLES_getInstance().q3d_1) {
              tmp_6 = tmp0_safe_receiver;
            } else {
              tmp_6 = null;
            }
            tmp_5 = tmp_6;
          }
          var tmp0_safe_receiver_0 = tmp_5;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_3.w(tmp0_safe_receiver_0);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_4 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_3.l();
        while (tmp0_iterator_4.z()) {
          var element_3 = tmp0_iterator_4.b1();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_4 = asList(element_3.cssRules);
          var destination_5 = ArrayList_init_$Create$_0();
          var tmp0_iterator_5 = this_4.l();
          while (tmp0_iterator_5.z()) {
            var element_4 = tmp0_iterator_5.b1();
            if (element_4 instanceof CSSStyleRule) {
              destination_5.w(element_4);
            }
          }
          var list_0 = destination_5;
          addAll(destination_4, list_0);
        }
        var list_1 = destination_4;
        addAll(destination_0, list_1);
      }
      var tmp0_iterator_6 = destination_0.l();
      while (tmp0_iterator_6.z()) {
        var element_5 = tmp0_iterator_6.b1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var selectorText = element_5.selectorText;
        var innerStyle = element_5.style;
        if (displayStyleSelectorNames.o(selectorText)) {
          var displayValue = innerStyle.getPropertyValue('display');
          innerStyle.setProperty('display', displayValue, 'important');
        }
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_5 = asList(document.styleSheets);
      var destination_6 = ArrayList_init_$Create$_0();
      var tmp0_iterator_7 = this_5.l();
      while (tmp0_iterator_7.z()) {
        var element_6 = tmp0_iterator_7.b1();
        if (element_6 instanceof CSSStyleSheet) {
          destination_6.w(element_6);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_7 = ArrayList_init_$Create$_0();
      var tmp0_iterator_8 = destination_6.l();
      while (tmp0_iterator_8.z()) {
        var element_7 = tmp0_iterator_8.b1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_7.href == null) {
          destination_7.w(element_7);
        }
      }
      var tmp0_iterator_9 = destination_7.l();
      while (tmp0_iterator_9.z()) {
        var element_8 = tmp0_iterator_9.b1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var cssLayers = SilkStylesheetInstance_getInstance().j3d_1.c3();
        element_8.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.r3d_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).s3d = function () {
    return this.r3d_1;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).d35 = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function registerStyleBase(_this__u8e3s4, cssSelector, init) {
    _this__u8e3s4.t3d(cssSelector, registerStyleBase$lambda(init));
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = simpleStyleScope.v3d_1.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.assertNoAttributeModifiers.<anonymous>' call
      assertNoAttributes(element, selectorName, 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + selectorName + '")` and remove the offending attribute(s).');
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance$registerStyle$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-1866964764);
    if (isTraceInProgress()) {
      traceEventStart(-1866964764, $changed, -1, 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStyle.<anonymous> (SilkStylesheet.kt:156)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return Companion_instance;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h3d_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.i3d_1 = LinkedHashMap_init_$Create$();
    this.j3d_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).t3d = function (cssSelector, init) {
    this.h3d_1.w(new SimpleCssStyle(cssSelector, init, SilkStylesheetInstance$registerStyle$lambda, null));
  };
  protoOf(SilkStylesheetInstance).m3a = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.i3d_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).s2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.i3d_1.m2(name, build);
  };
  protoOf(SilkStylesheetInstance).k3d = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.h3d_1.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp = element.z3d_1;
      assertNoAttributeModifiers(typeof tmp === 'function' ? tmp : THROW_CCE(), SilkStylesheetInstance_getInstance(), element.d3e_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.h3d_1.l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element_0.f3e(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.i3d_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_1 = this_0.l2().l();
    while (tmp0_iterator_1.z()) {
      var item = tmp0_iterator_1.b1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.o2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.p2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.i3e(siteStyleSheet, name);
      } else {
        lightBuilder.i3e(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.i3e(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.w(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.w3d(registerStyleBase$lambda$lambda($init));
      return Unit_instance;
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).j3e = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.m3e();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.w(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.s3e_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).m3e = function () {
    return this.p3e(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.v3e_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).m3e = function () {
    return this.p3e(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).w3e = function (other) {
    return new CompositeOpen(this.k3e_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.z3e_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).m3e = function () {
    return this.p3e(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.c3f_1 = mediaQuery;
    this.d3f_1 = attributeSelectors;
    this.e3f_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).o3e = function () {
    return this.c3f_1;
  };
  protoOf(CompositeOpen).m3e = function () {
    return this.p3e(this.d3f_1, this.e3f_1, null);
  };
  function CssRule(target) {
    this.k3e_1 = target;
    this.l3e_1 = null;
  }
  protoOf(CssRule).n3e = function (createModifier) {
    this.k3e_1.x3d(this.o3e(), this.m3e(), createModifier);
  };
  protoOf(CssRule).o3e = function () {
    return this.l3e_1;
  };
  protoOf(CssRule).m3e = function () {
    return null;
  };
  protoOf(CssRule).p3e = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.v5('[' + element.s3e_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.v5(':' + element_0.v3e_1);
    }
    if (!(pseudoElement == null)) {
      this_0.v5('::' + pseudoElement.z3e_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-589847720);
    if (isTraceInProgress()) {
      traceEventStart(-589847720, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:170)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this_null) {
    return function () {
      return $init(new CssStyleBaseScope($this_null.h3f_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function ($this$null) {
      $this$null.w3d(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this$null));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1583284929);
    if (isTraceInProgress()) {
      traceEventStart(1583284929, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:172)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function ($this$null) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-941642769);
    if (isTraceInProgress()) {
      traceEventStart(-941642769, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.<init>.<anonymous> (CssStyle.kt:163)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.v2p(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.o3f_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.n3f_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.m3f_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.k3f_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.l3f_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.v3d_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.o2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.v2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.m2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.w(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.l2().l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.o2();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.p2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.l();
      if (!iterator.z())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.b1();
      while (iterator.z()) {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.b1();
        accumulator = acc.s3f(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.m2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.l2().l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.p2();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
      var styleDeclaration = layer === SilkLayer_COMPONENT_VARIANTS_getInstance().q3d_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : layer === SilkLayer_COMPONENT_STYLES_getInstance().q3d_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.v5(value).w5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.w5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.v5(value_0).w5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.v5(value_1).w5(_Char___init__impl__6a9atx(10));
      var tmp$ret$10 = this_0.toString();
      assertNoAttributes(cssModifier, selectorName, tmp$ret$10);
    }
    return _this__u8e3s4;
  }
  function Companion_3() {
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    return Companion_instance_7;
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(2126113218);
    if (isTraceInProgress()) {
      traceEventStart(2126113218, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<init>.<anonymous> (CssStyle.kt:130)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.z2v_1.l2().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.t2o(element.o2(), element.p2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.a2w_1.l2().l();
      while (tmp0_iterator_0.z()) {
        var element_0 = tmp0_iterator_0.b1();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.z2o(element_0.o2(), element_0.p2());
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.w(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.w(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.u3f_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.t3f_1, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.z3d_1 = init;
    this.a3e_1 = extraModifier;
  }
  protoOf(CssStyle).i3f = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.z3d_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.z3d_1), this, selector, layer);
    var tmp = Companion_instance_8;
    var tmp0_safe_receiver = lightModifiers.v2(Companion_getInstance_6().v3f_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p3f_1;
    var tmp1_safe_receiver = darkModifiers.v2(Companion_getInstance_6().v3f_1);
    var tmp2_safe_receiver = tmp.w3f(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p3f_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.j2(), darkModifiers.j2());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_6().v3f_1)) {
        destination.w(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.l();
    $l$loop: while (tmp3_iterator.z()) {
      var cssRuleKey = tmp3_iterator.b1();
      var tmp_1 = Companion_instance_8;
      var tmp4_safe_receiver = lightModifiers.v2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.p3f_1;
      var tmp5_safe_receiver = darkModifiers.v2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.w3f(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.p3f_1);
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, layer, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).j3f = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.a3e_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.h3f_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.z3f_1 = colorMode;
  }
  function Light(styles) {
    this.o3f_1 = styles;
  }
  function Dark(styles) {
    this.n3f_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.m3f_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.k3f_1 = lightStyles;
    this.l3f_1 = darkStyles;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).w3f = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.w(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.a3g_1 = extraModifier;
    this.b3g_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).z3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(114788234);
    if (isTraceInProgress()) {
      traceEventStart(114788234, $changed, -1, 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier (CssStyle.kt:405)');
    }
    $composer_0.s1n(357887813);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.b3g_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_11.r3a($composer_0, 6).e3g().x9_1.toLowerCase();
      if (!endsWith_0(element, tmp$ret$1)) {
        destination.w(element);
      }
    }
    $composer_0.t1n();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.q()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.v37(this.a3g_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  function GeneralKind() {
  }
  function CssStyle_1(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$4(init, extraModifier);
  }
  function ExtendingCssStyle() {
  }
  function SimpleCssStyle(selector, init, extraModifier, layer) {
    CssStyle.call(this, init, extraModifier);
    this.d3e_1 = selector;
    this.e3e_1 = layer;
  }
  protoOf(SimpleCssStyle).f3e = function (styleSheet) {
    return this.i3f(this.d3e_1, styleSheet, this.e3e_1);
  };
  function toModifier_1(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(748086722);
    if (isTraceInProgress()) {
      traceEventStart(748086722, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:563)');
    }
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1265379901);
    if (isTraceInProgress()) {
      traceEventStart(1265379901, $changed, -1, 'com.varabyte.kobweb.silk.style._toModifier (CssStyle.kt:560)');
    }
    var tmp0 = getValue(get_SilkTheme().f3d_1, _this__u8e3s4).z3a($composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function toModifier_2(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-431222543);
    if (isTraceInProgress()) {
      traceEventStart(-431222543, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:574)');
    }
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine_0(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3a($composer_0, 0);
    var tmp0 = tmp.v37(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_2(extraModifier, init) {
    return new CssStyle$6(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    return new base$3(extraModifier, init);
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    return CssStyle_2(extraModifier, base$lambda_1(init));
  }
  function toModifier_3(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(748086722);
    if (isTraceInProgress()) {
      traceEventStart(748086722, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:571)');
    }
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:520)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:502)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:530)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:512)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this_null, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_null.h3f_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function ($this$null) {
      $this$null.w3d(base$o$_init_$lambda$lambda_d0jdie($this$null, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.h3f_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.w3d(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).f3g = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  protoOf(CssStyleVariant).n2y = function (thisRef, property) {
    return this;
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.g3g_1 = cssStyle;
    this.h3g_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).z3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-1935545974);
    if (isTraceInProgress()) {
      traceEventStart(-1935545974, $changed, -1, 'com.varabyte.kobweb.silk.style.SimpleCssStyleVariant.toModifier (CssStyleVariant.kt:46)');
    }
    var tmp0 = toModifier_2(this.g3g_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant_3(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.i3g_1 = head;
    this.j3g_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).z3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1761922567);
    if (isTraceInProgress()) {
      traceEventStart(1761922567, $changed, -1, 'com.varabyte.kobweb.silk.style.CompositeCssStyleVariant.toModifier (CssStyleVariant.kt:54)');
    }
    var tmp0 = this.i3g_1.z3a($composer_0, 0).v37(this.j3g_1.z3a($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  function combine_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(867312062);
    if (isTraceInProgress()) {
      traceEventStart(867312062, $changed, -1, 'com.varabyte.kobweb.silk.style.combine (CssStyleVariant.kt:97)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.l();
      if (!iterator.z()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.b1();
      while (iterator.z()) {
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.b1();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.f3g(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariant_4(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant_3(_this__u8e3s4, addVariant$lambda_1(extraModifier), init);
  }
  function thenIf(_this__u8e3s4, condition, other) {
    return thenIf_0(_this__u8e3s4, condition, thenIf$lambda(other));
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function thenIf_0(_this__u8e3s4, condition, produce) {
    return condition ? _this__u8e3s4.f3g(produce()) : _this__u8e3s4;
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(754846533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(754846533, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariantBase.<anonymous> (CssStyleVariant.kt:129)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function addVariant$lambda_1($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(1967918819);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1967918819, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariant.<anonymous> (CssStyleVariant.kt:107)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function thenIf$lambda($other) {
    return function () {
      return $other;
    };
  }
  function addVariantBase$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_$receiver.h3f_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.w3d(addVariantBase$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u3d_1 = ArrayList_init_$Create$_0();
    this.v3d_1 = this.u3d_1;
  }
  protoOf(StyleScope).w3d = function (createModifier) {
    this.u3d_1.w(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).x3d = function (mediaQuery, suffix, createModifier) {
    this.u3d_1.w(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).x3f = function (suffix, createModifier) {
    this.u3d_1.w(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).y3d = function (mediaQuery, createModifier) {
    this.u3d_1.w(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).y3f = function (_this__u8e3s4, createModifier) {
    this.y3d(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function Companion_5() {
    Companion_instance_9 = this;
    this.v3f_1 = new Key(null, null);
  }
  var Companion_instance_9;
  function Companion_getInstance_6() {
    if (Companion_instance_9 == null)
      new Companion_5();
    return Companion_instance_9;
  }
  function Key(mediaQuery, suffix) {
    this.t3f_1 = mediaQuery;
    this.u3f_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.t3f_1 + ', suffix=' + this.u3f_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.t3f_1 == null ? 0 : getStringHashCode(this.t3f_1);
    result = imul(result, 31) + (this.u3f_1 == null ? 0 : getStringHashCode(this.u3f_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.t3f_1 == tmp0_other_with_cast.t3f_1))
      return false;
    if (!(this.u3f_1 == tmp0_other_with_cast.u3f_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_6();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.p3f_1 = modifier;
    this.q3f_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().o(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.r3f_1 = tmp_2;
  }
  protoOf(CssModifier).s3f = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.q3f_1, other.q3f_1) : false) ? this.r3f_1 == other.r3f_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.p3f_1.v37(other.p3f_1), this.q3f_1, this.r3f_1);
  };
  protoOf(CssModifier).o2 = function () {
    var tmp0_safe_receiver = this.q3f_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.r3f_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, extraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.p3f_1)(attrsScope);
    if (attrsScope.a2u_1.q())
      return Unit_instance;
    // Inline function 'kotlin.error' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.assertNoAttributes.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.v5(value).w5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.w5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.v5(value_0).w5(_Char___init__impl__6a9atx(10));
    this_0.v5('\tCSS rule: ');
    this_0.v5('"' + selectorName);
    if (!(_this__u8e3s4.q3f_1 == null)) {
      this_0.u5(_this__u8e3s4.q3f_1);
    }
    if (!(_this__u8e3s4.r3f_1 == null)) {
      this_0.v5(_this__u8e3s4.r3f_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.v5('"').w5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var tmp = attrsScope.a2u_1.j2();
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.v5(value_1).w5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.w5(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.v5(extraContext).w5(_Char___init__impl__6a9atx(10));
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
    }
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.h3e_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.l2().l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.o2();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.p2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.m2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.g3e_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h3e_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).k3g = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.h3e_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.m2(pair.je_1, pair.ke_1);
  };
  protoOf(KeyframesBuilder).l3g = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.h3e_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.m2(pair.je_1, pair.ke_1);
  };
  protoOf(KeyframesBuilder).m3g = function (_this__u8e3s4, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.h3e_1;
    var pair = to(new Percentage(_this__u8e3s4), createStyle());
    this_0.m2(pair.je_1, pair.ke_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).i3e = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.h3e_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.l2().l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.o2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.p2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.w(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.f2o(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_6() {
  }
  protoOf(Companion_6).h3a = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.w(this_1);
    }
    return distinct(destination).j() === 1;
  };
  var Companion_instance_10;
  function Companion_getInstance_7() {
    return Companion_instance_10;
  }
  function Keyframes$usesColorMode$delegate$lambda_0(this$0) {
    return function () {
      return !Companion_instance_10.h3a(this$0.n3g_1);
    };
  }
  function Keyframes_1(init) {
    this.n3g_1 = init;
    var tmp = this;
    tmp.o3g_1 = lazy(Keyframes$usesColorMode$delegate$lambda_0(this));
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle;
  }
  var DisplayIfAtLeastZeroStyle;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle;
  }
  var DisplayIfAtLeastSmStyle;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle;
  }
  var DisplayIfAtLeastMdStyle;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle;
  }
  var DisplayIfAtLeastLgStyle;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle;
  }
  var DisplayIfAtLeastXlStyle;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle;
  }
  var DisplayUntilZeroStyle;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle;
  }
  var DisplayUntilSmStyle;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle;
  }
  var DisplayUntilMdStyle;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle;
  }
  var DisplayUntilLgStyle;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle;
  }
  var DisplayUntilXlStyle;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$CssStyle.y3d(tmp, DisplayIfAtLeastZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$CssStyle.y3d(tmp, DisplayIfAtLeastSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$CssStyle.y3d(tmp, DisplayIfAtLeastMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$CssStyle.y3d(tmp, DisplayIfAtLeastLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$CssStyle.y3d(tmp, DisplayIfAtLeastXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.y3f(tmp, DisplayUntilZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.y3f(tmp, DisplayUntilSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.y3f(tmp, DisplayUntilMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$CssStyle.y3f(tmp, DisplayUntilLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$CssStyle.y3f(tmp, DisplayUntilXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle = CssStyle_1(VOID, DisplayIfAtLeastZeroStyle$lambda);
      DisplayIfAtLeastSmStyle = CssStyle_1(VOID, DisplayIfAtLeastSmStyle$lambda);
      DisplayIfAtLeastMdStyle = CssStyle_1(VOID, DisplayIfAtLeastMdStyle$lambda);
      DisplayIfAtLeastLgStyle = CssStyle_1(VOID, DisplayIfAtLeastLgStyle$lambda);
      DisplayIfAtLeastXlStyle = CssStyle_1(VOID, DisplayIfAtLeastXlStyle$lambda);
      DisplayUntilZeroStyle = CssStyle_1(VOID, DisplayUntilZeroStyle$lambda);
      DisplayUntilSmStyle = CssStyle_1(VOID, DisplayUntilSmStyle$lambda);
      DisplayUntilMdStyle = CssStyle_1(VOID, DisplayUntilMdStyle$lambda);
      DisplayUntilLgStyle = CssStyle_1(VOID, DisplayUntilLgStyle$lambda);
      DisplayUntilXlStyle = CssStyle_1(VOID, DisplayUntilXlStyle$lambda);
    }
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.p3g_1 = sm;
    this.q3g_1 = md;
    this.r3g_1 = lg;
    this.s3g_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.p3g_1 + ', md=' + this.q3g_1 + ', lg=' + this.r3g_1 + ', xl=' + this.s3g_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.p3g_1);
    result = imul(result, 31) + hashCode(this.q3g_1) | 0;
    result = imul(result, 31) + hashCode(this.r3g_1) | 0;
    result = imul(result, 31) + hashCode(this.s3g_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.p3g_1, tmp0_other_with_cast.p3g_1))
      return false;
    if (!equals(this.q3g_1, tmp0_other_with_cast.q3g_1))
      return false;
    if (!equals(this.r3g_1, tmp0_other_with_cast.r3g_1))
      return false;
    if (!equals(this.s3g_1, tmp0_other_with_cast.s3g_1))
      return false;
    return true;
  };
  function BreakpointSizes_0(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Rem).u3g = function () {
    return get_px(this.v3g_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.v3g_1 = width;
  }
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  function ResponsiveValues(base, sm, md, lg, xl) {
    this.w3g_1 = base;
    this.x3g_1 = sm;
    this.y3g_1 = md;
    this.z3g_1 = lg;
    this.a3h_1 = xl;
  }
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m3d_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_0();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var item = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.silkLayers.<anonymous>' call
      var tmp$ret$1 = item.q3d_1;
      destination.w(tmp$ret$1);
    }
    tmp_0.n3d_1 = destination;
  }
  protoOf(LayerListBuilder).c3 = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.m3d_1.v2(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.n3d_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>' call
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.q()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.j1(0);
      this_0.w(currLayer);
      var tmp0_safe_receiver = this.m3d_1.v2(currLayer);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>.<anonymous>' call
        layersToProcess.y1(0, tmp0_safe_receiver);
      }
    }
    return this_0.c3();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_0() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 1, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 2, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 3, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 4, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 5, 'general-styles');
  }
  var $ENTRIES_0;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.q3d_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_6.j3e(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.c3c_1.v2(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.b3c_1.m2(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.f3c_1.m2(style, name);
    var tmp;
    if (layer == null) {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + kind;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      var this_0 = tmp_0.q3d_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        tmp_1 = this_0;
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.h3c_1.m2(name, finalLayer);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_1 = $this.l3c_1;
      var value = this_1.v2(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        this_1.m2(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.w(style.d3h_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.j3c_1.m2(originalStyle, newStyle);
    var tmp0_safe_receiver = $this.l3c_1.n2(originalStyle);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.l3c_1.m2(newStyle, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.l3c_1.k2().l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.x(originalStyle)) {
        element.w(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b3c_1 = LinkedHashMap_init_$Create$();
    this.c3c_1 = this.b3c_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.d3c_1 = LinkedHashMap_init_$Create$();
    this.e3c_1 = this.d3c_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.f3c_1 = LinkedHashMap_init_$Create$();
    this.g3c_1 = this.f3c_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.h3c_1 = LinkedHashMap_init_$Create$();
    this.i3c_1 = this.h3c_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.j3c_1 = LinkedHashMap_init_$Create$();
    this.k3c_1 = this.j3c_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.l3c_1 = LinkedHashMap_init_$Create$();
    this.m3c_1 = this.l3c_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.n3c_1 = LinkedHashMap_init_$Create$();
    this.o3c_1 = this.n3c_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.p3c_1 = LinkedHashMap_init_$Create$();
    this.q3c_1 = this.p3c_1;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.r3c_1 = LinkedHashMap_init_$Create$();
    this.s3c_1 = this.r3c_1;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_8.t3c_1 = LinkedHashMap_init_$Create$();
    this.u3c_1 = this.t3c_1;
    var tmp_9 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_9.v3c_1 = LinkedHashMap_init_$Create$();
    this.w3c_1 = this.v3c_1;
    this.x3c_1 = new MutablePalettes();
    this.y3c_1 = BreakpointSizes_0(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).e3h = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).z3c = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.e3h(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.e3h.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).f3h = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).g3h = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.f3h(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.f3h.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).h3h = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).a3d = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.h3h(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.h3h.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).i3h = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.g3c_1.v2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.k3c_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).s2(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.b3c_1.m2(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.f3c_1.m2(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).j3h = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerStyle.<anonymous>' call
    var it = this.o3c_1.v2(style.w3a_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.w3a_1 + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.n3c_1;
    var key = style.w3a_1;
    this_0.m2(key, style);
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.f3c_1;
    var key_0 = style.x3a_1;
    var value = style.w3a_1;
    this_1.m2(key_0, value);
  };
  protoOf(MutableSilkTheme).k3h = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.g3c_1.v2(simpleVariant.h3g_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    var it = this.e3c_1.v2(name_0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.d3c_1.m2(name_0, variant);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.f3c_1;
    var key = variant.g3g_1;
    this_0.m2(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_1 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().q3d_1 : layer;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp_2 = this_1;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h3c_1.m2(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = this.l3c_1;
      var key_0 = variant.g3g_1;
      var value = this_2.v2(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        this_2.m2(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.w(variant.n3h_1.g3g_1);
    }
  };
  protoOf(MutableSilkTheme).o3h = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.k3h(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.k3h.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).p3h = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.w(element);
      }
    }
    var tmp0_iterator = destination.l();
    while (tmp0_iterator.z()) {
      var element_0 = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>.<anonymous>' call
      var it = this.q3c_1.v2(element_0.g3b_1.d3e_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.g3b_1.d3e_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.p3c_1;
      var key = element_0.g3b_1.d3e_1;
      this_0.m2(key, element_0);
      // Inline function 'kotlin.collections.set' call
      var this_1 = this.f3c_1;
      var key_0 = element_0.g3b_1;
      var value = element_0.f3b_1;
      this_1.m2(key_0, value);
    }
  };
  protoOf(MutableSilkTheme).q3h = function (name, keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.r3c_1.v2(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.r3c_1.m2(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.t3c_1.m2(keyframes, name);
  };
  protoOf(MutableSilkTheme).r3h = function (keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.v3c_1.v2(keyframes.j3a_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + keyframes.j3a_1 + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.v3c_1;
    var key = keyframes.j3a_1;
    this_0.m2(key, keyframes);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.o(style))
      return Unit_instance;
    visited.w(style);
    var tmp0_safe_receiver = $dependencies.v2(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.w(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.q())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styles.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.b3d_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.b3d_1.x3c_1;
    tmp.c3d_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.d3d_1 = this.b3d_1.y3c_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.e3d_1 = LinkedHashMap_init_$Create$();
    this.f3d_1 = this.e3d_1;
  }
  protoOf(ImmutableSilkTheme).s3h = function (style) {
    return this.b3d_1.g3c_1.v2(style);
  };
  protoOf(ImmutableSilkTheme).g3d = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.b3d_1.s3c_1.l2().l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.o2();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.p2();
      silkStyleSheet.m3a(name, keyframes.n3g_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.b3d_1.w3c_1.l2().l();
    while (tmp0_iterator_0.z()) {
      var element_0 = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var keyframes_0 = element_0.p2();
      registerKeyframes(silkStyleSheet, keyframes_0);
    }
  };
  protoOf(ImmutableSilkTheme).l3d = function (stylesheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this.b3d_1.c3c_1.k2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.b3d_1.e3c_1.k2();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      if (element instanceof SimpleCssStyleVariant) {
        destination.w(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.l();
    while (tmp0_iterator_0.z()) {
      var item = tmp0_iterator_0.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$3 = item.g3g_1;
      destination_0.w(tmp$ret$3);
    }
    var tmp_0 = plus_0(tmp, destination_0);
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.b3d_1.o3c_1.k2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.l();
    while (tmp0_iterator_1.z()) {
      var item_0 = tmp0_iterator_1.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$6 = item_0.x3a_1;
      destination_1.w(tmp$ret$6);
    }
    var tmp_1 = plus_0(tmp_0, destination_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = this.b3d_1.q3c_1.k2();
    var destination_2 = ArrayList_init_$Create$_0();
    var tmp0_iterator_2 = this_2.l();
    while (tmp0_iterator_2.z()) {
      var element_0 = tmp0_iterator_2.b1();
      if (element_0 instanceof SimpleComponentVariant) {
        destination_2.w(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
    var tmp0_iterator_3 = destination_2.l();
    while (tmp0_iterator_3.z()) {
      var item_1 = tmp0_iterator_3.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$11 = item_1.g3b_1;
      destination_3.w(tmp$ret$11);
    }
    var allCssStyles = plus_0(tmp_1, destination_3);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.b3d_1.m3c_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = allCssStylesSorted.l();
    while (tmp0_iterator_4.z()) {
      var element_1 = tmp0_iterator_4.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.s3h(element_1);
      // Inline function 'kotlin.collections.get' call
      var this_3 = this.b3d_1.i3c_1;
      var layer = (isInterface(this_3, Map) ? this_3 : THROW_CCE()).v2(className);
      var classSelectors = element_1.i3f('.' + className, stylesheet, layer);
      // Inline function 'kotlin.collections.set' call
      var this_4 = this.e3d_1;
      var value = element_1.j3f(classSelectors);
      this_4.m2(element_1, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = this.b3d_1.k3c_1.l2().l();
    while (tmp0_iterator_5.z()) {
      var element_2 = tmp0_iterator_5.b1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_2.o2();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_2.p2();
      // Inline function 'kotlin.collections.set' call
      var this_5 = this.e3d_1;
      var value_0 = getValue(this.e3d_1, overrideStyle);
      this_5.m2(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyComponentStyle(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    modifyStyle(_this__u8e3s4, style, extraModifiers, init);
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyle_0(_this__u8e3s4, style, modifyStyle$lambda(extraModifier), init);
  }
  function modifyStyle_0(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.g3c_1.v2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.c3c_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).s2(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.a3e_1;
    var existingInit = style.z3d_1;
    var tmp_0 = modifyStyle$lambda_0(existingExtraModifier, extraModifier);
    _this__u8e3s4.i3h(style, tmp_0, modifyStyle$lambda_1(existingInit, init));
  }
  function get_name(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().s3h(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid CssStyle. This should only be called on top-level public styles or styles that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle_0(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(1957367000);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1957367000, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous> (SilkTheme.kt:459)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(551899353);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(551899353, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous> (SilkTheme.kt:473)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifier($composer_0, 0).v37($extraModifier($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function modifyStyle$lambda_1($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1n(-308722568);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-308722568, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyleBase.<anonymous> (SilkTheme.kt:485)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.t1n();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.h3f_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.w3d(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v3g_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.y9_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().d3d_1.p3g_1;
        break;
      case 2:
        tmp = get_SilkTheme().d3d_1.q3g_1;
        break;
      case 3:
        tmp = get_SilkTheme().d3d_1.r3g_1;
        break;
      case 4:
        tmp = get_SilkTheme().d3d_1.s3g_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_breakpointFloor(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var this_0 = get_entries();
      var iterator = this_0.n(this_0.j());
      while (iterator.p1()) {
        var element = iterator.q1();
        // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.<get-breakpointFloor>.<anonymous>' call
        if (toPx(element).value <= _this__u8e3s4.innerWidth) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    return tmp$ret$1;
  }
  function toPx(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3g();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function rememberBreakpoint($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(1660417661);
    if (isTraceInProgress()) {
      traceEventStart(1660417661, $changed, -1, 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint (BreakpointUtils.kt:38)');
    }
    var tmp = get_breakpointFloor(window);
    $composer_0.s1n(-852639072);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp_0;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint.<anonymous>' call
      var value = rememberBreakpoint$slambda_0(null);
      $composer_0.e1p(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.t1n();
    var tmp0 = produceState(tmp, tmp1_group, $composer_0, 64).p2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function rememberBreakpoint$slambda$lambda($this_produceState) {
    return function (it) {
      $this_produceState.c10(get_breakpointFloor(window));
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda$lambda_0($resizeListener) {
    return function () {
      window.removeEventListener('resize', $resizeListener);
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberBreakpoint$slambda).d3i = function ($this$produceState, $completion) {
    var tmp = this.e3i($this$produceState, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(rememberBreakpoint$slambda).ad = function (p1, $completion) {
    return this.d3i((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberBreakpoint$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 2;
            var tmp_0 = this;
            tmp_0.c3i_1 = EventListener(rememberBreakpoint$slambda$lambda(this.b3i_1));
            window.addEventListener('resize', this.c3i_1);
            this.cc_1 = 1;
            suspendResult = this.b3i_1.a1v(rememberBreakpoint$slambda$lambda_0(this.c3i_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 2) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  protoOf(rememberBreakpoint$slambda).e3i = function ($this$produceState, completion) {
    var i = new rememberBreakpoint$slambda(completion);
    i.b3i_1 = $this$produceState;
    return i;
  };
  function rememberBreakpoint$slambda_0(resultContinuation) {
    var i = new rememberBreakpoint$slambda(resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.d3i($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.p2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_7() {
  }
  protoOf(Companion_7).f3i = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1n(-974960061);
    if (isTraceInProgress()) {
      traceEventStart(-974960061, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-currentState> (ColorMode.kt:23)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.h1p(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  };
  protoOf(Companion_7).r3a = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.h1p(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.p2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_11;
  function Companion_getInstance_8() {
    return Companion_instance_11;
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).g3i = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).h3i = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).e3g = function () {
    var tmp;
    switch (this.y9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).i3i = function () {
    return get_LocalColorMode().i1u(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.x9_1.toLowerCase();
  }
  function shifted(_this__u8e3s4, colorMode, byPercent) {
    var tmp;
    if (byPercent === VOID) {
      tmp = 0.3;
    } else {
      tmp = byPercent;
    }
    byPercent = tmp;
    _init_properties_ColorMode_kt__lz79sc();
    if (byPercent === 0.0)
      return _this__u8e3s4;
    var shouldLighten = (colorMode.equals(ColorMode_DARK_getInstance()) ? byPercent > 0.0 : false) ? true : (colorMode.equals(ColorMode_LIGHT_getInstance()) ? byPercent < 0.0 : false) ? true : false;
    // Inline function 'kotlin.math.absoluteValue' call
    var byPercent_0 = Math.abs(byPercent);
    return shouldLighten ? lightened(_this__u8e3s4, byPercent_0) : _this__u8e3s4.v38(byPercent_0);
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_5.d35().s3d());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Red() {
    Red_instance = this;
    this.j3i_1 = Companion_instance_2.a39(16772078);
    this.k3i_1 = Companion_instance_2.a39(16764370);
    this.l3i_1 = Companion_instance_2.a39(15702682);
    this.m3i_1 = Companion_instance_2.a39(15037299);
    this.n3i_1 = Companion_instance_2.a39(15684432);
    this.o3i_1 = Companion_instance_2.a39(16007990);
    this.p3i_1 = Companion_instance_2.a39(15022389);
    this.q3i_1 = Companion_instance_2.a39(13840175);
    this.r3i_1 = Companion_instance_2.a39(12986408);
    this.s3i_1 = Companion_instance_2.a39(12000284);
  }
  protoOf(Red).t3i = function () {
    return this.l3i_1;
  };
  protoOf(Red).u3i = function () {
    return this.m3i_1;
  };
  protoOf(Red).v3i = function () {
    return this.n3i_1;
  };
  protoOf(Red).w3i = function () {
    return this.o3i_1;
  };
  protoOf(Red).x3i = function () {
    return this.p3i_1;
  };
  protoOf(Red).y3i = function () {
    return this.q3i_1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.z3i_1 = Companion_instance_2.a39(14938877);
    this.a3j_1 = Companion_instance_2.a39(12312315);
    this.b3j_1 = Companion_instance_2.a39(9489145);
    this.c3j_1 = Companion_instance_2.a39(6600182);
    this.d3j_1 = Companion_instance_2.a39(4367861);
    this.e3j_1 = Companion_instance_2.a39(2201331);
    this.f3j_1 = Companion_instance_2.a39(2001125);
    this.g3j_1 = Companion_instance_2.a39(1668818);
    this.h3j_1 = Companion_instance_2.a39(1402304);
    this.i3j_1 = Companion_instance_2.a39(870305);
  }
  protoOf(Blue).t3i = function () {
    return this.b3j_1;
  };
  protoOf(Blue).u3i = function () {
    return this.c3j_1;
  };
  protoOf(Blue).v3i = function () {
    return this.d3j_1;
  };
  protoOf(Blue).w3i = function () {
    return this.e3j_1;
  };
  protoOf(Blue).x3i = function () {
    return this.f3j_1;
  };
  protoOf(Blue).y3i = function () {
    return this.g3j_1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.j3j_1 = Companion_instance_2.a39(16448250);
    this.k3j_1 = Companion_instance_2.a39(16119285);
    this.l3j_1 = Companion_instance_2.a39(15658734);
    this.m3j_1 = Companion_instance_2.a39(14737632);
    this.n3j_1 = Companion_instance_2.a39(12434877);
    this.o3j_1 = Companion_instance_2.a39(10395294);
    this.p3j_1 = Companion_instance_2.a39(7697781);
    this.q3j_1 = Companion_instance_2.a39(6381921);
    this.r3j_1 = Companion_instance_2.a39(4342338);
    this.s3j_1 = Companion_instance_2.a39(2171169);
  }
  protoOf(Gray).t3i = function () {
    return this.l3j_1;
  };
  protoOf(Gray).u3i = function () {
    return this.m3j_1;
  };
  protoOf(Gray).v3i = function () {
    return this.n3j_1;
  };
  protoOf(Gray).w3i = function () {
    return this.o3j_1;
  };
  protoOf(Gray).x3i = function () {
    return this.p3j_1;
  };
  protoOf(Gray).y3i = function () {
    return this.q3j_1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  function MutablePalettes() {
    this.t3j_1 = new MutablePalette();
    this.u3j_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).v3j = function () {
    return this.t3j_1;
  };
  protoOf(MutablePalettes).w3j = function () {
    return this.u3j_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.a3k_1 = palette;
    this.b3k_1 = prefix;
  }
  protoOf(EntryDelegate).n2y = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.b3k_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.a3k_1.c3k_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).d3k = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.a3k_1.c3k_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.b3k_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.m2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.e3k_1 = palette;
    this.f3k_1 = groupName;
  }
  protoOf(ColorGroup).g3k = function () {
    return new EntryDelegate(this.e3k_1, this.f3k_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c3k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).y3j = function (key) {
    return this.c3k_1.v2(key);
  };
  protoOf(MutablePalette).h3k = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.c3k_1.m2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().c3d_1.x3j(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.i3k();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.j3k_1 = topLeft;
    this.k3k_1 = botRight;
    this.l3k_1 = cornerRadius;
  }
  protoOf(RectF).i3k = function () {
    var tmp;
    if ((((!(this.j3k_1.je_1 === 0.0) ? true : !(this.j3k_1.ke_1 === 0.0)) ? true : !(this.k3k_1.je_1 === 100.0)) ? true : !(this.k3k_1.ke_1 === 100.0)) ? true : !equals(this.l3k_1, get_px(0))) {
      tmp = new InsetPath(this.j3k_1, this.k3k_1, this.l3k_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).n3k = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).o3k = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.je_1) + '% ' + toString(_this__u8e3s4.ke_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.je_1, 100.0 - _this__u8e3s4.ke_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.p3k_1 = topLeft;
    this.q3k_1 = roundness;
    this.r3k_1 = from100(botRight);
  }
  protoOf(InsetPath).m3k = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.q3k_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.p3k_1.je_1;
    var top = this.p3k_1.ke_1;
    var right = this.r3k_1.je_1;
    var bottom = this.r3k_1.ke_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.n3k(left) : (left === right ? top === bottom : false) ? this.o3k(to(top, left)) : this.n3k(top) + ' ' + this.n3k(right) + ' ' + this.n3k(bottom) + ' ' + this.n3k(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2o('clip-path', $path.m3k());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).x3j = get;
  protoOf(MutablePalette).z3j = getValue_0;
  //endregion
  //region block: init
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_7 = new Companion_3();
  Companion_instance_8 = new Companion_4();
  Companion_instance_10 = new Companion_6();
  _SilkTheme = null;
  Companion_instance_11 = new Companion_7();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = toAnimation;
  _.$_$.c = displayIfAtLeast;
  _.$_$.d = displayUntil;
  _.$_$.e = BreakpointSizes;
  _.$_$.f = ComponentStyle_0;
  _.$_$.g = ComponentStyle_1;
  _.$_$.h = get_active;
  _.$_$.i = addVariant_1;
  _.$_$.j = addVariant;
  _.$_$.k = addVariant_0;
  _.$_$.l = get_hover;
  _.$_$.m = toAttrs_0;
  _.$_$.n = toModifier;
  _.$_$.o = toModifier_0;
  _.$_$.p = SpanText;
  _.$_$.q = deferRender;
  _.$_$.r = renderWithDeferred;
  _.$_$.s = set_additionalSilkInitialization;
  _.$_$.t = registerStyleBase;
  _.$_$.u = Keyframes_1;
  _.$_$.v = get_entries;
  _.$_$.w = ResponsiveValues;
  _.$_$.x = get_active_0;
  _.$_$.y = get_ariaDisabled;
  _.$_$.z = get_ariaInvalid;
  _.$_$.a1 = get_disabled;
  _.$_$.b1 = get_focusVisible;
  _.$_$.c1 = get_hover_0;
  _.$_$.d1 = get_link;
  _.$_$.e1 = not;
  _.$_$.f1 = get_placeholder;
  _.$_$.g1 = get_visited;
  _.$_$.h1 = Base;
  _.$_$.i1 = CssStyle_0;
  _.$_$.j1 = CssStyle_2;
  _.$_$.k1 = addVariantBase;
  _.$_$.l1 = addVariant_4;
  _.$_$.m1 = base_1;
  _.$_$.n1 = base_0;
  _.$_$.o1 = base;
  _.$_$.p1 = thenIf;
  _.$_$.q1 = toModifier_3;
  _.$_$.r1 = toModifier_2;
  _.$_$.s1 = toModifier_1;
  _.$_$.t1 = rememberBreakpoint;
  _.$_$.u1 = ColorGroup;
  _.$_$.v1 = MutablePalette;
  _.$_$.w1 = toPalette;
  _.$_$.x1 = valueOf;
  _.$_$.y1 = shifted;
  _.$_$.z1 = suffixedWith;
  _.$_$.a2 = clip;
  _.$_$.b2 = modifyComponentStyle;
  _.$_$.c2 = modifyStyleBase;
  _.$_$.d2 = get_name;
  _.$_$.e2 = prepareSilkFoundation;
  _.$_$.f2 = Breakpoint_LG_getInstance;
  _.$_$.g2 = Breakpoint_MD_getInstance;
  _.$_$.h2 = Breakpoint_SM_getInstance;
  _.$_$.i2 = Breakpoint_XL_getInstance;
  _.$_$.j2 = Breakpoint_ZERO_getInstance;
  _.$_$.k2 = ColorMode_DARK_getInstance;
  _.$_$.l2 = ColorMode_LIGHT_getInstance;
  _.$_$.m2 = Base_init_$Init$;
  _.$_$.n2 = RectF_init_$Create$_0;
  _.$_$.o2 = Companion_instance_7;
  _.$_$.p2 = Companion_instance_11;
  _.$_$.q2 = Blue_getInstance;
  _.$_$.r2 = Gray_getInstance;
  _.$_$.s2 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
