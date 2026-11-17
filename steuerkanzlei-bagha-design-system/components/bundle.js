/* @ds-bundle: {"format":4,"namespace":"SteuerkanzleiBaghaDesignSystem_3f9615","components":[{"name":"Icon"},{"name":"Badge"},{"name":"Card"},{"name":"Button"},{"name":"IconButton"},{"name":"SectionHeading"},{"name":"ServiceCard"},{"name":"Alert"},{"name":"Dialog"},{"name":"Toast"},{"name":"Tooltip"},{"name":"Checkbox"},{"name":"Input"},{"name":"Radio"},{"name":"Select"},{"name":"Switch"},{"name":"Textarea"},{"name":"Accordion"},{"name":"NavLink"},{"name":"Tabs"}],"sources":["components/core/Icon.jsx","components/core/Badge.jsx","components/core/Card.jsx","components/core/Button.jsx","components/core/IconButton.jsx","components/core/SectionHeading.jsx","components/core/ServiceCard.jsx","components/feedback/Alert.jsx","components/feedback/Dialog.jsx","components/feedback/Toast.jsx","components/feedback/Tooltip.jsx","components/forms/Checkbox.jsx","components/forms/Input.jsx","components/forms/Radio.jsx","components/forms/Select.jsx","components/forms/Switch.jsx","components/forms/Textarea.jsx","components/navigation/Accordion.jsx","components/navigation/NavLink.jsx","components/navigation/Tabs.jsx"]} */
/* Steuerkanzlei Bagha — components built from components/<group>/<Comp>.jsx (React 18 global, classic JSX). */
(() => {
const __ds_ns = (window.SteuerkanzleiBaghaDesignSystem_3f9615 = window.SteuerkanzleiBaghaDesignSystem_3f9615 || {});
const __ds_scope = {};
(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const CDN = "https://unpkg.com/lucide-static@0.460.0/icons/";
function Icon({ name, size = 20, color = "currentColor", style, title }) {
  const url = "url(" + CDN + name + ".svg)";
  return /* @__PURE__ */ React.createElement("span", { role: title ? "img" : void 0, "aria-label": title, "aria-hidden": title ? void 0 : true, style: { display: "inline-block", flex: "none", width: size, height: size, backgroundColor: color, WebkitMaskImage: url, maskImage: url, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", ...style } });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = { neutral: ["var(--paper-200)", "var(--ink-700)"], accent: ["var(--sand-100)", "var(--sand-600)"], navy: ["var(--navy-100)", "var(--navy-700)"], success: ["var(--status-success-bg)", "var(--status-success)"], warning: ["var(--status-warning-bg)", "var(--status-warning)"], error: ["var(--status-error-bg)", "var(--status-error)"] };
function Badge({ tone = "neutral", children, dot, style }) {
  const [bg, fg] = T[tone] || T.neutral;
  return /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: "0 10px", borderRadius: "var(--radius-pill)", background: bg, color: fg, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: ".04em", lineHeight: 1, whiteSpace: "nowrap", ...style } }, dot && /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 3, background: fg } }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({ variant = "outline", interactive, padding = 32, onClick, children, style }) {
  const [h, setH] = React.useState(false);
  const V = { outline: { bg: "var(--surface-card)", bd: "1px solid var(--border-hairline)" }, muted: { bg: "var(--surface-muted)", bd: "1px solid transparent" }, inverse: { bg: "var(--bg-inverse)", bd: "1px solid transparent", fg: "var(--text-inverse)" }, plain: { bg: "transparent", bd: "none" } }[variant];
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick,
      onMouseEnter: () => interactive && setH(true),
      onMouseLeave: () => setH(false),
      style: {
        background: V.bg,
        border: V.bd,
        color: V.fg,
        borderRadius: "var(--radius-card)",
        padding,
        boxSizing: "border-box",
        cursor: interactive ? "pointer" : void 0,
        boxShadow: h ? "var(--shadow-2)" : "none",
        transform: h ? "translateY(-2px)" : "none",
        borderColor: h && variant === "outline" ? "var(--ink-300)" : void 0,
        transition: "box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base)",
        ...style
      }
    },
    children
  );
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const { Icon } = __ds_scope;
const SIZES = { sm: { h: 36, px: 16, fs: 14, ic: 16 }, md: { h: 46, px: 22, fs: 15, ic: 18 }, lg: { h: 54, px: 28, fs: 16, ic: 18 } };
function Button({ variant = "primary", size = "md", iconLeft, iconRight, disabled, fullWidth, href, onClick, children, type = "button", style }) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: { bg: h ? "var(--action-primary-hover)" : "var(--action-primary)", fg: "var(--action-on-primary)", bd: "transparent" },
    secondary: { bg: h ? "var(--action-secondary-hover)" : "transparent", fg: "var(--text-strong)", bd: "var(--border-strong)" },
    ghost: { bg: "transparent", fg: h ? "var(--text-strong)" : "var(--text-body)", bd: "transparent", ul: true },
    inverse: { bg: h ? "var(--paper-200)" : "var(--paper-50)", fg: "var(--ink-900)", bd: "transparent" },
    "inverse-outline": { bg: h ? "rgba(247,245,241,.08)" : "transparent", fg: "var(--paper-50)", bd: "rgba(247,245,241,.6)" }
  }[variant];
  const st = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : void 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: s.h,
    padding: variant === "ghost" ? "0 4px" : "0 " + s.px + "px",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: s.fs,
    fontWeight: 500,
    letterSpacing: ".02em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    background: V.bg,
    color: V.fg,
    border: "1px solid " + V.bd,
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: V.ul ? "underline" : "none",
    textUnderlineOffset: 5,
    textDecorationThickness: 1,
    textDecorationColor: V.ul ? h ? "var(--ink-900)" : "var(--sand-500)" : void 0,
    transform: p && !disabled ? "translateY(1px)" : "none",
    transition: "background var(--dur-fast) var(--ease-standard),color var(--dur-fast),transform var(--dur-fast)",
    ...style
  };
  const ev = { onMouseEnter: () => !disabled && setH(true), onMouseLeave: () => {
    setH(false);
    setP(false);
  }, onMouseDown: () => setP(true), onMouseUp: () => setP(false), onClick: disabled ? void 0 : onClick, style: st };
  const inner = /* @__PURE__ */ React.createElement(React.Fragment, null, iconLeft && /* @__PURE__ */ React.createElement(Icon, { name: iconLeft, size: s.ic }), children, iconRight && /* @__PURE__ */ React.createElement(Icon, { name: iconRight, size: s.ic, style: { transform: h && iconRight === "arrow-right" ? "translateX(3px)" : "none", transition: "transform var(--dur-base) var(--ease-standard)" } }));
  return href && !disabled ? /* @__PURE__ */ React.createElement("a", { href, ...ev }, inner) : /* @__PURE__ */ React.createElement("button", { type, disabled, ...ev }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const { Icon } = __ds_scope;
function IconButton({ icon, label, variant = "ghost", size = 40, onClick, disabled, style }) {
  const [h, setH] = React.useState(false);
  const V = { ghost: { bg: h ? "var(--paper-200)" : "transparent", fg: "var(--text-strong)", bd: "transparent" }, outline: { bg: h ? "var(--paper-200)" : "transparent", fg: "var(--text-strong)", bd: "var(--border-default)" }, solid: { bg: h ? "var(--action-primary-hover)" : "var(--action-primary)", fg: "var(--paper-50)", bd: "transparent" }, inverse: { bg: h ? "rgba(247,245,241,.1)" : "transparent", fg: "var(--paper-50)", bd: "var(--border-inverse)" } }[variant];
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      "aria-label": label,
      title: label,
      disabled,
      onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: { width: size, height: size, display: "inline-grid", placeItems: "center", padding: 0, background: V.bg, color: V.fg, border: "1px solid " + V.bd, borderRadius: "var(--radius-control)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, transition: "background var(--dur-fast)", ...style }
    },
    /* @__PURE__ */ React.createElement(Icon, { name: icon, size: Math.round(size * 0.45) })
  );
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({ eyebrow, title, lead, align = "left", inverse, as = "h2", style }) {
  const H = as;
  const c = align === "center";
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, alignItems: c ? "center" : "flex-start", textAlign: align, maxWidth: c ? 720 : 640, margin: c ? "0 auto" : void 0, ...style } }, eyebrow && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 40, height: 1, background: "var(--sand-500)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontSize: "var(--fs-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", fontWeight: 600, color: inverse ? "var(--sand-400)" : "var(--text-accent)" } }, eyebrow), c && /* @__PURE__ */ React.createElement("span", { style: { width: 40, height: 1, background: "var(--sand-500)" } })), /* @__PURE__ */ React.createElement(H, { style: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: as === "h1" ? "var(--fs-display-l)" : "var(--fs-h1)", lineHeight: as === "h1" ? "var(--lh-display-l)" : "var(--lh-h1)", color: inverse ? "var(--text-inverse)" : "var(--text-strong)", margin: 0, textWrap: "balance" } }, title), lead && /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: "var(--fs-lead)", lineHeight: "var(--lh-lead)", color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)", textWrap: "pretty" } }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
const { Card, Icon } = __ds_scope;
function ServiceCard({ icon, title, description, linkLabel = "Mehr erfahren", onClick, style }) {
  return /* @__PURE__ */ React.createElement(Card, { interactive: true, onClick, style: { display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style } }, icon && /* @__PURE__ */ React.createElement("span", { style: { width: 48, height: 48, display: "grid", placeItems: "center", border: "1px solid var(--border-accent)", borderRadius: "50%", color: "var(--navy-700)" } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 22 })), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: 500, margin: 0, color: "var(--text-strong)" } }, title), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: "var(--fs-small)", lineHeight: "var(--lh-small)", color: "var(--text-muted)", flex: 1 } }, description), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "var(--text-strong)", letterSpacing: ".02em" } }, linkLabel, /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 16 })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const { Icon } = __ds_scope;
const T = { info: ["var(--status-info-bg)", "var(--status-info)", "info"], success: ["var(--status-success-bg)", "var(--status-success)", "circle-check"], warning: ["var(--status-warning-bg)", "var(--status-warning)", "triangle-alert"], error: ["var(--status-error-bg)", "var(--status-error)", "circle-alert"] };
function Alert({ tone = "info", title, children, style }) {
  const [bg, fg, ic] = T[tone] || T.info;
  return /* @__PURE__ */ React.createElement("div", { role: "status", style: { display: "flex", gap: 14, padding: "16px 20px", background: bg, borderRadius: "var(--radius-card)", color: "var(--text-body)", fontSize: 15, lineHeight: 1.5, ...style } }, /* @__PURE__ */ React.createElement(Icon, { name: ic, size: 20, color: fg, style: { marginTop: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, title && /* @__PURE__ */ React.createElement("strong", { style: { fontWeight: 600, color: fg } }, title), children && /* @__PURE__ */ React.createElement("span", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const { IconButton } = __ds_scope;
function Dialog({ open, title, onClose, children, footer, width = 520, inline }) {
  if (!open) return null;
  const box = /* @__PURE__ */ React.createElement("div", { role: "dialog", "aria-modal": "true", onClick: (e) => e.stopPropagation(), style: { width: "100%", maxWidth: width, background: "var(--surface-card)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-3)", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "28px 28px 0" } }, /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", color: "var(--text-strong)" } }, title), onClose && /* @__PURE__ */ React.createElement(IconButton, { icon: "x", label: "Schlie\xDFen", size: 36, onClick: onClose })), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 28px 28px", fontSize: 16, lineHeight: 1.6, color: "var(--text-body)" } }, children), footer && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12, padding: "16px 28px", borderTop: "1px solid var(--border-hairline)" } }, footer));
  if (inline) return box;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 100, background: "rgba(20,27,39,.48)", backdropFilter: "blur(2px)", display: "grid", placeItems: "center", padding: 24 } }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const { Icon } = __ds_scope;
function Toast({ tone = "success", children, onClose, style }) {
  const ic = { success: "check", info: "info", error: "circle-alert" }[tone] || "info";
  return /* @__PURE__ */ React.createElement("div", { role: "status", style: { display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--ink-900)", color: "var(--paper-50)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-3)", fontSize: 15, ...style } }, /* @__PURE__ */ React.createElement(Icon, { name: ic, size: 18, color: tone === "error" ? "#E9A497" : "var(--sand-400)" }), /* @__PURE__ */ React.createElement("span", null, children), onClose && /* @__PURE__ */ React.createElement("button", { onClick: onClose, "aria-label": "Schlie\xDFen", style: { background: "none", border: 0, color: "var(--ink-400)", cursor: "pointer", padding: 0, display: "grid" } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 16 })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({ content, children, placement = "top", open }) {
  const [h, setH] = React.useState(false);
  const show = open ?? h;
  const pos = placement === "bottom" ? { top: "calc(100% + 8px)" } : { bottom: "calc(100% + 8px)" };
  return /* @__PURE__ */ React.createElement("span", { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false), style: { position: "relative", display: "inline-flex" } }, children, show && /* @__PURE__ */ React.createElement("span", { role: "tooltip", style: { position: "absolute", left: "50%", transform: "translateX(-50%)", ...pos, background: "var(--ink-900)", color: "var(--paper-50)", fontSize: 13, lineHeight: 1.4, padding: "6px 10px", borderRadius: "var(--radius-1)", whiteSpace: "nowrap", zIndex: 50, pointerEvents: "none" } }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const { Icon } = __ds_scope;
function Checkbox({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /* @__PURE__ */ React.createElement("label", { style: { display: "inline-flex", alignItems: "flex-start", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontSize: 15, lineHeight: 1.5, color: "var(--text-body)", ...style } }, /* @__PURE__ */ React.createElement("span", { role: "checkbox", "aria-checked": on, tabIndex: 0, onClick: t, onKeyDown: (e) => e.key === " " && (e.preventDefault(), t()), style: { flex: "none", width: 20, height: 20, marginTop: 2, boxSizing: "border-box", display: "grid", placeItems: "center", borderRadius: "var(--radius-1)", border: "1px solid " + (on ? "var(--ink-900)" : "var(--border-default)"), background: on ? "var(--ink-900)" : "var(--surface-card)", color: "var(--paper-50)", transition: "background var(--dur-fast)" } }, on && /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14 })), label && /* @__PURE__ */ React.createElement("span", { onClick: t }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const labelSt = { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-strong)" };
const hintSt = (e) => ({ fontSize: 13, color: e ? "var(--status-error)" : "var(--text-subtle)" });
const ctrl = (f, e, d) => ({ width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-strong)", background: d ? "var(--paper-200)" : "var(--surface-card)", border: "1px solid " + (e ? "var(--status-error)" : f ? "var(--ink-900)" : "var(--border-default)"), borderRadius: "var(--radius-control)", outline: "none", boxShadow: f ? "0 0 0 3px var(--sand-200)" : "none", transition: "border-color var(--dur-fast),box-shadow var(--dur-fast)", opacity: d ? 0.6 : 1 });
function Input({ label, hint, error, required, disabled, type = "text", value, defaultValue, placeholder, onChange, name, style }) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: id, style: labelSt }, label, required && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text-accent)" } }, " *")), /* @__PURE__ */ React.createElement("input", { id, name, type, value, defaultValue, placeholder, disabled, onChange, onFocus: () => setF(true), onBlur: () => setF(false), style: { ...ctrl(f, error, disabled), height: 48, padding: "0 14px" } }), (error || hint) && /* @__PURE__ */ React.createElement("span", { style: hintSt(error) }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({ name, options = [], value, defaultValue, onChange, direction = "column", style }) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  return /* @__PURE__ */ React.createElement("div", { role: "radiogroup", style: { display: "flex", flexDirection: direction, gap: direction === "row" ? 24 : 12, ...style } }, options.map((o) => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    const on = cur === val;
    return /* @__PURE__ */ React.createElement("label", { key: val, onClick: () => {
      setV(val);
      onChange && onChange(val);
    }, style: { display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontSize: 15, color: "var(--text-body)" } }, /* @__PURE__ */ React.createElement("span", { role: "radio", "aria-checked": on, style: { width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", border: "1px solid " + (on ? "var(--ink-900)" : "var(--border-default)"), background: "var(--surface-card)", display: "grid", placeItems: "center" } }, on && /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "var(--ink-900)" } })), lab);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const { Icon } = __ds_scope;
const labelSt = { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-strong)" };
const hintSt = (e) => ({ fontSize: 13, color: e ? "var(--status-error)" : "var(--text-subtle)" });
const ctrl = (f, e, d) => ({ width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-strong)", background: d ? "var(--paper-200)" : "var(--surface-card)", border: "1px solid " + (e ? "var(--status-error)" : f ? "var(--ink-900)" : "var(--border-default)"), borderRadius: "var(--radius-control)", outline: "none", boxShadow: f ? "0 0 0 3px var(--sand-200)" : "none", transition: "border-color var(--dur-fast),box-shadow var(--dur-fast)", opacity: d ? 0.6 : 1 });
function Select({ label, hint, error, required, disabled, options = [], value, defaultValue, placeholder, onChange, name, style }) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: id, style: labelSt }, label, required && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text-accent)" } }, " *")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("select", { id, name, value, defaultValue: defaultValue ?? (placeholder ? "" : void 0), disabled, onChange, onFocus: () => setF(true), onBlur: () => setF(false), style: { ...ctrl(f, error, disabled), height: 48, padding: "0 40px 0 14px", appearance: "none", WebkitAppearance: "none", cursor: "pointer" } }, placeholder && /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, placeholder), options.map((o) => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l);
  })), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 18, style: { position: "absolute", right: 14, top: 15, pointerEvents: "none", color: "var(--text-muted)" } })), (error || hint) && /* @__PURE__ */ React.createElement("span", { style: hintSt(error) }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /* @__PURE__ */ React.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontSize: 15, color: "var(--text-body)", ...style } }, /* @__PURE__ */ React.createElement("span", { role: "switch", "aria-checked": on, tabIndex: 0, onClick: t, style: { position: "relative", width: 40, height: 22, borderRadius: 11, background: on ? "var(--navy-700)" : "var(--ink-300)", transition: "background var(--dur-base) var(--ease-standard)" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: 3, left: on ? 21 : 3, width: 16, height: 16, borderRadius: 8, background: "var(--paper-50)", boxShadow: "var(--shadow-1)", transition: "left var(--dur-base) var(--ease-standard)" } })), label && /* @__PURE__ */ React.createElement("span", { onClick: t }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const labelSt = { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-strong)" };
const hintSt = (e) => ({ fontSize: 13, color: e ? "var(--status-error)" : "var(--text-subtle)" });
const ctrl = (f, e, d) => ({ width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-strong)", background: d ? "var(--paper-200)" : "var(--surface-card)", border: "1px solid " + (e ? "var(--status-error)" : f ? "var(--ink-900)" : "var(--border-default)"), borderRadius: "var(--radius-control)", outline: "none", boxShadow: f ? "0 0 0 3px var(--sand-200)" : "none", transition: "border-color var(--dur-fast),box-shadow var(--dur-fast)", opacity: d ? 0.6 : 1 });
function Textarea({ label, hint, error, required, disabled, rows = 5, value, defaultValue, placeholder, onChange, name, style }) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: id, style: labelSt }, label, required && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text-accent)" } }, " *")), /* @__PURE__ */ React.createElement("textarea", { id, name, rows, value, defaultValue, placeholder, disabled, onChange, onFocus: () => setF(true), onBlur: () => setF(false), style: { ...ctrl(f, error, disabled), padding: "12px 14px", lineHeight: 1.5, resize: "vertical" } }), (error || hint) && /* @__PURE__ */ React.createElement("span", { style: hintSt(error) }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const { Icon } = __ds_scope;
function Accordion({ items = [], defaultOpen = 0, style }) {
  const [o, setO] = React.useState(defaultOpen);
  return /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--border-hairline)", ...style } }, items.map((it, i) => {
    const on = o === i;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: { borderBottom: "1px solid var(--border-hairline)" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setO(on ? -1 : i), "aria-expanded": on, style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "22px 0", background: "none", border: 0, cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontSize: "var(--fs-h4)", lineHeight: "var(--lh-h4)", fontWeight: 500, color: "var(--text-strong)" } }, it.title, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 20, style: { transform: on ? "rotate(45deg)" : "none", transition: "transform var(--dur-base) var(--ease-standard)", color: "var(--sand-600)" } })), on && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 48px 24px 0", fontSize: 16, lineHeight: 1.65, color: "var(--text-muted)" } }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({ children, active, inverse, href = "#", onClick, style }) {
  const [h, setH] = React.useState(false);
  const lit = active || h;
  return /* @__PURE__ */ React.createElement("a", { href, onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false), style: { position: "relative", display: "inline-block", padding: "6px 0", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, letterSpacing: ".02em", textDecoration: "none", color: inverse ? "var(--paper-50)" : lit ? "var(--text-strong)" : "var(--text-muted)", transition: "color var(--dur-fast)", ...style } }, children, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, background: "var(--sand-500)", transform: lit ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform var(--dur-base) var(--ease-standard)" } }));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({ tabs = [], value, defaultValue, onChange, style }) {
  const [v, setV] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? v;
  return /* @__PURE__ */ React.createElement("div", { role: "tablist", style: { display: "flex", gap: 32, borderBottom: "1px solid var(--border-hairline)", ...style } }, tabs.map((t) => {
    const val = t.value ?? t;
    const lab = t.label ?? t;
    const on = cur === val;
    return /* @__PURE__ */ React.createElement("button", { key: val, role: "tab", "aria-selected": on, onClick: () => {
      setV(val);
      onChange && onChange(val);
    }, style: { background: "none", border: 0, padding: "0 0 14px", marginBottom: -1, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: on ? 600 : 500, letterSpacing: ".02em", color: on ? "var(--text-strong)" : "var(--text-muted)", borderBottom: "2px solid " + (on ? "var(--ink-900)" : "transparent"), transition: "color var(--dur-fast)" } }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;
__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.IconButton = __ds_scope.IconButton;
__ds_ns.SectionHeading = __ds_scope.SectionHeading;
__ds_ns.ServiceCard = __ds_scope.ServiceCard;
__ds_ns.Alert = __ds_scope.Alert;
__ds_ns.Dialog = __ds_scope.Dialog;
__ds_ns.Toast = __ds_scope.Toast;
__ds_ns.Tooltip = __ds_scope.Tooltip;
__ds_ns.Checkbox = __ds_scope.Checkbox;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.Radio = __ds_scope.Radio;
__ds_ns.Select = __ds_scope.Select;
__ds_ns.Switch = __ds_scope.Switch;
__ds_ns.Textarea = __ds_scope.Textarea;
__ds_ns.Accordion = __ds_scope.Accordion;
__ds_ns.NavLink = __ds_scope.NavLink;
__ds_ns.Tabs = __ds_scope.Tabs;
})();
