// Steuerkanzlei Bagha — component types (documentation). Globals: window.SteuerkanzleiBaghaDesignSystem_3f9615.<Comp>
// Collected from components/<group>/<Comp>.d.ts.

// ── Core ──────────────────────────────────────────────
export interface BadgeProps{
  tone?:'neutral'|'accent'|'navy'|'success'|'warning'|'error';
  dot?:boolean;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Badge(props:BadgeProps):JSX.Element;

/**
 * Primary action control. Ink-black fill, near-square corners, sans label.
 */
export interface ButtonProps{
  variant?:'primary'|'secondary'|'ghost'|'inverse'|'inverse-outline';
  size?:'sm'|'md'|'lg';
  /** Lucide icon name */
  iconLeft?:string;
  iconRight?:string;
  disabled?:boolean;
  fullWidth?:boolean;
  href?:string;
  type?:'button'|'submit'|'reset';
  onClick?:(e:any)=>void;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Button(props:ButtonProps):JSX.Element;

export interface CardProps{
  variant?:'outline'|'muted'|'inverse'|'plain';
  /** lifts with soft shadow on hover */
  interactive?:boolean;
  padding?:number|string;
  onClick?:(e:any)=>void;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Card(props:CardProps):JSX.Element;

export interface IconProps{
  /** Lucide icon name in kebab-case, e.g. "arrow-right", "phone", "file-text" */
  name:string;
  /** px, default 20 */
  size?:number;
  color?:string;
  title?:string;
  style?:React.CSSProperties;
}
export declare function Icon(props:IconProps):JSX.Element;

export interface IconButtonProps{
  /** Lucide icon name */
  icon:string;
  /** Accessible label (required) */
  label:string;
  variant?:'ghost'|'outline'|'solid'|'inverse';
  size?:number;
  disabled?:boolean;
  onClick?:(e:any)=>void;
  style?:React.CSSProperties;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;

export interface SectionHeadingProps{
  /** Tracked uppercase label with sand rule */
  eyebrow?:string;
  title:React.ReactNode;
  lead?:string;
  align?:'left'|'center';
  inverse?:boolean;
  as?:'h1'|'h2';
  style?:React.CSSProperties;
}
export declare function SectionHeading(props:SectionHeadingProps):JSX.Element;

/**
 * Service teaser (Leistung) — icon in a sand ring, serif title, short copy, arrow link.
 */
export interface ServiceCardProps{
  /** Lucide icon name */
  icon?:string;
  title:string;
  description?:string;
  linkLabel?:string;
  onClick?:(e:any)=>void;
  style?:React.CSSProperties;
}
export declare function ServiceCard(props:ServiceCardProps):JSX.Element;

// ── Feedback ──────────────────────────────────────────
export interface AlertProps{
  tone?:'info'|'success'|'warning'|'error';
  title?:string;children?:React.ReactNode;style?:React.CSSProperties;
}
export declare function Alert(props:AlertProps):JSX.Element;

export interface DialogProps{
  open:boolean;title:string;onClose?:()=>void;
  children?:React.ReactNode;footer?:React.ReactNode;width?:number;
  /** render without overlay (for documentation) */
  inline?:boolean;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;

export interface ToastProps{
  tone?:'success'|'info'|'error';children?:React.ReactNode;onClose?:()=>void;style?:React.CSSProperties;
}
export declare function Toast(props:ToastProps):JSX.Element;

export interface TooltipProps{
  content:React.ReactNode;children:React.ReactNode;placement?:'top'|'bottom';
  /** force visible */
  open?:boolean;
}
export declare function Tooltip(props:TooltipProps):JSX.Element;

// ── Forms ─────────────────────────────────────────────
export interface CheckboxProps{
  label?:React.ReactNode;checked?:boolean;defaultChecked?:boolean;disabled?:boolean;
  onChange?:(checked:boolean)=>void;style?:React.CSSProperties;
}
export declare function Checkbox(props:CheckboxProps):JSX.Element;

export interface InputProps{
  label?:string;hint?:string;
  /** error message; turns border red */
  error?:string;
  required?:boolean;disabled?:boolean;
  type?:string;value?:string;defaultValue?:string;placeholder?:string;name?:string;
  onChange?:(e:any)=>void;
  style?:React.CSSProperties;
}
export declare function Input(props:InputProps):JSX.Element;

export interface RadioProps{
  name?:string;
  options:(string|{value:string;label:string})[];
  value?:string;defaultValue?:string;direction?:'row'|'column';
  onChange?:(value:string)=>void;style?:React.CSSProperties;
}
export declare function Radio(props:RadioProps):JSX.Element;

export interface SelectProps{
  label?:string;hint?:string;error?:string;required?:boolean;disabled?:boolean;
  options:(string|{value:string;label:string})[];
  value?:string;defaultValue?:string;placeholder?:string;name?:string;onChange?:(e:any)=>void;style?:React.CSSProperties;
}
export declare function Select(props:SelectProps):JSX.Element;

export interface SwitchProps{
  label?:React.ReactNode;checked?:boolean;defaultChecked?:boolean;disabled?:boolean;
  onChange?:(checked:boolean)=>void;style?:React.CSSProperties;
}
export declare function Switch(props:SwitchProps):JSX.Element;

export interface TextareaProps{
  label?:string;hint?:string;error?:string;required?:boolean;disabled?:boolean;rows?:number;
  value?:string;defaultValue?:string;placeholder?:string;name?:string;onChange?:(e:any)=>void;style?:React.CSSProperties;
}
export declare function Textarea(props:TextareaProps):JSX.Element;

// ── Navigation ────────────────────────────────────────
/**
 * FAQ list — serif questions, hairline separators, plus icon rotating to ×.
 */
export interface AccordionProps{
  items:{title:string;content:React.ReactNode}[];
  /** index open initially; -1 for none */
  defaultOpen?:number;
  style?:React.CSSProperties;
}
export declare function Accordion(props:AccordionProps):JSX.Element;

export interface NavLinkProps{
  children?:React.ReactNode;active?:boolean;inverse?:boolean;href?:string;onClick?:(e:any)=>void;style?:React.CSSProperties;
}
export declare function NavLink(props:NavLinkProps):JSX.Element;

export interface TabsProps{
  tabs:(string|{value:string;label:string})[];
  value?:string;defaultValue?:string;onChange?:(value:string)=>void;style?:React.CSSProperties;
}
export declare function Tabs(props:TabsProps):JSX.Element;
