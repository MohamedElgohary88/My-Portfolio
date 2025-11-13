(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'org.example.newportfolio:site'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.example.newportfolio:site'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'org.example.newportfolio:site'.");
    }
    root['org.example.newportfolio:site'] = factory(typeof this['org.example.newportfolio:site'] === 'undefined' ? {} : this['org.example.newportfolio:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['kotlinx-coroutines-core'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_WARN_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var removePrefix = kotlin_kotlin.$_$.j8;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var to = kotlin_kotlin.$_$.ha;
  var mapOf = kotlin_kotlin.$_$.e4;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var objectMeta = kotlin_kotlin.$_$.y6;
  var setMetadataFor = kotlin_kotlin.$_$.a7;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.ga;
  var toInt = kotlin_kotlin.$_$.y8;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var toBoolean = kotlin_kotlin.$_$.v8;
  var isBlank = kotlin_kotlin.$_$.d8;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.k8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.s5;
  var protoOf = kotlin_kotlin.$_$.z6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.r6;
  var classMeta = kotlin_kotlin.$_$.c6;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r4;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k4;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var CSSPosition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var radialGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var KProperty0 = kotlin_kotlin.$_$.k7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var gridAutoRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var get_SimpleGridStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var addVariant_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var onMouseEnter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var onMouseLeave = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var get_s = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var Top_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e4;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var KMutableProperty0 = kotlin_kotlin.$_$.i7;
  var THROW_ISE = kotlin_kotlin.$_$.r9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i6;
  var get_overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.x;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var gap_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m4;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var getBooleanHashCode = kotlin_kotlin.$_$.h6;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Companion_instance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var take = kotlin_kotlin.$_$.v4;
  var Arrangement_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f4;
  var listOf = kotlin_kotlin.$_$.c4;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var CenterEnd_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var CenterStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var charArrayOf = kotlin_kotlin.$_$.z5;
  var split = kotlin_kotlin.$_$.n8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var isCharSequence = kotlin_kotlin.$_$.q6;
  var trim = kotlin_kotlin.$_$.d9;
  var toString_0 = kotlin_kotlin.$_$.c7;
  var SpaceBetween_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var checkIndexOverflow = kotlin_kotlin.$_$.b3;
  var get_lastIndex = kotlin_kotlin.$_$.x3;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var substringAfter = kotlin_kotlin.$_$.t8;
  var toIntOrNull = kotlin_kotlin.$_$.x8;
  var startsWith = kotlin_kotlin.$_$.p8;
  var asList = kotlin_kotlin.$_$.ja;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var flex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var ComponentStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var Header = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var get_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var saturate = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var blur = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var backdropFilter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var justifyContent = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aa;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var toList = kotlin_kotlin.$_$.x4;
  var emptyMap = kotlin_kotlin.$_$.k3;
  var LaunchedEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var getNumberHashCode = kotlin_kotlin.$_$.j6;
  var equals = kotlin_kotlin.$_$.f6;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Enum = kotlin_kotlin.$_$.i9;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var thenIf_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var translate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var shifted = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o4;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_instance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var get_LinkStyle = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var addVariant_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var Start_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var columnGap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var rowGap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Companion_instance_16 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var flexDirection = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var backgroundSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Companion_instance_19 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var backgroundRepeat = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Companion_instance_20 = kotlin_com_varabyte_kobweb_browser_ext.$_$.h;
  var Tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var height_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_instance_21 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignContent = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var Companion_instance_22 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var justifyContent_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var get_button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var get_ImageStyle = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var split_0 = kotlin_kotlin.$_$.o8;
  var equals_0 = kotlin_kotlin.$_$.b8;
  var listOfNotNull = kotlin_kotlin.$_$.a4;
  var joinToString = kotlin_kotlin.$_$.u3;
  var mapOf_0 = kotlin_kotlin.$_$.f4;
  var enumEntries = kotlin_kotlin.$_$.u5;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var BreakpointSizes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var modifyComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var set_overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.y;
  var get_button_0 = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var get_tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.z;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var KMutableProperty1 = kotlin_kotlin.$_$.j7;
  var font = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Companion_instance_23 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var Companion_instance_24 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var hashCode = kotlin_kotlin.$_$.m6;
  var Fill = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var createIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var SVGFillRule_EvenOdd_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(AppEntry$lambda$slambda, 'AppEntry$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultPageLayout$slambda, 'DefaultPageLayout$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt', objectMeta);
  setMetadataFor(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt', objectMeta);
  setMetadataFor(ComposableSingletons$ContactCardKt, 'ComposableSingletons$ContactCardKt', objectMeta);
  setMetadataFor(EducationEntry, 'EducationEntry', classMeta);
  setMetadataFor(CertificationEntry, 'CertificationEntry', classMeta);
  setMetadataFor(ComposableSingletons$EducationKt, 'ComposableSingletons$EducationKt', objectMeta);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(NavHeader$slambda, 'NavHeader$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$NavBarKt, 'ComposableSingletons$NavBarKt', objectMeta);
  setMetadataFor(NavBar$NavRect, 'NavRect', classMeta);
  setMetadataFor(NavBar$slambda, 'NavBar$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(NavBar$slambda_1, 'NavBar$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SideMenuState, 'SideMenuState', classMeta, Enum);
  setMetadataFor(ComposableSingletons$SideMenuKt, 'ComposableSingletons$SideMenuKt', objectMeta);
  setMetadataFor(ComposableSingletons$StartSectionKt, 'ComposableSingletons$StartSectionKt', objectMeta);
  setMetadataFor(ComposableSingletons$WorksSectionKt, 'ComposableSingletons$WorksSectionKt', objectMeta);
  setMetadataFor(ComposableSingletons$WorkItemKt, 'ComposableSingletons$WorkItemKt', objectMeta);
  setMetadataFor(ComposableSingletons$SectionContainerKt, 'ComposableSingletons$SectionContainerKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Experience, 'Experience', classMeta, Enum);
  setMetadataFor(Section, 'Section', classMeta, Enum);
  setMetadataFor(Skill, 'Skill', classMeta, Enum);
  setMetadataFor(Social, 'Social', classMeta, Enum);
  setMetadataFor(Work, 'Work', classMeta, Enum);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(MutableText, 'MutableText', classMeta, ColorGroup);
  setMetadataFor(MutableBrand, 'MutableBrand', classMeta, ColorGroup);
  setMetadataFor(SiteFont, 'SiteFont', classMeta);
  setMetadataFor(SiteFonts, 'SiteFonts', classMeta);
  setMetadataFor(Fonts, 'Fonts', objectMeta);
  setMetadataFor(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt', objectMeta);
  setMetadataFor(Strings, 'Strings', objectMeta);
  setMetadataFor(FontFamilies, 'FontFamilies', objectMeta);
  setMetadataFor(Images, 'Images', objectMeta);
  setMetadataFor(UpdateEffect$slambda, 'UpdateEffect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).v33(true);
    Companion_instance.s35('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.g37(LegacyRouteRedirectStrategy_WARN_getInstance());
    router.h37(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.j37(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.d34(mapOf(to('title', 'New Portfolio')));
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:186)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
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
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      renderWithDeferred(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:186)');
        }
        $it($composer_0, 0);
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
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.d40_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.e40_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_instance;
        } else {
          forceReloadNow();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.a35_1.f37('/', VOID, ComposableSingletons$MainKt_getInstance().d40_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.k37(removeSuffix(removeSuffix($this$addRouteInterceptor.z36_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.a3c_1.o3h('-about-section-skills-grid', get_AboutSectionSkillsGridVariant());
    ctx.a3c_1.o3h('-side-menu', get_SideMenuLinkVariant());
    ctx.a3c_1.o3h('-active-side-menu', get_ActiveSideMenuLinkVariant());
    ctx.a3c_1.o3h('-work-items', get_WorkItemsSimpleGridVariant());
    ctx.a3c_1.o3h('-icon', get_IconButtonVariant());
    ctx.a3c_1.o3h('-primary-icon', get_PrimaryIconButtonVariant());
    ctx.a3c_1.o3h('-icon-button', get_LinkIconButtonVariant());
    ctx.a3c_1.o3h('-primary', get_PrimaryButtonVariant());
    ctx.a3c_1.o3h('-primary-button-with-icon-padding', get_PrimaryButtonWithIconPadding());
    ctx.a3c_1.o3h('-skill-item', get_SkillItemImageVariant());
    ctx.a3c_1.j3h(get_ContactCardStyle());
    ctx.a3c_1.j3h(get_FooterStyle());
    ctx.a3c_1.j3h(get_NavHeaderStyle());
    ctx.a3c_1.j3h(get_AppLogoStyle());
    ctx.a3c_1.j3h(get_SideMenuStyle());
    ctx.a3c_1.j3h(get_SkillSectionDividerStyle());
    ctx.a3c_1.j3h(get_StartSectionGridStyle());
    ctx.a3c_1.j3h(get_StartSectionImageStyle());
    ctx.a3c_1.j3h(get_WorkItemStyle());
    ctx.a3c_1.j3h(get_WorkItemShadowStyle());
    ctx.a3c_1.j3h(get_WorkItemImageContainerStyle());
    ctx.a3c_1.j3h(get_WorkItemOverlayStyle());
    ctx.a3c_1.j3h(get_SectionContainerStyle());
    ctx.a3c_1.j3h(get_SkillItemStyle());
    ctx.a3c_1.j3h(get_TextStyle());
    ctx.a3c_1.j3h(get_IconStyle());
    ctx.a3c_1.p3h([get_AboutSectionVariant()]);
    ctx.a3c_1.p3h([get_ContactSectionVariant()]);
    ctx.a3c_1.p3h([get_EducationCardStyle()]);
    ctx.a3c_1.p3h([get_StartSectionVariant()]);
    ctx.a3c_1.p3h([get_TextStylePrimaryColor()]);
    ctx.a3c_1.p3h([get_TextStyleSecondaryColor()]);
    ctx.a3c_1.p3h([get_TextStyleBrandColor()]);
    ctx.a3c_1.p3h([get_DisplayTextStyle()]);
    ctx.a3c_1.p3h([get_SubDisplayTextStyle()]);
    ctx.a3c_1.p3h([get_TitleTextStyle()]);
    ctx.a3c_1.p3h([get_LabelLargeTextStyle()]);
    ctx.a3c_1.p3h([get_LabelMediumTextStyle()]);
    ctx.a3c_1.p3h([get_BodyLargeTextStyle()]);
    ctx.a3c_1.p3h([get_BodyMediumTextStyle()]);
    ctx.a3c_1.p3h([get_BodySmallTextStyle()]);
    ctx.a3c_1.p3h([get_TitleTextStyleSmaller()]);
    ctx.a3c_1.p3h([get_ExperienceTitleTextStyle()]);
    ctx.a3c_1.p3h([get_ExperienceDateTextStyle()]);
    ctx.a3c_1.p3h([get_ExperienceChipTextStyle()]);
    ctx.a3c_1.p3h([get_IconBrandColorVariant()]);
    ctx.a3c_1.p3h([get_IconOnBrandColorVariant()]);
    ctx.a3c_1.p3h([get_LargeIconSize()]);
    ctx.a3c_1.p3h([get_MediumIconSize()]);
    ctx.a3c_1.p3h([get_SmallIconSize()]);
    ctx.a3c_1.r3h(get_SideMenuSlideInAnim());
    ctx.a3c_1.r3h(get_StartSectionGridKeyFrames());
    initColorMode(ctx);
    initAppStyles(ctx);
    initSilkPalette(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:186)');
        }
        $router.c37(ComposableSingletons$MainKt_getInstance().e40_1, $composer_0, 70, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:185)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
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
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      AppEntry(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function initColorMode(ctx) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.initColorMode.<anonymous>' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.initColorMode.<anonymous>.<anonymous>' call
    var tmp = ctx.y3b_1;
    var tmp0_safe_receiver = localStorage.getItem('itamimobile:colorMode');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.initColorMode.<anonymous>.<anonymous>.<anonymous>' call
      tmp_0 = valueOf(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.r3d_1 = tmp1_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp1_elvis_lhs;
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1747713028);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1747713028, $dirty, -1, 'org.example.newportfolio.AppEntry (AppEntry.kt:33)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.AppEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1906547485, true, AppEntry$lambda(content));
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
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      SilkApp(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.k1u(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.n40_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(AppEntry$lambda$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          localStorage.setItem('itamimobile:colorMode', this.n40_1.x9_1);
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
  protoOf(AppEntry$lambda$slambda).c12 = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.n40_1, completion);
    i.o40_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1396330423, $changed, -1, 'org.example.newportfolio.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:46)');
        }
        $content($composer_0, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1906547485, $changed, -1, 'org.example.newportfolio.AppEntry.<anonymous> (AppEntry.kt:35)');
        }
        var colorMode = Companion_instance_0.r3a($composer_0, 8);
        $composer_0.s1n(-1337663862);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f(colorMode);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.e1p(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.t1n();
        LaunchedEffect(colorMode, tmp0_group, $composer_0, 64);
        var tmp_2 = scrollBehavior(minHeight(fillMaxWidth(toModifier(get_SmoothColorStyle(), $composer_0, 0)), get_vh(100)), Companion_instance_1.y2x());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 1396330423, true, AppEntry$lambda$lambda($content));
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
        var tmp_4;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.e1p(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.t1n();
        Surface(tmp_2, null, null, null, null, tmp0, $composer_0, 196616, 30);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DefaultPageLayout(title, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-384890228);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-384890228, $dirty, -1, 'org.example.newportfolio.components.layouts.DefaultPageLayout (DefaultPageLayout.kt:16)');
      }
      $composer_0.s1n(465733142);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.layouts.DefaultPageLayout.<anonymous>' call
        var value = DefaultPageLayout$slambda_0(title, null);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      LaunchedEffect(title, tmp0_group, $composer_0, 64 | 14 & $dirty);
      var tmp_1 = fillMaxSize(Companion_instance_2);
      var tmp_2 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.layouts.DefaultPageLayout.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1985698499, true, DefaultPageLayout$lambda(content));
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
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.layouts.DefaultPageLayout.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 24584, 10);
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
      tmp1_safe_receiver.k1u(DefaultPageLayout$lambda_0(title, content, $changed));
    }
  }
  function DefaultPageLayout$slambda($title, resultContinuation) {
    this.x40_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultPageLayout$slambda).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(DefaultPageLayout$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultPageLayout$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          document.title = 'Mohamed Elgohary - ' + this.x40_1;
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
  protoOf(DefaultPageLayout$slambda).c12 = function ($this$LaunchedEffect, completion) {
    var i = new DefaultPageLayout$slambda(this.x40_1, completion);
    i.y40_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultPageLayout$slambda_0($title, resultContinuation) {
    var i = new DefaultPageLayout$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultPageLayout$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1985698499, $changed, -1, 'org.example.newportfolio.components.layouts.DefaultPageLayout.<anonymous> (DefaultPageLayout.kt:25)');
        }
        NavHeader($composer_0, 0);
        $content($composer_0, 0);
        Footer($composer_0, 0);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function DefaultPageLayout$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      DefaultPageLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_AboutSectionVariant() {
    _init_properties_AboutSection_kt__422y88();
    return AboutSectionVariant$delegate.n2y(null, AboutSectionVariant$factory());
  }
  var AboutSectionVariant$delegate;
  function AboutSection($composer, $changed) {
    _init_properties_AboutSection_kt__422y88();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(143593867);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(143593867, $changed, -1, 'org.example.newportfolio.components.sections.about.AboutSection (AboutSection.kt:71)');
      }
      var tmp1_variant = get_AboutSectionVariant();
      var tmp2_section = Section_About_getInstance();
      SectionContainer(tmp2_section, Companion_instance_2, null, Center_instance, tmp1_variant, ComposableSingletons$AboutSectionKt_getInstance().a41_1, $composer_0, 196678, 4);
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
      tmp0_safe_receiver.k1u(AboutSection$lambda($changed));
    }
  }
  function TextContent($composer, $changed) {
    _init_properties_AboutSection_kt__422y88();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1710310813);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1710310813, $changed, -1, 'org.example.newportfolio.components.sections.about.TextContent (AboutSection.kt:94)');
      }
      var tmp = fillMaxWidth(padding(Companion_instance_2, get_cssRem(8.5)));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().b41_1, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.k1u(TextContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1936067388, $changed, -1, 'org.example.newportfolio.components.sections.about.ComposableSingletons$AboutSectionKt.lambda-1.<anonymous> (AboutSection.kt:83)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_1().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.about.ComposableSingletons$AboutSectionKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp = flexGrow(Companion_instance_2, 1);
        SkillItem(element, null, tmp, null, $composer_0, 512, 10);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$SectionContainer, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(439742541, $changed, -1, 'org.example.newportfolio.components.sections.about.ComposableSingletons$AboutSectionKt.lambda-2.<anonymous> (AboutSection.kt:78)');
      }
      TextContent($composer_0, 0);
      var tmp0_variant = get_AboutSectionSkillsGridVariant();
      var tmp1_numColumns = numColumns(2, VOID, 5, 5);
      SimpleGrid(tmp1_numColumns, null, tmp0_variant, null, ComposableSingletons$AboutSectionKt_getInstance().z40_1, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1775635482, $changed, -1, 'org.example.newportfolio.components.sections.about.ComposableSingletons$AboutSectionKt.lambda-3.<anonymous> (AboutSection.kt:101)');
      }
      var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_DisplayTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_3.k2u());
      var tmp1_text = 'About me';
      SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 70, 12);
      var tmp2_modifier = textAlign(padding(toModifier_0(get_TextStyle(), [get_SubDisplayTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), get_cssRem(1)), Companion_instance_3.k2u());
      var tmp3_text = 'Mobile Developer specialized in performant Android & cross\u2011platform apps (Kotlin, Compose, Flutter, KMP). I focus on clean architecture, scalable code and solving real performance & UX problems.';
      SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 70, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.z40_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1936067388, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.a41_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(439742541, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.b41_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1775635482, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
  }
  var ComposableSingletons$AboutSectionKt_instance;
  function ComposableSingletons$AboutSectionKt_getInstance() {
    if (ComposableSingletons$AboutSectionKt_instance == null)
      new ComposableSingletons$AboutSectionKt();
    return ComposableSingletons$AboutSectionKt_instance;
  }
  function AboutSectionVariant$delegate$lambda($this$addVariant) {
    _init_properties_AboutSection_kt__422y88();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(AboutSectionVariant$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, AboutSectionVariant$delegate$lambda$lambda_0(colorPalette, $this$addVariant));
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, AboutSectionVariant$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, AboutSectionVariant$delegate$lambda$lambda_2(colorPalette, $this$addVariant));
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, AboutSectionVariant$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, AboutSectionVariant$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function AboutSectionVariant$delegate$lambda$lambda() {
    _init_properties_AboutSection_kt__422y88();
    return minHeight(Companion_instance_2, get_vh(100));
  }
  function AboutSectionVariant$delegate$lambda$lambda$lambda($colorPalette, $this_addVariant) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, $this_addVariant.h3f_1.h3i() ? 0.1 : 0.2));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(50));
      return Unit_instance;
    };
  }
  function AboutSectionVariant$delegate$lambda$lambda_0($colorPalette, $this_addVariant) {
    return function () {
      var tmp = maxWidth(Companion_instance_2, get_percent(100));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(50), get_percent(30));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, AboutSectionVariant$delegate$lambda$lambda$lambda($colorPalette, $this_addVariant)));
    };
  }
  function AboutSectionVariant$delegate$lambda$lambda_1() {
    _init_properties_AboutSection_kt__422y88();
    return maxWidth(Companion_instance_2, get_percent(100));
  }
  function AboutSectionVariant$delegate$lambda$lambda$lambda_0($colorPalette, $this_addVariant) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, $this_addVariant.h3f_1.h3i() ? 0.1 : 0.2));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(63));
      return Unit_instance;
    };
  }
  function AboutSectionVariant$delegate$lambda$lambda_2($colorPalette, $this_addVariant) {
    return function () {
      var tmp = maxWidth(Companion_instance_2, get_percent(90));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(50), get_percent(50));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, AboutSectionVariant$delegate$lambda$lambda$lambda_0($colorPalette, $this_addVariant)));
    };
  }
  function AboutSectionVariant$delegate$lambda$lambda_3() {
    _init_properties_AboutSection_kt__422y88();
    return maxWidth(Companion_instance_2, get_percent(80));
  }
  function AboutSectionVariant$delegate$lambda$lambda_4() {
    _init_properties_AboutSection_kt__422y88();
    return maxWidth(Companion_instance_2, get_percent(70));
  }
  function AboutSection$lambda($$changed) {
    return function ($composer, $force) {
      AboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextContent$lambda($$changed) {
    return function ($composer, $force) {
      TextContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AboutSectionVariant$factory() {
    return getPropertyCallableRef('AboutSectionVariant', 0, KProperty0, function () {
      return get_AboutSectionVariant();
    }, null);
  }
  var properties_initialized_AboutSection_kt_3he7c6;
  function _init_properties_AboutSection_kt__422y88() {
    if (!properties_initialized_AboutSection_kt_3he7c6) {
      properties_initialized_AboutSection_kt_3he7c6 = true;
      var tmp = get_SectionContainerStyle();
      AboutSectionVariant$delegate = addVariant(tmp, VOID, AboutSectionVariant$delegate$lambda);
    }
  }
  function get_AboutSectionSkillsGridVariant() {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    return AboutSectionSkillsGridVariant;
  }
  var AboutSectionSkillsGridVariant;
  function AboutSectionSkillsGridVariant$lambda($this$addVariant) {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    $this$addVariant.w3d(AboutSectionSkillsGridVariant$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, AboutSectionSkillsGridVariant$lambda$lambda_0);
    var tmp_0 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_0, AboutSectionSkillsGridVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function AboutSectionSkillsGridVariant$lambda$lambda() {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    var tmp = padding_0(fillMaxWidth(Companion_instance_2), get_cssRem(6.5), VOID, VOID, get_cssRem(2.25));
    return gridAutoRows(tmp, AboutSectionSkillsGridVariant$lambda$lambda$lambda);
  }
  function AboutSectionSkillsGridVariant$lambda$lambda$lambda($this$gridAutoRows) {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    $this$gridAutoRows.p2w(get_fr(1));
    return Unit_instance;
  }
  function AboutSectionSkillsGridVariant$lambda$lambda_0() {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    var tmp1_columnGap = get_cssRem(1);
    var tmp2_rowGap = get_cssRem(1.5);
    return gap(Companion_instance_2, tmp2_rowGap, tmp1_columnGap);
  }
  function AboutSectionSkillsGridVariant$lambda$lambda_1() {
    _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr();
    var tmp1_columnGap = get_cssRem(1.5);
    var tmp2_rowGap = get_cssRem(2.5);
    return gap(Companion_instance_2, tmp2_rowGap, tmp1_columnGap);
  }
  var properties_initialized_AboutSectionSkillsGridVariant_kt_ydfvpx;
  function _init_properties_AboutSectionSkillsGridVariant_kt__rrcemr() {
    if (!properties_initialized_AboutSectionSkillsGridVariant_kt_ydfvpx) {
      properties_initialized_AboutSectionSkillsGridVariant_kt_ydfvpx = true;
      var tmp = get_SimpleGridStyle();
      AboutSectionSkillsGridVariant = addVariant_0(tmp, VOID, AboutSectionSkillsGridVariant$lambda);
    }
  }
  function get_ContactSectionVariant() {
    _init_properties_ContactSection_kt__uguwed();
    return ContactSectionVariant$delegate.n2y(null, ContactSectionVariant$factory());
  }
  var ContactSectionVariant$delegate;
  function ContactSection($composer, $changed) {
    _init_properties_ContactSection_kt__uguwed();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(248925048);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(248925048, $changed, -1, 'org.example.newportfolio.components.sections.contact.ContactSection (ContactSection.kt:31)');
      }
      var tmp0_variant = get_ContactSectionVariant();
      var tmp1_section = Section_Contact_getInstance();
      SectionContainer(tmp1_section, null, CenterHorizontally_instance, Center_instance, tmp0_variant, ComposableSingletons$ContactSectionKt_getInstance().d41_1, $composer_0, 196614, 2);
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
      tmp0_safe_receiver.k1u(ContactSection$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$SectionContainer, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1982361414, $changed, -1, 'org.example.newportfolio.components.sections.contact.ComposableSingletons$ContactSectionKt.lambda-1.<anonymous> (ContactSection.kt:38)');
      }
      ContactCard(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.d41_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1982361414, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
  var ComposableSingletons$ContactSectionKt_instance;
  function ComposableSingletons$ContactSectionKt_getInstance() {
    if (ComposableSingletons$ContactSectionKt_instance == null)
      new ComposableSingletons$ContactSectionKt();
    return ComposableSingletons$ContactSectionKt_instance;
  }
  function ContactSectionVariant$delegate$lambda($this$addVariant) {
    _init_properties_ContactSection_kt__uguwed();
    $this$addVariant.w3d(ContactSectionVariant$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, ContactSectionVariant$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_0, ContactSectionVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function ContactSectionVariant$delegate$lambda$lambda() {
    _init_properties_ContactSection_kt__uguwed();
    return minHeight(Companion_instance_2, get_px(600));
  }
  function ContactSectionVariant$delegate$lambda$lambda_0() {
    _init_properties_ContactSection_kt__uguwed();
    return height(Companion_instance_2, get_vh(100));
  }
  function ContactSectionVariant$delegate$lambda$lambda_1() {
    _init_properties_ContactSection_kt__uguwed();
    return height(Companion_instance_2, get_vh(85));
  }
  function ContactSection$lambda($$changed) {
    return function ($composer, $force) {
      ContactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ContactSectionVariant$factory() {
    return getPropertyCallableRef('ContactSectionVariant', 0, KProperty0, function () {
      return get_ContactSectionVariant();
    }, null);
  }
  var properties_initialized_ContactSection_kt_7chs55;
  function _init_properties_ContactSection_kt__uguwed() {
    if (!properties_initialized_ContactSection_kt_7chs55) {
      properties_initialized_ContactSection_kt_7chs55 = true;
      var tmp = get_SectionContainerStyle();
      ContactSectionVariant$delegate = addVariant(tmp, VOID, ContactSectionVariant$delegate$lambda);
    }
  }
  function get_ContactCardStyle() {
    _init_properties_ContactCard_kt__6srzaa();
    return ContactCardStyle$delegate.n2y(null, ContactCardStyle$factory());
  }
  var ContactCardStyle$delegate;
  function ContactCard(colorMode, $composer, $changed, $default) {
    _init_properties_ContactCard_kt__6srzaa();
    var colorMode_0 = {_v: colorMode};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-810951222);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.l1f(colorMode_0._v) : false) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          colorMode_0._v = Companion_instance_0.r3a($composer_0, 8);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-810951222, $dirty, -1, 'org.example.newportfolio.components.sections.contact.components.ContactCard (ContactCard.kt:84)');
      }
      $composer_0.s1n(-446352054);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var isHovered$delegate = tmp0_group;
      var palette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var tmp_1 = toModifier_0(get_ContactCardStyle(), [], $composer_0, 64);
      $composer_0.s1n(-446351884);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>' call
        var value_0 = ContactCard$lambda_1(isHovered$delegate);
        this_1.e1p(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t1n();
      var tmp_4 = onMouseEnter(tmp_1, tmp1_group);
      $composer_0.s1n(-446351837);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_5;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>' call
        var value_1 = ContactCard$lambda_2(isHovered$delegate);
        this_2.e1p(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.t1n();
      var tmp_7 = onMouseLeave(tmp_4, tmp2_group);
      var tmp_8 = ContactCard$lambda(isHovered$delegate);
      var tmp_9 = Companion_instance_2;
      $composer_0.s1n(-446351711);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_10;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>' call
        var value_2 = ContactCard$lambda_3;
        this_3.e1p(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.t1n();
      var tmp0_$receiver = transform(tmp_9, tmp3_group);
      var tmp1_color = get_brand(palette).c41().z38().y38(VOID, VOID, VOID, 0.45);
      var tmp2_blurRadius = get_px(26);
      var tmp3_spreadRadius = get_px(6);
      var tmp_12 = thenIf(tmp_7, tmp_8, boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color));
      var tmp_13 = get_s(0.28);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$19 = 'ease-in-out';
      var tmp_14 = CSSTransition_init_$Create$('transform', tmp_13, tmp$ret$19);
      var tmp_15 = get_s(0.3);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$23 = 'ease-in-out';
      var tmp4_modifier = transition(tmp_12, [tmp_14, CSSTransition_init_$Create$('box-shadow', tmp_15, tmp$ret$23)]);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>' call
      var tmp_16 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_16, -337144717, true, ContactCard$lambda_4(colorMode_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.y1o();
      var tmp_17;
      if (invalid ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_1.e1p(value_3);
        tmp_17 = value_3;
      } else {
        tmp_17 = it_3;
      }
      var tmp_18 = tmp_17;
      var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp4_modifier, Top_instance, CenterHorizontally_instance, null, tmp0, $composer_0, 24584, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp4_safe_receiver = $composer_0.n1p();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.k1u(ContactCard$lambda_5(colorMode_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactCardKt$lambda_1$lambda_xlprae($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(478404117, $changed, -1, 'org.example.newportfolio.components.sections.contact.components.ComposableSingletons$ContactCardKt.lambda-1.<anonymous> (ContactCard.kt:116)');
    }
    Text('Feel free to reach out about collaborations, performance audits, or just to say hi. Email ', $composer_0, 6);
    var tmp = toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
    var tmp_0 = textAlign(fontFamily(tmp, ['PoppinsMedium']), Companion_instance_3.k2u());
    SpanText('mohamed.abdelazim.elgohary@gmail.com', tmp_0, null, null, $composer_0, 70, 12);
    Text(' or Telegram ', $composer_0, 6);
    var tmp_1 = toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
    var tmp_2 = textAlign(fontFamily(tmp_1, ['PoppinsMedium']), Companion_instance_3.k2u());
    SpanText('@MohamedElgohary88', tmp_2, null, null, $composer_0, 70, 12);
    Text(' \u2014 let\u2019s build something impactful.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactCardKt() {
    ComposableSingletons$ContactCardKt_instance = this;
    var tmp = this;
    tmp.e41_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(478404117, false, ComposableSingletons$ContactCardKt$lambda_1$lambda_xlprae));
  }
  var ComposableSingletons$ContactCardKt_instance;
  function ComposableSingletons$ContactCardKt_getInstance() {
    if (ComposableSingletons$ContactCardKt_instance == null)
      new ComposableSingletons$ContactCardKt();
    return ComposableSingletons$ContactCardKt_instance;
  }
  function ContactCard$lambda($isHovered$delegate) {
    _init_properties_ContactCard_kt__6srzaa();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isHovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isHovered$delegate.p2();
  }
  function ContactCard$lambda_0($isHovered$delegate, value) {
    _init_properties_ContactCard_kt__6srzaa();
    getLocalDelegateReference('isHovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isHovered$delegate.c10(value);
    return Unit_instance;
  }
  function ContactCardStyle$delegate$lambda($composer, $changed) {
    _init_properties_ContactCard_kt__6srzaa();
    var $composer_0 = $composer;
    $composer_0.s1n(-990316938);
    if (isTraceInProgress()) {
      traceEventStart(-990316938, $changed, -1, 'org.example.newportfolio.components.sections.contact.components.ContactCardStyle$delegate.<anonymous> (ContactCard.kt:46)');
    }
    var tmp0 = toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle()], $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function ContactCardStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_ContactCard_kt__6srzaa();
    var colors = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(ContactCardStyle$delegate$lambda$lambda(colors));
    $this$ComponentStyle.x3f('&:hover', ContactCardStyle$delegate$lambda$lambda_0(colors));
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp, ContactCardStyle$delegate$lambda$lambda_1);
    var tmp_0 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_0, ContactCardStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function ContactCardStyle$delegate$lambda$lambda($colors) {
    return function () {
      var tmp = boxShadow(padding_1(borderRadius(background(fillMaxWidth(Companion_instance_2), get_overlay($colors), []), get_px(30)), get_cssRem(1), get_cssRem(1)), VOID, VOID, get_px(20), get_px(2), get_overlay($colors));
      var tmp_0 = Companion_getInstance_0();
      var tmp_1 = get_s(0.4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'ease-in-out';
      return transition_0(tmp, [tmp_0.e2z('box-shadow', tmp_1, tmp$ret$3)]);
    };
  }
  function ContactCardStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_ContactCard_kt__6srzaa();
    $this$transform.r2q(get_px(-6));
    $this$transform.o2q(get_deg(-0.4));
    return Unit_instance;
  }
  function ContactCardStyle$delegate$lambda$lambda_0($colors) {
    return function () {
      var tmp = Companion_instance_2;
      var tmp_0 = boxShadow(transform(tmp, ContactCardStyle$delegate$lambda$lambda$lambda), VOID, VOID, get_px(28), get_px(6), get_brand($colors).c41().z38().y38(VOID, VOID, VOID, 0.45));
      var tmp_1 = Companion_getInstance_0();
      var tmp_2 = get_s(0.32);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'ease-in-out';
      var tmp_3 = tmp_1.e2z('transform', tmp_2, tmp$ret$3);
      var tmp_4 = Companion_getInstance_0();
      var tmp_5 = get_s(0.32);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = 'ease-in-out';
      return transition_0(tmp_0, [tmp_3, tmp_4.e2z('box-shadow', tmp_5, tmp$ret$7)]);
    };
  }
  function ContactCardStyle$delegate$lambda$lambda_1() {
    _init_properties_ContactCard_kt__6srzaa();
    return padding_1(fillMaxWidth(Companion_instance_2, get_percent(65)), get_cssRem(2), get_cssRem(2));
  }
  function ContactCardStyle$delegate$lambda$lambda_2() {
    _init_properties_ContactCard_kt__6srzaa();
    return padding_1(maxWidth(fillMaxWidth(Companion_instance_2, get_percent(60)), get_cssRem(64)), get_cssRem(2.25), get_cssRem(2.25));
  }
  function ContactCard$lambda_1($isHovered$delegate) {
    return function (it) {
      ContactCard$lambda_0($isHovered$delegate, true);
      return Unit_instance;
    };
  }
  function ContactCard$lambda_2($isHovered$delegate) {
    return function (it) {
      ContactCard$lambda_0($isHovered$delegate, false);
      return Unit_instance;
    };
  }
  function ContactCard$lambda_3($this$transform) {
    _init_properties_ContactCard_kt__6srzaa();
    $this$transform.r2q(get_px(-6));
    $this$transform.p2q(1.015);
    $this$transform.o2q(get_deg(-0.5));
    return Unit_instance;
  }
  function ContactCard$lambda$lambda($colorMode) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(416129552, $changed, -1, 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>.<anonymous> (ContactCard.kt:138)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_2().l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = $colorMode._v.g3i() ? element.i41_1 : element.j41_1;
          var tmp_1 = toModifier_0(get_IconStyle(), [get_MediumIconSize()], $composer_0, 0);
          var tmp_2 = Companion_getInstance_0();
          var tmp_3 = get_s(0.3);
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = 'ease-in-out';
          var tmp_4 = transition_0(tmp_1, [tmp_2.e2z('transform', tmp_3, tmp$ret$3)]);
          LinkIconButton_0(element.h41_1, tmp_0, null, tmp_4, null, null, null, $composer_0, 4096, 116);
        }
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ContactCard$lambda_4($colorMode) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-337144717, $changed, -1, 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous> (ContactCard.kt:104)');
        }
        var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_DisplayTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_3.k2u());
        var tmp1_text = 'Contact me';
        SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 70, 12);
        P(toAttrs(lineHeight(margin(textAlign(toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), Companion_instance_3.k2u()), get_em(0.6), get_em(0.6)), get_em(1.6))), ComposableSingletons$ContactCardKt_getInstance().e41_1, $composer_0, 48, 0);
        var tmp_0 = gap_0(margin(Companion_instance_2, get_em(2.5)), get_em(1.1));
        var tmp_1 = CenterVertically_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 416129552, true, ContactCard$lambda$lambda($colorMode));
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
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.contact.components.ContactCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.t1n();
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24584, 10);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ContactCard$lambda_5($colorMode, $$changed, $$default) {
    return function ($composer, $force) {
      ContactCard($colorMode._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ContactCardStyle$factory() {
    return getPropertyCallableRef('ContactCardStyle', 0, KProperty0, function () {
      return get_ContactCardStyle();
    }, null);
  }
  var properties_initialized_ContactCard_kt_t2rlts;
  function _init_properties_ContactCard_kt__6srzaa() {
    if (!properties_initialized_ContactCard_kt_t2rlts) {
      properties_initialized_ContactCard_kt_t2rlts = true;
      var tmp = ContactCardStyle$delegate$lambda;
      ContactCardStyle$delegate = ComponentStyle(tmp, VOID, ContactCardStyle$delegate$lambda_0);
    }
  }
  function get_educationEntries() {
    _init_properties_education_kt__pv3296();
    return educationEntries;
  }
  var educationEntries;
  function get_certificationEntries() {
    _init_properties_education_kt__pv3296();
    return certificationEntries;
  }
  var certificationEntries;
  function get_EducationCardStyle() {
    _init_properties_education_kt__pv3296();
    return EducationCardStyle$delegate.n2y(null, EducationCardStyle$factory());
  }
  var EducationCardStyle$delegate;
  function EducationEntry(school, degree, date, description) {
    date = date === VOID ? null : date;
    this.k41_1 = school;
    this.l41_1 = degree;
    this.m41_1 = date;
    this.n41_1 = description;
  }
  protoOf(EducationEntry).toString = function () {
    return 'EducationEntry(school=' + this.k41_1 + ', degree=' + this.l41_1 + ', date=' + this.m41_1 + ', description=' + this.n41_1 + ')';
  };
  protoOf(EducationEntry).hashCode = function () {
    var result = getStringHashCode(this.k41_1);
    result = imul(result, 31) + getStringHashCode(this.l41_1) | 0;
    result = imul(result, 31) + (this.m41_1 == null ? 0 : getStringHashCode(this.m41_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n41_1) | 0;
    return result;
  };
  protoOf(EducationEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EducationEntry))
      return false;
    var tmp0_other_with_cast = other instanceof EducationEntry ? other : THROW_CCE();
    if (!(this.k41_1 === tmp0_other_with_cast.k41_1))
      return false;
    if (!(this.l41_1 === tmp0_other_with_cast.l41_1))
      return false;
    if (!(this.m41_1 == tmp0_other_with_cast.m41_1))
      return false;
    if (!(this.n41_1 === tmp0_other_with_cast.n41_1))
      return false;
    return true;
  };
  function CertificationEntry(title, issuer, date, credentialId, featured) {
    date = date === VOID ? null : date;
    credentialId = credentialId === VOID ? null : credentialId;
    featured = featured === VOID ? false : featured;
    this.o41_1 = title;
    this.p41_1 = issuer;
    this.q41_1 = date;
    this.r41_1 = credentialId;
    this.s41_1 = featured;
  }
  protoOf(CertificationEntry).toString = function () {
    return 'CertificationEntry(title=' + this.o41_1 + ', issuer=' + this.p41_1 + ', date=' + this.q41_1 + ', credentialId=' + this.r41_1 + ', featured=' + this.s41_1 + ')';
  };
  protoOf(CertificationEntry).hashCode = function () {
    var result = getStringHashCode(this.o41_1);
    result = imul(result, 31) + getStringHashCode(this.p41_1) | 0;
    result = imul(result, 31) + (this.q41_1 == null ? 0 : getStringHashCode(this.q41_1)) | 0;
    result = imul(result, 31) + (this.r41_1 == null ? 0 : getStringHashCode(this.r41_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s41_1) | 0;
    return result;
  };
  protoOf(CertificationEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CertificationEntry))
      return false;
    var tmp0_other_with_cast = other instanceof CertificationEntry ? other : THROW_CCE();
    if (!(this.o41_1 === tmp0_other_with_cast.o41_1))
      return false;
    if (!(this.p41_1 === tmp0_other_with_cast.p41_1))
      return false;
    if (!(this.q41_1 == tmp0_other_with_cast.q41_1))
      return false;
    if (!(this.r41_1 == tmp0_other_with_cast.r41_1))
      return false;
    if (!(this.s41_1 === tmp0_other_with_cast.s41_1))
      return false;
    return true;
  };
  function EducationCard(entry, modifier, $composer, $changed, $default) {
    _init_properties_education_kt__pv3296();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(36949015);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(entry) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 2) === 2) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (isTraceInProgress()) {
        traceEventStart(36949015, $dirty, -1, 'org.example.newportfolio.components.sections.education.EducationCard (education.kt:162)');
      }
      $composer_0.s1n(-1694776966);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var hovered = tmp0_group;
      var palette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var tmp_1 = borderRadius(padding_2(modifier_0._v, get_px(20)), get_px(14));
      var tmp_2 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = backgroundColor(border(tmp_1, tmp_2, 'solid', get_overlay(palette)), Colors_instance.c39());
      $composer_0.s1n(-1694776647);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_4;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>' call
        var value_0 = EducationCard$lambda(hovered);
        this_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t1n();
      var tmp_6 = onMouseEnter(tmp_3, tmp1_group);
      $composer_0.s1n(-1694776596);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_7;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>' call
        var value_1 = EducationCard$lambda_0(hovered);
        this_2.e1p(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t1n();
      var tmp_9 = onMouseLeave(tmp_6, tmp2_group);
      var tmp_10 = hovered.p2();
      var tmp1_color = get_brand(palette).c41().z38().y38(VOID, VOID, VOID, 0.45);
      var tmp2_blurRadius = get_px(24);
      var tmp3_spreadRadius = get_px(4);
      var tmp_11 = boxShadow(Companion_instance_2, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color);
      $composer_0.s1n(-1694776347);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_12;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>' call
        var value_2 = EducationCard$lambda_1;
        this_3.e1p(value_2);
        tmp_12 = value_2;
      } else {
        tmp_12 = it_2;
      }
      var tmp_13 = tmp_12;
      var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.t1n();
      var tmp_14 = transform(tmp_11, tmp3_group);
      var tmp_15 = get_deg(135);
      var tmp_16 = thenIf(tmp_9, tmp_10, backgroundImage(tmp_14, linearGradient(tmp_15, EducationCard$lambda_2(palette))));
      var tmp_17 = Companion_getInstance_0();
      var tmp_18 = get_s(0.32);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$23 = 'ease-in-out';
      var tmp_19 = tmp_17.e2z('box-shadow', tmp_18, tmp$ret$23);
      var tmp_20 = Companion_getInstance_0();
      var tmp_21 = get_s(0.32);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$27 = 'ease-in-out';
      var tmp_22 = tmp_20.e2z('transform', tmp_21, tmp$ret$27);
      var tmp_23 = Companion_getInstance_0();
      var tmp_24 = get_s(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_25 = maxWidth(transition_0(tmp_16, [tmp_19, tmp_22, tmp_23.e2z('background-image', tmp_24, 'ease')]), get_percent(100));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>' call
      var tmp_26 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_26, -1233463538, true, EducationCard$lambda_3(entry));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.y1o();
      var tmp_27;
      if (invalid ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.e1p(value_3);
        tmp_27 = value_3;
      } else {
        tmp_27 = it_3;
      }
      var tmp_28 = tmp_27;
      var tmp0 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp_25, null, null, null, tmp0, $composer_0, 24584, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp4_safe_receiver = $composer_0.n1p();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.k1u(EducationCard$lambda_4(entry, modifier_0, $changed, $default));
    }
  }
  function CertificationCard(entry, modifier, $composer, $changed, $default) {
    _init_properties_education_kt__pv3296();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(4299707);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(entry) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 2) === 2) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (isTraceInProgress()) {
        traceEventStart(4299707, $dirty, -1, 'org.example.newportfolio.components.sections.education.CertificationCard (education.kt:198)');
      }
      $composer_0.s1n(1811973057);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var hovered = tmp0_group;
      var palette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var tmp_1 = borderRadius(padding_2(modifier_0._v, get_px(16)), get_px(12));
      var tmp_2 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = border(tmp_1, tmp_2, 'solid', get_overlay(palette));
      $composer_0.s1n(1811973327);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_4;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>' call
        var value_0 = CertificationCard$lambda(hovered);
        this_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t1n();
      var tmp_6 = onMouseEnter(tmp_3, tmp1_group);
      $composer_0.s1n(1811973378);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_7;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>' call
        var value_1 = CertificationCard$lambda_0(hovered);
        this_2.e1p(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t1n();
      var tmp_9 = onMouseLeave(tmp_6, tmp2_group);
      var tmp_10 = hovered.p2();
      var tmp_11 = Companion_instance_2;
      $composer_0.s1n(1811973495);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_12;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>' call
        var value_2 = CertificationCard$lambda_1;
        this_3.e1p(value_2);
        tmp_12 = value_2;
      } else {
        tmp_12 = it_2;
      }
      var tmp_13 = tmp_12;
      var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.t1n();
      var tmp0_$receiver = transform(tmp_11, tmp3_group);
      var tmp1_color = get_brand(palette).c41().z38().y38(VOID, VOID, VOID, 0.35);
      var tmp2_blurRadius = get_px(20);
      var tmp3_spreadRadius = get_px(3);
      var tmp_14 = boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color);
      var tmp_15 = get_px(2);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = thenIf(tmp_9, tmp_10, outline(tmp_14, tmp_15, 'solid', get_brand(palette).c41()));
      var tmp_17 = Companion_getInstance_0();
      var tmp_18 = get_s(0.28);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$27 = 'ease-in-out';
      var tmp_19 = tmp_17.e2z('transform', tmp_18, tmp$ret$27);
      var tmp_20 = Companion_getInstance_0();
      var tmp_21 = get_s(0.28);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$31 = 'ease-in-out';
      var tmp_22 = tmp_20.e2z('box-shadow', tmp_21, tmp$ret$31);
      var tmp_23 = Companion_getInstance_0();
      var tmp_24 = get_s(0.4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_25 = backgroundColor(transition_0(tmp_16, [tmp_19, tmp_22, tmp_23.e2z('outline', tmp_24, 'ease-in')]), Colors_instance.c39());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>' call
      var tmp_26 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_26, 937803698, true, CertificationCard$lambda_2(entry));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.y1o();
      var tmp_27;
      if (invalid ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_1.e1p(value_3);
        tmp_27 = value_3;
      } else {
        tmp_27 = it_3;
      }
      var tmp_28 = tmp_27;
      var tmp0 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp_25, null, null, null, tmp0, $composer_0, 24584, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp4_safe_receiver = $composer_0.n1p();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.k1u(CertificationCard$lambda_3(entry, modifier_0, $changed, $default));
    }
  }
  function LinkButton(text, href, $composer, $changed) {
    _init_properties_education_kt__pv3296();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(473035610);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(href) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(473035610, $dirty, -1, 'org.example.newportfolio.components.sections.education.LinkButton (education.kt:230)');
      }
      var tmp = cursor(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_7.b2w());
      $composer_0.s1n(-1317357148);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.LinkButton.<anonymous>' call
        var value = LinkButton$lambda(href);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      var tmp_2 = textDecorationLine(onClick(tmp, tmp0_group), Companion_instance_8.v2y());
      SpanText(text, tmp_2, null, null, $composer_0, 64 | 14 & $dirty, 12);
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
      tmp1_safe_receiver.k1u(LinkButton$lambda_0(text, href, $changed));
    }
  }
  function FoundationCourseItem(entry, $composer, $changed) {
    _init_properties_education_kt__pv3296();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1426301587);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(entry) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1426301587, $dirty, -1, 'org.example.newportfolio.components.sections.education.FoundationCourseItem (education.kt:241)');
      }
      var tmp = padding_1(fillMaxWidth(Companion_instance_2), get_px(6));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.education.FoundationCourseItem.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 2113224880, true, FoundationCourseItem$lambda(entry));
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
        // Inline function 'org.example.newportfolio.components.sections.education.FoundationCourseItem.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.t1n();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
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
      tmp0_safe_receiver.k1u(FoundationCourseItem$lambda_0(entry, $changed));
    }
  }
  function EducationSection($composer, $changed) {
    _init_properties_education_kt__pv3296();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(319062009);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(319062009, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection (education.kt:256)');
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = get_certificationEntries();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>' call
        if (element.s41_1) {
          destination.w(element);
        }
      }
      var featured = destination;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_1 = get_certificationEntries();
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_1.l();
      while (tmp0_iterator_0.z()) {
        var element_0 = tmp0_iterator_0.b1();
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>' call
        if (!element_0.s41_1) {
          destination_0.w(element_0);
        }
      }
      var foundation = destination_0;
      $composer_0.s1n(-1036103365);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_2.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>' call
        var value = mutableStateOf(false);
        this_2.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var showAllFoundation = tmp0_group;
      var tmp_1 = Section_Education_getInstance();
      var tmp_2 = id(Companion_instance_2, 'education');
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 939821687, true, EducationSection$lambda(featured, showAllFoundation, foundation));
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
      var tmp_4;
      if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.t1n();
      SectionContainer(tmp_1, tmp_2, null, null, null, tmp0, $composer_0, 196678, 28);
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
      tmp1_safe_receiver.k1u(EducationSection$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$EducationKt$lambda_1$lambda_xo9fcy($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1677783214, $changed, -1, 'org.example.newportfolio.components.sections.education.ComposableSingletons$EducationKt.lambda-1.<anonymous> (education.kt:263)');
      }
      var tmp = toModifier_0(get_TextStyle(), [get_DisplayTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
      SpanText('Education & Certifications', tmp, null, null, $composer_0, 70, 12);
      var tmp_0 = margin(toModifier_0(get_TextStyle(), [get_SubDisplayTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), get_px(12));
      SpanText('My academic background and professional credentials', tmp_0, null, null, $composer_0, 70, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$EducationKt$lambda_2$lambda_4umyar($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(893992229, $changed, -1, 'org.example.newportfolio.components.sections.education.ComposableSingletons$EducationKt.lambda-2.<anonymous> (education.kt:268)');
      }
      var tmp = margin(toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), VOID, VOID, get_px(8));
      SpanText('My Education', tmp, null, null, $composer_0, 70, 12);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_educationEntries().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.education.ComposableSingletons$EducationKt.lambda-2.<anonymous>.<anonymous>' call
        EducationCard(element, null, $composer_0, 0, 2);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$EducationKt() {
    ComposableSingletons$EducationKt_instance = this;
    var tmp = this;
    tmp.t41_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1677783214, false, ComposableSingletons$EducationKt$lambda_1$lambda_xo9fcy));
    var tmp_0 = this;
    tmp_0.u41_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(893992229, false, ComposableSingletons$EducationKt$lambda_2$lambda_4umyar));
  }
  var ComposableSingletons$EducationKt_instance;
  function ComposableSingletons$EducationKt_getInstance() {
    if (ComposableSingletons$EducationKt_instance == null)
      new ComposableSingletons$EducationKt();
    return ComposableSingletons$EducationKt_instance;
  }
  function EducationCardStyle$delegate$lambda($this$addVariant) {
    _init_properties_education_kt__pv3296();
    $this$addVariant.w3d(EducationCardStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function EducationCardStyle$delegate$lambda$lambda() {
    _init_properties_education_kt__pv3296();
    return Companion_instance_2;
  }
  function EducationCard$lambda($hovered) {
    return function (it) {
      $hovered.c10(true);
      return Unit_instance;
    };
  }
  function EducationCard$lambda_0($hovered) {
    return function (it) {
      $hovered.c10(false);
      return Unit_instance;
    };
  }
  function EducationCard$lambda_1($this$transform) {
    _init_properties_education_kt__pv3296();
    $this$transform.r2q(get_px(-5));
    return Unit_instance;
  }
  function EducationCard$lambda_2($palette) {
    return function ($this$linearGradient) {
      $this$linearGradient.z2z(get_brand($palette).c41().z38(), get_percent(0));
      $this$linearGradient.z2z(Colors_instance.c39(), get_percent(100));
      return Unit_instance;
    };
  }
  function EducationCard$lambda_3($entry) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1233463538, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous> (education.kt:191)');
        }
        var tmp_0 = margin(toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), VOID, VOID, get_px(8));
        SpanText($entry.k41_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp0_safe_receiver = $entry.m41_1;
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.education.EducationCard.<anonymous>.<anonymous>.<anonymous>' call
          tmp_1 = ' | ' + tmp0_safe_receiver;
        }
        var tmp1_elvis_lhs = tmp_1;
        var tmp_2 = $entry.l41_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
        var tmp_3 = margin(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), VOID, VOID, get_px(12));
        SpanText(tmp_2, tmp_3, null, null, $composer_0, 64, 12);
        var tmp_4 = toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText($entry.n41_1, tmp_4, null, null, $composer_0, 64, 12);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function EducationCard$lambda_4($entry, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      EducationCard($entry, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function CertificationCard$lambda($hovered) {
    return function (it) {
      $hovered.c10(true);
      return Unit_instance;
    };
  }
  function CertificationCard$lambda_0($hovered) {
    return function (it) {
      $hovered.c10(false);
      return Unit_instance;
    };
  }
  function CertificationCard$lambda_1($this$transform) {
    _init_properties_education_kt__pv3296();
    $this$transform.r2q(get_px(-4));
    $this$transform.o2q(get_deg(0.6));
    return Unit_instance;
  }
  function CertificationCard$lambda_2($entry) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(937803698, $changed, -1, 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous> (education.kt:221)');
        }
        var tmp_0 = margin(toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), VOID, VOID, get_px(6));
        SpanText($entry.o41_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp0_safe_receiver = $entry.q41_1;
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.education.CertificationCard.<anonymous>.<anonymous>.<anonymous>' call
          tmp_1 = ' | ' + tmp0_safe_receiver;
        }
        var tmp1_elvis_lhs = tmp_1;
        var tmp_2 = $entry.p41_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
        var tmp_3 = margin(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), VOID, VOID, get_px(12));
        SpanText(tmp_2, tmp_3, null, null, $composer_0, 64, 12);
        if (!($entry.r41_1 == null)) {
          LinkButton('Show Credential', $entry.r41_1, $composer_0, 6);
        }
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
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function CertificationCard$lambda_3($entry, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CertificationCard($entry, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LinkButton$lambda($href) {
    return function (it) {
      window.open($href, '_blank');
      return Unit_instance;
    };
  }
  function LinkButton$lambda_0($text, $href, $$changed) {
    return function ($composer, $force) {
      LinkButton($text, $href, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FoundationCourseItem$lambda($entry) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(2113224880, $changed, -1, 'org.example.newportfolio.components.sections.education.FoundationCourseItem.<anonymous> (education.kt:247)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText($entry.o41_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp_1 = ' - ' + $entry.p41_1;
        var tmp0_safe_receiver = $entry.q41_1;
        var tmp_2;
        if (tmp0_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.education.FoundationCourseItem.<anonymous>.<anonymous>.<anonymous>' call
          tmp_2 = ' (' + tmp0_safe_receiver + ')';
        }
        var tmp1_elvis_lhs = tmp_2;
        var tmp_3 = tmp_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
        var tmp_4 = margin_0(toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), VOID, VOID, VOID, get_px(4));
        SpanText(tmp_3, tmp_4, null, null, $composer_0, 64, 12);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function FoundationCourseItem$lambda_0($entry, $$changed) {
    return function ($composer, $force) {
      FoundationCourseItem($entry, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EducationSection$lambda$lambda$lambda$lambda($cert) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1040925984, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (education.kt:280)');
        }
        CertificationCard($cert, fillMaxWidth(Companion_instance_2), $composer_0, 64, 0);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function EducationSection$lambda$lambda$lambda($featured) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520293489, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous> (education.kt:278)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $featured.l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = margin_1(Companion_instance_2, get_px(10));
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, -1040925984, true, EducationSection$lambda$lambda$lambda$lambda(element));
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
            // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
            $composer_1.e1p(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.t1n();
          Box(tmp_0, null, null, tmp0, $composer_0, 3080, 6);
        }
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
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function EducationSection$lambda$lambda$lambda$lambda_0($showAllFoundation) {
    return function (it) {
      $showAllFoundation.c10(true);
      return Unit_instance;
    };
  }
  function EducationSection$lambda$lambda$lambda_0($showAllFoundation, $foundation) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1567054685, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous> (education.kt:285)');
        }
        var tmp_0 = margin(toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), VOID, VOID, get_px(12));
        SpanText('Foundation Courses', tmp_0, null, null, $composer_0, 70, 12);
        var displayed = $showAllFoundation.p2() ? $foundation : take($foundation, 6);
        $composer_0.s1n(933824639);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = displayed.l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          FoundationCourseItem(element, $composer_0, 0);
        }
        $composer_0.t1n();
        if (!$showAllFoundation.p2() ? $foundation.j() > 6 : false) {
          var tmp_1 = margin(cursor(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_7.b2w()), get_px(12));
          $composer_0.s1n(933825042);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.y1o();
          var tmp_2;
          if (false ? true : it === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = EducationSection$lambda$lambda$lambda$lambda_0($showAllFoundation);
            $composer_0.e1p(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.t1n();
          var tmp_4 = textDecorationLine(onClick(tmp_1, tmp0_group), Companion_instance_8.v2y());
          SpanText('Show More', tmp_4, null, null, $composer_0, 70, 12);
        }
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function EducationSection$lambda$lambda($featured, $showAllFoundation, $foundation) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(190129254, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous> (education.kt:275)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText('Licenses & Certifications', tmp_0, null, null, $composer_0, 70, 12);
        var tmp_1 = margin(toModifier_0(get_TextStyle(), [get_TitleTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), get_px(12), VOID, get_px(24));
        SpanText('Featured Certifications', tmp_1, null, null, $composer_0, 70, 12);
        var tmp_2 = numColumns(1, 2, 3, 3);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1520293489, true, EducationSection$lambda$lambda$lambda($featured));
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
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.t1n();
        SimpleGrid(tmp_2, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_6 = padding(fillMaxWidth(Companion_instance_2), get_px(20));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1567054685, true, EducationSection$lambda$lambda$lambda_0($showAllFoundation, $foundation));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.s1n(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.y1o();
        var tmp_8;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
          $composer_2.e1p(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.t1n();
        Column(tmp_6, null, null, null, tmp0_0, $composer_0, 24584, 14);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function EducationSection$lambda($featured, $showAllFoundation, $foundation) {
    return function ($this$SectionContainer, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(939821687, $changed, -1, 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous> (education.kt:262)');
        }
        var tmp_0 = padding(fillMaxWidth(Companion_instance_2), get_px(80), VOID, get_px(20));
        var tmp_1 = CenterHorizontally_instance;
        Column(tmp_0, null, tmp_1, null, ComposableSingletons$EducationKt_getInstance().t41_1, $composer_0, 24584, 10);
        var tmp_2 = fillMaxWidth(Companion_instance_2);
        var tmp_3 = Arrangement_instance.l37(get_px(28));
        Column(tmp_2, tmp_3, null, null, ComposableSingletons$EducationKt_getInstance().u41_1, $composer_0, 24648, 12);
        var tmp_4 = padding(fillMaxWidth(Companion_instance_2), get_px(60));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 190129254, true, EducationSection$lambda$lambda($featured, $showAllFoundation, $foundation));
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
        var tmp_6;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.education.EducationSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp_4, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function EducationSection$lambda_0($$changed) {
    return function ($composer, $force) {
      EducationSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EducationCardStyle$factory() {
    return getPropertyCallableRef('EducationCardStyle', 0, KProperty0, function () {
      return get_EducationCardStyle();
    }, null);
  }
  var properties_initialized_education_kt_nca73s;
  function _init_properties_education_kt__pv3296() {
    if (!properties_initialized_education_kt_nca73s) {
      properties_initialized_education_kt_nca73s = true;
      educationEntries = listOf([new EducationEntry('Arab Open University (AOU)', "Bachelor's degree, Computer Science", VOID, 'Studying computer science with a strong focus on software development, data structures & algorithms, database management, and computer networks. Gaining hands-on experience in object-oriented programming (OOP), web & mobile development, and software engineering principles. Developing problem-solving skills through real-world projects and research, while staying up to date with the latest trends in AI, cybersecurity, and cloud computing.'), new EducationEntry('Open Source Society University', "Bachelor's degree, Computer Science", 'Jul 2021 - Sep 2023', 'Highly motivated and results-oriented Computer Science graduate with a strong foundation in programming languages, algorithms, and data structures. Eager to leverage my skills and knowledge to contribute to innovative software solutions in a fast-paced environment.')]);
      certificationEntries = listOf([new CertificationEntry('Meta Android Developer Professional Certificate', 'Meta', 'Issued Aug 2024', 'https://www.coursera.org/account/accomplishments/professional-cert/C96GSAQ4LM4S', true), new CertificationEntry('Advanced Android Kotlin development', 'egFWD', 'Issued Jan 2023', 'https://confirm.udacity.com/YRSGTK4G', true), new CertificationEntry('Google IT Support Professional Certificate', 'Google', 'Issued Apr 2022', VOID, true), new CertificationEntry('The Complete 2024 Software Testing Bootcamp', 'Udemy', 'Issued Aug 2024', 'https://www.udemy.com/certificate/UC-547558a4-711d-4e02-bcd6-60c43e568860/', true), new CertificationEntry('Introduction to Software Testing Concepts & Techniques', 'Information Technology Institute (ITI)', 'Issued Aug 2024', '1Zmj3bQvhtuWs6JQd8RghsPMfOoQka7Da', true), new CertificationEntry('CS50', 'Harvard University', 'Issued Sep 2021', VOID, true), new CertificationEntry('Dart Programming Language And OOP', 'Udemy', 'Issued Aug 2024', 'https://www.udemy.com/certificate/UC-e3c9ccdd-5db0-420f-a9be-06c3d4b24db7', true), new CertificationEntry('Android Apps Development Training', 'The Chance', 'Issued Feb 2023', VOID, true), new CertificationEntry('Career Essentials in Software Development by Microsoft and LinkedIn', 'Microsoft', VOID, VOID, true), new CertificationEntry('Android Development Track', 'Udacity', 'Issued Aug 2022', VOID, true), new CertificationEntry('SPECIALIZATION UI/UX Design', 'Edraak \u0625\u062F\u0631\u0627\u0643', 'Issued Jan 2022', VOID, true), new CertificationEntry('Software Testing Foundations: Test Techniques', 'LinkedIn', 'Aug 2024'), new CertificationEntry('Small Talk for Non-Native English Speakers', 'LinkedIn', 'Jan 2023'), new CertificationEntry('Android Development: Retrofit with Kotlin', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Become an Android Mobile App Developer', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Effective Android Testing for Mobile Developers', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Git Essential Training: The Basics', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Learning Git and GitHub', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: APIs and Web Services', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Algorithms', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Beyond the Fundamentals', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Data Structures', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Databases', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Design Patterns', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Fundamentals', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Object-Oriented Design', 'LinkedIn', 'Jun 2022'), new CertificationEntry('Programming Foundations: Software Testing/QA', 'LinkedIn', 'Jun 2022')]);
      var tmp = get_SectionContainerStyle();
      EducationCardStyle$delegate = addVariant(tmp, VOID, EducationCardStyle$delegate$lambda);
    }
  }
  function CardContent(experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(656543499);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(experience) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(656543499, $dirty, -1, 'org.example.newportfolio.components.sections.experience.CardContent (ExperienceCard.kt:26)');
      }
      $composer_0.s1n(1730097602);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var isHovered$delegate = tmp0_group;
      var palette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var bp = rememberBreakpoint($composer_0, 0);
      var tmp_1 = borderRadius(padding_2(Companion_instance_2.v37(bp.z9(Breakpoint_LG_getInstance()) >= 0 ? width(Companion_instance_2, get_percent(45)) : maxWidth(fillMaxWidth(Companion_instance_2), get_percent(95))), bp.z9(Breakpoint_LG_getInstance()) >= 0 ? get_px(20) : get_px(16)), get_px(12));
      var tmp_2 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = border(tmp_1, tmp_2, 'solid', get_overlay(palette));
      $composer_0.s1n(1730098093);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_4;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>' call
        var value_0 = CardContent$lambda_1(isHovered$delegate);
        this_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t1n();
      var tmp_6 = onMouseEnter(tmp_3, tmp1_group);
      $composer_0.s1n(1730098140);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_7;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>' call
        var value_1 = CardContent$lambda_2(isHovered$delegate);
        this_2.e1p(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t1n();
      var tmp_9 = onMouseLeave(tmp_6, tmp2_group);
      var tmp_10 = CardContent$lambda(isHovered$delegate);
      var tmp_11 = Companion_instance_2;
      $composer_0.s1n(1730098266);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_12;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>' call
        var value_2 = CardContent$lambda_3;
        this_3.e1p(value_2);
        tmp_12 = value_2;
      } else {
        tmp_12 = it_2;
      }
      var tmp_13 = tmp_12;
      var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.t1n();
      var tmp0_$receiver = transform(tmp_11, tmp3_group);
      var tmp1_color = get_brand(palette).c41().z38().y38(VOID, VOID, VOID, 0.4);
      var tmp2_blurRadius = get_px(18);
      var tmp3_spreadRadius = get_px(4);
      var tmp_14 = thenIf(tmp_9, tmp_10, boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color));
      var tmp_15 = Companion_getInstance_0();
      var tmp_16 = get_s(0.28);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$23 = 'ease-in-out';
      var tmp_17 = transition_0(tmp_14, [tmp_15.e2z('transform', tmp_16, tmp$ret$23)]);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>' call
      var tmp_18 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_18, -1425046988, true, CardContent$lambda_4(experience, palette));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.y1o();
      var tmp_19;
      if (invalid ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.e1p(value_3);
        tmp_19 = value_3;
      } else {
        tmp_19 = it_3;
      }
      var tmp_20 = tmp_19;
      var tmp0 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp_17, null, null, null, tmp0, $composer_0, 24584, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp4_safe_receiver = $composer_0.n1p();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.k1u(CardContent$lambda_5(experience, $changed));
    }
  }
  function ExperienceCard(experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(218785278);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(experience) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(218785278, $dirty, -1, 'org.example.newportfolio.components.sections.experience.ExperienceCard (ExperienceCard.kt:96)');
      }
      var bp = rememberBreakpoint($composer_0, 0);
      var isOdd = !((toInt(experience.x41_1) % 2 | 0) === 0);
      var tmp = fillMaxWidth(id(Companion_instance_2, 'experience-card-' + experience.y9_1));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'relative';
      var tmp0_$receiver = position(tmp, tmp$ret$3);
      var tmp1_left = bp.z9(Breakpoint_LG_getInstance()) >= 0 ? get_px(50) : get_px(12);
      var tmp2_right = bp.z9(Breakpoint_LG_getInstance()) >= 0 ? get_px(50) : get_px(12);
      var tmp3_top = get_px(20);
      var tmp4_bottom = get_px(20);
      var tmp_0 = classNames(padding_0(tmp0_$receiver, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), ['experience-card']);
      var tmp_1 = bp.z9(Breakpoint_LG_getInstance()) >= 0 ? isOdd ? CenterStart_instance : CenterEnd_instance : Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceCard.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1059406332, true, ExperienceCard$lambda(experience));
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
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      Box(tmp_0, tmp_1, null, tmp0, $composer_0, 3144, 4);
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
      tmp0_safe_receiver.k1u(ExperienceCard$lambda_0(experience, $changed));
    }
  }
  function CardContent$lambda($isHovered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isHovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isHovered$delegate.p2();
  }
  function CardContent$lambda_0($isHovered$delegate, value) {
    getLocalDelegateReference('isHovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isHovered$delegate.c10(value);
    return Unit_instance;
  }
  function CardContent$lambda_1($isHovered$delegate) {
    return function (it) {
      CardContent$lambda_0($isHovered$delegate, true);
      return Unit_instance;
    };
  }
  function CardContent$lambda_2($isHovered$delegate) {
    return function (it) {
      CardContent$lambda_0($isHovered$delegate, false);
      return Unit_instance;
    };
  }
  function CardContent$lambda_3($this$transform) {
    $this$transform.r2q(get_px(-6));
    $this$transform.p2q(1.015);
    return Unit_instance;
  }
  function CardContent$lambda$lambda($experience) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1018095185, $changed, -1, 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous> (ExperienceCard.kt:54)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_ExperienceTitleTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText($experience.y41_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp_1 = $experience.a42_1 + ' - ' + $experience.b42_1 + ' (' + $experience.e42() + ')';
        var tmp_2 = toModifier_0(get_TextStyle(), [get_ExperienceDateTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0);
        SpanText(tmp_1, tmp_2, null, null, $composer_0, 64, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function CardContent$lambda$lambda_0($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-23076131, $changed, -1, 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous> (ExperienceCard.kt:67)');
        }
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = split($experience.c42_1, charArrayOf([_Char___init__impl__6a9atx(46)]));
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.l();
        while (tmp0_iterator.z()) {
          var item = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.trim' call
          var tmp$ret$1 = toString_0(trim(isCharSequence(item) ? item : THROW_CCE()));
          destination.w(tmp$ret$1);
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = destination.l();
        while (tmp0_iterator_0.z()) {
          var element = tmp0_iterator_0.b1();
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element) > 0) {
            destination_0.w(element);
          }
        }
        var tmp0_iterator_1 = destination_0.l();
        while (tmp0_iterator_1.z()) {
          var element_0 = tmp0_iterator_1.b1();
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = element_0 + '.';
          var tmp_1 = margin(toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), VOID, VOID, get_px(6));
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 64, 12);
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
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
  function CardContent$lambda$lambda$lambda($skill) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(726723105, $changed, -1, 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:88)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_ExperienceChipTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText($skill, tmp_0, null, null, $composer_0, 64, 12);
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
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function CardContent$lambda$lambda_1($experience, $palette) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-228191893, $changed, -1, 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous> (ExperienceCard.kt:80)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $experience.d42_1.l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = backgroundColor(borderRadius(padding_2(margin_0(Companion_instance_2, get_px(5), get_px(5)), get_px(6)), get_px(6)), get_overlay($palette));
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, 726723105, true, CardContent$lambda$lambda$lambda(element));
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
            // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
            $composer_1.e1p(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.t1n();
          Box(tmp_0, null, null, tmp0, $composer_0, 3080, 6);
        }
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
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function CardContent$lambda_4($experience, $palette) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1425046988, $changed, -1, 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous> (ExperienceCard.kt:49)');
        }
        var tmp_0 = margin(fillMaxWidth(Companion_instance_2), VOID, VOID, get_px(10));
        var tmp_1 = SpaceBetween_instance;
        var tmp_2 = CenterVertically_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 1018095185, true, CardContent$lambda$lambda($experience));
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
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.t1n();
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24584, 8);
        var tmp_6 = margin(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), VOID, VOID, get_px(10));
        SpanText($experience.z41_1, tmp_6, null, null, $composer_0, 64, 12);
        var tmp_7 = margin(Companion_instance_2, VOID, VOID, get_px(20));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_8, -23076131, true, CardContent$lambda$lambda_0($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.s1n(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.y1o();
        var tmp_9;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver_0);
          $composer_2.e1p(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_2.t1n();
        Column(tmp_7, null, null, null, tmp0_0, $composer_0, 24584, 14);
        var tmp_11 = numColumns(3, 4, 5);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_12, -228191893, true, CardContent$lambda$lambda_1($experience, $palette));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.s1n(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.l1f(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.y1o();
        var tmp_13;
        if (invalid_1 ? true : it_1 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.experience.CardContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_27(dispatchReceiver_1);
          $composer_3.e1p(value_1);
          tmp_13 = value_1;
        } else {
          tmp_13 = it_1;
        }
        var tmp_14 = tmp_13;
        var tmp0_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_3.t1n();
        SimpleGrid(tmp_11, null, null, null, tmp0_1, $composer_0, 24576, 14);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_instance;
        }
        tmp = tmp_15;
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
  function CardContent$lambda_5($experience, $$changed) {
    return function ($composer, $force) {
      CardContent($experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceCard$lambda($experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1059406332, $changed, -1, 'org.example.newportfolio.components.sections.experience.ExperienceCard.<anonymous> (ExperienceCard.kt:113)');
        }
        CardContent($experience, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ExperienceCard$lambda_0($experience, $$changed) {
    return function ($composer, $force) {
      ExperienceCard($experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(435063402);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(435063402, $changed, -1, 'org.example.newportfolio.components.sections.experience.ExperienceSection (ExperienceSection.kt:24)');
      }
      $composer_0.s1n(1978987858);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>' call
        var value = mutableStateOf(Experience_First_getInstance());
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var activeExperience$delegate = tmp0_group;
      $composer_0.s1n(1978987928);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var this_2 = mutableStateListOf();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = get_entries().j();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
            this_2.i1m(false);
          }
           while (inductionVariable < times);
        var value_0 = this_2;
        this_1.e1p(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t1n();
      var visibleStates = tmp1_group;
      var tmp_3 = padding_1(fillMaxWidth(classNames(id(Companion_instance_2, 'experience'), ['section-container'])), get_px(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$12 = 'relative';
      var tmp_4 = position(tmp_3, tmp$ret$12);
      var tmp_5 = Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -519580304, true, ExperienceSection$lambda_1(activeExperience$delegate, visibleStates));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.y1o();
      var tmp_7;
      if (invalid ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_32(dispatchReceiver);
        $composer_1.e1p(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.t1n();
      Box(tmp_4, tmp_5, null, tmp0, $composer_0, 3080, 4);
      $composer_0.s1n(1978990612);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_9;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>' call
        var value_2 = ExperienceSection$lambda_2(visibleStates, activeExperience$delegate);
        this_3.e1p(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.t1n();
      SideEffect(tmp2_group, $composer_0, 6);
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
      tmp3_safe_receiver.k1u(ExperienceSection$lambda_3($changed));
    }
  }
  function ExperienceSection$lambda($activeExperience$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExperience', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeExperience$delegate.p2();
  }
  function ExperienceSection$lambda_0($activeExperience$delegate, value) {
    getLocalDelegateReference('activeExperience', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeExperience$delegate.c10(value);
    return Unit_instance;
  }
  function ExperienceSection$lambda$lambda($this$transform) {
    $this$transform.q2q(get_percent(-50));
    return Unit_instance;
  }
  function ExperienceSection$lambda$lambda$lambda($this$transform) {
    $this$transform.r2q(get_px(0));
    return Unit_instance;
  }
  function ExperienceSection$lambda$lambda$lambda_0($this$transform) {
    $this$transform.r2q(get_px(25));
    return Unit_instance;
  }
  function ExperienceSection$lambda$lambda$lambda_1($experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1049769946, $changed, -1, 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ExperienceSection.kt:86)');
        }
        ExperienceCard($experience, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda_0($visibleStates) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1023479577, $changed, -1, 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous> (ExperienceSection.kt:65)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = get_entries().l();
        while (tmp0_iterator.z()) {
          var item = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var index_0 = checkIndexOverflow(tmp1);
          $composer_0.s1n(1954778244);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var it = margin(fillMaxWidth(Companion_instance_2), VOID, VOID, index_0 === get_lastIndex(get_entries()) ? get_px(0) : get_px(40));
          var tmp_0;
          if ($visibleStates.k(index_0)) {
            $composer_0.s1n(1353676540);
            var tmp_1 = opacity(it, 1);
            $composer_0.s1n(1353676550);
            // Inline function 'androidx.compose.runtime.cache' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_0 = $composer_0.y1o();
            var tmp_2;
            if (false ? true : it_0 === Companion_getInstance().k1i_1) {
              // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ExperienceSection$lambda$lambda$lambda;
              $composer_0.e1p(value);
              tmp_2 = value;
            } else {
              tmp_2 = it_0;
            }
            var tmp_3 = tmp_2;
            var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            $composer_0.t1n();
            var tmp2_group = transform(tmp_1, tmp0_group);
            $composer_0.t1n();
            tmp_0 = tmp2_group;
          } else {
            $composer_0.s1n(1353676728);
            var tmp_4 = opacity(it, 0);
            $composer_0.s1n(1353676738);
            // Inline function 'androidx.compose.runtime.cache' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_1 = $composer_0.y1o();
            var tmp_5;
            if (false ? true : it_1 === Companion_getInstance().k1i_1) {
              // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value_0 = ExperienceSection$lambda$lambda$lambda_0;
              $composer_0.e1p(value_0);
              tmp_5 = value_0;
            } else {
              tmp_5 = it_1;
            }
            var tmp_6 = tmp_5;
            var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            $composer_0.t1n();
            var tmp3_group = transform(tmp_4, tmp1_group);
            $composer_0.t1n();
            tmp_0 = tmp3_group;
          }
          var tmp0_group_0 = tmp_0;
          $composer_0.t1n();
          var tmp_7 = Companion_getInstance_0();
          var tmp_8 = get_s(0.6);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_9 = tmp_7.e2z('opacity', tmp_8, 'ease');
          var tmp_10 = Companion_getInstance_0();
          var tmp_11 = get_s(0.6);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_12 = transition_0(tmp0_group_0, [tmp_9, tmp_10.e2z('transform', tmp_11, 'ease')]);
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_13 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_13, 1049769946, true, ExperienceSection$lambda$lambda$lambda_1(item));
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          $composer_1.s1n(1157296644);
          sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.l1f(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_1.y1o();
          var tmp_14;
          if (invalid ? true : it_2 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = ComposableLambda$invoke$ref_30(dispatchReceiver);
            $composer_1.e1p(value_1);
            tmp_14 = value_1;
          } else {
            tmp_14 = it_2;
          }
          var tmp_15 = tmp_14;
          var tmp0 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
          $composer_1.t1n();
          Box(tmp_12, null, null, tmp0, $composer_0, 3080, 6);
        }
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_instance;
        }
        tmp = tmp_16;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda_1($activeExperience$delegate, $visibleStates) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-519580304, $changed, -1, 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous> (ExperienceSection.kt:38)');
        }
        var tmp_0 = Companion_instance_2;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = 'absolute';
        var tmp_1 = displayIfAtLeast(backgroundColor(width(bottom(top(position(tmp_0, tmp$ret$3), get_px(0)), get_px(0)), get_px(2)), Colors_instance.l39()), Breakpoint_LG_getInstance());
        Box(tmp_1, null, null, null, $composer_0, 8, 14);
        var tmp_2 = Companion_instance_2;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$7 = 'absolute';
        var tmp_3 = left(top(position(tmp_2, tmp$ret$7), get_px(0)), get_percent(50));
        $composer_0.s1n(-1666861529);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_4;
        if (false ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
          var value = ExperienceSection$lambda$lambda;
          $composer_0.e1p(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.t1n();
        var tmp_6 = backgroundColor(borderRadius(size(transform(tmp_3, tmp0_group), get_px(10)), get_percent(50)), Colors_instance.k39());
        var tmp_7 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = margin(border(tmp_6, tmp_7, 'solid', Colors_instance.p39()), get_px(35 + imul(ExperienceSection$lambda($activeExperience$delegate).y9_1, 130) | 0));
        var tmp_9 = Companion_getInstance_0();
        var tmp_10 = get_s(0.3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$19 = 'ease-in-out';
        var tmp_11 = displayIfAtLeast(transition_0(tmp_8, [tmp_9.e2z('margin-top', tmp_10, tmp$ret$19)]), Breakpoint_LG_getInstance());
        Box(tmp_11, null, null, null, $composer_0, 8, 14);
        var tmp_12 = fillMaxWidth(Companion_instance_2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_13 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_13, -1023479577, true, ExperienceSection$lambda$lambda_0($visibleStates));
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
        var tmp_14;
        if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
          $composer_1.e1p(value_0);
          tmp_14 = value_0;
        } else {
          tmp_14 = it_0;
        }
        var tmp_15 = tmp_14;
        var tmp0 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp_12, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_instance;
        }
        tmp = tmp_16;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda_1($visibleStates, $activeExperience$delegate) {
    return function (entries) {
      var inductionVariable = 0;
      var last = entries.length;
      while (inductionVariable < last) {
        var element = entries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = element.target;
        var el = tmp instanceof Element ? tmp : null;
        var tmp_0;
        var tmp_1;
        var tmp_2 = element.isIntersecting;
        if ((!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE()) {
          tmp_1 = !(el == null);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = el.classList.contains('experience-card');
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          var id = el.id;
          if (startsWith(id, 'experience-card-')) {
            var idx = toIntOrNull(substringAfter(id, 'experience-card-'));
            if (!(idx == null)) {
              ExperienceSection$lambda_0($activeExperience$delegate, get_entries().k(idx));
              $visibleStates.q2j(idx, true);
            }
          }
        }
      }
      return Unit_instance;
    };
  }
  function ExperienceSection$lambda_2($visibleStates, $activeExperience$delegate) {
    return function () {
      var onIntersection = ExperienceSection$lambda$lambda_1($visibleStates, $activeExperience$delegate);
      var observer = new IntersectionObserver(onIntersection, {threshold: 0.35});
      var tmp0_iterator = asList(document.querySelectorAll('.experience-card')).l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.experience.ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = element instanceof Element ? element : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          observer.observe(tmp0_safe_receiver);
        }
      }
      return Unit_instance;
    };
  }
  function ExperienceSection$lambda_3($$changed) {
    return function ($composer, $force) {
      ExperienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle$delegate.n2y(null, FooterStyle$factory());
  }
  var FooterStyle$delegate;
  function Footer($composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1088842079);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088842079, $changed, -1, 'org.example.newportfolio.components.sections.footer.Footer (Footer.kt:61)');
      }
      var tmp0_modifier = displayIfAtLeast(toModifier_0(get_FooterStyle(), [], $composer_0, 64), Breakpoint_MD_getInstance());
      Row(tmp0_modifier, SpaceBetween_instance, CenterVertically_instance, null, ComposableSingletons$FooterKt_getInstance().i42_1, $composer_0, 24584, 8);
      var tmp = gap_0(displayUntil(toModifier_0(get_FooterStyle(), [], $composer_0, 64), Breakpoint_MD_getInstance()), get_cssRem(1));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$FooterKt_getInstance().j42_1, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.k1u(Footer$lambda($changed));
    }
  }
  function SocialLinks($composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(713057708);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(713057708, $changed, -1, 'org.example.newportfolio.components.sections.footer.SocialLinks (Footer.kt:88)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = gap_0(Companion_instance_2, breakpoint.equals(Breakpoint_XL_getInstance()) ? get_em(1.25) : get_em(1));
      var tmp_0 = CenterVertically_instance;
      Row(tmp, null, tmp_0, null, ComposableSingletons$FooterKt_getInstance().k42_1, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.k1u(SocialLinks$lambda($changed));
    }
  }
  function Copyright($composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-805584495);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-805584495, $changed, -1, 'org.example.newportfolio.components.sections.footer.Copyright (Footer.kt:104)');
      }
      var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), Companion_instance_3.n2u());
      var tmp1_text = '\xA9 2024, Mohamed Elgohary';
      SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 70, 12);
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
      tmp0_safe_receiver.k1u(Copyright$lambda($changed));
    }
  }
  function PoweredByKobweb($composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1118606407);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1118606407, $changed, -1, 'org.example.newportfolio.components.sections.footer.PoweredByKobweb (Footer.kt:113)');
      }
      var tmp = CenterVertically_instance;
      Row(null, null, tmp, null, ComposableSingletons$FooterKt_getInstance().l42_1, $composer_0, 24576, 11);
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
      tmp0_safe_receiver.k1u(PoweredByKobweb$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-793952214, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:68)');
      }
      Copyright($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1649537249, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-2.<anonymous> (Footer.kt:71)');
      }
      SocialLinks($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_3$lambda_nkyb2r($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(201530402, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-3.<anonymous> (Footer.kt:74)');
      }
      PoweredByKobweb($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_4$lambda_58o5zg($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1955705892, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-4.<anonymous> (Footer.kt:67)');
      }
      var tmp = flex(Companion_instance_2, 1);
      var tmp_0 = CenterStart_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().f42_1, $composer_0, 3080, 4);
      var tmp_1 = flex(Companion_instance_2, 1);
      var tmp_2 = Center_instance_0;
      Box(tmp_1, tmp_2, null, ComposableSingletons$FooterKt_getInstance().g42_1, $composer_0, 3080, 4);
      var tmp_3 = flex(Companion_instance_2, 1);
      var tmp_4 = CenterEnd_instance;
      Box(tmp_3, tmp_4, null, ComposableSingletons$FooterKt_getInstance().h42_1, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_5$lambda_y2an1n($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1286754584, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-5.<anonymous> (Footer.kt:82)');
      }
      SocialLinks($composer_0, 0);
      Copyright($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_6$lambda_856xva($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(2082292233, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-6.<anonymous> (Footer.kt:94)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_2().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-6.<anonymous>.<anonymous>' call
        var tmp = Companion_instance_0.r3a($composer_0, 8).g3i() ? element.i41_1 : element.j41_1;
        LinkIconButton_0(element.h41_1, tmp, null, null, null, null, null, $composer_0, 0, 124);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_7$lambda_kofj6x($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-2019952092, $changed, -1, 'org.example.newportfolio.components.sections.footer.ComposableSingletons$FooterKt.lambda-7.<anonymous> (Footer.kt:115)');
      }
      var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), Companion_instance_3.k2u());
      SpanText('Powered by ', tmp0_modifier, null, null, $composer_0, 70, 12);
      var tmp1_modifier = textAlign(toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), Companion_instance_3.k2u());
      SpanText('Kotlin', tmp1_modifier, null, null, $composer_0, 70, 12);
      var tmp = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = margin_0(height(display(tmp, 'flex'), get_cssRem(1.25)), VOID, VOID, VOID, get_cssRem(0.375));
      Image('images/kotlin.svg', tmp_0, null, null, null, null, false, null, $composer_0, 70, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.f42_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-793952214, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.g42_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(1649537249, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
    var tmp_1 = this;
    tmp_1.h42_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(201530402, false, ComposableSingletons$FooterKt$lambda_3$lambda_nkyb2r));
    var tmp_2 = this;
    tmp_2.i42_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(1955705892, false, ComposableSingletons$FooterKt$lambda_4$lambda_58o5zg));
    var tmp_3 = this;
    tmp_3.j42_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(1286754584, false, ComposableSingletons$FooterKt$lambda_5$lambda_y2an1n));
    var tmp_4 = this;
    tmp_4.k42_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(2082292233, false, ComposableSingletons$FooterKt$lambda_6$lambda_856xva));
    var tmp_5 = this;
    tmp_5.l42_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-2019952092, false, ComposableSingletons$FooterKt$lambda_7$lambda_kofj6x));
  }
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Footer_kt__fc6p2z();
    var colorMode = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(FooterStyle$delegate$lambda$lambda(colorMode));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, FooterStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, FooterStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, FooterStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, FooterStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, FooterStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function FooterStyle$delegate$lambda$lambda($colorMode) {
    return function () {
      return background(fillMaxWidth(Companion_instance_2), get_overlay($colorMode), []);
    };
  }
  function FooterStyle$delegate$lambda$lambda_0() {
    _init_properties_Footer_kt__fc6p2z();
    var tmp1_left = get_px(12);
    var tmp2_right = get_px(12);
    var tmp3_top = get_px(24);
    var tmp4_bottom = get_px(24);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function FooterStyle$delegate$lambda$lambda_1() {
    _init_properties_Footer_kt__fc6p2z();
    var tmp1_left = get_px(24);
    var tmp2_right = get_px(24);
    var tmp3_top = get_px(24);
    var tmp4_bottom = get_px(24);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function FooterStyle$delegate$lambda$lambda_2() {
    _init_properties_Footer_kt__fc6p2z();
    var tmp1_left = get_px(34);
    var tmp2_right = get_px(34);
    var tmp3_top = get_px(34);
    var tmp4_bottom = get_px(34);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function FooterStyle$delegate$lambda$lambda_3() {
    _init_properties_Footer_kt__fc6p2z();
    var tmp1_left = get_px(54);
    var tmp2_right = get_px(54);
    var tmp3_top = get_px(40);
    var tmp4_bottom = get_px(40);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function FooterStyle$delegate$lambda$lambda_4() {
    _init_properties_Footer_kt__fc6p2z();
    var tmp1_left = get_px(104);
    var tmp2_right = get_px(104);
    var tmp3_top = get_px(40);
    var tmp4_bottom = get_px(40);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function Footer$lambda($$changed) {
    return function ($composer, $force) {
      Footer($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SocialLinks$lambda($$changed) {
    return function ($composer, $force) {
      SocialLinks($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Copyright$lambda($$changed) {
    return function ($composer, $force) {
      Copyright($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PoweredByKobweb$lambda($$changed) {
    return function ($composer, $force) {
      PoweredByKobweb($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FooterStyle$factory() {
    return getPropertyCallableRef('FooterStyle', 0, KProperty0, function () {
      return get_FooterStyle();
    }, null);
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      FooterStyle$delegate = ComponentStyle_0(VOID, VOID, FooterStyle$delegate$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle$delegate.n2y(null, NavHeaderStyle$factory());
  }
  var NavHeaderStyle$delegate;
  function NavHeader($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1201099721);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1201099721, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader (NavHeader.kt:85)');
      }
      var colorMode$delegate = Companion_instance_0.f3i($composer_0, 8);
      $composer_0.s1n(592410097);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>' call
        var value = asList(document.getElementsByClassName('section-container'));
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var sections = tmp0_group;
      $composer_0.s1n(592410201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>' call
        var value_0 = mutableStateOf(Section_Start_getInstance().p42_1);
        this_1.e1p(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t1n();
      var selectedSectionId$delegate = tmp1_group;
      var bp = rememberBreakpoint($composer_0, 0);
      var tmp_3 = NavHeader$lambda_1(selectedSectionId$delegate);
      $composer_0.s1n(592410424);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_4;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>' call
        var value_1 = NavHeader$slambda_0(selectedSectionId$delegate, null);
        this_2.e1p(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.t1n();
      UpdateEffect(tmp_3, tmp2_group, $composer_0, 64);
      var tmp_6 = window;
      tmp_6.onscroll = NavHeader$lambda_3(sections, selectedSectionId$delegate);
      var tmp_7 = get_NavHeaderStyle();
      var tmp_8 = toAttrs_0(tmp_7, [], null, $composer_0, 64, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_9, 583831786, true, NavHeader$lambda_4(selectedSectionId$delegate, bp, colorMode$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.y1o();
      var tmp_10;
      if (invalid ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_48(dispatchReceiver);
        $composer_1.e1p(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_1.t1n();
      Header(tmp_8, tmp0, $composer_0, 48, 0);
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
      tmp3_safe_receiver.k1u(NavHeader$lambda_5($changed));
    }
  }
  function NavHeader$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.p2();
  }
  function NavHeader$lambda_0($colorMode$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.c10(value);
    return Unit_instance;
  }
  function NavHeader$lambda_1($selectedSectionId$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedSectionId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedSectionId$delegate.p2();
  }
  function NavHeader$lambda_2($selectedSectionId$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('selectedSectionId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedSectionId$delegate.c10(value);
    return Unit_instance;
  }
  function NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$0_u6jfs3($sideMenuState$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('sideMenuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sideMenuState$delegate.p2();
  }
  function NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$1_u6jfs4($sideMenuState$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('sideMenuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $sideMenuState$delegate.c10(value);
    return Unit_instance;
  }
  function NavHeaderStyle$delegate$lambda($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0.s1n(-241747717);
    if (isTraceInProgress()) {
      traceEventStart(-241747717, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeaderStyle$delegate.<anonymous> (NavHeader.kt:39)');
    }
    var tmp0 = toModifier(get_SmoothColorStyle(), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function NavHeaderStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_NavHeader_kt__vdotjy();
    var colorPalette = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(NavHeaderStyle$delegate$lambda$lambda(colorPalette));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, NavHeaderStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, NavHeaderStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, NavHeaderStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, NavHeaderStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, NavHeaderStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function NavHeaderStyle$delegate$lambda$lambda($colorPalette) {
    return function () {
      var tmp = backgroundColor(fillMaxWidth(Companion_instance_2), get_background($colorPalette).z38().y38(VOID, VOID, VOID, 0.8));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Sticky' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = boxShadow(backdropFilter(top(position(tmp, 'sticky'), get_percent(0)), [saturate(get_percent(180)), blur(get_px(5))]), VOID, VOID, VOID, get_px(2), get_overlay($colorPalette));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = justifyContent(display(tmp_0, 'flex'), Companion_instance_11.l2u());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return zIndex(alignItems(tmp_1, 'center'), 1);
    };
  }
  function NavHeaderStyle$delegate$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp1_left = get_px(12);
    var tmp2_right = get_px(12);
    var tmp3_top = get_px(10);
    var tmp4_bottom = get_px(10);
    return height(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), get_px(64));
  }
  function NavHeaderStyle$delegate$lambda$lambda_1() {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp1_left = get_px(16);
    var tmp2_right = get_px(16);
    var tmp3_top = get_px(12);
    var tmp4_bottom = get_px(12);
    return height(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), get_px(68));
  }
  function NavHeaderStyle$delegate$lambda$lambda_2() {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp1_left = get_px(24);
    var tmp2_right = get_px(24);
    var tmp3_top = get_px(10);
    var tmp4_bottom = get_px(10);
    return height(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), get_vh(6));
  }
  function NavHeaderStyle$delegate$lambda$lambda_3() {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp1_left = get_px(40);
    var tmp2_right = get_px(40);
    var tmp3_top = get_px(16);
    var tmp4_bottom = get_px(16);
    return height(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), get_vh(9));
  }
  function NavHeaderStyle$delegate$lambda$lambda_4() {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp1_left = get_px(80);
    var tmp2_right = get_px(80);
    var tmp3_top = get_px(16);
    var tmp4_bottom = get_px(16);
    return height(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), get_vh(9));
  }
  function NavHeader$slambda($selectedSectionId$delegate, resultContinuation) {
    this.z42_1 = $selectedSectionId$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavHeader$slambda).b12 = function ($this$UpdateEffect, $completion) {
    var tmp = this.c12($this$UpdateEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(NavHeader$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavHeader$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          window.history.replaceState(null, '', '#' + NavHeader$lambda_1(this.z42_1));
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
  protoOf(NavHeader$slambda).c12 = function ($this$UpdateEffect, completion) {
    var i = new NavHeader$slambda(this.z42_1, completion);
    i.a43_1 = $this$UpdateEffect;
    return i;
  };
  function NavHeader$slambda_0($selectedSectionId$delegate, resultContinuation) {
    var i = new NavHeader$slambda($selectedSectionId$delegate, resultContinuation);
    var l = function ($this$UpdateEffect, $completion) {
      return i.b12($this$UpdateEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavHeader$lambda_3($sections, $selectedSectionId$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      var tmp0_iterator = $sections.l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>' call
        var positionInfo = element.getBoundingClientRect();
        var top = window.scrollY;
        var offset = positionInfo.top + top - 250;
        var height = positionInfo.height;
        var id = element.id;
        if (top >= offset ? top < offset + height : false) {
          NavHeader$lambda_2($selectedSectionId$delegate, id);
        }
      }
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda($sideMenuState$delegate) {
    return function () {
      NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$1_u6jfs4($sideMenuState$delegate, NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$0_u6jfs3($sideMenuState$delegate).d43());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_0($sideMenuState$delegate) {
    return function () {
      var tmp;
      if (NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$0_u6jfs3($sideMenuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$1_u6jfs4($sideMenuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda$lambda($sideMenuState$delegate) {
    return function () {
      NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$1_u6jfs4($sideMenuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda$lambda_0($menuIconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1292896966, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:140)');
        }
        var tmp_0 = size(toModifier_0(get_IconStyle(), [], $composer_0, 64), $menuIconSize);
        HamburgerIcon(tmp_0, null, $composer_0, 8, 2);
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
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function NavHeader$lambda$lambda$lambda_1($bp, $sideMenuState$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-665658815, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:135)');
        }
        var menuIconSize = $bp.z9(Breakpoint_SM_getInstance()) < 0 ? get_cssRem(2) : get_cssRem(1.65);
        var tmp_0 = padding_2(Companion_instance_2, get_cssRem(0.25));
        $composer_0.s1n(-170516075);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_1;
        if (false ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NavHeader$lambda$lambda$lambda$lambda($sideMenuState$delegate);
          $composer_0.e1p(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.t1n();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 1292896966, true, NavHeader$lambda$lambda$lambda$lambda_0(menuIconSize));
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
        var tmp_4;
        if (invalid ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_40(dispatchReceiver);
          $composer_1.e1p(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.t1n();
        IconButton(tmp_0, null, tmp0_group, tmp0, $composer_0, 3464, 2);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda$lambda_2($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1406013782, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:144)');
        }
        var tmp_0 = NavHeader$lambda($colorMode$delegate);
        AppLogo(tmp_0, null, $composer_0, 0, 2);
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
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda$lambda$lambda_1($colorMode$delegate) {
    return function () {
      NavHeader$lambda_0($colorMode$delegate, NavHeader$lambda($colorMode$delegate).e3g());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_3($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-223781047, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:147)');
        }
        var tmp_0 = NavHeader$lambda($colorMode$delegate);
        $composer_0.s1n(-170515558);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f($colorMode$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NavHeader$lambda$lambda$lambda$lambda_1($colorMode$delegate);
          $composer_0.e1p(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.t1n();
        ThemeIconButton(tmp_0, tmp0_group, $composer_0, 0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda($selectedSectionId$delegate, $bp, $colorMode$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1198116615, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous> (NavHeader.kt:121)');
        }
        $composer_0.s1n(-1449154927);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_0;
        if (false ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
          $composer_0.e1p(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.t1n();
        var sideMenuState$delegate = tmp0_group;
        $composer_0.s1n(-1449154865);
        if (!NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$0_u6jfs3(sideMenuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
          var tmp_2 = NavHeader$_anonymous_$_anonymous_$_anonymous_$_anonymous_$lambda$0_u6jfs3(sideMenuState$delegate);
          var tmp_3 = NavHeader$lambda_1($selectedSectionId$delegate);
          $composer_0.s1n(-1449154651);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.y1o();
          var tmp_4;
          if (false ? true : it_0 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = NavHeader$lambda$lambda$lambda(sideMenuState$delegate);
            $composer_0.e1p(value_0);
            tmp_4 = value_0;
          } else {
            tmp_4 = it_0;
          }
          var tmp_5 = tmp_4;
          var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.t1n();
          $composer_0.s1n(-1449154571);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.y1o();
          var tmp_6;
          if (false ? true : it_1 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = NavHeader$lambda$lambda$lambda_0(sideMenuState$delegate);
            $composer_0.e1p(value_1);
            tmp_6 = value_1;
          } else {
            tmp_6 = it_1;
          }
          var tmp_7 = tmp_6;
          var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_0.t1n();
          SideMenu(tmp_2, tmp_3, tmp1_group, tmp2_group, $composer_0, 3456);
        }
        $composer_0.t1n();
        var tmp_8 = flex(Companion_instance_2, 1);
        var tmp_9 = CenterStart_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_10 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_10, -665658815, true, NavHeader$lambda$lambda$lambda_1($bp, sideMenuState$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.s1n(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.l1f(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_1.y1o();
        var tmp_11;
        if (invalid ? true : it_2 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_41(dispatchReceiver);
          $composer_1.e1p(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = it_2;
        }
        var tmp_12 = tmp_11;
        var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_1.t1n();
        Box(tmp_8, tmp_9, null, tmp0, $composer_0, 3080, 4);
        var tmp_13 = flex(Companion_instance_2, 1);
        var tmp_14 = Center_instance_0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_15 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_15, -1406013782, true, NavHeader$lambda$lambda$lambda_2($colorMode$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.s1n(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_2.y1o();
        var tmp_16;
        if (invalid_0 ? true : it_3 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_42(dispatchReceiver_0);
          $composer_2.e1p(value_3);
          tmp_16 = value_3;
        } else {
          tmp_16 = it_3;
        }
        var tmp_17 = tmp_16;
        var tmp0_0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        $composer_2.t1n();
        Box(tmp_13, tmp_14, null, tmp0_0, $composer_0, 3080, 4);
        var tmp_18 = flex(Companion_instance_2, 1);
        var tmp_19 = CenterEnd_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_20 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_20, -223781047, true, NavHeader$lambda$lambda$lambda_3($colorMode$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.s1n(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.l1f(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_3.y1o();
        var tmp_21;
        if (invalid_1 ? true : it_4 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = ComposableLambda$invoke$ref_43(dispatchReceiver_1);
          $composer_3.e1p(value_4);
          tmp_21 = value_4;
        } else {
          tmp_21 = it_4;
        }
        var tmp_22 = tmp_21;
        var tmp0_1 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
        $composer_3.t1n();
        Box(tmp_18, tmp_19, null, tmp0_1, $composer_0, 3080, 4);
        var tmp_23;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_23 = Unit_instance;
        }
        tmp = tmp_23;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda$lambda_4($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(2077039402, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:161)');
        }
        var tmp_0 = NavHeader$lambda($colorMode$delegate);
        AppLogo(tmp_0, null, $composer_0, 0, 2);
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
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda$lambda$lambda_2($colorMode$delegate) {
    return function () {
      NavHeader$lambda_0($colorMode$delegate, NavHeader$lambda($colorMode$delegate).e3g());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_5($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-734480045, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:165)');
        }
        var tmp_0 = NavHeader$lambda($colorMode$delegate);
        $composer_0.s1n(-170514881);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f($colorMode$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = NavHeader$lambda$lambda$lambda$lambda_2($colorMode$delegate);
          $composer_0.e1p(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.t1n();
        ThemeIconButton(tmp_0, tmp0_group, $composer_0, 0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda$lambda_0($colorMode$delegate, $selectedSectionId$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-2131102096, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous> (NavHeader.kt:160)');
        }
        var tmp_0 = flex(Companion_instance_2, 1);
        var tmp_1 = CenterStart_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 2077039402, true, NavHeader$lambda$lambda$lambda_4($colorMode$delegate));
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
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.t1n();
        Box(tmp_0, tmp_1, null, tmp0, $composer_0, 3080, 4);
        NavBar(NavHeader$lambda_1($selectedSectionId$delegate), $composer_0, 0);
        var tmp_5 = flex(Companion_instance_2, 1);
        var tmp_6 = CenterEnd_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -734480045, true, NavHeader$lambda$lambda$lambda_5($colorMode$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.s1n(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.y1o();
        var tmp_8;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver_0);
          $composer_2.e1p(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.t1n();
        Box(tmp_5, tmp_6, null, tmp0_0, $composer_0, 3080, 4);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda_4($selectedSectionId$delegate, $bp, $colorMode$delegate) {
    return function ($this$Header, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(583831786, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous> (NavHeader.kt:114)');
      }
      var tmp0_modifier = displayUntil(fillMaxWidth(Companion_instance_2), Breakpoint_LG_getInstance());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1198116615, true, NavHeader$lambda$lambda($selectedSectionId$delegate, $bp, $colorMode$delegate));
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
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      Row(tmp0_modifier, SpaceBetween_instance, CenterVertically_instance, null, tmp0, $composer_0, 24584, 8);
      var tmp_2 = displayIfAtLeast(fillMaxWidth(Companion_instance_2), Breakpoint_LG_getInstance());
      var tmp_3 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_4, -2131102096, true, NavHeader$lambda$lambda_0($colorMode$delegate, $selectedSectionId$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.s1n(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.y1o();
      var tmp_5;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_47(dispatchReceiver_0);
        $composer_2.e1p(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_2.t1n();
      Row(tmp_2, null, tmp_3, null, tmp0_0, $composer_0, 24584, 10);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavHeader$lambda_5($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavHeaderStyle$factory() {
    return getPropertyCallableRef('NavHeaderStyle', 0, KProperty0, function () {
      return get_NavHeaderStyle();
    }, null);
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = NavHeaderStyle$delegate$lambda;
      NavHeaderStyle$delegate = ComponentStyle(tmp, VOID, NavHeaderStyle$delegate$lambda_0);
    }
  }
  function get_AppLogoStyle() {
    _init_properties_AppLogo_kt__6qs116();
    return AppLogoStyle$delegate.n2y(null, AppLogoStyle$factory());
  }
  var AppLogoStyle$delegate;
  function AppLogo(colorMode, variant, $composer, $changed, $default) {
    _init_properties_AppLogo_kt__6qs116();
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1540713763);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(colorMode) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1540713763, $dirty, -1, 'org.example.newportfolio.components.sections.nav_header.components.AppLogo (AppLogo.kt:54)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.components.AppLogo.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 15699029, true, AppLogo$lambda(colorMode, variant_0));
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
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.AppLogo.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_49(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      Anchor('/', null, null, null, null, false, tmp0, $composer_0, 1572870, 62);
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
      tmp0_safe_receiver.k1u(AppLogo$lambda_0(colorMode, variant_0, $changed, $default));
    }
  }
  function AppLogoStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_AppLogo_kt__6qs116();
    $this$ComponentStyle.w3d(AppLogoStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, AppLogoStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, AppLogoStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, AppLogoStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, AppLogoStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, AppLogoStyle$delegate$lambda$lambda_4);
    var tmp_4 = get_hover($this$ComponentStyle);
    tmp_4.n3e(AppLogoStyle$delegate$lambda$lambda_5);
    return Unit_instance;
  }
  function AppLogoStyle$delegate$lambda$lambda() {
    _init_properties_AppLogo_kt__6qs116();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'flex');
  }
  function AppLogoStyle$delegate$lambda$lambda_0() {
    _init_properties_AppLogo_kt__6qs116();
    return height(Companion_instance_2, get_cssRem(1.825));
  }
  function AppLogoStyle$delegate$lambda$lambda_1() {
    _init_properties_AppLogo_kt__6qs116();
    return height(Companion_instance_2, get_cssRem(1.95));
  }
  function AppLogoStyle$delegate$lambda$lambda_2() {
    _init_properties_AppLogo_kt__6qs116();
    return height(Companion_instance_2, get_cssRem(2));
  }
  function AppLogoStyle$delegate$lambda$lambda_3() {
    _init_properties_AppLogo_kt__6qs116();
    return height(Companion_instance_2, get_cssRem(2.1));
  }
  function AppLogoStyle$delegate$lambda$lambda_4() {
    _init_properties_AppLogo_kt__6qs116();
    return height(Companion_instance_2, get_cssRem(2.99));
  }
  function AppLogoStyle$delegate$lambda$lambda_5() {
    _init_properties_AppLogo_kt__6qs116();
    var tmp = Companion_instance_2;
    return transform(tmp, AppLogoStyle$delegate$lambda$lambda$lambda);
  }
  function AppLogoStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_AppLogo_kt__6qs116();
    $this$transform.o2q(get_deg(-6));
    return Unit_instance;
  }
  function AppLogo$lambda($colorMode, $variant) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(15699029, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.AppLogo.<anonymous> (AppLogo.kt:56)');
      }
      var tmp;
      switch ($colorMode.y9_1) {
        case 0:
          tmp = 'images/logo_light.svg';
          break;
        case 1:
          tmp = 'images/logo_dark.svg';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_0 = tmp;
      var tmp_1 = get_AppLogoStyle();
      var tmp_2 = [$variant._v];
      Img(tmp_0, null, toAttrs_0(tmp_1, tmp_2, null, $composer_0, 0, 2), $composer_0, 0, 2);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function AppLogo$lambda_0($colorMode, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      AppLogo($colorMode, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AppLogoStyle$factory() {
    return getPropertyCallableRef('AppLogoStyle', 0, KProperty0, function () {
      return get_AppLogoStyle();
    }, null);
  }
  var properties_initialized_AppLogo_kt_8jbpno;
  function _init_properties_AppLogo_kt__6qs116() {
    if (!properties_initialized_AppLogo_kt_8jbpno) {
      properties_initialized_AppLogo_kt_8jbpno = true;
      AppLogoStyle$delegate = ComponentStyle_0(VOID, VOID, AppLogoStyle$delegate$lambda);
    }
  }
  function NavBar(selectedSectionId, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-128473716);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(selectedSectionId) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-128473716, $dirty, -1, 'org.example.newportfolio.components.sections.nav_header.components.NavBar (NavBar.kt:29)');
      }
      $composer_0.s1n(-417502733);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value = toList(get_entries_0());
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var sections = tmp0_group;
      var colorPalette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var accentColor = get_brand(colorPalette).c41();
      $composer_0.s1n(-417502439);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_0 = mutableStateOf(emptyMap());
        this_1.e1p(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.t1n();
      var navRects$delegate = tmp1_group;
      $composer_0.s1n(-417502352);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_1 = mutableStateOf(null);
        this_2.e1p(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.t1n();
      var containerRect$delegate = tmp2_group;
      $composer_0.s1n(-417502200);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_2 = mutableStateOf(0.0);
        this_3.e1p(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.t1n();
      var orbLeft$delegate = tmp3_group;
      $composer_0.s1n(-417502149);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.y1o();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_3 = mutableStateOf(0.0);
        this_4.e1p(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.t1n();
      var orbTop$delegate = tmp4_group;
      $composer_0.s1n(-417502096);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_5.y1o();
      var tmp_9;
      if (false ? true : it_4 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_4 = mutableStateOf(0.0);
        this_5.e1p(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.t1n();
      var orbWidth$delegate = tmp5_group;
      $composer_0.s1n(-417502042);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_6.y1o();
      var tmp_11;
      if (false ? true : it_5 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_5 = mutableStateOf(0.0);
        this_6.e1p(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.t1n();
      var orbHeight$delegate = tmp6_group;
      $composer_0.s1n(-417501992);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_7.y1o();
      var tmp_13;
      if (false ? true : it_6 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_6 = mutableStateOf(false);
        this_7.e1p(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.t1n();
      var ready$delegate = tmp7_group;
      var padX = 18.0;
      var padY = 10.0;
      LaunchedEffect(sections, NavBar$slambda_0(sections, containerRect$delegate, navRects$delegate, ready$delegate, null), $composer_0, 72);
      var tmp_15 = NavBar$lambda(navRects$delegate);
      var tmp_16 = NavBar$lambda_1(containerRect$delegate);
      $composer_0.s1n(-417500951);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = this_8.y1o();
      var tmp_17;
      if (invalid ? true : it_7 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
        var value_7 = NavBar$slambda_2(selectedSectionId, padX, padY, containerRect$delegate, navRects$delegate, orbLeft$delegate, orbTop$delegate, orbWidth$delegate, orbHeight$delegate, null);
        this_8.e1p(value_7);
        tmp_17 = value_7;
      } else {
        tmp_17 = it_7;
      }
      var tmp_18 = tmp_17;
      var tmp8_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.t1n();
      LaunchedEffect_0(selectedSectionId, tmp_15, tmp_16, tmp8_group, $composer_0, 4160 | 14 & $dirty);
      var tmp_19 = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$39 = 'absolute';
      var tmp_20 = boxShadow(backdropFilter(backgroundColor(borderRadius(height(width(top(left(position(tmp_19, tmp$ret$39), get_px(NavBar$lambda_3(orbLeft$delegate))), get_px(NavBar$lambda_5(orbTop$delegate))), get_px(NavBar$lambda_7(orbWidth$delegate))), get_px(NavBar$lambda_9(orbHeight$delegate))), get_px(999)), accentColor.z38().y38(VOID, VOID, VOID, 0.18)), [saturate(get_percent(160)), blur(get_px(14))]), VOID, VOID, get_px(28), get_px(2), accentColor.z38().y38(VOID, VOID, VOID, 0.28));
      var tmp_21 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_22 = border(tmp_20, tmp_21, 'solid', accentColor.z38().y38(VOID, VOID, VOID, 0.5));
      var tmp_23 = Companion_getInstance_0();
      var tmp_24 = get_s(0.38);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$47 = 'ease-out';
      var tmp_25 = tmp_23.e2z('left', tmp_24, tmp$ret$47);
      var tmp_26 = Companion_getInstance_0();
      var tmp_27 = get_s(0.38);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$51 = 'ease-out';
      var tmp_28 = tmp_26.e2z('top', tmp_27, tmp$ret$51);
      var tmp_29 = Companion_getInstance_0();
      var tmp_30 = get_s(0.38);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$55 = 'ease-out';
      var tmp_31 = tmp_29.e2z('width', tmp_30, tmp$ret$55);
      var tmp_32 = Companion_getInstance_0();
      var tmp_33 = get_s(0.38);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$59 = 'ease-out';
      var tmp_34 = tmp_32.e2z('height', tmp_33, tmp$ret$59);
      var tmp_35 = Companion_getInstance_0();
      var tmp_36 = get_s(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$63 = 'ease-in-out';
      var tmp_37 = tmp_35.e2z('background-color', tmp_36, tmp$ret$63);
      var tmp_38 = Companion_getInstance_0();
      var tmp_39 = get_s(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$67 = 'ease-in-out';
      var tmp_40 = tmp_38.e2z('box-shadow', tmp_39, tmp$ret$67);
      var tmp_41 = Companion_getInstance_0();
      var tmp_42 = get_s(0.5);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$71 = 'ease-in-out';
      var orbModifier = zIndex(transition_0(tmp_22, [tmp_25, tmp_28, tmp_31, tmp_34, tmp_37, tmp_40, tmp_41.e2z('border-color', tmp_42, tmp$ret$71)]), 0);
      var tmp_43 = id(Companion_instance_2, 'nav-bar-container');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$75 = 'relative';
      var tmp_44 = justifyContent(overflow(position(tmp_43, tmp$ret$75), Companion_instance_13.u2x()), Companion_instance_11.k2u());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_modifier = gap_0(padding(alignItems(tmp_44, 'center'), get_px(4), VOID, get_px(4)), get_px(12));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>' call
      var tmp_45 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_45, -630052887, true, NavBar$lambda_13(orbModifier, sections, selectedSectionId, accentColor, colorPalette, ready$delegate, orbWidth$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_1.y1o();
      var tmp_46;
      if (invalid_0 ? true : it_8 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>' call
        var value_8 = ComposableLambda$invoke$ref_51(dispatchReceiver);
        $composer_1.e1p(value_8);
        tmp_46 = value_8;
      } else {
        tmp_46 = it_8;
      }
      var tmp_47 = tmp_46;
      var tmp0 = (tmp_47 == null ? true : !(tmp_47 == null)) ? tmp_47 : THROW_CCE();
      $composer_1.t1n();
      Row(tmp0_modifier, Center_instance, CenterVertically_instance, null, tmp0, $composer_0, 24584, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp9_safe_receiver = $composer_0.n1p();
    if (tmp9_safe_receiver == null)
      null;
    else {
      tmp9_safe_receiver.k1u(NavBar$lambda_14(selectedSectionId, $changed));
    }
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavBarKt$lambda_1$lambda_jdlpdw($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1864405169, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.ComposableSingletons$NavBarKt.lambda-1.<anonymous> (NavBar.kt:123)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NavBarKt() {
    ComposableSingletons$NavBarKt_instance = this;
    var tmp = this;
    tmp.e43_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(-1864405169, false, ComposableSingletons$NavBarKt$lambda_1$lambda_jdlpdw));
  }
  var ComposableSingletons$NavBarKt_instance;
  function ComposableSingletons$NavBarKt_getInstance() {
    if (ComposableSingletons$NavBarKt_instance == null)
      new ComposableSingletons$NavBarKt();
    return ComposableSingletons$NavBarKt_instance;
  }
  function NavBar$lambda($navRects$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('navRects', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $navRects$delegate.p2();
  }
  function NavBar$lambda_0($navRects$delegate, value) {
    getLocalDelegateReference('navRects', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $navRects$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_1($containerRect$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('containerRect', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $containerRect$delegate.p2();
  }
  function NavBar$lambda_2($containerRect$delegate, value) {
    getLocalDelegateReference('containerRect', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $containerRect$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_3($orbLeft$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('orbLeft', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $orbLeft$delegate.p2();
  }
  function NavBar$lambda_4($orbLeft$delegate, value) {
    getLocalDelegateReference('orbLeft', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $orbLeft$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_5($orbTop$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('orbTop', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $orbTop$delegate.p2();
  }
  function NavBar$lambda_6($orbTop$delegate, value) {
    getLocalDelegateReference('orbTop', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $orbTop$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_7($orbWidth$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('orbWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $orbWidth$delegate.p2();
  }
  function NavBar$lambda_8($orbWidth$delegate, value) {
    getLocalDelegateReference('orbWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $orbWidth$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_9($orbHeight$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('orbHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $orbHeight$delegate.p2();
  }
  function NavBar$lambda_10($orbHeight$delegate, value) {
    getLocalDelegateReference('orbHeight', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $orbHeight$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$lambda_11($ready$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('ready', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $ready$delegate.p2();
  }
  function NavBar$lambda_12($ready$delegate, value) {
    getLocalDelegateReference('ready', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $ready$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$measure(sections, containerRect$delegate, navRects$delegate) {
    var tmp0_elvis_lhs = document.getElementById('nav-bar-container');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var containerEl = tmp;
    var cRect = containerEl.getBoundingClientRect();
    NavBar$lambda_2(containerRect$delegate, new NavBar$NavRect(cRect.left, cRect.top, cRect.width, cRect.height));
    // Inline function 'kotlin.collections.mutableMapOf' call
    var newRects = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sections.l();
    while (tmp0_iterator.z()) {
      var element = tmp0_iterator.b1();
      $l$block: {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.measure.<anonymous>' call
        var tmp0_elvis_lhs_0 = document.getElementById('nav-' + element.p42_1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$block;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var el = tmp_0;
        var r = el.getBoundingClientRect();
        // Inline function 'kotlin.collections.set' call
        var key = element.p42_1;
        var value = new NavBar$NavRect(r.left, r.top, r.width, r.height);
        newRects.m2(key, value);
      }
    }
    NavBar$lambda_0(navRects$delegate, newRects);
  }
  function NavBar$_anonymous_$_anonymous_$_anonymous_$lambda$0_adipw4($hovered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hovered$delegate.p2();
  }
  function NavBar$_anonymous_$_anonymous_$_anonymous_$lambda$1_adipw3($hovered$delegate, value) {
    getLocalDelegateReference('hovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $hovered$delegate.c10(value);
    return Unit_instance;
  }
  function NavBar$NavRect(left, top, width, height) {
    this.f43_1 = left;
    this.g43_1 = top;
    this.h43_1 = width;
    this.i43_1 = height;
  }
  protoOf(NavBar$NavRect).toString = function () {
    return 'NavRect(left=' + this.f43_1 + ', top=' + this.g43_1 + ', width=' + this.h43_1 + ', height=' + this.i43_1 + ')';
  };
  protoOf(NavBar$NavRect).hashCode = function () {
    var result = getNumberHashCode(this.f43_1);
    result = imul(result, 31) + getNumberHashCode(this.g43_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h43_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i43_1) | 0;
    return result;
  };
  protoOf(NavBar$NavRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBar$NavRect))
      return false;
    var tmp0_other_with_cast = other instanceof NavBar$NavRect ? other : THROW_CCE();
    if (!equals(this.f43_1, tmp0_other_with_cast.f43_1))
      return false;
    if (!equals(this.g43_1, tmp0_other_with_cast.g43_1))
      return false;
    if (!equals(this.h43_1, tmp0_other_with_cast.h43_1))
      return false;
    if (!equals(this.i43_1, tmp0_other_with_cast.i43_1))
      return false;
    return true;
  };
  function NavBar$slambda$lambda($sections, $containerRect$delegate, $navRects$delegate, $ready$delegate) {
    return function () {
      NavBar$measure($sections, $containerRect$delegate, $navRects$delegate);
      NavBar$lambda_12($ready$delegate, true);
      return Unit_instance;
    };
  }
  function NavBar$slambda$lambda_0($sections, $containerRect$delegate, $navRects$delegate) {
    return function (it) {
      NavBar$measure($sections, $containerRect$delegate, $navRects$delegate);
      return Unit_instance;
    };
  }
  function NavBar$slambda($sections, $containerRect$delegate, $navRects$delegate, $ready$delegate, resultContinuation) {
    this.r43_1 = $sections;
    this.s43_1 = $containerRect$delegate;
    this.t43_1 = $navRects$delegate;
    this.u43_1 = $ready$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavBar$slambda).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(NavBar$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavBar$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          NavBar$measure(this.r43_1, this.s43_1, this.t43_1);
          var tmp_0 = window;
          tmp_0.setTimeout(NavBar$slambda$lambda(this.r43_1, this.s43_1, this.t43_1, this.u43_1), 50);
          var tmp_1 = window;
          tmp_1.addEventListener('resize', NavBar$slambda$lambda_0(this.r43_1, this.s43_1, this.t43_1));
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
  protoOf(NavBar$slambda).c12 = function ($this$LaunchedEffect, completion) {
    var i = new NavBar$slambda(this.r43_1, this.s43_1, this.t43_1, this.u43_1, completion);
    i.v43_1 = $this$LaunchedEffect;
    return i;
  };
  function NavBar$slambda_0($sections, $containerRect$delegate, $navRects$delegate, $ready$delegate, resultContinuation) {
    var i = new NavBar$slambda($sections, $containerRect$delegate, $navRects$delegate, $ready$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavBar$slambda_1($selectedSectionId, $padX, $padY, $containerRect$delegate, $navRects$delegate, $orbLeft$delegate, $orbTop$delegate, $orbWidth$delegate, $orbHeight$delegate, resultContinuation) {
    this.e44_1 = $selectedSectionId;
    this.f44_1 = $padX;
    this.g44_1 = $padY;
    this.h44_1 = $containerRect$delegate;
    this.i44_1 = $navRects$delegate;
    this.j44_1 = $orbLeft$delegate;
    this.k44_1 = $orbTop$delegate;
    this.l44_1 = $orbWidth$delegate;
    this.m44_1 = $orbHeight$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavBar$slambda_1).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(NavBar$slambda_1).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavBar$slambda_1).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        if (tmp === 0) {
          this.dc_1 = 1;
          var tmp0_elvis_lhs = NavBar$lambda_1(this.h44_1);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var cRect = tmp_0;
          var tmp1_elvis_lhs = NavBar$lambda(this.i44_1).v2(this.e44_1);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var target = tmp_1;
          var left = target.f43_1 - cRect.f43_1 - this.f44_1 / 2;
          var top = target.g43_1 - cRect.g43_1 - this.g44_1 / 2;
          NavBar$lambda_4(this.j44_1, left);
          NavBar$lambda_6(this.k44_1, top);
          NavBar$lambda_8(this.l44_1, target.h43_1 + this.f44_1);
          NavBar$lambda_10(this.m44_1, target.i43_1 + this.g44_1);
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
  protoOf(NavBar$slambda_1).c12 = function ($this$LaunchedEffect, completion) {
    var i = new NavBar$slambda_1(this.e44_1, this.f44_1, this.g44_1, this.h44_1, this.i44_1, this.j44_1, this.k44_1, this.l44_1, this.m44_1, completion);
    i.n44_1 = $this$LaunchedEffect;
    return i;
  };
  function NavBar$slambda_2($selectedSectionId, $padX, $padY, $containerRect$delegate, $navRects$delegate, $orbLeft$delegate, $orbTop$delegate, $orbWidth$delegate, $orbHeight$delegate, resultContinuation) {
    var i = new NavBar$slambda_1($selectedSectionId, $padX, $padY, $containerRect$delegate, $navRects$delegate, $orbLeft$delegate, $orbTop$delegate, $orbWidth$delegate, $orbHeight$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavBar$lambda$lambda($sec) {
    return function (it) {
      var tmp0_safe_receiver = document.getElementById($sec.p42_1);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = tmp;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.scrollIntoView({behavior: 'smooth'});
      return Unit_instance;
    };
  }
  function NavBar$lambda$lambda_0($hovered$delegate) {
    return function (it) {
      NavBar$_anonymous_$_anonymous_$_anonymous_$lambda$1_adipw3($hovered$delegate, true);
      return Unit_instance;
    };
  }
  function NavBar$lambda$lambda_1($hovered$delegate) {
    return function (it) {
      NavBar$_anonymous_$_anonymous_$_anonymous_$lambda$1_adipw3($hovered$delegate, false);
      return Unit_instance;
    };
  }
  function NavBar$lambda$lambda_2($isSelected, $hovered$delegate) {
    return function ($this$transform) {
      var tmp;
      if ($isSelected) {
        $this$transform.p2q(1.05);
        tmp = Unit_instance;
      } else if (NavBar$_anonymous_$_anonymous_$_anonymous_$lambda$0_adipw4($hovered$delegate)) {
        $this$transform.p2q(1.04);
        tmp = Unit_instance;
      } else {
        $this$transform.p2q(1.0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavBar$lambda_13($orbModifier, $sections, $selectedSectionId, $accentColor, $colorPalette, $ready$delegate, $orbWidth$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-630052887, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous> (NavBar.kt:121)');
        }
        $composer_0.s1n(1366915169);
        if (NavBar$lambda_11($ready$delegate) ? NavBar$lambda_7($orbWidth$delegate) > 0.0 : false) {
          Div(toAttrs($orbModifier), ComposableSingletons$NavBarKt_getInstance().e43_1, $composer_0, 48, 0);
        }
        $composer_0.t1n();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $sections.l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>' call
          var isSelected = element.p42_1 === $selectedSectionId;
          var tmp0_remember$arg$0 = element.p42_1;
          $composer_0.s1n(204443267);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.l1f(tmp0_remember$arg$0);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.y1o();
          var tmp_0;
          if (invalid ? true : it === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = mutableStateOf(false);
            $composer_0.e1p(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.t1n();
          var hovered$delegate = tmp1_group;
          var labelColor = isSelected ? $accentColor : get_color($colorPalette);
          var tmp1_left = get_px(12);
          var tmp2_right = get_px(12);
          var tmp3_top = get_px(6);
          var tmp4_bottom = get_px(6);
          var tmp_2 = id(cursor(padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left), Companion_instance_7.b2w()), 'nav-' + element.p42_1);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
          // Inline function 'org.jetbrains.compose.web.css.Position' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$7 = 'relative';
          var tmp_3 = color(zIndex(position(tmp_2, tmp$ret$7), 1), labelColor);
          $composer_0.s1n(204443770);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_0.l1f(element);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.y1o();
          var tmp_4;
          if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = NavBar$lambda$lambda(element);
            $composer_0.e1p(value_0);
            tmp_4 = value_0;
          } else {
            tmp_4 = it_0;
          }
          var tmp_5 = tmp_4;
          var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.t1n();
          var tmp_6 = onClick(tmp_3, tmp2_group);
          $composer_0.s1n(204443931);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_0.l1f(hovered$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.y1o();
          var tmp_7;
          if (invalid_1 ? true : it_1 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = NavBar$lambda$lambda_0(hovered$delegate);
            $composer_0.e1p(value_1);
            tmp_7 = value_1;
          } else {
            tmp_7 = it_1;
          }
          var tmp_8 = tmp_7;
          var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_0.t1n();
          var tmp_9 = onMouseEnter(tmp_6, tmp3_group);
          $composer_0.s1n(204443980);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_2 = $composer_0.l1f(hovered$delegate);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_0.y1o();
          var tmp_10;
          if (invalid_2 ? true : it_2 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = NavBar$lambda$lambda_1(hovered$delegate);
            $composer_0.e1p(value_2);
            tmp_10 = value_2;
          } else {
            tmp_10 = it_2;
          }
          var tmp_11 = tmp_10;
          var tmp4_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
          $composer_0.t1n();
          var tmp_12 = onMouseLeave(tmp_9, tmp4_group);
          var tmp_13 = Companion_getInstance_0();
          var tmp_14 = get_s(0.25);
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$23 = 'ease-in-out';
          var tmp_15 = tmp_13.e2z('color', tmp_14, tmp$ret$23);
          var tmp_16 = Companion_getInstance_0();
          var tmp_17 = get_s(0.3);
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$27 = 'ease-in-out';
          var tmp_18 = transition_0(tmp_12, [tmp_15, tmp_16.e2z('transform', tmp_17, tmp$ret$27)]);
          $composer_0.s1n(204444253);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_3 = !!($composer_0.o1o(isSelected) | $composer_0.l1f(hovered$delegate));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_3 = $composer_0.y1o();
          var tmp_19;
          if (invalid_3 ? true : it_3 === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.NavBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_3 = NavBar$lambda$lambda_2(isSelected, hovered$delegate);
            $composer_0.e1p(value_3);
            tmp_19 = value_3;
          } else {
            tmp_19 = it_3;
          }
          var tmp_20 = tmp_19;
          var tmp5_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
          $composer_0.t1n();
          var textModifier = transform(tmp_18, tmp5_group);
          SpanText(element.o42_1, textModifier, null, null, $composer_0, 64, 12);
        }
        var tmp_21;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_21 = Unit_instance;
        }
        tmp = tmp_21;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function NavBar$lambda_14($selectedSectionId, $$changed) {
    return function ($composer, $force) {
      NavBar($selectedSectionId, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_SideMenuStyle() {
    _init_properties_SideMenu_kt__h0loc6();
    return SideMenuStyle$delegate.n2y(null, SideMenuStyle$factory());
  }
  var SideMenuStyle$delegate;
  function get_SideMenuSlideInAnim() {
    _init_properties_SideMenu_kt__h0loc6();
    return SideMenuSlideInAnim$delegate.n2y(null, SideMenuSlideInAnim$factory());
  }
  var SideMenuSlideInAnim$delegate;
  function get_SideMenuLinkVariant() {
    _init_properties_SideMenu_kt__h0loc6();
    return SideMenuLinkVariant$delegate.n2y(null, SideMenuLinkVariant$factory());
  }
  var SideMenuLinkVariant$delegate;
  function get_ActiveSideMenuLinkVariant() {
    _init_properties_SideMenu_kt__h0loc6();
    return ActiveSideMenuLinkVariant$delegate.n2y(null, ActiveSideMenuLinkVariant$factory());
  }
  var ActiveSideMenuLinkVariant$delegate;
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_instance;
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).d43 = function () {
    var tmp;
    switch (this.y9_1) {
      case 0:
        tmp = SideMenuState_CLOSED_getInstance();
        break;
      case 1:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      case 2:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function SideMenu(menuState, selectedSectionId, onCloseRequest, onAnimationEnd, $composer, $changed) {
    _init_properties_SideMenu_kt__h0loc6();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1009491837);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(menuState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(selectedSectionId) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(onCloseRequest) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(onAnimationEnd) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1009491837, $dirty, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenu (SideMenu.kt:85)');
      }
      var tmp = setVariable(zIndex(Companion_instance_2, 2), OverlayVars_getInstance().k3l(), Colors_instance.c39());
      $composer_0.s1n(1008840275);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>' call
        var value = SideMenu$lambda(onCloseRequest);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      var tmp_2 = onClick(tmp, tmp0_group);
      var tmp_3 = CenterStart_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -359499623, true, SideMenu$lambda_0(menuState, onAnimationEnd, onCloseRequest, selectedSectionId));
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
      var tmp_5;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_55(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.t1n();
      Overlay(tmp_2, null, tmp_3, null, tmp0, $composer_0, 24584, 10);
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
      tmp1_safe_receiver.k1u(SideMenu$lambda_1(menuState, selectedSectionId, onCloseRequest, onAnimationEnd, $changed));
    }
  }
  function SideMenuNavLink(href, text, selected, onClick_0, $composer, $changed) {
    _init_properties_SideMenu_kt__h0loc6();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1386403076);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(href) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(text) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1o(selected) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_0) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1386403076, $dirty, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenuNavLink (SideMenu.kt:166)');
      }
      var tmp0_variant = thenIf_0(get_SideMenuLinkVariant(), selected, get_ActiveSideMenuLinkVariant());
      var tmp = Companion_instance_2;
      $composer_0.s1n(1286578008);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenuNavLink.<anonymous>' call
        var value = SideMenuNavLink$lambda(onClick_0);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      var tmp1_modifier = onClick(tmp, tmp0_group);
      Link(href, text, tmp1_modifier, tmp0_variant, null, null, null, false, null, $composer_0, 512 | 14 & $dirty | 112 & $dirty | 0, 496);
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
      tmp1_safe_receiver.k1u(SideMenuNavLink$lambda_0(href, text, selected, onClick_0, $changed));
    }
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$SideMenuKt$lambda_1$lambda_uxrqay($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1715297512, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.ComposableSingletons$SideMenuKt.lambda-1.<anonymous> (SideMenu.kt:109)');
      }
      CloseIcon(toModifier_0(get_IconStyle(), [get_SmallIconSize()], $composer_0, 0), $composer_0, 8, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SideMenuKt() {
    ComposableSingletons$SideMenuKt_instance = this;
    var tmp = this;
    tmp.o44_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(-1715297512, false, ComposableSingletons$SideMenuKt$lambda_1$lambda_uxrqay));
  }
  var ComposableSingletons$SideMenuKt_instance;
  function ComposableSingletons$SideMenuKt_getInstance() {
    if (ComposableSingletons$SideMenuKt_instance == null)
      new ComposableSingletons$SideMenuKt();
    return ComposableSingletons$SideMenuKt_instance;
  }
  function SideMenuStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SideMenu_kt__h0loc6();
    var colorPalette = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(SideMenuStyle$delegate$lambda$lambda(colorPalette));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, SideMenuStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, SideMenuStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, SideMenuStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function SideMenuStyle$delegate$lambda$lambda($colorPalette) {
    return function () {
      return borderRadius_0(backgroundColor(gap_0(padding(width(fillMaxHeight(Companion_instance_2), get_percent(33)), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), get_overlay($colorPalette)), VOID, get_px(30), get_px(30));
    };
  }
  function SideMenuStyle$delegate$lambda$lambda_0() {
    _init_properties_SideMenu_kt__h0loc6();
    return width(Companion_instance_2, get_percent(50));
  }
  function SideMenuStyle$delegate$lambda$lambda_1() {
    _init_properties_SideMenu_kt__h0loc6();
    return width(Companion_instance_2, get_percent(43));
  }
  function SideMenuStyle$delegate$lambda$lambda_2() {
    _init_properties_SideMenu_kt__h0loc6();
    return width(Companion_instance_2, get_percent(30));
  }
  function SideMenuSlideInAnim$delegate$lambda($this$Keyframes) {
    _init_properties_SideMenu_kt__h0loc6();
    $this$Keyframes.k3g(SideMenuSlideInAnim$delegate$lambda$lambda);
    $this$Keyframes.l3g(SideMenuSlideInAnim$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda() {
    _init_properties_SideMenu_kt__h0loc6();
    return translate(Companion_instance_2, get_percent(-100));
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda_0() {
    _init_properties_SideMenu_kt__h0loc6();
    return translateX(Companion_instance_2, get_percent(0));
  }
  function SideMenuLinkVariant$delegate$lambda($composer, $changed) {
    _init_properties_SideMenu_kt__h0loc6();
    var $composer_0 = $composer;
    $composer_0.s1n(-1356379967);
    if (isTraceInProgress()) {
      traceEventStart(-1356379967, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenuLinkVariant$delegate.<anonymous> (SideMenu.kt:131)');
    }
    var tmp0 = toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle()], $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function SideMenuLinkVariant$delegate$lambda_0($this$addVariant) {
    _init_properties_SideMenu_kt__h0loc6();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(SideMenuLinkVariant$delegate$lambda$lambda(colorPalette));
    var tmp = get_hover($this$addVariant);
    tmp.n3e(SideMenuLinkVariant$delegate$lambda$lambda_0(colorPalette));
    var tmp_0 = get_active($this$addVariant);
    tmp_0.n3e(SideMenuLinkVariant$delegate$lambda$lambda_1(colorPalette, $this$addVariant));
    return Unit_instance;
  }
  function SideMenuLinkVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(textDecorationLine(Companion_instance_2, Companion_instance_8.e2w()), get_text($colorPalette).c41());
    };
  }
  function SideMenuLinkVariant$delegate$lambda$lambda_0($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_brand($colorPalette).c41());
    };
  }
  function SideMenuLinkVariant$delegate$lambda$lambda_1($colorPalette, $this_addVariant) {
    return function () {
      return color(Companion_instance_2, shifted(get_brand($colorPalette).c41(), $this_addVariant.h3f_1, 0.15));
    };
  }
  function ActiveSideMenuLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_SideMenu_kt__h0loc6();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(ActiveSideMenuLinkVariant$delegate$lambda$lambda(colorPalette));
    var tmp = get_hover($this$addVariant);
    tmp.n3e(ActiveSideMenuLinkVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_active($this$addVariant);
    tmp_0.n3e(ActiveSideMenuLinkVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function ActiveSideMenuLinkVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_brand($colorPalette).c41());
    };
  }
  function ActiveSideMenuLinkVariant$delegate$lambda$lambda_0() {
    _init_properties_SideMenu_kt__h0loc6();
    return Companion_instance_2;
  }
  function ActiveSideMenuLinkVariant$delegate$lambda$lambda_1() {
    _init_properties_SideMenu_kt__h0loc6();
    return Companion_instance_2;
  }
  function SideMenu$lambda($onCloseRequest) {
    return function (it) {
      $onCloseRequest();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda_0(it) {
    _init_properties_SideMenu_kt__h0loc6();
    it.q2s();
    return Unit_instance;
  }
  function SideMenu$lambda$lambda$lambda($onCloseRequest) {
    return function () {
      $onCloseRequest();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda$lambda$lambda($onCloseRequest) {
    return function () {
      $onCloseRequest();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda$lambda_0($selectedSectionId, $onCloseRequest) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-2023345676, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SideMenu.kt:115)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_0().l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = element.p42_1 === $selectedSectionId;
          $composer_0.s1n(-2045093028);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.l1f($onCloseRequest);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.y1o();
          var tmp_1;
          if (invalid ? true : it === Companion_getInstance().k1i_1) {
            // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = SideMenu$lambda$lambda$lambda$lambda($onCloseRequest);
            $composer_0.e1p(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.t1n();
          SideMenuNavLink(element.q42_1, element.o42_1, tmp_0, tmp0_group, $composer_0, 0);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SideMenu$lambda$lambda_1($onCloseRequest, $selectedSectionId) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(705369277, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous> (SideMenu.kt:108)');
        }
        $composer_0.s1n(-1415926703);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f($onCloseRequest);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$lambda$lambda$lambda($onCloseRequest);
          $composer_0.e1p(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.t1n();
        IconButton(null, null, tmp0_group, ComposableSingletons$SideMenuKt_getInstance().o44_1, $composer_0, 3072, 3);
        var tmp_2 = gap_0(Companion_instance_2, get_cssRem(1.5));
        var tmp_3 = Start_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -2023345676, true, SideMenu$lambda$lambda$lambda_0($selectedSectionId, $onCloseRequest));
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
        var tmp_5;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_53(dispatchReceiver);
          $composer_1.e1p(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp_2, null, tmp_3, null, tmp0, $composer_0, 24584, 10);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $onCloseRequest, $selectedSectionId) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-359499623, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous> (SideMenu.kt:93)');
        }
        $composer_0.v1k(895440459, $menuState);
        var tmp_0 = toModifier_0(get_SideMenuStyle(), [], $composer_0, 64);
        var tmp_1 = get_SideMenuSlideInAnim();
        var tmp_2 = get_ms(200);
        var tmp_3;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_3 = 'ease-out';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_3 = 'ease-in';
        }
        var tmp_4 = tmp_3;
        var tmp_5;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_5 = 'normal';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_5 = 'reverse';
        }
        var tmp_6 = tmp_5;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_7 = 'forwards';
        var tmp_8 = animation(tmp_0, [toAnimation(tmp_1, tmp_2, tmp_4, null, null, tmp_6, tmp_7, null, $composer_0, 2359880, 76)]);
        $composer_0.s1n(895441112);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f($onAnimationEnd);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_9;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$lambda$lambda($onAnimationEnd);
          $composer_0.e1p(value);
          tmp_9 = value;
        } else {
          tmp_9 = it;
        }
        var tmp_10 = tmp_9;
        var tmp0_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.t1n();
        var tmp_11 = onAnimationEnd(tmp_8, tmp0_group);
        $composer_0.s1n(895441162);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.y1o();
        var tmp_12;
        if (false ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = SideMenu$lambda$lambda_0;
          $composer_0.e1p(value_0);
          tmp_12 = value_0;
        } else {
          tmp_12 = it_0;
        }
        var tmp_13 = tmp_12;
        var tmp1_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_0.t1n();
        var tmp_14 = onClick(tmp_11, tmp1_group);
        var tmp_15 = Start_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_16 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_16, 705369277, true, SideMenu$lambda$lambda_1($onCloseRequest, $selectedSectionId));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.s1n(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.l1f(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.y1o();
        var tmp_17;
        if (invalid_0 ? true : it_1 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.nav_header.components.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_54(dispatchReceiver);
          $composer_1.e1p(value_1);
          tmp_17 = value_1;
        } else {
          tmp_17 = it_1;
        }
        var tmp_18 = tmp_17;
        var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp_14, null, tmp_15, null, tmp0, $composer_0, 24584, 10);
        $composer_0.y1k();
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_instance;
        }
        tmp = tmp_19;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SideMenu$lambda_1($menuState, $selectedSectionId, $onCloseRequest, $onAnimationEnd, $$changed) {
    return function ($composer, $force) {
      SideMenu($menuState, $selectedSectionId, $onCloseRequest, $onAnimationEnd, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SideMenuNavLink$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_instance;
    };
  }
  function SideMenuNavLink$lambda_0($href, $text, $selected, $onClick, $$changed) {
    return function ($composer, $force) {
      SideMenuNavLink($href, $text, $selected, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SideMenuState_CLOSED_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSED_instance;
  }
  function SideMenuState_OPEN_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_OPEN_instance;
  }
  function SideMenuState_CLOSING_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSING_instance;
  }
  function SideMenuStyle$factory() {
    return getPropertyCallableRef('SideMenuStyle', 0, KProperty0, function () {
      return get_SideMenuStyle();
    }, null);
  }
  function SideMenuSlideInAnim$factory() {
    return getPropertyCallableRef('SideMenuSlideInAnim', 0, KProperty0, function () {
      return get_SideMenuSlideInAnim();
    }, null);
  }
  function SideMenuLinkVariant$factory() {
    return getPropertyCallableRef('SideMenuLinkVariant', 0, KProperty0, function () {
      return get_SideMenuLinkVariant();
    }, null);
  }
  function ActiveSideMenuLinkVariant$factory() {
    return getPropertyCallableRef('ActiveSideMenuLinkVariant', 0, KProperty0, function () {
      return get_ActiveSideMenuLinkVariant();
    }, null);
  }
  var properties_initialized_SideMenu_kt_ndw6zc;
  function _init_properties_SideMenu_kt__h0loc6() {
    if (!properties_initialized_SideMenu_kt_ndw6zc) {
      properties_initialized_SideMenu_kt_ndw6zc = true;
      SideMenuStyle$delegate = ComponentStyle_0(VOID, VOID, SideMenuStyle$delegate$lambda);
      SideMenuSlideInAnim$delegate = Keyframes(VOID, SideMenuSlideInAnim$delegate$lambda);
      var tmp = get_LinkStyle();
      var tmp_0 = SideMenuLinkVariant$delegate$lambda;
      SideMenuLinkVariant$delegate = addVariant_1(tmp, tmp_0, SideMenuLinkVariant$delegate$lambda_0);
      var tmp_1 = get_LinkStyle();
      ActiveSideMenuLinkVariant$delegate = addVariant_0(tmp_1, VOID, ActiveSideMenuLinkVariant$delegate$lambda);
    }
  }
  function ThemeIconButton(colorMode, onClick, $composer, $changed, $default) {
    var colorMode_0 = {_v: colorMode};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(517504723);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.l1f(colorMode_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          colorMode_0._v = Companion_instance_0.r3a($composer_0, 8);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(517504723, $dirty, -1, 'org.example.newportfolio.components.sections.nav_header.components.ThemeIconButton (ThemeIconButton.kt:16)');
      }
      $composer_0.s1n(906346934);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.ThemeIconButton.<anonymous>' call
        var value = ThemeIconButton$lambda(onClick);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.nav_header.components.ThemeIconButton.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -461523598, true, ThemeIconButton$lambda_0(colorMode_0));
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
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.nav_header.components.ThemeIconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.t1n();
      PrimaryIconButton(null, null, tmp0_group, tmp0, $composer_0, 3072, 3);
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
      tmp1_safe_receiver.k1u(ThemeIconButton$lambda_1(colorMode_0, onClick, $changed, $default));
    }
  }
  function ThemeIconButton$lambda($onClick) {
    return function () {
      $onClick();
      return Unit_instance;
    };
  }
  function ThemeIconButton$lambda_0($colorMode) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-461523598, $changed, -1, 'org.example.newportfolio.components.sections.nav_header.components.ThemeIconButton.<anonymous> (ThemeIconButton.kt:22)');
        }
        var iconModifier = toModifier_0(get_IconStyle(), [get_IconOnBrandColorVariant()], $composer_0, 0);
        switch ($colorMode._v.y9_1) {
          case 0:
            $composer_0.s1n(309489157);
            LightModeIcon(iconModifier, null, $composer_0, 8, 2);
            $composer_0.t1n();
            break;
          case 1:
            $composer_0.s1n(309489226);
            DarkModeIcon(iconModifier, null, $composer_0, 8, 2);
            $composer_0.t1n();
            break;
          default:
            $composer_0.s1n(309489273);
            $composer_0.t1n();
            break;
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
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ThemeIconButton$lambda_1($colorMode, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      ThemeIconButton($colorMode._v, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_StartSectionVariant() {
    _init_properties_StartSection_kt__1tz7wd();
    return StartSectionVariant$delegate.n2y(null, StartSectionVariant$factory());
  }
  var StartSectionVariant$delegate;
  function StartSection($composer, $changed) {
    _init_properties_StartSection_kt__1tz7wd();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1514980150);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1514980150, $changed, -1, 'org.example.newportfolio.components.sections.start.StartSection (StartSection.kt:102)');
      }
      var pageContext = rememberPageContext($composer_0, 0);
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_2);
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2089834401, true, StartSection$lambda(breakpoint, pageContext));
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
        // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_62(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.k1u(StartSection$lambda_0($changed));
    }
  }
  function ScrollHint(modifier, $composer, $changed) {
    _init_properties_StartSection_kt__1tz7wd();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(787508016);
    if (isTraceInProgress()) {
      traceEventStart(787508016, $changed, -1, 'org.example.newportfolio.components.sections.start.ScrollHint (StartSection.kt:132)');
    }
    Row(modifier, Start_instance_0, CenterVertically_instance, null, ComposableSingletons$StartSectionKt_getInstance().p44_1, $composer_0, 24584, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.n1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1u(ScrollHint$lambda(modifier, $changed));
    }
  }
  function TextContent_0(breakpoint, onExploreWorksClicked, $composer, $changed) {
    _init_properties_StartSection_kt__1tz7wd();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(2012363398);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1o(onExploreWorksClicked) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(2012363398, $dirty, -1, 'org.example.newportfolio.components.sections.start.TextContent (StartSection.kt:151)');
      }
      var tmp = flex(Companion_instance_2, 1);
      var tmp_0 = Center_instance;
      var tmp_1 = breakpoint.z9(Breakpoint_LG_getInstance()) >= 0 ? Start_instance : CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.start.TextContent.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 87984829, true, TextContent$lambda_0(breakpoint, onExploreWorksClicked));
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
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.start.TextContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 25096, 8);
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
      tmp0_safe_receiver.k1u(TextContent$lambda_1(breakpoint, onExploreWorksClicked, $changed));
    }
  }
  function ImageContent(breakpoint, $composer, $changed) {
    _init_properties_StartSection_kt__1tz7wd();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-135600128);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-135600128, $dirty, -1, 'org.example.newportfolio.components.sections.start.ImageContent (StartSection.kt:185)');
      }
      var tmp = flex(Companion_instance_2, 1);
      var tmp_0 = breakpoint.z9(Breakpoint_LG_getInstance()) >= 0 ? CenterEnd_instance : Center_instance_0;
      Box(tmp, tmp_0, null, ComposableSingletons$StartSectionKt_getInstance().r44_1, $composer_0, 3144, 4);
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
      tmp0_safe_receiver.k1u(ImageContent$lambda(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$StartSectionKt$lambda_1$lambda_6vizg7($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(901555213, $changed, -1, 'org.example.newportfolio.components.sections.start.ComposableSingletons$StartSectionKt.lambda-1.<anonymous> (StartSection.kt:138)');
      }
      var tmp = size(toModifier_0(get_IconStyle(), [], $composer_0, 64), get_px(36));
      ScrollMouseIcon(tmp, null, $composer_0, 8, 2);
      var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_LabelMediumTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_3.n2u());
      SpanText('Scroll', tmp0_modifier, null, null, $composer_0, 70, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$StartSectionKt$lambda_2$lambda_zbylgq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1468174436, $changed, -1, 'org.example.newportfolio.components.sections.start.ComposableSingletons$StartSectionKt.lambda-2.<anonymous> (StartSection.kt:173)');
      }
      var tmp = toModifier_0(get_IconStyle(), [get_IconOnBrandColorVariant()], $composer_0, 0);
      ArrowForwardIcon(tmp, null, $composer_0, 8, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$StartSectionKt$lambda_3$lambda_6ic4ej($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(272912698, $changed, -1, 'org.example.newportfolio.components.sections.start.ComposableSingletons$StartSectionKt.lambda-3.<anonymous> (StartSection.kt:190)');
      }
      var tmp = toModifier_0(get_StartSectionImageStyle(), [], $composer_0, 64);
      Image('images/start_image.svg', tmp, null, null, null, null, false, null, $composer_0, 70, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$StartSectionKt() {
    ComposableSingletons$StartSectionKt_instance = this;
    var tmp = this;
    tmp.p44_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(901555213, false, ComposableSingletons$StartSectionKt$lambda_1$lambda_6vizg7));
    var tmp_0 = this;
    tmp_0.q44_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(1468174436, false, ComposableSingletons$StartSectionKt$lambda_2$lambda_zbylgq));
    var tmp_1 = this;
    tmp_1.r44_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(272912698, false, ComposableSingletons$StartSectionKt$lambda_3$lambda_6ic4ej));
  }
  var ComposableSingletons$StartSectionKt_instance;
  function ComposableSingletons$StartSectionKt_getInstance() {
    if (ComposableSingletons$StartSectionKt_instance == null)
      new ComposableSingletons$StartSectionKt();
    return ComposableSingletons$StartSectionKt_instance;
  }
  function StartSectionVariant$delegate$lambda($this$addVariant) {
    _init_properties_StartSection_kt__1tz7wd();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, StartSectionVariant$delegate$lambda$lambda(colorPalette));
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, StartSectionVariant$delegate$lambda$lambda_0(colorPalette));
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, StartSectionVariant$delegate$lambda$lambda_1(colorPalette));
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, StartSectionVariant$delegate$lambda$lambda_2(colorPalette));
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, StartSectionVariant$delegate$lambda$lambda_3(colorPalette));
    return Unit_instance;
  }
  function StartSectionVariant$delegate$lambda$lambda$lambda($colorPalette) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, 0.6));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(35));
      return Unit_instance;
    };
  }
  function StartSectionVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      var tmp = minHeight(height(Companion_instance_2, get_vh(75)), get_cssRem(38));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(50), get_percent(25));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, StartSectionVariant$delegate$lambda$lambda$lambda($colorPalette)));
    };
  }
  function StartSectionVariant$delegate$lambda$lambda$lambda_0($colorPalette) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, 0.6));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(40));
      return Unit_instance;
    };
  }
  function StartSectionVariant$delegate$lambda$lambda_0($colorPalette) {
    return function () {
      var tmp = minHeight(Companion_instance_2, get_cssRem(40.6));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(50), get_percent(30));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, StartSectionVariant$delegate$lambda$lambda$lambda_0($colorPalette)));
    };
  }
  function StartSectionVariant$delegate$lambda$lambda$lambda_1($colorPalette) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, 0.6));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(40));
      return Unit_instance;
    };
  }
  function StartSectionVariant$delegate$lambda$lambda_1($colorPalette) {
    return function () {
      var tmp = height(Companion_instance_2, get_vh(78));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(50), get_percent(30));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, StartSectionVariant$delegate$lambda$lambda$lambda_1($colorPalette)));
    };
  }
  function StartSectionVariant$delegate$lambda$lambda$lambda_2($colorPalette) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, 0.6));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(35));
      return Unit_instance;
    };
  }
  function StartSectionVariant$delegate$lambda$lambda_2($colorPalette) {
    return function () {
      var tmp = height(Companion_instance_2, get_vh(75));
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(71.5), get_percent(50));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, StartSectionVariant$delegate$lambda$lambda$lambda_2($colorPalette)));
    };
  }
  function StartSectionVariant$delegate$lambda$lambda$lambda_3($colorPalette) {
    return function ($this$radialGradient) {
      $this$radialGradient.y2z(get_brand($colorPalette).c41().z38().y38(VOID, VOID, VOID, 0.6));
      $this$radialGradient.z2z(Colors_instance.c39(), get_percent(28));
      return Unit_instance;
    };
  }
  function StartSectionVariant$delegate$lambda$lambda_3($colorPalette) {
    return function () {
      var tmp = Companion_instance_2;
      var tmp_0 = Companion_instance_4.q2z();
      var tmp_1 = CSSPosition_init_$Create$(get_percent(73.5), get_percent(50));
      return backgroundImage(tmp, radialGradient(tmp_0, tmp_1, StartSectionVariant$delegate$lambda$lambda$lambda_3($colorPalette)));
    };
  }
  function StartSection$lambda$lambda$lambda$lambda($pageContext) {
    return function () {
      $pageContext.v34_1.j37(Section_Works_getInstance().q42_1);
      return Unit_instance;
    };
  }
  function StartSection$lambda$lambda$lambda($breakpoint, $pageContext) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1728405758, $changed, -1, 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>.<anonymous> (StartSection.kt:117)');
      }
      TextContent_0($breakpoint, StartSection$lambda$lambda$lambda$lambda($pageContext), $composer_0, 0);
      ImageContent($breakpoint, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function StartSection$lambda$lambda($breakpoint, $pageContext) {
    return function ($this$SectionContainer, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.l1f($this$SectionContainer) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(444467745, $dirty, -1, 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous> (StartSection.kt:116)');
        }
        var tmp_1 = get_StartSectionGridStyle();
        var tmp_2 = toAttrs_0(tmp_1, [], null, $composer_0, 64, 2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1728405758, true, StartSection$lambda$lambda$lambda($breakpoint, $pageContext));
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
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_60(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.t1n();
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        ScrollHint($this$SectionContainer.w37(displayIfAtLeast(Companion_instance_2, Breakpoint_MD_getInstance()), Start_instance), $composer_0, 8);
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
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function StartSection$lambda($breakpoint, $pageContext) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-2089834401, $changed, -1, 'org.example.newportfolio.components.sections.start.StartSection.<anonymous> (StartSection.kt:110)');
        }
        var tmp1_variant = get_StartSectionVariant();
        var tmp2_section = Section_Start_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 444467745, true, StartSection$lambda$lambda($breakpoint, $pageContext));
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
          // Inline function 'org.example.newportfolio.components.sections.start.StartSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_61(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.t1n();
        SectionContainer(tmp2_section, Companion_instance_2, null, Center_instance, tmp1_variant, tmp0, $composer_0, 196678, 4);
        SkillsSectionDivider(null, null, $composer_0, 0, 3);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function StartSection$lambda_0($$changed) {
    return function ($composer, $force) {
      StartSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScrollHint$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      ScrollHint($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextContent$lambda$lambda($onExploreWorksClicked) {
    return function (it) {
      $onExploreWorksClicked();
      return Unit_instance;
    };
  }
  function TextContent$lambda_0($breakpoint, $onExploreWorksClicked) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(87984829, $changed, -1, 'org.example.newportfolio.components.sections.start.TextContent.<anonymous> (StartSection.kt:157)');
        }
        var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_DisplayTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), $breakpoint.z9(Breakpoint_MD_getInstance()) > 0 ? Companion_instance_3.n2u() : Companion_instance_3.k2u());
        var tmp1_text = 'Software Engineer - Mobile Developer';
        SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 70, 12);
        var tmp2_modifier = textAlign(margin(maxWidth(toModifier_0(get_TextStyle(), [get_SubDisplayTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), $breakpoint.z9(Breakpoint_SM_getInstance()) >= 0 ? get_percent(75) : get_percent(100)), get_px(3)), $breakpoint.z9(Breakpoint_MD_getInstance()) > 0 ? Companion_instance_3.n2u() : Companion_instance_3.k2u());
        var tmp3_text = 'Dedicated to turning your innovative idea into a high-quality mobile reality.';
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 70, 12);
        var tmp_0 = margin(Companion_instance_2, get_px(50));
        var tmp_1 = ComposableSingletons$StartSectionKt_getInstance().q44_1;
        $composer_0.s1n(556903232);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1f($onExploreWorksClicked);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.y1o();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.start.TextContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = TextContent$lambda$lambda($onExploreWorksClicked);
          $composer_0.e1p(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.t1n();
        PrimaryButton(tmp_0, 'Explore my works', tmp_1, tmp0_group, $composer_0, 440, 0);
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
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function TextContent$lambda_1($breakpoint, $onExploreWorksClicked, $$changed) {
    return function ($composer, $force) {
      TextContent_0($breakpoint, $onExploreWorksClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ImageContent$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      ImageContent($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StartSectionVariant$factory() {
    return getPropertyCallableRef('StartSectionVariant', 0, KProperty0, function () {
      return get_StartSectionVariant();
    }, null);
  }
  var properties_initialized_StartSection_kt_84ybsr;
  function _init_properties_StartSection_kt__1tz7wd() {
    if (!properties_initialized_StartSection_kt_84ybsr) {
      properties_initialized_StartSection_kt_84ybsr = true;
      var tmp = get_SectionContainerStyle();
      StartSectionVariant$delegate = addVariant(tmp, VOID, StartSectionVariant$delegate$lambda);
    }
  }
  function get_SkillSectionDividerStyle() {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    return SkillSectionDividerStyle$delegate.n2y(null, SkillSectionDividerStyle$factory());
  }
  var SkillSectionDividerStyle$delegate;
  function SkillsSectionDivider(skillsToDisplay, modifier, $composer, $changed, $default) {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    var skillsToDisplay_0 = {_v: skillsToDisplay};
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(846707489);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        skillsToDisplay_0._v = listOf([Skill_AndroidStudio_getInstance(), Skill_Kotlin_getInstance(), Skill_Ktor_getInstance(), Skill_Figma_getInstance()]);
      }
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (isTraceInProgress()) {
        traceEventStart(846707489, $dirty, -1, 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider (SkillsSectionDivider.kt:48)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = toModifier_0(get_SkillSectionDividerStyle(), [], $composer_0, 64).v37(modifier_0._v);
      var tmp_0 = Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 535872219, true, SkillsSectionDivider$lambda(breakpoint, skillsToDisplay_0));
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
        // Inline function 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.t1n();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3080, 4);
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
      tmp0_safe_receiver.k1u(SkillsSectionDivider$lambda_0(skillsToDisplay_0, modifier_0, $changed, $default));
    }
  }
  function SkillSectionDividerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    var colorPalette = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(SkillSectionDividerStyle$delegate$lambda$lambda(colorPalette));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, SkillSectionDividerStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, SkillSectionDividerStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, SkillSectionDividerStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function SkillSectionDividerStyle$delegate$lambda$lambda($colorPalette) {
    return function () {
      return background(fillMaxWidth(Companion_instance_2), get_overlay($colorPalette), []);
    };
  }
  function SkillSectionDividerStyle$delegate$lambda$lambda_0() {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    return height(padding(Companion_instance_2, get_cssRem(2.5), VOID, get_cssRem(2.5)), get_vh(18));
  }
  function SkillSectionDividerStyle$delegate$lambda$lambda_1() {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    return padding_1(height(Companion_instance_2, get_vh(15)), get_cssRem(3));
  }
  function SkillSectionDividerStyle$delegate$lambda$lambda_2() {
    _init_properties_SkillsSectionDivider_kt__1p21va();
    return padding_1(Companion_instance_2, get_cssRem(3.4));
  }
  function SkillsSectionDivider$lambda$lambda($skillsToDisplay, $breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-637758894, $changed, -1, 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>.<anonymous> (SkillsSectionDivider.kt:60)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $skillsToDisplay._v.l();
        while (tmp0_iterator.z()) {
          var element = tmp0_iterator.b1();
          // Inline function 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          SkillItem(element, null, flexGrow(Companion_instance_2, 1), $breakpoint.z9(Breakpoint_MD_getInstance()) >= 0 ? Center_instance : Start_instance_0, $composer_0, 4608, 2);
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
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function SkillsSectionDivider$lambda($breakpoint, $skillsToDisplay) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(535872219, $changed, -1, 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous> (SkillsSectionDivider.kt:54)');
        }
        var tmp0_modifier = padding_0(gap_0(Companion_instance_2, $breakpoint.z9(Breakpoint_MD_getInstance()) >= 0 ? get_cssRem(1.5) : get_cssRem(1)), VOID, VOID, VOID, $breakpoint.z9(Breakpoint_SM_getInstance()) <= 0 ? get_cssRem(2.25) : get_cssRem(0));
        var tmp1_numColumns = numColumns(2, 4, 4);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -637758894, true, SkillsSectionDivider$lambda$lambda($skillsToDisplay, $breakpoint));
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
          // Inline function 'org.example.newportfolio.components.sections.start.components.SkillsSectionDivider.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_64(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.t1n();
        SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24640, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SkillsSectionDivider$lambda_0($skillsToDisplay, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SkillsSectionDivider($skillsToDisplay._v, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SkillSectionDividerStyle$factory() {
    return getPropertyCallableRef('SkillSectionDividerStyle', 0, KProperty0, function () {
      return get_SkillSectionDividerStyle();
    }, null);
  }
  var properties_initialized_SkillsSectionDivider_kt_rwmvh4;
  function _init_properties_SkillsSectionDivider_kt__1p21va() {
    if (!properties_initialized_SkillsSectionDivider_kt_rwmvh4) {
      properties_initialized_SkillsSectionDivider_kt_rwmvh4 = true;
      SkillSectionDividerStyle$delegate = ComponentStyle_0(VOID, VOID, SkillSectionDividerStyle$delegate$lambda);
    }
  }
  function get_StartSectionGridKeyFrames() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    return StartSectionGridKeyFrames$delegate.n2y(null, StartSectionGridKeyFrames$factory());
  }
  var StartSectionGridKeyFrames$delegate;
  function get_StartSectionGridStyle() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    return StartSectionGridStyle$delegate.n2y(null, StartSectionGridStyle$factory());
  }
  var StartSectionGridStyle$delegate;
  function StartSectionGridKeyFrames$delegate$lambda($this$Keyframes) {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = get_percent(0);
    $this$Keyframes.m3g(tmp, StartSectionGridKeyFrames$delegate$lambda$lambda);
    var tmp_0 = get_percent(100);
    $this$Keyframes.m3g(tmp_0, StartSectionGridKeyFrames$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function StartSectionGridKeyFrames$delegate$lambda$lambda() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    return opacity(margin_0(Companion_instance_2, VOID, get_px(50)), 0);
  }
  function StartSectionGridKeyFrames$delegate$lambda$lambda_0() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    return opacity(margin_0(Companion_instance_2, VOID, get_px(0)), 1);
  }
  function StartSectionGridStyle$delegate$lambda($composer, $changed) {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var $composer_0 = $composer;
    $composer_0.s1n(1757587219);
    if (isTraceInProgress()) {
      traceEventStart(1757587219, $changed, -1, 'org.example.newportfolio.components.sections.start.components.StartSectionGridStyle$delegate.<anonymous> (StartSectionGridStyle.kt:25)');
    }
    var tmp = Companion_instance_2;
    var tmp_0 = get_StartSectionGridKeyFrames();
    var tmp_1 = get_s(0.5);
    // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = 'ease-in-out';
    var tmp0 = animation(tmp, [toAnimation(tmp_0, tmp_1, tmp_2, null, null, null, null, null, $composer_0, 584, 124)]);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function StartSectionGridStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    $this$ComponentStyle.w3d(StartSectionGridStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, StartSectionGridStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, StartSectionGridStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, StartSectionGridStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, StartSectionGridStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, StartSectionGridStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function StartSectionGridStyle$delegate$lambda$lambda() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = width(Companion_instance_2, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return rowGap(columnGap(display(tmp, 'flex'), get_cssRem(1)), get_cssRem(3));
  }
  function StartSectionGridStyle$delegate$lambda$lambda_0() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.ColumnReverse' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'column-reverse';
    return flexDirection(tmp, tmp$ret$3);
  }
  function StartSectionGridStyle$delegate$lambda$lambda_1() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.ColumnReverse' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'column-reverse';
    return flexDirection(tmp, tmp$ret$3);
  }
  function StartSectionGridStyle$delegate$lambda$lambda_2() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.ColumnReverse' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'column-reverse';
    return flexDirection(tmp, tmp$ret$3);
  }
  function StartSectionGridStyle$delegate$lambda$lambda_3() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return flexDirection(tmp, 'row');
  }
  function StartSectionGridStyle$delegate$lambda$lambda_4() {
    _init_properties_StartSectionGridStyle_kt__t9gb7a();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return flexDirection(tmp, 'row');
  }
  function StartSectionGridKeyFrames$factory() {
    return getPropertyCallableRef('StartSectionGridKeyFrames', 0, KProperty0, function () {
      return get_StartSectionGridKeyFrames();
    }, null);
  }
  function StartSectionGridStyle$factory() {
    return getPropertyCallableRef('StartSectionGridStyle', 0, KProperty0, function () {
      return get_StartSectionGridStyle();
    }, null);
  }
  var properties_initialized_StartSectionGridStyle_kt_rrcrs8;
  function _init_properties_StartSectionGridStyle_kt__t9gb7a() {
    if (!properties_initialized_StartSectionGridStyle_kt_rrcrs8) {
      properties_initialized_StartSectionGridStyle_kt_rrcrs8 = true;
      StartSectionGridKeyFrames$delegate = Keyframes(VOID, StartSectionGridKeyFrames$delegate$lambda);
      var tmp = StartSectionGridStyle$delegate$lambda;
      StartSectionGridStyle$delegate = ComponentStyle(tmp, VOID, StartSectionGridStyle$delegate$lambda_0);
    }
  }
  function get_StartSectionImageStyle() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return StartSectionImageStyle$delegate.n2y(null, StartSectionImageStyle$factory());
  }
  var StartSectionImageStyle$delegate;
  function StartSectionImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, StartSectionImageStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, StartSectionImageStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, StartSectionImageStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, StartSectionImageStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, StartSectionImageStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function StartSectionImageStyle$delegate$lambda$lambda() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return height(Companion_instance_2, get_px(222));
  }
  function StartSectionImageStyle$delegate$lambda$lambda_0() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return height(Companion_instance_2, get_px(264));
  }
  function StartSectionImageStyle$delegate$lambda$lambda_1() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return height(Companion_instance_2, get_px(333));
  }
  function StartSectionImageStyle$delegate$lambda$lambda_2() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return height(Companion_instance_2, get_px(443));
  }
  function StartSectionImageStyle$delegate$lambda$lambda_3() {
    _init_properties_StartSectionImageContentStyles_kt__4ih7ct();
    return height(Companion_instance_2, get_px(500));
  }
  function StartSectionImageStyle$factory() {
    return getPropertyCallableRef('StartSectionImageStyle', 0, KProperty0, function () {
      return get_StartSectionImageStyle();
    }, null);
  }
  var properties_initialized_StartSectionImageContentStyles_kt_axprsr;
  function _init_properties_StartSectionImageContentStyles_kt__4ih7ct() {
    if (!properties_initialized_StartSectionImageContentStyles_kt_axprsr) {
      properties_initialized_StartSectionImageContentStyles_kt_axprsr = true;
      StartSectionImageStyle$delegate = ComponentStyle_0(VOID, VOID, StartSectionImageStyle$delegate$lambda);
    }
  }
  function WorksSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(371391510);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(371391510, $changed, -1, 'org.example.newportfolio.components.sections.works.WorksSection (WorksSection.kt:32)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp1_section = Section_Works_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.works.WorksSection.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 667540184, true, WorksSection$lambda(breakpoint));
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
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.works.WorksSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_68(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.t1n();
      SectionContainer(tmp1_section, Companion_instance_2, CenterHorizontally_instance, Top_instance, null, tmp0, $composer_0, 196678, 16);
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
      tmp0_safe_receiver.k1u(WorksSection$lambda_0($changed));
    }
  }
  function MoreIsYetToCome($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1997528769);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1997528769, $changed, -1, 'org.example.newportfolio.components.sections.works.MoreIsYetToCome (WorksSection.kt:57)');
      }
      var colorPalette = toPalette(Companion_instance_0.r3a($composer_0, 8));
      var tmp = minHeight(borderRadius(backgroundColor(Companion_instance_2, get_overlay(colorPalette)), get_px(30)), get_px(260));
      var tmp_0 = Center_instance_0;
      Box(tmp, tmp_0, null, ComposableSingletons$WorksSectionKt_getInstance().t44_1, $composer_0, 3080, 4);
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
      tmp0_safe_receiver.k1u(MoreIsYetToCome$lambda($changed));
    }
  }
  function TextContent_1(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-255207470);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-255207470, $dirty, -1, 'org.example.newportfolio.components.sections.works.TextContent (WorksSection.kt:76)');
      }
      var tmp = margin(Companion_instance_2, get_cssRem(8.5));
      var tmp_0 = Center_instance;
      var tmp_1 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.works.TextContent.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1076121399, true, TextContent$lambda_2(breakpoint));
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
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.sections.works.TextContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.t1n();
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24584, 8);
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
      tmp0_safe_receiver.k1u(TextContent$lambda_3(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$WorksSectionKt$lambda_1$lambda_k1ul9l($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1708269745, $changed, -1, 'org.example.newportfolio.components.sections.works.ComposableSingletons$WorksSectionKt.lambda-1.<anonymous> (WorksSection.kt:45)');
      }
      $composer_0.s1n(1240707015);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_3().l();
      while (tmp0_iterator.z()) {
        var element = tmp0_iterator.b1();
        // Inline function 'org.example.newportfolio.components.sections.works.ComposableSingletons$WorksSectionKt.lambda-1.<anonymous>.<anonymous>' call
        WorkItem(element, Companion_instance_2, $composer_0, 64, 0);
      }
      $composer_0.t1n();
      MoreIsYetToCome($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$WorksSectionKt$lambda_2$lambda_8rrvsm($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1334658373, $changed, -1, 'org.example.newportfolio.components.sections.works.ComposableSingletons$WorksSectionKt.lambda-2.<anonymous> (WorksSection.kt:66)');
      }
      var tmp = toModifier_0(get_TextStyle(), [get_TitleTextStyleSmaller()], $composer_0, 0);
      SpanText('More is yet to come...', tmp, null, null, $composer_0, 70, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$WorksSectionKt() {
    ComposableSingletons$WorksSectionKt_instance = this;
    var tmp = this;
    tmp.s44_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-1708269745, false, ComposableSingletons$WorksSectionKt$lambda_1$lambda_k1ul9l));
    var tmp_0 = this;
    tmp_0.t44_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(1334658373, false, ComposableSingletons$WorksSectionKt$lambda_2$lambda_8rrvsm));
  }
  var ComposableSingletons$WorksSectionKt_instance;
  function ComposableSingletons$WorksSectionKt_getInstance() {
    if (ComposableSingletons$WorksSectionKt_instance == null)
      new ComposableSingletons$WorksSectionKt();
    return ComposableSingletons$WorksSectionKt_instance;
  }
  function WorksSection$lambda($breakpoint) {
    return function ($this$SectionContainer, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(667540184, $changed, -1, 'org.example.newportfolio.components.sections.works.WorksSection.<anonymous> (WorksSection.kt:40)');
        }
        TextContent_1($breakpoint, $composer_0, 0);
        var tmp_0 = numColumns(1, 2, 3, 4, 4);
        var tmp_1 = get_WorkItemsSimpleGridVariant();
        SimpleGrid(tmp_0, null, tmp_1, null, ComposableSingletons$WorksSectionKt_getInstance().s44_1, $composer_0, 24576, 10);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function WorksSection$lambda_0($$changed) {
    return function ($composer, $force) {
      WorksSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MoreIsYetToCome$lambda($$changed) {
    return function ($composer, $force) {
      MoreIsYetToCome($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextContent$lambda_2($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1076121399, $changed, -1, 'org.example.newportfolio.components.sections.works.TextContent.<anonymous> (WorksSection.kt:82)');
        }
        var tmp0_modifier = textAlign(toModifier_0(get_TextStyle(), [get_DisplayTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0), Companion_instance_3.k2u());
        var tmp1_text = 'Explore my works';
        SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 70, 12);
        var tmp2_modifier = textAlign(margin(maxWidth(toModifier_0(get_TextStyle(), [get_SubDisplayTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0), $breakpoint.z9(Breakpoint_SM_getInstance()) >= 0 ? get_percent(75) : get_percent(100)), get_cssRem(1)), Companion_instance_3.k2u());
        var tmp3_text = "All projects are primarily developed with Kotlin. It's a powerful cross-platform language and Google's preferred language for Android development.";
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 70, 12);
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
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function TextContent$lambda_3($breakpoint, $$changed) {
    return function ($composer, $force) {
      TextContent_1($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_WorkItemStyle() {
    _init_properties_WorkItem_kt__70azfo();
    return WorkItemStyle$delegate.n2y(null, WorkItemStyle$factory());
  }
  var WorkItemStyle$delegate;
  function get_WorkItemShadowStyle() {
    _init_properties_WorkItem_kt__70azfo();
    return WorkItemShadowStyle$delegate.n2y(null, WorkItemShadowStyle$factory());
  }
  var WorkItemShadowStyle$delegate;
  function get_WorkItemImageContainerStyle() {
    _init_properties_WorkItem_kt__70azfo();
    return WorkItemImageContainerStyle$delegate.n2y(null, WorkItemImageContainerStyle$factory());
  }
  var WorkItemImageContainerStyle$delegate;
  function get_WorkItemOverlayStyle() {
    _init_properties_WorkItem_kt__70azfo();
    return WorkItemOverlayStyle$delegate.n2y(null, WorkItemOverlayStyle$factory());
  }
  var WorkItemOverlayStyle$delegate;
  function WorkItem(work, modifier, $composer, $changed, $default) {
    _init_properties_WorkItem_kt__70azfo();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1556566510);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(work) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 2) === 2) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (isTraceInProgress()) {
        traceEventStart(1556566510, $dirty, -1, 'org.example.newportfolio.components.sections.works.components.WorkItem (WorkItem.kt:103)');
      }
      var tmp = toModifier_0(get_WorkItemStyle(), [], $composer_0, 64).v37(modifier_0._v);
      var tmp_0 = Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 2027382696, true, WorkItem$lambda(work));
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
        // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.t1n();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3080, 4);
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
      tmp0_safe_receiver.k1u(WorkItem$lambda_0(work, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$WorkItemKt$lambda_1$lambda_akxviw($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1971646363, $changed, -1, 'org.example.newportfolio.components.sections.works.components.ComposableSingletons$WorkItemKt.lambda-1.<anonymous> (WorkItem.kt:133)');
      }
      var tmp = color(toModifier_0(get_IconStyle(), [get_LargeIconSize()], $composer_0, 0), Colors_instance.p39());
      ExternalLinkIcon(tmp, null, $composer_0, 8, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$WorkItemKt() {
    ComposableSingletons$WorkItemKt_instance = this;
    var tmp = this;
    tmp.u44_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(1971646363, false, ComposableSingletons$WorkItemKt$lambda_1$lambda_akxviw));
  }
  var ComposableSingletons$WorkItemKt_instance;
  function ComposableSingletons$WorkItemKt_getInstance() {
    if (ComposableSingletons$WorkItemKt_instance == null)
      new ComposableSingletons$WorkItemKt();
    return ComposableSingletons$WorkItemKt_instance;
  }
  function WorkItemStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkItem_kt__70azfo();
    $this$ComponentStyle.w3d(WorkItemStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.n3e(WorkItemStyle$delegate$lambda$lambda_0);
    $this$ComponentStyle.x3f(':hover .work-item-shadow', WorkItemStyle$delegate$lambda$lambda_1);
    $this$ComponentStyle.x3f(':hover .work-item-overlay', WorkItemStyle$delegate$lambda$lambda_2);
    $this$ComponentStyle.x3f(':hover .work-item-image', WorkItemStyle$delegate$lambda$lambda_3);
    $this$ComponentStyle.x3f('.work-item-img', WorkItemStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function WorkItemStyle$delegate$lambda$lambda() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    var tmp_0 = overflow(borderRadius(position(tmp, tmp$ret$3), get_px(30)), Companion_instance_13.v2x());
    var tmp_1 = get_s(0.3);
    // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'ease-in-out';
    return width(transition(tmp_0, [CSSTransition_init_$Create$('transform', tmp_1, tmp$ret$7)]), get_percent(100));
  }
  function WorkItemStyle$delegate$lambda$lambda_0() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = Companion_instance_2;
    return transform(tmp, WorkItemStyle$delegate$lambda$lambda$lambda);
  }
  function WorkItemStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_WorkItem_kt__70azfo();
    $this$transform.p2q(1.05);
    return Unit_instance;
  }
  function WorkItemStyle$delegate$lambda$lambda_1() {
    _init_properties_WorkItem_kt__70azfo();
    return fillMaxHeight(Companion_instance_2);
  }
  function WorkItemStyle$delegate$lambda$lambda_2() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = opacity(Companion_instance_2, 1);
    return transform(tmp, WorkItemStyle$delegate$lambda$lambda$lambda_0);
  }
  function WorkItemStyle$delegate$lambda$lambda$lambda_0($this$transform) {
    _init_properties_WorkItem_kt__70azfo();
    $this$transform.r2q(get_px(0));
    return Unit_instance;
  }
  function WorkItemStyle$delegate$lambda$lambda_3() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = Companion_instance_2;
    return transform(tmp, WorkItemStyle$delegate$lambda$lambda$lambda_1);
  }
  function WorkItemStyle$delegate$lambda$lambda$lambda_1($this$transform) {
    _init_properties_WorkItem_kt__70azfo();
    $this$transform.p2q(1.1);
    return Unit_instance;
  }
  function WorkItemStyle$delegate$lambda$lambda_4() {
    _init_properties_WorkItem_kt__70azfo();
    return height(width(Companion_instance_2, get_percent(100)), get_percent(100));
  }
  function WorkItemShadowStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkItem_kt__70azfo();
    $this$ComponentStyle.w3d(WorkItemShadowStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function WorkItemShadowStyle$delegate$lambda$lambda() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = opacity(backgroundColor(height(fillMaxWidth(left(top(zIndex(position(tmp, tmp$ret$3), 1), get_px(0)), get_px(0))), get_px(0)), Companion_instance_17.b39(29, 28, 38)), 0.85);
    var tmp_1 = get_s(0.4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'ease-in-out';
    return transition(tmp_0, [CSSTransition_init_$Create$('height', tmp_1, tmp$ret$7)]);
  }
  function WorkItemImageContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkItem_kt__70azfo();
    $this$ComponentStyle.w3d(WorkItemImageContainerStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp, WorkItemImageContainerStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_0, WorkItemImageContainerStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_1, WorkItemImageContainerStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function WorkItemImageContainerStyle$delegate$lambda$lambda() {
    _init_properties_WorkItem_kt__70azfo();
    return backgroundRepeat(backgroundSize(height(width(Companion_instance_2, get_percent(100)), get_px(260)), Companion_instance_18.c2v()), Companion_instance_19.a2v());
  }
  function WorkItemImageContainerStyle$delegate$lambda$lambda_0() {
    _init_properties_WorkItem_kt__70azfo();
    return height(Companion_instance_2, get_px(300));
  }
  function WorkItemImageContainerStyle$delegate$lambda$lambda_1() {
    _init_properties_WorkItem_kt__70azfo();
    return height(Companion_instance_2, get_px(340));
  }
  function WorkItemImageContainerStyle$delegate$lambda$lambda_2() {
    _init_properties_WorkItem_kt__70azfo();
    return height(Companion_instance_2, get_px(380));
  }
  function WorkItemOverlayStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkItem_kt__70azfo();
    $this$ComponentStyle.w3d(WorkItemOverlayStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function WorkItemOverlayStyle$delegate$lambda$lambda() {
    _init_properties_WorkItem_kt__70azfo();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = textAlign(zIndex(position(tmp, tmp$ret$3), 2), Companion_instance_3.k2u());
    var tmp_1 = get_s(0.5);
    // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'ease-in-out';
    var tmp_2 = color(fillMaxSize(opacity(transition(tmp_0, [CSSTransition_init_$Create$('all', tmp_1, tmp$ret$7)]), 0)), Colors_instance.p39());
    return transform(tmp_2, WorkItemOverlayStyle$delegate$lambda$lambda$lambda);
  }
  function WorkItemOverlayStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_WorkItem_kt__70azfo();
    $this$transform.r2q(get_px(20));
    return Unit_instance;
  }
  function WorkItem$lambda$lambda($work) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1489668066, $changed, -1, 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous> (WorkItem.kt:109)');
        }
        var tmp_0 = classNames(fillMaxSize(Companion_instance_2), ['work-item-img', 'work-item-image']);
        Image($work.a45_1, tmp_0, null, null, null, null, false, null, $composer_0, 64, 252);
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
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function WorkItem$lambda$lambda_0($work) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-708592879, $changed, -1, 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous> (WorkItem.kt:122)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_TitleTextStyle()], $composer_0, 0);
        SpanText($work.x44_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp_1 = margin(toModifier_0(get_TextStyle(), [get_BodyLargeTextStyle()], $composer_0, 0), get_cssRem(0.5));
        SpanText($work.y44_1, tmp_1, null, null, $composer_0, 64, 12);
        var tmp0_modifier = margin(Companion_instance_2, get_cssRem(1));
        var tmp1_path = $work.z44_1;
        var tmp_2 = ComposableSingletons$WorkItemKt_getInstance().u44_1;
        LinkIconButton(tmp1_path, tmp0_modifier, null, null, tmp_2, null, $composer_0, 24640, 44);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function WorkItem$lambda($work) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(2027382696, $changed, -1, 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous> (WorkItem.kt:108)');
        }
        var tmp_0 = toModifier_0(get_WorkItemImageContainerStyle(), [], $composer_0, 64);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1489668066, true, WorkItem$lambda$lambda($work));
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
          // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_71(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.t1n();
        Box(tmp_0, null, null, tmp0, $composer_0, 3080, 6);
        var tmp_4 = classNames(toModifier_0(get_WorkItemShadowStyle(), [], $composer_0, 64), ['work-item-shadow']);
        Box(tmp_4, null, null, null, $composer_0, 8, 14);
        var tmp0_modifier = classNames(toModifier_0(get_WorkItemOverlayStyle(), [], $composer_0, 64), ['work-item-overlay']);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, -708592879, true, WorkItem$lambda$lambda_0($work));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.s1n(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.l1f(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.y1o();
        var tmp_6;
        if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.sections.works.components.WorkItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_72(dispatchReceiver_0);
          $composer_2.e1p(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.t1n();
        Column(tmp0_modifier, Center_instance, CenterHorizontally_instance, null, tmp0_0, $composer_0, 24584, 8);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function WorkItem$lambda_0($work, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WorkItem($work, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WorkItemStyle$factory() {
    return getPropertyCallableRef('WorkItemStyle', 0, KProperty0, function () {
      return get_WorkItemStyle();
    }, null);
  }
  function WorkItemShadowStyle$factory() {
    return getPropertyCallableRef('WorkItemShadowStyle', 0, KProperty0, function () {
      return get_WorkItemShadowStyle();
    }, null);
  }
  function WorkItemImageContainerStyle$factory() {
    return getPropertyCallableRef('WorkItemImageContainerStyle', 0, KProperty0, function () {
      return get_WorkItemImageContainerStyle();
    }, null);
  }
  function WorkItemOverlayStyle$factory() {
    return getPropertyCallableRef('WorkItemOverlayStyle', 0, KProperty0, function () {
      return get_WorkItemOverlayStyle();
    }, null);
  }
  var properties_initialized_WorkItem_kt_wvgsxy;
  function _init_properties_WorkItem_kt__70azfo() {
    if (!properties_initialized_WorkItem_kt_wvgsxy) {
      properties_initialized_WorkItem_kt_wvgsxy = true;
      WorkItemStyle$delegate = ComponentStyle_0(VOID, VOID, WorkItemStyle$delegate$lambda);
      WorkItemShadowStyle$delegate = ComponentStyle_0(VOID, VOID, WorkItemShadowStyle$delegate$lambda);
      WorkItemImageContainerStyle$delegate = ComponentStyle_0(VOID, VOID, WorkItemImageContainerStyle$delegate$lambda);
      WorkItemOverlayStyle$delegate = ComponentStyle_0(VOID, VOID, WorkItemOverlayStyle$delegate$lambda);
    }
  }
  function get_WorkItemsSimpleGridVariant() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return WorkItemsSimpleGridVariant$delegate.n2y(null, WorkItemsSimpleGridVariant$factory());
  }
  var WorkItemsSimpleGridVariant$delegate;
  function WorkItemsSimpleGridVariant$delegate$lambda($this$addVariant) {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    $this$addVariant.w3d(WorkItemsSimpleGridVariant$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, WorkItemsSimpleGridVariant$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, WorkItemsSimpleGridVariant$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, WorkItemsSimpleGridVariant$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, WorkItemsSimpleGridVariant$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, WorkItemsSimpleGridVariant$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    var tmp = margin(gap_0(Companion_instance_2, get_cssRem(2)), get_cssRem(4.75));
    return gridAutoRows(tmp, WorkItemsSimpleGridVariant$delegate$lambda$lambda$lambda);
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda$lambda($this$gridAutoRows) {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    $this$gridAutoRows.p2w(get_fr(1));
    return Unit_instance;
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda_0() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return margin(gap_0(Companion_instance_2, get_cssRem(1)), get_cssRem(3));
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda_1() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return margin(gap_0(Companion_instance_2, get_cssRem(1.25)), get_cssRem(3));
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda_2() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return margin(gap_0(Companion_instance_2, get_cssRem(1.5)), get_cssRem(3.5));
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda_3() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return margin(gap_0(Companion_instance_2, get_cssRem(2)), get_cssRem(4));
  }
  function WorkItemsSimpleGridVariant$delegate$lambda$lambda_4() {
    _init_properties_WorkItemsGridStyle_kt__577edg();
    return margin(gap_0(Companion_instance_2, get_cssRem(2)), get_cssRem(4.5));
  }
  function WorkItemsSimpleGridVariant$factory() {
    return getPropertyCallableRef('WorkItemsSimpleGridVariant', 0, KProperty0, function () {
      return get_WorkItemsSimpleGridVariant();
    }, null);
  }
  var properties_initialized_WorkItemsGridStyle_kt_mvaihq;
  function _init_properties_WorkItemsGridStyle_kt__577edg() {
    if (!properties_initialized_WorkItemsGridStyle_kt_mvaihq) {
      properties_initialized_WorkItemsGridStyle_kt_mvaihq = true;
      var tmp = get_SimpleGridStyle();
      WorkItemsSimpleGridVariant$delegate = addVariant_0(tmp, VOID, WorkItemsSimpleGridVariant$delegate$lambda);
    }
  }
  function get_IconButtonVariant() {
    _init_properties_IconButton_kt__dm2lqt();
    return IconButtonVariant$delegate.n2y(null, IconButtonVariant$factory());
  }
  var IconButtonVariant$delegate;
  function get_PrimaryIconButtonVariant() {
    _init_properties_IconButton_kt__dm2lqt();
    return PrimaryIconButtonVariant$delegate.n2y(null, PrimaryIconButtonVariant$factory());
  }
  var PrimaryIconButtonVariant$delegate;
  function IconButton(modifier, tooltipText, onClick, icon, $composer, $changed, $default) {
    _init_properties_IconButton_kt__dm2lqt();
    var modifier_0 = {_v: modifier};
    var tooltipText_0 = {_v: tooltipText};
    var onClick_0 = {_v: onClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(750342151);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(tooltipText_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(icon) ? 2048 : 1024);
    if (!(($default & 1) === 1) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (!(($default & 2) === 0)) {
        tooltipText_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        onClick_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(750342151, $dirty, -1, 'org.example.newportfolio.components.widgets.button.IconButton (IconButton.kt:63)');
      }
      $composer_0.s1n(-1475724671);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.IconButton.<anonymous>' call
        var value = IconButton$lambda(onClick_0);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var tmp_1 = modifier_0._v;
      var tmp_2 = get_IconButtonVariant();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.button.IconButton.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1322985463, true, IconButton$lambda_0(icon));
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
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.IconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_74(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.t1n();
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306432, 504);
      if (!(tooltipText_0._v == null)) {
        var tmp_6 = Companion_instance_20.v17();
        var tmp_7 = tooltipText_0._v;
        Tooltip(tmp_6, tmp_7, null, null, null, false, null, null, 0, 0, null, null, $composer_0, 8 | 112 & $dirty, 0, 4092);
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
      tmp1_safe_receiver.k1u(IconButton$lambda_1(modifier_0, tooltipText_0, onClick_0, icon, $changed, $default));
    }
  }
  function PrimaryIconButton(modifier, tooltipText, onClick, icon, $composer, $changed, $default) {
    _init_properties_IconButton_kt__dm2lqt();
    var modifier_0 = {_v: modifier};
    var tooltipText_0 = {_v: tooltipText};
    var onClick_0 = {_v: onClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1375127359);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(tooltipText_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(icon) ? 2048 : 1024);
    if (!(($default & 1) === 1) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (!(($default & 2) === 0)) {
        tooltipText_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        onClick_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1375127359, $dirty, -1, 'org.example.newportfolio.components.widgets.button.PrimaryIconButton (IconButton.kt:115)');
      }
      $composer_0.s1n(1108648905);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryIconButton.<anonymous>' call
        var value = PrimaryIconButton$lambda(onClick_0);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var tmp_1 = modifier_0._v;
      var tmp_2 = get_IconButtonVariant().f3g(get_PrimaryIconButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryIconButton.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1802399023, true, PrimaryIconButton$lambda_0(icon));
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
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryIconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_75(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.t1n();
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306432, 504);
      if (!(tooltipText_0._v == null)) {
        var tmp_6 = Companion_instance_20.v17();
        var tmp_7 = tooltipText_0._v;
        Tooltip(tmp_6, tmp_7, null, null, null, false, null, null, 0, 0, null, null, $composer_0, 8 | 112 & $dirty, 0, 4092);
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
      tmp1_safe_receiver.k1u(PrimaryIconButton$lambda_1(modifier_0, tooltipText_0, onClick_0, icon, $changed, $default));
    }
  }
  function IconButtonVariant$delegate$lambda($this$addVariant) {
    _init_properties_IconButton_kt__dm2lqt();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(IconButtonVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant);
    tmp.n3e(IconButtonVariant$delegate$lambda$lambda_0(colorPalette, $this$addVariant));
    var tmp_0 = get_active($this$addVariant);
    tmp_0.n3e(IconButtonVariant$delegate$lambda$lambda_1(colorPalette, $this$addVariant));
    return Unit_instance;
  }
  function IconButtonVariant$delegate$lambda$lambda() {
    _init_properties_IconButton_kt__dm2lqt();
    var tmp = Companion_instance_2;
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = width_0(tmp, 'auto');
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = background(height_0(tmp_0, 'auto'), Colors_instance.c39(), []);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = alignContent(tmp_1, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = justifyContent_0(tmp_2, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(padding_2(display(tmp_3, 'flex'), get_cssRem(0.35)), get_percent(50));
  }
  function IconButtonVariant$delegate$lambda$lambda_0($colorPalette, $this_addVariant) {
    return function () {
      return background(Companion_instance_2, shifted(get_overlay($colorPalette), $this_addVariant.h3f_1, 0.1), []);
    };
  }
  function IconButtonVariant$delegate$lambda$lambda_1($colorPalette, $this_addVariant) {
    return function () {
      return background(Companion_instance_2, shifted(get_overlay($colorPalette), $this_addVariant.h3f_1, 0.2), []);
    };
  }
  function PrimaryIconButtonVariant$delegate$lambda($this$addVariant) {
    _init_properties_IconButton_kt__dm2lqt();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(PrimaryIconButtonVariant$delegate$lambda$lambda(colorPalette));
    var tmp = get_hover($this$addVariant);
    tmp.n3e(PrimaryIconButtonVariant$delegate$lambda$lambda_0(colorPalette));
    var tmp_0 = get_active($this$addVariant);
    tmp_0.n3e(PrimaryIconButtonVariant$delegate$lambda$lambda_1(colorPalette));
    return Unit_instance;
  }
  function PrimaryIconButtonVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      return background(Companion_instance_2, get_brand($colorPalette).c41(), []);
    };
  }
  function PrimaryIconButtonVariant$delegate$lambda$lambda_0($colorPalette) {
    return function () {
      return background(Companion_instance_2, get_button($colorPalette).x2p(), []);
    };
  }
  function PrimaryIconButtonVariant$delegate$lambda$lambda_1($colorPalette) {
    return function () {
      return background(Companion_instance_2, get_button($colorPalette).j3y(), []);
    };
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_instance;
    };
  }
  function IconButton$lambda_0($icon) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1322985463, $changed, -1, 'org.example.newportfolio.components.widgets.button.IconButton.<anonymous> (IconButton.kt:71)');
        }
        $icon($composer_0, 0);
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
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function IconButton$lambda_1($modifier, $tooltipText, $onClick, $icon, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton($modifier._v, $tooltipText._v, $onClick._v, $icon, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function PrimaryIconButton$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_instance;
    };
  }
  function PrimaryIconButton$lambda_0($icon) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1802399023, $changed, -1, 'org.example.newportfolio.components.widgets.button.PrimaryIconButton.<anonymous> (IconButton.kt:123)');
        }
        $icon($composer_0, 0);
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
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function PrimaryIconButton$lambda_1($modifier, $tooltipText, $onClick, $icon, $$changed, $$default) {
    return function ($composer, $force) {
      PrimaryIconButton($modifier._v, $tooltipText._v, $onClick._v, $icon, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function IconButtonVariant$factory() {
    return getPropertyCallableRef('IconButtonVariant', 0, KProperty0, function () {
      return get_IconButtonVariant();
    }, null);
  }
  function PrimaryIconButtonVariant$factory() {
    return getPropertyCallableRef('PrimaryIconButtonVariant', 0, KProperty0, function () {
      return get_PrimaryIconButtonVariant();
    }, null);
  }
  var properties_initialized_IconButton_kt_ws0bv7;
  function _init_properties_IconButton_kt__dm2lqt() {
    if (!properties_initialized_IconButton_kt_ws0bv7) {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      var tmp = get_ButtonStyle();
      IconButtonVariant$delegate = addVariant_0(tmp, VOID, IconButtonVariant$delegate$lambda);
      var tmp_0 = get_ButtonStyle();
      PrimaryIconButtonVariant$delegate = addVariant_0(tmp_0, VOID, PrimaryIconButtonVariant$delegate$lambda);
    }
  }
  function get_LinkIconButtonVariant() {
    _init_properties_LinkIconButton_kt__2a96d7();
    return LinkIconButtonVariant$delegate.n2y(null, LinkIconButtonVariant$factory());
  }
  var LinkIconButtonVariant$delegate;
  function LinkIconButton(path, modifier, tooltipText, onClick_0, icon, openLinkStrategy, $composer, $changed, $default) {
    _init_properties_LinkIconButton_kt__2a96d7();
    var modifier_0 = {_v: modifier};
    var tooltipText_0 = {_v: tooltipText};
    var onClick_1 = {_v: onClick_0};
    var openLinkStrategy_0 = {_v: openLinkStrategy};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(442791985);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.l1f(tooltipText_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_1._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n1o(icon) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.l1f(openLinkStrategy_0._v) ? 131072 : 65536);
    if (!(($default & 2) === 2) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.n1n()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (!(($default & 4) === 0)) {
        tooltipText_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        onClick_1._v = null;
      }
      if (!(($default & 32) === 0)) {
        openLinkStrategy_0._v = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(442791985, $dirty, -1, 'org.example.newportfolio.components.widgets.button.LinkIconButton (LinkIconButton.kt:41)');
      }
      var tmp0_variant = get_LinkIconButtonVariant();
      var tmp = modifier_0._v;
      $composer_0.s1n(-169998753);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>' call
        var value = LinkIconButton$lambda(onClick_1);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      var tmp1_modifier = onClick(tmp, tmp0_group);
      var tmp_2 = openLinkStrategy_0._v;
      var tmp_3 = openLinkStrategy_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 499209216, true, LinkIconButton$lambda_0(icon, tooltipText_0));
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
      var tmp_5;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_76(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.t1n();
      Link_0(path, tmp1_modifier, tmp0_variant, tmp_2, tmp_3, null, false, null, tmp0, $composer_0, 100663360 | 14 & $dirty | 0 | 7168 & $dirty >> 6 | 57344 & $dirty >> 3, 224);
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
      tmp1_safe_receiver.k1u(LinkIconButton$lambda_1(path, modifier_0, tooltipText_0, onClick_1, icon, openLinkStrategy_0, $changed, $default));
    }
  }
  function LinkIconButton_0(path, iconRes, modifier, iconModifier, tooltipText, onClick_0, openLinkStrategy, $composer, $changed, $default) {
    _init_properties_LinkIconButton_kt__2a96d7();
    var modifier_0 = {_v: modifier};
    var iconModifier_0 = {_v: iconModifier};
    var tooltipText_0 = {_v: tooltipText};
    var onClick_1 = {_v: onClick_0};
    var openLinkStrategy_0 = {_v: openLinkStrategy};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-951844213);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(iconRes) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.l1f(tooltipText_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick_1._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.l1f(openLinkStrategy_0._v) ? 1048576 : 524288);
    if (!(($default & 12) === 12) ? true : !(($dirty & 2995931) === 599186) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance_2;
        }
        if (!(($default & 8) === 0)) {
          iconModifier_0._v = toModifier_0(get_IconStyle(), [], $composer_0, 64);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          tooltipText_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          onClick_1._v = null;
        }
        if (!(($default & 64) === 0)) {
          openLinkStrategy_0._v = OpenLinkStrategy_IN_NEW_TAB_getInstance();
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-951844213, $dirty, -1, 'org.example.newportfolio.components.widgets.button.LinkIconButton (LinkIconButton.kt:68)');
      }
      var tmp0_variant = get_LinkIconButtonVariant();
      var tmp = modifier_0._v;
      $composer_0.s1n(-169998011);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 458752) === 131072;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>' call
        var value = LinkIconButton$lambda_2(onClick_1);
        this_0.e1p(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.t1n();
      var tmp1_modifier = onClick(tmp, tmp0_group);
      var tmp_2 = openLinkStrategy_0._v;
      var tmp_3 = openLinkStrategy_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1871018214, true, LinkIconButton$lambda_3(iconRes, iconModifier_0, tooltipText_0));
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
      var tmp_5;
      if (invalid_0 ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_77(dispatchReceiver);
        $composer_1.e1p(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.t1n();
      Link_0(path, tmp1_modifier, tmp0_variant, tmp_2, tmp_3, null, false, null, tmp0, $composer_0, 100663360 | 14 & $dirty | 0 | 7168 & $dirty >> 9 | 57344 & $dirty >> 6, 224);
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
      tmp1_safe_receiver.k1u(LinkIconButton$lambda_4(path, iconRes, modifier_0, iconModifier_0, tooltipText_0, onClick_1, openLinkStrategy_0, $changed, $default));
    }
  }
  function LinkIconButtonVariant$delegate$lambda($this$addVariant) {
    _init_properties_LinkIconButton_kt__2a96d7();
    $this$addVariant.w3d(LinkIconButtonVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant);
    tmp.n3e(LinkIconButtonVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_active($this$addVariant);
    tmp_0.n3e(LinkIconButtonVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function LinkIconButtonVariant$delegate$lambda$lambda() {
    _init_properties_LinkIconButton_kt__2a96d7();
    return transition(Companion_instance_2, [CSSTransition_init_$Create$('0.15s')]);
  }
  function LinkIconButtonVariant$delegate$lambda$lambda_0() {
    _init_properties_LinkIconButton_kt__2a96d7();
    return scale(Companion_instance_2, 1.1);
  }
  function LinkIconButtonVariant$delegate$lambda$lambda_1() {
    _init_properties_LinkIconButton_kt__2a96d7();
    return scale(Companion_instance_2, 1.2);
  }
  function LinkIconButton$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_instance;
    };
  }
  function LinkIconButton$lambda_0($icon, $tooltipText) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(499209216, $changed, -1, 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous> (LinkIconButton.kt:49)');
        }
        $icon($composer_0, 0);
        if (!($tooltipText._v == null)) {
          var tmp_0 = Companion_instance_20.v17();
          var tmp_1 = $tooltipText._v;
          Tooltip(tmp_0, tmp_1, null, null, null, false, null, null, 0, 0, null, null, $composer_0, 8, 0, 4092);
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function LinkIconButton$lambda_1($path, $modifier, $tooltipText, $onClick, $icon, $openLinkStrategy, $$changed, $$default) {
    return function ($composer, $force) {
      LinkIconButton($path, $modifier._v, $tooltipText._v, $onClick._v, $icon, $openLinkStrategy._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LinkIconButton$lambda_2($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_instance;
    };
  }
  function LinkIconButton$lambda_3($iconRes, $iconModifier, $tooltipText) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1871018214, $changed, -1, 'org.example.newportfolio.components.widgets.button.LinkIconButton.<anonymous> (LinkIconButton.kt:76)');
        }
        var tmp_0 = $iconModifier._v;
        Image($iconRes, tmp_0, null, null, null, null, false, null, $composer_0, 64, 252);
        if (!($tooltipText._v == null)) {
          var tmp_1 = Companion_instance_20.v17();
          var tmp_2 = $tooltipText._v;
          Tooltip(tmp_1, tmp_2, null, null, null, false, null, null, 0, 0, null, null, $composer_0, 8, 0, 4092);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function LinkIconButton$lambda_4($path, $iconRes, $modifier, $iconModifier, $tooltipText, $onClick, $openLinkStrategy, $$changed, $$default) {
    return function ($composer, $force) {
      LinkIconButton_0($path, $iconRes, $modifier._v, $iconModifier._v, $tooltipText._v, $onClick._v, $openLinkStrategy._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LinkIconButtonVariant$factory() {
    return getPropertyCallableRef('LinkIconButtonVariant', 0, KProperty0, function () {
      return get_LinkIconButtonVariant();
    }, null);
  }
  var properties_initialized_LinkIconButton_kt_mbvc8p;
  function _init_properties_LinkIconButton_kt__2a96d7() {
    if (!properties_initialized_LinkIconButton_kt_mbvc8p) {
      properties_initialized_LinkIconButton_kt_mbvc8p = true;
      var tmp = get_LinkStyle();
      LinkIconButtonVariant$delegate = addVariant_0(tmp, VOID, LinkIconButtonVariant$delegate$lambda);
    }
  }
  function get_PrimaryButtonVariant() {
    _init_properties_PrimaryButton_kt__pcr42q();
    return PrimaryButtonVariant$delegate.n2y(null, PrimaryButtonVariant$factory());
  }
  var PrimaryButtonVariant$delegate;
  function get_PrimaryButtonWithIconPadding() {
    _init_properties_PrimaryButton_kt__pcr42q();
    return PrimaryButtonWithIconPadding$delegate.n2y(null, PrimaryButtonWithIconPadding$factory());
  }
  var PrimaryButtonWithIconPadding$delegate;
  function PrimaryButton(modifier, text, icon, onClick, $composer, $changed, $default) {
    _init_properties_PrimaryButton_kt__pcr42q();
    var modifier_0 = {_v: modifier};
    var icon_0 = {_v: icon};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-2045313866);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.l1f(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1o(icon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n1o(onClick) ? 2048 : 1024);
    if (!(($default & 1) === 1) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (!(($default & 4) === 0)) {
        icon_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2045313866, $dirty, -1, 'org.example.newportfolio.components.widgets.button.PrimaryButton (PrimaryButton.kt:51)');
      }
      var tmp0_variant = thenIf_0(get_PrimaryButtonVariant(), !(icon_0._v == null), get_PrimaryButtonWithIconPadding());
      var tmp = modifier_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1089265498, true, PrimaryButton$lambda(text, icon_0));
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
        // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.e1p(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.t1n();
      Button(onClick, tmp, tmp0_variant, null, false, null, null, null, null, tmp0, $composer_0, 805306432 | 14 & $dirty >> 9 | 0, 504);
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
      tmp0_safe_receiver.k1u(PrimaryButton$lambda_0(modifier_0, text, icon_0, onClick, $changed, $default));
    }
  }
  function PrimaryButtonVariant$delegate$lambda($composer, $changed) {
    _init_properties_PrimaryButton_kt__pcr42q();
    var $composer_0 = $composer;
    $composer_0.s1n(-1600166739);
    if (isTraceInProgress()) {
      traceEventStart(-1600166739, $changed, -1, 'org.example.newportfolio.components.widgets.button.PrimaryButtonVariant$delegate.<anonymous> (PrimaryButton.kt:26)');
    }
    var tmp0 = toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle()], $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function PrimaryButtonVariant$delegate$lambda_0($this$addVariant) {
    _init_properties_PrimaryButton_kt__pcr42q();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(PrimaryButtonVariant$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function PrimaryButtonVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      var tmp = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = width_0(tmp, 'auto');
      // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_$receiver = color(background(height_0(tmp_0, 'auto'), get_brand($colorPalette).c41(), []), get_brand($colorPalette).b45());
      var tmp1_leftRight = get_em(2.25);
      var tmp2_topBottom = get_em(1.1);
      return padding_1(tmp0_$receiver, tmp2_topBottom, tmp1_leftRight);
    };
  }
  function PrimaryButtonWithIconPadding$delegate$lambda($this$addVariant) {
    _init_properties_PrimaryButton_kt__pcr42q();
    $this$addVariant.w3d(PrimaryButtonWithIconPadding$delegate$lambda$lambda);
    return Unit_instance;
  }
  function PrimaryButtonWithIconPadding$delegate$lambda$lambda() {
    _init_properties_PrimaryButton_kt__pcr42q();
    var tmp1_left = get_em(2.25);
    var tmp2_right = get_em(2);
    var tmp3_top = get_em(1);
    var tmp4_bottom = get_em(1);
    return padding_0(Companion_instance_2, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
  }
  function PrimaryButton$lambda$lambda($text, $icon) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1586587773, $changed, -1, 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous>.<anonymous> (PrimaryButton.kt:61)');
        }
        Text($text, $composer_0, 0);
        var tmp0_safe_receiver = $icon._v;
        tmp0_safe_receiver == null || tmp0_safe_receiver($composer_0, 0);
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
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function PrimaryButton$lambda($text, $icon) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(-1089265498, $changed, -1, 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous> (PrimaryButton.kt:57)');
        }
        var tmp_0 = gap_0(Companion_instance_2, get_px(12));
        var tmp_1 = CenterVertically_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1586587773, true, PrimaryButton$lambda$lambda($text, $icon));
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
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.widgets.button.PrimaryButton.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.t1n();
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24584, 10);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function PrimaryButton$lambda_0($modifier, $text, $icon, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      PrimaryButton($modifier._v, $text, $icon._v, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function PrimaryButtonVariant$factory() {
    return getPropertyCallableRef('PrimaryButtonVariant', 0, KProperty0, function () {
      return get_PrimaryButtonVariant();
    }, null);
  }
  function PrimaryButtonWithIconPadding$factory() {
    return getPropertyCallableRef('PrimaryButtonWithIconPadding', 0, KProperty0, function () {
      return get_PrimaryButtonWithIconPadding();
    }, null);
  }
  var properties_initialized_PrimaryButton_kt_hr1478;
  function _init_properties_PrimaryButton_kt__pcr42q() {
    if (!properties_initialized_PrimaryButton_kt_hr1478) {
      properties_initialized_PrimaryButton_kt_hr1478 = true;
      var tmp = get_ButtonStyle();
      var tmp_0 = PrimaryButtonVariant$delegate$lambda;
      PrimaryButtonVariant$delegate = addVariant_1(tmp, tmp_0, PrimaryButtonVariant$delegate$lambda_0);
      var tmp_1 = get_ButtonStyle();
      PrimaryButtonWithIconPadding$delegate = addVariant_0(tmp_1, VOID, PrimaryButtonWithIconPadding$delegate$lambda);
    }
  }
  function get_SectionContainerStyle() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return SectionContainerStyle$delegate.n2y(null, SectionContainerStyle$factory());
  }
  var SectionContainerStyle$delegate;
  function SectionContainer(section, modifier, horizontalAlignment, verticalArrangement, variant, content, $composer, $changed, $default) {
    _init_properties_SectionContainer_kt__j7fsqk();
    var modifier_0 = {_v: modifier};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var variant_0 = {_v: variant};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-138432055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(section) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.l1f(variant_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.n1o(content_0._v) ? 131072 : 65536);
    if (!(($default & 14) === 14) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance_2;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = CenterHorizontally_instance;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          verticalArrangement_0._v = Top_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          content_0._v = ComposableSingletons$SectionContainerKt_getInstance().c45_1;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-138432055, $dirty, -1, 'org.example.newportfolio.components.widgets.section.SectionContainer (SectionContainer.kt:53)');
      }
      var tmp0_modifier = id(toModifier_0(get_SectionContainerStyle(), [variant_0._v], $composer_0, 0).v37(modifier_0._v), section.p42_1);
      var tmp = verticalArrangement_0._v;
      var tmp_0 = horizontalAlignment_0._v;
      Column(tmp0_modifier, tmp, tmp_0, null, content_0._v, $composer_0, 584 | 57344 & $dirty >> 3, 8);
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
      tmp0_safe_receiver.k1u(SectionContainer$lambda(section, modifier_0, horizontalAlignment_0, verticalArrangement_0, variant_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$SectionContainerKt$lambda_1$lambda_2pzdu8($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1531117228, $changed, -1, 'org.example.newportfolio.components.widgets.section.ComposableSingletons$SectionContainerKt.lambda-1.<anonymous> (SectionContainer.kt:52)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SectionContainerKt() {
    ComposableSingletons$SectionContainerKt_instance = this;
    var tmp = this;
    tmp.c45_1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(1531117228, false, ComposableSingletons$SectionContainerKt$lambda_1$lambda_2pzdu8));
  }
  var ComposableSingletons$SectionContainerKt_instance;
  function ComposableSingletons$SectionContainerKt_getInstance() {
    if (ComposableSingletons$SectionContainerKt_instance == null)
      new ComposableSingletons$SectionContainerKt();
    return ComposableSingletons$SectionContainerKt_instance;
  }
  function SectionContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SectionContainer_kt__j7fsqk();
    $this$ComponentStyle.w3d(SectionContainerStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, SectionContainerStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, SectionContainerStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, SectionContainerStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, SectionContainerStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, SectionContainerStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function SectionContainerStyle$delegate$lambda$lambda() {
    _init_properties_SectionContainer_kt__j7fsqk();
    var tmp = width(Companion_instance_2, get_percent(100));
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return classNames(maxWidth(height_0(tmp, 'auto'), get_cssRem(130)), ['section-container']);
  }
  function SectionContainerStyle$delegate$lambda$lambda_0() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return padding_1(Companion_instance_2, VOID, get_px(16));
  }
  function SectionContainerStyle$delegate$lambda$lambda_1() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return padding_1(Companion_instance_2, VOID, get_px(28));
  }
  function SectionContainerStyle$delegate$lambda$lambda_2() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return padding_1(Companion_instance_2, VOID, get_px(48));
  }
  function SectionContainerStyle$delegate$lambda$lambda_3() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return padding_1(Companion_instance_2, VOID, get_px(94));
  }
  function SectionContainerStyle$delegate$lambda$lambda_4() {
    _init_properties_SectionContainer_kt__j7fsqk();
    return padding_1(Companion_instance_2, VOID, get_px(134));
  }
  function SectionContainer$lambda($section, $modifier, $horizontalAlignment, $verticalArrangement, $variant, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SectionContainer($section, $modifier._v, $horizontalAlignment._v, $verticalArrangement._v, $variant._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SectionContainerStyle$factory() {
    return getPropertyCallableRef('SectionContainerStyle', 0, KProperty0, function () {
      return get_SectionContainerStyle();
    }, null);
  }
  var properties_initialized_SectionContainer_kt_jf4e1u;
  function _init_properties_SectionContainer_kt__j7fsqk() {
    if (!properties_initialized_SectionContainer_kt_jf4e1u) {
      properties_initialized_SectionContainer_kt_jf4e1u = true;
      SectionContainerStyle$delegate = ComponentStyle_0(VOID, VOID, SectionContainerStyle$delegate$lambda);
    }
  }
  function get_SkillItemStyle() {
    _init_properties_SkillItem_kt__d9m7se();
    return SkillItemStyle$delegate.n2y(null, SkillItemStyle$factory());
  }
  var SkillItemStyle$delegate;
  function get_SkillItemImageVariant() {
    _init_properties_SkillItem_kt__d9m7se();
    return SkillItemImageVariant$delegate.n2y(null, SkillItemImageVariant$factory());
  }
  var SkillItemImageVariant$delegate;
  function SkillItem(skill, colorMode, modifier, horizontalArrangement, $composer, $changed, $default) {
    _init_properties_SkillItem_kt__d9m7se();
    var colorMode_0 = {_v: colorMode};
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-491672226);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.l1f(skill) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.l1f(colorMode_0._v) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 12) === 12) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 2) === 0)) {
          colorMode_0._v = Companion_instance_0.r3a($composer_0, 8);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance_2;
        }
        if (!(($default & 8) === 0)) {
          horizontalArrangement_0._v = Start_instance_0;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-491672226, $dirty, -1, 'org.example.newportfolio.components.widgets.skill.SkillItem (SkillItem.kt:73)');
      }
      $composer_0.s1n(-856829862);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.y1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.e1p(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.t1n();
      var hovered$delegate = tmp0_group;
      var palette = toPalette(colorMode_0._v);
      var tmp_1 = toModifier_0(get_SkillItemStyle(), [], $composer_0, 64).v37(modifier_0._v);
      $composer_0.s1n(-856829690);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.y1o();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>' call
        var value_0 = SkillItem$lambda_1(hovered$delegate);
        this_1.e1p(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.t1n();
      var tmp_4 = onMouseEnter(tmp_1, tmp1_group);
      $composer_0.s1n(-856829645);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.y1o();
      var tmp_5;
      if (false ? true : it_1 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>' call
        var value_1 = SkillItem$lambda_2(hovered$delegate);
        this_2.e1p(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.t1n();
      var tmp_7 = onMouseLeave(tmp_4, tmp2_group);
      var tmp_8 = SkillItem$lambda(hovered$delegate);
      var tmp_9 = Companion_instance_2;
      $composer_0.s1n(-856829540);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.y1o();
      var tmp_10;
      if (false ? true : it_2 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>' call
        var value_2 = SkillItem$lambda_3;
        this_3.e1p(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.t1n();
      var tmp0_$receiver = transform(tmp_9, tmp3_group);
      var tmp1_color = get_brand(palette).c41().z38().y38(VOID, VOID, VOID, 0.5);
      var tmp2_blurRadius = get_px(16);
      var tmp3_spreadRadius = get_px(3);
      var tmp_12 = thenIf(tmp_7, tmp_8, boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color));
      var tmp_13 = Companion_getInstance_0();
      var tmp_14 = get_s(0.28);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$19 = 'ease-in-out';
      var tmp_15 = tmp_13.e2z('transform', tmp_14, tmp$ret$19);
      var tmp_16 = Companion_getInstance_0();
      var tmp_17 = get_s(0.32);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$23 = 'ease-in-out';
      var tmp_18 = transition_0(tmp_12, [tmp_15, tmp_16.e2z('box-shadow', tmp_17, tmp$ret$23)]);
      var tmp_19 = horizontalArrangement_0._v;
      var tmp_20 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>' call
      var tmp_21 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_21, 1859465851, true, SkillItem$lambda_4(colorMode_0, skill));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.s1n(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.l1f(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.y1o();
      var tmp_22;
      if (invalid ? true : it_3 === Companion_getInstance().k1i_1) {
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_82(dispatchReceiver);
        $composer_1.e1p(value_3);
        tmp_22 = value_3;
      } else {
        tmp_22 = it_3;
      }
      var tmp_23 = tmp_22;
      var tmp0 = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
      $composer_1.t1n();
      Row(tmp_18, tmp_19, tmp_20, null, tmp0, $composer_0, 24648, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    var tmp4_safe_receiver = $composer_0.n1p();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.k1u(SkillItem$lambda_5(skill, colorMode_0, modifier_0, horizontalArrangement_0, $changed, $default));
    }
  }
  function SkillItem$lambda($hovered$delegate) {
    _init_properties_SkillItem_kt__d9m7se();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hovered$delegate.p2();
  }
  function SkillItem$lambda_0($hovered$delegate, value) {
    _init_properties_SkillItem_kt__d9m7se();
    getLocalDelegateReference('hovered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $hovered$delegate.c10(value);
    return Unit_instance;
  }
  function SkillItemStyle$delegate$lambda($composer, $changed) {
    _init_properties_SkillItem_kt__d9m7se();
    var $composer_0 = $composer;
    $composer_0.s1n(785431036);
    if (isTraceInProgress()) {
      traceEventStart(785431036, $changed, -1, 'org.example.newportfolio.components.widgets.skill.SkillItemStyle$delegate.<anonymous> (SkillItem.kt:43)');
    }
    var tmp0 = toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle()], $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t1n();
    return tmp0;
  }
  function SkillItemStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_SkillItem_kt__d9m7se();
    $this$ComponentStyle.w3d(SkillItemStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function SkillItemStyle$delegate$lambda$lambda() {
    _init_properties_SkillItem_kt__d9m7se();
    return maxWidth(Companion_instance_2, get_em(12.5));
  }
  function SkillItemImageVariant$delegate$lambda($this$addVariant) {
    _init_properties_SkillItem_kt__d9m7se();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, SkillItemImageVariant$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, SkillItemImageVariant$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, SkillItemImageVariant$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, SkillItemImageVariant$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, SkillItemImageVariant$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function SkillItemImageVariant$delegate$lambda$lambda() {
    _init_properties_SkillItem_kt__d9m7se();
    return size(Companion_instance_2, get_cssRem(1.65));
  }
  function SkillItemImageVariant$delegate$lambda$lambda_0() {
    _init_properties_SkillItem_kt__d9m7se();
    return size(Companion_instance_2, get_cssRem(1.75));
  }
  function SkillItemImageVariant$delegate$lambda$lambda_1() {
    _init_properties_SkillItem_kt__d9m7se();
    return size(Companion_instance_2, get_cssRem(2));
  }
  function SkillItemImageVariant$delegate$lambda$lambda_2() {
    _init_properties_SkillItem_kt__d9m7se();
    return size(Companion_instance_2, get_cssRem(2.25));
  }
  function SkillItemImageVariant$delegate$lambda$lambda_3() {
    _init_properties_SkillItem_kt__d9m7se();
    return size(Companion_instance_2, get_cssRem(2.25));
  }
  function SkillItem$lambda_1($hovered$delegate) {
    return function (it) {
      SkillItem$lambda_0($hovered$delegate, true);
      return Unit_instance;
    };
  }
  function SkillItem$lambda_2($hovered$delegate) {
    return function (it) {
      SkillItem$lambda_0($hovered$delegate, false);
      return Unit_instance;
    };
  }
  function SkillItem$lambda_3($this$transform) {
    _init_properties_SkillItem_kt__d9m7se();
    $this$transform.r2q(get_px(-3));
    $this$transform.p2q(1.06);
    $this$transform.o2q(get_deg(-2));
    return Unit_instance;
  }
  function SkillItem$lambda$lambda($skill) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(412790884, $changed, -1, 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>.<anonymous> (SkillItem.kt:101)');
        }
        var tmp_0 = toModifier_0(get_TextStyle(), [get_LabelLargeTextStyle(), get_TextStylePrimaryColor()], $composer_0, 0);
        SpanText($skill.f45_1, tmp_0, null, null, $composer_0, 64, 12);
        var tmp_1 = toModifier_0(get_TextStyle(), [get_BodySmallTextStyle(), get_TextStyleSecondaryColor()], $composer_0, 0);
        SpanText($skill.g45_1, tmp_1, null, null, $composer_0, 64, 12);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SkillItem$lambda_4($colorMode, $skill) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
        if (isTraceInProgress()) {
          traceEventStart(1859465851, $changed, -1, 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous> (SkillItem.kt:92)');
        }
        var tmp_0 = $colorMode._v.g3i() ? $skill.h45_1 : $skill.i45_1;
        var tmp_1 = get_SkillItemImageVariant();
        Image(tmp_0, null, tmp_1, null, null, null, false, null, $composer_0, 0, 250);
        var tmp0_modifier = margin_0(Companion_instance_2, VOID, VOID, VOID, get_cssRem(0.75));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 412790884, true, SkillItem$lambda$lambda($skill));
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
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance().k1i_1) {
          // Inline function 'org.example.newportfolio.components.widgets.skill.SkillItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_81(dispatchReceiver);
          $composer_1.e1p(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.t1n();
        Column(tmp0_modifier, SpaceBetween_instance, Start_instance, null, tmp0, $composer_0, 24584, 8);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e1i();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function SkillItem$lambda_5($skill, $colorMode, $modifier, $horizontalArrangement, $$changed, $$default) {
    return function ($composer, $force) {
      SkillItem($skill, $colorMode._v, $modifier._v, $horizontalArrangement._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SkillItemStyle$factory() {
    return getPropertyCallableRef('SkillItemStyle', 0, KProperty0, function () {
      return get_SkillItemStyle();
    }, null);
  }
  function SkillItemImageVariant$factory() {
    return getPropertyCallableRef('SkillItemImageVariant', 0, KProperty0, function () {
      return get_SkillItemImageVariant();
    }, null);
  }
  var properties_initialized_SkillItem_kt_rimotw;
  function _init_properties_SkillItem_kt__d9m7se() {
    if (!properties_initialized_SkillItem_kt_rimotw) {
      properties_initialized_SkillItem_kt_rimotw = true;
      var tmp = SkillItemStyle$delegate$lambda;
      SkillItemStyle$delegate = ComponentStyle(tmp, VOID, SkillItemStyle$delegate$lambda_0);
      var tmp_0 = get_ImageStyle();
      SkillItemImageVariant$delegate = addVariant_0(tmp_0, VOID, SkillItemImageVariant$delegate$lambda);
    }
  }
  function parseMonthYear($this, raw) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(raw) ? raw : THROW_CCE()));
    var parts = split_0(tmp$ret$0, [' ']);
    if (!(parts.j() === 2))
      return null;
    var monthStr = parts.k(0);
    var yearStr = parts.k(1);
    var tmp0_elvis_lhs = $this.j45_1.v2(monthStr);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var month = tmp;
    var tmp1_elvis_lhs = toIntOrNull(yearStr);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var year = tmp_0;
    return to(month, year);
  }
  function nowMonthYear($this) {
    var now = new Date();
    var month = now.getMonth() + 1 | 0;
    var year = now.getFullYear();
    return to(month, year);
  }
  function computeTotalMonths($this, from, to) {
    var tmp0_elvis_lhs = parseMonthYear($this, from);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_container = tmp;
    var fromMonth = tmp1_container.le();
    var fromYear = tmp1_container.me();
    var tmp_0;
    if (equals_0(to, 'PRESENT', true)) {
      tmp_0 = nowMonthYear($this);
    } else {
      var tmp2_elvis_lhs = parseMonthYear($this, to);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        return 0;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    var tmp3_container = tmp_0;
    var toMonth = tmp3_container.le();
    var toYear = tmp3_container.me();
    var startIndex = imul(fromYear, 12) + (fromMonth - 1 | 0) | 0;
    var endIndex = imul(toYear, 12) + (toMonth - 1 | 0) | 0;
    var diff = (endIndex - startIndex | 0) + 1 | 0;
    return diff < 0 ? 0 : diff;
  }
  function formatMonths($this, total) {
    if (total <= 0)
      return '0 months';
    var years = total / 12 | 0;
    var months = total % 12 | 0;
    var yearPart;
    switch (years) {
      case 0:
        yearPart = null;
        break;
      case 1:
        yearPart = '1 year';
        break;
      default:
        yearPart = '' + years + ' years';
        break;
    }
    var monthPart;
    switch (months) {
      case 0:
        monthPart = null;
        break;
      case 1:
        monthPart = '1 month';
        break;
      default:
        monthPart = '' + months + ' months';
        break;
    }
    return joinToString(listOfNotNull([yearPart, monthPart]), ' and ');
  }
  var Experience_First_instance;
  var Experience_Second_instance;
  var Experience_Third_instance;
  function Companion() {
    Companion_instance_25 = this;
    this.j45_1 = mapOf_0([to('JAN', 1), to('FEB', 2), to('MAR', 3), to('APR', 4), to('MAY', 5), to('JUN', 6), to('JUL', 7), to('AUG', 8), to('SEP', 9), to('OCT', 10), to('NOV', 11), to('DEC', 12), to('Jan', 1), to('Feb', 2), to('Mar', 3), to('Apr', 4), to('May', 5), to('Jun', 6), to('Jul', 7), to('Aug', 8), to('Sep', 9), to('Oct', 10), to('Nov', 11), to('Dec', 12)]);
  }
  var Companion_instance_25;
  function Companion_getInstance_1() {
    Experience_initEntries();
    if (Companion_instance_25 == null)
      new Companion();
    return Companion_instance_25;
  }
  function values() {
    return [Experience_First_getInstance(), Experience_Second_getInstance(), Experience_Third_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_instance;
    Experience_entriesInitialized = true;
    Experience_First_instance = new Experience('First', 0, '01', 'Mobile Application Developer', 'Inside Tech', 'Aug 2024', 'PRESENT', 'Developing two production-ready mobile applications using Kotlin Multiplatform, Flutter,\nand Jetpack Compose, applying Clean Architecture and reusable UI components.\nDelivering scalable features in collaboration with backend/design teams.\nImproved app performance by 25% through smart caching and background sync strategies.\nApply Clean Architecture and create reusable UI components.\nDeveloped core features such as room booking, staff management, and reporting of a hotel\nmanagement app using Jetpack Compose and MVVM.\nCollaborated in Agile sprints with backend developers to ensure smooth integrations.', listOf(['Kotlin', 'KMP', 'Jetpack Compose', 'SwiftUI', 'Git', 'GitHub', 'Flutter', 'Dart']));
    Experience_Second_instance = new Experience('Second', 1, '02', 'Software Engineer Intern', 'Manara', 'Dec 2023', 'Jun 2024', 'Focused on advanced algorithms, data structures, and problem-solving.\nEnhanced critical thinking and technical skills through hands-on coding challenges on LeetCode.', listOf(['Kotlin', 'Java', 'Jetpack Compose', 'XML', 'MVVM', 'Git', 'GitHub']));
    Experience_Third_instance = new Experience('Third', 2, '03', 'Android Developer Intern', 'The Chance', 'JAN 2023', 'Oct 2023', 'Designed and developed native Android and cross-platform mobile applications.\nLed team projects, ensuring adherence to deadlines and code quality standards.\nMentored team members, providing code reviews and guidance on mobile development best practices.', listOf(['Kotlin', 'Compose', 'XML', 'MVVM', 'Firebase', 'Git', 'GitHub']));
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function Experience(name, ordinal, number, jobPosition, company, from, to, description, skills) {
    Enum.call(this, name, ordinal);
    this.x41_1 = number;
    this.y41_1 = jobPosition;
    this.z41_1 = company;
    this.a42_1 = from;
    this.b42_1 = to;
    this.c42_1 = description;
    this.d42_1 = skills;
  }
  protoOf(Experience).k45 = function () {
    return computeTotalMonths(Companion_getInstance_1(), this.a42_1, this.b42_1);
  };
  protoOf(Experience).e42 = function () {
    return formatMonths(Companion_getInstance_1(), this.k45());
  };
  function Experience_First_getInstance() {
    Experience_initEntries();
    return Experience_First_instance;
  }
  function Experience_Second_getInstance() {
    Experience_initEntries();
    return Experience_Second_instance;
  }
  function Experience_Third_getInstance() {
    Experience_initEntries();
    return Experience_Third_instance;
  }
  var Section_Start_instance;
  var Section_Works_instance;
  var Section_Experience_instance;
  var Section_Education_instance;
  var Section_About_instance;
  var Section_Contact_instance;
  function values_0() {
    return [Section_Start_getInstance(), Section_Works_getInstance(), Section_Experience_getInstance(), Section_Education_getInstance(), Section_About_getInstance(), Section_Contact_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_instance;
    Section_entriesInitialized = true;
    Section_Start_instance = new Section('Start', 0, 'Start', 'start');
    Section_Works_instance = new Section('Works', 1, 'Works', 'works');
    Section_Experience_instance = new Section('Experience', 2, 'Experience', 'experience');
    Section_Education_instance = new Section('Education', 3, 'Education', 'education');
    Section_About_instance = new Section('About', 4, 'About me', 'about');
    Section_Contact_instance = new Section('Contact', 5, 'Contact me', 'contact');
  }
  var $ENTRIES_0;
  function Section(name, ordinal, text, id, href) {
    href = href === VOID ? '#' + id : href;
    Enum.call(this, name, ordinal);
    this.o42_1 = text;
    this.p42_1 = id;
    this.q42_1 = href;
  }
  function Section_Start_getInstance() {
    Section_initEntries();
    return Section_Start_instance;
  }
  function Section_Works_getInstance() {
    Section_initEntries();
    return Section_Works_instance;
  }
  function Section_Experience_getInstance() {
    Section_initEntries();
    return Section_Experience_instance;
  }
  function Section_Education_getInstance() {
    Section_initEntries();
    return Section_Education_instance;
  }
  function Section_About_getInstance() {
    Section_initEntries();
    return Section_About_instance;
  }
  function Section_Contact_getInstance() {
    Section_initEntries();
    return Section_Contact_instance;
  }
  var Skill_AndroidStudio_instance;
  var Skill_IntellijIdea_instance;
  var Skill_Kotlin_instance;
  var Skill_JetpackCompose_instance;
  var Skill_GitHub_instance;
  var Skill_Java_instance;
  var Skill_Ktor_instance;
  var Skill_Figma_instance;
  var Skill_Postgresql_instance;
  var Skill_Firebase_instance;
  var Skill_Flutter_instance;
  var Skill_Dart_instance;
  var Skill_KMP_instance;
  var Skill_CleanArchitecture_instance;
  var Skill_MVVM_instance;
  var Skill_Gradle_instance;
  var Skill_GitLab_instance;
  var Skill_Postman_instance;
  var Skill_SQLite_instance;
  var Skill_MongoDB_instance;
  var Skill_Realm_instance;
  var Skill_GraphQL_instance;
  var Skill_Slack_instance;
  var Skill_Swift_instance;
  var Skill_Apple_instance;
  var Skill_AdobeXD_instance;
  function values_1() {
    return [Skill_AndroidStudio_getInstance(), Skill_IntellijIdea_getInstance(), Skill_Kotlin_getInstance(), Skill_JetpackCompose_getInstance(), Skill_GitHub_getInstance(), Skill_Java_getInstance(), Skill_Ktor_getInstance(), Skill_Figma_getInstance(), Skill_Postgresql_getInstance(), Skill_Firebase_getInstance(), Skill_Flutter_getInstance(), Skill_Dart_getInstance(), Skill_KMP_getInstance(), Skill_CleanArchitecture_getInstance(), Skill_MVVM_getInstance(), Skill_Gradle_getInstance(), Skill_GitLab_getInstance(), Skill_Postman_getInstance(), Skill_SQLite_getInstance(), Skill_MongoDB_getInstance(), Skill_Realm_getInstance(), Skill_GraphQL_getInstance(), Skill_Slack_getInstance(), Skill_Swift_getInstance(), Skill_Apple_getInstance(), Skill_AdobeXD_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_instance;
    Skill_entriesInitialized = true;
    Skill_AndroidStudio_instance = new Skill('AndroidStudio', 0, 'Android Studio', 'Skilled', 'images/android_studio.svg', 'images/android_studio.svg');
    Skill_IntellijIdea_instance = new Skill('IntellijIdea', 1, 'IntelliJ IDEA', 'Skilled', 'images/intellij_idea.svg', 'images/intellij_idea.svg');
    Skill_Kotlin_instance = new Skill('Kotlin', 2, 'Kotlin', 'Skilled', 'images/kotlin.svg', 'images/kotlin.svg');
    Skill_JetpackCompose_instance = new Skill('JetpackCompose', 3, 'Compose', 'Skilled', 'images/compose.svg', 'images/compose.svg');
    Skill_GitHub_instance = new Skill('GitHub', 4, 'GitHub', 'Skilled', 'images/github_light.svg', 'images/github_dark.svg');
    Skill_Java_instance = new Skill('Java', 5, 'Java', 'Novice', 'images/java.svg', 'images/java.svg');
    Skill_Ktor_instance = new Skill('Ktor', 6, 'Ktor', 'Skilled', 'images/ktor.svg', 'images/ktor.svg');
    Skill_Figma_instance = new Skill('Figma', 7, 'Figma', 'Skilled', 'images/figma.svg', 'images/figma.svg');
    Skill_Postgresql_instance = new Skill('Postgresql', 8, 'PostgreSQL', 'Novice', 'images/postgresql.svg', 'images/postgresql.svg');
    Skill_Firebase_instance = new Skill('Firebase', 9, 'Firebase', 'Skilled', 'images/firebase.svg', 'images/firebase.svg');
    Skill_Flutter_instance = new Skill('Flutter', 10, 'Flutter', 'Skilled', 'images/flutter.svg', 'images/flutter.svg');
    Skill_Dart_instance = new Skill('Dart', 11, 'Dart', 'Skilled', 'images/dart.svg', 'images/dart.svg');
    Skill_KMP_instance = new Skill('KMP', 12, 'KMP', 'Skilled', 'images/kotlin.svg', 'images/kotlin.svg');
    Skill_CleanArchitecture_instance = new Skill('CleanArchitecture', 13, 'Clean Arch', 'Skilled', 'images/intellij_idea.svg', 'images/intellij_idea.svg');
    Skill_MVVM_instance = new Skill('MVVM', 14, 'MVVM', 'Skilled', 'images/intellij_idea.svg', 'images/intellij_idea.svg');
    Skill_Gradle_instance = new Skill('Gradle', 15, 'Gradle', 'Skilled', 'images/gradle.svg', 'images/gradle.svg');
    Skill_GitLab_instance = new Skill('GitLab', 16, 'GitLab', 'Skilled', 'images/git_lab.svg', 'images/git_lab.svg');
    Skill_Postman_instance = new Skill('Postman', 17, 'Postman', 'Skilled', 'images/postman.svg', 'images/postman.svg');
    Skill_SQLite_instance = new Skill('SQLite', 18, 'SQLite', 'Skilled', 'images/sqlite.svg', 'images/sqlite.svg');
    Skill_MongoDB_instance = new Skill('MongoDB', 19, 'MongoDB', 'Skilled', 'images/mongodb.svg', 'images/mongodb.svg');
    Skill_Realm_instance = new Skill('Realm', 20, 'Realm', 'Skilled', 'images/realm.svg', 'images/realm.svg');
    Skill_GraphQL_instance = new Skill('GraphQL', 21, 'GraphQL', 'Novice', 'images/graphql.svg', 'images/graphql.svg');
    Skill_Slack_instance = new Skill('Slack', 22, 'Slack', 'Skilled', 'images/slack.svg', 'images/slack.svg');
    Skill_Swift_instance = new Skill('Swift', 23, 'Swift', 'Novice', 'images/swift.svg', 'images/swift.svg');
    Skill_Apple_instance = new Skill('Apple', 24, 'Apple', 'Novice', 'images/apple.svg', 'images/apple.svg');
    Skill_AdobeXD_instance = new Skill('AdobeXD', 25, 'Adobe XD', 'Novice', 'images/adobe_xd.svg', 'images/adobe_xd.svg');
  }
  var $ENTRIES_1;
  function Skill(name, ordinal, skillName, level, iconResLight, iconResDark) {
    Enum.call(this, name, ordinal);
    this.f45_1 = skillName;
    this.g45_1 = level;
    this.h45_1 = iconResLight;
    this.i45_1 = iconResDark;
  }
  function Skill_AndroidStudio_getInstance() {
    Skill_initEntries();
    return Skill_AndroidStudio_instance;
  }
  function Skill_IntellijIdea_getInstance() {
    Skill_initEntries();
    return Skill_IntellijIdea_instance;
  }
  function Skill_Kotlin_getInstance() {
    Skill_initEntries();
    return Skill_Kotlin_instance;
  }
  function Skill_JetpackCompose_getInstance() {
    Skill_initEntries();
    return Skill_JetpackCompose_instance;
  }
  function Skill_GitHub_getInstance() {
    Skill_initEntries();
    return Skill_GitHub_instance;
  }
  function Skill_Java_getInstance() {
    Skill_initEntries();
    return Skill_Java_instance;
  }
  function Skill_Ktor_getInstance() {
    Skill_initEntries();
    return Skill_Ktor_instance;
  }
  function Skill_Figma_getInstance() {
    Skill_initEntries();
    return Skill_Figma_instance;
  }
  function Skill_Postgresql_getInstance() {
    Skill_initEntries();
    return Skill_Postgresql_instance;
  }
  function Skill_Firebase_getInstance() {
    Skill_initEntries();
    return Skill_Firebase_instance;
  }
  function Skill_Flutter_getInstance() {
    Skill_initEntries();
    return Skill_Flutter_instance;
  }
  function Skill_Dart_getInstance() {
    Skill_initEntries();
    return Skill_Dart_instance;
  }
  function Skill_KMP_getInstance() {
    Skill_initEntries();
    return Skill_KMP_instance;
  }
  function Skill_CleanArchitecture_getInstance() {
    Skill_initEntries();
    return Skill_CleanArchitecture_instance;
  }
  function Skill_MVVM_getInstance() {
    Skill_initEntries();
    return Skill_MVVM_instance;
  }
  function Skill_Gradle_getInstance() {
    Skill_initEntries();
    return Skill_Gradle_instance;
  }
  function Skill_GitLab_getInstance() {
    Skill_initEntries();
    return Skill_GitLab_instance;
  }
  function Skill_Postman_getInstance() {
    Skill_initEntries();
    return Skill_Postman_instance;
  }
  function Skill_SQLite_getInstance() {
    Skill_initEntries();
    return Skill_SQLite_instance;
  }
  function Skill_MongoDB_getInstance() {
    Skill_initEntries();
    return Skill_MongoDB_instance;
  }
  function Skill_Realm_getInstance() {
    Skill_initEntries();
    return Skill_Realm_instance;
  }
  function Skill_GraphQL_getInstance() {
    Skill_initEntries();
    return Skill_GraphQL_instance;
  }
  function Skill_Slack_getInstance() {
    Skill_initEntries();
    return Skill_Slack_instance;
  }
  function Skill_Swift_getInstance() {
    Skill_initEntries();
    return Skill_Swift_instance;
  }
  function Skill_Apple_getInstance() {
    Skill_initEntries();
    return Skill_Apple_instance;
  }
  function Skill_AdobeXD_getInstance() {
    Skill_initEntries();
    return Skill_AdobeXD_instance;
  }
  var Social_Email_instance;
  var Social_Telegram_instance;
  var Social_GitHub_instance;
  var Social_LinkedIn_instance;
  function values_2() {
    return [Social_Email_getInstance(), Social_Telegram_getInstance(), Social_GitHub_getInstance(), Social_LinkedIn_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Social_entriesInitialized;
  function Social_initEntries() {
    if (Social_entriesInitialized)
      return Unit_instance;
    Social_entriesInitialized = true;
    Social_Email_instance = new Social('Email', 0, 'mailto:mohamed.abdelazim.elgohary@gmail.com', 'images/mail_light.svg', 'images/mail_dark.svg');
    Social_Telegram_instance = new Social('Telegram', 1, 'https://t.me/MohamedElgohary88', 'images/telegram_light.svg', 'images/telegram_dark.svg');
    Social_GitHub_instance = new Social('GitHub', 2, 'https://github.com/MohamedElgohary88', 'images/github_light.svg', 'images/github_dark.svg');
    Social_LinkedIn_instance = new Social('LinkedIn', 3, 'https://www.linkedin.com/in/mohamed-elgohary8', 'images/linkedin_light.svg', 'images/linkedin_dark.svg');
  }
  var $ENTRIES_2;
  function Social(name, ordinal, link, iconResLight, iconResDark) {
    Enum.call(this, name, ordinal);
    this.h41_1 = link;
    this.i41_1 = iconResLight;
    this.j41_1 = iconResDark;
  }
  function Social_Email_getInstance() {
    Social_initEntries();
    return Social_Email_instance;
  }
  function Social_Telegram_getInstance() {
    Social_initEntries();
    return Social_Telegram_instance;
  }
  function Social_GitHub_getInstance() {
    Social_initEntries();
    return Social_GitHub_instance;
  }
  function Social_LinkedIn_getInstance() {
    Social_initEntries();
    return Social_LinkedIn_instance;
  }
  var Work_Bismar_instance;
  var Work_HotelX_instance;
  var Work_HoneyMart_instance;
  var Work_Blog_instance;
  var Work_Teamix_instance;
  var Work_SkyCast_instance;
  var Work_Movie_instance;
  function values_3() {
    return [Work_Bismar_getInstance(), Work_HotelX_getInstance(), Work_HoneyMart_getInstance(), Work_Blog_getInstance(), Work_Teamix_getInstance(), Work_SkyCast_getInstance(), Work_Movie_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Work_entriesInitialized;
  function Work_initEntries() {
    if (Work_entriesInitialized)
      return Unit_instance;
    Work_entriesInitialized = true;
    Work_Bismar_instance = new Work('Bismar', 0, 'Bismar - Construction Materials', 'KMP app for customers & sellers with Clean Architecture.', 'https://www.figma.com/design/xH89PIcnmNljlN5x01KA8s/Bismar-production?node-id=0-1&p=f&t=EpdgwJUagMfJt5pG-0', 'images/bismar.svg');
    Work_HotelX_instance = new Work('HotelX', 1, 'Hotel Management System', 'Large-scale tablet app with inventory control and automated reporting.', 'https://youtu.be/SLVSWdPvxeQ', 'images/hotel.svg');
    Work_HoneyMart_instance = new Work('HoneyMart', 2, 'Honey Mart App Suite', 'Multi-module Android apps for users, owners, and admins using Jetpack Compose.', 'https://github.com/MohamedElgohary88/Honey-Mart', 'images/hony.svg');
    Work_Blog_instance = new Work('Blog', 3, 'Full-Stack Blog (KMP)', 'Unified Android, iOS, and Web development, reducing creation time by 30%.', 'https://github.com/MohamedElgohary88/BlogMultiplatform', 'images/blog.svg');
    Work_Teamix_instance = new Work('Teamix', 4, 'Teamix Project Manager', 'Boosted task completion by 30% for over 500 active users.', 'https://github.com/MohamedElgohary88/Teamix', 'images/teamix.svg');
    Work_SkyCast_instance = new Work('SkyCast', 5, 'SkyCast Weather App', 'Cross-platform KMP app using Ktor for APIs and Koin for DI.', 'https://github.com/MohamedElgohary88/SkyCast', 'images/weather.svg');
    Work_Movie_instance = new Work('Movie', 6, 'Movies App', 'Android & Design', 'https://github.com/MohamedElgohary88/MovieApp', 'images/movie.svg');
  }
  var $ENTRIES_3;
  function Work(name, ordinal, workName, description, link, imageRes) {
    Enum.call(this, name, ordinal);
    this.x44_1 = workName;
    this.y44_1 = description;
    this.z44_1 = link;
    this.a45_1 = imageRes;
  }
  function Work_Bismar_getInstance() {
    Work_initEntries();
    return Work_Bismar_instance;
  }
  function Work_HotelX_getInstance() {
    Work_initEntries();
    return Work_HotelX_instance;
  }
  function Work_HoneyMart_getInstance() {
    Work_initEntries();
    return Work_HoneyMart_instance;
  }
  function Work_Blog_getInstance() {
    Work_initEntries();
    return Work_Blog_instance;
  }
  function Work_Teamix_getInstance() {
    Work_initEntries();
    return Work_Teamix_instance;
  }
  function Work_SkyCast_getInstance() {
    Work_initEntries();
    return Work_SkyCast_instance;
  }
  function Work_Movie_getInstance() {
    Work_initEntries();
    return Work_Movie_instance;
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1425507234);
    if (!($changed === 0) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(1425507234, $changed, -1, 'org.example.newportfolio.pages.HomePage (Index.kt:20)');
      }
      DefaultPageLayout('Home', ComposableSingletons$IndexKt_getInstance().m45_1, $composer_0, 54);
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
      tmp0_safe_receiver.k1u(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-1617167943, $changed, -1, 'org.example.newportfolio.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:26)');
      }
      StartSection($composer_0, 0);
      WorksSection($composer_0, 0);
      ExperienceSection($composer_0, 0);
      EducationSection($composer_0, 0);
      AboutSection($composer_0, 0);
      ContactSection($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1) {
      return $boundThis.l1n(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.n1n()) {
      if (isTraceInProgress()) {
        traceEventStart(-2090974448, $changed, -1, 'org.example.newportfolio.pages.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:22)');
      }
      var tmp = color(fillMaxSize(Companion_instance_2), Colors_instance.d39());
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$IndexKt_getInstance().l45_1, $composer_0, 24584, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e1i();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.l45_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(-1617167943, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.m45_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-2090974448, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function initAppStyles(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.z3b_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initAppStyles.<anonymous>' call
    registerStyleBase(this_0, 'body', initAppStyles$lambda);
    // Inline function 'kotlin.apply' call
    var this_1 = ctx.a3c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initAppStyles.<anonymous>' call
    this_1.y3c_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(81.25), get_cssRem(100));
    var tmp = get_ButtonStyle();
    modifyComponentStyle(this_1, tmp, VOID, initAppStyles$lambda_0);
    var tmp_0 = get_LinkStyle();
    modifyComponentStyle(this_1, tmp_0, VOID, initAppStyles$lambda_1);
  }
  function initAppStyles$lambda() {
    var tmp = Companion_instance_2;
    return fontFamily(tmp, ['PoppinsRegular', 'PoppinsMedium']);
  }
  function initAppStyles$lambda_0($this$modifyComponentStyle) {
    $this$modifyComponentStyle.w3d(initAppStyles$lambda$lambda);
    return Unit_instance;
  }
  function initAppStyles$lambda$lambda() {
    return borderRadius(Companion_instance_2, get_px(30));
  }
  function initAppStyles$lambda_1($this$modifyComponentStyle) {
    var colorPalette = toPalette($this$modifyComponentStyle.h3f_1);
    $this$modifyComponentStyle.w3d(initAppStyles$lambda$lambda_0(colorPalette));
    return Unit_instance;
  }
  function initAppStyles$lambda$lambda_0($colorPalette) {
    return function () {
      return color(textDecorationLine(Companion_instance_2, Companion_instance_8.e2w()), get_text($colorPalette).c41());
    };
  }
  function initSilkPalette(ctx) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initSilkPalette.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.a3c_1.x3c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initSilkPalette.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.t3j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initSilkPalette.<anonymous>.<anonymous>.<anonymous>' call
    var primary = Companion_instance_17.b39(159, 52, 240);
    var accent = Companion_instance_17.b39(190, 25, 228);
    var primaryHover = Companion_instance_17.b39(145, 47, 220);
    var primaryPressed = Companion_instance_17.b39(132, 43, 201);
    set_background(this_1, Companion_instance_17.b39(250, 248, 253));
    set_color(this_1, Companion_instance_17.b39(24, 22, 30));
    set_overlay(this_1, Companion_instance_17.b39(240, 232, 250));
    get_brand_0(this_1).h3y(primary, Companion_instance_17.b39(255, 255, 255));
    get_text_0(this_1).h3y(Companion_instance_17.b39(24, 22, 30), Companion_instance_17.b39(102, 82, 140));
    get_button_0(this_1).y3w(primary, primaryHover, primary, primaryPressed);
    get_tooltip(this_1).h3y(Companion_instance_17.b39(255, 255, 255), Companion_instance_17.b39(24, 22, 30));
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.u3j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.example.newportfolio.theme.initSilkPalette.<anonymous>.<anonymous>.<anonymous>' call
    var primary_0 = Companion_instance_17.b39(159, 52, 240);
    var accent_0 = Companion_instance_17.b39(190, 25, 228);
    var primaryHover_0 = lightened(primary_0, 0.1);
    var primaryPressed_0 = lightened(primary_0, 0.2);
    set_background(this_2, Companion_instance_17.b39(17, 14, 22));
    set_color(this_2, Companion_instance_17.b39(235, 230, 245));
    set_overlay(this_2, Companion_instance_17.b39(46, 33, 70));
    get_brand_0(this_2).h3y(primary_0, Companion_instance_17.b39(250, 247, 255));
    get_text_0(this_2).h3y(Companion_instance_17.b39(235, 230, 245), Companion_instance_17.b39(177, 160, 205));
    get_button_0(this_2).y3w(primary_0, primaryHover_0, primary_0, primaryPressed_0);
    get_tooltip(this_2).h3y(Companion_instance_17.b39(28, 23, 35), Companion_instance_17.b39(235, 230, 245));
  }
  function get_text(_this__u8e3s4) {
    return get_text_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_text_0(_this__u8e3s4) {
    return new MutableText(_this__u8e3s4);
  }
  function MutableText(palette) {
    ColorGroup.call(this, palette, 'text');
    this.t45_1 = this.g3k();
    this.u45_1 = this.g3k();
  }
  protoOf(MutableText).v45 = function (_set____db54di) {
    return this.t45_1.d3k(this, primary$factory(), _set____db54di);
  };
  protoOf(MutableText).c41 = function () {
    return this.t45_1.n2y(this, primary$factory_0());
  };
  protoOf(MutableText).w45 = function (_set____db54di) {
    return this.u45_1.d3k(this, secondary$factory(), _set____db54di);
  };
  protoOf(MutableText).x45 = function () {
    return this.u45_1.n2y(this, secondary$factory_0());
  };
  protoOf(MutableText).h3y = function (primary, secondary) {
    this.v45(primary);
    this.w45(secondary);
  };
  function get_brand(_this__u8e3s4) {
    return get_brand_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_brand_0(_this__u8e3s4) {
    return new MutableBrand(_this__u8e3s4);
  }
  function MutableBrand(palette) {
    ColorGroup.call(this, palette, 'brand');
    this.p45_1 = this.g3k();
    this.q45_1 = this.g3k();
  }
  protoOf(MutableBrand).v45 = function (_set____db54di) {
    return this.p45_1.d3k(this, primary$factory_1(), _set____db54di);
  };
  protoOf(MutableBrand).c41 = function () {
    return this.p45_1.n2y(this, primary$factory_2());
  };
  protoOf(MutableBrand).y45 = function (_set____db54di) {
    return this.q45_1.d3k(this, onPrimary$factory(), _set____db54di);
  };
  protoOf(MutableBrand).b45 = function () {
    return this.q45_1.n2y(this, onPrimary$factory_0());
  };
  protoOf(MutableBrand).h3y = function (primary, onPrimary) {
    this.v45(primary);
    this.y45(onPrimary);
  };
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.v45(value);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.v45(value);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return receiver.x45();
    }, function (receiver, value) {
      return receiver.w45(value);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return receiver.x45();
    }, function (receiver, value) {
      return receiver.w45(value);
    });
  }
  function primary$factory_1() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.v45(value);
    });
  }
  function primary$factory_2() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.v45(value);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return receiver.b45();
    }, function (receiver, value) {
      return receiver.y45(value);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return receiver.b45();
    }, function (receiver, value) {
      return receiver.y45(value);
    });
  }
  function get_TextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TextStyle$delegate.n2y(null, TextStyle$factory());
  }
  var TextStyle$delegate;
  function get_TextStylePrimaryColor() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TextStylePrimaryColor$delegate.n2y(null, TextStylePrimaryColor$factory());
  }
  var TextStylePrimaryColor$delegate;
  function get_TextStyleSecondaryColor() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TextStyleSecondaryColor$delegate.n2y(null, TextStyleSecondaryColor$factory());
  }
  var TextStyleSecondaryColor$delegate;
  function get_TextStyleBrandColor() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TextStyleBrandColor$delegate.n2y(null, TextStyleBrandColor$factory());
  }
  var TextStyleBrandColor$delegate;
  function get_DisplayTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return DisplayTextStyle$delegate.n2y(null, DisplayTextStyle$factory());
  }
  var DisplayTextStyle$delegate;
  function get_SubDisplayTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return SubDisplayTextStyle$delegate.n2y(null, SubDisplayTextStyle$factory());
  }
  var SubDisplayTextStyle$delegate;
  function get_TitleTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TitleTextStyle$delegate.n2y(null, TitleTextStyle$factory());
  }
  var TitleTextStyle$delegate;
  function get_LabelLargeTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return LabelLargeTextStyle$delegate.n2y(null, LabelLargeTextStyle$factory());
  }
  var LabelLargeTextStyle$delegate;
  function get_LabelMediumTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return LabelMediumTextStyle$delegate.n2y(null, LabelMediumTextStyle$factory());
  }
  var LabelMediumTextStyle$delegate;
  function get_BodyLargeTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return BodyLargeTextStyle$delegate.n2y(null, BodyLargeTextStyle$factory());
  }
  var BodyLargeTextStyle$delegate;
  function get_BodyMediumTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return BodyMediumTextStyle$delegate.n2y(null, BodyMediumTextStyle$factory());
  }
  var BodyMediumTextStyle$delegate;
  function get_BodySmallTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return BodySmallTextStyle$delegate.n2y(null, BodySmallTextStyle$factory());
  }
  var BodySmallTextStyle$delegate;
  function get_TitleTextStyleSmaller() {
    _init_properties_FontStyles_kt__hfl7yn();
    return TitleTextStyleSmaller$delegate.n2y(null, TitleTextStyleSmaller$factory());
  }
  var TitleTextStyleSmaller$delegate;
  function get_ExperienceTitleTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return ExperienceTitleTextStyle$delegate.n2y(null, ExperienceTitleTextStyle$factory());
  }
  var ExperienceTitleTextStyle$delegate;
  function get_ExperienceDateTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return ExperienceDateTextStyle$delegate.n2y(null, ExperienceDateTextStyle$factory());
  }
  var ExperienceDateTextStyle$delegate;
  function get_ExperienceChipTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return ExperienceChipTextStyle$delegate.n2y(null, ExperienceChipTextStyle$factory());
  }
  var ExperienceChipTextStyle$delegate;
  function TextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_FontStyles_kt__hfl7yn();
    var defaultFonts = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    $this$ComponentStyle.w3d(TextStyle$delegate$lambda$lambda(defaultFonts));
    return Unit_instance;
  }
  function TextStyle$delegate$lambda$lambda$lambda($defaultFonts) {
    return function ($this$font) {
      return Unit_instance;
    };
  }
  function TextStyle$delegate$lambda$lambda($defaultFonts) {
    return function () {
      var tmp = Companion_instance_2;
      return font(tmp, TextStyle$delegate$lambda$lambda$lambda($defaultFonts));
    };
  }
  function TextStylePrimaryColor$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(TextStylePrimaryColor$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function TextStylePrimaryColor$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_text($colorPalette).c41());
    };
  }
  function TextStyleSecondaryColor$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(TextStyleSecondaryColor$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function TextStyleSecondaryColor$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_text($colorPalette).x45());
    };
  }
  function TextStyleBrandColor$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(TextStyleBrandColor$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function TextStyleBrandColor$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_brand($colorPalette).c41());
    };
  }
  function DisplayTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, DisplayTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, DisplayTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, DisplayTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, DisplayTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, DisplayTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function DisplayTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, DisplayTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function DisplayTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.e46_1);
      return Unit_instance;
    };
  }
  function DisplayTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, DisplayTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function DisplayTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.e46_1);
      return Unit_instance;
    };
  }
  function DisplayTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, DisplayTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function DisplayTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.e46_1);
      return Unit_instance;
    };
  }
  function DisplayTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, DisplayTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function DisplayTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.e46_1);
      return Unit_instance;
    };
  }
  function DisplayTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, DisplayTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function DisplayTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.e46_1);
      return Unit_instance;
    };
  }
  function SubDisplayTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, SubDisplayTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, SubDisplayTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, SubDisplayTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, SubDisplayTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, SubDisplayTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function SubDisplayTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, SubDisplayTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function SubDisplayTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.f46_1);
      return Unit_instance;
    };
  }
  function SubDisplayTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, SubDisplayTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function SubDisplayTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.f46_1);
      return Unit_instance;
    };
  }
  function SubDisplayTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, SubDisplayTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function SubDisplayTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.f46_1);
      return Unit_instance;
    };
  }
  function SubDisplayTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, SubDisplayTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function SubDisplayTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.f46_1);
      return Unit_instance;
    };
  }
  function SubDisplayTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, SubDisplayTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function SubDisplayTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.f46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, TitleTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, TitleTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, TitleTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, TitleTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, TitleTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function TitleTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function TitleTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function TitleTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function TitleTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function TitleTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function TitleTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.g46_1);
      return Unit_instance;
    };
  }
  function LabelLargeTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, LabelLargeTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, LabelLargeTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, LabelLargeTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, LabelLargeTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, LabelLargeTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function LabelLargeTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelLargeTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function LabelLargeTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.k46_1);
      return Unit_instance;
    };
  }
  function LabelLargeTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelLargeTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function LabelLargeTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.k46_1);
      return Unit_instance;
    };
  }
  function LabelLargeTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelLargeTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function LabelLargeTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.k46_1);
      return Unit_instance;
    };
  }
  function LabelLargeTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelLargeTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function LabelLargeTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.k46_1);
      return Unit_instance;
    };
  }
  function LabelLargeTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelLargeTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function LabelLargeTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.k46_1);
      return Unit_instance;
    };
  }
  function LabelMediumTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, LabelMediumTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, LabelMediumTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, LabelMediumTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, LabelMediumTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, LabelMediumTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function LabelMediumTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelMediumTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function LabelMediumTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.l46_1);
      return Unit_instance;
    };
  }
  function LabelMediumTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelMediumTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function LabelMediumTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.l46_1);
      return Unit_instance;
    };
  }
  function LabelMediumTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelMediumTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function LabelMediumTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.l46_1);
      return Unit_instance;
    };
  }
  function LabelMediumTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelMediumTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function LabelMediumTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.l46_1);
      return Unit_instance;
    };
  }
  function LabelMediumTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, LabelMediumTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function LabelMediumTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.l46_1);
      return Unit_instance;
    };
  }
  function BodyLargeTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, BodyLargeTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, BodyLargeTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, BodyLargeTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, BodyLargeTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, BodyLargeTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function BodyLargeTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyLargeTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function BodyLargeTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function BodyLargeTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyLargeTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function BodyLargeTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function BodyLargeTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyLargeTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function BodyLargeTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.h46_1);
      return Unit_instance;
    };
  }
  function BodyLargeTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyLargeTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function BodyLargeTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.h46_1);
      return Unit_instance;
    };
  }
  function BodyLargeTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyLargeTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function BodyLargeTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.h46_1);
      return Unit_instance;
    };
  }
  function BodyMediumTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, BodyMediumTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, BodyMediumTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, BodyMediumTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, BodyMediumTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, BodyMediumTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function BodyMediumTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyMediumTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function BodyMediumTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.i46_1);
      return Unit_instance;
    };
  }
  function BodyMediumTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyMediumTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function BodyMediumTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.i46_1);
      return Unit_instance;
    };
  }
  function BodyMediumTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyMediumTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function BodyMediumTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.i46_1);
      return Unit_instance;
    };
  }
  function BodyMediumTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyMediumTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function BodyMediumTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.i46_1);
      return Unit_instance;
    };
  }
  function BodyMediumTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodyMediumTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function BodyMediumTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.i46_1);
      return Unit_instance;
    };
  }
  function BodySmallTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, BodySmallTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, BodySmallTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, BodySmallTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, BodySmallTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, BodySmallTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function BodySmallTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodySmallTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function BodySmallTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.j46_1);
      return Unit_instance;
    };
  }
  function BodySmallTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodySmallTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function BodySmallTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.j46_1);
      return Unit_instance;
    };
  }
  function BodySmallTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodySmallTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function BodySmallTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.j46_1);
      return Unit_instance;
    };
  }
  function BodySmallTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodySmallTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function BodySmallTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.j46_1);
      return Unit_instance;
    };
  }
  function BodySmallTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, BodySmallTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function BodySmallTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.j46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyleSmaller$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, TitleTextStyleSmaller$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, TitleTextStyleSmaller$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, TitleTextStyleSmaller$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, TitleTextStyleSmaller$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, TitleTextStyleSmaller$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyleSmaller$delegate$lambda$lambda$lambda(fontsSM));
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyleSmaller$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyleSmaller$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyleSmaller$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.g46_1);
      return Unit_instance;
    };
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, TitleTextStyleSmaller$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function TitleTextStyleSmaller$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.g46_1);
      return Unit_instance;
    };
  }
  function ExperienceTitleTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, ExperienceTitleTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, ExperienceTitleTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, ExperienceTitleTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, ExperienceTitleTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.h46_1);
      return Unit_instance;
    };
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.g46_1);
      return Unit_instance;
    };
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.g46_1);
      return Unit_instance;
    };
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function ExperienceTitleTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.g46_1);
      return Unit_instance;
    };
  }
  function ExperienceDateTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, ExperienceDateTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, ExperienceDateTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, ExperienceDateTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, ExperienceDateTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, ExperienceDateTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceDateTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.l46_1);
      return Unit_instance;
    };
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceDateTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.l46_1);
      return Unit_instance;
    };
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceDateTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.k46_1);
      return Unit_instance;
    };
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceDateTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.k46_1);
      return Unit_instance;
    };
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceDateTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function ExperienceDateTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.k46_1);
      return Unit_instance;
    };
  }
  function ExperienceChipTextStyle$delegate$lambda($this$addVariant) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, ExperienceChipTextStyle$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, ExperienceChipTextStyle$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, ExperienceChipTextStyle$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, ExperienceChipTextStyle$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, ExperienceChipTextStyle$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceChipTextStyle$delegate$lambda$lambda$lambda(fontsSM));
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda$lambda($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.m46_1);
      return Unit_instance;
    };
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsSM = Fonts_getInstance().d46(Breakpoint_SM_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceChipTextStyle$delegate$lambda$lambda$lambda_0(fontsSM));
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda$lambda_0($fontsSM) {
    return function ($this$font) {
      siteFont($this$font, $fontsSM.m46_1);
      return Unit_instance;
    };
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsMD = Fonts_getInstance().d46(Breakpoint_MD_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceChipTextStyle$delegate$lambda$lambda$lambda_1(fontsMD));
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda$lambda_1($fontsMD) {
    return function ($this$font) {
      siteFont($this$font, $fontsMD.h46_1);
      return Unit_instance;
    };
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsLG = Fonts_getInstance().d46(Breakpoint_LG_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceChipTextStyle$delegate$lambda$lambda$lambda_2(fontsLG));
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda$lambda_2($fontsLG) {
    return function ($this$font) {
      siteFont($this$font, $fontsLG.h46_1);
      return Unit_instance;
    };
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    var fontsXL = Fonts_getInstance().d46(Breakpoint_XL_getInstance());
    var tmp = Companion_instance_2;
    return font(tmp, ExperienceChipTextStyle$delegate$lambda$lambda$lambda_3(fontsXL));
  }
  function ExperienceChipTextStyle$delegate$lambda$lambda$lambda_3($fontsXL) {
    return function ($this$font) {
      siteFont($this$font, $fontsXL.h46_1);
      return Unit_instance;
    };
  }
  function TextStyle$factory() {
    return getPropertyCallableRef('TextStyle', 0, KProperty0, function () {
      return get_TextStyle();
    }, null);
  }
  function TextStylePrimaryColor$factory() {
    return getPropertyCallableRef('TextStylePrimaryColor', 0, KProperty0, function () {
      return get_TextStylePrimaryColor();
    }, null);
  }
  function TextStyleSecondaryColor$factory() {
    return getPropertyCallableRef('TextStyleSecondaryColor', 0, KProperty0, function () {
      return get_TextStyleSecondaryColor();
    }, null);
  }
  function TextStyleBrandColor$factory() {
    return getPropertyCallableRef('TextStyleBrandColor', 0, KProperty0, function () {
      return get_TextStyleBrandColor();
    }, null);
  }
  function DisplayTextStyle$factory() {
    return getPropertyCallableRef('DisplayTextStyle', 0, KProperty0, function () {
      return get_DisplayTextStyle();
    }, null);
  }
  function SubDisplayTextStyle$factory() {
    return getPropertyCallableRef('SubDisplayTextStyle', 0, KProperty0, function () {
      return get_SubDisplayTextStyle();
    }, null);
  }
  function TitleTextStyle$factory() {
    return getPropertyCallableRef('TitleTextStyle', 0, KProperty0, function () {
      return get_TitleTextStyle();
    }, null);
  }
  function LabelLargeTextStyle$factory() {
    return getPropertyCallableRef('LabelLargeTextStyle', 0, KProperty0, function () {
      return get_LabelLargeTextStyle();
    }, null);
  }
  function LabelMediumTextStyle$factory() {
    return getPropertyCallableRef('LabelMediumTextStyle', 0, KProperty0, function () {
      return get_LabelMediumTextStyle();
    }, null);
  }
  function BodyLargeTextStyle$factory() {
    return getPropertyCallableRef('BodyLargeTextStyle', 0, KProperty0, function () {
      return get_BodyLargeTextStyle();
    }, null);
  }
  function BodyMediumTextStyle$factory() {
    return getPropertyCallableRef('BodyMediumTextStyle', 0, KProperty0, function () {
      return get_BodyMediumTextStyle();
    }, null);
  }
  function BodySmallTextStyle$factory() {
    return getPropertyCallableRef('BodySmallTextStyle', 0, KProperty0, function () {
      return get_BodySmallTextStyle();
    }, null);
  }
  function TitleTextStyleSmaller$factory() {
    return getPropertyCallableRef('TitleTextStyleSmaller', 0, KProperty0, function () {
      return get_TitleTextStyleSmaller();
    }, null);
  }
  function ExperienceTitleTextStyle$factory() {
    return getPropertyCallableRef('ExperienceTitleTextStyle', 0, KProperty0, function () {
      return get_ExperienceTitleTextStyle();
    }, null);
  }
  function ExperienceDateTextStyle$factory() {
    return getPropertyCallableRef('ExperienceDateTextStyle', 0, KProperty0, function () {
      return get_ExperienceDateTextStyle();
    }, null);
  }
  function ExperienceChipTextStyle$factory() {
    return getPropertyCallableRef('ExperienceChipTextStyle', 0, KProperty0, function () {
      return get_ExperienceChipTextStyle();
    }, null);
  }
  var properties_initialized_FontStyles_kt_t7l7zn;
  function _init_properties_FontStyles_kt__hfl7yn() {
    if (!properties_initialized_FontStyles_kt_t7l7zn) {
      properties_initialized_FontStyles_kt_t7l7zn = true;
      TextStyle$delegate = ComponentStyle_0(VOID, VOID, TextStyle$delegate$lambda);
      var tmp = get_TextStyle();
      TextStylePrimaryColor$delegate = addVariant(tmp, VOID, TextStylePrimaryColor$delegate$lambda);
      var tmp_0 = get_TextStyle();
      TextStyleSecondaryColor$delegate = addVariant(tmp_0, VOID, TextStyleSecondaryColor$delegate$lambda);
      var tmp_1 = get_TextStyle();
      TextStyleBrandColor$delegate = addVariant(tmp_1, VOID, TextStyleBrandColor$delegate$lambda);
      var tmp_2 = get_TextStyle();
      DisplayTextStyle$delegate = addVariant(tmp_2, VOID, DisplayTextStyle$delegate$lambda);
      var tmp_3 = get_TextStyle();
      SubDisplayTextStyle$delegate = addVariant(tmp_3, VOID, SubDisplayTextStyle$delegate$lambda);
      var tmp_4 = get_TextStyle();
      TitleTextStyle$delegate = addVariant(tmp_4, VOID, TitleTextStyle$delegate$lambda);
      var tmp_5 = get_TextStyle();
      LabelLargeTextStyle$delegate = addVariant(tmp_5, VOID, LabelLargeTextStyle$delegate$lambda);
      var tmp_6 = get_TextStyle();
      LabelMediumTextStyle$delegate = addVariant(tmp_6, VOID, LabelMediumTextStyle$delegate$lambda);
      var tmp_7 = get_TextStyle();
      BodyLargeTextStyle$delegate = addVariant(tmp_7, VOID, BodyLargeTextStyle$delegate$lambda);
      var tmp_8 = get_TextStyle();
      BodyMediumTextStyle$delegate = addVariant(tmp_8, VOID, BodyMediumTextStyle$delegate$lambda);
      var tmp_9 = get_TextStyle();
      BodySmallTextStyle$delegate = addVariant(tmp_9, VOID, BodySmallTextStyle$delegate$lambda);
      var tmp_10 = get_TextStyle();
      TitleTextStyleSmaller$delegate = addVariant(tmp_10, VOID, TitleTextStyleSmaller$delegate$lambda);
      var tmp_11 = get_TextStyle();
      ExperienceTitleTextStyle$delegate = addVariant(tmp_11, VOID, ExperienceTitleTextStyle$delegate$lambda);
      var tmp_12 = get_TextStyle();
      ExperienceDateTextStyle$delegate = addVariant(tmp_12, VOID, ExperienceDateTextStyle$delegate$lambda);
      var tmp_13 = get_TextStyle();
      ExperienceChipTextStyle$delegate = addVariant(tmp_13, VOID, ExperienceChipTextStyle$delegate$lambda);
    }
  }
  function SiteFont(fontFamily, fontSize, fontWeight, fontStyle) {
    fontWeight = fontWeight === VOID ? Companion_instance_23.f2v() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_instance_24.f2v() : fontStyle;
    this.n46_1 = fontFamily;
    this.o46_1 = fontSize;
    this.p46_1 = fontWeight;
    this.q46_1 = fontStyle;
  }
  protoOf(SiteFont).r46 = function (fontFamily, fontSize, fontWeight, fontStyle) {
    return new SiteFont(fontFamily, fontSize, fontWeight, fontStyle);
  };
  protoOf(SiteFont).s46 = function (fontFamily, fontSize, fontWeight, fontStyle, $super) {
    fontFamily = fontFamily === VOID ? this.n46_1 : fontFamily;
    fontSize = fontSize === VOID ? this.o46_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.p46_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.q46_1 : fontStyle;
    return $super === VOID ? this.r46(fontFamily, fontSize, fontWeight, fontStyle) : $super.r46.call(this, fontFamily, fontSize, fontWeight, fontStyle);
  };
  protoOf(SiteFont).toString = function () {
    return 'SiteFont(fontFamily=' + this.n46_1 + ', fontSize=' + this.o46_1 + ', fontWeight=' + this.p46_1 + ', fontStyle=' + this.q46_1 + ')';
  };
  protoOf(SiteFont).hashCode = function () {
    var result = getStringHashCode(this.n46_1);
    result = imul(result, 31) + hashCode(this.o46_1) | 0;
    result = imul(result, 31) + hashCode(this.p46_1) | 0;
    result = imul(result, 31) + hashCode(this.q46_1) | 0;
    return result;
  };
  protoOf(SiteFont).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SiteFont))
      return false;
    var tmp0_other_with_cast = other instanceof SiteFont ? other : THROW_CCE();
    if (!(this.n46_1 === tmp0_other_with_cast.n46_1))
      return false;
    if (!equals(this.o46_1, tmp0_other_with_cast.o46_1))
      return false;
    if (!equals(this.p46_1, tmp0_other_with_cast.p46_1))
      return false;
    if (!equals(this.q46_1, tmp0_other_with_cast.q46_1))
      return false;
    return true;
  };
  function SiteFonts(display, subDisplay, title, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    this.e46_1 = display;
    this.f46_1 = subDisplay;
    this.g46_1 = title;
    this.h46_1 = bodyLarge;
    this.i46_1 = bodyMedium;
    this.j46_1 = bodySmall;
    this.k46_1 = labelLarge;
    this.l46_1 = labelMedium;
    this.m46_1 = labelSmall;
  }
  protoOf(SiteFonts).toString = function () {
    return 'SiteFonts(display=' + this.e46_1 + ', subDisplay=' + this.f46_1 + ', title=' + this.g46_1 + ', bodyLarge=' + this.h46_1 + ', bodyMedium=' + this.i46_1 + ', bodySmall=' + this.j46_1 + ', labelLarge=' + this.k46_1 + ', labelMedium=' + this.l46_1 + ', labelSmall=' + this.m46_1 + ')';
  };
  protoOf(SiteFonts).hashCode = function () {
    var result = this.e46_1.hashCode();
    result = imul(result, 31) + this.f46_1.hashCode() | 0;
    result = imul(result, 31) + this.g46_1.hashCode() | 0;
    result = imul(result, 31) + this.h46_1.hashCode() | 0;
    result = imul(result, 31) + this.i46_1.hashCode() | 0;
    result = imul(result, 31) + this.j46_1.hashCode() | 0;
    result = imul(result, 31) + this.k46_1.hashCode() | 0;
    result = imul(result, 31) + this.l46_1.hashCode() | 0;
    result = imul(result, 31) + this.m46_1.hashCode() | 0;
    return result;
  };
  protoOf(SiteFonts).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SiteFonts))
      return false;
    var tmp0_other_with_cast = other instanceof SiteFonts ? other : THROW_CCE();
    if (!this.e46_1.equals(tmp0_other_with_cast.e46_1))
      return false;
    if (!this.f46_1.equals(tmp0_other_with_cast.f46_1))
      return false;
    if (!this.g46_1.equals(tmp0_other_with_cast.g46_1))
      return false;
    if (!this.h46_1.equals(tmp0_other_with_cast.h46_1))
      return false;
    if (!this.i46_1.equals(tmp0_other_with_cast.i46_1))
      return false;
    if (!this.j46_1.equals(tmp0_other_with_cast.j46_1))
      return false;
    if (!this.k46_1.equals(tmp0_other_with_cast.k46_1))
      return false;
    if (!this.l46_1.equals(tmp0_other_with_cast.l46_1))
      return false;
    if (!this.m46_1.equals(tmp0_other_with_cast.m46_1))
      return false;
    return true;
  };
  function siteFont(_this__u8e3s4, siteFont) {
    _this__u8e3s4.y39(siteFont.q46_1);
    _this__u8e3s4.x39(siteFont.o46_1);
    _this__u8e3s4.z39(siteFont.p46_1);
    _this__u8e3s4.w39([siteFont.n46_1]);
  }
  function Fonts() {
    Fonts_instance = this;
    var tmp = this;
    var tmp0_fontFamily = 'PoppinsMedium';
    var tmp1_fontWeight = Companion_instance_23.g2w();
    var tmp2_fontSize = get_cssRem(2.25);
    var tmp_0 = new SiteFont(tmp0_fontFamily, tmp2_fontSize, tmp1_fontWeight);
    var tmp3_fontFamily = 'PoppinsRegular';
    var tmp4_fontWeight = Companion_instance_23.f2v();
    var tmp5_fontSize = get_cssRem(1.5);
    var tmp_1 = new SiteFont(tmp3_fontFamily, tmp5_fontSize, tmp4_fontWeight);
    var tmp6_fontFamily = 'PoppinsMedium';
    var tmp7_fontWeight = Companion_instance_23.g2w();
    var tmp8_fontSize = get_cssRem(1.5);
    var tmp_2 = new SiteFont(tmp6_fontFamily, tmp8_fontSize, tmp7_fontWeight);
    var tmp9_fontFamily = 'PoppinsRegular';
    var tmp10_fontWeight = Companion_instance_23.f2v();
    var tmp11_fontSize = get_cssRem(1.25);
    var tmp_3 = new SiteFont(tmp9_fontFamily, tmp11_fontSize, tmp10_fontWeight);
    var tmp12_fontFamily = 'PoppinsRegular';
    var tmp13_fontWeight = Companion_instance_23.f2v();
    var tmp14_fontSize = get_cssRem(1.1);
    var tmp_4 = new SiteFont(tmp12_fontFamily, tmp14_fontSize, tmp13_fontWeight);
    var tmp15_fontFamily = 'PoppinsRegular';
    var tmp16_fontWeight = Companion_instance_23.f2v();
    var tmp17_fontSize = get_cssRem(0.875);
    var tmp_5 = new SiteFont(tmp15_fontFamily, tmp17_fontSize, tmp16_fontWeight);
    var tmp18_fontFamily = 'PoppinsMedium';
    var tmp19_fontWeight = Companion_instance_23.g2w();
    var tmp20_fontSize = get_cssRem(0.875);
    var tmp_6 = new SiteFont(tmp18_fontFamily, tmp20_fontSize, tmp19_fontWeight);
    var tmp21_fontFamily = 'PoppinsMedium';
    var tmp22_fontWeight = Companion_instance_23.g2w();
    var tmp23_fontSize = get_cssRem(0.75);
    var tmp_7 = new SiteFont(tmp21_fontFamily, tmp23_fontSize, tmp22_fontWeight);
    var tmp24_fontFamily = 'PoppinsMedium';
    var tmp25_fontWeight = Companion_instance_23.g2w();
    var tmp26_fontSize = get_cssRem(0.675);
    tmp.z45_1 = new SiteFonts(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, new SiteFont(tmp24_fontFamily, tmp26_fontSize, tmp25_fontWeight));
    this.a46_1 = new SiteFonts(this.z45_1.e46_1.s46(VOID, get_cssRem(2.1)), this.z45_1.f46_1.s46(VOID, get_cssRem(1.35)), this.z45_1.g46_1.s46(VOID, get_cssRem(1.35)), this.z45_1.h46_1.s46(VOID, get_cssRem(1.15)), this.z45_1.i46_1.s46(VOID, get_cssRem(1)), this.z45_1.j46_1.s46(VOID, get_cssRem(0.775)), this.z45_1.k46_1.s46(VOID, get_cssRem(0.8)), this.z45_1.l46_1.s46(VOID, get_cssRem(0.7)), this.z45_1.m46_1.s46(VOID, get_cssRem(0.65)));
    this.b46_1 = new SiteFonts(this.z45_1.e46_1.s46(VOID, get_cssRem(1.95)), this.z45_1.f46_1.s46(VOID, get_cssRem(1.2)), this.z45_1.g46_1.s46(VOID, get_cssRem(1.35)), this.z45_1.h46_1.s46(VOID, get_cssRem(1)), this.z45_1.i46_1.s46(VOID, get_cssRem(0.9)), this.z45_1.j46_1.s46(VOID, get_cssRem(0.8)), this.z45_1.k46_1.s46(VOID, get_cssRem(0.8)), this.z45_1.l46_1.s46(VOID, get_cssRem(0.7)), this.z45_1.m46_1.s46(VOID, get_cssRem(0.65)));
    this.c46_1 = new SiteFonts(this.z45_1.e46_1.s46(VOID, get_cssRem(1.8)), this.z45_1.f46_1.s46(VOID, get_cssRem(1.05)), this.z45_1.g46_1.s46(VOID, get_cssRem(1.35)), this.z45_1.h46_1.s46(VOID, get_cssRem(1)), this.z45_1.i46_1.s46(VOID, get_cssRem(0.9)), this.z45_1.j46_1.s46(VOID, get_cssRem(0.8)), this.z45_1.k46_1.s46(VOID, get_cssRem(0.8)), this.z45_1.l46_1.s46(VOID, get_cssRem(0.7)), this.z45_1.m46_1.s46(VOID, get_cssRem(0.65)));
  }
  protoOf(Fonts).d46 = function (breakpoint) {
    var tmp;
    switch (breakpoint.y9_1) {
      case 0:
        tmp = this.c46_1;
        break;
      case 1:
        tmp = this.c46_1;
        break;
      case 2:
        tmp = this.b46_1;
        break;
      case 3:
        tmp = this.a46_1;
        break;
      case 4:
        tmp = this.z45_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Fonts_instance;
  function Fonts_getInstance() {
    if (Fonts_instance == null)
      new Fonts();
    return Fonts_instance;
  }
  function get_IconStyle() {
    _init_properties_IconStyles_kt__gxp5ut();
    return IconStyle$delegate.n2y(null, IconStyle$factory());
  }
  var IconStyle$delegate;
  function get_IconBrandColorVariant() {
    _init_properties_IconStyles_kt__gxp5ut();
    return IconBrandColorVariant$delegate.n2y(null, IconBrandColorVariant$factory());
  }
  var IconBrandColorVariant$delegate;
  function get_IconOnBrandColorVariant() {
    _init_properties_IconStyles_kt__gxp5ut();
    return IconOnBrandColorVariant$delegate.n2y(null, IconOnBrandColorVariant$factory());
  }
  var IconOnBrandColorVariant$delegate;
  function get_LargeIconSize() {
    _init_properties_IconStyles_kt__gxp5ut();
    return LargeIconSize$delegate.n2y(null, LargeIconSize$factory());
  }
  var LargeIconSize$delegate;
  function get_MediumIconSize() {
    _init_properties_IconStyles_kt__gxp5ut();
    return MediumIconSize$delegate.n2y(null, MediumIconSize$factory());
  }
  var MediumIconSize$delegate;
  function get_SmallIconSize() {
    _init_properties_IconStyles_kt__gxp5ut();
    return SmallIconSize$delegate.n2y(null, SmallIconSize$factory());
  }
  var SmallIconSize$delegate;
  function IconStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_IconStyles_kt__gxp5ut();
    var colorPalette = toPalette($this$ComponentStyle.h3f_1);
    $this$ComponentStyle.w3d(IconStyle$delegate$lambda$lambda(colorPalette));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y3f(tmp, IconStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y3f(tmp_0, IconStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y3f(tmp_1, IconStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y3f(tmp_2, IconStyle$delegate$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y3f(tmp_3, IconStyle$delegate$lambda$lambda_4);
    return Unit_instance;
  }
  function IconStyle$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_color($colorPalette));
    };
  }
  function IconStyle$delegate$lambda$lambda_0() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.55));
  }
  function IconStyle$delegate$lambda$lambda_1() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.55));
  }
  function IconStyle$delegate$lambda$lambda_2() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.65));
  }
  function IconStyle$delegate$lambda$lambda_3() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.65));
  }
  function IconStyle$delegate$lambda$lambda_4() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.75));
  }
  function IconBrandColorVariant$delegate$lambda($this$addVariant) {
    _init_properties_IconStyles_kt__gxp5ut();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(IconBrandColorVariant$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function IconBrandColorVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_brand($colorPalette).c41());
    };
  }
  function IconOnBrandColorVariant$delegate$lambda($this$addVariant) {
    _init_properties_IconStyles_kt__gxp5ut();
    var colorPalette = toPalette($this$addVariant.h3f_1);
    $this$addVariant.w3d(IconOnBrandColorVariant$delegate$lambda$lambda(colorPalette));
    return Unit_instance;
  }
  function IconOnBrandColorVariant$delegate$lambda$lambda($colorPalette) {
    return function () {
      return color(Companion_instance_2, get_brand($colorPalette).b45());
    };
  }
  function LargeIconSize$delegate$lambda($this$addVariant) {
    _init_properties_IconStyles_kt__gxp5ut();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, LargeIconSize$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, LargeIconSize$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, LargeIconSize$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, LargeIconSize$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, LargeIconSize$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function LargeIconSize$delegate$lambda$lambda() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.8));
  }
  function LargeIconSize$delegate$lambda$lambda_0() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.2));
  }
  function LargeIconSize$delegate$lambda$lambda_1() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.5));
  }
  function LargeIconSize$delegate$lambda$lambda_2() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.8));
  }
  function LargeIconSize$delegate$lambda$lambda_3() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(3));
  }
  function MediumIconSize$delegate$lambda($this$addVariant) {
    _init_properties_IconStyles_kt__gxp5ut();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, MediumIconSize$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, MediumIconSize$delegate$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.y3f(tmp_1, MediumIconSize$delegate$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.y3f(tmp_2, MediumIconSize$delegate$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.y3f(tmp_3, MediumIconSize$delegate$lambda$lambda_3);
    return Unit_instance;
  }
  function MediumIconSize$delegate$lambda$lambda() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.8));
  }
  function MediumIconSize$delegate$lambda$lambda_0() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2));
  }
  function MediumIconSize$delegate$lambda$lambda_1() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.2));
  }
  function MediumIconSize$delegate$lambda$lambda_2() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.3));
  }
  function MediumIconSize$delegate$lambda$lambda_3() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(2.5));
  }
  function SmallIconSize$delegate$lambda($this$addVariant) {
    _init_properties_IconStyles_kt__gxp5ut();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.y3f(tmp, SmallIconSize$delegate$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.y3f(tmp_0, SmallIconSize$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SmallIconSize$delegate$lambda$lambda() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.2));
  }
  function SmallIconSize$delegate$lambda$lambda_0() {
    _init_properties_IconStyles_kt__gxp5ut();
    return size(Companion_instance_2, get_cssRem(1.3));
  }
  function IconStyle$factory() {
    return getPropertyCallableRef('IconStyle', 0, KProperty0, function () {
      return get_IconStyle();
    }, null);
  }
  function IconBrandColorVariant$factory() {
    return getPropertyCallableRef('IconBrandColorVariant', 0, KProperty0, function () {
      return get_IconBrandColorVariant();
    }, null);
  }
  function IconOnBrandColorVariant$factory() {
    return getPropertyCallableRef('IconOnBrandColorVariant', 0, KProperty0, function () {
      return get_IconOnBrandColorVariant();
    }, null);
  }
  function LargeIconSize$factory() {
    return getPropertyCallableRef('LargeIconSize', 0, KProperty0, function () {
      return get_LargeIconSize();
    }, null);
  }
  function MediumIconSize$factory() {
    return getPropertyCallableRef('MediumIconSize', 0, KProperty0, function () {
      return get_MediumIconSize();
    }, null);
  }
  function SmallIconSize$factory() {
    return getPropertyCallableRef('SmallIconSize', 0, KProperty0, function () {
      return get_SmallIconSize();
    }, null);
  }
  var properties_initialized_IconStyles_kt_8kmhst;
  function _init_properties_IconStyles_kt__gxp5ut() {
    if (!properties_initialized_IconStyles_kt_8kmhst) {
      properties_initialized_IconStyles_kt_8kmhst = true;
      IconStyle$delegate = ComponentStyle_0(VOID, VOID, IconStyle$delegate$lambda);
      var tmp = get_IconStyle();
      IconBrandColorVariant$delegate = addVariant(tmp, VOID, IconBrandColorVariant$delegate$lambda);
      var tmp_0 = get_IconStyle();
      IconOnBrandColorVariant$delegate = addVariant(tmp_0, VOID, IconOnBrandColorVariant$delegate$lambda);
      var tmp_1 = get_IconStyle();
      LargeIconSize$delegate = addVariant(tmp_1, VOID, LargeIconSize$delegate$lambda);
      var tmp_2 = get_IconStyle();
      MediumIconSize$delegate = addVariant(tmp_2, VOID, MediumIconSize$delegate$lambda);
      var tmp_3 = get_IconStyle();
      SmallIconSize$delegate = addVariant(tmp_3, VOID, SmallIconSize$delegate$lambda);
    }
  }
  function ExternalLinkIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(999937288);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = toModifier_0(get_IconStyle(), [], $composer_0, 64);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(999937288, $dirty, -1, 'org.example.newportfolio.theme.icons.ExternalLinkIcon (Icons.kt:59)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().w46_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(ExternalLinkIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function ScrollMouseIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1507240593);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = toModifier_0(get_IconStyle(), [], $composer_0, 64);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(1507240593, $dirty, -1, 'org.example.newportfolio.theme.icons.ScrollMouseIcon (Icons.kt:77)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().x46_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(ScrollMouseIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function ArrowForwardIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(651322577);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = toModifier_0(get_IconStyle(), [], $composer_0, 64);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(651322577, $dirty, -1, 'org.example.newportfolio.theme.icons.ArrowForwardIcon (Icons.kt:101)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().y46_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(ArrowForwardIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function HamburgerIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(141176064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = toModifier_0(get_IconStyle(), [], $composer_0, 64);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(141176064, $dirty, -1, 'org.example.newportfolio.theme.icons.HamburgerIcon (Icons.kt:115)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().z46_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(HamburgerIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function DarkModeIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(1970846900);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_2;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(1970846900, $dirty, -1, 'org.example.newportfolio.theme.icons.DarkModeIcon (Icons.kt:129)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().a47_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(DarkModeIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function LightModeIcon(modifier, iconRenderStyle, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var iconRenderStyle_0 = {_v: iconRenderStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-1413083344);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 3) === 3) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.n1n()) {
      $composer_0.u1n();
      if (($changed & 1) === 0 ? true : $composer_0.y1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_2;
        }
        if (!(($default & 2) === 0)) {
          iconRenderStyle_0._v = new Fill();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.e1i();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.v1n();
      if (isTraceInProgress()) {
        traceEventStart(-1413083344, $dirty, -1, 'org.example.newportfolio.theme.icons.LightModeIcon (Icons.kt:141)');
      }
      createIcon(null, null, iconRenderStyle_0._v, toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().b47_1, $composer_0, 25088, 3);
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
      tmp0_safe_receiver.k1u(LightModeIcon$lambda(modifier_0, iconRenderStyle_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2067636040, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:18)');
    }
    $composer_0.s1n(352216652);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
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
    $this$Path.g31(SVGFillRule_EvenOdd_getInstance());
    $this$Path.f31('M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-881212031, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:33)');
    }
    $composer_0.s1n(-153340417);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
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
    $composer_0.s1n(-153340158);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.f31('M1 5.88269L12 12L23 5.88269C22.9593 5.10302 22.6521 4.37018 22.1414 3.83425C21.6308 3.29832 20.9552 2.99986 20.2531 3H3.74691C3.04482 2.99986 2.36924 3.29832 1.85856 3.83425C1.34787 4.37018 1.04072 5.10302 1 5.88269Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s_0($this$Path) {
    $this$Path.f31('M23 9L12 14.5823L1 9V17.2088C1 17.9492 1.28973 18.6591 1.80546 19.1826C2.32118 19.7059 3.02066 20 3.75 20H20.25C20.9793 20 21.6788 19.7059 22.1945 19.1826C22.7103 18.6591 23 17.9492 23 17.2088V9Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1341353034, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:48)');
    }
    $composer_0.s1n(-658898317);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
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
    $this$Path.g31(SVGFillRule_EvenOdd_getInstance());
    $this$Path.f31('M12 0.957031C5.74743 0.957031 0.677246 6.02609 0.677246 12.2798C0.677246 17.2827 3.92156 21.5267 8.42043 23.0241C8.98612 23.1291 9.19387 22.7785 9.19387 22.4794C9.19387 22.2094 9.18337 21.3175 9.1785 20.3713C6.0285 21.0563 5.36381 19.0354 5.36381 19.0354C4.84875 17.7267 4.10662 17.3787 4.10662 17.3787C3.07912 16.6759 4.18406 16.6905 4.18406 16.6905C5.32087 16.7702 5.91975 17.8573 5.91975 17.8573C6.92962 19.588 8.56856 19.0877 9.21468 18.7986C9.31631 18.0668 9.60975 17.5671 9.93356 17.2843C7.41862 16.9984 4.77468 16.0273 4.77468 11.6888C4.77468 10.4526 5.21718 9.44253 5.9415 8.64941C5.82375 8.36441 5.43618 7.21278 6.051 5.65316C6.051 5.65316 7.00162 5.34884 9.16537 6.81378C10.0687 6.56272 11.0376 6.43653 12 6.43222C12.9619 6.43653 13.9312 6.56234 14.8363 6.81341C16.9974 5.34847 17.9469 5.65278 17.9469 5.65278C18.5632 7.21222 18.1757 8.36403 18.0581 8.64903C18.7841 9.44216 19.2234 10.4522 19.2234 11.6884C19.2234 16.0373 16.5746 16.9947 14.0533 17.2752C14.4596 17.6265 14.8215 18.3158 14.8215 19.372C14.8215 20.887 14.8084 22.1063 14.8084 22.4792C14.8084 22.7805 15.0124 23.1336 15.5861 23.0224C20.0824 21.5235 23.3229 17.2808 23.3229 12.2798C23.3227 6.02647 18.2531 0.957031 12 0.957031Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-152323884, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:61)');
    }
    $composer_0.s1n(-1164455424);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
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
    $composer_0.s1n(-1164454926);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp1_group, $composer_0, 56);
    $composer_0.s1n(-1164454649);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.y1o();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y_1;
      $composer_0.e1p(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp2_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.f31('M16.5 12.9002C16.5 12.4031 16.9029 12.0002 17.4 12.0002C17.8971 12.0002 18.3 12.4031 18.3 12.9002V18.3002C18.3 19.7914 17.0912 21.0002 15.6 21.0002H5.7C4.20883 21.0002 3 19.7914 3 18.3002V8.4002C3 6.90903 4.20883 5.7002 5.7 5.7002H11.1C11.5971 5.7002 12 6.10314 12 6.6002C12 7.09725 11.5971 7.5002 11.1 7.5002H5.7C5.20294 7.5002 4.8 7.90314 4.8 8.4002V18.3002C4.8 18.7973 5.20294 19.2002 5.7 19.2002H15.6C16.0971 19.2002 16.5 18.7973 16.5 18.3002V12.9002Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y_0($this$Path) {
    $this$Path.f31('M19.1998 4.8H14.6998C14.2027 4.8 13.7998 4.39706 13.7998 3.9C13.7998 3.40294 14.2027 3 14.6998 3H20.0998C20.5969 3 20.9998 3.40294 20.9998 3.9V9.3C20.9998 9.79706 20.5969 10.2 20.0998 10.2C19.6027 10.2 19.1998 9.79706 19.1998 9.3V4.8Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y_1($this$Path) {
    $this$Path.f31('M10.8362 14.4364C10.4847 14.7879 9.91488 14.7879 9.56341 14.4364C9.21194 14.0849 9.21194 13.5151 9.56341 13.1636L19.4634 3.2636C19.8149 2.91213 20.3847 2.91213 20.7362 3.2636C21.0877 3.61508 21.0877 4.18492 20.7362 4.5364L10.8362 14.4364Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(638786885, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:79)');
    }
    $composer_0.s1n(-1670012760);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
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
    $composer_0.s1n(-1670012630);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.y1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_0;
      $composer_0.e1p(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp1_group, $composer_0, 56);
    $composer_0.s1n(-1670012504);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.y1o();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_1;
      $composer_0.e1p(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp2_group, $composer_0, 56);
    $composer_0.s1n(-1670012343);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.y1o();
    var tmp_5;
    if (false ? true : it_2 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_2;
      $composer_0.e1p(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp3_group, $composer_0, 56);
    $composer_0.s1n(-1670011957);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.y1o();
    var tmp_7;
    if (false ? true : it_3 === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_3;
      $composer_0.e1p(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.t1n();
    Path($this$createIcon, tmp4_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.f31('M15.6002 9.84001C15.6002 7.94401 14.1122 6.38401 12.2402 6.26401V10.32H15.6002V9.84001Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_0($this$Path) {
    $this$Path.f31('M8.3999 9.84001V10.32H11.7599V6.26401C9.8879 6.38401 8.3999 7.94401 8.3999 9.84001Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_1($this$Path) {
    $this$Path.f31('M15.5999 14.16V10.8H8.3999V14.16C8.3999 16.152 10.0079 17.76 11.9999 17.76C13.9919 17.76 15.5999 16.152 15.5999 14.16Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_2($this$Path) {
    $this$Path.f31('M12.8638 19.824L11.9998 20.688L11.1358 19.824C10.9438 19.632 10.6558 19.632 10.4638 19.824C10.2718 20.016 10.2718 20.304 10.4638 20.496L11.6638 21.696C11.7598 21.792 11.8798 21.84 11.9998 21.84C12.1198 21.84 12.2398 21.792 12.3358 21.696L13.5358 20.496C13.7278 20.304 13.7278 20.016 13.5358 19.824C13.3438 19.632 13.0558 19.632 12.8638 19.824Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3_3($this$Path) {
    $this$Path.f31('M12.3358 2.304C12.1438 2.112 11.8558 2.112 11.6638 2.304L10.4638 3.504C10.2718 3.696 10.2718 3.984 10.4638 4.176C10.5598 4.272 10.6798 4.32 10.7998 4.32C10.9198 4.32 11.0398 4.272 11.1358 4.176L11.9998 3.312L12.8638 4.176C12.9598 4.272 13.0798 4.32 13.1998 4.32C13.3198 4.32 13.4398 4.272 13.5358 4.176C13.7278 3.984 13.7278 3.696 13.5358 3.504L12.3358 2.304Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-500938595, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:103)');
    }
    $composer_0.s1n(2119397350);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
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
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Path) {
    $this$Path.f31('M16.175 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.175L11.275 6.09999C11.075 5.89999 10.9792 5.66665 10.9875 5.39999C10.9958 5.13332 11.1 4.89999 11.3 4.69999C11.5 4.51665 11.7333 4.42082 12 4.41249C12.2667 4.40415 12.5 4.49999 12.7 4.69999L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4833 12.2875 19.575 12.0125 19.575C11.7375 19.575 11.5 19.4833 11.3 19.3C11.1 19.1 11 18.8625 11 18.5875C11 18.3125 11.1 18.075 11.3 17.875L16.175 13Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-422855500, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:117)');
    }
    $composer_0.s1n(1613839727);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
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
    $this$Path.f31('M3.46657 19.2C3.16435 19.2 2.91101 19.085 2.70657 18.855C2.50212 18.625 2.3999 18.34 2.3999 18C2.3999 17.66 2.50212 17.375 2.70657 17.145C2.91101 16.915 3.16435 16.8 3.46657 16.8H20.5332C20.8355 16.8 21.0888 16.915 21.2932 17.145C21.4977 17.375 21.5999 17.66 21.5999 18C21.5999 18.34 21.4977 18.625 21.2932 18.855C21.0888 19.085 20.8355 19.2 20.5332 19.2H3.46657ZM3.46657 13.2C3.16435 13.2 2.91101 13.085 2.70657 12.855C2.50212 12.625 2.3999 12.34 2.3999 12C2.3999 11.66 2.50212 11.375 2.70657 11.145C2.91101 10.915 3.16435 10.8 3.46657 10.8H20.5332C20.8355 10.8 21.0888 10.915 21.2932 11.145C21.4977 11.375 21.5999 11.66 21.5999 12C21.5999 12.34 21.4977 12.625 21.2932 12.855C21.0888 13.085 20.8355 13.2 20.5332 13.2H3.46657ZM3.46657 7.19999C3.16435 7.19999 2.91101 7.08499 2.70657 6.85499C2.50212 6.62499 2.3999 6.33999 2.3999 5.99999C2.3999 5.65999 2.50212 5.37499 2.70657 5.14499C2.91101 4.91499 3.16435 4.79999 3.46657 4.79999H20.5332C20.8355 4.79999 21.0888 4.91499 21.2932 5.14499C21.4977 5.37499 21.5999 5.65999 21.5999 5.99999C21.5999 6.33999 21.4977 6.62499 21.2932 6.85499C21.0888 7.08499 20.8355 7.19999 20.5332 7.19999H3.46657Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(428631680, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:131)');
    }
    $composer_0.s1n(1108282532);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
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
    $this$Path.f31('M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9125 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.1208 4.2125 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.7917 11.8792 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0875 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2j(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1977114908, $changed, -1, 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:143)');
    }
    $composer_0.s1n(602724745);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.theme.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
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
    $this$Path.f31('M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.t46_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(-2067636040, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.u46_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-881212031, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.v46_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(-1341353034, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.w46_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(-152323884, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.x46_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(638786885, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.y46_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(-500938595, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.z46_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(-422855500, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.a47_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(428631680, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.b47_1 = ComposableLambda$invoke$ref_93(composableLambdaInstance(-1977114908, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
  }
  function ExternalLinkIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      ExternalLinkIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ScrollMouseIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      ScrollMouseIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ArrowForwardIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      ArrowForwardIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HamburgerIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      HamburgerIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function DarkModeIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      DarkModeIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightModeIcon$lambda($modifier, $iconRenderStyle, $$changed, $$default) {
    return function ($composer, $force) {
      LightModeIcon($modifier._v, $iconRenderStyle._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Strings() {
    this.c47_1 = 'Software Engineer - Mobile Developer';
    this.d47_1 = 'Dedicated to turning your innovative idea into a high-quality mobile reality.';
    this.e47_1 = 'Explore my works';
    this.f47_1 = 'Scroll';
    this.g47_1 = 'Explore my works';
    this.h47_1 = "All projects are primarily developed with Kotlin. It's a powerful cross-platform language and Google's preferred language for Android development.";
    this.i47_1 = 'About me';
    this.j47_1 = 'Mobile Developer specialized in performant Android & cross\u2011platform apps (Kotlin, Compose, Flutter, KMP). I focus on clean architecture, scalable code and solving real performance & UX problems.';
    this.k47_1 = 'Contact me';
    this.l47_1 = 'mohamed.abdelazim.elgohary@gmail.com';
    this.m47_1 = '@MohamedElgohary88';
    this.n47_1 = 'mailto:mohamed.abdelazim.elgohary@gmail.com';
    this.o47_1 = 'https://github.com/MohamedElgohary88';
    this.p47_1 = 'https://t.me/MohamedElgohary88';
    this.q47_1 = 'https://www.linkedin.com/in/mohamed-elgohary8';
    this.r47_1 = '\xA9 2024, Mohamed Elgohary';
  }
  var Strings_instance;
  function Strings_getInstance() {
    return Strings_instance;
  }
  function FontFamilies() {
    this.s47_1 = 'PoppinsRegular';
    this.t47_1 = 'PoppinsMedium';
  }
  var FontFamilies_instance;
  function FontFamilies_getInstance() {
    return FontFamilies_instance;
  }
  function Images() {
    this.u47_1 = 'images/logo_dark.svg';
    this.v47_1 = 'images/logo_light.svg';
    this.w47_1 = 'images/start_image.svg';
    this.x47_1 = 'images/android_studio.svg';
    this.y47_1 = 'images/kotlin.svg';
    this.z47_1 = 'images/ktor.svg';
    this.a48_1 = 'images/figma.svg';
    this.b48_1 = 'images/intellij_idea.svg';
    this.c48_1 = 'images/java.svg';
    this.d48_1 = 'images/firebase.svg';
    this.e48_1 = 'images/postgresql.svg';
    this.f48_1 = 'images/compose.svg';
    this.g48_1 = 'images/github_light.svg';
    this.h48_1 = 'images/github_dark.svg';
    this.i48_1 = 'images/mail_light.svg';
    this.j48_1 = 'images/mail_dark.svg';
    this.k48_1 = 'images/telegram_light.svg';
    this.l48_1 = 'images/telegram_dark.svg';
    this.m48_1 = 'images/linkedin_light.svg';
    this.n48_1 = 'images/linkedin_dark.svg';
    this.o48_1 = 'images/hony.svg';
    this.p48_1 = 'images/teamix.svg';
    this.q48_1 = 'images/weather.svg';
    this.r48_1 = 'images/movie.svg';
    this.s48_1 = 'images/blog.svg';
    this.t48_1 = 'images/hotel.svg';
    this.u48_1 = 'images/bismar.svg';
    this.v48_1 = 'images/flutter.svg';
    this.w48_1 = 'images/dart.svg';
    this.x48_1 = 'images/gradle.svg';
    this.y48_1 = 'images/graphql.svg';
    this.z48_1 = 'images/realm.svg';
    this.a49_1 = 'images/sqlite.svg';
    this.b49_1 = 'images/mongodb.svg';
    this.c49_1 = 'images/postman.svg';
    this.d49_1 = 'images/git_lab.svg';
    this.e49_1 = 'images/swift.svg';
    this.f49_1 = 'images/apple.svg';
    this.g49_1 = 'images/adobe_xd.svg';
    this.h49_1 = 'images/slack.svg';
  }
  var Images_instance;
  function Images_getInstance() {
    return Images_instance;
  }
  function UpdateEffect(key, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.m1p(-894557854);
    if (isTraceInProgress()) {
      traceEventStart(-894557854, $changed, -1, 'org.example.newportfolio.utils.UpdateEffect (UpdateEffect.kt:11)');
    }
    $composer_0.s1n(-999784759);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.y1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().k1i_1) {
      // Inline function 'org.example.newportfolio.utils.UpdateEffect.<anonymous>' call
      var value = mutableStateOf(false);
      this_0.e1p(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.t1n();
    var isTriggered$delegate = tmp0_group;
    LaunchedEffect(key, UpdateEffect$slambda_0(block, isTriggered$delegate, null), $composer_0, 72);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.n1p();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k1u(UpdateEffect$lambda_1(key, block, $changed));
    }
  }
  function UpdateEffect$lambda($isTriggered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isTriggered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isTriggered$delegate.p2();
  }
  function UpdateEffect$lambda_0($isTriggered$delegate, value) {
    getLocalDelegateReference('isTriggered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isTriggered$delegate.c10(value);
    return Unit_instance;
  }
  function UpdateEffect$slambda($block, $isTriggered$delegate, resultContinuation) {
    this.q49_1 = $block;
    this.r49_1 = $isTriggered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UpdateEffect$slambda).b12 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c12($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(UpdateEffect$slambda).ad = function (p1, $completion) {
    return this.b12((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UpdateEffect$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 3;
            if (UpdateEffect$lambda(this.r49_1)) {
              this.cc_1 = 1;
              suspendResult = this.q49_1(this.s49_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              UpdateEffect$lambda_0(this.r49_1, true);
              this.cc_1 = 2;
              continue $sm;
            }

          case 1:
            this.cc_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 3) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  protoOf(UpdateEffect$slambda).c12 = function ($this$LaunchedEffect, completion) {
    var i = new UpdateEffect$slambda(this.q49_1, this.r49_1, completion);
    i.s49_1 = $this$LaunchedEffect;
    return i;
  };
  function UpdateEffect$slambda_0($block, $isTriggered$delegate, resultContinuation) {
    var i = new UpdateEffect$slambda($block, $isTriggered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b12($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UpdateEffect$lambda_1($key, $block, $$changed) {
    return function ($composer, $force) {
      UpdateEffect($key, $block, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: init
  Strings_instance = new Strings();
  FontFamilies_instance = new FontFamilies();
  Images_instance = new Images();
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=newportfolio.js.map
