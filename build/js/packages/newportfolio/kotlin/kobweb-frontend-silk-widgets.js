(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx-coroutines-core'], this['kobweb-frontend-browser-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var protoOf = kotlin_kotlin.$_$.z6;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var listOf = kotlin_kotlin.$_$.c4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var KProperty1 = kotlin_kotlin.$_$.l7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m2;
  var classMeta = kotlin_kotlin.$_$.c6;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var Polyline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var to = kotlin_kotlin.$_$.ha;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var Rect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aa;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var getValue = kotlin_kotlin.$_$.s3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var mapCapacity = kotlin_kotlin.$_$.d4;
  var coerceAtLeast = kotlin_kotlin.$_$.d7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.i7;
  var THROW_ISE = kotlin_kotlin.$_$.r9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i6;
  var CoroutineImpl = kotlin_kotlin.$_$.s5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.r6;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var EventListenerManager = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var merge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Enum = kotlin_kotlin.$_$.i9;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q4;
  var deferRender = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var disposableRef = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var toDouble = kotlin_kotlin.$_$.w8;
  var toString = kotlin_kotlin.$_$.c7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var interfaceMeta = kotlin_kotlin.$_$.o6;
  var IllegalStateException = kotlin_kotlin.$_$.l9;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var KMutableProperty1 = kotlin_kotlin.$_$.j7;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var ResizeObserver_init_$Create$ = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var numberToDouble = kotlin_kotlin.$_$.v6;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var split = kotlin_kotlin.$_$.o8;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var KProperty0 = kotlin_kotlin.$_$.k7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ButtonSize, 'ButtonSize', classMeta, Base);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(CheckboxSize, 'CheckboxSize', classMeta, Base);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(InputSize, 'InputSize', classMeta, Base);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(SwitchSize, 'SwitchSize', classMeta, Base);
  setMetadataFor(Fill, 'Fill', classMeta, VOID, VOID, Fill);
  setMetadataFor(Stroke, 'Stroke', classMeta, VOID, VOID, Stroke);
  setMetadataFor(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt', objectMeta);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$lambda$lambda$slambda, 'Surface$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(KeepPopupOpenStrategy, 'KeepPopupOpenStrategy', classMeta);
  setMetadataFor(never$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(onFocus$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(onHover$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(combine$o$slambda, 'combine$o$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(OpenClosePopupStrategy, 'OpenClosePopupStrategy', classMeta);
  setMetadataFor(OpenClose, 'OpenClose', classMeta, Enum);
  setMetadataFor(onFocus$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(onHover$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(combine$o$slambda_1, 'combine$o$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt', objectMeta);
  setMetadataFor(PopoverShowHideSettings, 'PopoverShowHideSettings', classMeta);
  setMetadataFor(PopoverStateController$slambda, 'PopoverStateController$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PopoverStateController$slambda_1, 'PopoverStateController$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PopoverStateController, 'PopoverStateController', classMeta);
  setMetadataFor(PopoverElements, 'PopoverElements', classMeta);
  setMetadataFor(Uninitialized, 'Uninitialized', objectMeta);
  setMetadataFor(Initialized, 'Initialized', interfaceMeta);
  setMetadataFor(FoundElements, 'FoundElements', classMeta, VOID, [Initialized]);
  setMetadataFor(Visible, 'Visible', interfaceMeta, VOID, [Initialized]);
  setMetadataFor(Calculating, 'Calculating', classMeta, VOID, [Visible]);
  setMetadataFor(Shown, 'Shown', classMeta, VOID, [Visible]);
  setMetadataFor(Hiding, 'Hiding', classMeta, VOID, [Visible]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(PopupPlacement, 'PopupPlacement', classMeta, Enum);
  setMetadataFor(PopupPlacementStrategy, 'PopupPlacementStrategy', classMeta);
  setMetadataFor(PopupPlacementStrategy$Companion$of$1, VOID, classMeta, PopupPlacementStrategy);
  setMetadataFor(Position, 'Position', classMeta);
  setMetadataFor(PositionAndPlacement, 'PositionAndPlacement', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PopupScope, 'PopupScope', classMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(BorderRadiusVars, 'BorderRadiusVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  function TabVars() {
    TabVars_instance = this;
    this.s3k_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().h2y();
    tmp.t3k_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.u3k_1 = StyleVariable('silk');
    this.v3k_1 = StyleVariable('silk');
    this.w3k_1 = StyleVariable('silk');
    this.x3k_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.y3k_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f2v().h2y();
    tmp_1.z3k_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).i3l = function () {
    return this.s3k_1.n2y(this, Color$factory());
  };
  protoOf(TabVars).j3l = function () {
    return this.t3k_1.n2y(this, BorderColor$factory());
  };
  protoOf(TabVars).k3l = function () {
    return this.u3k_1.n2y(this, BackgroundColor$factory());
  };
  protoOf(TabVars).l3l = function () {
    return this.v3k_1.n2y(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).m3l = function () {
    return this.w3k_1.n2y(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).n3l = function () {
    return this.x3k_1.n2y(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).o3l = function () {
    return this.y3k_1.n2y(this, BorderThickness$factory());
  };
  protoOf(TabVars).p3l = function () {
    return this.z3k_1.n2y(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().o3l().h2y();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().j3l().h2y());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.s1n(2044107546);
    if (isTraceInProgress()) {
      traceEventStart(2044107546, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle.<anonymous> (Tabs.kt:62)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.w3d(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.n3e(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.n3e(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.n3e(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.b2w()), Companion_getInstance().g2z(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().p3l().h2y())), TabVars_getInstance().k3l().h2y()), TabVars_getInstance().i3l().h2y()), Companion_instance_2.e2w()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().o3l().h2y();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().j3l().h2y());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.o2z(TabVars_getInstance().o3l().h2y());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().l3l().h2y()), Companion_instance_1.c2w());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().m3l().h2y());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().n3l().h2y());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.b3a(Companion_instance_3.w2x());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.i3l();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.j3l();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k3l();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.l3l();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.m3l();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n3l();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.o3l();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p3l();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_4;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_4;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.q3l_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().h2y();
    tmp.r3l_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.s3l_1 = StyleVariable('silk');
    this.t3l_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().h2y();
    tmp_0.u3l_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f2v().h2y();
    tmp_1.v3l_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.w3l_1 = StyleVariable('silk');
    this.x3l_1 = StyleVariable('silk');
    this.y3l_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).z3l = function () {
    return this.q3l_1.n2y(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).a3m = function () {
    return this.r3l_1.n2y(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).b3m = function () {
    return this.s3l_1.n2y(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).c3m = function () {
    return this.t3l_1.n2y(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).i3l = function () {
    return this.u3l_1.n2y(this, Color$factory_0());
  };
  protoOf(ButtonVars).p3l = function () {
    return this.v3l_1.n2y(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).d3m = function () {
    return this.w3l_1.n2y(this, FontSize$factory());
  };
  protoOf(ButtonVars).e3m = function () {
    return this.x3l_1.n2y(this, Height$factory());
  };
  protoOf(ButtonVars).f3m = function () {
    return this.y3l_1.n2y(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Button_0(onClick_0, modifier, variant, type, enabled, size, colorScheme, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorScheme_0 = {_v: colorScheme};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-185420458);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.l1f(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.o1o(enabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.l1f(size_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 524288;
    if (!(($default & 128) === 0))
      $dirty = $dirty | 4194304;
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 536870912 : 268435456);
    if (!(($default & 194) === 194) ? true : !(($dirty & 1533916891) === 306783378) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        type_0._v = ButtonType_Button_getInstance();
      }
      if (!(($default & 16) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        size_0._v = Companion_getInstance_1().i3m_1;
      }
      if (!(($default & 64) === 0)) {
        colorScheme_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        focusBorderColor_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-185420458, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Button (Button.kt:132)');
      }
      $composer_0.s1n(994961031);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      $composer_0.s1n(994960085);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, 0), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, 0)).v37(toModifier_1(size_0._v, $composer_0, 14 & $dirty >> 15));
      var tmp;
      if (!(colorScheme_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var colorScheme_1 = ensureNotNull(colorScheme_0._v);
        var isDark = Companion_instance_5.r3a($composer_0, 8).h3i();
        var isBrightColor = get_isBright(isDark ? colorScheme_1.t3i() : colorScheme_1.w3i());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().i3l(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().z3l(), isDark ? colorScheme_1.t3i() : colorScheme_1.w3i()), ButtonVars_getInstance().b3m(), isDark ? colorScheme_1.u3i() : colorScheme_1.x3i()), ButtonVars_getInstance().c3m(), isDark ? colorScheme_1.v3i() : colorScheme_1.y3i());
      } else {
        tmp = Companion_instance;
      }
      var tmp0_group = this_0.v37(tmp);
      $composer_0.t1n();
      var this_1 = setVariable(tmp0_group, ButtonVars_getInstance().a3m(), focusBorderColor_0._v).v37(modifier_0._v);
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var tmp_1 = Companion_instance;
        $composer_0.s1n(2066660976);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.y1o();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
          var value = Button$lambda(onClick_0);
          this_2.e1p(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.t1n();
        tmp_0 = onClick(tmp_1, tmp0_group_0);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp1_group = this_1.v37(tmp_0);
      $composer_0.t1n();
      $composer_0.s1n(994961252);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.y1o();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var value_0 = Button$lambda_0(type_0);
        this_3.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t1n();
      var tmp_6 = toAttrs(tmp1_group, tmp2_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -2062590500, true, Button$lambda_1(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.y1o();
      var tmp_8;
      if (invalid_1 ? true : it_1 === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.e1p(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_1.t1n();
      Button(tmp_6, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp3_safe_receiver = $composer_0.n1p();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.k1u(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorScheme_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function Companion() {
    Companion_instance_14 = this;
    this.g3m_1 = new ButtonSize(FontSizeVars_getInstance().o3m().h2y(), get_cssRem(1.5), get_cssRem(0.5));
    this.h3m_1 = new ButtonSize(FontSizeVars_getInstance().p3m().h2y(), get_cssRem(2), get_cssRem(0.75));
    this.i3m_1 = new ButtonSize(FontSizeVars_getInstance().q3m().h2y(), get_cssRem(2.5), get_cssRem(1));
    this.j3m_1 = new ButtonSize(FontSizeVars_getInstance().r3m().h2y(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_14;
  function Companion_getInstance_1() {
    if (Companion_instance_14 == null)
      new Companion();
    return Companion_instance_14;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().d3m(), fontSize), ButtonVars_getInstance().e3m(), height), ButtonVars_getInstance().f3m(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.w3d(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.n3e(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.n3e(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.n3e(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().i3l().h2y()), ButtonVars_getInstance().z3l().h2y()), 1.2), ButtonVars_getInstance().e3m().h2y()), ButtonVars_getInstance().e3m().h2y()), ButtonVars_getInstance().d3m().h2y()), Companion_instance_6.h2w()), Companion_instance_7.r2y()), VOID, ButtonVars_getInstance().f3m().h2y()), Companion_instance_8.l2x()), get_cssRem(0.375));
    return transition_0(userSelect(border(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_2.e2w()), [Companion_getInstance().e2z('background-color', ButtonVars_getInstance().p3l().h2y())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.u39(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().b3m().h2y()), Companion_instance_1.b2w());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.c39()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().a3m().h2y());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().c3m().h2y());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.q2s();
      return Unit_instance;
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2062590500, $changed, -1, 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous> (Button.kt:161)');
      }
      registerRefScope($this$Button, $ref._v, $composer_0, 72);
      var tmp = Center_instance;
      var tmp_0 = CenterVertically_instance;
      Row(null, tmp, tmp_0, null, $content, $composer_0, 0, 9);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorScheme, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorScheme._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.z3l();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.a3m();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.b3m();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.c3m();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.i3l();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p3l();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.d3m();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.e3m();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.f3m();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().h2y();
    tmp.s3m_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.t3m_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.u3m_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.v3m_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.w3m_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.x3m_1 = StyleVariable('silk');
    this.y3m_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().h2y();
    tmp_3.z3m_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.a3n_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.b3n_1 = StyleVariable('silk');
    this.c3n_1 = StyleVariable('silk');
    this.d3n_1 = StyleVariable('silk');
    this.e3n_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().g3n().h2y();
    tmp_5.f3n_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).j3l = function () {
    return this.s3m_1.n2y(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).h3n = function () {
    return this.t3m_1.n2y(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).i3n = function () {
    return this.u3m_1.n2y(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).j3n = function () {
    return this.v3m_1.n2y(this, Size$factory());
  };
  protoOf(CheckboxVars).k3n = function () {
    return this.w3m_1.n2y(this, Spacing$factory());
  };
  protoOf(CheckboxVars).d3m = function () {
    return this.x3m_1.n2y(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).l3n = function () {
    return this.y3m_1.n2y(this, IconSize$factory());
  };
  protoOf(CheckboxVars).m3n = function () {
    return this.z3m_1.n2y(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).n3n = function () {
    return this.a3n_1.n2y(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).o3n = function () {
    return this.b3n_1.n2y(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).p3n = function () {
    return this.c3n_1.n2y(this, IconColor$factory());
  };
  protoOf(CheckboxVars).q3n = function () {
    return this.d3n_1.n2y(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).r3n = function () {
    return this.e3n_1.n2y(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).s3n = function () {
    return this.f3n_1.n2y(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_0() {
    Companion_instance_15 = this;
    this.t3n_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().p3m().h2y());
    this.u3n_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().q3m().h2y());
    this.v3n_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().r3m().h2y());
  }
  var Companion_instance_15;
  function Companion_getInstance_2() {
    if (Companion_instance_15 == null)
      new Companion_0();
    return Companion_instance_15;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().j3n(), boxSize), CheckboxVars_getInstance().l3n(), iconSize), CheckboxVars_getInstance().d3m(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.w3d(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().k3n().h2y()), Companion_instance_2.e2w()), CheckboxVars_getInstance().d3m().h2y()), Companion_instance_1.b2w());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$$receiver) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$$receiver.k3g(CheckboxEnabledAnim$lambda$lambda);
    $this$$receiver.l3g(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.w3d(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().l3n().h2y()), CheckboxVars_getInstance().j3n().h2y());
    var tmp_0 = CheckboxVars_getInstance().i3n().h2y();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().j3l().h2y()), CheckboxVars_getInstance().h3n().h2y()), Companion_getInstance().g2z(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().s3n().h2y()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().o3n().h2y());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.w3d(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().q3n().h2y());
    return border(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.s39(CheckboxVars_getInstance().q3n().h2y());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().j3n().h2y()), CheckboxVars_getInstance().p3n().h2y());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.w3d(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.x3f(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.x3f(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().n3n().h2y(), CheckboxVars_getInstance().m3n().h2y());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().q3n(), CheckboxVars_getInstance().r3n().h2y());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.j3l();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h3n();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.i3n();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.j3n();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.k3n();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.d3m();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.l3n();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.m3n();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.n3n();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.o3n();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.p3n();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.q3n();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.r3n();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s3n();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_4;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().h2y();
    tmp.w3n_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.x3n_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().h2y();
    tmp_0.y3n_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.z3n_1 = StyleVariable('silk');
    this.a3o_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f2v().h2y();
    tmp_1.b3o_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.c3o_1 = StyleVariable('silk');
    this.d3o_1 = StyleVariable('silk');
    this.e3o_1 = StyleVariable('silk');
    this.f3o_1 = StyleVariable('silk');
    this.g3o_1 = StyleVariable('silk');
    this.h3o_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().h2y();
    tmp_2.i3o_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().h2y();
    tmp_3.j3o_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.k3o_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.l3o_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).j3l = function () {
    return this.w3n_1.n2y(this, BorderColor$factory_1());
  };
  protoOf(InputVars).h3n = function () {
    return this.x3n_1.n2y(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).m3o = function () {
    return this.y3n_1.n2y(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).n3o = function () {
    return this.z3n_1.n2y(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).o3o = function () {
    return this.a3o_1.n2y(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).p3l = function () {
    return this.b3o_1.n2y(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).p3o = function () {
    return this.c3o_1.n2y(this, FilledColor$factory());
  };
  protoOf(InputVars).q3o = function () {
    return this.d3o_1.n2y(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).r3o = function () {
    return this.e3o_1.n2y(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).d3m = function () {
    return this.f3o_1.n2y(this, FontSize$factory_1());
  };
  protoOf(InputVars).e3m = function () {
    return this.g3o_1.n2y(this, Height$factory_0());
  };
  protoOf(InputVars).s3o = function () {
    return this.h3o_1.n2y(this, Padding$factory());
  };
  protoOf(InputVars).t3o = function () {
    return this.i3o_1.n2y(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).u3o = function () {
    return this.j3o_1.n2y(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().s3o().h2y();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_1() {
    Companion_instance_16 = this;
    this.v3o_1 = new InputSize(FontSizeVars_getInstance().o3m().h2y(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().o3m().h2y());
    this.w3o_1 = new InputSize(FontSizeVars_getInstance().p3m().h2y(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().p3m().h2y());
    this.x3o_1 = new InputSize(FontSizeVars_getInstance().q3m().h2y(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().q3m().h2y());
    this.y3o_1 = new InputSize(FontSizeVars_getInstance().r3m().h2y(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().q3m().h2y());
  }
  var Companion_instance_16;
  function Companion_getInstance_3() {
    if (Companion_instance_16 == null)
      new Companion_1();
    return Companion_instance_16;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().d3m(), fontSize), InputVars_getInstance().e3m(), height), InputVars_getInstance().s3o(), padding), InputVars_getInstance().h3n(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.c39());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.c39()), InputVars_getInstance().h3n().h2y()), InputVars_getInstance().d3m().h2y());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.w3d(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.n3e(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_10.e2w()), get_ColorVar().h2y()), InputVars_getInstance().e3m().h2y()), InputVars_getInstance().d3m().h2y()), Colors_instance.c39());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.c39());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border_0(tmp_1, tmp_2, 'solid', Colors_instance.c39()), Companion_getInstance().g2z(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().p3l().h2y()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().t3o().h2y()), InputVars_getInstance().u3o().h2y());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.w3d(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.n3e(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.n3e(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.n3e(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().h3n().h2y());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().j3l().h2y());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().o3o().h2y());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s39(InputVars_getInstance().n3o().h2y());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().m3o().h2y());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.w3d(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.n3e(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.n3e(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.n3e(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().p3o().h2y()), InputVars_getInstance().h3n().h2y());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.c39());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().q3o().h2y());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().o3o().h2y());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().r3o().h2y()), InputVars_getInstance().m3o().h2y());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s39($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.w3d(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.n3e(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.n3e(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).w3e(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.n3e(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().j3l().h2y());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().o3o().h2y());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s39(InputVars_getInstance().n3o().h2y());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().m3o().h2y());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s39($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.j3l();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h3n();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.m3o();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.n3o();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.o3o();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p3l();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.p3o();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.q3o();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.r3o();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.d3m();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.e3m();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.s3o();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.t3o();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.u3o();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_3.v2x()), Companion_instance_7.r2y());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_4;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.d3p_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.e3p_1 = StyleVariable('silk');
    this.f3p_1 = StyleVariable('silk');
    this.g3p_1 = StyleVariable('silk');
    this.h3p_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().h2y();
    tmp_0.i3p_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.j3p_1 = StyleVariable('silk');
    this.k3p_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().m3p().h2y();
    tmp_1.l3p_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).h3n = function () {
    return this.d3p_1.n2y(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).n3p = function () {
    return this.e3p_1.n2y(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).o3p = function () {
    return this.f3p_1.n2y(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).p3p = function () {
    return this.g3p_1.n2y(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).q3p = function () {
    return this.h3p_1.n2y(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).r3p = function () {
    return this.i3p_1.n2y(this, FocusColor$factory());
  };
  protoOf(SwitchVars).s3p = function () {
    return this.j3p_1.n2y(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).t3p = function () {
    return this.k3p_1.n2y(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).s3n = function () {
    return this.l3p_1.n2y(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_2() {
    Companion_instance_17 = this;
    this.u3p_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.v3p_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.w3p_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_17;
  function Companion_getInstance_4() {
    if (Companion_instance_17 == null)
      new Companion_2();
    return Companion_instance_17;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_4();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().n3p(), width), SwitchVars_getInstance().o3p(), height), SwitchVars_getInstance().p3p(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.w3d(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).w3e(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.n3e(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().n3p().h2y()), SwitchVars_getInstance().n3p().h2y()), SwitchVars_getInstance().o3p().h2y()), SwitchVars_getInstance().o3p().h2y()), SwitchVars_getInstance().p3p().h2y()), SwitchVars_getInstance().h3n().h2y()), SwitchVars_getInstance().q3p().h2y()), [Companion_getInstance().e2z('background-color', SwitchVars_getInstance().s3n().h2y())]), Companion_instance_11.p2v());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.b2w());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.w3d(SwitchInputVariant$lambda$lambda);
    $this$addVariant.x3f(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().r3p().h2y());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().o3p().h2y()), SwitchVars_getInstance().h3n().h2y()), SwitchVars_getInstance().t3p().h2y()), SwitchVars_getInstance().s3p().h2y()), [Companion_getInstance().e2z('translate', SwitchVars_getInstance().s3n().h2y())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.h3n();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.n3p();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.o3p();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.p3p();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.q3p();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.r3p();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.s3p();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.t3p();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s3n();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_4;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_4;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
    }
  }
  function CloseIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-15719902);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-15719902, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.CloseIcon (Icons.kt:280)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().i3q_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(CloseIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.r3q_1 = strokeWidth;
  }
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-26632938);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.l1f(viewBox_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.l1f(renderStyle_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_12.y31(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-26632938, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.createIcon (Icons.kt:56)');
      }
      Svg(createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0), content, $composer_0, 112 & $dirty >> 9, 0);
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
      tmp0_safe_receiver.k1u(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(187923078, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:82)');
    }
    $composer_0.s1n(-1310550210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0($this$d) {
    $this$d.n31(20, 11);
    $this$d.t31(7.83);
    $this$d.o31(5.59, -5.59, true);
    $this$d.p31(12, 4);
    $this$d.o31(-8, 8, true);
    $this$d.o31(8, 8, true);
    $this$d.o31(1.41, -1.41, true);
    $this$d.p31(7.83, 13);
    $this$d.t31(20);
    $this$d.q31(-2, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(465018625, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:103)');
    }
    $composer_0.s1n(-1816108166);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf($this$d) {
    $this$d.n31(20, 12);
    $this$d.o31(-1.41, -1.41, true);
    $this$d.p31(13, 16.17);
    $this$d.r31(4);
    $this$d.s31(-2, true);
    $this$d.q31(12.17, true);
    $this$d.o31(-5.58, -5.59, true);
    $this$d.p31(4, 12);
    $this$d.o31(8, 8, true);
    $this$d.o31(8, -8, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1093309942, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:124)');
    }
    $composer_0.s1n(1973301197);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia($this$d) {
    $this$d.n31(12, 4);
    $this$d.o31(-1.14, 1.41, true);
    $this$d.p31(16.17, 11);
    $this$d.t31(4);
    $this$d.q31(2, true);
    $this$d.s31(12.17, true);
    $this$d.o31(-5.58, 5.59, true);
    $this$d.p31(12, 20);
    $this$d.o31(8, -8, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(353353466, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:144)');
    }
    $composer_0.s1n(1467743210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65($this$d) {
    $this$d.n31(4, 12);
    $this$d.o31(1.41, 1.41, true);
    $this$d.p31(11, 7.83);
    $this$d.r31(20);
    $this$d.s31(2, true);
    $this$d.r31(7.83);
    $this$d.o31(5.58, 5.59, true);
    $this$d.p31(20, 12);
    $this$d.o31(-8, -8, true);
    $this$d.o31(-8, 8, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(14879965, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:165)');
    }
    $composer_0.s1n(962185252);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k($this$d) {
    $this$d.n31(21.843, 3.455);
    $this$d.u31(6.961, 6.961, 0, 0, 0, -9.846, 0, true);
    $this$d.p31(1.619, 13.832);
    $this$d.u31(5.128, 5.128, 0, 0, 0, 7.252, 7.252, true);
    $this$d.p31(17.3, 12.653);
    $this$d.v31(3.293, 3.293, 0, 1, 0, 12.646, 8);
    $this$d.p31(7.457, 13.184);
    $this$d.v31(1, 1, 0, 1, 0, 8.871, 14.6);
    $this$d.p31(14.06, 9.409);
    $this$d.u31(1.294, 1.294, 0, 0, 1, 1.829, 1.83, true);
    $this$d.p31(7.457, 19.67);
    $this$d.u31(3.128, 3.128, 0, 0, 1, -4.424, -4.424, true);
    $this$d.p31(13.411, 4.869);
    $this$d.u31(4.962, 4.962, 0, 1, 1, 7.018, 7.018, true);
    $this$d.p31(12.646, 19.67);
    $this$d.u31(1, 1, 0, 1, 0, 1.414, 1.414, true);
    $this$d.p31(21.843, 13.3);
    $this$d.u31(6.96, 6.96, 0, 0, 0, 0, -9.846, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(343641086, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:194)');
    }
    $composer_0.s1n(456627938);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Polyline($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Polyline) {
    $this$Polyline.e32([to(3, 12), to(9, 18), to(21, 2)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1021140685, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:203)');
    }
    $composer_0.s1n(-48930456);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu($this$d) {
    $this$d.n31(16.59, 8.59);
    $this$d.p31(12, 13.17);
    $this$d.p31(7.41, 8.59);
    $this$d.p31(6, 10);
    $this$d.o31(6, 6, true);
    $this$d.o31(6, -6, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-507764776, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:220)');
    }
    $composer_0.s1n(-554488632);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl($this$d) {
    $this$d.n31(15.41, 7.41);
    $this$d.p31(14, 6);
    $this$d.o31(-6, 6, true);
    $this$d.o31(6, 6, true);
    $this$d.o31(1.41, -1.41, true);
    $this$d.p31(10.83, 12);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-79892645, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:237)');
    }
    $composer_0.s1n(-1060046800);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4($this$d) {
    $this$d.n31(10, 6);
    $this$d.p31(8.59, 7.41);
    $this$d.p31(13.17, 12);
    $this$d.o31(-4.58, 4.59, true);
    $this$d.p31(10, 18);
    $this$d.o31(6, -6, true);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda_c69byu($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(660186540, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous> (Icons.kt:254)');
    }
    $composer_0.s1n(923945435);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey($this$d) {
    $this$d.n31(12, 8);
    $this$d.o31(-6, 6, true);
    $this$d.o31(1.41, 1.41, true);
    $this$d.p31(12, 10.83);
    $this$d.o31(4.59, 4.58, true);
    $this$d.p31(18, 14);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda_u188y3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2025461450, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous> (Icons.kt:271)');
    }
    $composer_0.s1n(418387260);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Circle($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2($this$Circle) {
    $this$Circle.i32(12);
    $this$Circle.j32(12);
    $this$Circle.h32(8);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1212129518, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous> (Icons.kt:282)');
    }
    $composer_0.s1n(-87171131);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.s1n(-87171032);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53($this$Line) {
    $this$Line.m32(1);
    $this$Line.n32(23);
    $this$Line.o32(1);
    $this$Line.p32(23);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0($this$Line) {
    $this$Line.m32(23);
    $this$Line.n32(1);
    $this$Line.o32(1);
    $this$Line.p32(23);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-769560574, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous> (Icons.kt:300)');
    }
    $composer_0.s1n(-592729371);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx($this$d) {
    $this$d.n31(11.2857, 6.05714);
    $this$d.p31(10.08571, 4.85714);
    $this$d.p31(7.85714, 7.14786);
    $this$d.p31(7.85714, 1);
    $this$d.p31(6.14286, 1);
    $this$d.p31(6.14286, 7.14786);
    $this$d.p31(3.91429, 4.85714);
    $this$d.p31(2.71429, 6.05714);
    $this$d.p31(7, 10.42857);
    $this$d.p31(11.2857, 6.05714);
    $this$d.w31();
    $this$d.n31(1, 11.2857);
    $this$d.p31(1, 13);
    $this$d.p31(13, 13);
    $this$d.p31(13, 11.2857);
    $this$d.p31(1, 11.2857);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-725431745, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous> (Icons.kt:327)');
    }
    var tmp0_iterator = listOf([3, 12, 21]).l();
    while (tmp0_iterator.z()) {
      var y = tmp0_iterator.b1();
      $composer_0.s1n(-1098287123);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.p1o(y);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09(y);
        $composer_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      Line($this$createIcon, tmp0_group, $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09($y) {
    return function ($this$Line) {
      $this$Line.m32(0);
      $this$Line.n32(23);
      $this$Line.o32($y);
      $this$Line.p32($y);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2035566234, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous> (Icons.kt:346)');
    }
    $composer_0.s1n(-1603845372);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe($this$Line) {
    $this$Line.m32(3);
    $this$Line.n32(21);
    $this$Line.o32(12);
    $this$Line.p32(12);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1115382124, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous> (Icons.kt:358)');
    }
    $composer_0.s1n(-2109403744);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.s1n(-2109403644);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l($this$Line) {
    $this$Line.m32(3);
    $this$Line.n32(21);
    $this$Line.o32(12);
    $this$Line.p32(12);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0($this$Line) {
    $this$Line.m32(12);
    $this$Line.n32(12);
    $this$Line.o32(3);
    $this$Line.p32(21);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda_uahgv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(862240855, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous> (Icons.kt:376)');
    }
    $composer_0.s1n(1680005279);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Rect($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak($this$Rect) {
    $this$Rect.j31(4);
    $this$Rect.k31(4);
    $this$Rect.m31(16);
    $this$Rect.l31(16);
    $this$Rect.s32(2);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2069599163, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous> (Icons.kt:389)');
    }
    $composer_0.s1n(1174446950);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y($this$d) {
    $this$d.n31(175, 106.583);
    $this$d.v31(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.v31(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.w31();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(747380469, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous> (Icons.kt:408)');
    }
    $composer_0.s1n(668888871);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Circle($this$Group, tmp0_group, $composer_0, 56);
    $composer_0.s1n(668888971);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp1_group, $composer_0, 56);
    $composer_0.s1n(668889120);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.y1o();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1;
      $composer_0.e1p(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp2_group, $composer_0, 56);
    $composer_0.s1n(668889270);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.y1o();
    var tmp_5;
    if (false ? true : it_2 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2;
      $composer_0.e1p(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp3_group, $composer_0, 56);
    $composer_0.s1n(668889425);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.y1o();
    var tmp_7;
    if (false ? true : it_3 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3;
      $composer_0.e1p(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp4_group, $composer_0, 56);
    $composer_0.s1n(668889582);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.y1o();
    var tmp_9;
    if (false ? true : it_4 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4;
      $composer_0.e1p(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp5_group, $composer_0, 56);
    $composer_0.s1n(668889733);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.y1o();
    var tmp_11;
    if (false ? true : it_5 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5;
      $composer_0.e1p(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp6_group, $composer_0, 56);
    $composer_0.s1n(668889885);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.y1o();
    var tmp_13;
    if (false ? true : it_6 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6;
      $composer_0.e1p(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp7_group, $composer_0, 56);
    $composer_0.s1n(668890042);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.y1o();
    var tmp_15;
    if (false ? true : it_7 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7;
      $composer_0.e1p(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.t1n();
    Path($this$Group, tmp8_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua($this$Circle) {
    $this$Circle.i32(12);
    $this$Circle.j32(12);
    $this$Circle.h32(5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r($this$d) {
    $this$d.n31(12, 1);
    $this$d.q31(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0($this$d) {
    $this$d.n31(12, 21);
    $this$d.q31(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1($this$d) {
    $this$d.n31(4.22, 4.22);
    $this$d.o31(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2($this$d) {
    $this$d.n31(18.36, 18.36);
    $this$d.o31(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3($this$d) {
    $this$d.n31(1, 12);
    $this$d.s31(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4($this$d) {
    $this$d.n31(21, 12);
    $this$d.s31(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5($this$d) {
    $this$d.n31(4.22, 19.78);
    $this$d.o31(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7($this$Path) {
    $this$Path.d31(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6($this$d) {
    $this$d.n31(18.36, 5.64);
    $this$d.o31(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1299612222, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous> (Icons.kt:404)');
    }
    $composer_0.s1n(-1863466423);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0;
      $composer_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    Group($this$createIcon, tmp0_group, ComposableSingletons$IconsKt_getInstance().p3q_1, $composer_0, 440, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0($this$Group) {
    $this$Group.i31(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.h31(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.x3p_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(187923078, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.y3p_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(465018625, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.z3p_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1093309942, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.a3q_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(353353466, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.b3q_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(14879965, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.c3q_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(343641086, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.d3q_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1021140685, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.e3q_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-507764776, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.f3q_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-79892645, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
    var tmp_8 = this;
    tmp_8.g3q_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(660186540, false, ComposableSingletons$IconsKt$lambda_10$lambda_c69byu));
    var tmp_9 = this;
    tmp_9.h3q_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(2025461450, false, ComposableSingletons$IconsKt$lambda_11$lambda_u188y3));
    var tmp_10 = this;
    tmp_10.i3q_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1212129518, false, ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw));
    var tmp_11 = this;
    tmp_11.j3q_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-769560574, false, ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b));
    var tmp_12 = this;
    tmp_12.k3q_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-725431745, false, ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm));
    var tmp_13 = this;
    tmp_13.l3q_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2035566234, false, ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl));
    var tmp_14 = this;
    tmp_14.m3q_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1115382124, false, ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc));
    var tmp_15 = this;
    tmp_15.n3q_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(862240855, false, ComposableSingletons$IconsKt$lambda_17$lambda_uahgv));
    var tmp_16 = this;
    tmp_16.o3q_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(2069599163, false, ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2));
    var tmp_17 = this;
    tmp_17.p3q_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(747380469, false, ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv));
    var tmp_18 = this;
    tmp_18.q3q_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-1299612222, false, ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
  }
  function CloseIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CloseIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.z30(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.a31(tmp1_safe_receiver.z31_1, tmp1_safe_receiver.a32_1, tmp1_safe_receiver.b32_1, tmp1_safe_receiver.c32_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.y30(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.w30(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.w30(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.y30(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.r3q_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.x30(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().h2y();
    tmp.s3q_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.t3q_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).i3l = function () {
    return this.s3q_1.n2y(this, Color$factory_1());
  };
  protoOf(DividerVars).u3q = function () {
    return this.t3q_1.n2y(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().i3l().h2y()), DividerVars_getInstance().u3q().h2y());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().i3l().h2y()), DividerVars_getInstance().u3q().h2y());
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.i3l();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.u3q();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_4;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_4;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1830865253);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(numColumns) ? 4 : 2);
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
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.n1n()) {
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
        traceEventStart(1830865253, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid (SimpleGrid.kt:75)');
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, 0), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.w3g_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.x3g_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.y3g_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.z3g_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.a3h_1).v37(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -919563996, true, SimpleGrid$lambda(ref_0, content));
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
      if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
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
      tmp0_safe_receiver.k1u(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.w3d(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().l2().l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.o2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.p2();
      $this$CssStyle.y3f(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.p2w(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.h2y();
      $this$gridTemplateColumns.l2w(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-919563996, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous> (SimpleGrid.kt:86)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.x9_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.m2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().h2y();
    tmp.v3q_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().h2y();
    tmp_0.w3q_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).k3l = function () {
    return this.v3q_1.n2y(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).i3l = function () {
    return this.w3q_1.n2y(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1423772139);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.l1f(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(1423772139, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:56)');
      }
      $composer_0.s1n(-1164412583);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).v37(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1254733147, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
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
      var tmp_5;
      if (invalid ? true : it_0 === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.t1n();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
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
      tmp1_safe_receiver.k1u(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.p2();
  }
  function Surface$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.c10(value);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.w3d(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().k3l().h2y()), SurfaceVars_getInstance().i3l().h2y());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.j30($ref._v);
      $this$refScope.h30([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.f3r_1 = $surfaceElement;
    this.g3r_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(Surface$lambda$lambda$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          setSilkWidgetVariables(this.f3r_1, this.g3r_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).c12 = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.f3r_1, this.g3r_1, completion);
    i.h3r_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1856426530, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:69)');
        }
        var currColorMode = Companion_instance_5.r3a($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        $content($this_Box, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.l1f($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1254733147, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:66)');
        }
        if (!($colorModeOverride._v == null)) {
          $composer_0.s1n(321050182);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = $colorModeOverride._v.i3i();
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -1856426530, true, Surface$lambda$lambda_0($content, $this$Box, tmp0_safe_receiver));
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
            var tmp_4;
            if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
              $composer_1.e1p(value);
              tmp_4 = value;
            } else {
              tmp_4 = it;
            }
            var tmp_5 = tmp_4;
            var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            $composer_1.t1n();
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 48);
            tmp_1 = Unit_instance;
          }
          $composer_0.t1n();
        } else {
          $composer_0.s1n(321050591);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.t1n();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.e1i();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k3l();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.i3l();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
    }
  }
  function Companion_3() {
  }
  var Companion_instance_18;
  function Companion_getInstance_5() {
    return Companion_instance_18;
  }
  function KeepPopupOpenStrategy(defaultValue) {
    defaultValue = defaultValue === VOID ? false : defaultValue;
    this.i3r_1 = defaultValue;
    this.j3r_1 = MutableStateFlow(this.i3r_1);
    this.k3r_1 = false;
    this.l3r_1 = asStateFlow(this.j3r_1);
  }
  protoOf(KeepPopupOpenStrategy).m3r = function (popupElement) {
    this.j3r_1.c10(this.i3r_1);
    this.n3r(popupElement);
    this.k3r_1 = true;
  };
  protoOf(KeepPopupOpenStrategy).n3r = function (popupElement) {
    return Unit_instance;
  };
  protoOf(KeepPopupOpenStrategy).o3r = function (shouldKeepOpen) {
    if (this.k3r_1) {
      this.j3r_1.c10(shouldKeepOpen);
    }
  };
  protoOf(KeepPopupOpenStrategy).p21 = function () {
    this.k3r_1 = false;
    this.p3r();
    this.j3r_1.c10(this.i3r_1);
  };
  protoOf(KeepPopupOpenStrategy).p3r = function () {
    return Unit_instance;
  };
  function never(_this__u8e3s4) {
    return new never$1();
  }
  function plus(_this__u8e3s4, other) {
    return combine(Companion_instance_18, [_this__u8e3s4, other]);
  }
  function onFocus(_this__u8e3s4) {
    return new onFocus$1();
  }
  function onHover(_this__u8e3s4) {
    return new onHover$1();
  }
  function get_shouldKeepOpen(_this__u8e3s4) {
    return _this__u8e3s4.l3r_1.p2();
  }
  function combine(_this__u8e3s4, strategies) {
    return new combine$1(strategies);
  }
  function never$1() {
    KeepPopupOpenStrategy.call(this);
  }
  function onFocus$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.o3r(true);
      return Unit_instance;
    };
  }
  function onFocus$o$onInit$lambda_0(this$0, $popupElement) {
    return function (evt) {
      var focusEvent = evt instanceof FocusEvent ? evt : THROW_CCE();
      var tmp = focusEvent.relatedTarget;
      var newFocus = tmp instanceof Node ? tmp : null;
      this$0.o3r(!(newFocus == null) ? $popupElement.contains(newFocus) : false);
      return Unit_instance;
    };
  }
  function onFocus$1() {
    KeepPopupOpenStrategy.call(this);
    this.u3r_1 = null;
  }
  protoOf(onFocus$1).n3r = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.l18('focusin', onFocus$o$onInit$lambda(this));
    this_0.l18('focusout', onFocus$o$onInit$lambda_0(this, popupElement));
    tmp.u3r_1 = this_0;
  };
  protoOf(onFocus$1).p3r = function () {
    ensureNotNull(this.u3r_1).m18();
    this.u3r_1 = null;
  };
  function onHover$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.o3r(true);
      return Unit_instance;
    };
  }
  function onHover$o$onInit$lambda_0(this$0) {
    return function (it) {
      this$0.o3r(false);
      return Unit_instance;
    };
  }
  function onHover$1() {
    KeepPopupOpenStrategy.call(this);
    this.z3r_1 = null;
  }
  protoOf(onHover$1).n3r = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.l18('mouseenter', onHover$o$onInit$lambda(this));
    this_0.l18('mouseleave', onHover$o$onInit$lambda_0(this));
    tmp.z3r_1 = this_0;
  };
  protoOf(onHover$1).p3r = function () {
    ensureNotNull(this.z3r_1).m18();
    this.z3r_1 = null;
  };
  function combine$o$slambda($strategies, this$0, resultContinuation) {
    this.i3s_1 = $strategies;
    this.j3s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda).l3s = function (it, $completion) {
    var tmp = this.m3s(it, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(combine$o$slambda).ad = function (p1, $completion) {
    return this.l3s((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          var tmp$ret$0;
          l$ret$1: do {
            var indexedObject = this.i3s_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var element = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (get_shouldKeepOpen(element)) {
                tmp$ret$0 = true;
                break l$ret$1;
              }
            }
            tmp$ret$0 = false;
          }
           while (false);
          var anyKeepOpen = tmp$ret$0;
          if (!(anyKeepOpen === this.j3s_1.l3r_1.p2())) {
            this.j3s_1.o3r(anyKeepOpen);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda).m3s = function (it, completion) {
    var i = new combine$o$slambda(this.i3s_1, this.j3s_1, completion);
    i.k3s_1 = it;
    return i;
  };
  function combine$o$slambda_0($strategies, this$0, resultContinuation) {
    var i = new combine$o$slambda($strategies, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.l3s(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1($strategies) {
    this.r3s_1 = $strategies;
    KeepPopupOpenStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.l3r_1;
      destination.w(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_0($strategies, this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1).n3r = function (popupElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.r3s_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
      element.m3r(popupElement);
    }
  };
  protoOf(combine$1).p3r = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.r3s_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onResetting.<anonymous>' call
      element.p21();
    }
  };
  function Companion_4() {
  }
  var Companion_instance_19;
  function Companion_getInstance_6() {
    return Companion_instance_19;
  }
  function OpenClosePopupStrategy() {
    this.s3s_1 = MutableStateFlow(OpenClose_CLOSE_getInstance());
    this.t3s_1 = asStateFlow(this.s3s_1);
  }
  protoOf(OpenClosePopupStrategy).m3r = function (targetElement) {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).p21 = function () {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).u3s = function (request) {
    this.s3s_1.e10(request);
  };
  var OpenClose_OPEN_instance;
  var OpenClose_CLOSE_instance;
  var OpenClose_entriesInitialized;
  function OpenClose_initEntries() {
    if (OpenClose_entriesInitialized)
      return Unit_instance;
    OpenClose_entriesInitialized = true;
    OpenClose_OPEN_instance = new OpenClose('OPEN', 0);
    OpenClose_CLOSE_instance = new OpenClose('CLOSE', 1);
  }
  function OpenClose(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function plus_0(_this__u8e3s4, other) {
    return combine_0(Companion_instance_19, [_this__u8e3s4, other]);
  }
  function onFocus_0(_this__u8e3s4) {
    return new onFocus$1_0();
  }
  function onHover_0(_this__u8e3s4) {
    return new onHover$1_0();
  }
  function combine_0(_this__u8e3s4, strategies) {
    return new combine$1_0(strategies);
  }
  function onFocus$o$init$lambda(this$0) {
    return function (it) {
      this$0.u3s(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.u3s(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$1_0() {
    OpenClosePopupStrategy.call(this);
    this.x3s_1 = null;
  }
  protoOf(onFocus$1_0).m3r = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.l18('focusin', onFocus$o$init$lambda(this));
    this_0.l18('focusout', onFocus$o$init$lambda_0(this));
    if (targetElement.contains(document.activeElement)) {
      this.u3s(OpenClose_OPEN_getInstance());
    }
    tmp.x3s_1 = this_0;
  };
  protoOf(onFocus$1_0).p21 = function () {
    ensureNotNull(this.x3s_1).m18();
    this.x3s_1 = null;
  };
  function onHover$o$init$lambda(this$0) {
    return function (it) {
      this$0.u3s(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onHover$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.u3s(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onHover$1_0() {
    OpenClosePopupStrategy.call(this);
    this.a3t_1 = null;
  }
  protoOf(onHover$1_0).m3r = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.l18('mouseenter', onHover$o$init$lambda(this));
    this_0.l18('mouseleave', onHover$o$init$lambda_0(this));
    if (targetElement.matches(':hover')) {
      this.u3s(OpenClose_OPEN_getInstance());
    }
    tmp.a3t_1 = this_0;
  };
  protoOf(onHover$1_0).p21 = function () {
    ensureNotNull(this.a3t_1).m18();
    this.a3t_1 = null;
  };
  function combine$o$slambda_1(this$0, resultContinuation) {
    this.j3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda_1).l3t = function (it, $completion) {
    var tmp = this.m3t(it, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(combine$o$slambda_1).ad = function (p1, $completion) {
    return this.l3t(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda_1).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          this.j3t_1.u3s(this.k3t_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda_1).m3t = function (it, completion) {
    var i = new combine$o$slambda_1(this.j3t_1, completion);
    i.k3t_1 = it;
    return i;
  };
  function combine$o$slambda_2(this$0, resultContinuation) {
    var i = new combine$o$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.l3t(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1_0($strategies) {
    this.p3t_1 = $strategies;
    OpenClosePopupStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.t3s_1;
      destination.w(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_2(this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1_0).m3r = function (targetElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.p3t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
      element.m3r(targetElement);
    }
  };
  protoOf(combine$1_0).p21 = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.p3t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.reset.<anonymous>' call
      element.p21();
    }
  };
  function OpenClose_OPEN_getInstance() {
    OpenClose_initEntries();
    return OpenClose_OPEN_instance;
  }
  function OpenClose_CLOSE_getInstance() {
    OpenClose_initEntries();
    return OpenClose_CLOSE_instance;
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.q3t_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).k3l = function () {
    return this.q3t_1.n2y(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function Overlay(modifier, variant, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Overlay_kt__p5agwu();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-785889023);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.l1f(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 16384 : 8192);
    if (!(($default & 5) === 5) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          contentAlignment_0._v = TopCenter_instance;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$OverlayKt_getInstance().r3t_1;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-785889023, $dirty, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay (Overlay.kt:60)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1359329502, true, Overlay$lambda(variant_0, modifier_0, contentAlignment_0, ref_0, content_0));
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
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      deferRender(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.k1u(Overlay$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1640539195, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.ComposableSingletons$OverlayKt.lambda-1.<anonymous> (Overlay.kt:59)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$OverlayKt() {
    ComposableSingletons$OverlayKt_instance = this;
    var tmp = this;
    tmp.r3t_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1640539195, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().k3l().h2y());
  }
  function Overlay$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1359329502, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous> (Overlay.kt:62)');
        }
        var tmp_0 = toModifier(get_OverlayStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).v37($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, 584, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function Overlay$lambda_0($modifier, $variant, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Overlay($modifier._v, $variant._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k3l();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_4;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
    }
  }
  function AdvancedPopover(target, modifier, hiddenModifier, variant, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1528672370);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 32) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 64) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 128) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1528672370, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover (Popover.kt:313)');
    }
    $composer_0.s1n(49691336);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = $composer_0.l1f(openCloseStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.y1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs = openCloseStrategy_0._v;
      var value = tmp0_elvis_lhs == null ? plus_0(onHover_0(Companion_instance_19), onFocus_0(Companion_instance_19)) : tmp0_elvis_lhs;
      this_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    var openCloseStrategy_1 = tmp0_group;
    $composer_0.s1n(49691507);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_1 = $composer_0;
    var invalid_0 = !!(!!($composer_0.l1f(hiddenModifier_0._v) | ((($changed & 57344 ^ 24576) > 16384 ? $composer_0.p1o(showDelayMs_0._v) : false) ? true : ($changed & 24576) === 16384)) | ((($changed & 458752 ^ 196608) > 131072 ? $composer_0.p1o(hideDelayMs_0._v) : false) ? true : ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = this_1.y1o();
    var tmp_1;
    if (invalid_0 ? true : it_0 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var value_0 = new PopoverShowHideSettings(hiddenModifier_0._v, showDelayMs_0._v, hideDelayMs_0._v);
      this_1.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    var showHideSettings = tmp1_group;
    $composer_0.s1n(49691779);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_2 = $composer_0;
    var invalid_1 = (($changed & 234881024 ^ 100663296) > 67108864 ? $composer_0.l1f(placementStrategy_0._v) : false) ? true : ($changed & 100663296) === 67108864;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = this_2.y1o();
    var tmp_3;
    if (invalid_1 ? true : it_1 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs_0 = placementStrategy_0._v;
      var value_1 = tmp0_elvis_lhs_0 == null ? Companion_instance_20.s3t(PopupPlacement_Bottom_getInstance()) : tmp0_elvis_lhs_0;
      this_2.e1p(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.t1n();
    var placementStrategy_1 = tmp2_group;
    $composer_0.s1n(49691941);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_3 = $composer_0;
    var invalid_2 = $composer_0.l1f(keepOpenStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = this_3.y1o();
    var tmp_5;
    if (invalid_2 ? true : it_2 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs_1 = keepOpenStrategy_0._v;
      var value_2 = tmp0_elvis_lhs_1 == null ? plus(onHover(Companion_instance_18), onFocus(Companion_instance_18)) : tmp0_elvis_lhs_1;
      this_3.e1p(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.t1n();
    var keepOpenStrategy_1 = tmp3_group;
    $composer_0.s1n(49692113);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_4 = $composer_0;
    var invalid_3 = !!(!!(!!($composer_0.l1f(openCloseStrategy_1) | $composer_0.l1f(showHideSettings)) | $composer_0.l1f(placementStrategy_1)) | $composer_0.l1f(keepOpenStrategy_1));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = this_4.y1o();
    var tmp_7;
    if (invalid_3 ? true : it_3 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var value_3 = new PopoverStateController(openCloseStrategy_1, showHideSettings, placementStrategy_1, keepOpenStrategy_1);
      this_4.e1p(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.t1n();
    var popoverStateController = tmp4_group;
    var tmp_9 = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = display(tmp_9, 'none');
    var tmp_11 = [popoverStateController, target, placementTarget_0._v];
    var tmp_12 = disposableRef(tmp_11, AdvancedPopover$lambda(target, placementTarget_0, popoverStateController, openCloseStrategy_1));
    Box(tmp_10, null, tmp_12, null, $composer_0, 520, 10);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
    var tmp_13 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_13, -770890223, true, AdvancedPopover$lambda_0(popoverStateController, variant_0, modifier_0, ref_0, placementStrategy_1, content));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.s1n(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_4 = $composer_1.l1f(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_1.y1o();
    var tmp_14;
    if (invalid_4 ? true : it_4 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_26(dispatchReceiver);
      $composer_1.e1p(value_4);
      tmp_14 = value_4;
    } else {
      tmp_14 = it_4;
    }
    var tmp_15 = tmp_14;
    var tmp0 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
    $composer_1.t1n();
    deferRender(tmp0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp5_safe_receiver = $composer_0.n1p();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.k1u(AdvancedPopover$lambda_1(target, modifier_0, hiddenModifier_0, variant_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function PopoverShowHideSettings(hiddenModifier, showDelayMs, hideDelayMs) {
    this.t3t_1 = coerceAtLeast(showDelayMs, 0);
    this.u3t_1 = coerceAtLeast(hideDelayMs, 0);
    this.v3t_1 = opacity(hiddenModifier, 0);
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    var this_0 = $this.z3t_1;
    _state$factory();
    this_0.c10(_set____db54di);
    return Unit_instance;
  }
  function _get__state__37adl3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.z3t_1;
    _state$factory_0();
    return this_0.p2();
  }
  function resetTimers($this) {
    window.clearTimeout($this.a3u_1);
    window.clearTimeout($this.b3u_1);
  }
  function PopoverStateController$requestShowPopup$lambda(this$0, $state) {
    return function () {
      _set__state__4o0y7v(this$0, new Calculating($state.c3u(), this$0.w3t_1));
      var tmp0_safe_receiver = $state.c3u().f3u_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>.<anonymous>' call
        var rect = tmp0_safe_receiver.getBoundingClientRect();
        if (rect.width * rect.height > 0.0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp_1;
      if (tmp == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.g3u();
        tmp_1 = Unit_instance;
      }
      return tmp_1;
    };
  }
  function PopoverStateController$requestHidePopup$lambda(this$0, $state) {
    return function () {
      var tmp;
      if (!get_shouldKeepOpen(this$0.y3t_1)) {
        var tmp0_safe_receiver = $state.c3u().f3u_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestHidePopup.<anonymous>.<anonymous>' call
          tmp_0 = toDouble(window.getComputedStyle(tmp0_safe_receiver).getPropertyValue('opacity'));
        }
        var currentOpacity = tmp_0;
        _set__state__4o0y7v(this$0, new Hiding($state.c3u(), this$0.x3t_1, this$0.w3t_1, $state.h3u()));
        var tmp_1;
        if (currentOpacity == null ? true : currentOpacity === 0.0) {
          this$0.i3u($state.c3u());
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      }
      return Unit_instance;
    };
  }
  function PopoverStateController$slambda(this$0, resultContinuation) {
    this.r3u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda).l3s = function (keepOpen, $completion) {
    var tmp = this.m3s(keepOpen, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(PopoverStateController$slambda).ad = function (p1, $completion) {
    return this.l3s((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          if (!this.s3u_1) {
            this.r3u_1.t3u();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda).m3s = function (keepOpen, completion) {
    var i = new PopoverStateController$slambda(this.r3u_1, completion);
    i.s3u_1 = keepOpen;
    return i;
  };
  function PopoverStateController$slambda_0(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda(this$0, resultContinuation);
    var l = function (keepOpen, $completion) {
      return i.l3s(keepOpen, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController$slambda_1(this$0, resultContinuation) {
    this.c3v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda_1).l3t = function (request, $completion) {
    var tmp = this.m3t(request, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(PopoverStateController$slambda_1).ad = function (p1, $completion) {
    return this.l3t(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda_1).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          var tmp0 = this.d3v_1.y9_1;
          if (tmp0 === 0) {
            this.c3v_1.e3v();
          } else if (tmp0 === 1) {
            this.c3v_1.t3u();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda_1).m3t = function (request, completion) {
    var i = new PopoverStateController$slambda_1(this.c3v_1, completion);
    i.d3v_1 = request;
    return i;
  };
  function PopoverStateController$slambda_2(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda_1(this$0, resultContinuation);
    var l = function (request, $completion) {
      return i.l3t(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController(openCloseStrategy, showHideSettings, placementStrategy, keepOpenStrategy) {
    this.w3t_1 = showHideSettings;
    this.x3t_1 = placementStrategy;
    this.y3t_1 = keepOpenStrategy;
    this.z3t_1 = mutableStateOf(Uninitialized_instance);
    this.a3u_1 = -1;
    this.b3u_1 = -1;
    var scope = CoroutineScope_0(asCoroutineDispatcher(window));
    launchIn(onEach(this.y3t_1.l3r_1, PopoverStateController$slambda_0(this, null)), scope);
    launchIn(onEach(openCloseStrategy.t3s_1, PopoverStateController$slambda_2(this, null)), scope);
  }
  protoOf(PopoverStateController).oi = function () {
    return _get__state__37adl3(this);
  };
  protoOf(PopoverStateController).f3v = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    resetTimers(this);
    _set__state__4o0y7v(this, new FoundElements(state.c3u()));
  };
  protoOf(PopoverStateController).g3v = function (elements) {
    var state = _get__state__37adl3(this);
    if (isInterface(state, Initialized)) {
      state.h3v(elements);
    } else {
      _set__state__4o0y7v(this, new FoundElements(elements));
    }
  };
  protoOf(PopoverStateController).e3v = function () {
    var state = _get__state__37adl3(this);
    if (!isInterface(state, Initialized))
      return Unit_instance;
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.a3u_1 = tmp_0.setTimeout(PopoverStateController$requestShowPopup$lambda(this, state), this.w3t_1.t3t_1);
  };
  protoOf(PopoverStateController).i3v = function (popupElement) {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y3t_1.m3r(popupElement);
    state.c3u().f3u_1 = popupElement;
  };
  protoOf(PopoverStateController).j3v = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y3t_1.p21();
    state.c3u().f3u_1 = null;
  };
  protoOf(PopoverStateController).g3u = function () {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Calculating))
      return Unit_instance;
    var popupElement = state.k3v_1.f3u_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(popupElement == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    _set__state__4o0y7v(this, new Shown(state.k3v_1, this.x3t_1));
  };
  protoOf(PopoverStateController).t3u = function () {
    var state = _get__state__37adl3(this);
    if (state instanceof FoundElements) {
      resetTimers(this);
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Visible)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.b3u_1 = tmp_0.setTimeout(PopoverStateController$requestHidePopup$lambda(this, state), this.w3t_1.u3t_1);
  };
  protoOf(PopoverStateController).i3u = function (elements) {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Hiding))
      return Unit_instance;
    _set__state__4o0y7v(this, new FoundElements(elements));
    resetTimers(this);
  };
  function resolve(_this__u8e3s4, $this, targetFinder) {
    if (_this__u8e3s4 == null ? true : targetFinder == null)
      return _this__u8e3s4;
    return targetFinder.u17(_this__u8e3s4);
  }
  function PopoverElements(srcElement, popupTarget, placementTarget) {
    var tmp = this;
    var tmp0_elvis_lhs = resolve(srcElement, this, popupTarget);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Target element finder returned null';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.d3u_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (placementTarget == null) {
      tmp_2 = this.d3u_1;
    } else {
      var tmp0_elvis_lhs_0 = resolve(srcElement, this, placementTarget);
      var tmp_3;
      if (tmp0_elvis_lhs_0 == null) {
        var message_0 = 'Placement element finder returned null';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_3 = tmp0_elvis_lhs_0;
      }
      tmp_2 = tmp_3;
    }
    tmp_1.e3u_1 = tmp_2;
    this.f3u_1 = null;
  }
  function Uninitialized() {
  }
  var Uninitialized_instance;
  function Uninitialized_getInstance() {
    return Uninitialized_instance;
  }
  function Initialized() {
  }
  function FoundElements(elements) {
    this.n3v_1 = elements;
  }
  protoOf(FoundElements).h3v = function (_set____db54di) {
    this.n3v_1 = _set____db54di;
  };
  protoOf(FoundElements).c3u = function () {
    return this.n3v_1;
  };
  function Visible() {
  }
  function Calculating(elements, showHideSettings) {
    this.k3v_1 = elements;
    this.l3v_1 = left(top(showHideSettings.v3t_1, get_percent(-100)), get_percent(-100));
    this.m3v_1 = null;
  }
  protoOf(Calculating).h3v = function (_set____db54di) {
    this.k3v_1 = _set____db54di;
  };
  protoOf(Calculating).c3u = function () {
    return this.k3v_1;
  };
  protoOf(Calculating).o3v = function () {
    return this.l3v_1;
  };
  protoOf(Calculating).h3u = function () {
    return this.m3v_1;
  };
  function Shown(elements, placementStrategy) {
    this.p3v_1 = elements;
    this.q3v_1 = placementStrategy.t3v();
    this.r3v_1 = Companion_instance.v37(toModifier_2(this.q3v_1.u3v_1));
    this.s3v_1 = this.q3v_1.v3v_1;
  }
  protoOf(Shown).h3v = function (_set____db54di) {
    this.p3v_1 = _set____db54di;
  };
  protoOf(Shown).c3u = function () {
    return this.p3v_1;
  };
  protoOf(Shown).o3v = function () {
    return this.r3v_1;
  };
  protoOf(Shown).h3u = function () {
    return this.s3v_1;
  };
  function Hiding(elements, placementStrategy, showHideSettings, placement) {
    this.w3v_1 = elements;
    this.x3v_1 = placement;
    var tmp = this;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var this_0 = showHideSettings.v3t_1;
    var tmp_0;
    if (!(this.w3v_1.f3u_1 == null)) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Hiding.modifier.<anonymous>' call
      tmp_0 = toModifier_2(placementStrategy.t3v().u3v_1);
    } else {
      tmp_0 = Companion_instance;
    }
    tmp.y3v_1 = this_0.v37(tmp_0);
  }
  protoOf(Hiding).h3v = function (_set____db54di) {
    this.w3v_1 = _set____db54di;
  };
  protoOf(Hiding).c3u = function () {
    return this.w3v_1;
  };
  protoOf(Hiding).h3u = function () {
    return this.x3v_1;
  };
  protoOf(Hiding).o3v = function () {
    return this.y3v_1;
  };
  function toModifier_2(_this__u8e3s4) {
    return left(top(Companion_instance, _this__u8e3s4.z3v_1), _this__u8e3s4.a3w_1);
  }
  function _no_name_provided__qut3iv($openCloseStrategy) {
    this.b3w_1 = $openCloseStrategy;
  }
  protoOf(_no_name_provided__qut3iv).yl = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
    this.b3w_1.p21();
  };
  function AdvancedPopover$lambda($target, $placementTarget, $popoverStateController, $openCloseStrategy) {
    return function ($this$disposableRef, element) {
      var tmp;
      try {
        // Inline function 'kotlin.apply' call
        var this_0 = new PopoverElements(element, $target, $placementTarget._v);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        var tmp_0 = this_0;
        var tmp_1 = $popoverStateController.oi();
        var tmp0_safe_receiver = isInterface(tmp_1, Initialized) ? tmp_1 : null;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c3u();
        tmp_0.f3u_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f3u_1;
        var popoverElements = this_0;
        // Inline function 'kotlin.apply' call
        var this_1 = popoverElements.d3u_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        $openCloseStrategy.m3r(this_1);
        $popoverStateController.g3v(popoverElements);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof IllegalStateException) {
          var _ = $p;
          tmp_2 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($openCloseStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda($popoverStateController) {
    return function (evt) {
      var state = $popoverStateController.oi();
      var tmp;
      var tmp_0;
      if (evt.f33_1 === 'opacity') {
        tmp_0 = state instanceof Hiding;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $popoverStateController.i3u(state.w3v_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($popoverStateController, $placementStrategy) {
    this.c3w_1 = $popoverStateController;
    this.d3w_1 = $placementStrategy;
  }
  protoOf(_no_name_provided__qut3iv_0).yl = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.c3w_1.j3v();
    this.c3w_1.f3v();
    this.d3w_1.p21();
  };
  function AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$disposableRef, popupElement) {
      $placementStrategy.e3w($visiblePopoverState.c3u().e3u_1, popupElement);
      $popoverStateController.i3v(popupElement);
      $popoverStateController.g3u();
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($popoverStateController, $placementStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$refScope) {
      $this$refScope.i30([], AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController));
      $this$refScope.j30($ref._v);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda$lambda_1($content, $visiblePopoverState) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(128665367, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous> (Popover.kt:388)');
        }
        $content(new PopupScope($visiblePopoverState.h3u()), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AdvancedPopover$lambda_0($popoverStateController, $variant, $modifier, $ref, $placementStrategy, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-770890223, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous> (Popover.kt:361)');
        }
        var tmp_0 = $popoverStateController.oi();
        var tmp0_elvis_lhs = isInterface(tmp_0, Visible) ? tmp_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          if (isTraceInProgress()) {
            traceEventEnd();
          }
          return Unit_instance;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var visiblePopoverState = tmp_1;
        var tmp_2 = toModifier(get_PopupStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = position(tmp_2, 'fixed').v37(visiblePopoverState.o3v()).v37($modifier._v);
        var tmp_4 = onTransitionEnd(tmp_3, AdvancedPopover$lambda$lambda($popoverStateController));
        var tmp_5 = refScope(AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, visiblePopoverState, $popoverStateController));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_6, 128665367, true, AdvancedPopover$lambda$lambda_1($content, visiblePopoverState));
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
        var tmp_7;
        if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_1.t1n();
        Box(tmp_4, null, tmp_5, tmp0, $composer_0, 3592, 2);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_instance;
        }
        tmp = tmp_9;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function AdvancedPopover$lambda_1($target, $modifier, $hiddenModifier, $variant, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedPopover($target, $modifier._v, $hiddenModifier._v, $variant._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function _state$factory() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function _state$factory_0() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().m3p().h2y();
    tmp.f3w_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).s3n = function () {
    return this.f3w_1.n2y(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  var PopupPlacement_TopLeft_instance;
  var PopupPlacement_Top_instance;
  var PopupPlacement_TopRight_instance;
  var PopupPlacement_LeftTop_instance;
  var PopupPlacement_RightTop_instance;
  var PopupPlacement_Left_instance;
  var PopupPlacement_Right_instance;
  var PopupPlacement_LeftBottom_instance;
  var PopupPlacement_RightBottom_instance;
  var PopupPlacement_BottomLeft_instance;
  var PopupPlacement_Bottom_instance;
  var PopupPlacement_BottomRight_instance;
  var PopupPlacement_entriesInitialized;
  function PopupPlacement_initEntries() {
    if (PopupPlacement_entriesInitialized)
      return Unit_instance;
    PopupPlacement_entriesInitialized = true;
    PopupPlacement_TopLeft_instance = new PopupPlacement('TopLeft', 0);
    PopupPlacement_Top_instance = new PopupPlacement('Top', 1);
    PopupPlacement_TopRight_instance = new PopupPlacement('TopRight', 2);
    PopupPlacement_LeftTop_instance = new PopupPlacement('LeftTop', 3);
    PopupPlacement_RightTop_instance = new PopupPlacement('RightTop', 4);
    PopupPlacement_Left_instance = new PopupPlacement('Left', 5);
    PopupPlacement_Right_instance = new PopupPlacement('Right', 6);
    PopupPlacement_LeftBottom_instance = new PopupPlacement('LeftBottom', 7);
    PopupPlacement_RightBottom_instance = new PopupPlacement('RightBottom', 8);
    PopupPlacement_BottomLeft_instance = new PopupPlacement('BottomLeft', 9);
    PopupPlacement_Bottom_instance = new PopupPlacement('Bottom', 10);
    PopupPlacement_BottomRight_instance = new PopupPlacement('BottomRight', 11);
  }
  function PopupPlacement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_DEFAULT_POPUP_OFFSET_PX() {
    return DEFAULT_POPUP_OFFSET_PX;
  }
  var DEFAULT_POPUP_OFFSET_PX;
  function updatePopupPosition($this) {
    updatePosition(ensureNotNull($this.h3w_1), $this.t3v().u3v_1);
  }
  function PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this$0) {
    return function (it) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda_0(this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$1($placement, $offsetPixels) {
    this.l3w_1 = $placement;
    this.m3w_1 = $offsetPixels;
    PopupPlacementStrategy.call(this);
    this.g3w_1 = null;
    this.h3w_1 = null;
    this.i3w_1 = null;
    this.j3w_1 = null;
    var tmp = this;
    tmp.k3w_1 = EventListener(PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this));
  }
  protoOf(PopupPlacementStrategy$Companion$of$1).e3w = function (placementElement, popupElement) {
    this.g3w_1 = placementElement;
    this.h3w_1 = popupElement;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ResizeObserver_init_$Create$(PopupPlacementStrategy$Companion$of$o$init$lambda(this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.g18(popupElement);
    this_0.g18(placementElement);
    tmp.i3w_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new MutationObserver(PopupPlacementStrategy$Companion$of$o$init$lambda_0(this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    // Inline function 'org.w3c.dom.MutationObserverInit' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var attributeFilter = ['style'];
    var characterData = undefined;
    var attributeOldValue = undefined;
    var characterDataOldValue = undefined;
    var o = {};
    o['childList'] = false;
    o['attributes'] = true;
    o['characterData'] = characterData;
    o['subtree'] = false;
    o['attributeOldValue'] = attributeOldValue;
    o['characterDataOldValue'] = characterDataOldValue;
    o['attributeFilter'] = attributeFilter;
    this_1.observe(placementElement, o);
    tmp_0.j3w_1 = this_1;
    window.addEventListener('scroll', this.k3w_1);
    window.addEventListener('resize', this.k3w_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).t3v = function () {
    var placementBounds = ensureNotNull(this.g3w_1).getBoundingClientRect();
    var popupBounds = ensureNotNull(this.h3w_1).getBoundingClientRect();
    var popupWidth = popupBounds.width;
    var popupHeight = popupBounds.height;
    return new PositionAndPlacement(this.n3w(this.l3w_1, popupWidth, popupHeight, placementBounds, this.m3w_1), this.l3w_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).p21 = function () {
    this.g3w_1 = null;
    this.h3w_1 = null;
    ensureNotNull(this.i3w_1).h18();
    this.i3w_1 = null;
    ensureNotNull(this.j3w_1).disconnect();
    this.j3w_1 = null;
    window.removeEventListener('scroll', this.k3w_1);
    window.removeEventListener('resize', this.k3w_1);
  };
  function Position(top, left) {
    this.z3v_1 = top;
    this.a3w_1 = left;
  }
  function PositionAndPlacement(position, placement) {
    placement = placement === VOID ? null : placement;
    this.u3v_1 = position;
    this.v3v_1 = placement;
  }
  function Companion_5() {
  }
  protoOf(Companion_5).o3w = function (placement, offsetPixels) {
    return new PopupPlacementStrategy$Companion$of$1(placement, offsetPixels);
  };
  protoOf(Companion_5).s3t = function (placement, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.o3w(placement, offsetPixels) : $super.o3w.call(this, placement, offsetPixels);
  };
  var Companion_instance_20;
  function Companion_getInstance_7() {
    return Companion_instance_20;
  }
  function PopupPlacementStrategy() {
  }
  protoOf(PopupPlacementStrategy).n3w = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels) {
    var offsetPixels_0 = numberToDouble(offsetPixels);
    var tmp;
    switch (placement.y9_1) {
      case 0:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left));
        break;
      case 1:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 2:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      case 3:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 4:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 5:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 6:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 7:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 8:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 9:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left));
        break;
      case 10:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 11:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function PopupScope(placement) {
    this.p3w_1 = placement;
  }
  function updatePosition(_this__u8e3s4, position) {
    _init_properties_Popup_kt__lluomy();
    _this__u8e3s4.style.top = '' + position.z3v_1;
    _this__u8e3s4.style.left = '' + position.a3w_1;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_getInstance().e2z('opacity', PopupVars_getInstance().s3n().h2y())]);
  }
  function PopupPlacement_Bottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Bottom_instance;
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.s3n();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_4;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.q3w_1 = StyleVariable('silk');
    this.r3w_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).k3l = function () {
    return this.q3w_1.n2y(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).i3l = function () {
    return this.r3w_1.n2y(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function Tooltip(target, text, modifier, variant, placement, hasArrow, offsetPixels, placementTarget, showDelayMs, hideDelayMs, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placement_0 = {_v: placement};
    var hasArrow_0 = {_v: hasArrow};
    var offsetPixels_0 = {_v: offsetPixels};
    var placementTarget_0 = {_v: placementTarget};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-303561348);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      placement_0._v = PopupPlacement_Bottom_getInstance();
    }
    if (!(($default & 32) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 64) === 0)) {
      offsetPixels_0._v = get_DEFAULT_POPUP_OFFSET_PX();
    }
    if (!(($default & 128) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 512) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 1024) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-303561348, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.Tooltip (Tooltip.kt:252)');
    }
    $composer_0.s1n(-1592962844);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = (($changed & 57344 ^ 24576) > 16384 ? $composer_0.l1f(placement_0._v) : false) ? true : ($changed & 24576) === 16384;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.y1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Tooltip.<anonymous>' call
      var value = Companion_instance_20.o3w(placement_0._v, offsetPixels_0._v);
      this_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    var placementStrategy = tmp0_group;
    AdvancedTooltip(target, text, modifier_0._v, Companion_instance, variant_0._v, hasArrow_0._v, showDelayMs_0._v, hideDelayMs_0._v, null, placementTarget_0._v, placementStrategy, keepOpenStrategy_0._v, ref_0._v, $composer_0, 1174409736 | 112 & $dirty | 0 | 57344 & $dirty << 3 | 458752 & $dirty | 3670016 & $dirty >> 6 | 29360128 & $dirty >> 6, 576 | 896 & $dirty1 << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(Tooltip$lambda(target, text, modifier_0, variant_0, placement_0, hasArrow_0, offsetPixels_0, placementTarget_0, showDelayMs_0, hideDelayMs_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip(target, text, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1508280598);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 16) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 32) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 64) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 128) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 256) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 4096) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(1508280598, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip (Tooltip.kt:353)');
    }
    var tmp = modifier_0._v;
    var tmp_0 = hiddenModifier_0._v;
    var tmp_1 = variant_0._v;
    var tmp_2 = hasArrow_0._v;
    var tmp_3 = showDelayMs_0._v;
    var tmp_4 = hideDelayMs_0._v;
    var tmp_5 = openCloseStrategy_0._v;
    var tmp_6 = placementTarget_0._v;
    var tmp_7 = placementStrategy_0._v;
    var tmp_8 = keepOpenStrategy_0._v;
    var tmp_9 = ref_0._v;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
    var tmp_10 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_10, 791805449, true, AdvancedTooltip$lambda(text));
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
    var tmp_11;
    if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
      $composer_1.e1p(value);
      tmp_11 = value;
    } else {
      tmp_11 = it;
    }
    var tmp_12 = tmp_11;
    var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_1.t1n();
    AdvancedTooltip_0(target, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0, $composer_0, 150995528 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 456 | 112 & $dirty1 >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(AdvancedTooltip$lambda_0(target, text, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip_0(target, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-110960138);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 32) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 64) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 128) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-110960138, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip (Tooltip.kt:292)');
    }
    $composer_0.s1n(-1600460325);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = $composer_0.l1f(keepOpenStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.y1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
      var tmp0_elvis_lhs = keepOpenStrategy_0._v;
      var value = tmp0_elvis_lhs == null ? never(Companion_instance_18) : tmp0_elvis_lhs;
      this_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    var keepOpenStrategy_1 = tmp0_group;
    var tmp_1 = toModifier(get_TooltipStyle(), [variant_0._v], $composer_0, 0).v37(modifier_0._v);
    var tmp_2 = hiddenModifier_0._v;
    var tmp_3 = showDelayMs_0._v;
    var tmp_4 = hideDelayMs_0._v;
    var tmp_5 = openCloseStrategy_0._v;
    var tmp_6 = placementTarget_0._v;
    var tmp_7 = placementStrategy_0._v;
    var tmp_8 = ref_0._v;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
    var tmp_9 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_9, 771619328, true, AdvancedTooltip$lambda_1(content, hasArrow_0));
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
    var tmp_10;
    if (invalid_0 ? true : it_0 === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
      $composer_1.e1p(value_0);
      tmp_10 = value_0;
    } else {
      tmp_10 = it_0;
    }
    var tmp_11 = tmp_10;
    var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    $composer_1.t1n();
    AdvancedPopover(target, tmp_1, tmp_2, null, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, keepOpenStrategy_1, tmp_8, tmp0, $composer_0, 1092619848 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 234881024 & $dirty >> 3, 56 | 14 & $dirty1 >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(AdvancedTooltip$lambda_2(target, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().k3l().h2y()), TooltipVars_getInstance().i3l().h2y()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.u39(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.t39('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().k3l().h2y());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().k3l().h2y());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().k3l().h2y());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2o('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2o('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2o('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2o('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function Tooltip$lambda($target, $text, $modifier, $variant, $placement, $hasArrow, $offsetPixels, $placementTarget, $showDelayMs, $hideDelayMs, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Tooltip($target, $text, $modifier._v, $variant._v, $placement._v, $hasArrow._v, $offsetPixels._v, $placementTarget._v, $showDelayMs._v, $hideDelayMs._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-465460302, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous> (Tooltip.kt:369)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = split($text, ['\n']).l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element) > 0) {
            $composer_0.s1n(1593247775);
            SpanText(element, null, null, null, $composer_0, 0, 14);
            $composer_0.t1n();
          } else {
            $composer_0.s1n(1593247795);
            Br(null, $composer_0, 0, 1);
            $composer_0.t1n();
          }
        }
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
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda($text) {
    return function ($this$AdvancedTooltip, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(791805449, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous> (Tooltip.kt:368)');
        }
        var tmp_0 = toModifier(get_TooltipTextContainerStyle(), [], $composer_0, 64);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -465460302, true, AdvancedTooltip$lambda$lambda($text));
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
        if (invalid ? true : it === Companion_getInstance_0().k1i_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_0($target, $text, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip($target, $text, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_1($content, $hasArrow) {
    return function ($this$AdvancedPopover, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.l1f($this$AdvancedPopover) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(771619328, $dirty, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous> (Tooltip.kt:307)');
        }
        $content($this$AdvancedPopover, $composer_0, 14 & $dirty);
        var placement = $this$AdvancedPopover.p3w_1;
        if ($hasArrow._v ? !(placement == null) : false) {
          var tmp_1 = get_TooltipArrowStyle();
          var tmp_2;
          switch (placement.y9_1) {
            case 0:
              tmp_2 = get_BottomLeftTooltipArrowVariant();
              break;
            case 1:
              tmp_2 = get_BottomTooltipArrowVariant();
              break;
            case 2:
              tmp_2 = get_BottomRightTooltipArrowVariant();
              break;
            case 3:
              tmp_2 = get_RightTopTooltipArrowVariant();
              break;
            case 5:
              tmp_2 = get_RightTooltipArrowVariant();
              break;
            case 7:
              tmp_2 = get_RightBottomTooltipArrowVariant();
              break;
            case 4:
              tmp_2 = get_LeftTopTooltipArrowVariant();
              break;
            case 6:
              tmp_2 = get_LeftTooltipArrowVariant();
              break;
            case 8:
              tmp_2 = get_LeftBottomTooltipArrowVariant();
              break;
            case 9:
              tmp_2 = get_TopLeftTooltipArrowVariant();
              break;
            case 10:
              tmp_2 = get_TopTooltipArrowVariant();
              break;
            case 11:
              tmp_2 = get_TopRightTooltipArrowVariant();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var tmp_3 = toModifier(tmp_1, [tmp_2], $composer_0, 0);
          Box(tmp_3, null, null, null, $composer_0, 8, 14);
        }
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.e1i();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_2($target, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip_0($target, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k3l();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.i3l();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_4;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_4;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_4;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
    }
  }
  var DisabledStyle;
  var SmoothColorTransitionDurationVar;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      DisabledStyle = get_DisabledStyle();
      SmoothColorTransitionDurationVar = get_SmoothColorTransitionDurationVar();
      SmoothColorStyle = get_SmoothColorStyle_0();
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.a3c_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.a3c_1.x3c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().e3j_1.z38().y38(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().o3j_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.d39();
    set_background(this_0.t3j_1, Colors_instance.p39());
    set_color(this_0.t3j_1, color);
    set_border(this_0.t3j_1, color.y38(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.t3j_1, focusOutline);
    set_overlay(this_0.t3j_1, color.y38(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.t3j_1, placeholder);
    var buttonBase = Colors_instance.p39().v38(0.2);
    get_button_0(this_0.t3j_1).y3w(buttonBase, buttonBase.v38(0.2), Colors_instance.f39(), buttonBase.v38(0.4));
    get_checkbox_0(this_0.t3j_1).e3x(Blue_getInstance().e3j_1, Blue_getInstance().f3j_1, Colors_instance.p39());
    var inputFilled = Gray_getInstance().l3j_1;
    var tmp0_$this = get_input_0(this_0.t3j_1);
    var tmp1_filledFocus = Colors_instance.c39();
    var tmp2_hoveredBorder = Gray_getInstance().o3j_1;
    var tmp3_invalidBorder = Red_getInstance().s3i_1;
    var tmp4_filledHover = inputFilled.v38(0.1);
    tmp0_$this.m3x(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.t3j_1);
    var tmp6_thumb = Colors_instance.p39();
    var tmp7_backgroundOn = Colors_instance.j39();
    var tmp8_backgroundOff = Colors_instance.l39();
    tmp5_$this.e3x(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.t3j_1).c3y(Colors_instance.d39(), Colors_instance.p39(), Colors_instance.f39(), VOID, VOID, Colors_instance.l39(), Colors_instance.q39(), Colors_instance.p39());
    get_tooltip_0(this_0.t3j_1).h3y(get_color_0(this_0.t3j_1), get_background_0(this_0.t3j_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.p39();
    set_background(this_0.u3j_1, Colors_instance.d39());
    set_color(this_0.u3j_1, color_0);
    set_border(this_0.u3j_1, color_0.y38(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.u3j_1, focusOutline);
    set_overlay(this_0.u3j_1, color_0.y38(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.u3j_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.d39(), 0.2);
    get_button_0(this_0.u3j_1).y3w(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.m39(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.u3j_1).e3x(Blue_getInstance().b3j_1, Blue_getInstance().c3j_1, Colors_instance.d39());
    var inputFilled_0 = Gray_getInstance().s3j_1;
    var tmp0_$this_0 = get_input_0(this_0.u3j_1);
    var tmp1_filledFocus_0 = Colors_instance.c39();
    var tmp2_hoveredBorder_0 = Gray_getInstance().p3j_1;
    var tmp3_invalidBorder_0 = Red_getInstance().m3i_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.m3x(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.u3j_1);
    var tmp6_thumb_0 = Colors_instance.p39();
    var tmp7_backgroundOn_0 = Colors_instance.m39();
    var tmp8_backgroundOff_0 = Colors_instance.h39();
    tmp5_$this_0.e3x(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.u3j_1).c3y(Colors_instance.p39(), Colors_instance.d39(), Colors_instance.m39(), VOID, VOID, Colors_instance.i39(), Colors_instance.h39(), Colors_instance.d39());
    get_tooltip_0(this_0.u3j_1).h3y(get_color_0(this_0.u3j_1), get_background_0(this_0.u3j_1));
    mutableTheme.a3d('silk-colors', get_SilkColorsStyle());
    mutableTheme.z3c('silk-input', get_InputStyle());
    mutableTheme.o3h('-outlined', get_OutlinedInputVariant());
    mutableTheme.o3h('-filled', get_FilledInputVariant());
    mutableTheme.o3h('-flushed', get_FlushedInputVariant());
    mutableTheme.o3h('-unstyled', get_UnstyledInputVariant());
    mutableTheme.z3c('silk-input-group', get_InputGroupStyle());
    mutableTheme.a3d('silk-disabled', get_DisabledStyle());
    mutableTheme.a3d('silk-smooth-color', get_SmoothColorStyle_0());
    mutableTheme.z3c('silk-button', get_ButtonStyle());
    mutableTheme.z3c('silk-canvas', get_CanvasStyle());
    mutableTheme.z3c('silk-checkbox', get_CheckboxStyle());
    mutableTheme.o3h('-checkbox', get_CheckboxInputVariant());
    mutableTheme.z3c('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.z3c('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.o3h('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.o3h('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.z3c('silk-overlay', get_OverlayStyle());
    mutableTheme.z3c('silk-popup', get_PopupStyle());
    mutableTheme.z3c('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.z3c('silk-surface', get_SurfaceStyle());
    mutableTheme.z3c('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.z3c('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.z3c('silk-switch', get_SwitchStyle());
    mutableTheme.z3c('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.z3c('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.o3h('-switch', get_SwitchInputVariant());
    mutableTheme.z3c('silk-tabs', get_TabsStyle());
    mutableTheme.z3c('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.z3c('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.z3c('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.z3c('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.o3h('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.o3h('-top', get_TopTooltipArrowVariant());
    mutableTheme.o3h('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.o3h('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.o3h('-left', get_LeftTooltipArrowVariant());
    mutableTheme.o3h('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.o3h('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.o3h('-right', get_RightTooltipArrowVariant());
    mutableTheme.o3h('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.o3h('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.o3h('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.o3h('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.z3c('silk-tooltip', get_TooltipStyle());
    mutableTheme.z3c('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.q3h('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.g3h('silk-button-size_xs', Companion_getInstance_1().g3m_1);
    mutableTheme.g3h('silk-button-size_sm', Companion_getInstance_1().h3m_1);
    mutableTheme.g3h('silk-button-size_md', Companion_getInstance_1().i3m_1);
    mutableTheme.g3h('silk-button-size_lg', Companion_getInstance_1().j3m_1);
    mutableTheme.g3h('silk-checkbox-size_sm', Companion_getInstance_2().t3n_1);
    mutableTheme.g3h('silk-checkbox-size_md', Companion_getInstance_2().u3n_1);
    mutableTheme.g3h('silk-checkbox-size_lg', Companion_getInstance_2().v3n_1);
    mutableTheme.g3h('silk-input-size_xs', Companion_getInstance_3().v3o_1);
    mutableTheme.g3h('silk-input-size_sm', Companion_getInstance_3().w3o_1);
    mutableTheme.g3h('silk-input-size_md', Companion_getInstance_3().x3o_1);
    mutableTheme.g3h('silk-input-size_lg', Companion_getInstance_3().y3o_1);
    mutableTheme.g3h('silk-switch-size_sm', Companion_getInstance_4().u3p_1);
    mutableTheme.g3h('silk-switch-size_md', Companion_getInstance_4().v3p_1);
    mutableTheme.g3h('silk-switch-size_lg', Companion_getInstance_4().w3p_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.e3g())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-938405995);
    if (isTraceInProgress()) {
      traceEventStart(-938405995, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:328)');
    }
    $composer_0.s1n(263028580);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().k1i_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.t1n();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1180012187);
    if (isTraceInProgress()) {
      traceEventStart(1180012187, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:334)');
    }
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_5.r3a($composer_0, 8));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.z3f_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().z3l(), get_button(palette).i3y()), ButtonVars_getInstance().b3m(), get_button(palette).x2p()), ButtonVars_getInstance().c3m(), get_button(palette).j3y()), CheckboxVars_getInstance().q3n(), get_checkbox(palette).k3y()), CheckboxVars_getInstance().r3n(), get_checkbox(palette).x2p()), CheckboxVars_getInstance().p3n(), get_checkbox(palette).l3y()), InputVars_getInstance().n3o(), get_input(palette).m3y()), InputVars_getInstance().o3o(), get_input(palette).n3y()), InputVars_getInstance().p3o(), get_input(palette).o3y()), InputVars_getInstance().q3o(), get_input(palette).p3y()), InputVars_getInstance().r3o(), get_input(palette).q3y()), OverlayVars_getInstance().k3l(), get_overlay(palette)), SwitchVars_getInstance().t3p(), get_switch(palette).r3y()), TabVars_getInstance().i3l(), get_tab(palette).l3y()), TabVars_getInstance().k3l(), get_tab(palette).k3y()), TabVars_getInstance().l3l(), get_tab(palette).s3y()), TabVars_getInstance().m3l(), get_tab(palette).x2p()), TabVars_getInstance().n3l(), get_tab(palette).j3y()), TooltipVars_getInstance().k3l(), get_tooltip(palette).k3y()), TooltipVars_getInstance().i3l(), get_tooltip(palette).l3y());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_1($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_4;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return DisabledStyle_0;
  }
  var DisabledStyle_0;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return SmoothColorTransitionDurationVar$delegate.n2y(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle_0() {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return SmoothColorStyle_0;
  }
  var SmoothColorStyle_0;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    var $composer_0 = $composer;
    $composer_0.s1n(812442038);
    if (isTraceInProgress()) {
      traceEventStart(812442038, $changed, -1, 'com.varabyte.kobweb.silk.style.common.DisabledStyle.<anonymous> (CommonStyles.kt:16)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.c2w());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz_0();
    return transition_0(Companion_instance, [Companion_getInstance().e2z('background-color', get_SmoothColorTransitionDurationVar().h2y())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t_0;
  function _init_properties_CommonStyles_kt__a7wisz_0() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t_0) {
      properties_initialized_CommonStyles_kt_zd2b1t_0 = true;
      var tmp = Companion_instance_4;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle_0 = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().f2v().h2y();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_4;
      SmoothColorStyle_0 = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.a3l_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.b3l_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.c3l_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.d3l_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.e3l_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.f3l_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.g3l_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.h3l_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).g3n = function () {
    return this.c3l_1.n2y(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).m3p = function () {
    return this.d3l_1.n2y(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).f2v = function () {
    return this.e3l_1.n2y(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.g3n();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.m3p();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.f2v();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.n2y(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.n2y(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.n2y(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.n2y(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.n2y(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.n2y(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.k3m_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.l3m_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.m3m_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.n3m_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).o3m = function () {
    return this.k3m_1.n2y(this, XS$factory());
  };
  protoOf(FontSizeVars).p3m = function () {
    return this.l3m_1.n2y(this, SM$factory());
  };
  protoOf(FontSizeVars).q3m = function () {
    return this.m3m_1.n2y(this, MD$factory());
  };
  protoOf(FontSizeVars).r3m = function () {
    return this.n3m_1.n2y(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.z3o_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.a3p_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.b3p_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.c3p_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).o3m = function () {
    return this.z3o_1.n2y(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).p3m = function () {
    return this.a3p_1.n2y(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).q3m = function () {
    return this.b3p_1.n2y(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.o3m();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.p3m();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.q3m();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.r3m();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.o3m();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.p3m();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.q3m();
    }, null);
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.u3w_1 = this.g3k();
    this.v3w_1 = this.g3k();
    this.w3w_1 = this.g3k();
    this.x3w_1 = this.g3k();
  }
  protoOf(MutableButton).t3y = function (_set____db54di) {
    return this.u3w_1.d3k(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).i3y = function () {
    return this.u3w_1.n2y(this, default$factory_0());
  };
  protoOf(MutableButton).u3y = function (_set____db54di) {
    return this.v3w_1.d3k(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).x2p = function () {
    return this.v3w_1.n2y(this, hover$factory_0());
  };
  protoOf(MutableButton).v3y = function (_set____db54di) {
    return this.w3w_1.d3k(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).w3y = function () {
    return this.w3w_1.n2y(this, focus$factory_0());
  };
  protoOf(MutableButton).x3y = function (_set____db54di) {
    return this.x3w_1.d3k(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).j3y = function () {
    return this.x3w_1.n2y(this, pressed$factory_0());
  };
  protoOf(MutableButton).y3w = function (default_0, hover, focus, pressed) {
    this.t3y(default_0);
    this.u3y(hover);
    this.v3y(focus);
    this.x3y(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.b3x_1 = this.g3k();
    this.c3x_1 = this.g3k();
    this.d3x_1 = this.g3k();
  }
  protoOf(MutableCheckbox).y3y = function (_set____db54di) {
    return this.b3x_1.d3k(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).k3y = function () {
    return this.b3x_1.n2y(this, background$factory_0());
  };
  protoOf(MutableCheckbox).u3y = function (_set____db54di) {
    return this.c3x_1.d3k(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).x2p = function () {
    return this.c3x_1.n2y(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).z3y = function (_set____db54di) {
    return this.d3x_1.d3k(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).l3y = function () {
    return this.d3x_1.n2y(this, color$factory_0());
  };
  protoOf(MutableCheckbox).e3x = function (background, hover, color) {
    this.y3y(background);
    this.u3y(hover);
    this.z3y(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.h3x_1 = this.g3k();
    this.i3x_1 = this.g3k();
    this.j3x_1 = this.g3k();
    this.k3x_1 = this.g3k();
    this.l3x_1 = this.g3k();
  }
  protoOf(MutableInput).a3z = function (_set____db54di) {
    return this.h3x_1.d3k(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).m3y = function () {
    return this.h3x_1.n2y(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).b3z = function (_set____db54di) {
    return this.i3x_1.d3k(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).n3y = function () {
    return this.i3x_1.n2y(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).c3z = function (_set____db54di) {
    return this.j3x_1.d3k(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).o3y = function () {
    return this.j3x_1.n2y(this, filled$factory_0());
  };
  protoOf(MutableInput).d3z = function (_set____db54di) {
    return this.k3x_1.d3k(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).p3y = function () {
    return this.k3x_1.n2y(this, filledHover$factory_0());
  };
  protoOf(MutableInput).e3z = function (_set____db54di) {
    return this.l3x_1.d3k(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).q3y = function () {
    return this.l3x_1.n2y(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).m3x = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.a3z(hoveredBorder);
    this.b3z(invalidBorder);
    this.c3z(filled);
    this.d3z(filledHover);
    this.e3z(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.p3x_1 = this.g3k();
    this.q3x_1 = this.g3k();
    this.r3x_1 = this.g3k();
  }
  protoOf(MutableSwitch).f3z = function (_set____db54di) {
    return this.p3x_1.d3k(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).g3z = function () {
    return this.p3x_1.n2y(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).h3z = function (_set____db54di) {
    return this.q3x_1.d3k(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).i3z = function () {
    return this.q3x_1.n2y(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).j3z = function (_set____db54di) {
    return this.r3x_1.d3k(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).r3y = function () {
    return this.r3x_1.n2y(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).e3x = function (backgroundOn, backgroundOff, thumb) {
    this.f3z(backgroundOn);
    this.h3z(backgroundOff);
    this.j3z(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.u3x_1 = this.g3k();
    this.v3x_1 = this.g3k();
    this.w3x_1 = this.g3k();
    this.x3x_1 = this.g3k();
    this.y3x_1 = this.g3k();
    this.z3x_1 = this.g3k();
    this.a3y_1 = this.g3k();
    this.b3y_1 = this.g3k();
  }
  protoOf(MutableTab).z3y = function (_set____db54di) {
    return this.u3x_1.d3k(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).l3y = function () {
    return this.u3x_1.n2y(this, color$factory_2());
  };
  protoOf(MutableTab).y3y = function (_set____db54di) {
    return this.v3x_1.d3k(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).k3y = function () {
    return this.v3x_1.n2y(this, background$factory_2());
  };
  protoOf(MutableTab).k3z = function (_set____db54di) {
    return this.w3x_1.d3k(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).l3z = function () {
    return this.w3x_1.n2y(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).m3z = function (_set____db54di) {
    return this.x3x_1.d3k(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).n3z = function () {
    return this.x3x_1.n2y(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).o3z = function (_set____db54di) {
    return this.y3x_1.d3k(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).p3z = function () {
    return this.y3x_1.n2y(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).u3y = function (_set____db54di) {
    return this.z3x_1.d3k(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).x2p = function () {
    return this.z3x_1.n2y(this, hover$factory_4());
  };
  protoOf(MutableTab).x3y = function (_set____db54di) {
    return this.a3y_1.d3k(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).j3y = function () {
    return this.a3y_1.n2y(this, pressed$factory_2());
  };
  protoOf(MutableTab).q3z = function (_set____db54di) {
    return this.b3y_1.d3k(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).s3y = function () {
    return this.b3y_1.n2y(this, disabled$factory_0());
  };
  protoOf(MutableTab).r3z = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.z3y(color);
    this.y3y(background);
    this.k3z(selectedColor);
    this.m3z(selectedBackground);
    this.o3z(selectedBorder);
    this.u3y(hover);
    this.x3y(pressed);
    this.q3z(disabled);
  };
  protoOf(MutableTab).c3y = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.r3z(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.r3z.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.f3y_1 = this.g3k();
    this.g3y_1 = this.g3k();
  }
  protoOf(MutableTooltip).y3y = function (_set____db54di) {
    return this.f3y_1.d3k(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).k3y = function () {
    return this.f3y_1.n2y(this, background$factory_4());
  };
  protoOf(MutableTooltip).z3y = function (_set____db54di) {
    return this.g3y_1.d3k(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).l3y = function () {
    return this.g3y_1.n2y(this, color$factory_4());
  };
  protoOf(MutableTooltip).h3y = function (background, color) {
    this.y3y(background);
    this.z3y(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.z3j('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.z3j('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.z3j('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.z3j('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.z3j('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.z3j('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.z3j('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.z3j('color');
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('overlay', value);
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('focusOutline', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.h3k('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.i3y();
    }, function (receiver, value) {
      return receiver.t3y(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.i3y();
    }, function (receiver, value) {
      return receiver.t3y(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.w3y();
    }, function (receiver, value) {
      return receiver.v3y(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.w3y();
    }, function (receiver, value) {
      return receiver.v3y(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.j3y();
    }, function (receiver, value) {
      return receiver.x3y(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.j3y();
    }, function (receiver, value) {
      return receiver.x3y(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.m3y();
    }, function (receiver, value) {
      return receiver.a3z(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.m3y();
    }, function (receiver, value) {
      return receiver.a3z(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.n3y();
    }, function (receiver, value) {
      return receiver.b3z(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.n3y();
    }, function (receiver, value) {
      return receiver.b3z(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.o3y();
    }, function (receiver, value) {
      return receiver.c3z(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.o3y();
    }, function (receiver, value) {
      return receiver.c3z(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.p3y();
    }, function (receiver, value) {
      return receiver.d3z(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.p3y();
    }, function (receiver, value) {
      return receiver.d3z(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.q3y();
    }, function (receiver, value) {
      return receiver.e3z(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.q3y();
    }, function (receiver, value) {
      return receiver.e3z(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.g3z();
    }, function (receiver, value) {
      return receiver.f3z(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.g3z();
    }, function (receiver, value) {
      return receiver.f3z(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.i3z();
    }, function (receiver, value) {
      return receiver.h3z(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.i3z();
    }, function (receiver, value) {
      return receiver.h3z(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.r3y();
    }, function (receiver, value) {
      return receiver.j3z(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.r3y();
    }, function (receiver, value) {
      return receiver.j3z(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.l3z();
    }, function (receiver, value) {
      return receiver.k3z(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.l3z();
    }, function (receiver, value) {
      return receiver.k3z(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.n3z();
    }, function (receiver, value) {
      return receiver.m3z(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.n3z();
    }, function (receiver, value) {
      return receiver.m3z(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.p3z();
    }, function (receiver, value) {
      return receiver.o3z(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.p3z();
    }, function (receiver, value) {
      return receiver.o3z(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.x2p();
    }, function (receiver, value) {
      return receiver.u3y(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.j3y();
    }, function (receiver, value) {
      return receiver.x3y(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.j3y();
    }, function (receiver, value) {
      return receiver.x3y(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.s3y();
    }, function (receiver, value) {
      return receiver.q3z(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.s3y();
    }, function (receiver, value) {
      return receiver.q3z(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.k3y();
    }, function (receiver, value) {
      return receiver.y3y(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.l3y();
    }, function (receiver, value) {
      return receiver.z3y(value);
    });
  }
  //region block: init
  Companion_instance_18 = new Companion_3();
  Companion_instance_19 = new Companion_4();
  Uninitialized_instance = new Uninitialized();
  DEFAULT_POPUP_OFFSET_PX = 15;
  Companion_instance_20 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = CloseIcon;
  _.$_$.d = Fill;
  _.$_$.e = createIcon;
  _.$_$.f = get_SimpleGridStyle;
  _.$_$.g = SimpleGrid;
  _.$_$.h = Surface;
  _.$_$.i = numColumns;
  _.$_$.j = Overlay;
  _.$_$.k = Tooltip;
  _.$_$.l = get_SmoothColorStyle;
  _.$_$.m = get_SilkColorsStyle;
  _.$_$.n = initSilkWidgets;
  _.$_$.o = setSilkWidgetVariables_0;
  _.$_$.p = get_BorderColorVar;
  _.$_$.q = get_ColorVar;
  _.$_$.r = get_background;
  _.$_$.s = set_background;
  _.$_$.t = get_button_0;
  _.$_$.u = get_button;
  _.$_$.v = get_color;
  _.$_$.w = set_color;
  _.$_$.x = get_overlay;
  _.$_$.y = set_overlay;
  _.$_$.z = get_tooltip_0;
  _.$_$.a1 = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
