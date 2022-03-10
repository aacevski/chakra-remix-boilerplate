var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_remix = __toESM(require_remix());
var import_config = require("dotenv/config");

// app/context.ts
init_react();
var React2 = __toESM(require("react"));
var ServerStyleContext = React2.createContext(null);
var ClientStyleContext = React2.createContext(null);

// app/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/andrejacevski/Projects/chakra-remix-boilerplate/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
init_react();
var import_react2 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var import_react3 = require("@chakra-ui/react");
var import_react4 = require("@emotion/react");
var meta = () => {
  return { title: "Chakra UI Boilerplate" };
};
function App() {
  return /* @__PURE__ */ import_react2.default.createElement(Document, null, /* @__PURE__ */ import_react2.default.createElement(import_react3.ChakraProvider, null, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ import_react2.default.createElement(Document, null, /* @__PURE__ */ import_react2.default.createElement(import_react3.VStack, {
    h: "100vh",
    justify: "center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react3.Heading, null, "There was an error"), /* @__PURE__ */ import_react2.default.createElement(import_react3.Text, null, error.message), /* @__PURE__ */ import_react2.default.createElement("hr", null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Text, null, "Hey, developer, you should replace this with what you want your users to see.")));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ import_react2.default.createElement(import_react3.Text, null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ import_react2.default.createElement(import_react3.Text, null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ import_react2.default.createElement(Document, null, /* @__PURE__ */ import_react2.default.createElement(import_react3.VStack, {
    h: "100vh",
    justify: "center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react3.Heading, null, caught.status, ": ", caught.statusText), message));
}
var Document = (0, import_react4.withEmotionCache)(({ children }, emotionCache) => {
  const serverSyleData = import_react2.default.useContext(ServerStyleContext);
  const clientStyleData = import_react2.default.useContext(ClientStyleContext);
  import_react2.default.useEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react2.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react2.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstaticom"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ import_react2.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ import_react2.default.createElement("body", null, children, /* @__PURE__ */ import_react2.default.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Scripts, null), true ? /* @__PURE__ */ import_react2.default.createElement(import_remix2.LiveReload, null) : null));
});

// route:/Users/andrejacevski/Projects/chakra-remix-boilerplate/app/routes/route-with-error.tsx
var route_with_error_exports = {};
__export(route_with_error_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => RouteWithError,
  meta: () => meta2
});
init_react();
var import_react5 = require("@chakra-ui/react");
var meta2 = () => {
  return {
    title: "Error route",
    description: "Generate Text missing error"
  };
};
function CatchBoundary2() {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h2"
  }, "I caught some condition"));
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement(import_react5.Box, {
    bg: "red.400",
    px: 4,
    py: 2
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h3",
    size: "lg",
    color: "white"
  }, "Something is really wrong!"), /* @__PURE__ */ React.createElement(import_react5.Box, {
    color: "white",
    fontSize: 22
  }, error.message));
}
function RouteWithError() {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(Text, null, "If you see this then you imported Text"));
}

// route:/Users/andrejacevski/Projects/chakra-remix-boilerplate/app/routes/good-route.tsx
var good_route_exports = {};
__export(good_route_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => GoodRoute,
  meta: () => meta3
});
init_react();
var import_react6 = require("@chakra-ui/react");
var meta3 = () => {
  return {
    title: "Good Route",
    description: "Good route"
  };
};
function CatchBoundary3() {
  return /* @__PURE__ */ React.createElement(import_react6.Box, {
    bg: "yellow.500"
  }, /* @__PURE__ */ React.createElement(import_react6.Heading, {
    as: "h2"
  }, "I caught some condition"));
}
function ErrorBoundary3() {
  return /* @__PURE__ */ React.createElement(import_react6.Box, {
    bg: "red.400",
    color: "white"
  }, /* @__PURE__ */ React.createElement(import_react6.Heading, {
    as: "h2"
  }, "Something is really wrong!"));
}
function GoodRoute() {
  return /* @__PURE__ */ React.createElement(import_react6.Box, {
    bg: "green.400"
  }, "I'm a real route!");
}

// route:/Users/andrejacevski/Projects/chakra-remix-boilerplate/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react7 = require("@chakra-ui/react");
var import_remix3 = __toESM(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement(import_react7.Box, {
    fontFamily: "system-ui, sans-serif",
    lineHeight: 1.4
  }, /* @__PURE__ */ React.createElement(import_react7.Heading, {
    as: "h1",
    color: "blue.400"
  }, "Welcome to Remix with Chakra UI!"), /* @__PURE__ */ React.createElement(import_react7.HStack, {
    spacing: 4
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    href: "https://remix.run/docs",
    target: "_blank",
    rel: "noreferrer"
  }, "Remix Docs"), /* @__PURE__ */ React.createElement(import_react7.Link, {
    target: "_blank",
    href: "https://chakra-ui.com/docs/getting-started",
    rel: "noreferrer"
  }, "Chakra UI Docs"), /* @__PURE__ */ React.createElement(import_react7.Link, {
    as: import_remix3.Link,
    color: "red.400",
    to: "/nothing-here"
  }, "Nothing here")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9f69917e", "entry": { "module": "/build/entry.client-HXVZGTOD.js", "imports": ["/build/_shared/chunk-XNKP3RPH.js", "/build/_shared/chunk-AU5EW2S2.js", "/build/_shared/chunk-LH43ZN2Y.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MK22XCVS.js", "imports": ["/build/_shared/chunk-V2IEK4SK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/good-route": { "id": "routes/good-route", "parentId": "root", "path": "good-route", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/good-route-M4MZZ6VU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2VYDVNDM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/route-with-error": { "id": "routes/route-with-error", "parentId": "root", "path": "route-with-error", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/route-with-error-FSPE3XVP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true } }, "url": "/build/manifest-9F69917E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/route-with-error": {
    id: "routes/route-with-error",
    parentId: "root",
    path: "route-with-error",
    index: void 0,
    caseSensitive: void 0,
    module: route_with_error_exports
  },
  "routes/good-route": {
    id: "routes/good-route",
    parentId: "root",
    path: "good-route",
    index: void 0,
    caseSensitive: void 0,
    module: good_route_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jb250ZXh0LnRzIiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAicm91dGU6L1VzZXJzL2FuZHJlamFjZXZza2kvUHJvamVjdHMvY2hha3JhLXJlbWl4LWJvaWxlcnBsYXRlL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9yb3V0ZS13aXRoLWVycm9yLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9nb29kLXJvdXRlLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FuZHJlamFjZXZza2kvUHJvamVjdHMvY2hha3JhLXJlbWl4LWJvaWxlcnBsYXRlL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9yb3V0ZS13aXRoLWVycm9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9nb29kLXJvdXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW5kcmVqYWNldnNraS9Qcm9qZWN0cy9jaGFrcmEtcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3JvdXRlLXdpdGgtZXJyb3JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JvdXRlLXdpdGgtZXJyb3JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicm91dGUtd2l0aC1lcnJvclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZ29vZC1yb3V0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ29vZC1yb3V0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJnb29kLXJvdXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuaW1wb3J0IHsgU2VydmVyU3R5bGVDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7IGNyZWF0ZUVtb3Rpb25DYWNoZSB9IGZyb20gJy4vY3JlYXRlRW1vdGlvbkNhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgIDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xuXG4gIGNvbnN0IGNodW5rcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxTZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NodW5rcy5zdHlsZXN9PlxuICAgICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cbiAgICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgICA8L1NlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhIHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIGlkczogQXJyYXk8c3RyaW5nPlxuICAgIGNzczogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJTdHlsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFNlcnZlclN0eWxlQ29udGV4dERhdGFbXSB8IG51bGw+KG51bGwpXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50U3R5bGVDb250ZXh0RGF0YSB7XG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IENsaWVudFN0eWxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YSB8IG51bGw+KG51bGwpIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogXCJjc3NcIiB9KVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUNhdGNoLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IFZTdGFjaywgSGVhZGluZywgQ2hha3JhUHJvdmlkZXIsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7IFNlcnZlclN0eWxlQ29udGV4dCwgQ2xpZW50U3R5bGVDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdDaGFrcmEgVUkgQm9pbGVycGxhdGUnIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8VlN0YWNrIGg9XCIxMDB2aFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRpbmc+VGhlcmUgd2FzIGFuIGVycm9yPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dD57ZXJyb3IubWVzc2FnZX08L1RleHQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBIZXksIGRldmVsb3BlciwgeW91IHNob3VsZCByZXBsYWNlIHRoaXMgd2l0aCB3aGF0IHlvdSB3YW50IHlvdXIgdXNlcnNcbiAgICAgICAgICB0byBzZWUuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L1RleHQ+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxWU3RhY2sgaD1cIjEwMHZoXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGluZz5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmludGVyZmFjZSBEb2N1bWVudFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuICAoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcbiAgICBjb25zdCBzZXJ2ZXJTeWxlRGF0YSA9IFJlYWN0LnVzZUNvbnRleHQoU2VydmVyU3R5bGVDb250ZXh0KTtcbiAgICBjb25zdCBjbGllbnRTdHlsZURhdGEgPSBSZWFjdC51c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cbiAgICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAvLyByZS1pbmplY3QgdGFnc1xuICAgICAgY29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcbiAgICAgIGNsaWVudFN0eWxlRGF0YT8ucmVzZXQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWNvbVwiIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAge3NlcnZlclN5bGVEYXRhPy5tYXAoKHsga2V5LCBpZHMsIGNzcyB9KSA9PiAoXG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGRhdGEtZW1vdGlvbj17YCR7a2V5fSAke2lkcy5qb2luKCcgJyl9YH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjc3MgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gPExpdmVSZWxvYWQgLz4gOiBudWxsfVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcbiIsICJpbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbWV0YVxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0Vycm9yIHJvdXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0dlbmVyYXRlIFRleHQgbWlzc2luZyBlcnJvcicsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiPkkgY2F1Z2h0IHNvbWUgY29uZGl0aW9uPC9IZWFkaW5nPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGJnPVwicmVkLjQwMFwiIHB4PXs0fSBweT17Mn0+XG4gICAgICA8SGVhZGluZyBhcz1cImgzXCIgc2l6ZT1cImxnXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICBTb21ldGhpbmcgaXMgcmVhbGx5IHdyb25nIVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9ezIyfT5cbiAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuLy8gRG9uJ3QgaW1wb3J0IFRleHQgZnJvbSBAY2hha3JhLXVpL3JlYWN0XG4vLyBJZiB5b3UgZG8gdGhlIGVycm9yIHdvbid0IGJlIHRocm93blxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVXaXRoRXJyb3IoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUZXh0PklmIHlvdSBzZWUgdGhpcyB0aGVuIHlvdSBpbXBvcnRlZCBUZXh0PC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnR29vZCBSb3V0ZScsXG4gICAgZGVzY3JpcHRpb246ICdHb29kIHJvdXRlJyxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYmc9XCJ5ZWxsb3cuNTAwXCI+XG4gICAgICA8SGVhZGluZyBhcz1cImgyXCI+SSBjYXVnaHQgc29tZSBjb25kaXRpb248L0hlYWRpbmc+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYmc9XCJyZWQuNDAwXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiPlNvbWV0aGluZyBpcyByZWFsbHkgd3JvbmchPC9IZWFkaW5nPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb29kUm91dGUoKSB7XG4gIHJldHVybiA8Qm94IGJnPVwiZ3JlZW4uNDAwXCI+SSdtIGEgcmVhbCByb3V0ZSE8L0JveD47XG59XG4iLCAiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBIU3RhY2ssIExpbmsgYXMgQ2hha3JhTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBmb250RmFtaWx5PVwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIgbGluZUhlaWdodD17MS40fT5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBjb2xvcj1cImJsdWUuNDAwXCI+XG4gICAgICAgIFdlbGNvbWUgdG8gUmVtaXggd2l0aCBDaGFrcmEgVUkhXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICA8Q2hha3JhTGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVtaXggRG9jc1xuICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICAgIDxDaGFrcmFMaW5rXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvZ2V0dGluZy1zdGFydGVkXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIENoYWtyYSBVSSBEb2NzXG4gICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgPENoYWtyYUxpbmsgYXM9e0xpbmt9IGNvbG9yPVwicmVkLjQwMFwiIHRvPVwiL25vdGhpbmctaGVyZVwiPlxuICAgICAgICAgIE5vdGhpbmcgaGVyZVxuICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICA8L0hTdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5ZjY5OTE3ZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSFhWWkdUT0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhOS1AzUlBILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVU1RVcyUzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MSDQzWk4yWS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTUsyMlhDVlMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVYySUVLNFNLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvZ29vZC1yb3V0ZSc6eydpZCc6J3JvdXRlcy9nb29kLXJvdXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2dvb2Qtcm91dGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZ29vZC1yb3V0ZS1NNE1aWjZWVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC0yVllEVk5ETS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JvdXRlLXdpdGgtZXJyb3InOnsnaWQnOidyb3V0ZXMvcm91dGUtd2l0aC1lcnJvcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyb3V0ZS13aXRoLWVycm9yJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JvdXRlLXdpdGgtZXJyb3ItRlNQRTNYVlAuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTlGNjk5MTdFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFT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
