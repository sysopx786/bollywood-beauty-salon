import { x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route$12, r as ServicePage } from "./_ssr/router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_service-C89RzLMw.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceRoute() {
	const { service } = Route$12.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePage, { slug: service });
}
//#endregion
export { ServiceRoute as component };
