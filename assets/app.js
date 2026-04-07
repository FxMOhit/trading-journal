var _0x4f2a=function(s){return atob(s)};var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
for (var prop in b || (b = {}))
if (__hasOwnProp.call(b, prop))
__defNormalProp(a, prop, b[prop]);
if (__getOwnPropSymbols)
for (var prop of __getOwnPropSymbols(b)) {
if (__propIsEnum.call(b, prop))
__defNormalProp(a, prop, b[prop]);
}
return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const { useState, useMemo, useEffect, useRef, useCallback, memo, Component } = React;
class ErrorBoundary extends Component {
constructor(p) {
super(p);
this.state = { err: false, msg: "" };
}
static getDerivedStateFromError(e) {
return { err: true, msg: (e == null ? void 0 : e.message) || "" };
}
render() {
if (this.state.err) return  React.createElement("div", { style: { minHeight: "100vh_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")#f7f8fa_0x4f2a("LCBmb250RmFtaWx5OiA=")'Inter',sans-serif_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 48, marginBottom: 16 } }, "\u26A0\uFE0F_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")h2", { style: { fontSize: 18, fontWeight: 600, marginBottom: 8 } }, "Something went wrong_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")p", { style: { color: "#3d4a5c_0x4f2a("LCBtYXJnaW5Cb3R0b206IDIwLCBmb250U2l6ZTogMTQsIG1heFdpZHRoOiAzNDAsIHRleHRBbGlnbjog")center_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjcgfSB9LCB0aGlzLnN0YXRlLm1zZyB8fCA=")An unexpected error occurred._0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => this.setState({ err: false }), style: { background: "#c8983a_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")11px 28px_0x4f2a("LCBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")Try Again"));
return this.props.children;
}
}
function InputModal({ open, title, subtitle, placeholder, defaultVal, onConfirm, onClose }) {
const [val, setVal] = useState("");
const inputRef = useRef(null);
useEffect(() => {
if (open) { setVal(defaultVal || ""); setTimeout(() => inputRef.current && inputRef.current.focus(), 60); }
}, [open, defaultVal]);
if (!open) return null;
const submit = () => { if (val.trim()) { onConfirm(val.trim()); onClose(); } };
const handleKey = (e) => { if (e.key === _0x4f2a("RW50ZXI=")) submit(); if (e.key === _0x4f2a("RXNjYXBl")) onClose(); };
return React.createElement("div", {
className: "custom-modal-backdrop_0x4f2a("LApvbkNsaWNrOiBvbkNsb3NlCn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", {
className: "custom-modal-box_0x4f2a("LApvbkNsaWNrOiAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKQp9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "custom-modal-title_0x4f2a("IH0sIHRpdGxlIHx8IA==")Add Value_0x4f2a("KSwKc3VidGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "custom-modal-sub_0x4f2a("IH0sIHN1YnRpdGxlKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", {
ref: inputRef,
className: "custom-modal-input_0x4f2a("LApwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfHwg")Enter value…",
value: val,
onChange: (e) => setVal(e.target.value),
onKeyDown: handleKey
}),
React.createElement("div", { className: "custom-modal-btns_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { className: "custom-modal-cancel_0x4f2a("LCBvbkNsaWNrOiBvbkNsb3NlIH0sIA==")Cancel_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { className: "custom-modal-add_0x4f2a("LCBvbkNsaWNrOiBzdWJtaXQsIGRpc2FibGVkOiAhdmFsLnRyaW0oKSB9LCA=")Add")
)
));
}
function CustomDatePicker({ value, onChange, style }) {
const [open, setOpen] = React.useState(false);
const ref = React.useRef(null);
const popRef = React.useRef(null);
const parsed = value ? new Date(value + 'T00:00:00') : new Date();
const [viewYear, setViewYear] = React.useState(parsed.getFullYear());
const [viewMonth, setViewMonth] = React.useState(parsed.getMonth());
const todayStr = new Date().toISOString().slice(0,10);
React.useEffect(() => {
function handler(e) {
if (ref.current && !ref.current.contains(e.target)) setOpen(false);
}
if (open) document.addEventListener('mousedown', handler);
return () => document.removeEventListener('mousedown', handler);
}, [open]);
function selectDay(y, m, d) {
const mm = String(m+1).padStart(2,'0');
const dd = String(d).padStart(2,'0');
const s = `${y}-${mm}-${dd}`;
onChange(s);
setOpen(false);
}
function shortcut(offsetDays) {
const d = new Date();
d.setDate(d.getDate() + offsetDays);
const s = d.toISOString().slice(0,10);
onChange(s);
setViewYear(d.getFullYear());
setViewMonth(d.getMonth());
setOpen(false);
}
function prevMonth() {
if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1); }
else setViewMonth(m => m-1);
}
function nextMonth() {
if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1); }
else setViewMonth(m => m+1);
}
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];
function buildCalendar() {
const first = new Date(viewYear, viewMonth, 1).getDay();
const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate();
const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();
const cells = [];
for (let i = first-1; i >= 0; i--) cells.push({ day: daysInPrev-i, month: viewMonth-1, year: viewMonth === 0 ? viewYear-1 : viewYear, other: true });
for (let i = 1; i <= daysInMonth; i++) cells.push({ day: i, month: viewMonth, year: viewYear, other: false });
while (cells.length < 42) {
const last = cells.length - daysInMonth - first + 1;
cells.push({ day: last, month: viewMonth+1, year: viewMonth === 11 ? viewYear+1 : viewYear, other: true });
}
return cells;
}
const cells = buildCalendar();
const dispVal = value ? value.split('-').reverse().join('/') : 'Pick date';
return React.createElement('div', { ref, style: { position: 'relative', display: 'inline-block', ...(style||{}) } },
React.createElement('div', {
className: 'dtp-trigger' + (open ? ' dtp-open' : ''),
onClick: () => setOpen(o => !o)
},
React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
React.createElement('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }),
React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
React.createElement('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
React.createElement('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
),
React.createElement('span', null, dispVal)
),
open && React.createElement('div', { ref: popRef, className: 'dtp-popup', style: { left: 0, top: '100%' } },
React.createElement('div', { className: 'dtp-shortcuts' },
React.createElement('button', { className: 'dtp-sc-btn' + (value === todayStr ? ' active' : ''), onClick: () => shortcut(0) }, 'Today'),
React.createElement('button', { className: 'dtp-sc-btn', onClick: () => shortcut(-1) }, 'Yesterday'),
React.createElement('button', { className: 'dtp-sc-btn', onClick: () => shortcut(1) }, 'Tomorrow')
),
React.createElement('div', { className: 'dtp-cal-header' },
React.createElement('button', { className: 'dtp-cal-nav', onClick: prevMonth }, '‹'),
React.createElement('span', null, MONTHS[viewMonth] + ' ' + viewYear),
React.createElement('button', { className: 'dtp-cal-nav', onClick: nextMonth }, '›')
),
React.createElement('div', { className: 'dtp-dow-row' },
DAYS.map(d => React.createElement('span', { key: d }, d))
),
React.createElement('div', { className: 'dtp-day-grid' },
cells.map((c, i) => {
const mm = String(c.month+1).padStart(2,'0');
const dd = String(c.day).padStart(2,'0');
const s = `${c.year}-${mm}-${dd}`;
const isSel = s === value;
const isToday = s === todayStr;
return React.createElement('div', {
key: i,
className: 'dtp-day' + (c.other ? ' dtp-other-month' : '') + (isSel ? ' dtp-selected' : '') + (isToday && !isSel ? ' dtp-today' : ''),
onClick: () => selectDay(c.year, c.month, c.day)
}, c.day);
})
)
)
);
}
function CustomTimePicker({ value, onChange, style }) {
const [open, setOpen] = React.useState(false);
const ref = React.useRef(null);
const [is12hr, setIs12hr] = React.useState(() => {
try { return localStorage.getItem('tj5_time12hr') === '1'; } catch(e) { return false; }
});
const parts = (value || '09:00').split(':');
const [h, setH] = React.useState(parseInt(parts[0]||'9', 10));
const [m, setM] = React.useState(parseInt(parts[1]||'0', 10));
const [ampm, setAmpm] = React.useState(parseInt(parts[0]||'9', 10) < 12 ? 'AM' : 'PM');
React.useEffect(() => {
const p = (value || '09:00').split(':');
const hh = parseInt(p[0]||'9', 10);
setH(hh);
setM(parseInt(p[1]||'0', 10));
setAmpm(hh < 12 ? 'AM' : 'PM');
}, [value]);
React.useEffect(() => {
function handler(e) {
if (ref.current && !ref.current.contains(e.target)) setOpen(false);
}
if (open) document.addEventListener('mousedown', handler);
return () => document.removeEventListener('mousedown', handler);
}, [open]);
function commit(hh, mm) {
onChange(String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0') + ':00');
}
function incH(delta) {
const v = ((h + delta + 24) % 24);
setH(v);
setAmpm(v < 12 ? 'AM' : 'PM');
commit(v, m);
}
function incM(delta) { const v = ((m + delta + 60) % 60); setM(v); commit(h, v); }
function incH12(delta) {
const disp = h === 0 ? 12 : h > 12 ? h - 12 : h;
const newDisp = ((disp - 1 + delta + 12) % 12) + 1;
let newH24;
if (ampm === 'AM') {
newH24 = newDisp === 12 ? 0 : newDisp;
} else {
newH24 = newDisp === 12 ? 12 : newDisp + 12;
}
setH(newH24);
commit(newH24, m);
}
function toggleAmpm() {
const newAmpm = ampm === 'AM' ? 'PM' : 'AM';
setAmpm(newAmpm);
let newH;
if (newAmpm === 'PM') {
newH = h < 12 ? h + 12 : h;
} else {
newH = h >= 12 ? h - 12 : h;
}
setH(newH);
commit(newH, m);
}
function toggleMode() {
const next = !is12hr;
setIs12hr(next);
try { localStorage.setItem('tj5_time12hr', next ? '1' : '0'); } catch(e) {}
}
const dispH24 = String(h).padStart(2,'0');
const dispH12 = (() => { const d = h === 0 ? 12 : h > 12 ? h - 12 : h; return String(d).padStart(2,'0'); })();
const dispM = String(m).padStart(2,'0');
const dispVal = is12hr ? `${dispH12}:${dispM} ${ampm}` : `${dispH24}:${dispM}`;
return React.createElement('div', { ref, style: { position: 'relative', display: 'inline-block', ...(style||{}) } },
React.createElement('div', {
className: 'dtp-trigger' + (open ? ' dtp-open' : ''),
onClick: () => setOpen(o => !o)
},
React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
React.createElement('polyline', { points: '12 6 12 12 16 14' })
),
React.createElement('span', null, dispVal)
),
open && React.createElement('div', { className: 'dtp-popup', style: { left: 0, top: '100%', minWidth: 'auto' } },
React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 } },
React.createElement('div', { style: { fontSize: 11, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.04em' } }, 'Entry Time'),
React.createElement('div', { style: { display: 'flex', background: 'var(--s3)', borderRadius: 8, padding: 2, gap: 2 } },
React.createElement('button', {
onClick: () => { if (is12hr) toggleMode(); },
style: { padding: '3px 8px', borderRadius: 6, border: 'none', fontSize: 10, fontWeight: 700, cursor: 'pointer',
background: !is12hr ? 'var(--acc)' : 'transparent',
color: !is12hr ? '#fff' : 'var(--t3)', transition: 'all .15s' }
}, '24H'),
React.createElement('button', {
onClick: () => { if (!is12hr) toggleMode(); },
style: { padding: '3px 8px', borderRadius: 6, border: 'none', fontSize: 10, fontWeight: 700, cursor: 'pointer',
background: is12hr ? 'var(--acc)' : 'transparent',
color: is12hr ? '#fff' : 'var(--t3)', transition: 'all .15s' }
}, '12H')
)
),
React.createElement('div', { className: 'dtp-time-wrap' },
React.createElement('div', { className: 'dtp-time-col' },
React.createElement('div', { className: 'dtp-time-label' }, 'Hour'),
React.createElement('div', { className: 'dtp-time-spin' },
React.createElement('button', { onClick: () => is12hr ? incH12(1) : incH(1) }, '▲'),
React.createElement('div', { className: 'dtp-time-val' }, is12hr ? dispH12 : dispH24),
React.createElement('button', { onClick: () => is12hr ? incH12(-1) : incH(-1) }, '▼')
)
),
React.createElement('div', { className: 'dtp-sep' }, ':'),
React.createElement('div', { className: 'dtp-time-col' },
React.createElement('div', { className: 'dtp-time-label' }, 'Min'),
React.createElement('div', { className: 'dtp-time-spin' },
React.createElement('button', { onClick: () => incM(5) }, '▲'),
React.createElement('div', { className: 'dtp-time-val' }, dispM),
React.createElement('button', { onClick: () => incM(-5) }, '▼')
)
),
is12hr && React.createElement(React.Fragment, null,
React.createElement('div', { style: { width: 6 } }),
React.createElement('div', { className: 'dtp-time-col' },
React.createElement('div', { className: 'dtp-time-label' }, 'Period'),
React.createElement('div', { className: 'dtp-time-spin', style: { cursor: 'pointer' } },
React.createElement('button', { onClick: toggleAmpm }, '▲'),
React.createElement('div', { className: 'dtp-time-val', style: { fontSize: 13, fontWeight: 800, color: 'var(--accD)', width: 44 } }, ampm),
React.createElement('button', { onClick: toggleAmpm }, '▼')
)
)
)
),
React.createElement('button', { className: 'dtp-confirm', onClick: () => setOpen(false) }, '✓ Set ' + dispVal)
)
);
}
const API_URL = "https:
const SDB = {
_db: null,
_N: "TJScreenshots_0x4f2a("LApfUzog")shots",
async open() {
if (this._db) return this._db;
return new Promise((res, rej) => {
const r = indexedDB.open(this._N, 1);
r.onupgradeneeded = (e) => e.target.result.createObjectStore(this._S);
r.onsuccess = (e) => {
this._db = e.target.result;
res(this._db);
};
r.onerror = () => rej(r.error);
});
},
async save(id, url) {
const db = await this.open();
return new Promise((res, rej) => {
const tx = db.transaction(this._S, _0x4f2a("cmVhZHdyaXRl"));
tx.objectStore(this._S).put(url, String(id));
tx.oncomplete = () => res();
tx.onerror = () => rej(tx.error);
});
},
async get(id) {
const db = await this.open();
return new Promise((res, rej) => {
const tx = db.transaction(this._S, _0x4f2a("cmVhZG9ubHk="));
const r = tx.objectStore(this._S).get(String(id));
r.onsuccess = () => res(r.result || null);
r.onerror = () => rej(r.error);
});
},
async remove(id) {
const db = await this.open();
return new Promise((res, rej) => {
const tx = db.transaction(this._S, _0x4f2a("cmVhZHdyaXRl"));
tx.objectStore(this._S).delete(String(id));
tx.oncomplete = () => res();
tx.onerror = () => rej(tx.error);
});
},
async compress(id, file, maxW = 900) {
return new Promise((res, rej) => {
const reader = new FileReader();
reader.onload = (e) => {
const img = new Image();
img.onload = () => {
const c = document.createElement(_0x4f2a("Y2FudmFz"));
const sc = Math.min(1, maxW / img.width);
c.width = img.width * sc;
c.height = img.height * sc;
c.getContext("2d_0x4f2a("KS5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7CmNvbnN0IGQgPSBjLnRvRGF0YVVSTCg=")image/webp", 0.78);
this.save(id, d).then(() => res(d)).catch(rej);
};
img.onerror = rej;
img.src = e.target.result;
};
reader.onerror = rej;
reader.readAsDataURL(file);
});
}
};
const CONFLUENCES = [_0x4f2a("QnJlYWsgb2YgU3RydWN0dXJl"), _0x4f2a("RmFpciBWYWx1ZSBHYXA="), _0x4f2a("T3JkZXIgQmxvY2s="), _0x4f2a("TGlxdWlkaXR5IFN3ZWVw"), _0x4f2a("SW5kdWNlbWVudA=="), _0x4f2a("Q2hhbmdlIG9mIENoYXJhY3Rlcg=="), _0x4f2a("TWFya2V0IFN0cnVjdHVyZSBTaGlmdA=="), _0x4f2a("UHJlbWl1bS9EaXNjb3VudA=="), _0x4f2a("VldBUA=="), _0x4f2a("RU1BIENvbmZsdWVuY2U="), _0x4f2a("U3VwcGx5L0RlbWFuZCBab25l"), _0x4f2a("Rmlib25hY2NpIExldmVs"), _0x4f2a("U2Vzc2lvbiBPcGVu"), _0x4f2a("TmV3cyBDYXRhbHlzdA=="), _0x4f2a("VHJlbmRsaW5lIEJvdW5jZQ=="), _0x4f2a("RGl2ZXJnZW5jZQ=="), _0x4f2a("Vm9sdW1lIFNwaWtl"), _0x4f2a("UGluIEJhcg=="), _0x4f2a("RW5ndWxmaW5n"), _0x4f2a("SW5zaWRlIEJhcg=="), _0x4f2a("TGlxIFN3ZWVw"), _0x4f2a("VEwgQk8="), _0x4f2a("UlRPIEJ1bGxpc2g="), _0x4f2a("ViBTaGFwZQ=="), _0x4f2a("VEwgQkQ="), _0x4f2a("NEggQnVsbGlzaA=="), _0x4f2a("SUZWRw=="), _0x4f2a("UmVqZWN0aW9uIENhbmRsZQ=="), _0x4f2a("NEggQmVhcmlzaA=="), _0x4f2a("UlRPIEJlYXJpc2g="), _0x4f2a("TllPIFJlamVjdGlvbg=="), _0x4f2a("NEggRmxpcA=="), _0x4f2a("Uy9EIFpvbmU="), _0x4f2a("MUggRmxpcA=="), _0x4f2a("UlRPIEZsaXA=")];
const SESSIONS = [_0x4f2a("TG9uZG9uIE9wZW4="), _0x4f2a("TmV3IFlvcms="), _0x4f2a("T3V0IG9mIFNlc3Npb24="), _0x4f2a("TG9uZG9uIE1pZA=="), _0x4f2a("QXNpYQ==")];
const MODELS = [_0x4f2a("SW4gU2Vzc2lvbg=="), _0x4f2a("T2ZmIFNlc3Npb24="), _0x4f2a("T2ZmIFNlc3Npb24gUmV2ZXJzYWw="), _0x4f2a("SW4gU2Vzc2lvbiBSZXZlcnNhbA=="), _0x4f2a("U01DIChTbWFydCBNb25leSk="), _0x4f2a("SUNUIENvbmNlcHRz"), _0x4f2a("UHJpY2UgQWN0aW9u"), _0x4f2a("U2NhbHBpbmc="), _0x4f2a("U3dpbmcgVHJhZGU="), _0x4f2a("VHJlbmQgRm9sbG93aW5n"), _0x4f2a("Q291bnRlciBUcmVuZA=="), _0x4f2a("QnJlYWtvdXQ="), _0x4f2a("UmV2ZXJzYWw="), _0x4f2a("UmFuZ2U="), _0x4f2a("TW9tZW50dW0="), _0x4f2a("VldBUCBTdHJhdGVneQ=="), _0x4f2a("TmV3cyBQbGF5")];
const EMOTIONS_B = [_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), _0x4f2a("Q29uZmlkZW50"), _0x4f2a("TmV1dHJhbA=="), _0x4f2a("U2xpZ2h0bHkgQW54aW91cw=="), _0x4f2a("Rk9NTw=="), _0x4f2a("R3JlZWR5"), _0x4f2a("RmVhcmZ1bA=="), _0x4f2a("T3ZlcmNvbmZpZGVudA=="), _0x4f2a("VGlyZWQvVW5mb2N1c2Vk"), _0x4f2a("RXhjaXRlZA=="), _0x4f2a("SW1wYXRpZW50"), _0x4f2a("UmV2ZW5nZSBNaW5kc2V0"), _0x4f2a("Qm9yZWQ="), _0x4f2a("U3RyZXNzZWQ="), _0x4f2a("RG91YnRmdWw="), _0x4f2a("SW1wdWxzaXZl"), _0x4f2a("TW90aXZhdGVk"), _0x4f2a("RGlzdHJhY3RlZA=="), _0x4f2a("U2hhcnAgJiBBbGVydA=="), _0x4f2a("UGF0aWVudA=="), _0x4f2a("UmVja2xlc3M="), _0x4f2a("SGVzaXRhbnQ=")];
const EMOTIONS_A = [_0x4f2a("U2F0aXNmaWVk"), _0x4f2a("RGlzY2lwbGluZWQ="), _0x4f2a("TmV1dHJhbA=="), _0x4f2a("U2xpZ2h0bHkgUmVncmV0ZnVs"), _0x4f2a("UmVncmV0ZnVs"), _0x4f2a("RXVwaG9yaWM="), _0x4f2a("RnJ1c3RyYXRlZA=="), _0x4f2a("QW5ncnk="), _0x4f2a("UmVsaWV2ZWQ="), _0x4f2a("RGlzYXBwb2ludGVk"), _0x4f2a("UHJvdWQ="), _0x4f2a("TGVzc29uIExlYXJuZWQ="), _0x4f2a("Q2FsbQ=="), _0x4f2a("RW5lcmdpemVk"), _0x4f2a("QnVybmVkIE91dA=="), _0x4f2a("TW90aXZhdGVk"), _0x4f2a("RGV0YWNoZWQ="), _0x4f2a("T3ZlcnRoaW5raW5n"), _0x4f2a("QXQgUGVhY2U="), _0x4f2a("Q29uZnVzZWQ="), _0x4f2a("Q29uZmlkZW50"), _0x4f2a("SHVtYmxlZA=="), _0x4f2a("U2hhcnA="), _0x4f2a("R3JhdGVmdWw=")];
const MISTAKES = [_0x4f2a("Tm9uZQ=="), _0x4f2a("TW92ZWQgU3RvcCBMb3Nz"), _0x4f2a("UG9zaXRpb24gVG9vIExhcmdl"), _0x4f2a("UmV2ZW5nZSBUcmFkaW5n"), _0x4f2a("Rk9NTyBFbnRyeQ=="), _0x4f2a("RWFybHkgRXhpdA=="), _0x4f2a("TGF0ZSBFbnRyeQ=="), _0x4f2a("Tm8gVHJhZGluZyBQbGFu"), _0x4f2a("SWdub3JlZCBSdWxlcw=="), _0x4f2a("T3ZlcnRyYWRlZA=="), _0x4f2a("Q2hhc2VkIFByaWNl"), _0x4f2a("UG9vciBSUiBTZXR1cA=="), _0x4f2a("V3JvbmcgVGltZWZyYW1l"), _0x4f2a("RW1vdGlvbmFsIERlY2lzaW9u"), _0x4f2a("U2tpcHBlZCBBbmFseXNpcw==")];
const GRADES = ["A+", "A", "B", "C", "D_0x4f2a("XTsKY29uc3QgUlJfT1BUSU9OUyA9IFs=")1:0.5", "1:1", _0x4f2a("MToxLjU="), "1:2", _0x4f2a("MToyLjU="), "1:3", "1:4", "1:5", _0x4f2a("MTo2Kw=="), _0x4f2a("Q3VzdG9t")];
const ACC_COLS = [_0x4f2a("I2M4OTgzYQ=="), _0x4f2a("IzI1NjNlYg=="), _0x4f2a("IzdjM2FlZA=="), _0x4f2a("IzE2YTM0YQ=="), _0x4f2a("I2VhNTgwYw=="), _0x4f2a("IzA4OTFiMg=="), _0x4f2a("I2VjNDg5OQ==")];
const fmtPct = (n, d = 2) => (n >= 0 ? "+" : "_0x4f2a("KSArIG4udG9GaXhlZChkKSArIA==")%_0x4f2a("Owpjb25zdCBmbXRVU0QgPSAobiwgcGx1cyA9IHRydWUpID0+IChwbHVzICYmIG4gPj0gMCA/IA==")+" : "_0x4f2a("KSArIG5ldyBJbnRsLk51bWJlckZvcm1hdCg=")en-US", { style: "currency_0x4f2a("LCBjdXJyZW5jeTog")USD", minimumFractionDigits: 2 }).format(n);
const fmtK = (v) => v >= 1e3 ? (v / 1e3).toFixed(1) + "k_0x4f2a("IDogdi50b0ZpeGVkKDApOwpjb25zdCBmbXRQcmljZSA9IChuKSA9PiAobiA9PSBudWxsID8gdm9pZCAwIDogbi50b0xvY2FsZVN0cmluZyg=")en-US", { maximumFractionDigits: 5 })) || "\u2014_0x4f2a("Owpjb25zdCB0VHh0ID0gKG4pID0+IG4gPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tdDIp");
const tBg = (n) => n >= 0 ? _0x4f2a("dmFyKC0tYWNjTCk=") : _0x4f2a("dmFyKC0tczIp");
const tBdr = (n) => n >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMjUlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==");
function calcPnL(profit, capital) {
const cap = (capital && capital > 0) ? capital : 5000;
return (profit / cap) * 100;
}
function inferCapital(trades) { return 5000; }
function deriveDir(t) {
if (t.entryPrice && t.exitPrice && t.profit !== 0) {
const up = t.exitPrice > t.entryPrice, win = t.profit > 0;
if (up && win) return _0x4f2a("TG9uZw==");
if (up && !win) return _0x4f2a("U2hvcnQ=");
if (!up && win) return _0x4f2a("U2hvcnQ=");
return _0x4f2a("TG9uZw==");
}
return t.side || _0x4f2a("TG9uZw==");
}
function useMediaQuery(q) {
const [m, setM] = useState(() => window.matchMedia(q).matches);
useEffect(() => {
const mq = window.matchMedia(q);
const h = (e) => setM(e.matches);
mq.addEventListener(_0x4f2a("Y2hhbmdl"), h);
return () => mq.removeEventListener(_0x4f2a("Y2hhbmdl"), h);
}, [q]);
return m;
}
const BLANK_TRADE = {
id: 0,
symbol: "_0x4f2a("LAplbnRyeURhdGU6IA==")_0x4f2a("LAplbnRyeVRpbWU6IA==")_0x4f2a("LApzaWRlOiA=")Long_0x4f2a("LAplbnRyeVByaWNlOiAwLApleGl0UHJpY2U6IDAsCnBubDogMCwKcHJvZml0OiAwLApzdGF0dXM6IA==")Closed_0x4f2a("LApjb25mbHVlbmNlczogW10sCmtleUxldmVsczogW10sCnNlc3Npb246IA==")_0x4f2a("LAptb2RlbDog")_0x4f2a("LAplbW90aW9uQmVmb3JlOiA=")_0x4f2a("LAplbW90aW9uQWZ0ZXI6IA==")_0x4f2a("LAptaXN0YWtlczog")_0x4f2a("LApncmFkZTog")_0x4f2a("LApleHBlY3RlZFJSOiA=")1:2_0x4f2a("LAphY3R1YWxSUjog")_0x4f2a("LApub3Rlczog")_0x4f2a("LApyaXNrQW1vdW50OiAwLApzdG9wTG9zczogMCwKdGFrZVByb2ZpdDogMCwKYWNjb3VudElkOiA=")manual_0x4f2a("LAp0YWdzOiBbXSwKY3JlYXRlZEF0OiA=")_0x4f2a("LAp1cGRhdGVkQXQ6IA==")"
};
function sanitizeTrade(t) {
if (!t || typeof t !== "object") return null;
const s = __spreadValues(__spreadValues({}, BLANK_TRADE), t);
s.entryPrice = Number(s.entryPrice) || 0;
s.exitPrice = Number(s.exitPrice) || 0;
s.pnl = Number(s.pnl) || 0;
s.profit = Number(s.profit) || 0;
s.riskAmount = Number(s.riskAmount) || 0;
s.stopLoss = Number(s.stopLoss) || 0;
s.takeProfit = Number(s.takeProfit) || 0;
if (!Array.isArray(s.confluences)) s.confluences = [];
if (!Array.isArray(s.keyLevels)) s.keyLevels = [];
if (!Array.isArray(s.tags)) s.tags = [];
if (!s.id) s.id = Date.now() + Math.random();
if (!s.createdAt) s.createdAt = ( new Date()).toISOString();
if (!s.updatedAt) s.updatedAt = ( new Date()).toISOString();
return s;
}
function sanitizeAccount(a) {
if (!a || typeof a !== _0x4f2a("b2JqZWN0")) return null;
return {
id: a.id || String(Date.now()),
label: a.label || _0x4f2a("TXkgQWNjb3VudA=="),
capital: Number(a.capital) || (Boolean(a.isDemo) ? 1e4 : 0),
isDemo: Boolean(a.isDemo),
login: a.login || "_0x4f2a("LApwYXNzd29yZDogYS5wYXNzd29yZCB8fCA=")_0x4f2a("LApzZXJ2ZXI6IGEuc2VydmVyIHx8IA==")_0x4f2a("LAp0eXBlOiBhLnR5cGUgfHwg")demo",
connected: Boolean(a.connected),
lastSync: a.lastSync || null,
info: a.info || null,
balanceAdjustments: Array.isArray(a.balanceAdjustments) ? a.balanceAdjustments : [],
trades: Array.isArray(a.trades) ? a.trades.map(sanitizeTrade).filter(Boolean) : []
};
}
function loadAccounts() {
try {
const r = localStorage.getItem(_0x4f2a("dGo1X2FjY291bnRz"));
if (!r) return [];
const parsed = JSON.parse(r);
if (!Array.isArray(parsed)) return [];
return parsed.map(sanitizeAccount).filter(Boolean);
} catch (e) {
console.warn(_0x4f2a("W1RKXSBsb2FkQWNjb3VudHMgZmFpbGVkOg=="), e);
return [];
}
}
function saveAccounts(accs) {
try {
if (!Array.isArray(accs)) return;
const clean = accs.map(sanitizeAccount).filter(Boolean);
localStorage.setItem(_0x4f2a("dGo1X2FjY291bnRz"), JSON.stringify(clean));
} catch (e) {
console.warn(_0x4f2a("W1RKXSBzYXZlQWNjb3VudHMgZmFpbGVkOg=="), e);
}
}
function loadTradeMeta() {
try {
const r = localStorage.getItem(_0x4f2a("dGo1X21ldGE="));
return r ? JSON.parse(r) : {};
} catch (e) {
return {};
}
}
function saveTradeMeta(meta) {
try {
localStorage.setItem(_0x4f2a("dGo1X21ldGE="), JSON.stringify(meta));
} catch (e) {
}
}
function loadTheme() {
try {
return localStorage.getItem(_0x4f2a("dGo1X3RoZW1l")) || _0x4f2a("emluYw==");
} catch (e) {
return _0x4f2a("bGlnaHQ=");
}
}
function loadAccent() {
try {
return localStorage.getItem(_0x4f2a("dGo1X2FjY2VudA==")) || _0x4f2a("aW5kaWdv");
} catch (e) {
return _0x4f2a("c2xhdGU=");
}
}
function loadDailyLimit() {
try {
const r = localStorage.getItem(_0x4f2a("dGo1X2RhaWx5X2xpbWl0"));
return r ? JSON.parse(r) : { enabled: false, maxTrades: 3, maxLoss: -2 };
} catch (e) {
return { enabled: false, maxTrades: 3, maxLoss: -2 };
}
}
function saveDailyLimit(s) {
try {
localStorage.setItem(_0x4f2a("dGo1X2RhaWx5X2xpbWl0"), JSON.stringify(s));
} catch (e) {
}
}
function loadCustomLists() {
try { const r = localStorage.getItem(_0x4f2a("dGo1X2N1c3RvbV9saXN0cw==")); return r ? JSON.parse(r) : { confluences: null, sessions: null, mistakes: null, keyLevels: null }; } catch (e) { return { confluences: null, sessions: null, mistakes: null, keyLevels: null }; }
}
function saveCustomLists(lists) {
try { localStorage.setItem(_0x4f2a("dGo1X2N1c3RvbV9saXN0cw=="), JSON.stringify(lists)); } catch (e) {}
}
function exportCSV(trades, capital) {
const cap = (capital && capital > 0) ? capital : 5000;
const headers = ["ID", _0x4f2a("U3ltYm9s"), _0x4f2a("RGF0ZQ=="), _0x4f2a("VGltZQ=="), _0x4f2a("U2lkZQ=="), _0x4f2a("RW50cnk="), _0x4f2a("RXhpdA=="), _0x4f2a("UCZMJQ=="), "Net P&L $", _0x4f2a("U2Vzc2lvbg=="), _0x4f2a("TW9kZWw="), _0x4f2a("R3JhZGU="), _0x4f2a("RXhwZWN0ZWQgUlI="), _0x4f2a("QWN0dWFsIFJS"), _0x4f2a("RW1vdGlvbiBCZWZvcmU="), _0x4f2a("RW1vdGlvbiBBZnRlcg=="), _0x4f2a("TWlzdGFrZXM="), _0x4f2a("Q29uZmx1ZW5jZXM="), _0x4f2a("Tm90ZXM=")];
const rows = trades.map((t) => [
t.id,
t.symbol,
t.entryDate,
t.entryTime,
t.side,
t.entryPrice,
t.exitPrice,
calcPnL(t.profit, cap).toFixed(2),
(t.profit || 0).toFixed(2),
t.session,
t.model,
t.grade,
t.expectedRR,
t.actualRR,
t.emotionBefore,
t.emotionAfter,
t.mistakes,
(t.confluences || []).join("; _0x4f2a("KSwKYA==")${(t.notes || "_0x4f2a("KS5yZXBsYWNlKC8=")/g, '""')}_0x4f2a("YApdKTsKY29uc3QgY3N2ID0gW2hlYWRlcnMuam9pbig="),_0x4f2a("KSwgLi4ucm93cy5tYXAoKHIpID0+IHIuam9pbig="),_0x4f2a("KSldLmpvaW4o")\n_0x4f2a("KTsKY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQo")a");
a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
a.download = `trades_${( new Date()).toISOString().slice(0, 10)}.csv`;
a.click();
}
function exportTradePDF(trades, capital) {
const cap = (capital && capital > 0) ? capital : 5000;
const wins = trades.filter((t) => t.profit > 0), losses = trades.filter((t) => t.profit <= 0);
const grossUSD = trades.reduce((s, t) => s + (t.profit || 0), 0);
const grossPct = calcPnL(grossUSD, cap);
const wr = trades.length ? (wins.length / trades.length * 100).toFixed(1) : "0";
const profitFactor = (() => {
const gw = wins.reduce((s, t) => s + Math.abs(t.profit), 0);
const gl = losses.reduce((s, t) => s + Math.abs(t.profit), 0);
return gl ? (gw / gl).toFixed(2) : "\u221E_0x4f2a("Owp9KSgpOwpjb25zdCBodG1sID0gYDwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjxtZXRhIGNoYXJzZXQ9")UTF-8"><title>Trade Journal Export</title>
<style>body{font-family:system-ui,sans-serif;font-size:12px;color:#111;margin:0;padding:24px;}
h1{font-size:20px;font-weight:700;margin:0 0 4px;}
.sub{color:#666;font-size:11px;margin-bottom:20px;}
.stats{display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;}
.stat{background:#f8f9fa;border:1px solid #e5e7eb;border-radius:8px;padding:12px 16px;min-width:120px;}
.stat-label{font-size:9px;font-weight:600;color:#888;letter-spacing:.05em;text-transform:uppercase;margin-bottom:4px;}
.stat-val{font-size:18px;font-weight:800;letter-spacing:-0.04em;}
table{width:100%;border-collapse:collapse;font-size:10px;}
th{background:#f1f5f9;padding:6px 10px;text-align:left;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#64748b;border-bottom:2px solid #e2e8f0;}
td{padding:6px 10px;border-bottom:1px solid #f1f5f9;}
tr:nth-child(even) td{background:#fafafa;}
.win{color:#059669;font-weight:700;} .loss{color:#64748b;font-weight:700;}
@keyframes obBackdropIn  { from{opacity:0} to{opacity:1} }
@keyframes obBackdropOut { from{opacity:1} to{opacity:0} }
@keyframes obCardIn  { from{opacity:0;transform:scale(.91) translateY(14px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes obCardOut { from{opacity:1;transform:scale(1) translateY(0)} to{opacity:0;transform:scale(.94) translateY(8px)} }
@keyframes obSlideInR { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
@keyframes obSlideInL { from{opacity:0;transform:translateX(-36px)} to{opacity:1;transform:translateX(0)} }
@keyframes obFloatA   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes obFadeUp   { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.tj-ob-backdrop {
position: fixed; inset: 0;
background: rgba(0,0,0,.65);
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);
display: flex; align-items: center; justify-content: center;
z-index: 999999; padding: 16px;
animation: obBackdropIn .28s ease forwards;
}
.tj-ob-backdrop.closing { animation: obBackdropOut .22s ease forwards; }
.tj-ob-card {
background: var(--surface);
border: 1px solid var(--border2);
border-radius: 24px;
width: 100%; max-width: 500px;
max-height: calc(100vh - 40px);
overflow-y: auto;
box-shadow: 0 40px 120px rgba(0,0,0,.35), 0 8px 32px rgba(0,0,0,.18);
animation: obCardIn .35s cubic-bezier(.34,1.4,.64,1) forwards;
position: relative;
font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
.tj-ob-backdrop.closing .tj-ob-card { animation: obCardOut .22s ease forwards; }
.tj-ob-progress-bar { height: 3px; background: var(--s3); }
.tj-ob-progress-fill {
height: 100%;
background: linear-gradient(90deg, var(--acc), var(--accD));
transition: width .4s cubic-bezier(.4,0,.2,1);
border-radius: 0 3px 3px 0;
}
.tj-ob-body { padding: 30px 30px 0; }
.tj-ob-slide      { animation: obSlideInR .3s cubic-bezier(.4,0,.2,1) forwards; }
.tj-ob-slide.back { animation: obSlideInL .3s cubic-bezier(.4,0,.2,1) forwards; }
.tj-ob-illus {
border-radius: 16px; background: var(--s2);
border: 1px solid var(--border);
height: 170px; display: flex; align-items: center; justify-content: center;
margin-bottom: 22px; overflow: hidden; position: relative;
}
.tj-ob-feature {
display: flex; align-items: flex-start; gap: 13px;
padding: 11px 13px; border-radius: 13px;
transition: background .15s, transform .15s;
cursor: default;
}
.tj-ob-feature:hover { background: var(--s2); transform: translateX(3px); }
.tj-ob-ficon {
width: 38px; height: 38px; border-radius: 11px; flex-shrink: 0;
display: flex; align-items: center; justify-content: center; font-size: 18px;
}
.tj-ob-themes { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-top: 4px; }
.tj-ob-theme-swatch {
border-radius: 12px; padding: 10px 8px; text-align: center;
border: 2px solid transparent; cursor: pointer;
transition: border-color .15s, transform .12s, box-shadow .15s;
font-size: 10px; font-weight: 600;
}
.tj-ob-theme-swatch:hover { transform: scale(1.05); box-shadow: 0 4px 16px rgba(0,0,0,.12); }
.tj-ob-theme-swatch.active {
border-color: var(--acc);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--acc) 20%, transparent);
}
.tj-ob-swatch-dot { width: 22px; height: 22px; border-radius: 50%; margin: 0 auto 5px; }
.tj-ob-accents { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; }
.tj-ob-accent-dot {
width: 30px; height: 30px; border-radius: 50%; cursor: pointer;
border: 2px solid transparent;
transition: transform .12s, box-shadow .15s, border-color .15s;
}
.tj-ob-accent-dot:hover { transform: scale(1.15); }
.tj-ob-accent-dot.active {
border-color: var(--text);
box-shadow: 0 0 0 3px rgba(0,0,0,.12);
}
.tj-ob-footer {
display: flex; align-items: center; justify-content: space-between;
padding: 18px 30px 24px; gap: 12px;
}
.tj-ob-dots { display: flex; gap: 6px; }
.tj-ob-dot {
width: 7px; height: 7px; border-radius: 50%;
background: var(--border2); transition: all .25s; cursor: pointer;
}
.tj-ob-dot.active { background: var(--acc); width: 22px; border-radius: 4px; }
.tj-ob-btn-sec {
background: var(--s2); color: var(--t2);
border: 1px solid var(--border); border-radius: 11px;
padding: 9px 18px; font-size: 13px; font-weight: 600;
cursor: pointer; font-family: inherit;
transition: background .15s, border-color .15s;
}
.tj-ob-btn-sec:hover { background: var(--s3); border-color: var(--border2); }
.tj-ob-btn-pri {
background: linear-gradient(135deg, var(--acc), var(--accD));
color: #fff; border: none; border-radius: 11px;
padding: 10px 22px; font-size: 13px; font-weight: 700;
cursor: pointer; font-family: inherit;
box-shadow: 0 4px 14px rgba(0,0,0,.18);
transition: opacity .15s, transform .12s, box-shadow .15s;
display: flex; align-items: center; gap: 6px;
}
.tj-ob-btn-pri:hover { opacity: .92; transform: translateY(-1px); box-shadow: 0 7px 22px rgba(0,0,0,.24); }
.tj-ob-btn-pri:active { transform: translateY(0); }
</style></head><body>
<h1>\u{1F4CA} Trade Journal Export</h1>
<div class="sub">Generated ${( new Date()).toLocaleString()} \xB7 ${trades.length} trades</div>
<div class=_0x4f2a("c3RhdHM=")>
<div class=_0x4f2a("c3RhdA==")><div class=_0x4f2a("c3RhdC1sYWJlbA==")>Gross P&L</div><div class=_0x4f2a("c3RhdC12YWw=") style="color:${grossPct >= 0 ? "#c8983a" : _0x4f2a("IzY0NzQ4Yg==")}">${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%</div></div>
<div class="stat_0x4f2a("PjxkaXYgY2xhc3M9")stat-label">Net P&L ($)</div><div class="stat-val_0x4f2a("IHN0eWxlPQ==")color:${grossUSD >= 0 ? _0x4f2a("I2M4OTgzYQ==") : _0x4f2a("IzY0NzQ4Yg==")}">${grossUSD >= 0 ? "+$" : "-$"}${Math.abs(grossUSD).toFixed(2)}</div></div>
<div class="stat_0x4f2a("PjxkaXYgY2xhc3M9")stat-label_0x4f2a("PldpbiBSYXRlPC9kaXY+PGRpdiBjbGFzcz0=")stat-val">${wr}%</div></div>
<div class="stat_0x4f2a("PjxkaXYgY2xhc3M9")stat-label_0x4f2a("PlRvdGFsIFRyYWRlczwvZGl2PjxkaXYgY2xhc3M9")stat-val">${trades.length}</div></div>
<div class="stat_0x4f2a("PjxkaXYgY2xhc3M9")stat-label_0x4f2a("PlByb2ZpdCBGYWN0b3I8L2Rpdj48ZGl2IGNsYXNzPQ==")stat-val">${profitFactor}</div></div>
</div>
<table><thead><tr><th>Date</th><th>Symbol</th><th>Side</th><th>Entry</th><th>Exit</th><th>P&L%</th><th>Net P&L $</th><th>Grade</th><th>Session</th><th>RR</th><th>Notes</th></tr></thead><tbody>
${trades.sort((a, b) => b.entryDate.localeCompare(a.entryDate)).map((t) => { const tPct = calcPnL(t.profit, cap); return `<tr>
<td>${t.entryDate}</td><td><b>${t.symbol}</b></td>
<td>${t.side}</td><td>${t.entryPrice}</td><td>${t.exitPrice || "\u2014_0x4f2a("fTwvdGQ+Cjx0ZCBjbGFzcz0=")${tPct >= 0 ? "win" : _0x4f2a("bG9zcw==")}">${tPct >= 0 ? "+" : ""}${tPct.toFixed(2)}%</td>
<td class="${t.profit >= 0 ? "win" : _0x4f2a("bG9zcw==")}">${t.profit >= 0 ? "+$" : "-$"}${Math.abs(t.profit).toFixed(2)}</td>
<td>${t.grade || "\u2014"}</td><td>${t.session || "\u2014"}</td><td>${t.actualRR || "\u2014_0x4f2a("fTwvdGQ+Cjx0ZCBzdHlsZT0=")max-width:200px;overflow:hidden;">${t.notes || "_0x4f2a("fTwvdGQ+CjwvdHI+YDsgfSkuam9pbig=")_0x4f2a("KX0KPC90Ym9keT48L3RhYmxlPjwvYm9keT48L2h0bWw+YDsKY29uc3QgdyA9IHdpbmRvdy5vcGVuKA==")", _0x4f2a("X2JsYW5r"));
w.document.write(html);
w.document.close();
setTimeout(() => w.print(), 400);
}
function calcStreak(trades) {
if (!trades.length) return { current: 0, type: _0x4f2a("bm9uZQ=="), longest: { win: 0, loss: 0 } };
const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
let cur = 0, curType = _0x4f2a("bm9uZQ=="), maxW = 0, maxL = 0, runW = 0, runL = 0;
for (const t of sorted) {
const w = t.profit > 0;
if (w) {
runW++;
runL = 0;
if (runW > maxW) maxW = runW;
} else {
runL++;
runW = 0;
if (runL > maxL) maxL = runL;
}
cur = w ? runW : -runL;
curType = w ? "win" : _0x4f2a("bG9zcw==");
}
return { current: Math.abs(cur), type: curType, longest: { win: maxW, loss: maxL } };
}
function calcProfitFactor(trades) {
const gw = trades.filter((t) => t.profit > 0).reduce((s, t) => s + t.profit, 0);
const gl = Math.abs(trades.filter((t) => t.profit < 0).reduce((s, t) => s + t.profit, 0));
return gl ? gw / gl : gw > 0 ? Infinity : 0;
}
function calcTrueBalance(account) {
const trades = account.trades || [];
const adjs = (account.balanceAdjustments || []).slice().sort((a, b) => a.date.localeCompare(b.date));
const startCapital = account.capital || 0;
if (!adjs.length) {
const netProfit = trades.reduce((s, t) => s + (t.profit || 0), 0);
return { balance: startCapital + netProfit, capital: startCapital, adjustedCapital: startCapital, netProfit };
}
const sortedTrades = trades.slice().sort((a, b) => a.entryDate.localeCompare(b.entryDate));
let runningBalance = startCapital;
let prevDate = '0000-00-00';
for (const adj of adjs) {
const segTrades = sortedTrades.filter(t => t.entryDate > prevDate && t.entryDate < adj.date);
runningBalance += segTrades.reduce((s, t) => s + (t.profit || 0), 0);
const writeOff = adj.writeOffAmount || adj.amount || 0;
runningBalance += writeOff;
prevDate = adj.date;
}
const lastAdjDate = adjs[adjs.length - 1].date;
const postTrades = sortedTrades.filter(t => t.entryDate >= lastAdjDate);
const postProfit = postTrades.reduce((s, t) => s + (t.profit || 0), 0);
runningBalance += postProfit;
const adjustedCapital = runningBalance - postProfit;
return {
balance: runningBalance,
capital: startCapital,
adjustedCapital: adjustedCapital > 0 ? adjustedCapital : startCapital,
netProfit: postProfit
};
}
function calcHourlyStats(trades) {
const hours = Array.from({ length: 24 }, (_, h) => ({ h, n: 0, w: 0, pnl: 0, profit: 0 }));
trades.forEach((t) => {
const h = parseInt((t.entryTime || _0x4f2a("MDA6MDA=")).split(":")[0], 10);
if (h >= 0 && h < 24) {
hours[h].n++;
if (t.profit > 0) hours[h].w++;
hours[h].profit += t.profit || 0;
}
});
return hours.filter((h) => h.n > 0).map((h) => __spreadProps(__spreadValues({}, h), { wr: h.n ? h.w / h.n * 100 : 0 }));
}
function genWeeklySummary(trades, capital) {
var _a, _b;
const cap = (capital && capital > 0) ? capital : 5000;
const now =  new Date();
const mon = new Date(now);
mon.setDate(now.getDate() - (now.getDay() + 6) % 7);
mon.setHours(0, 0, 0, 0);
const sun = new Date(mon);
sun.setDate(mon.getDate() + 6);
const weekStr = (d) => d.toISOString().slice(0, 10);
const wk = trades.filter((t) => t.entryDate >= weekStr(mon) && t.entryDate <= weekStr(sun));
if (!wk.length) return null;
const wins = wk.filter((t) => t.profit > 0);
const profit = wk.reduce((s, t) => s + (t.profit || 0), 0);
const pnl = calcPnL(profit, cap);
const wr = wk.length ? wins.length / wk.length * 100 : 0;
const topModel = (_a = Object.entries(wk.reduce((m, t) => {
const k = t.model || _0x4f2a("VW5rbm93bg==");
m[k] = (m[k] || 0) + 1;
return m;
}, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0];
const topMistake = (_b = Object.entries(wk.filter((t) => t.mistakes && t.mistakes !== _0x4f2a("Tm9uZQ==")).reduce((m, t) => {
m[t.mistakes] = (m[t.mistakes] || 0) + 1;
return m;
}, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _b[0];
const disciplined = Math.round(wk.filter((t) => !t.mistakes || t.mistakes === _0x4f2a("Tm9uZQ==")).length / wk.length * 100);
return { from: weekStr(mon), to: weekStr(sun), total: wk.length, wins: wins.length, wr: wr.toFixed(0), pnl: pnl.toFixed(2), profit: profit.toFixed(2), topModel, topMistake, disciplined };
}
const SEED = [
{ id: 54565171, symbol: _0x4f2a("WEFVVVNE"), entryDate: _0x4f2a("MjAyNS0xMi0xMg=="), entryTime: _0x4f2a("MDk6MDc6MTE="), side: _0x4f2a("TG9uZw=="), entryPrice: 4285.82, exitPrice: 4287.65, stopLoss: 4287.69, takeProfit: 4292.9, pnl: 0.2745, profit: 27.45, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 54999710, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")05:11:18_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4284.8, exitPrice: 4289.45, stopLoss: 4289.49, takeProfit: 4277.99, pnl: -0.6975, profit: -69.75, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 55193310, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-17_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:22:07_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4334.94, exitPrice: 4336.42, stopLoss: 4336.52, takeProfit: 4341.9, pnl: 0.222, profit: 22.2, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 55393921, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")18:10:22_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4349.15, exitPrice: 4356.48, stopLoss: 4353.41, takeProfit: 4355.95, pnl: 1.0995, profit: 109.95, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 55750744, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-22_0x4f2a("LCBlbnRyeVRpbWU6IA==")01:50:17_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4356.52, exitPrice: 4363.45, stopLoss: 4360.81, takeProfit: 4363.4, pnl: 1.0395, profit: 103.95, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 56208180, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-26_0x4f2a("LCBlbnRyeVRpbWU6IA==")03:04:53_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4525.9, exitPrice: 4527.75, stopLoss: 4527.95, takeProfit: 4532.25, pnl: 0.2775, profit: 27.75, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 56393594, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-29_0x4f2a("LCBlbnRyeVRpbWU6IA==")02:30:15_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4475.2, exitPrice: 4479.93, stopLoss: 4479.95, takeProfit: 4468.45, pnl: -0.7095, profit: -70.95, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 56694483, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2025-12-31_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:40:31_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4318.51, exitPrice: 4327.39, stopLoss: 4327.2, takeProfit: 4315.7, pnl: -1.332, profit: -133.2, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 56836027, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-02_0x4f2a("LCBlbnRyeVRpbWU6IA==")05:34:08_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4373.61, exitPrice: 4371.4, stopLoss: 4368.6, takeProfit: 4380.1, pnl: -0.3315, profit: -33.15, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 56986286, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-05_0x4f2a("LCBlbnRyeVRpbWU6IA==")03:02:02_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4402.35, exitPrice: 4409.46, stopLoss: 4402.35, takeProfit: 4409.25, pnl: 1.0665, profit: 106.65, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 57188896, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-06_0x4f2a("LCBlbnRyeVRpbWU6IA==")01:09:49_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4457.21, exitPrice: 4456.71, stopLoss: 4451.0, takeProfit: 4462.5, pnl: -0.075, profit: -7.5, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 57445777, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-07_0x4f2a("LCBlbnRyeVRpbWU6IA==")01:39:17_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4496.93, exitPrice: 4492.72, stopLoss: 4492.75, takeProfit: 4504.27, pnl: -0.6315, profit: -63.15, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 57656217, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-08_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:16:33_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4423.4, exitPrice: 4428.06, stopLoss: 4428.0, takeProfit: 4416.5, pnl: -0.699, profit: -69.9, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 58227401, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")16:47:15_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4630.24, exitPrice: 4629.93, stopLoss: 4630.24, takeProfit: 4637.03, pnl: -0.0465, profit: -4.65, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 58432980, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-14_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:01:55_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4634.34, exitPrice: 4634.35, stopLoss: 4634.34, takeProfit: 4641.25, pnl: 0.0015, profit: 0.15, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 58607668, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-15_0x4f2a("LCBlbnRyeVRpbWU6IA==")03:31:33_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4588.39, exitPrice: 4589.61, stopLoss: 4595.9, takeProfit: 4584.4, pnl: -0.183, profit: -18.3, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("QXNpYQ=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 58805785, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")17:27:02_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4580.79, exitPrice: 4574.1, stopLoss: 4577.02, takeProfit: 4574.1, pnl: 1.0035, profit: 100.35, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 59950685, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-01-27_0x4f2a("LCBlbnRyeVRpbWU6IA==")08:12:43_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5077.33, exitPrice: 5091.49, stopLoss: 5064.91, takeProfit: 5091.2, pnl: 1.1328, profit: 113.28, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.08_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 60725731, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-03_0x4f2a("LCBlbnRyeVRpbWU6IA==")11:27:25_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4896.49, exitPrice: 4922.22, stopLoss: 4873.6, takeProfit: 4952.66, pnl: 0.5146, profit: 51.46, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.02_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 60845776, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-04_0x4f2a("LCBlbnRyeVRpbWU6IA==")09:06:17_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5065.82, exitPrice: 5064.68, stopLoss: 5038.2, takeProfit: 5120.11, pnl: -0.0229, profit: -2.29, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.02_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 60918734, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-04_0x4f2a("LCBlbnRyeVRpbWU6IA==")17:12:27_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4984.73, exitPrice: 4951.19, stopLoss: 4951.19, takeProfit: 5036.55, pnl: -0.6708, profit: -67.08, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.02_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 60986864, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-05_0x4f2a("LCBlbnRyeVRpbWU6IA==")09:38:35_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4908.78, exitPrice: 4876.65, stopLoss: 4876.66, takeProfit: 4962.33, pnl: -0.6426, profit: -64.26, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.02_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 61234020, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-09_0x4f2a("LCBlbnRyeVRpbWU6IA==")13:26:46_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4999.26, exitPrice: 5012.53, stopLoss: 5012.35, takeProfit: 0, pnl: -0.5308, profit: -53.08, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.04_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 62009733, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:34:32_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4922.03, exitPrice: 4916.96, stopLoss: 4917.0, takeProfit: 0, pnl: -0.4563, profit: -45.63, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.09_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 62013424, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")11:02:26_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4918.72, exitPrice: 4925.25, stopLoss: 4925.23, takeProfit: 4898.54, pnl: -0.4571, profit: -45.71, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.07_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 62041928, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:23:41_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4954.37, exitPrice: 4959.4, stopLoss: 4959.37, takeProfit: 4946.75, pnl: -0.3521, profit: -35.21, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.07_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 62587430, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-02-25_0x4f2a("LCBlbnRyeVRpbWU6IA==")11:16:15_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5183.95, exitPrice: 5189.66, stopLoss: 5184.12, takeProfit: 5189.59, pnl: 1.0849, profit: 108.49, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.19_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63483394, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-09_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:05:14_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5092.33, exitPrice: 5100.69, stopLoss: 5092.83, takeProfit: 5100.69, pnl: 1.0868, profit: 108.68, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.13_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63707874, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-11_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:09:02_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5204.89, exitPrice: 5198.83, stopLoss: 5199.26, takeProfit: 5209.66, pnl: -0.4848, profit: -48.48, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.08_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63745820, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-11_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:13:41_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5185.98, exitPrice: 5177.13, stopLoss: 5193.54, takeProfit: 5177.43, pnl: 0.531, profit: 53.1, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.06_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63765842, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-11_0x4f2a("LCBlbnRyeVRpbWU6IA==")16:44:28_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5168.31, exitPrice: 5151.18, stopLoss: 5181.64, takeProfit: 5152.72, pnl: 0.5139, profit: 51.39, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.03_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63828907, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-12_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:17:23_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5153.63, exitPrice: 5149.7, stopLoss: 5149.85, takeProfit: 5157.43, pnl: -0.5109, profit: -51.09, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.13_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63829367, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-12_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:35:28_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5148.86, exitPrice: 5142.15, stopLoss: 5148.75, takeProfit: 5142.0, pnl: 0.7381, profit: 73.81, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.11_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63866886, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-12_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:12:04_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5179.97, exitPrice: 5175.91, stopLoss: 5183.9, takeProfit: 5176.0, pnl: 0.4872, profit: 48.72, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.12_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63964767, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:06:02_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5090.49, exitPrice: 5083.42, stopLoss: 5083.51, takeProfit: 5091.3, pnl: -0.4949, profit: -49.49, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.07_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63965869, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:17:20_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5083.37, exitPrice: 5083.25, stopLoss: 5083.22, takeProfit: 5070.82, pnl: 0.0072, profit: 0.72, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.06_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 63992147, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:07:59_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5090.72, exitPrice: 5097.86, stopLoss: 5097.63, takeProfit: 5083.17, pnl: -0.4998, profit: -49.98, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.07_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64000266, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:39:04_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5111.62, exitPrice: 5116.67, stopLoss: 5116.29, takeProfit: 5106.49, pnl: -0.505, profit: -50.5, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.1_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64001191, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:45:36_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5116.55, exitPrice: 5111.8, stopLoss: 5111.8, takeProfit: 5126.75, pnl: -0.475, profit: -47.5, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.1_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64007109, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-13_0x4f2a("LCBlbnRyeVRpbWU6IA==")16:35:48_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5100.26, exitPrice: 5109.43, stopLoss: 5109.39, takeProfit: 0, pnl: -0.4585, profit: -45.85, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.05_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64066114, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:16:05_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5026.19, exitPrice: 5018.84, stopLoss: 5018.84, takeProfit: 0, pnl: -0.735, profit: -73.5, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.1_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64066847, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:38:08_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5018.53, exitPrice: 5008.18, stopLoss: 5026.21, takeProfit: 5008.4, pnl: 1.035, profit: 103.5, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.1_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64076903, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:06:19_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5011.28, exitPrice: 5015.82, stopLoss: 5015.74, takeProfit: 5007.3, pnl: -0.908, profit: -90.8, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.2_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64077199, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:09:52_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5015.98, exitPrice: 5009.62, stopLoss: 5009.74, takeProfit: 0, pnl: -0.954, profit: -95.4, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64077804, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-16_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:15:19_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5009.08, exitPrice: 4995.71, stopLoss: 5013.9, takeProfit: 4996.08, pnl: 2.674, profit: 267.4, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.2_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64180734, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-17_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:11:11_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5029.55, exitPrice: 5026.32, stopLoss: 5026.36, takeProfit: 5032.95, pnl: -0.0646, profit: -6.46, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.02_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64181187, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-17_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:23:31_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5029.33, exitPrice: 5026.28, stopLoss: 5026.3, takeProfit: 5032.79, pnl: -0.793, profit: -79.3, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.26_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64220280, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-17_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:08:07_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 5002.21, exitPrice: 5009.44, stopLoss: 4996.45, takeProfit: 5009.14, pnl: 0.9399, profit: 93.99, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.13_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64229916, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-17_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:43:48_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 5017.7, exitPrice: 5012.36, stopLoss: 5022.81, takeProfit: 5012.41, pnl: 0.801, profit: 80.1, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64289090, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:24:24_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4993.0, exitPrice: 4989.52, stopLoss: 4989.53, takeProfit: 0, pnl: -0.696, profit: -69.6, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.2_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64289367, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-18_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:33:03_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4989.13, exitPrice: 4984.48, stopLoss: 4989.06, takeProfit: 4983.83, pnl: 0.8835, profit: 88.35, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.19_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64405935, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-19_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:07:15_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4848.25, exitPrice: 4851.53, stopLoss: 4851.53, takeProfit: 4844.35, pnl: -0.6888, profit: -68.88, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.21_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64406272, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-19_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:15:43_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4851.72, exitPrice: 4848.64, stopLoss: 4848.67, takeProfit: 4856.23, pnl: -0.7084, profit: -70.84, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.23_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64457428, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-19_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:38:28_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4616.76, exitPrice: 4598.04, stopLoss: 4598.73, takeProfit: 0, pnl: -0.7488, profit: -74.88, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.04_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64457735, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-19_0x4f2a("LCBlbnRyeVRpbWU6IA==")15:40:17_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4598.45, exitPrice: 4566.13, stopLoss: 4597.97, takeProfit: 4567.22, pnl: 1.2928, profit: 129.28, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.04_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64802852, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-24_0x4f2a("LCBlbnRyeVRpbWU6IA==")17:05:40_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4389.53, exitPrice: 4405.79, stopLoss: 4405.54, takeProfit: 4368.1, pnl: -0.813, profit: -81.3, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.05_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64806419, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-24_0x4f2a("LCBlbnRyeVRpbWU6IA==")17:22:41_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4406.07, exitPrice: 4427.24, stopLoss: 4389.51, takeProfit: 4427.24, pnl: 1.9053, profit: 190.53, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE1pZA=="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.09_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64867305, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-25_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:25:59_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4557.3, exitPrice: 4548.43, stopLoss: 4555.36, takeProfit: 4547.22, pnl: 1.2418, profit: 124.18, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "A_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.14_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64867394, symbol: "USTEC_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-25_0x4f2a("LCBlbnRyeVRpbWU6IA==")10:26:50_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 24149.12, exitPrice: 24158.86, stopLoss: 24192.25, takeProfit: 24102.5, pnl: -0.224, profit: -22.4, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "C_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.23_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64959744, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-26_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:06:03_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4512.35, exitPrice: 4517.62, stopLoss: 4517.59, takeProfit: 4505.39, pnl: -0.7905, profit: -79.05, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.15_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 64959901, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-26_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:11:27_0x4f2a("LCBzaWRlOiA=")Long", entryPrice: 4518.22, exitPrice: 4518.23, stopLoss: 4518.39, takeProfit: 4526.58, pnl: 0.0018, profit: 0.18, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("U2F0aXNmaWVk"), mistakes: _0x4f2a("Tm9uZQ=="), grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.18_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 65002890, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-26_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:17:01_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4440.48, exitPrice: 4448.72, stopLoss: 4448.66, takeProfit: 4430.77, pnl: -0.9888, profit: -98.88, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.12_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 65075738, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-27_0x4f2a("LCBlbnRyeVRpbWU6IA==")07:09:03_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4435.3, exitPrice: 4440.19, stopLoss: 4439.8, takeProfit: 4430.43, pnl: -1.0758, profit: -107.58, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TG9uZG9uIE9wZW4="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.22_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] },
{ id: 65111573, symbol: "XAUUSD_0x4f2a("LCBlbnRyeURhdGU6IA==")2026-03-27_0x4f2a("LCBlbnRyeVRpbWU6IA==")14:07:06_0x4f2a("LCBzaWRlOiA=")Short", entryPrice: 4409.01, exitPrice: 4417.46, stopLoss: 4417.46, takeProfit: 4398.97, pnl: -0.9295, profit: -92.95, status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), emotionAfter: _0x4f2a("TGVzc29uIExlYXJuZWQ="), mistakes: _0x4f2a("Tm9uZQ=="), grade: "D_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBub3Rlczog")MT5 Import | Vol:0.11_0x4f2a("LCByaXNrQW1vdW50OiAwLCBhY2NvdW50SWQ6IA==")demo-mt5_0x4f2a("LCB0YWdzOiBb")MT5"] }
];
const C = {
green: "var(--green)_0x4f2a("LApnQmc6IA==")var(--gBg)_0x4f2a("LApnQmRyOiA=")var(--gBdr)_0x4f2a("LApyZWQ6IA==")var(--red)_0x4f2a("LApyQmc6IA==")var(--rBg)_0x4f2a("LApyQmRyOiA=")var(--rBdr)_0x4f2a("LApnb2xkOiA=")var(--acc)_0x4f2a("LApnb2xkRDog")var(--accD)_0x4f2a("LApnb2xkTDog")var(--accL)_0x4f2a("LApnb2xkRjog")var(--accF)_0x4f2a("LApibHVlOiA=")var(--blue)_0x4f2a("LApiQmc6IA==")var(--bBg)_0x4f2a("LApiQmRyOiA=")var(--bBdr)_0x4f2a("LApwdXJwbGU6IA==")var(--purple)_0x4f2a("LApwQmc6IA==")var(--pBg)_0x4f2a("LApwQmRyOiA=")var(--pBdr)_0x4f2a("LAp0ZXh0OiA=")var(--text)_0x4f2a("LAp0Mjog")var(--t2)_0x4f2a("LAp0Mzog")var(--t3)_0x4f2a("LApzdXJmYWNlOiA=")var(--surface)_0x4f2a("LApzMjog")var(--s2)_0x4f2a("LApzMzog")var(--s3)_0x4f2a("LApib3JkZXI6IA==")var(--border)_0x4f2a("LApib3JkZXIyOiA=")var(--border2)_0x4f2a("LApiZzog")var(--bg)_0x4f2a("LAppbmRpZ286IA==")var(--indigo)"
};
function Chip({ children, color = "gray_0x4f2a("LCBzaXplID0g")sm" }) {
const map = {
green: ["var(--gBg)", _0x4f2a("dmFyKC0tZ0Jkcik="), _0x4f2a("dmFyKC0tZ3JlZW4p")],
profit: [_0x4f2a("dmFyKC0tYWNjTCk="), _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk="), _0x4f2a("dmFyKC0tYWNjRCk=")],
loss: [_0x4f2a("dmFyKC0tczMp"), _0x4f2a("dmFyKC0tYm9yZGVyMik="), _0x4f2a("dmFyKC0tdDIp")],
gold: [_0x4f2a("dmFyKC0tYWNjRik="), _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzUlLCB0cmFuc3BhcmVudCk="), _0x4f2a("dmFyKC0tYWNjRCk=")],
blue: [_0x4f2a("dmFyKC0tYkJnKQ=="), _0x4f2a("dmFyKC0tYkJkcik="), _0x4f2a("dmFyKC0tYmx1ZSk=")],
purple: [_0x4f2a("dmFyKC0tcEJnKQ=="), _0x4f2a("dmFyKC0tcEJkcik="), _0x4f2a("dmFyKC0tcHVycGxlKQ==")],
orange: [_0x4f2a("dmFyKC0tb0JnKQ=="), _0x4f2a("dmFyKC0tb0Jkcik="), _0x4f2a("dmFyKC0tb3JhbmdlKQ==")],
cyan: [_0x4f2a("dmFyKC0tY0JnKQ=="), _0x4f2a("dmFyKC0tY0Jkcik="), _0x4f2a("dmFyKC0tY3lhbik=")],
red: [_0x4f2a("dmFyKC0tckJnKQ=="), _0x4f2a("dmFyKC0tckJkcik="), _0x4f2a("dmFyKC0tcmVkKQ==")],
gray: [_0x4f2a("dmFyKC0tczMp"), _0x4f2a("dmFyKC0tYm9yZGVyKQ=="), _0x4f2a("dmFyKC0tdDIp")],
truegreen: [_0x4f2a("dmFyKC0tZ0JnKQ=="), _0x4f2a("dmFyKC0tZ0Jkcik="), _0x4f2a("dmFyKC0tZ3JlZW4p")]
};
const [bg, bdr, txt] = map[color] || map.gray;
const pad = size === "sm" ? _0x4f2a("MnB4IDhweA==") : size === "lg" ? _0x4f2a("NXB4IDE0cHg=") : _0x4f2a("NHB4IDExcHg=");
const fs = size === "sm" ? _0x4f2a("MTBweA==") : size === "lg" ? _0x4f2a("MTNweA==") : _0x4f2a("MTFweA==");
return  React.createElement(_0x4f2a("c3Bhbg=="), { className: _0x4f2a("Y2hpcA=="), style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: pad, fontSize: fs } }, children);
}
function StatPill({ val, pnl }) {
const col = pnl >= 0 ? C.goldD : C.t2;
const bg = pnl >= 0 ? C.goldL : C.s3;
const bdr = pnl >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMjUlLCB0cmFuc3BhcmVudCk=") : C.border;
return  React.createElement(_0x4f2a("c3Bhbg=="), { style: { background: bg, border: `1px solid ${bdr}`, color: col, borderRadius: 7, padding: _0x4f2a("MnB4IDlweA=="), fontSize: 10.5, fontWeight: 700 } }, val);
}
function Label({ children }) {
return  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA2LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBmb250RmFtaWx5OiA=")'Inter',sans-serif" } }, children);
}
function PnlBadge({ pnl, profit, size = 12 }) {
const col = pnl >= 0 ? C.goldD : C.t2;
return  React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: col, fontSize: size, fontWeight: 700 } }, fmtPct(pnl), profit != null && profit !== 0 &&  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: size - 1, opacity: 0.7, marginLeft: 4 } }, "(_0x4f2a("LCBmbXRVU0QocHJvZml0KSwg"))"));
}
function GradeChip({ grade }) {
const map = { "A+_0x4f2a("OiBbQy5nb2xkRiwg")color-mix(in srgb, var(--acc) 40%, transparent)_0x4f2a("LCBDLmdvbGREXSwg")A_0x4f2a("OiBbQy5nQmcsIEMuZ0JkciwgQy5ncmVlbl0sIA==")B_0x4f2a("OiBbQy5iQmcsIEMuYkJkciwgQy5ibHVlXSwg")C_0x4f2a("OiBbQy5wQmcsIEMucEJkciwgQy5wdXJwbGVdLCA=")D_0x4f2a("OiBbQy5yQmcsIEMuckJkciwgQy5yZWRdIH07CmNvbnN0IFtiZywgYmRyLCB0eHRdID0gbWFwW2dyYWRlIHx8IA==")B_0x4f2a("XSB8fCBtYXBb")B_0x4f2a("XTsKcmV0dXJuICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { background: bg, border: `1px solid ${bdr}`, color: txt, borderRadius: 6, padding: _0x4f2a("MnB4IDhweA=="), fontSize: 10.5, fontWeight: 600 } }, grade || "\u2014");
}
function SessionChip({ session }) {
const map = { "Asian": [_0x4f2a("I2VjZmVmZg=="), _0x4f2a("I2E1ZjNmYw=="), _0x4f2a("IzA4OTFiMg==")], _0x4f2a("TG9uZG9u"): [_0x4f2a("I2VmZjZmZg=="), _0x4f2a("I2JmZGJmZQ=="), _0x4f2a("IzI1NjNlYg==")], _0x4f2a("TmV3IFlvcms="): [_0x4f2a("I2ZlZjNjNw=="), _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk="), _0x4f2a("I2E4N2MyOA==")], _0x4f2a("TG9uZG9uLU5ZIE92ZXJsYXA="): [_0x4f2a("I2Y1ZjNmZg=="), _0x4f2a("I2RkZDZmZQ=="), _0x4f2a("IzdjM2FlZA==")], _0x4f2a("UHJlLU1hcmtldA=="): [_0x4f2a("dmFyKC0tczMp"), _0x4f2a("dmFyKC0tYm9yZGVyMik="), _0x4f2a("dmFyKC0tdDIp")], _0x4f2a("QWZ0ZXIgSG91cnM="): [_0x4f2a("dmFyKC0tczMp"), _0x4f2a("dmFyKC0tYm9yZGVyMik="), _0x4f2a("dmFyKC0tdDIp")], _0x4f2a("V2Vla2x5IE9wZW4="): [_0x4f2a("I2YwZmRmNA=="), _0x4f2a("I2JiZjdkMA=="), _0x4f2a("IzE2YTM0YQ==")], _0x4f2a("V2Vla2x5IENsb3Nl"): [_0x4f2a("I2ZlZjJmMg=="), _0x4f2a("I2ZlY2FjYQ=="), _0x4f2a("I2RjMjYyNg==")] };
const [bg, bdr, txt] = map[session] || [_0x4f2a("dmFyKC0tczMp"), _0x4f2a("dmFyKC0tYm9yZGVyKQ=="), _0x4f2a("dmFyKC0tdDIp")];
return  React.createElement(_0x4f2a("c3Bhbg=="), { className: _0x4f2a("Y2hpcA=="), style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: _0x4f2a("MnB4IDhweA=="), fontSize: 10 } }, session || "\u2014");
}
function EmotionChip({ emotion, type = "before" }) {
const positive = ["Calm & Focused", _0x4f2a("Q29uZmlkZW50"), _0x4f2a("TmV1dHJhbA=="), _0x4f2a("RGlzY2lwbGluZWQ="), _0x4f2a("U2F0aXNmaWVk"), _0x4f2a("UHJvdWQ="), _0x4f2a("UmVsaWV2ZWQ=")];
const negative = [_0x4f2a("Rk9NTw=="), _0x4f2a("R3JlZWR5"), _0x4f2a("RmVhcmZ1bA=="), _0x4f2a("QW5ncnk="), _0x4f2a("UmV2ZW5nZSBNaW5kc2V0"), _0x4f2a("SW1wYXRpZW50"), _0x4f2a("RXVwaG9yaWM="), _0x4f2a("T3ZlcmNvbmZpZGVudA==")];
const isPos = positive.includes(emotion);
const isNeg = negative.includes(emotion);
const bg = isPos ? C.gBg : isNeg ? C.rBg : C.bBg;
const bdr = isPos ? C.gBdr : isNeg ? C.rBdr : C.bBdr;
const col = isPos ? C.green : isNeg ? C.red : C.blue;
const icon = isPos ? "\u{1F60C}_0x4f2a("IDogaXNOZWcgPyA=")\u{1F630}" : "\u{1F610}_0x4f2a("OwpyZXR1cm4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: col, padding: "2px 8px_0x4f2a("LCBmb250U2l6ZTogMTAgfSB9LCBpY29uLCA=") _0x4f2a("LCBlbW90aW9uIHx8IA==")\u2014");
}
function Sparkline({ pts, w = 120, h = 36, color }) {
if (!pts || pts.length < 2) return  React.createElement("div", { style: { width: w, height: h } });
const lo = Math.min(...pts), hi = Math.max(...pts), rng = hi - lo || 1;
const P = 2, IW = w - P * 2, IH = h - P * 2;
const xi = (i) => i / (pts.length - 1 || 1) * IW + P;
const yi = (v) => IH - (v - lo) / rng * IH + P;
const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${xi(i).toFixed(1)},${yi(v).toFixed(1)}`).join(" _0x4f2a("KTsKY29uc3QgbGFzdCA9IHB0c1twdHMubGVuZ3RoIC0gMV07CmNvbnN0IGNvbCA9IGNvbG9yIHx8IChsYXN0ID49IDAgPyA=")var(--acc)" : _0x4f2a("Izk0YTNiOA=="));
const fill = `${d} L${xi(pts.length - 1).toFixed(1)},${IH + P} L${P},${IH + P} Z`;
const gid = `sg${w}${h}${Math.abs(last).toFixed(0)}`;
return  React.createElement("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, style: { display: "block_0x4f2a("LCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")defs_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")linearGradient", { id: gid, x1: "0_0x4f2a("LCB5MTog")0_0x4f2a("LCB4Mjog")0_0x4f2a("LCB5Mjog")1_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")stop", { offset: "0%_0x4f2a("LCBzdG9wQ29sb3I6IGNvbCwgc3RvcE9wYWNpdHk6IDAuMiB9KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")stop", { offset: "100%_0x4f2a("LCBzdG9wQ29sb3I6IGNvbCwgc3RvcE9wYWNpdHk6IDAuMDIgfSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")path", { d: fill, fill: `url(#${gid})` }),  React.createElement("path", { d, fill: "none_0x4f2a("LCBzdHJva2U6IGNvbCwgc3Ryb2tlV2lkdGg6IDEuOCwgc3Ryb2tlTGluZWpvaW46IA==")round_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round" }));
}
function HBar({ label, value, max, color = "var(--acc)", subtitle, rightLabel }) {
const pct = max > 0 ? Math.min(100, Math.abs(value) / max * 100) : 0;
return  React.createElement("div", { style: { marginBottom: 10 } },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)_0x4f2a("IH0gfSwgbGFiZWwpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")center_0x4f2a("IH0gfSwgc3VidGl0bGUgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("IH0gfSwgc3VidGl0bGUpLCByaWdodExhYmVsICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 12, fontWeight: 700, color: value >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp") } }, rightLabel))),  React.createElement("div", { style: { height: 7, background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: `${pct}%`, height: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiBjb2xvciwgYm9yZGVyUmFkaXVzOiA0LCB0cmFuc2l0aW9uOiA=")width .5s cubic-bezier(.22,1,.36,1)" } })));
}
function Donut({ pct, size = 56, color = "var(--acc)", label }) {
const r = 23, cx = 32, cy = 32, circ = 2 * Math.PI * r;
const dash = Math.max(0, Math.min(circ, circ * (pct / 100)));
return  React.createElement("svg", { width: size, height: size, viewBox: "0 0 64 64_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")circle", { cx, cy, r, fill: "none_0x4f2a("LCBzdHJva2U6IA==")var(--s3)_0x4f2a("LCBzdHJva2VXaWR0aDogNyB9KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoCg==")circle",
{
cx,
cy,
r,
fill: "none",
stroke: color,
strokeWidth: 7,
strokeDasharray: `${dash} ${circ}`,
strokeLinecap: _0x4f2a("cm91bmQ="),
transform: _0x4f2a("cm90YXRlKC05MCAzMiAzMik="),
style: { transition: _0x4f2a("c3Ryb2tlLWRhc2hhcnJheSAuNnMgZWFzZQ==") }
}
),  React.createElement(_0x4f2a("dGV4dA=="), { x: cx, y: cy + 4, textAnchor: _0x4f2a("bWlkZGxl"), fontSize: 11, fontWeight: 700, fill: _0x4f2a("dmFyKC0tdGV4dCk="), fontFamily: _0x4f2a("SW50ZXI=") }, label || pct.toFixed(0) + "%"));
}
const ProfitCurve = memo(function ProfitCurve2({ trades, height = 140, capital: propCapital }) {
const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
const svgRef = useRef(null);
const [hover, setHover] = useState(null);
const [mounted, setMounted] = useState(false);
const showDD = false;
const pathRef = useRef(null);
useEffect(() => {
setMounted(false);
const t = setTimeout(() => setMounted(true), 60);
return () => clearTimeout(t);
}, [trades.length]);
useEffect(() => {
var _a, _b, _c;
if (!mounted || !pathRef.current) return;
const len = (_c = (_b = (_a = pathRef.current).getTotalLength) == null ? void 0 : _b.call(_a)) != null ? _c : 2e3;
pathRef.current.style.strokeDasharray = len;
pathRef.current.style.strokeDashoffset = len;
pathRef.current.style.transition = _0x4f2a("c3Ryb2tlLWRhc2hvZmZzZXQgMS4xcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKQ==");
requestAnimationFrame(() => {
pathRef.current && (pathRef.current.style.strokeDashoffset = "0");
});
}, [mounted]);
const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
let cum = 0, peak = 0;
const allPts = [{ x: 0, y: 0, dd: 0, date: _0x4f2a("U3RhcnQ=") }, ...sorted.map((t, i) => {
let c2 = 0;
for (let j = 0; j <= i; j++) c2 += calcPnL(sorted[j].profit, capital);
if (c2 > peak) peak = c2;
const dd = c2 - peak;
const tradePnl = calcPnL(t.profit, capital);
return { x: i + 1, y: c2, dd, date: t.entryDate, pnl: tradePnl, label: t.symbol, profit: t.profit };
})];
const maxX = allPts.length - 1 || 1;
const equityVals = allPts.map((p) => p.y);
const ddVals = allPts.map((p) => p.dd);
const allVals = [...equityVals, ...showDD ? ddVals : []];
const lo = Math.min(...allVals), hi = Math.max(...allVals), rng = hi - lo || 1;
const PAD = { t: 8, b: 20, l: 46, r: 12 };
const W = 900, H = height, IW = W - PAD.l - PAD.r, IH = H - PAD.t - PAD.b;
const sx = (x) => x / maxX * IW + PAD.l;
const sy = (y) => IH - (y - lo) / rng * IH + PAD.t;
const last = allPts[allPts.length - 1].y;
const col = last >= 0 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("Izk0YTNiOA==");
const zero = Math.max(PAD.t, Math.min(PAD.t + IH, sy(Math.max(lo, Math.min(0, hi)))));
const d = allPts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`).join(" ");
const fill = `${d} L${sx(maxX).toFixed(1)},${zero.toFixed(1)} L${sx(0).toFixed(1)},${zero.toFixed(1)} Z`;
const ddPath = showDD ? allPts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.dd).toFixed(1)}`).join(" ") : null;
const ddFillPath = ddPath ? `${ddPath} L${sx(maxX).toFixed(1)},${zero.toFixed(1)} L${sx(0).toFixed(1)},${zero.toFixed(1)} Z` : null;
const ySteps = Array.from({ length: 5 }, (_, i) => lo + rng / 4 * i);
const handleMove = useCallback((e) => {
var _a;
const rect = (_a = svgRef.current) == null ? void 0 : _a.getBoundingClientRect();
if (!rect) return;
const mx = (e.clientX - rect.left) / rect.width * W;
const idx = Math.max(0, Math.min(maxX, Math.round((mx - PAD.l) / IW * maxX)));
setHover({ idx });
}, [maxX]);
const hp = hover != null ? allPts[hover.idx] : null;
return  React.createElement("div", { style: { position: "relative_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoCg==")svg",
{
ref: svgRef,
width: "100%",
viewBox: `0 0 ${W} ${H}`,
style: { display: "block_0x4f2a("LCBjdXJzb3I6IA==")crosshair" },
onMouseMove: handleMove,
onMouseLeave: () => setHover(null)
},
React.createElement(_0x4f2a("ZGVmcw=="), null,  React.createElement(_0x4f2a("bGluZWFyR3JhZGllbnQ="), { id: "pcg_0x4f2a("LCB4MTog")0_0x4f2a("LCB5MTog")0_0x4f2a("LCB4Mjog")0_0x4f2a("LCB5Mjog")1_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")stop", { offset: "0%_0x4f2a("LCBzdG9wQ29sb3I6IGNvbCwgc3RvcE9wYWNpdHk6IDAuMTggfSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")stop", { offset: "100%_0x4f2a("LCBzdG9wQ29sb3I6IGNvbCwgc3RvcE9wYWNpdHk6IDAuMDEgfSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")linearGradient", { id: "ddg_0x4f2a("LCB4MTog")0_0x4f2a("LCB5MTog")0_0x4f2a("LCB4Mjog")0_0x4f2a("LCB5Mjog")1_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")stop", { offset: "0%_0x4f2a("LCBzdG9wQ29sb3I6IA==")#ef4444_0x4f2a("LCBzdG9wT3BhY2l0eTogMC4yMiB9KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")stop", { offset: "100%_0x4f2a("LCBzdG9wQ29sb3I6IA==")#ef4444_0x4f2a("LCBzdG9wT3BhY2l0eTogMC4wNCB9KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")clipPath", { id: "pcc_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")rect", { x: PAD.l, y: PAD.t, width: IW, height: IH }))),
ySteps.map((v, i) =>  React.createElement("g", { key: i },  React.createElement("line", { x1: PAD.l, x2: PAD.l + IW, y1: sy(v), y2: sy(v), stroke: "var(--border)_0x4f2a("LCBzdHJva2VXaWR0aDogMC42IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")text", { x: PAD.l - 5, y: sy(v) + 4, textAnchor: "end_0x4f2a("LCBmb250U2l6ZTogOSwgZmlsbDog")var(--t3)_0x4f2a("LCBmb250RmFtaWx5OiA=")Inter_0x4f2a("IH0sIGZtdFBjdCh2LCAwKSkpKSwKbG8gPCAwICYmIGhpID4gMCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: PAD.l, x2: PAD.l + IW, y1: zero, y2: zero, stroke: "var(--border2)_0x4f2a("LCBzdHJva2VXaWR0aDogMSwgc3Ryb2tlRGFzaGFycmF5OiA=")4,3_0x4f2a("IH0pLApzaG93REQgJiYgZGRGaWxsUGF0aCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")path", { d: ddFillPath, fill: "url(#ddg)_0x4f2a("LCBjbGlwUGF0aDog")url(#pcc)", opacity: mounted ? 1 : 0, style: { transition: "opacity .6s_0x4f2a("IH0gfSksCnNob3dERCAmJiBkZFBhdGggJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")path", { d: ddPath, fill: "none_0x4f2a("LCBzdHJva2U6IA==")#ef4444_0x4f2a("LCBzdHJva2VXaWR0aDogMS4yLCBzdHJva2VEYXNoYXJyYXk6IA==")4,2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBjbGlwUGF0aDog")url(#pcc)", opacity: mounted ? 0.65 : 0, style: { transition: "opacity .6s_0x4f2a("IH0gfSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")path", { d: fill, fill: "url(#pcg)_0x4f2a("LCBjbGlwUGF0aDog")url(#pcc)", style: { opacity: mounted ? 1 : 0, transition: "opacity .6s_0x4f2a("IH0gfSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")path", { ref: pathRef, d, fill: "none_0x4f2a("LCBzdHJva2U6IGNvbCwgc3Ryb2tlV2lkdGg6IDIuMiwgc3Ryb2tlTGluZWpvaW46IA==")round_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBjbGlwUGF0aDog")url(#pcc)_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")circle", { cx: sx(maxX), cy: sy(last), r: 4, fill: col, stroke: "white", strokeWidth: 2, opacity: mounted ? 1 : 0, style: { transition: "opacity .3s .8s_0x4f2a("IH0gfSksCmhwICYmIGhvdmVyLmlkeCA+IDAgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")g", { style: { pointerEvents: "none_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")line", { x1: sx(hover.idx), x2: sx(hover.idx), y1: PAD.t, y2: PAD.t + IH, stroke: col, strokeWidth: 1, strokeDasharray: "3,3_0x4f2a("LCBvcGFjaXR5OiAwLjQgfSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")circle", { cx: sx(hover.idx), cy: sy(hp.y), r: 5, fill: col, stroke: "white_0x4f2a("LCBzdHJva2VXaWR0aDogMiB9KSwgc2hvd0REICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")circle", { cx: sx(hover.idx), cy: sy(hp.dd), r: 3, fill: "#ef4444_0x4f2a("LCBzdHJva2U6IA==")white_0x4f2a("LCBzdHJva2VXaWR0aDogMS41IH0pLCA=")      ")
), hp && hover.idx > 0 && (() => {
const frac = sx(hover.idx) / W;
const left = frac > 0.72 ? _0x4f2a("YXV0bw==") : `calc(${Math.round(frac * 100)}% + 10px)`;
const right = frac > 0.72 ? _0x4f2a("MTBweA==") : _0x4f2a("YXV0bw==");
return  React.createElement("div", { style: { position: "absolute_0x4f2a("LCB0b3A6IDQsIGxlZnQsIHJpZ2h0LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")11px 15px_0x4f2a("LCBmb250U2l6ZTogMTEsIHBvaW50ZXJFdmVudHM6IA==")none_0x4f2a("LCB6SW5kZXg6IDEwLCBtaW5XaWR0aDogMTgwLCBib3hTaGFkb3c6IA==")0 8px 30px rgba(0,0,0,.15)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontWeight: 600, marginBottom: 6, fontSize: 12, borderBottom: "1px solid var(--border)_0x4f2a("LCBwYWRkaW5nQm90dG9tOiA2LCBjb2xvcjog")var(--text)_0x4f2a("IH0gfSwgaHAuZGF0ZSwg") \xB7 _0x4f2a("LCBocC5sYWJlbCB8fCA=")Start_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDQgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBnYXA6IDE0IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwg")Equity_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontWeight: 700, color: hp.y >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, fmtPct(hp.y))), hp.pnl != null &&  React.createElement("div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBnYXA6IDE0IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwg")This trade_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontWeight: 700, color: hp.pnl >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, hp.profit != null && hp.profit !== 0 ? (hp.profit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKGhwLnByb2ZpdCkudG9GaXhlZCgyKSArIA==") " : "", fmtPct(hp.pnl)))));
})());
});
function parseMT5Html(htmlText) {
const parser = new DOMParser();
const doc = parser.parseFromString(htmlText, _0x4f2a("dGV4dC9odG1s"));
const rows = Array.from(doc.querySelectorAll("tr"));
const datePat = /^\d{4}\.\d{2}\.\d{2}\s+\d{2}:\d{2}:\d{2}$/;
const trades = [];
for (const row of rows) {
const cells = Array.from(row.querySelectorAll(_0x4f2a("dGQ6bm90KC5oaWRkZW4p"))).map(c => c.textContent.trim());
if (!cells.length || !datePat.test(cells[0])) continue;
try {
const entryDt = cells[0], posId = cells[1], symRaw = cells[2], type = cells[3];
const vol = parseFloat(cells[4]);
const entryPrice = parseFloat(cells[5]);
const sl = parseFloat(cells[6]) || 0;
const tp = parseFloat(cells[7]) || 0;
const exitDt = cells[8], exitPrice = parseFloat(cells[9]) || 0;
const profitStr = (cells[12] || "0").replace(/\s/g,"").replace(/\u00a0/g,"");
const profit = parseFloat(profitStr) || 0;
if (isNaN(vol) || profit === 0) continue;
const [datePart, timePart] = entryDt.split(" ");
const entryDate = datePart.replace(/\./g,"-_0x4f2a("KTsKY29uc3QgaCA9IHBhcnNlSW50KHRpbWVQYXJ0KTsKY29uc3Qgc2Vzc2lvbiA9IGggPCA3ID8g")Asia_0x4f2a("IDogaCA8IDEyID8g")London Open_0x4f2a("IDogaCA8IDE2ID8g")New York_0x4f2a("IDogaCA8IDIwID8g")London Mid" : _0x4f2a("T3V0IG9mIFNlc3Npb24=");
const symbol = symRaw.replace(/\.QTT|\.$/g,"_0x4f2a("KTsKY29uc3Qgc2lkZSA9IHR5cGUuaW5jbHVkZXMo")buy_0x4f2a("KSA/IA==")Long" : _0x4f2a("U2hvcnQ=");
const _mt5Raw = [symbol, entryDate, timePart, side, String(entryPrice), String(exitPrice), String(parseFloat(profit.toFixed(2)))].join("|");
let _mt5h = 5381; for (let _i = 0; _i < _mt5Raw.length; _i++) _mt5h = (((_mt5h << 5) + _mt5h) ^ _mt5Raw.charCodeAt(_i)) >>> 0;
trades.push({
id: _0x4f2a("bXQ1Xw==") + _mt5h.toString(36) + "_" + _mt5Raw.length,
symbol, entryDate, entryTime: timePart,
side, entryPrice, exitPrice, stopLoss: sl, takeProfit: tp,
pnl: 0,
profit: parseFloat(profit.toFixed(2)),
status: _0x4f2a("Q2xvc2Vk"), confluences: [], session,
model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),
emotionAfter: profit > 0 ? _0x4f2a("U2F0aXNmaWVk") : _0x4f2a("TGVzc29uIExlYXJuZWQ="),
mistakes: _0x4f2a("Tm9uZQ=="), grade: profit > 50 ? "A_0x4f2a("IDogcHJvZml0ID4gMCA/IA==")B_0x4f2a("IDogcHJvZml0ID4gLTUwID8g")C" : "D_0x4f2a("LApleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")", notes: `MT5 | Vol:${vol}`,
riskAmount: 0, tags: ["MT5_0x4f2a("XSwgYWNjb3VudElkOiA=")"
});
} catch(e) {}
}
return trades;
}
function parseMatchTraderCSV(csvText) {
const lines = csvText.trim().split(/\r?\n/);
if (lines.length < 2) return [];
const headers = lines[0].split(",_0x4f2a("KS5tYXAoaCA9PiBoLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTsKY29uc3QgaUlkICAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")id_0x4f2a("KTsKY29uc3QgaVN5bSAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")symbol_0x4f2a("KTsKY29uc3QgaU9wZW5UaW1lID0gaGVhZGVycy5pbmRleE9mKA==")open time_0x4f2a("KTsKY29uc3QgaVZvbCAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")volume_0x4f2a("KTsKY29uc3QgaVNpZGUgICAgID0gaGVhZGVycy5pbmRleE9mKA==")side_0x4f2a("KTsKY29uc3QgaUNsb3NlVGltZT0gaGVhZGVycy5pbmRleE9mKA==")close time_0x4f2a("KTsKY29uc3QgaU9wZW5QeCAgID0gaGVhZGVycy5pbmRleE9mKA==")open price_0x4f2a("KTsKY29uc3QgaUNsb3NlUHggID0gaGVhZGVycy5pbmRleE9mKA==")close price_0x4f2a("KTsKY29uc3QgaVNMICAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")stop loss_0x4f2a("KTsKY29uc3QgaVRQICAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")take profit_0x4f2a("KTsKY29uc3QgaVN3YXAgICAgID0gaGVhZGVycy5pbmRleE9mKA==")swap_0x4f2a("KTsKY29uc3QgaUNvbW0gICAgID0gaGVhZGVycy5pbmRleE9mKA==")commission_0x4f2a("KTsKY29uc3QgaVByb2ZpdCAgID0gaGVhZGVycy5pbmRleE9mKA==")profit_0x4f2a("KTsKY29uc3QgaVJlYXNvbiAgID0gaGVhZGVycy5pbmRleE9mKA==")reason");
if (iSym < 0 || iOpenTime < 0 || iProfit < 0) return [];
const trades = [];
for (let i = 1; i < lines.length; i++) {
const raw = lines[i];
if (!raw.trim()) continue;
const cells = raw.split(",_0x4f2a("KS5tYXAoYyA9PiBjLnRyaW0oKS5yZXBsYWNlKC9e")|"$/g, ""));
try {
const sym        = iSym >= 0      ? cells[iSym]  : "_0x4f2a("Owpjb25zdCBvcGVuUmF3ICAgID0gaU9wZW5UaW1lID49IDAgPyBjZWxsc1tpT3BlblRpbWVdIDog")_0x4f2a("Owpjb25zdCBjbG9zZVJhdyAgID0gaUNsb3NlVGltZSA+PSAwPyBjZWxsc1tpQ2xvc2VUaW1lXTog")";
const vol        = iVol >= 0      ? parseFloat(cells[iVol])   || 0 : 0;
const sideRaw    = iSide >= 0     ? cells[iSide].toUpperCase() : "BUY";
const openPx     = iOpenPx >= 0   ? parseFloat(cells[iOpenPx])  || 0 : 0;
const closePx    = iClosePx >= 0  ? parseFloat(cells[iClosePx]) || 0 : 0;
const sl         = iSL >= 0       ? parseFloat(cells[iSL])   || 0 : 0;
const tp         = iTP >= 0       ? parseFloat(cells[iTP])   || 0 : 0;
const swap       = iSwap >= 0     ? parseFloat(cells[iSwap]) || 0 : 0;
const comm       = iComm >= 0     ? parseFloat(cells[iComm]) || 0 : 0;
const profit     = iProfit >= 0   ? parseFloat(cells[iProfit]) || 0 : 0;
const reason     = iReason >= 0   ? cells[iReason] : "_0x4f2a("OwppZiAoIXN5bSB8fCAhb3BlblJhdykgY29udGludWU7CmNvbnN0IFtkYXRlUGFydCwgdGltZUZ1bGxdID0gb3BlblJhdy5zcGxpdCg=")T_0x4f2a("KTsKY29uc3QgdGltZVBhcnQgPSB0aW1lRnVsbCA/IHRpbWVGdWxsLnNwbGl0KA==")._0x4f2a("KVswXSA6IA==")00:00:00_0x4f2a("Owpjb25zdCBlbnRyeURhdGUgPSBkYXRlUGFydDsKY29uc3QgaCA9IHBhcnNlSW50KHRpbWVQYXJ0LnNwbGl0KA=="):_0x4f2a("KVswXSk7CmNvbnN0IHNlc3Npb24gPSBoIDwgNyA/IA==")Asia_0x4f2a("IDogaCA8IDEyID8g")London Open_0x4f2a("IDogaCA8IDE2ID8g")New York_0x4f2a("IDogaCA8IDIwID8g")London Mid" : _0x4f2a("T3V0IG9mIFNlc3Npb24=");
const side = sideRaw === "BUY" ? _0x4f2a("TG9uZw==") : _0x4f2a("U2hvcnQ=");
const netProfit = parseFloat((profit + swap + comm).toFixed(2));
const _mtRaw = [sym, entryDate, timePart, side, String(openPx), String(closePx), String(netProfit)].join("|");
let _mth = 5381; for (let _i = 0; _i < _mtRaw.length; _i++) _mth = (((_mth << 5) + _mth) ^ _mtRaw.charCodeAt(_i)) >>> 0;
trades.push({
id: "mt__0x4f2a("ICsgX210aC50b1N0cmluZygzNikgKyA=")_" + _mtRaw.length,
symbol: sym, entryDate, entryTime: timePart,
side, entryPrice: openPx, exitPrice: closePx, stopLoss: sl, takeProfit: tp,
pnl: 0,
profit: netProfit,
status: _0x4f2a("Q2xvc2Vk"), confluences: [], session,
model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),
emotionAfter: netProfit > 0 ? _0x4f2a("U2F0aXNmaWVk") : _0x4f2a("TGVzc29uIExlYXJuZWQ="),
mistakes: _0x4f2a("Tm9uZQ=="),
grade: netProfit > 50 ? "A_0x4f2a("IDogbmV0UHJvZml0ID4gMCA/IA==")B_0x4f2a("IDogbmV0UHJvZml0ID4gLTUwID8g")C" : "D_0x4f2a("LApleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")",
notes: `Match Trader | Vol:${vol}${reason ? " | _0x4f2a("ICsgcmVhc29uIDog")_0x4f2a("fWAsCnJpc2tBbW91bnQ6IDAsIHRhZ3M6IFs=")Match Trader_0x4f2a("XSwgYWNjb3VudElkOiA=")"
});
} catch(e) {}
}
return trades;
}
function parseTradovateCSV(csvText) {
const lines = csvText.trim().split(/\r?\n/);
if (lines.length < 2) return [];
const headers = lines[0].split(",_0x4f2a("KS5tYXAoaCA9PiBoLnRyaW0oKS5yZXBsYWNlKC8=")/g,"").toLowerCase());
const trades = [];
const find = (keys) => { for (const k of keys) { const i = headers.indexOf(k); if (i >= 0) return i; } return -1; };
const findPartial = (keys) => { for (const k of keys) { const i = headers.findIndex(h => h.includes(k)); if (i >= 0) return i; } return -1; };
const iSym = find([_0x4f2a("c3ltYm9s"),_0x4f2a("Y29udHJhY3Q=")]);
const iDate = find([_0x4f2a("Ym91Z2h0dGltZXN0YW1w"),_0x4f2a("YnV5IHRpbWU="),_0x4f2a("ZW50cnkgdGltZQ=="),_0x4f2a("YnV5IGRhdGV0aW1l"),_0x4f2a("ZGF0ZXRpbWU="),_0x4f2a("ZGF0ZQ==")]);
const iExitDate = find([_0x4f2a("c29sZHRpbWVzdGFtcA=="),_0x4f2a("c2VsbCB0aW1l"),_0x4f2a("ZXhpdCB0aW1l"),_0x4f2a("c29sZCBkYXRldGltZQ==")]);
const iBuyFillId = find([_0x4f2a("YnV5RmlsbElk"),_0x4f2a("YnV5ZmlsbGlk")]);
const iSellFillId = find([_0x4f2a("c2VsbEZpbGxJZA=="),_0x4f2a("c2VsbGZpbGxpZA==")]);
const iEntry = find([_0x4f2a("YnV5cHJpY2U="),_0x4f2a("YnV5IHByaWNl"),_0x4f2a("ZW50cnkgcHJpY2U="),_0x4f2a("ZmlsbCBwcmljZQ=="),_0x4f2a("cHJpY2U=")]);
const iExit = find([_0x4f2a("c2VsbHByaWNl"),_0x4f2a("c2VsbCBwcmljZQ=="),_0x4f2a("ZXhpdCBwcmljZQ=="),_0x4f2a("Y2xvc2UgcHJpY2U=")]);
const iProfit = find(["pnl","p&l",_0x4f2a("cHJvZml0"),_0x4f2a("cmVhbGl6ZWQgcG5s"),_0x4f2a("bmV0IHBubA=="),_0x4f2a("cmVhbGl6ZWQgcCZs")]);
const iQty = find(["qty",_0x4f2a("cXVhbnRpdHk="),_0x4f2a("c2l6ZQ=="),_0x4f2a("dm9sdW1l")]);
const parsePnl = (s) => {
if (!s) return 0;
const isNeg = s.includes("(_0x4f2a("KTsKY29uc3QgbnVtID0gcGFyc2VGbG9hdChzLnJlcGxhY2UoL1teMC05Ll0vZyw=")")) || 0;
return isNeg ? -num : num;
};
const parseTradeDate = (s) => {
if (!s) return { date: "_0x4f2a("LCB0aW1lOiA=")00:00:00" };
const mmddyyyy = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{2}:\d{2}:\d{2})/);
if (mmddyyyy) {
const [,mm,dd,yyyy,time] = mmddyyyy;
return { date: `${yyyy}-${mm.padStart(2,"0")}-${dd.padStart(2,"0")}`, time };
}
const d = new Date(s);
if (!isNaN(d)) {
return { date: d.toISOString().slice(0,10), time: d.toTimeString().slice(0,8) };
}
return { date: s.slice(0,10).replace(/\
};
for (let i = 1; i < lines.length; i++) {
const cols = lines[i].split(",_0x4f2a("KS5tYXAoYyA9PiBjLnRyaW0oKS5yZXBsYWNlKC8=")/g,""));
if (cols.length < 3) continue;
try {
const profit = parsePnl(cols[iProfit]);
const rawDate = iDate >= 0 ? cols[iDate] : "";
const { date: entryDate, time: entryTime } = parseTradeDate(rawDate);
if (!entryDate) continue;
const symbol = iSym >= 0 ? cols[iSym].replace(/[^A-Z0-9]/gi,"_0x4f2a("KSA6IA==")UNKNOWN_0x4f2a("OwppZiAoIXN5bWJvbCkgY29udGludWU7CmxldCBzaWRlID0g")Long";
if (iBuyFillId >= 0 && iSellFillId >= 0) {
const buyId = parseInt(cols[iBuyFillId]) || 0;
const sellId = parseInt(cols[iSellFillId]) || 0;
side = buyId < sellId ? _0x4f2a("TG9uZw==") : _0x4f2a("U2hvcnQ=");
}
const entryPrice = iEntry >= 0 ? parseFloat(cols[iEntry]) || 0 : 0;
const exitPrice = iExit >= 0 ? parseFloat(cols[iExit]) || 0 : 0;
const qty = iQty >= 0 ? parseInt(cols[iQty]) || 1 : 1;
const TRAD_COMM = {
ES:3.50,MES:1.00,NQ:3.50,MNQ:1.00,RTY:3.50,M2K:1.00,
NKD:3.50,YM:3.50,MYM:1.00,
A6:4.80,B6:4.80,C6:4.80,E6:4.80,J6:4.80,S6:4.80,N6:4.80,
CL:4.00,MCL:1.00,QM:4.00,QG:2.60,NG:4.00,
PL:4.60,HG:5.80,GC:4.60,MGC:1.60,SI:4.60,SIL:3.20,
HE:5.60,LE:5.60,ZS:5.60,ZC:5.60,ZL:5.60,ZM:5.60,ZW:5.60
};
const rootSym = symbol.replace(/[A-Z]?\d+$/,"");
const commPerContract = TRAD_COMM[rootSym] !== undefined ? TRAD_COMM[rootSym] : 5.00;
const commission = qty * commPerContract;
const netProfit = parseFloat((profit - commission).toFixed(2));
const h = parseInt(entryTime);
const session = h < 7 ? _0x4f2a("QXNpYQ==") : h < 12 ? _0x4f2a("TG9uZG9uIE9wZW4=") : h < 16 ? _0x4f2a("TmV3IFlvcms=") : _0x4f2a("T3V0IG9mIFNlc3Npb24=");
const _fpRaw = [symbol, entryDate, entryTime, side, String(entryPrice), String(exitPrice), String(netProfit)].join("|");
let _h = 5381;
for (let _ci = 0; _ci < _fpRaw.length; _ci++) _h = (((_h << 5) + _h) ^ _fpRaw.charCodeAt(_ci)) >>> 0;
const _stableId = "tv__0x4f2a("ICsgX2gudG9TdHJpbmcoMzYpICsg")_" + _fpRaw.length;
trades.push({
id: _stableId,
symbol, entryDate, entryTime, side, entryPrice, exitPrice,
stopLoss: 0, takeProfit: 0,
pnl: 0,
profit: netProfit,
status: _0x4f2a("Q2xvc2Vk"), confluences: [], session,
model: _0x4f2a("SW4gU2Vzc2lvbg=="), emotionBefore: _0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),
emotionAfter: netProfit > 0 ? _0x4f2a("U2F0aXNmaWVk") : _0x4f2a("TGVzc29uIExlYXJuZWQ="),
mistakes: _0x4f2a("Tm9uZQ=="), grade: netProfit > 50 ? "A_0x4f2a("IDogbmV0UHJvZml0ID4gMCA/IA==")B_0x4f2a("IDogbmV0UHJvZml0ID4gLTUwID8g")C" : "D_0x4f2a("LApleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")", notes: `Tradovate Import | Comm: -$${commission.toFixed(2)} ($${commPerContract}/ct)`,
riskAmount: 0, tags: [_0x4f2a("VHJhZG92YXRl")], accountId: ""
});
} catch(e) {}
}
return trades;
}
function parseProjectXCSV(csvText) {
const trades = parseTradovateCSV(csvText);
return trades.map(t => ({ ...t, notes: _0x4f2a("RnV0dXJlcyBJbXBvcnQ="), tags: [_0x4f2a("RnV0dXJlcw==")] }));
}
function parseJournalCSV(csvText) {
const splitCSVLine = (line) => {
const out = []; let cur = ""; let inQ = false;
for (let i = 0; i < line.length; i++) {
const c = line[i];
if (c === '"') { inQ = !inQ; continue; }
if (!inQ && c === ',') { out.push(cur.trim()); cur = ""; continue; }
cur += c;
}
out.push(cur.trim());
return out;
};
const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
if (lines.length < 2) return [];
const headers = splitCSVLine(lines[0]).map(h => h.toLowerCase().trim());
const isTradexy = headers.includes(_0x4f2a("c3ltYm9s")) && headers.includes(_0x4f2a("ZGF0ZQ==")) &&
(headers.includes("net p&l $") || headers.includes(_0x4f2a("bmV0IHAmbA==")) || headers.includes(_0x4f2a("Z3JhZGU="))) &&
(headers.includes(_0x4f2a("ZW1vdGlvbiBiZWZvcmU=")) || headers.includes(_0x4f2a("c2Vzc2lvbg==")));
if (!isTradexy) return [];
const fi = (names) => { for (const n of names) { const i = headers.indexOf(n); if (i >= 0) return i; } return -1; };
const iID      = fi(["id_0x4f2a("XSk7CmNvbnN0IGlTeW0gICAgID0gZmkoWw==")symbol_0x4f2a("XSk7CmNvbnN0IGlEYXRlICAgID0gZmkoWw==")date_0x4f2a("XSk7CmNvbnN0IGlUaW1lICAgID0gZmkoWw==")time_0x4f2a("XSk7CmNvbnN0IGlTaWRlICAgID0gZmkoWw==")side_0x4f2a("XSk7CmNvbnN0IGlFbnRyeSAgID0gZmkoWw==")entry_0x4f2a("XSk7CmNvbnN0IGlFeGl0ICAgID0gZmkoWw==")exit_0x4f2a("XSk7CmNvbnN0IGlQY3QgICAgID0gZmkoWw==")p&l%",_0x4f2a("cCZsICU="),_0x4f2a("cG5sJQ==")]);
const iProfit  = fi(["net p&l $",_0x4f2a("bmV0IHAmbA=="),"profit $",_0x4f2a("cHJvZml0")]);
const iSession = fi([_0x4f2a("c2Vzc2lvbg==")]);
const iModel   = fi([_0x4f2a("bW9kZWw=")]);
const iGrade   = fi([_0x4f2a("Z3JhZGU=")]);
const iExpRR   = fi([_0x4f2a("ZXhwZWN0ZWQgcnI=")]);
const iActRR   = fi([_0x4f2a("YWN0dWFsIHJy")]);
const iEmoBef  = fi([_0x4f2a("ZW1vdGlvbiBiZWZvcmU=")]);
const iEmoAft  = fi([_0x4f2a("ZW1vdGlvbiBhZnRlcg==")]);
const iMistake = fi([_0x4f2a("bWlzdGFrZXM=")]);
const iConfl   = fi([_0x4f2a("Y29uZmx1ZW5jZXM=")]);
const iNotes   = fi([_0x4f2a("bm90ZXM=")]);
const trades = [];
for (let i = 1; i < lines.length; i++) {
const cols = splitCSVLine(lines[i]);
if (cols.length < 3) continue;
const g = (idx) => idx >= 0 ? (cols[idx] || "_0x4f2a("KS50cmltKCkgOiA=")";
const profit = parseFloat(g(iProfit).replace(/[^0-9.\-]/g, "")) || 0;
const entryDate = g(iDate);
if (!entryDate || !g(iSym)) continue;
const confluencesRaw = g(iConfl);
const confluences = confluencesRaw ? confluencesRaw.split(";").map(c => c.trim()).filter(Boolean) : [];
const rawId = g(iID);
const tradeId = rawId && /^\d+$/.test(rawId) ? parseInt(rawId, 10) : Date.now() + i + Math.random();
trades.push({
id: tradeId,
symbol: g(iSym),
entryDate,
entryTime: g(iTime) || _0x4f2a("MDA6MDA6MDA="),
side: g(iSide) || _0x4f2a("TG9uZw=="),
entryPrice: parseFloat(g(iEntry)) || 0,
exitPrice: parseFloat(g(iExit)) || 0,
pnl: parseFloat(g(iPct)) || 0,
profit,
session: g(iSession) || _0x4f2a("TmV3IFlvcms="),
model: g(iModel) || _0x4f2a("SW1wb3J0ZWQ="),
grade: g(iGrade) || "B_0x4f2a("LApleHBlY3RlZFJSOiBnKGlFeHBSUikgfHwg")1:2_0x4f2a("LAphY3R1YWxSUjogZyhpQWN0UlIpIHx8IA==")_0x4f2a("LAplbW90aW9uQmVmb3JlOiBnKGlFbW9CZWYpIHx8IA==")Neutral_0x4f2a("LAplbW90aW9uQWZ0ZXI6IGcoaUVtb0FmdCkgfHwg")Neutral_0x4f2a("LAptaXN0YWtlczogZyhpTWlzdGFrZSkgfHwg")None_0x4f2a("LApjb25mbHVlbmNlcywKbm90ZXM6IGcoaU5vdGVzKSB8fCA=")_0x4f2a("LApzdGF0dXM6IA==")Closed_0x4f2a("LApzdG9wTG9zczogMCwgdGFrZVByb2ZpdDogMCwgcmlza0Ftb3VudDogMCwKdGFnczogWw==")Tradexy Import_0x4f2a("XSwKYWNjb3VudElkOiA=")",
createdAt: new Date().toISOString(),
updatedAt: new Date().toISOString(),
});
}
return trades;
}
function exportJSON(trades) {
const payload = JSON.stringify(trades, null, 2);
const a = document.createElement("a");
a.href = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
a.download = `tradexy_backup_${new Date().toISOString().slice(0, 10)}.json`;
a.click();
}
function parseJournalJSON(jsonText) {
let data;
try { data = JSON.parse(jsonText); } catch(e) { return []; }
const arr = Array.isArray(data) ? data : (data.trades || []);
if (!arr.length) return [];
const isTradeObj = (t) => t && typeof t === _0x4f2a("b2JqZWN0") && (_0x4f2a("c3ltYm9s") in t || _0x4f2a("ZW50cnlEYXRl") in t);
const trades = arr.filter(isTradeObj);
return trades.map((t, i) => ({
id: t.id || Date.now() + i + Math.random(),
symbol: t.symbol || _0x4f2a("VU5LTk9XTg=="),
entryDate: t.entryDate || "_0x4f2a("LAplbnRyeVRpbWU6IHQuZW50cnlUaW1lIHx8IA==")00:00:00_0x4f2a("LApzaWRlOiB0LnNpZGUgfHwg")Long",
entryPrice: t.entryPrice || 0,
exitPrice: t.exitPrice || 0,
pnl: t.pnl || 0,
profit: t.profit || 0,
session: t.session || _0x4f2a("TmV3IFlvcms="),
model: t.model || _0x4f2a("SW1wb3J0ZWQ="),
grade: t.grade || "B_0x4f2a("LApleHBlY3RlZFJSOiB0LmV4cGVjdGVkUlIgfHwg")1:2_0x4f2a("LAphY3R1YWxSUjogdC5hY3R1YWxSUiB8fCA=")_0x4f2a("LAplbW90aW9uQmVmb3JlOiB0LmVtb3Rpb25CZWZvcmUgfHwg")Neutral_0x4f2a("LAplbW90aW9uQWZ0ZXI6IHQuZW1vdGlvbkFmdGVyIHx8IA==")Neutral_0x4f2a("LAptaXN0YWtlczogdC5taXN0YWtlcyB8fCA=")None",
confluences: Array.isArray(t.confluences) ? t.confluences : [],
notes: t.notes || "_0x4f2a("LApzdGF0dXM6IHQuc3RhdHVzIHx8IA==")Closed",
stopLoss: t.stopLoss || 0,
takeProfit: t.takeProfit || 0,
riskAmount: t.riskAmount || 0,
tags: Array.isArray(t.tags) ? [...t.tags.filter(x => x !== _0x4f2a("VHJhZGV4eSBJbXBvcnQ=")), _0x4f2a("SlNPTiBJbXBvcnQ=")] : [_0x4f2a("SlNPTiBJbXBvcnQ=")],
accountId: t.accountId || "",
keyLevels: t.keyLevels || [],
createdAt: t.createdAt || new Date().toISOString(),
updatedAt: new Date().toISOString(),
}));
}
function BalanceAdjustmentPanel({ account, onAddAdjustment, onRemoveAdjustment }) {
if (account.isDemo) return null;
const [showForm, setShowForm] = React.useState(false);
const [adjDate, setAdjDate] = React.useState('');
const [adjAmount, setAdjAmount] = React.useState('');
const [adjSign, setAdjSign] = React.useState('+');
const adjs = account.balanceAdjustments || [];
const fmt = (n) => '$' + Math.abs(n).toFixed(2);
function handleAdd() {
const val = parseFloat(adjAmount);
if (!adjDate || isNaN(val) || val <= 0) return;
onAddAdjustment(account.id, {
date: adjDate,
writeOffAmount: adjSign === '+' ? val : -val,
label: adjSign === '+' ? 'Cash Adjustment (+)' : 'Cash Adjustment (-)'
});
setAdjDate(''); setAdjAmount(''); setShowForm(false);
}
const canSave = adjDate && adjAmount && !isNaN(parseFloat(adjAmount)) && parseFloat(adjAmount) > 0;
return React.createElement('div', { style: { borderTop: '1px solid var(--border)', padding: '5px 13px 7px', background: 'color-mix(in srgb, var(--oBg) 40%, var(--surface))' } },
React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', minHeight: 24 } },
React.createElement('span', { style: { fontSize: 9, fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 } }, '⚖️ Cash Adj.'),
adjs.map((adj, idx) => {
const amt = adj.writeOffAmount !== undefined ? adj.writeOffAmount : (adj.amount || 0);
const isPos = amt >= 0;
return React.createElement('div', { key: idx, style: { display: 'flex', alignItems: 'center', gap: 3, background: isPos ? 'var(--gBg)' : 'var(--rBg)', border: `1px solid ${isPos ? 'var(--gBdr)' : 'var(--rBdr)'}`, borderRadius: 20, padding: '1px 6px 1px 7px' } },
React.createElement('span', { style: { fontSize: 10, fontWeight: 700, color: isPos ? 'var(--green)' : 'var(--red)', fontVariantNumeric: 'tabular-nums' } }, (isPos ? '+' : '-') + fmt(amt)),
React.createElement('span', { style: { fontSize: 9, color: 'var(--t3)', marginLeft: 2 } }, adj.date),
React.createElement('button', { onClick: () => onRemoveAdjustment(account.id, idx), style: { background: 'none', border: 'none', color: 'var(--t3)', cursor: 'pointer', fontSize: 10, padding: '0 0 0 3px', lineHeight: 1 } }, '✕')
);
}),
React.createElement('button', {
onClick: () => setShowForm(v => !v),
style: { fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 20, border: `1px solid ${showForm ? 'var(--border)' : 'var(--oBdr)'}`, background: showForm ? 'var(--s3)' : 'var(--oBg)', color: showForm ? 'var(--t3)' : 'var(--orange)', cursor: 'pointer', flexShrink: 0 }
}, showForm ? '✕ Cancel' : '+ Add')
),
showForm && React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 7, flexWrap: 'wrap', position: 'relative', zIndex: 9999 } },
React.createElement('div', { style: { position: 'relative', zIndex: 9999, flexShrink: 0 } },
React.createElement(CustomDatePicker, { value: adjDate, onChange: setAdjDate })
),
React.createElement('div', { style: { display: 'flex', background: 'var(--s3)', borderRadius: 7, padding: 2, gap: 1, flexShrink: 0 } },
['+', '-'].map(sign =>
React.createElement('button', {
key: sign,
onClick: () => setAdjSign(sign),
style: {
width: 28, height: 26, borderRadius: 5, border: 'none', cursor: 'pointer',
fontWeight: 800, fontSize: 14, lineHeight: 1,
background: adjSign === sign ? (sign === '+' ? 'var(--green)' : 'var(--red)') : 'transparent',
color: adjSign === sign ? '#fff' : 'var(--t3)',
transition: 'all .12s'
}
}, sign)
)
),
React.createElement('input', {
type: 'number',
placeholder: '0.00',
value: adjAmount,
onChange: e => setAdjAmount(e.target.value),
onKeyDown: e => { if (e.key === 'Enter') handleAdd(); },
style: { width: 100, border: '1.5px solid var(--border)', borderRadius: 7, padding: '5px 8px', fontSize: 12, fontWeight: 700, background: 'var(--surface)', color: adjSign === '+' ? 'var(--green)' : 'var(--red)', outline: 'none', fontVariantNumeric: 'tabular-nums' }
}),
React.createElement('button', {
onClick: handleAdd,
disabled: !canSave,
style: { padding: '5px 12px', borderRadius: 7, border: 'none', background: canSave ? 'linear-gradient(135deg, var(--acc), var(--accD))' : 'var(--s3)', color: canSave ? '#fff' : 'var(--t3)', fontWeight: 700, fontSize: 11, cursor: canSave ? 'pointer' : 'not-allowed' }
}, '✓ Save')
)
);
}
function AccountsPanel({ accounts, onSync, onRemove, onAdd, onAddAdjustment, onRemoveAdjustment, syncingId, onImportToAccount }) {
const [adding, setAdding] = useState(false);
const [expanded, setExpanded] = useState(false);
const [mode, setMode] = useState(_0x4f2a("ZGVtbw=="));
const [creds, setCreds] = useState({ label: "_0x4f2a("LCBjYXBpdGFsOiA=")_0x4f2a("LCBsb2dpbjog")_0x4f2a("LCBwYXNzd29yZDog")_0x4f2a("LCBzZXJ2ZXI6IA==")_0x4f2a("LCB0eXBlOiA=")live" });
const [showPw, setShowPw] = useState(false);
const [importMode, setImportMode] = useState(false);
const [importType, setImportType] = useState(_0x4f2a("bXQ1aHRtbA=="));
const [importStatus, setImportStatus] = useState(null);
const firstDemoId = accounts.find(a => a.isDemo)?.id || "_0x4f2a("Owpjb25zdCBbdGFyZ2V0QWNjSWQsIHNldFRhcmdldEFjY0lkXSA9IHVzZVN0YXRlKA==")");
const fileRef = React.useRef(null);
const panelRef = React.useRef(null);
const isMobile = useMediaQuery(_0x4f2a("KG1heC13aWR0aDo3NjhweCk="));
React.useEffect(() => {
if (!expanded && !adding && !importMode) return;
function handleOutside(e) {
if (panelRef.current && !panelRef.current.contains(e.target)) {
setExpanded(false);
setAdding(false);
setImportMode(false);
}
}
document.addEventListener('mousedown', handleOutside);
document.addEventListener('touchstart', handleOutside);
return () => {
document.removeEventListener('mousedown', handleOutside);
document.removeEventListener('touchstart', handleOutside);
};
}, [expanded, adding, importMode]);
const mt5CapOk = mode !== "mt5_0x4f2a("IHx8ICgrY3JlZHMuY2FwaXRhbCA+IDApOwpjb25zdCBjYW5BZGQgPSBtb2RlID09PSA=")demo" ? creds.label : (creds.login && creds.password && creds.server && mt5CapOk);
const inp = { width: _0x4f2a("MTAwJQ=="), border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyKQ=="), borderRadius: 9, padding: _0x4f2a("OXB4IDEycHg="), fontSize: 13, outline: _0x4f2a("bm9uZQ=="), background: _0x4f2a("dmFyKC0tczIp"), color: _0x4f2a("dmFyKC0tdGV4dCk="), boxSizing: _0x4f2a("Ym9yZGVyLWJveA=="), fontFamily: _0x4f2a("aW5oZXJpdA==") };
const handleAdd = () => {
if (!canAdd) return;
if (mode === _0x4f2a("ZGVtbw==")) {
onAdd({ label: creds.label || _0x4f2a("RGVtbyBBY2NvdW50"), capital: +creds.capital || 1e4, isDemo: true, login: _0x4f2a("ZGVtbw=="), password: _0x4f2a("ZGVtbw=="), server: _0x4f2a("ZGVtbw=="), type: _0x4f2a("ZGVtbw==") });
} else {
if (!creds.capital || +creds.capital <= 0) { alert(_0x4f2a("RW50ZXIgc3RhcnRpbmcgY2FwaXRhbCBmb3IgTVQ1IGFjY291bnQ=")); return; }
onAdd({ label: creds.label || `Account #${creds.login}`, capital: +creds.capital, isDemo: false, login: creds.login, password: creds.password, server: creds.server, type: creds.type });
}
setCreds({ label: "_0x4f2a("LCBjYXBpdGFsOiBtb2RlID09PSA=")demo" ? _0x4f2a("MTAwMDA=") : "_0x4f2a("LCBsb2dpbjog")_0x4f2a("LCBwYXNzd29yZDog")_0x4f2a("LCBzZXJ2ZXI6IA==")_0x4f2a("LCB0eXBlOiA=")live" });
setAdding(false);
setExpanded(false);
};
const handleImportFile = async (e) => {
const file = e.target.files[0];
if (!file) return;
setImportStatus(null);
const text = await file.text();
let parsed = [];
try {
if (importType === _0x4f2a("bXQ1aHRtbA==")) parsed = parseMT5Html(text);
else if (importType === _0x4f2a("bWF0Y2h0cmFkZXI=")) parsed = parseMatchTraderCSV(text);
else if (importType === _0x4f2a("dHJhZG92YXRl")) parsed = parseTradovateCSV(text);
else if (importType === _0x4f2a("ZnV0dXJlcw==")) parsed = parseProjectXCSV(text);
else if (importType === _0x4f2a("dHJhZGV4eQ==")) parsed = parseJournalCSV(text);
else if (importType === _0x4f2a("anNvbg==")) parsed = parseJournalJSON(text);
} catch(err) {
setImportStatus({ ok: false, msg: _0x4f2a("UGFyc2UgZXJyb3I6IA==") + err.message });
return;
}
const isFullFidelity = importType === _0x4f2a("dHJhZGV4eQ==") || importType === _0x4f2a("anNvbg==");
const valid = isFullFidelity
? parsed.filter(t => t && t.symbol && t.entryDate)
: parsed.filter(t => typeof t.profit === _0x4f2a("bnVtYmVy") && t.profit !== 0 && !isNaN(t.profit));
if (!valid.length) {
setImportStatus({ ok: false, msg: isFullFidelity
? _0x4f2a("Tm8gdHJhZGVzIGZvdW5kLiBNYWtlIHN1cmUgeW91IGFyZSB1cGxvYWRpbmcgYSBUcmFkZXh5IENTViBvciBKU09OIGV4cG9ydC4=")
: _0x4f2a("Tm8gdmFsaWQgdHJhZGVzIGZvdW5kLiBDaGVjayBmaWxlIGZvcm1hdCBhbmQgdGhhdCB0cmFkZXMgaGF2ZSBub24temVybyBQbkwu") });
return;
}
const effectiveAccId = targetAccId || firstDemoId;
if (!effectiveAccId) {
setImportStatus({ ok: false, msg: _0x4f2a("UGxlYXNlIHNlbGVjdCBhbiBhY2NvdW50IHRvIGltcG9ydCB0cmFkZXMgaW50by4=") });
return;
}
const targetAcc = accounts.find(a => a.id === effectiveAccId);
if (targetAcc && !targetAcc.isDemo) {
setImportStatus({ ok: false, msg: `⚠️ "${targetAcc.label}" is a live MT5 account — create a Demo account first, then import trades into it.` });
return;
}
const tagged = valid.map(t => ({ ...t, accountId: effectiveAccId, _importType: isFullFidelity ? _0x4f2a("ZnVsbA==") : _0x4f2a("YnJva2Vy") }));
onImportToAccount(tagged, effectiveAccId);
const skipped = parsed.length - valid.length;
setImportStatus({ ok: true, msg: `✓ ${tagged.length} trades processed (duplicates merged, manual data preserved)${skipped > 0 ? ` · ${skipped} skipped (zero PnL)` : "_0x4f2a("fS5gIH0pOwppZiAoZmlsZVJlZi5jdXJyZW50KSBmaWxlUmVmLmN1cnJlbnQudmFsdWUgPSA=")";
};
const liveCount = accounts.filter((a) => a.connected).length;
const hasAccounts = accounts.length > 0;
const demoAccounts = accounts.filter(a => a.isDemo);
return React.createElement("div", { ref: panelRef, "data-tour": _0x4f2a("YWNjb3VudHMtcGFuZWw="), style: { background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 14, marginBottom: 16, boxShadow: _0x4f2a("dmFyKC0tc2gxKQ==") } },
React.createElement("div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBwYWRkaW5nOiA=")10px 16px_0x4f2a("LCBjdXJzb3I6IGhhc0FjY291bnRzID8g")pointer" : _0x4f2a("ZGVmYXVsdA==") }, onClick: hasAccounts ? () => setExpanded((v) => !v) : undefined },
React.createElement("div", { style: { width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,var(--accF),var(--s3))_0x4f2a("LCBib3JkZXI6IA==")1.5px solid color-mix(in srgb, var(--acc) 25%, transparent)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogMTQsIGZsZXhTaHJpbms6IDAgfSB9LCA=")\u21CC_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { flex: 1, minWidth: 0 } },
React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDcgfSB9LAo=")Trading Accounts_0x4f2a("LApoYXNBY2NvdW50cyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { className: "acct-badge", style: { background: "var(--accF)_0x4f2a("LCBjb2xvcjog")var(--accD)_0x4f2a("LCBib3JkZXI6IA==")1px solid color-mix(in srgb, var(--acc) 30%, transparent)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiA=")1px 8px", fontSize: 10, fontWeight: 700 } }, accounts.length),
liveCount > 0 && React.createElement(_0x4f2a("c3Bhbg=="), { className: _0x4f2a("YWNjdC1iYWRnZQ=="), style: { background: _0x4f2a("dmFyKC0tZ0JnKQ=="), color: _0x4f2a("dmFyKC0tZ3JlZW4p"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWdCZHIp"), borderRadius: 20, padding: _0x4f2a("MXB4IDhweA=="), fontSize: 10, fontWeight: 700, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 4 } }, React.createElement(_0x4f2a("c3Bhbg=="), { style: { width: 5, height: 5, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--green)_0x4f2a("LCBkaXNwbGF5OiA=")inline-block_0x4f2a("LCBhbmltYXRpb246IA==")pulse 2s infinite_0x4f2a("IH0gfSksIGxpdmVDb3VudCwg") live_0x4f2a("KQopLAohaGFzQWNjb3VudHMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDEgfSB9LCA=")No accounts yet_0x4f2a("KQopLAohZXhwYW5kZWQgJiYgaGFzQWNjb3VudHMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQsIGFsaWduSXRlbXM6IA==")center_0x4f2a("LCBmbGV4V3JhcDog")nowrap_0x4f2a("LCBvdmVyZmxvdzog")hidden_0x4f2a("LCBtYXhXaWR0aDogMjAwIH0gfSwKYWNjb3VudHMuc2xpY2UoMCwgMykubWFwKChhY2MsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { key: acc.id, className: "acct-badge", style: { background: "var(--s2)", border: `1px solid ${ACC_COLS[i % ACC_COLS.length]}50`, borderRadius: 20, padding: _0x4f2a("MnB4IDhweA=="), fontSize: 10, fontWeight: 600, color: ACC_COLS[i % ACC_COLS.length], whiteSpace: _0x4f2a("bm93cmFw"), overflow: _0x4f2a("aGlkZGVu"), textOverflow: _0x4f2a("ZWxsaXBzaXM="), maxWidth: 80 } }, acc.label)),
accounts.length > 3 && React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 10, color: _0x4f2a("dmFyKC0tdDMp"), fontWeight: 600 } }, "+_0x4f2a("LCBhY2NvdW50cy5sZW5ndGggLSAzKQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSwgb25DbGljazogKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", {
onClick: () => { setAdding((a) => !a); setImportMode(false); setExpanded(true); },
style: { background: adding ? _0x4f2a("dmFyKC0tczMp") : _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: adding ? _0x4f2a("dmFyKC0tdDIp") : _0x4f2a("I2ZmZg=="), border: `1px solid ${adding ? _0x4f2a("dmFyKC0tYm9yZGVyKQ==") : _0x4f2a("dHJhbnNwYXJlbnQ=")}`, borderRadius: 8, padding: _0x4f2a("NXB4IDEycHg="), fontWeight: 700, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 5, boxShadow: adding ? _0x4f2a("bm9uZQ==") : _0x4f2a("MCAycHggOHB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2MpIDM1JSwgdHJhbnNwYXJlbnQp"), transition: _0x4f2a("YWxsIC4xNXM=") }
}, adding ? "\u2715 Close" : _0x4f2a("KyBBZGQ=")),
React.createElement(_0x4f2a("YnV0dG9u"), {
onClick: (e) => { e.stopPropagation(); setImportMode((v) => !v); setAdding(false); setExpanded(true); setImportStatus(null); },
style: { background: importMode ? _0x4f2a("dmFyKC0tYkJnKQ==") : _0x4f2a("dmFyKC0tczIp"), color: importMode ? _0x4f2a("dmFyKC0tYmx1ZSk=") : _0x4f2a("dmFyKC0tdDIp"), border: `1px solid ${importMode ? _0x4f2a("dmFyKC0tYkJkcik=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 8, padding: _0x4f2a("NXB4IDExcHg="), fontWeight: 700, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 4, transition: _0x4f2a("YWxsIC4xNXM=") },
title: _0x4f2a("SW1wb3J0IFRyYWRlcyBmcm9tIE1UNSAvIFRyYWRvdmF0ZSAvIEZ1dHVyZXM=")
}, "\u2197 Import_0x4f2a("KSwKaGFzQWNjb3VudHMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: (e) => { e.stopPropagation(); setExpanded((v) => !v); }, style: { background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 7, width: 26, height: 26, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), cursor: _0x4f2a("cG9pbnRlcg=="), color: _0x4f2a("dmFyKC0tdDMp"), transition: _0x4f2a("YWxsIC4xNXM="), flexShrink: 0 } },
React.createElement("svg", { width: "10_0x4f2a("LCBoZWlnaHQ6IA==")10_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2.5_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round", style: { transform: expanded ? "rotate(180deg)" : _0x4f2a("cm90YXRlKDBkZWcp"), transition: _0x4f2a("dHJhbnNmb3JtIC4ycw==") } },
React.createElement(_0x4f2a("cG9seWxpbmU="), { points: _0x4f2a("NiA5IDEyIDE1IDE4IDk=") })
)
)
)
),
expanded && hasAccounts && React.createElement("div", { style: { borderTop: "1px solid var(--border)_0x4f2a("LCBwYWRkaW5nOiA=")10px 16px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 8 } },
accounts.map((acc, i) => {
const col = ACC_COLS[i % ACC_COLS.length];
const isSyncing = syncingId === acc.id;
const tb = calcTrueBalance(acc);
const adjs = acc.balanceAdjustments || [];
return React.createElement("div", { key: acc.id, style: { background: "var(--s2)", border: `1px solid ${acc.connected ? "var(--gBdr)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 10 } },
React.createElement("div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBwYWRkaW5nOiA=")9px 13px_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { width: 8, height: 8, borderRadius: "50%", background: col, flexShrink: 0, boxShadow: `0 0 0 2px ${col}25` } }),
React.createElement("div", { style: { flex: 1, minWidth: 0 } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYsIGZsZXhXcmFwOiA=")wrap" } }, acc.label, acc.isDemo && React.createElement(Chip, { color: "purple_0x4f2a("LCBzaXplOiA=")sm_0x4f2a("IH0sIA==")DEMO"), acc.connected && !acc.isDemo && React.createElement(Chip, { color: "truegreen_0x4f2a("LCBzaXplOiA=")sm_0x4f2a("IH0sIA==")\u25CF LIVE_0x4f2a("KSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } },
acc.isDemo
? `Capital: ${fmtUSD(acc.capital || 1e4, false)} · ${acc.trades ? acc.trades.length : 0} trades`
: `#${acc.login} · ${acc.server}`,
acc.lastSync && ` · synced ${acc.lastSync}`,
adjs.length > 0 && React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: _0x4f2a("dmFyKC0tb3JhbmdlKQ=="), fontWeight: 700, marginLeft: 4 } }, `· ${adjs.length} adjustment${adjs.length > 1 ? 's' : ''}`)
)
),
!acc.isDemo && React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => onSync(acc), disabled: isSyncing, style: { background: isSyncing ? _0x4f2a("dmFyKC0tczMp") : col, color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 7, padding: _0x4f2a("NXB4IDExcHg="), fontWeight: 700, fontSize: 10, cursor: isSyncing ? _0x4f2a("bm90LWFsbG93ZWQ=") : _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 4, opacity: isSyncing ? 0.65 : 1 } },
React.createElement(_0x4f2a("c3Bhbg=="), { style: { display: _0x4f2a("aW5saW5lLWJsb2Nr"), animation: isSyncing ? _0x4f2a("c3BpbiAxcyBsaW5lYXIgaW5maW5pdGU=") : _0x4f2a("bm9uZQ==") } }, "\u27F3_0x4f2a("KSwKaXNTeW5jaW5nID8g")Syncing" : _0x4f2a("U3luYw==")
),
React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => onRemove(acc.id), style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), color: _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 11, padding: _0x4f2a("NHB4IDhweA=="), borderRadius: 6 }, onMouseEnter: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tcmVkKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tcmVkKQ=="); }, onMouseLeave: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDMp"); } }, "\u2715")
),
React.createElement(BalanceAdjustmentPanel, {
account: acc,
onUpdate: onAdd ? null : null,
onAddAdjustment,
onRemoveAdjustment
})
);
})
),
importMode && React.createElement("div", { style: { padding: "16px 18px_0x4f2a("LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAxNCwgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDE0LCBhbmltYXRpb246IA==")fadeUp .2s ease_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTQgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 28, height: 28, borderRadius: 8, background: "var(--bBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--bBdr)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogMTMgfSB9LCA=")\u2197_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwg")Import Trade History_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("IH0gfSwg")MT5 Report \u00B7 Tradovate CSV \u00B7 Futures / Project X CSV_0x4f2a("KQopCiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Source Format_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogMTQsIGZsZXhXcmFwOiA=")wrap" } },
[
{ id: "mt5html_0x4f2a("LCBsYWJlbDog")\uD83D\uDCE1 MT5 HTML Report_0x4f2a("LCBkZXNjOiA=").html from MetaTrader 5 Account History" },
{ id: "matchtrader_0x4f2a("LCBsYWJlbDog")\uD83D\uDCCA Match Trader CSV_0x4f2a("LCBkZXNjOiA=").csv Closed Positions from Match Trader" },
{ id: "tradovate_0x4f2a("LCBsYWJlbDog")\uD83D\uDCCA Tradovate CSV_0x4f2a("LCBkZXNjOiA=").csv from Tradovate Trade History" },
{ id: "futures_0x4f2a("LCBsYWJlbDog")\u26A1 Futures / Project X_0x4f2a("LCBkZXNjOiA=").csv from any futures platform" },
{ id: "tradexy_0x4f2a("LCBsYWJlbDog")\uD83D\uDDD2 Tradexy CSV_0x4f2a("LCBkZXNjOiA=").csv exported from this journal" },
{ id: "json_0x4f2a("LCBsYWJlbDog")\uD83D\uDCBE JSON Backup_0x4f2a("LCBkZXNjOiA=").json full backup exported from this journal_0x4f2a("IH0sCl0ubWFwKG9wdCA9PgpSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { key: opt.id, onClick: () => { setImportType(opt.id); setImportStatus(null); },
title: opt.desc,
style: { padding: _0x4f2a("NnB4IDEycHg="), borderRadius: 9, border: `1.5px solid ${importType === opt.id ? _0x4f2a("dmFyKC0tYmx1ZSk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: importType === opt.id ? _0x4f2a("dmFyKC0tYkJnKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: importType === opt.id ? _0x4f2a("dmFyKC0tYmx1ZSk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg=="), transition: _0x4f2a("YWxsIC4xNXM=") } },
opt.label
)
)
),
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Import Into Account_0x4f2a("KSwKaGFzQWNjb3VudHMKPyBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { marginBottom: 14 } },
accounts.some(a => !a.isDemo) && React.createElement("div", { style: { background: "var(--oBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--oBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")9px 12px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEwLCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--orange)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")flex-start_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 14 } }, "\u26A0\uFE0F_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCA=")Live MT5 accounts cannot receive imported trades. _0x4f2a("LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")b_0x4f2a("LCBudWxsLCA=")Please select a Demo account"), _0x4f2a("IG9yIGNyZWF0ZSBhIG5ldyBEZW1vIGFjY291bnQgZmlyc3Qu"))
),
React.createElement(_0x4f2a("c2VsZWN0"), {
value: targetAccId || firstDemoId,
onChange: (e) => setTargetAccId(e.target.value),
style: { ...inp, marginBottom: 0 }
},
React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("LCBkaXNhYmxlZDogdHJ1ZSB9LCA=")— Select an account —_0x4f2a("KSwKLi4uYWNjb3VudHMubWFwKGEgPT4KUmVhY3QuY3JlYXRlRWxlbWVudCg=")option", { key: a.id, value: a.id, disabled: !a.isDemo },
`${a.label}${a.isDemo ? " (Demo)" : _0x4f2a("IOKblCBMaXZlIOKAlCBjYW5ub3QgaW1wb3J0")}`)
)
)
)
: React.createElement("div", { style: { background: "var(--rBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--rBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")9px 12px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--red)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")flex-start_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 14 } }, "\u26A0\uFE0F_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCA=")You must add an account before importing. _0x4f2a("LCBSZWFjdC5jcmVhdGVFbGVtZW50KA==")b_0x4f2a("LCBudWxsLCA=")Click \u201C+ Add\u201D above"), _0x4f2a("IHRvIGNyZWF0ZSBhIERlbW8gYWNjb3VudCBmaXJzdCwgdGhlbiBjb21lIGJhY2sgdG8gaW1wb3J0Lg=="))
),
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwKaW1wb3J0VHlwZSA9PT0g")mt5html" ? _0x4f2a("VXBsb2FkIE1UNSBUcmFkZSBIaXN0b3J5IEhUTUw=") : importType === _0x4f2a("bWF0Y2h0cmFkZXI=") ? _0x4f2a("VXBsb2FkIE1hdGNoIFRyYWRlciBDU1Y=") : importType === _0x4f2a("dHJhZG92YXRl") ? _0x4f2a("VXBsb2FkIFRyYWRvdmF0ZSBDU1Y=") : importType === _0x4f2a("dHJhZGV4eQ==") ? _0x4f2a("VXBsb2FkIFRyYWRleHkgSm91cm5hbCBDU1Y=") : importType === _0x4f2a("anNvbg==") ? _0x4f2a("VXBsb2FkIFRyYWRleHkgSlNPTiBCYWNrdXA=") : _0x4f2a("VXBsb2FkIEZ1dHVyZXMgQ1NW")
),
React.createElement("div", { style: { border: "2px dashed var(--border2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")16px_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEyLCBjdXJzb3I6IA==")pointer_0x4f2a("LCB0cmFuc2l0aW9uOiA=")border-color .15s" },
onClick: () => fileRef.current && fileRef.current.click(),
onDragOver: (e) => { e.preventDefault(); e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYmx1ZSk="); },
onDragLeave: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyMik="); },
onDrop: (e) => {
e.preventDefault(); e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyMik=");
const f = e.dataTransfer.files[0];
if (f && fileRef.current) { const dt = new DataTransfer(); dt.items.add(f); fileRef.current.files = dt.files; handleImportFile({ target: fileRef.current }); }
}
},
React.createElement("div", { style: { fontSize: 20, marginBottom: 6 } }, importType === "mt5html" ? "\uD83D\uDCC4_0x4f2a("IDogaW1wb3J0VHlwZSA9PT0g")json" ? "\uD83D\uDCBE_0x4f2a("IDogaW1wb3J0VHlwZSA9PT0g")tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCCA_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)_0x4f2a("IH0gfSwg")Click or drag & drop file here_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDQgfSB9LAppbXBvcnRUeXBlID09PSA=")mt5html" ? _0x4f2a("TWV0YVRyYWRlciA1IOKGkiBBY2NvdW50IEhpc3Rvcnkg4oaSIFNhdmUgYXMgSFRNTA==") :
importType === _0x4f2a("bWF0Y2h0cmFkZXI=") ? _0x4f2a("TWF0Y2ggVHJhZGVyIOKGkiBDbG9zZWQgUG9zaXRpb25zIHRhYiDihpIgRXhwb3J0IENTVg==") :
importType === _0x4f2a("dHJhZG92YXRl") ? _0x4f2a("VHJhZG92YXRlIOKGkiBQZXJmb3JtYW5jZSDihpIgVHJhZGUgSGlzdG9yeSDihpIgRXhwb3J0IENTVg==") :
importType === _0x4f2a("dHJhZGV4eQ==") ? _0x4f2a("VHJhZGUgTG9nIOKGkiDihpMgQ1NWIGJ1dHRvbiDigJQgcmUtaW1wb3J0IHlvdXIgb3duIGpvdXJuYWwgZXhwb3J0") :
importType === _0x4f2a("anNvbg==") ? _0x4f2a("VHJhZGUgTG9nIOKGkiDihpMgSlNPTiBidXR0b24g4oCUIGZ1bGwgYmFja3VwIHdpdGggYWxsIGZpZWxkcyBwcmVzZXJ2ZWQ=") :
_0x4f2a("UHJvamVjdCBYIC8gTmluamFUcmFkZXIg4oaSIEV4cG9ydCBUcmFkZXMgYXMgQ1NW")
)
),
React.createElement(_0x4f2a("aW5wdXQ="), { ref: fileRef, type: _0x4f2a("ZmlsZQ=="), accept: importType === _0x4f2a("bXQ1aHRtbA==") ? _0x4f2a("Lmh0bWwsLmh0bQ==") : importType === _0x4f2a("anNvbg==") ? _0x4f2a("Lmpzb24=") : _0x4f2a("LmNzdg=="), style: { display: _0x4f2a("bm9uZQ==") }, onChange: handleImportFile }),
React.createElement("div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEyLCBmb250U2l6ZTogMTAsIGNvbG9yOiA=")var(--t3)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjcgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")b", { style: { color: "var(--text)_0x4f2a("LCBkaXNwbGF5OiA=")block_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")\uD83D\uDCA1 Rules_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCA=")\u2022 Only trades with non-zero PnL are imported (except Tradexy CSV & JSON — all trades kept)_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCA=")\u2022 Live MT5 accounts are protected — import into Demo only_0x4f2a("KSwKaW1wb3J0VHlwZSA9PT0g")mt5html_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCA=")\u2022 MT5: Go to History tab \u2192 right-click \u2192 Save as HTML Report_0x4f2a("KSwKaW1wb3J0VHlwZSA9PT0g")matchtrader_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCA=")\u2022 Match Trader: Closed Positions tab \u2192 Export CSV (includes ID, Symbol, Volume, Side, prices, Commission, Profit)_0x4f2a("KSwKaW1wb3J0VHlwZSA9PT0g")tradexy_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCA=")\u2022 Tradexy CSV: exported from Trade Log using the \u2193 CSV button_0x4f2a("KSwKaW1wb3J0VHlwZSA9PT0g")json_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCA=")\u2022 JSON Backup: exported from Trade Log using the \u2193 JSON button — all fields fully restored_0x4f2a("KQopLAppbXBvcnRTdGF0dXMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { background: importStatus.ok ? "var(--gBg)" : _0x4f2a("dmFyKC0tckJnKQ=="), border: `1px solid ${importStatus.ok ? _0x4f2a("dmFyKC0tZ0Jkcik=") : _0x4f2a("dmFyKC0tckJkcik=")}`, borderRadius: 9, padding: _0x4f2a("MTBweCAxNHB4"), fontSize: 12, fontWeight: 600, color: importStatus.ok ? _0x4f2a("dmFyKC0tZ3JlZW4p") : _0x4f2a("dmFyKC0tcmVkKQ=="), animation: _0x4f2a("ZmFkZVVwIC4ycyBlYXNl") } },
importStatus.msg
)
),
adding && React.createElement("div", { style: { padding: "16px_0x4f2a("LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)", borderBottomLeftRadius: 14, borderBottomRightRadius: 14 } },
React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTYgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => setMode("demo"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "demo" ? _0x4f2a("dmFyKC0tcHVycGxlKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: mode === _0x4f2a("ZGVtbw==") ? _0x4f2a("dmFyKC0tcEJnKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: mode === _0x4f2a("ZGVtbw==") ? _0x4f2a("dmFyKC0tcHVycGxlKQ==") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg==") } }, "\uD83C\uDFAE Demo Account_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setMode("mt5"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "mt5" ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: mode === "mt5" ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: mode === "mt5" ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg==") } }, "\uD83D\uDCE1 MT5 Account_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr" : _0x4f2a("MWZyIDFmcg=="), gap: 10, marginBottom: 12 } },
React.createElement("div_0x4f2a("LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCA=")Account Label_0x4f2a("KSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { placeholder: "e.g. Prop Firm — Phase 1", value: creds.label, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { label: e.target.value })), style: inp })),
React.createElement("div_0x4f2a("LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCA=")Starting Capital ($)_0x4f2a("KSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { type: "number_0x4f2a("LCBwbGFjZWhvbGRlcjogbW9kZSA9PT0g")mt5" ? _0x4f2a("UmVxdWlyZWQg4oCUIGUuZy4gMTAwMDA=") : _0x4f2a("ZS5nLiAxMDAwMA=="), value: creds.capital, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { capital: e.target.value })), style: mode === "mt5" ? {...inp, borderColor: +creds.capital > 0 ? "var(--border)" : _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgNjAlLCB0cmFuc3BhcmVudCk=")} : inp })),
mode === "mt5_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCA=")Login ID_0x4f2a("KSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { placeholder: "12345678", value: creds.login, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { login: e.target.value })), style: inp })),
React.createElement("div", { style: { position: "relative_0x4f2a("IH0gfSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCA=")Investor Password_0x4f2a("KSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { type: showPw ? "text" : _0x4f2a("cGFzc3dvcmQ="), placeholder: _0x4f2a("UmVhZC1vbmx5IHBhc3N3b3Jk"), value: creds.password, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { password: e.target.value })), style: { ...inp, paddingRight: 36 } }), React.createElement(_0x4f2a("YnV0dG9u"), { type: _0x4f2a("YnV0dG9u"), onClick: () => setShowPw((s) => !s), style: { position: _0x4f2a("YWJzb2x1dGU="), right: 10, top: 30, background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg=="), color: _0x4f2a("dmFyKC0tdDMp"), fontSize: 13 } }, showPw ? "\u25CF" : "\u25CB_0x4f2a("KSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { gridColumn: "1/-1_0x4f2a("IH0gfSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUgfSB9LCA=")Server_0x4f2a("KSwgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { placeholder: "Broker-Server", value: creds.server, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { server: e.target.value })), style: inp }))
)
),
React.createElement(_0x4f2a("YnV0dG9u"), { onClick: handleAdd, disabled: !canAdd, style: { background: canAdd ? _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ==") : _0x4f2a("dmFyKC0tczMp"), color: canAdd ? _0x4f2a("I2ZmZg==") : _0x4f2a("dmFyKC0tdDMp"), border: _0x4f2a("bm9uZQ=="), borderRadius: 10, padding: _0x4f2a("MTBweCAyMnB4"), fontWeight: 600, fontSize: 12, cursor: canAdd ? _0x4f2a("cG9pbnRlcg==") : _0x4f2a("bm90LWFsbG93ZWQ="), boxShadow: canAdd ? _0x4f2a("MCAzcHggMTJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjKSA0MCUsIHRyYW5zcGFyZW50KQ==") : _0x4f2a("bm9uZQ==") } }, mode === _0x4f2a("ZGVtbw==") ? "\u2713 Create Demo Account" : "\u27F3 Add & Sync MT5_0x4f2a("KSwKbW9kZSA9PT0g")mt5_0x4f2a("ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5MZWZ0OiAxMiB9IH0sIA==")Use investor (read-only) password")
)
);
}
function DateRangeBar({ trades, dateRange, setDateRange, capital }) {
const cap = (capital && capital > 0) ? capital : 5000;
const [mode, setMode] = useState("all");
const today =  new Date();
const apply = (m, from, to) => {
setMode(m);
setDateRange({ from, to });
};
const presets = [
{ id: "all_0x4f2a("LCBsYWJlbDog")All_0x4f2a("LCBmbjogKCkgPT4gYXBwbHko")all", null, null) },
{ id: "thisweek_0x4f2a("LCBsYWJlbDog")This Week", fn: () => {
const mon = new Date(today);
mon.setDate(today.getDate() - (today.getDay() + 6) % 7);
const sun = new Date(mon);
sun.setDate(mon.getDate() + 6);
apply(_0x4f2a("dGhpc3dlZWs="), mon.toISOString().slice(0, 10), sun.toISOString().slice(0, 10));
} },
{ id: _0x4f2a("dGhpc21vbnRo"), label: _0x4f2a("TW9udGg="), fn: () => {
const y = today.getFullYear(), m = today.getMonth();
const last = new Date(y, m + 1, 0);
apply(_0x4f2a("dGhpc21vbnRo"), `${y}-${String(m + 1).padStart(2, "0")}-01`, last.toISOString().slice(0, 10));
} },
{ id: "30d_0x4f2a("LCBsYWJlbDog")30 Days", fn: () => {
const from = new Date(today);
from.setDate(from.getDate() - 30);
apply("30d", from.toISOString().slice(0, 10), today.toISOString().slice(0, 10));
} }
];
const filtered = dateRange.from || dateRange.to ? trades.filter((t) => (!dateRange.from || t.entryDate >= dateRange.from) && (!dateRange.to || t.entryDate <= dateRange.to)) : trades;
const totalP = filtered.reduce((s, t) => s + (t.profit || 0), 0);
const totalPnl = calcPnL(totalP, cap);
return  React.createElement("div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEzLCBwYWRkaW5nOiA=")11px 16px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDYsIGZsZXhXcmFwOiA=")wrap_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("IH0gfSwgcHJlc2V0cy5tYXAoKHApID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { key: p.id, onClick: p.fn, style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${mode === p.id ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: mode === p.id ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: mode === p.id ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: mode === p.id ? 700 : 500, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg==") } }, p.label)),  React.createElement("div", { style: { marginLeft: "auto_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")center_0x4f2a("LCBmbGV4V3JhcDog")wrap" } },  React.createElement(CustomDatePicker, { value: dateRange.from || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { from: v || null })) }),  React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: _0x4f2a("dmFyKC0tdDMp"), fontSize: 14 } }, "\u2192"),  React.createElement(CustomDatePicker, { value: dateRange.to || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { to: v || null })) }),  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 12, fontWeight: 700, color: totalP >= 0 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp") } }, totalP !== 0 ? (totalP >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKHRvdGFsUCkudG9GaXhlZCgwKSArIA==") \xB7 " : "_0x4f2a("LCBmbXRQY3QodG90YWxQbmwsIDIpLCA=") \xB7 _0x4f2a("LCBmaWx0ZXJlZC5sZW5ndGgsIA==") trades")));
}
function MiniCalendarWidget({ trades, ic, capital: propCapital }) {
const capital = (propCapital && propCapital > 0) ? propCapital : (ic && ic > 0 ? ic : 5000);
const now = new Date();
const [calYear, setCalYear] = useState(now.getFullYear());
const [calMonth, setCalMonth] = useState(now.getMonth());
const [showUSD, setShowUSD] = useState(true);
const [dayPopup, setDayPopup] = useState(null);
const MN = [_0x4f2a("SmFudWFyeQ=="),_0x4f2a("RmVicnVhcnk="),_0x4f2a("TWFyY2g="),_0x4f2a("QXByaWw="),"May",_0x4f2a("SnVuZQ=="),_0x4f2a("SnVseQ=="),_0x4f2a("QXVndXN0"),_0x4f2a("U2VwdGVtYmVy"),_0x4f2a("T2N0b2Jlcg=="),_0x4f2a("Tm92ZW1iZXI="),_0x4f2a("RGVjZW1iZXI=")];
const DOW_MINI = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const byDate = {};
trades.forEach((t) => {
const parts = t.entryDate.split("-").map(Number);
if (parts[0] === calYear && parts[1] - 1 === calMonth) {
if (!byDate[t.entryDate]) byDate[t.entryDate] = { profit: 0, count: 0, trades: [] };
byDate[t.entryDate].profit += t.profit || 0;
byDate[t.entryDate].count++;
byDate[t.entryDate].trades.push(t);
}
});
Object.keys(byDate).forEach((d) => { byDate[d].pnl = calcPnL(byDate[d].profit, capital); });
const maxP = Math.max(...Object.values(byDate).map((d) => Math.abs(d.profit)).concat([1]));
const first = new Date(calYear, calMonth, 1).getDay();
const days = new Date(calYear, calMonth + 1, 0).getDate();
const cells = Array(first).fill(null).concat(Array.from({ length: days }, (_, i) => i + 1));
const dk = (d) => calYear + "-_0x4f2a("ICsgU3RyaW5nKGNhbE1vbnRoICsgMSkucGFkU3RhcnQoMiw=")0_0x4f2a("KSArIA==")-_0x4f2a("ICsgU3RyaW5nKGQpLnBhZFN0YXJ0KDIs")0");
const weeks = [];
for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
const weekStats = weeks.map((w) => {
const p = w.filter(Boolean).reduce((s, d) => s + ((byDate[dk(d)] && byDate[dk(d)].profit) || 0), 0);
return { profit: p, pnl: calcPnL(p, capital), count: w.filter(Boolean).reduce((s, d) => s + ((byDate[dk(d)] && byDate[dk(d)].count) || 0), 0) };
});
const mProfit = Object.values(byDate).reduce((s, v) => s + v.profit, 0);
const mPnl = calcPnL(mProfit, capital);
const mCount = Object.values(byDate).reduce((s, v) => s + v.count, 0);
const todayStr = now.toISOString().slice(0, 10);
const prevMonth = () => {
if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
else setCalMonth(m => m - 1);
};
const nextMonth = () => {
if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
else setCalMonth(m => m + 1);
};
const isCurrentMonth = calYear === now.getFullYear() && calMonth === now.getMonth();
const btnStyle = { background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 7, width: 24, height: 24, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), color: _0x4f2a("dmFyKC0tdDMp"), fontSize: 12, padding: 0 };
return React.createElement("div", { style: { marginTop: 16, borderTop: "1px solid var(--border)_0x4f2a("LCBwYWRkaW5nVG9wOiAxNiB9IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEwLCBnYXA6IDggfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { style: btnStyle, onClick: prevMonth }, "‹_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")-.2px_0x4f2a("LCBtaW5XaWR0aDogOTAsIHRleHRBbGlnbjog")center_0x4f2a("IH0gfSwgTU5bY2FsTW9udGhdLCA=") _0x4f2a("LCBjYWxZZWFyKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { style: { ...btnStyle, opacity: isCurrentMonth ? 0.35 : 1 }, onClick: isCurrentMonth ? null : nextMonth, disabled: isCurrentMonth }, "›_0x4f2a("KSwKbUNvdW50ID4gMCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiA=")1px 8px_0x4f2a("LCBmb250U2l6ZTogOS41LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiA=")var(--t3)_0x4f2a("LCBtYXJnaW5MZWZ0OiA0IH0gfSwgbUNvdW50LCA=") trades_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IDIsIGdhcDogMiB9IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setShowUSD(false), style: { padding: "2px 9px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIGJvcmRlcjog")none_0x4f2a("LCBiYWNrZ3JvdW5kOiAhc2hvd1VTRCA/IA==")var(--surface)" : _0x4f2a("dHJhbnNwYXJlbnQ="), color: !showUSD ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), fontWeight: !showUSD ? 700 : 500, fontSize: 10.5, cursor: _0x4f2a("cG9pbnRlcg=="), boxShadow: !showUSD ? _0x4f2a("dmFyKC0tc2gxKQ==") : _0x4f2a("bm9uZQ=="), transition: _0x4f2a("YWxsIC4xNXM=") } }, "%_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setShowUSD(true), style: { padding: "2px 9px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIGJvcmRlcjog")none_0x4f2a("LCBiYWNrZ3JvdW5kOiBzaG93VVNEID8g")var(--surface)" : _0x4f2a("dHJhbnNwYXJlbnQ="), color: showUSD ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), fontWeight: showUSD ? 700 : 500, fontSize: 10.5, cursor: _0x4f2a("cG9pbnRlcg=="), boxShadow: showUSD ? _0x4f2a("dmFyKC0tc2gxKQ==") : _0x4f2a("bm9uZQ=="), transition: _0x4f2a("YWxsIC4xNXM=") } }, "$_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { background: mProfit >= 0 ? "var(--accF)" : _0x4f2a("dmFyKC0tczMp"), border: `1px solid ${mProfit >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 8, padding: _0x4f2a("M3B4IDEwcHg=") } },
React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 11, fontWeight: 700, color: mProfit >= 0 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp") } },
showUSD
? (mProfit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKG1Qcm9maXQpLnRvRml4ZWQoMCkKOiAobVBubCA+PSAwID8g")+" : "_0x4f2a("KSArIG1QbmwudG9GaXhlZCgxKSArIA==")%_0x4f2a("CikKKQopCiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(7,1fr) 52px_0x4f2a("LCBnYXA6IDMsIG1hcmdpbkJvdHRvbTogMyB9IH0sCkRPV19NSU5JLm1hcCgoZCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { key: d, style: { textAlign: "center_0x4f2a("LCBmb250U2l6ZTogOC41LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHBhZGRpbmc6IA==")3px 0_0x4f2a("IH0gfSwgZCkpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { textAlign: "center_0x4f2a("LCBmb250U2l6ZTogOC41LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHBhZGRpbmc6IA==")3px 0_0x4f2a("IH0gfSwg")WEEK_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDMgfSB9LAp3ZWVrcy5tYXAoKHdlZWssIHdpKSA9PgpSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: wi, style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(7,1fr) 52px", gap: 3 } },
[...Array(7)].map((_, ci) => {
const d = week[ci];
if (!d) return React.createElement("div", { key: "e" + ci, style: { borderRadius: 7, minHeight: 44 } });
const dateKey = dk(d);
const data = byDate[dateKey];
const p = (data && data.profit) || 0;
const pct = (data && data.pnl) || 0;
const has = !!data;
const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
const bg = !has ? _0x4f2a("dmFyKC0tc3VyZmFjZSk=") : p >= 0
? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykg") + Math.round((0.07 + intensity * 0.22) * 100) + _0x4f2a("JSwgdmFyKC0tc3VyZmFjZSkp")
: _0x4f2a("cmdiYSgxNDgsMTYzLDE4NCw=") + (0.1 + intensity * 0.2) + ")_0x4f2a("Owpjb25zdCBiZHIgPSAhaGFzID8g")var(--border)_0x4f2a("IDogcCA+PSAwID8g")color-mix(in srgb, var(--acc) 30%, transparent)" : _0x4f2a("dmFyKC0tYm9yZGVyMik=");
const isToday = dateKey === todayStr;
const displayVal = has ? (showUSD
? (p >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKHApLnRvRml4ZWQoMCkKOiAocCA+PSAwID8g")+" : "_0x4f2a("KSArIHBjdC50b0ZpeGVkKDEpICsg")%_0x4f2a("CikgOiBudWxsOwpyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", {
key: dateKey,
className: "cal-cell",
style: { background: bg, border: "1.5px solid _0x4f2a("ICsgKGlzVG9kYXkgPyA=")var(--indigo)_0x4f2a("IDogYmRyKSwgYm9yZGVyUmFkaXVzOiA3LCBwYWRkaW5nOiA=")5px 5px 4px_0x4f2a("LCBtaW5IZWlnaHQ6IDQ0LCBjdXJzb3I6IGhhcyA/IA==")pointer" : _0x4f2a("ZGVmYXVsdA=="), transition: _0x4f2a("dHJhbnNmb3JtIC4xMnMsYm94LXNoYWRvdyAuMTJz"), boxShadow: isToday ? _0x4f2a("MCAwIDAgMXB4IHZhcigtLWluZGlnbyk=") : _0x4f2a("bm9uZQ=="), position: _0x4f2a("cmVsYXRpdmU=") },
onClick: has ? (e) => { e.currentTarget.blur(); setDayPopup({ dateKey, data }); } : null, tabIndex: -1,
onMouseEnter: (e) => { if (has) { e.currentTarget.style.transform = _0x4f2a("dHJhbnNsYXRlWSgtMXB4KQ=="); e.currentTarget.style.boxShadow = _0x4f2a("dmFyKC0tc2gyKQ=="); } },
onMouseLeave: (e) => { e.currentTarget.style.transform = "_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gaXNUb2RheSA/IA==")0 0 0 1px var(--indigo)" : _0x4f2a("bm9uZQ=="); }
},
React.createElement("div", { style: { fontSize: 9, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : _0x4f2a("dmFyKC0tdDMp"), marginBottom: 2 } }, d),
has && React.createElement(React.Fragment, null,
React.createElement("div", { style: { fontSize: 9.5, fontWeight: 700, color: p >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), lineHeight: 1.1, letterSpacing: _0x4f2a("LS4zcHg=") } }, displayVal),
React.createElement("div", { style: { fontSize: 8, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDIsIGZvbnRXZWlnaHQ6IDYwMCB9IH0sIGRhdGEuY291bnQsIGRhdGEuY291bnQgPT09IDEgPyA=") trade" : _0x4f2a("IHRyYWRlcw=="))
)
);
}),
React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : _0x4f2a("cmdiYSgxNDgsMTYzLDE4NCwuMTUp") : _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MS41cHggc29saWQg") + (weekStats[wi].count ? weekStats[wi].profit >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyMik=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")), borderRadius: 7, padding: _0x4f2a("NXB4IDRweA=="), minHeight: 44, display: _0x4f2a("ZmxleA=="), flexDirection: _0x4f2a("Y29sdW1u"), justifyContent: _0x4f2a("Y2VudGVy"), alignItems: _0x4f2a("Y2VudGVy"), gap: 2 } },
weekStats[wi].count > 0 && React.createElement(React.Fragment, null,
React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: weekStats[wi].profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), textAlign: _0x4f2a("Y2VudGVy"), letterSpacing: _0x4f2a("LS4ycHg=") } },
showUSD
? (weekStats[wi].profit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKHdlZWtTdGF0c1t3aV0ucHJvZml0KS50b0ZpeGVkKDApCjogKHdlZWtTdGF0c1t3aV0ucG5sID49IDAgPyA=")+" : "_0x4f2a("KSArIHdlZWtTdGF0c1t3aV0ucG5sLnRvRml4ZWQoMSkgKyA=")%_0x4f2a("CiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 7.5, color: "var(--t3)_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("IH0gfSwgd2Vla1N0YXRzW3dpXS5jb3VudCwgd2Vla1N0YXRzW3dpXS5jb3VudCA9PT0gMSA/IA==") trade" : _0x4f2a("IHRyYWRlcw=="))
)
)
)
)
),
dayPopup && React.createElement("div", {
style: { position: "fixed_0x4f2a("LCBpbnNldDogMCwgekluZGV4OiA4MDAwLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")rgba(0,0,0,.6)_0x4f2a("LCBiYWNrZHJvcEZpbHRlcjog")blur(14px)_0x4f2a("LCBXZWJraXRCYWNrZHJvcEZpbHRlcjog")blur(14px)_0x4f2a("IH0sCm9uQ2xpY2s6ICgpID0+IHNldERheVBvcHVwKG51bGwpCn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", {
style: { background: "var(--surface)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE4LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBwYWRkaW5nOiA=")20px 22px_0x4f2a("LCBtaW5XaWR0aDogMzAwLCBtYXhXaWR0aDogNDAwLCB3aWR0aDog")92vw_0x4f2a("LCBib3hTaGFkb3c6IA==")0 30px 80px rgba(0,0,0,.35)_0x4f2a("LCBhbmltYXRpb246IA==")scaleIn .2s ease_0x4f2a("IH0sCm9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpCn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwgbmV3IERhdGUoZGF5UG9wdXAuZGF0ZUtleSArIA==")T12:00:00_0x4f2a("KS50b0xvY2FsZURhdGVTdHJpbmco")en-US", { weekday: "long_0x4f2a("LCBtb250aDog")long_0x4f2a("LCBkYXk6IA==")numeric_0x4f2a("IH0pKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDIgfSB9LCBkYXlQb3B1cC5kYXRhLmNvdW50LCA=") trade_0x4f2a("LCBkYXlQb3B1cC5kYXRhLmNvdW50ICE9PSAxID8g")s" : "_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { textAlign: "right_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 18, fontWeight: 800, color: dayPopup.data.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), letterSpacing: _0x4f2a("LTFweA==") } },
(dayPopup.data.profit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKGRheVBvcHVwLmRhdGEucHJvZml0KS50b0ZpeGVkKDIpCiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: dayPopup.data.pnl >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700 } },
(dayPopup.data.pnl >= 0 ? "+" : "_0x4f2a("KSArIGRheVBvcHVwLmRhdGEucG5sLnRvRml4ZWQoMikgKyA=")%_0x4f2a("CikKKQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDYgfSB9LApkYXlQb3B1cC5kYXRhLnRyYWRlcy5tYXAoKHQsIGkpID0+ClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { key: i, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")8px 12px_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { flex: 1 } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwgdC5zeW1ib2wpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDEgfSB9LCB0LnNpZGUsIA==") · _0x4f2a("LCB0LnNlc3Npb24gfHwg")_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { textAlign: "right_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp") } },
(t.profit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKHQucHJvZml0IHx8IDApLnRvRml4ZWQoMikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: calcPnL(t.profit, capital) >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 600 } },
(calcPnL(t.profit, capital) >= 0 ? "+" : "_0x4f2a("KSArIGNhbGNQbkwodC5wcm9maXQsIGNhcGl0YWwpLnRvRml4ZWQoMikgKyA=")%_0x4f2a("CikKKQopCikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setDayPopup(null), style: { marginTop: 14, width: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")8px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IA==")var(--t2)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("IH0gfSwg")Close")
)
)
);
}
function FloatingCalc({ capital, open, setOpen }) {
const E = React.createElement;
const defaultCap = (capital && capital > 0) ? capital : 5000;
const [accountSize, setAccountSize] = React.useState(String(defaultCap));
const [editingCap, setEditingCap] = React.useState(false);
const [slMode, setSlMode] = React.useState(_0x4f2a("cGlwcw=="));
const [riskMode, setRiskMode] = React.useState("pct_0x4f2a("KTsKY29uc3QgW3Jpc2tQY3QsIHNldFJpc2tQY3RdID0gUmVhY3QudXNlU3RhdGUo")1_0x4f2a("KTsKY29uc3QgW3Jpc2tBbXQsIHNldFJpc2tBbXRdID0gUmVhY3QudXNlU3RhdGUo")_0x4f2a("KTsKY29uc3QgW3NsUGlwcywgc2V0U2xQaXBzXSA9IFJlYWN0LnVzZVN0YXRlKA==")_0x4f2a("KTsKY29uc3QgW2VudHJ5UHJpY2UsIHNldEVudHJ5UHJpY2VdID0gUmVhY3QudXNlU3RhdGUo")_0x4f2a("KTsKY29uc3QgW3NsUHJpY2UsIHNldFNsUHJpY2VdID0gUmVhY3QudXNlU3RhdGUo")_0x4f2a("KTsKY29uc3QgW3BpcFZhbHVlTW9kZSwgc2V0UGlwVmFsdWVNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKA==")100_0x4f2a("KTsKY29uc3QgW3BpcFZhbHVlLCBzZXRQaXBWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSg=")100");
React.useEffect(() => {
if (capital && capital > 0) setAccountSize(String(capital));
}, [capital]);
const PIP_PRESETS = [
{label:_0x4f2a("R29sZCBYQVVVU0Q="),            val:"100",  pipSize:0.1},
{label:"Forex Majors (EUR/USD)_0x4f2a("LCB2YWw6")10",   pipSize:0.0001},
{label:"GBP/USD, AUD/USD_0x4f2a("LCAgICAgICB2YWw6")10",   pipSize:0.0001},
{label:"JPY Pairs (USD/JPY)_0x4f2a("LCAgICB2YWw6")1000", pipSize:0.01},
{label:"US30 / NAS100_0x4f2a("LCAgICAgICAgICB2YWw6")1",    pipSize:1},
{label:"Crypto (BTC/USD)_0x4f2a("LCAgICAgICB2YWw6")0.1",  pipSize:1},
{label:"Custom_0x4f2a("LCAgICAgICAgICAgICAgICAgdmFsOg==")custom",pipSize:null},
];
const selectedPreset = PIP_PRESETS.find(p=>p.val===pipValueMode);
const pipSizeForCalc = selectedPreset?.pipSize || 0.0001;
const cap = parseFloat(accountSize) || 5000;
const riskDollars = riskMode === "pct"
? (parseFloat(riskPct)||0) / 100 * cap
: (parseFloat(riskAmt)||0);
let slPipsCalc = 0;
if (slMode === _0x4f2a("cGlwcw==")) {
slPipsCalc = parseFloat(slPips) || 0;
} else {
const ep = parseFloat(entryPrice) || 0;
const sp = parseFloat(slPrice) || 0;
if (ep && sp) {
const priceDiff = Math.abs(ep - sp);
slPipsCalc = priceDiff / pipSizeForCalc;
}
}
const pipVal = pipValueMode === _0x4f2a("Y3VzdG9t") ? (parseFloat(pipValue) || 10) : parseFloat(pipValueMode) || 10;
const lotSize = slPipsCalc > 0 && pipVal > 0 ? riskDollars / (slPipsCalc * pipVal) : 0;
const miniLots = lotSize * 10;
const [pos, setPos] = React.useState(null);
const dragRef = React.useRef(null);
const dragging = React.useRef(false);
const dragOffset = React.useRef({x:0,y:0});
const [calcVisible, setCalcVisible] = React.useState(false);
React.useEffect(() => {
if (open) {
requestAnimationFrame(() => requestAnimationFrame(() => setCalcVisible(true)));
} else {
setCalcVisible(false);
}
}, [open]);
const startDrag = React.useCallback((e) => {
if (e.button !== 0) return;
dragging.current = true;
const el = dragRef.current;
const rect = el ? el.getBoundingClientRect() : {left:0,top:0};
dragOffset.current = {x: e.clientX - rect.left, y: e.clientY - rect.top};
const onMove = (ev) => {
if (!dragging.current) return;
setPos({x: ev.clientX - dragOffset.current.x, y: ev.clientY - dragOffset.current.y});
};
const onUp = () => { dragging.current = false; window.removeEventListener(_0x4f2a("bW91c2Vtb3Zl"), onMove); window.removeEventListener(_0x4f2a("bW91c2V1cA=="), onUp); };
window.addEventListener(_0x4f2a("bW91c2Vtb3Zl"), onMove);
window.addEventListener(_0x4f2a("bW91c2V1cA=="), onUp);
e.preventDefault();
}, []);
const inp = {border:_0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyMik="),borderRadius:8,padding:_0x4f2a("OHB4IDEwcHg="),fontSize:12,
outline:_0x4f2a("bm9uZQ=="),background:_0x4f2a("dmFyKC0tczIp"),color:_0x4f2a("dmFyKC0tdGV4dCk="),fontFamily:_0x4f2a("aW5oZXJpdA=="),
width:_0x4f2a("MTAwJQ=="),boxSizing:_0x4f2a("Ym9yZGVyLWJveA=="),transition:_0x4f2a("Ym9yZGVyLWNvbG9yIC4xNXM=")};
const segBtn = (active,onClick,txt) => E(_0x4f2a("YnV0dG9u"),{onClick,style:{
flex:1,padding:_0x4f2a("NXB4IDA="),borderRadius:6,border:_0x4f2a("bm9uZQ=="),fontSize:11,fontWeight:active?700:500,
background:active?_0x4f2a("dmFyKC0tc3VyZmFjZSk="):_0x4f2a("dHJhbnNwYXJlbnQ="),color:active?_0x4f2a("dmFyKC0tYWNjRCk="):_0x4f2a("dmFyKC0tdDMp"),
boxShadow:active?_0x4f2a("dmFyKC0tc2gxKQ=="):_0x4f2a("bm9uZQ=="),cursor:_0x4f2a("cG9pbnRlcg=="),transition:_0x4f2a("YWxsIC4xMnM=")}}, txt);
if (!open) return null;
const basePopup = {
width:360, maxWidth:_0x4f2a("Y2FsYygxMDB2dyAtIDI0cHgp"),
background:_0x4f2a("dmFyKC0tc3VyZmFjZSk="), border:_0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyMik="),
borderRadius:18, boxShadow:_0x4f2a("MCAyMHB4IDYwcHggcmdiYSgwLDAsMCwuMjgpLDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTQp"),
maxHeight:_0x4f2a("Y2FsYygxMDB2aCAtIDYwcHgp"), overflowY:_0x4f2a("YXV0bw=="),
opacity: calcVisible ? 1 : 0,
transition: _0x4f2a("b3BhY2l0eSAuMThzIGVhc2UsIHRyYW5zZm9ybSAuMThzIGN1YmljLWJlemllciguMjIsMSwuMzYsMSk="),
};
const popupStyle = pos
? { ...basePopup, position:_0x4f2a("Zml4ZWQ="), left:pos.x, top:pos.y, zIndex:9100,
transform: calcVisible ? _0x4f2a("c2NhbGUoMSk=") : _0x4f2a("c2NhbGUoMC45NCk=") }
: { ...basePopup, position:_0x4f2a("Zml4ZWQ="), top:"50%_0x4f2a("LCBsZWZ0Og==")50%_0x4f2a("LCB6SW5kZXg6OTEwMCwKdHJhbnNmb3JtOiBjYWxjVmlzaWJsZSA/IA==")translate(-50%,-50%) scale(1)" : _0x4f2a("dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMC45NCk=") };
return E("div_0x4f2a("LCBudWxsLApFKA==")div", {
onClick:()=>{ setOpen(false); setPos(null); },
style:{position:"fixed_0x4f2a("LGluc2V0OjAsekluZGV4OjkwOTAsYmFja2dyb3VuZDo=")rgba(0,0,0,.25)_0x4f2a("LGJhY2tkcm9wRmlsdGVyOg==")blur(3px)_0x4f2a("fQp9KSwKRSg=")div", { ref:dragRef, style:popupStyle },
E("div",{
onMouseDown:startDrag,
style:{padding:"14px 16px 10px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDoxMCwKY3Vyc29yOg==")grab_0x4f2a("LHVzZXJTZWxlY3Q6")none_0x4f2a("LGJvcmRlclJhZGl1czo=")18px 18px 0 0_0x4f2a("fQp9LApFKA==")span",{style:{fontSize:18}},"🧮_0x4f2a("KSwKRSg=")div",{style:{flex:1}},
E("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)_0x4f2a("LGxldHRlclNwYWNpbmc6")-.02em_0x4f2a("fX0sIA==")Lot Size Calculator_0x4f2a("KSwKRSg=")div",{style:{fontSize:10,color:"var(--t3)_0x4f2a("fX0sIA==")Drag to move · Know your size before you enter_0x4f2a("KQopLApFKA==")button",{onClick:()=>{ setOpen(false); setPos(null); },
style:{background:"none_0x4f2a("LGJvcmRlcjo=")none_0x4f2a("LGNvbG9yOg==")var(--t3)_0x4f2a("LGN1cnNvcjo=")pointer_0x4f2a("LGZvbnRTaXplOjE4LHBhZGRpbmc6")2px 4px_0x4f2a("LGxpbmVIZWlnaHQ6MX19LCA=")×_0x4f2a("KQopLApFKA==")div",{style:{padding:"12px 14px_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGZsZXhEaXJlY3Rpb246")column_0x4f2a("LGdhcDoxMH19LApFKA==")div",{style:{background:"var(--s2)_0x4f2a("LGJvcmRlclJhZGl1czoxMCxwYWRkaW5nOg==")8px 12px_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo4fX0sCkUo")div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGxldHRlclNwYWNpbmc6")0.05em_0x4f2a("LGZsZXg6MX19LCA=")Account_0x4f2a("KSwKZWRpdGluZ0NhcAo/IEUo")input",{type:"number",value:accountSize,autoFocus:true,
onChange:e=>setAccountSize(e.target.value),
onBlur:()=>setEditingCap(false),
onKeyDown:e=>{if(e.key===_0x4f2a("RW50ZXI=")||e.key===_0x4f2a("RXNjYXBl"))setEditingCap(false);},
style:{...inp,width:110,textAlign:_0x4f2a("cmlnaHQ="),padding:_0x4f2a("NHB4IDhweA=="),fontSize:13,fontWeight:700}})
: E("div",{style:{display:"flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo2fSxvbkNsaWNrOigpPT5zZXRFZGl0aW5nQ2FwKHRydWUpfSwKRSg=")div",{style:{fontSize:13,fontWeight:800,color:"var(--text)_0x4f2a("LGN1cnNvcjo=")pointer_0x4f2a("fX0sIA==")$_0x4f2a("K3BhcnNlRmxvYXQoYWNjb3VudFNpemV8fDUwMDApLnRvTG9jYWxlU3RyaW5nKCkpLApFKA==")span",{style:{fontSize:10,color:"var(--acc)_0x4f2a("LGN1cnNvcjo=")pointer_0x4f2a("LGZvbnRXZWlnaHQ6NzAwfX0sIA==")✏️_0x4f2a("KQopCiksCkUo")div_0x4f2a("LG51bGwsCkUo")div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGxldHRlclNwYWNpbmc6")0.05em_0x4f2a("LG1hcmdpbkJvdHRvbTo1fX0sIA==")Instrument_0x4f2a("KSwKRSg=")select",{value:pipValueMode,onChange:e=>{
setPipValueMode(e.target.value);
if(e.target.value!==_0x4f2a("Y3VzdG9t")) setPipValue(e.target.value);
},style:{...inp,cursor:_0x4f2a("cG9pbnRlcg==")}},
PIP_PRESETS.map(p=>E(_0x4f2a("b3B0aW9u"),{key:p.val,value:p.val},p.label))
),
pipValueMode===_0x4f2a("Y3VzdG9t") && E(_0x4f2a("aW5wdXQ="),{type:_0x4f2a("bnVtYmVy"),step:_0x4f2a("MC4wMQ=="),placeholder:"$ per pip per std lot",
value:pipValue===_0x4f2a("Y3VzdG9t")?"":pipValue,onChange:e=>setPipValue(e.target.value),
style:{...inp,marginTop:5}})
),
E("div_0x4f2a("LG51bGwsCkUo")div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGxldHRlclNwYWNpbmc6")0.05em_0x4f2a("LG1hcmdpbkJvdHRvbTo1fX0sIA==")Risk_0x4f2a("KSwKRSg=")div",{style:{display:"flex_0x4f2a("LGJhY2tncm91bmQ6")var(--s3)_0x4f2a("LGJvcmRlclJhZGl1czo4LHBhZGRpbmc6MixnYXA6MixtYXJnaW5Cb3R0b206Nn19LApzZWdCdG4ocmlza01vZGU9PT0=")pct_0x4f2a("LCgpPT5zZXRSaXNrTW9kZSg=")pct"),_0x4f2a("JSBBY2NvdW50")),
segBtn(riskMode===_0x4f2a("Zml4ZWQ="),()=>setRiskMode(_0x4f2a("Zml4ZWQ=")),"Fixed $")
),
riskMode==="pct_0x4f2a("Cj8gRSg=")div",{style:{display:"flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo2fX0sCkUo")input",{type:"number_0x4f2a("LHN0ZXA6")0.1_0x4f2a("LG1pbjo=")0.1_0x4f2a("LG1heDo=")10_0x4f2a("LHBsYWNlaG9sZGVyOg==")1",
value:riskPct,onChange:e=>setRiskPct(e.target.value),style:{...inp,flex:1}}),
E("div",{style:{fontSize:11,color:"var(--t3)_0x4f2a("LHdoaXRlU3BhY2U6")nowrap_0x4f2a("fX0sCnJpc2tQY3QgPyA=")= $_0x4f2a("KyhwYXJzZUZsb2F0KHJpc2tQY3QpLzEwMCpjYXApLnRvRml4ZWQoMCkgOiA=")_0x4f2a("KQopCjogRSg=")input",{type:"number_0x4f2a("LHN0ZXA6")1_0x4f2a("LHBsYWNlaG9sZGVyOg==")e.g. 50_0x4f2a("LAp2YWx1ZTpyaXNrQW10LG9uQ2hhbmdlOmU9PnNldFJpc2tBbXQoZS50YXJnZXQudmFsdWUpLHN0eWxlOmlucH0pCiksCkUo")div_0x4f2a("LG51bGwsCkUo")div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGxldHRlclNwYWNpbmc6")0.05em_0x4f2a("LG1hcmdpbkJvdHRvbTo1fX0sIA==")Stop Loss_0x4f2a("KSwKRSg=")div",{style:{display:"flex_0x4f2a("LGJhY2tncm91bmQ6")var(--s3)_0x4f2a("LGJvcmRlclJhZGl1czo4LHBhZGRpbmc6MixnYXA6MixtYXJnaW5Cb3R0b206Nn19LApzZWdCdG4oc2xNb2RlPT09")pips_0x4f2a("LCgpPT5zZXRTbE1vZGUo")pips"),_0x4f2a("UGlwcw==")),
segBtn(slMode===_0x4f2a("cHJpY2U="),()=>setSlMode(_0x4f2a("cHJpY2U=")),_0x4f2a("UHJpY2U="))
),
slMode===_0x4f2a("cGlwcw==")
? E(_0x4f2a("aW5wdXQ="),{type:_0x4f2a("bnVtYmVy"),step:"1_0x4f2a("LG1pbjo=")1_0x4f2a("LHBsYWNlaG9sZGVyOg==")e.g. 240_0x4f2a("LAp2YWx1ZTpzbFBpcHMsb25DaGFuZ2U6ZT0+c2V0U2xQaXBzKGUudGFyZ2V0LnZhbHVlKSxzdHlsZTppbnB9KQo6IEUo")div",{style:{display:"flex_0x4f2a("LGZsZXhEaXJlY3Rpb246")column_0x4f2a("LGdhcDo1fX0sCkUo")input",{type:"number_0x4f2a("LHN0ZXA6")0.00001_0x4f2a("LHBsYWNlaG9sZGVyOg==")Entry price_0x4f2a("LAp2YWx1ZTplbnRyeVByaWNlLG9uQ2hhbmdlOmU9PnNldEVudHJ5UHJpY2UoZS50YXJnZXQudmFsdWUpLHN0eWxlOmlucH0pLApFKA==")input",{type:"number_0x4f2a("LHN0ZXA6")0.00001_0x4f2a("LHBsYWNlaG9sZGVyOg==")SL price",
value:slPrice,onChange:e=>setSlPrice(e.target.value),style:inp}),
entryPrice&&slPrice&&E("div",{style:{fontSize:10,color:"var(--t3)_0x4f2a("fX0sCg==")= "+(Math.abs((parseFloat(entryPrice)||0)-(parseFloat(slPrice)||0))/pipSizeForCalc).toFixed(1)+_0x4f2a("IHBpcHMgICg="),
selectedPreset?.label||_0x4f2a("aW5zdHJ1bWVudA=="),")_0x4f2a("KQopCiksCmxvdFNpemUgPiAwCj8gRSg=")div",{style:{background:"linear-gradient(135deg,var(--accF),var(--s2))_0x4f2a("LApib3JkZXI6")1.5px solid color-mix(in srgb,var(--acc) 35%,transparent)_0x4f2a("LApib3JkZXJSYWRpdXM6MTIscGFkZGluZzo=")12px 14px_0x4f2a("fX0sCkUo")div",{style:{display:"flex_0x4f2a("LGp1c3RpZnlDb250ZW50Og==")space-between_0x4f2a("LGFsaWduSXRlbXM6")baseline_0x4f2a("LG1hcmdpbkJvdHRvbTo4fX0sCkUo")div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGxldHRlclNwYWNpbmc6")0.05em_0x4f2a("fX0sIA==")Mini Lots_0x4f2a("KSwKRSg=")div",{style:{fontSize:32,fontWeight:800,color:"var(--accD)_0x4f2a("LGxldHRlclNwYWNpbmc6")-2px_0x4f2a("LGxpbmVIZWlnaHQ6MX19LAptaW5pTG90cy50b0ZpeGVkKDIpCikKKSwKRSg=")div",{style:{display:"grid_0x4f2a("LGdyaWRUZW1wbGF0ZUNvbHVtbnM6")1fr 1fr_0x4f2a("LGdhcDo0fX0sClsKWw==")Std Lots_0x4f2a("LCBsb3RTaXplPj0wLjAxP2xvdFNpemUudG9GaXhlZCgyKTpsb3RTaXplLnRvRml4ZWQoNCldLApb")Risk $", "$_0x4f2a("K3Jpc2tEb2xsYXJzLnRvRml4ZWQoMildLApb")SL Pips_0x4f2a("LCBzbFBpcHNDYWxjLnRvRml4ZWQoMSldLApb")Pip Value", "$_0x4f2a("K3BpcFZhbCs=")/pip_0x4f2a("XQpdLm1hcCgoW2wsdl0pPT5FKA==")div",{key:l,style:{display:"flex_0x4f2a("LGp1c3RpZnlDb250ZW50Og==")space-between_0x4f2a("LApmb250U2l6ZToxMC41LGJvcmRlclRvcDo=")1px solid var(--border)_0x4f2a("LHBhZGRpbmdUb3A6M319LApFKA==")span",{style:{color:"var(--t3)_0x4f2a("fX0sbCksCkUo")span",{style:{fontWeight:700,color:"var(--text)_0x4f2a("fX0sdikKKSkKKQopCjogRSg=")div",{style:{textAlign:"center_0x4f2a("LHBhZGRpbmc6")10px 0_0x4f2a("LGNvbG9yOg==")var(--t3)_0x4f2a("LGZvbnRTaXplOjExLGxpbmVIZWlnaHQ6MS41fX0sCg==")Fill in the fields to calculate lot size_0x4f2a("CiksCkUo")div",{style:{fontSize:9.5,color:"var(--t3)_0x4f2a("LGxpbmVIZWlnaHQ6MS41LHBhZGRpbmdUb3A6NCxib3JkZXJUb3A6")1px solid var(--border)_0x4f2a("fX0sCg==")⚠️ Always verify with your broker. Size down during drawdown."
)
)
)
);
}
const Overview = memo(function Overview2({ trades, allTrades, uiBlocks = {}, capital: propCapital }) {
const capital = propCapital && propCapital > 0 ? propCapital : 5000;
const wins = trades.filter((t) => t.profit > 0), losses = trades.filter((t) => t.profit <= 0), total = trades.length;
const wr = total ? wins.length / total * 100 : 0;
const grossUSD = trades.reduce((s, t) => s + (t.profit || 0), 0);
const grossPct = calcPnL(grossUSD, capital);
const avgW = wins.length ? wins.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / wins.length : 0;
const avgL = losses.length ? Math.abs(losses.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / losses.length) : 0;
const wlR = avgL ? (avgW / avgL).toFixed(2) : "\u2014";
const byMonth = {};
trades.forEach((t) => {
const m = t.entryDate.slice(0, 7);
if (!byMonth[m]) byMonth[m] = { pnl: 0, profit: 0, cnt: 0 };
byMonth[m].profit += t.profit || 0;
byMonth[m].pnl = calcPnL(byMonth[m].profit, capital);
byMonth[m].cnt++;
});
const months = Object.entries(byMonth).sort();
const now =  new Date();
const last30 = Array.from({ length: 30 }, (_, i) => {
const d = new Date(now);
d.setDate(d.getDate() - (29 - i));
return d.toISOString().slice(0, 10);
});
const byDay = {};
trades.forEach((t) => {
if (!byDay[t.entryDate]) byDay[t.entryDate] = { pnl: 0, profit: 0 };
byDay[t.entryDate].profit += t.profit || 0;
byDay[t.entryDate].pnl = calcPnL(byDay[t.entryDate].profit, capital);
});
const dayBars = last30.map((d) => __spreadValues({ d }, byDay[d] || { pnl: 0, profit: 0 }));
const maxDay = Math.max(...dayBars.map((b) => Math.abs(b.profit)), 0.1);
let cum = 0, peak = 0, maxDD = 0;
[...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
cum += calcPnL(t.profit, capital);
if (cum > peak) peak = cum;
const dd = cum - peak;
if (dd < maxDD) maxDD = dd;
});
const pnlPts = [];
let runPnl = 0;
[...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
runPnl += calcPnL(t.profit, capital);
pnlPts.push(runPnl);
});
if (!total) return  React.createElement("div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")100px 20px_0x4f2a("IH0sIGNsYXNzTmFtZTog")fade-up_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 88, height: 88, borderRadius: 22, background: "linear-gradient(135deg,var(--accF),var(--s3))_0x4f2a("LCBib3JkZXI6IA==")2px dashed color-mix(in srgb, var(--acc) 40%, transparent)_0x4f2a("LCBtYXJnaW46IA==")0 auto 20px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogNDAgfSB9LCA=")\u{1F4CA}_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-.5px_0x4f2a("IH0gfSwg")No trades yet_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 14, color: "var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjgsIG1heFdpZHRoOiAzODAsIG1hcmdpbjog")0 auto_0x4f2a("IH0gfSwg")Add an account and log your first trade to start tracking performance. Press _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")kbd", { style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDUsIHBhZGRpbmc6IA==")1px 6px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IA==")monospace_0x4f2a("IH0gfSwg")N"), _0x4f2a("IGFueXdoZXJlIHRvIG9wZW4gdGhlIHRyYWRlIGZvcm0u")));
const gradeMap = {};
trades.forEach((t) => {
const g = t.grade || "B";
if (!gradeMap[g]) gradeMap[g] = { n: 0, w: 0 };
gradeMap[g].n++;
if (t.profit > 0) gradeMap[g].w++;
});
const topGrade = Object.entries(gradeMap).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
const expectedRR = trades.filter((t) => t.expectedRR && t.expectedRR !== _0x4f2a("Q3VzdG9t")).map((t) => {
var _a;
return parseFloat(((_a = t.expectedRR) == null ? void 0 : _a.split(":")[1]) || 1);
});
const avgExpRR = expectedRR.length ? expectedRR.reduce((s, v) => s + v, 0) / expectedRR.length : 0;
const actualRR_pos = trades.filter((t) => t.profit > 0 && t.actualRR && !t.actualRR.startsWith("-")).map((t) => {
var _a;
return parseFloat(((_a = t.actualRR) == null ? void 0 : _a.split(":")[1]) || 0);
});
const avgActRR = actualRR_pos.length ? actualRR_pos.reduce((s, v) => s + v, 0) / actualRR_pos.length : 0;
const last7Days = Array.from({ length: 7 }, (_, i) => {
const d = new Date(now);
d.setDate(d.getDate() - (6 - i));
return d.toISOString().slice(0, 10);
});
const dayPnlMap = {};
trades.forEach((t) => {
if (!dayPnlMap[t.entryDate]) dayPnlMap[t.entryDate] = { pnl: 0, wins: 0, n: 0, profit: 0 };
dayPnlMap[t.entryDate].profit += t.profit || 0;
dayPnlMap[t.entryDate].pnl = calcPnL(dayPnlMap[t.entryDate].profit, capital);
dayPnlMap[t.entryDate].n++;
if (t.profit > 0) dayPnlMap[t.entryDate].wins++;
});
function MiniSparkline({ values, color, height = 28 }) {
if (!values || values.length < 2) return null;
const mn = Math.min(...values), mx = Math.max(...values), rng = mx - mn || 1;
const W = 60, H = height, pts = values.map((v, i) => `${i / (values.length - 1) * W},${H - ((v - mn) / rng * (H - 4) + 2)}`).join(" _0x4f2a("KTsKcmV0dXJuICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")svg", { width: W, height: H, style: { display: "block_0x4f2a("LCBmbGV4U2hyaW5rOiAwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")polyline", { points: pts, fill: "none_0x4f2a("LCBzdHJva2U6IGNvbG9yLCBzdHJva2VXaWR0aDog")1.5_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round" }));
}
const sparkWR = last7Days.map((d) => dayPnlMap[d] ? dayPnlMap[d].wins / dayPnlMap[d].n * 100 : null).filter((v) => v !== null);
const sparkPnl = last7Days.map((d) => {
var _a;
return calcPnL(((_a = dayPnlMap[d]) == null ? void 0 : _a.profit) || 0, capital);
});
const sparkProfit = last7Days.map((d) => {
var _a;
return ((_a = dayPnlMap[d]) == null ? void 0 : _a.profit) || 0;
});
const sparkDD = [];
let rd = 0, rp = 0;
[...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
rd += calcPnL(t.profit, capital);
if (rd > rp) rp = rd;
sparkDD.push(rd - rp);
});
const profitFactor = calcProfitFactor(trades);
const pf = profitFactor === Infinity ? "\u221E" : profitFactor.toFixed(2);
const hourlyStats = calcHourlyStats(trades);
const bestHour = hourlyStats.sort((a, b) => b.profit - a.profit)[0];
const weeklySummary = genWeeklySummary(trades, capital);
return  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDE2IH0sIGNsYXNzTmFtZTog")fade-up_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "g4", style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(4,1fr)", gap: 14 } }, [
{ label: "Total Trades", val: total, sub: `${wins.length}W \xB7 ${losses.length}L`, subCol: _0x4f2a("dmFyKC0tdDMp"), accent: _0x4f2a("dmFyKC0tYmx1ZSk="), spark: last7Days.map((d) => {
var _a;
return ((_a = dayPnlMap[d]) == null ? void 0 : _a.n) || 0;
}), sparkCol: _0x4f2a("IzNiODJmNg==") },
{ label: _0x4f2a("V2luIFJhdGU="), val: wr.toFixed(1) + "%_0x4f2a("LCBzdWI6IHdyID49IDUwID8g")Above average" : _0x4f2a("QmVsb3cgYXZlcmFnZQ=="), subCol: wr >= 50 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), accent: wr >= 50 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDIp"), spark: sparkWR, sparkCol: wr >= 50 ? _0x4f2a("IzE2YTM0YQ==") : _0x4f2a("IzljYTNhZg==") },
{ label: _0x4f2a("TmV0IFAmTA=="), val: grossUSD !== 0 ? fmtUSD(grossUSD, false).replace(/^\+/, "") : fmtPct(grossPct), sub: grossUSD !== 0 ? `${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%` : "_0x4f2a("LCBzdWJDb2w6IGdyb3NzUGN0ID49IDAgPyA=")var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), accent: grossPct >= 0 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tcmVkKQ=="), spark: sparkPnl, sparkCol: grossPct >= 0 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("I2VmNDQ0NA==") },
{ label: _0x4f2a("V2luL0xvc3MgUmF0aW8="), val: wlR, sub: parseFloat(wlR) >= 1.5 ? _0x4f2a("RXhjZWxsZW50") : _0x4f2a("TmVlZHMgaW1wcm92ZW1lbnQ="), subCol: parseFloat(wlR) >= 1 ? _0x4f2a("dmFyKC0tZ3JlZW4p") : _0x4f2a("dmFyKC0tdDMp"), accent: _0x4f2a("dmFyKC0tZ3JlZW4p"), spark: [], sparkCol: _0x4f2a("IzE2YTM0YQ==") }
].map((kpi, i) =>  React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${kpi.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms`, position: _0x4f2a("cmVsYXRpdmU="), overflow: _0x4f2a("aGlkZGVu") } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjMsIG1hcmdpbkJvdHRvbTogMTAsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwga3BpLmxhYmVsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { width: 5, height: 5, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiBrcGkuYWNjZW50LCBvcGFjaXR5OiAwLjcgfSB9KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")flex-end_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 30, fontWeight: 800, letterSpacing: "-1.5px_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLCBjb2xvcjog")var(--text)_0x4f2a("LCBmb250RmFtaWx5OiA=")'Inter',sans-serif_0x4f2a("IH0gfSwga3BpLnZhbCksIGtwaS5zdWIgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, marginTop: 6, color: kpi.subCol, fontWeight: 500 } }, kpi.sub)), kpi.spark && kpi.spark.length > 1 &&  React.createElement(MiniSparkline, { values: kpi.spark, color: kpi.sparkCol }))))), uiBlocks.equityCurve !== false &&  React.createElement("div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.08em_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("IH0gfSwg")Cumulative P&L_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px_0x4f2a("LCBjb2xvcjogZ3Jvc3NQY3QgPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), fontFamily: _0x4f2a("J0ludGVyJyxzYW5zLXNlcmlm") } }, fmtPct(grossPct), grossUSD !== 0 &&  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 15, marginLeft: 10, fontWeight: 600, opacity: 0.65 } }, fmtUSD(grossUSD)))),  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDE2LCBmb250U2l6ZTogMTEgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { textAlign: "center_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontWeight: 500, color: "var(--accD)_0x4f2a("LCBmb250U2l6ZTogMTYgfSB9LCB3aW5zLmxlbmd0aCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNSB9IH0sIA==")WINS_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 1, background: "var(--border)_0x4f2a("IH0gfSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { textAlign: "center_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontWeight: 500, color: "var(--t2)_0x4f2a("LCBmb250U2l6ZTogMTYgfSB9LCBsb3NzZXMubGVuZ3RoKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuNSB9IH0sIA==")LOSSES")))),  React.createElement(ProfitCurve, { trades, height: 150, capital }),  React.createElement("div", { style: { border: "1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")12px_0x4f2a("LCBtYXJnaW5Ub3A6IDIwLCBiYWNrZ3JvdW5kOiA=")var(--s2)" } }, React.createElement(MiniCalendarWidget, { trades: allTrades || trades, ic: capital, capital })), weeklySummary ?  React.createElement("div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDEwLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")This Week \xB7 _0x4f2a("LCB3ZWVrbHlTdW1tYXJ5LmZyb20sIA==") \u2192 _0x4f2a("LCB3ZWVrbHlTdW1tYXJ5LnRvKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr 1fr", gap: 8, marginBottom: 10 } }, [
{ l: "Trades_0x4f2a("LCB2OiB3ZWVrbHlTdW1tYXJ5LnRvdGFsLCBjOiA=")var(--text)" },
{ l: "Win Rate", v: `${weeklySummary.wr}%`, c: +weeklySummary.wr >= 50 ? "var(--green)" : _0x4f2a("dmFyKC0tdDIp") },
{ l: _0x4f2a("TmV0IFAmTA=="), v: `${weeklySummary.pnl >= 0 ? "+" : ""}${weeklySummary.pnl}%`, c: +weeklySummary.pnl >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") }
].map((x) =>  React.createElement("div", { key: x.l, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuMDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCB4LmwpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 18, fontWeight: 700, color: x.c, letterSpacing: "-1px_0x4f2a("IH0gfSwgeC52KSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDUsIGZvbnRTaXplOiAxMSwgY29sb3I6IA==")var(--t2)_0x4f2a("IH0gfSwgd2Vla2x5U3VtbWFyeS50b3BNb2RlbCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwg")Best model:_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontWeight: 600 } }, weeklySummary.topModel)), weeklySummary.topMistake &&  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwg")Top mistake:_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontWeight: 600, color: "var(--red)_0x4f2a("IH0gfSwgd2Vla2x5U3VtbWFyeS50b3BNaXN0YWtlKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwg")Discipline:_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontWeight: 600, color: weeklySummary.disciplined >= 80 ? "var(--green)_0x4f2a("IDogd2Vla2x5U3VtbWFyeS5kaXNjaXBsaW5lZCA+PSA2MCA/IA==")var(--acc)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, weeklySummary.disciplined, "%_0x4f2a("KSkpKSA6ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "card", style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBnYXA6IDgsIG1pbkhlaWdodDogMTQwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 28 } }, "\u{1F4C5}_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 13, fontWeight: 600, color: "var(--t2)_0x4f2a("IH0gfSwg")No trades this week yet_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("IH0gfSwg")Your weekly summary will appear here_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "g2", style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDE0IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.08em_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Performance Breakdown_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 20 } }, (() => {
const r = 60, cx = 75, cy = 75, stroke = 12;
const circ = 2 * Math.PI * r;
const wrFrac = wr / 100;
return  React.createElement("svg", { width: "150_0x4f2a("LCBoZWlnaHQ6IA==")150", style: { flexShrink: 0 } },  React.createElement("circle", { cx, cy, r, fill: "none_0x4f2a("LCBzdHJva2U6IA==")var(--s3)_0x4f2a("LCBzdHJva2VXaWR0aDogc3Ryb2tlIH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCgK")circle",
{
cx,
cy,
r,
fill: "none_0x4f2a("LApzdHJva2U6IA==")var(--green)",
strokeWidth: stroke,
strokeDasharray: `${circ * wrFrac} ${circ * (1 - wrFrac)}`,
strokeDashoffset: circ * 0.25,
strokeLinecap: _0x4f2a("cm91bmQ="),
style: { transition: _0x4f2a("c3Ryb2tlLWRhc2hhcnJheSAuOHMgY3ViaWMtYmV6aWVyKC4yMiwxLC4zNiwxKQ==") }
}
),  React.createElement(_0x4f2a("Y2lyY2xl"), { cx, cy, r: r - stroke - 4, fill: _0x4f2a("bm9uZQ=="), stroke: _0x4f2a("dmFyKC0tYm9yZGVyKQ=="), strokeWidth: 1 }),  React.createElement(_0x4f2a("dGV4dA=="), { x: cx, y: cy - 6, textAnchor: _0x4f2a("bWlkZGxl"), fontSize: "22_0x4f2a("LCBmb250V2VpZ2h0OiA=")900_0x4f2a("LCBmaWxsOiA=")var(--text)_0x4f2a("LCBmb250RmFtaWx5OiA=")Inter,sans-serif_0x4f2a("IH0sIHdyLnRvRml4ZWQoMCksIA==")%_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")text", { x: cx, y: cy + 12, textAnchor: "middle_0x4f2a("LCBmb250U2l6ZTog")9.5_0x4f2a("LCBmb250V2VpZ2h0OiA=")700_0x4f2a("LCBmaWxsOiA=")var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")1_0x4f2a("LCBmb250RmFtaWx5OiA=")Inter,sans-serif_0x4f2a("IH0sIA==")WIN RATE_0x4f2a("KSk7Cn0pKCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { flex: 1, display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 10 } }, [
{ label: "Winning Trades_0x4f2a("LCB2YWw6IHdpbnMubGVuZ3RoLCBwY3Q6IHdyLnRvRml4ZWQoMCkgKyA=")%_0x4f2a("LCBjb2w6IA==")var(--green)" },
{ label: "Losing Trades_0x4f2a("LCB2YWw6IGxvc3Nlcy5sZW5ndGgsIHBjdDogKGxvc3Nlcy5sZW5ndGggLyB0b3RhbCAqIDEwMCkudG9GaXhlZCgwKSArIA==")%_0x4f2a("LCBjb2w6IA==")var(--t3)" },
{ label: "Avg Win", val: fmtPct(wins.length ? wins.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / wins.length : 0, 2), col: _0x4f2a("dmFyKC0tZ3JlZW4p") },
{ label: _0x4f2a("QXZnIExvc3M="), val: fmtPct(losses.length ? losses.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / losses.length : 0, 2), col: _0x4f2a("dmFyKC0tcmVkKQ==") }
].map((r, i) =>  React.createElement("div", { key: i, style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11.5, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA1MDAgfSB9LCByLmxhYmVsKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 13, fontWeight: 500, color: r.col, fontFamily: "'Inter',sans-serif" } }, r.pct || r.val)))))), uiBlocks.monthlyBars !== false &&  React.createElement("div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.08em_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Monthly P&L_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 7, marginTop: 4 } }, months.slice(-5).map(([m, data]) => {
const maxV = Math.max(...months.map(([, x]) => Math.abs(x.profit)), 1);
const pct = Math.abs(data.profit) / maxV * 100;
return  React.createElement("div", { key: m, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: 32, fontSize: 10.5, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA3MDAsIGZsZXhTaHJpbms6IDAgfSB9LCBtLnNsaWNlKDUpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { flex: 1, height: 8, background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: `${pct}%`, height: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiBkYXRhLnByb2ZpdCA+PSAwID8g")linear-gradient(90deg,var(--acc),var(--accD))" : _0x4f2a("dmFyKC0tYm9yZGVyMik="), borderRadius: 4, transition: _0x4f2a("d2lkdGggLjhzIGN1YmljLWJlemllciguMjIsMSwuMzYsMSk=") } })),  React.createElement("div", { style: { width: 66, textAlign: "right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IGRhdGEucHJvZml0ID49IDAgPyA=")var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), fontFamily: _0x4f2a("J0ludGVyJyxzYW5zLXNlcmlm") } }, data.profit >= 0 ? "+$" : "-$_0x4f2a("LCBNYXRoLmFicyhkYXRhLnByb2ZpdCkudG9GaXhlZCgwKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 42, textAlign: "right_0x4f2a("LCBmb250U2l6ZTogMTAuNSwgY29sb3I6IA==")var(--t3)", fontWeight: 600 } }, fmtPct(data.pnl, 1)));
})))), hourlyStats.length > 0 &&  React.createElement("div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDE0LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Best Time of Day_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDIsIGFsaWduSXRlbXM6IA==")flex-end", height: 68, marginBottom: 4 } }, Array.from({ length: 24 }, (_, h) => {
const stat = hourlyStats.find((x) => x.h === h);
if (!stat) return  React.createElement("div", { key: h, style: { flex: 1, height: 4, background: "var(--s3)", borderRadius: 2, opacity: 0.35 } });
const maxP = Math.max(...hourlyStats.map((x) => Math.abs(x.profit)), 1);
const ht = Math.max(6, Math.round(Math.abs(stat.profit) / maxP * 64));
const col = stat.profit >= 0 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyMik=");
return  React.createElement(
"div",
{
key: h,
title: `${String(h).padStart(2, "0")}:00 \xB7 ${stat.n} trade${stat.n !== 1 ? "s" : ""} \xB7 ${stat.wr.toFixed(0)}% WR \xB7 avg $${(stat.profit / stat.n).toFixed(2)}`,
style: { flex: 1, height: ht, background: col, borderRadius: _0x4f2a("M3B4IDNweCAwIDA="), cursor: _0x4f2a("ZGVmYXVsdA=="), opacity: 0.8, transition: _0x4f2a("b3BhY2l0eSAuMXM=") },
onMouseEnter: (e) => e.currentTarget.style.opacity = "1_0x4f2a("LApvbk1vdXNlTGVhdmU6IChlKSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUub3BhY2l0eSA9IA==").8_0x4f2a("Cn0KKTsKfSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBmb250U2l6ZTogOSwgY29sb3I6IA==")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCBb")00", "03", "06", "09", "12", "15", "18", "21_0x4f2a("XS5tYXAoKGgpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { key: h }, h))), bestHour &&  React.createElement("div", { style: { marginTop: 10, padding: "8px 12px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIGZvbnRTaXplOiAxMSwgY29sb3I6IA==")var(--t2)_0x4f2a("IH0gfSwg")Peak: _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontWeight: 700, color: "var(--accD)_0x4f2a("IH0gfSwgU3RyaW5nKGJlc3RIb3VyLmgpLnBhZFN0YXJ0KDIsIA==")0"), ":00_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { color: "var(--t3)_0x4f2a("LCBtYXJnaW5MZWZ0OiA2IH0gfSwgYmVzdEhvdXIubiwg") trades \xB7 _0x4f2a("LCBiZXN0SG91ci53ci50b0ZpeGVkKDApLCA=")% WR \xB7 avg $", (bestHour.profit / bestHour.n).toFixed(2)))))
});
function EdgeFinder({ trades, capital }) {
const E = React.createElement;
const [minTrades, setMinTrades] = React.useState(5);
const [sortBy, setSortBy] = React.useState(_0x4f2a("ZWRnZQ=="));
function edgeScore(wins, total) {
if (total < 1) return 0;
const wr = wins / total;
const kelly = wr - (1 - wr);
const confidence = Math.min(1, Math.sqrt(total / 20));
return Math.max(0, kelly * confidence * 100);
}
function edgeLabel(score, total) {
if (total < minTrades) return { label: _0x4f2a("4qycIFRvbyBGZXc="), color: _0x4f2a("dmFyKC0tdDMp"), bg: _0x4f2a("dmFyKC0tczIp") };
if (score >= 30) return { label: _0x4f2a("4pymIFN0cm9uZyBFZGdl"), color: _0x4f2a("dmFyKC0tYWNjRCk="), bg: _0x4f2a("dmFyKC0tYWNjTCk=") };
if (score >= 12) return { label: _0x4f2a("4peIIEJ1aWxkaW5n"), color: _0x4f2a("dmFyKC0tYWNjKQ=="), bg: _0x4f2a("dmFyKC0tYWNjRik=") };
if (score >= 0) return { label: _0x4f2a("8J+UtCBBdm9pZA=="), color: _0x4f2a("dmFyKC0tcmVkKQ=="), bg: _0x4f2a("dmFyKC0tckJnKQ==") };
return { label: _0x4f2a("8J+UtCBBdm9pZA=="), color: _0x4f2a("dmFyKC0tcmVkKQ=="), bg: _0x4f2a("dmFyKC0tckJnKQ==") };
}
const dims = {};
function addDim(key, t) {
if (!dims[key]) dims[key] = { wins: 0, total: 0, pnl: 0, profit: 0 };
dims[key].total++;
if (t.profit > 0) dims[key].wins++;
dims[key].pnl += t.profit ? (t.profit / capital) * 100 : 0;
dims[key].profit += t.profit || 0;
}
trades.forEach(t => {
const sess = t.session || _0x4f2a("VW5rbm93bg==");
const sym = t.symbol || _0x4f2a("VW5rbm93bg==");
const model = t.model || _0x4f2a("VW5rbm93bg==");
const grade = t.grade || "–_0x4f2a("Owpjb25zdCByciA9IHQuZXhwZWN0ZWRSUiB8fCA=")–";
addDim(`Session: ${sess}`, t);
addDim(`Symbol: ${sym}`, t);
addDim(`Model: ${model}`, t);
addDim(`Grade: ${grade}`, t);
addDim(`Target RR: ${rr}`, t);
addDim(`${sess} + ${sym}`, t);
addDim(`${sess} + ${model}`, t);
addDim(`${sym} + ${model}`, t);
addDim(`${grade} + ${sess}`, t);
addDim(`${model} + ${rr}`, t);
(t.confluences || []).forEach(c => {
addDim(`Confluence: ${c}`, t);
if (sess !== _0x4f2a("VW5rbm93bg==")) addDim(`${c} in ${sess}`, t);
});
});
let rows = Object.entries(dims).map(([key, d]) => {
const wr = d.total ? d.wins / d.total * 100 : 0;
const score = edgeScore(d.wins, d.total);
const avgPnl = d.total ? d.pnl / d.total : 0;
return { key, ...d, wr, score, avgPnl };
}).filter(r => r.total >= minTrades);
if (sortBy === _0x4f2a("ZWRnZQ==")) rows.sort((a, b) => b.score - a.score);
else if (sortBy === "wr_0x4f2a("KSByb3dzLnNvcnQoKGEsIGIpID0+IGIud3IgLSBhLndyKTsKZWxzZSBpZiAoc29ydEJ5ID09PSA=")pnl_0x4f2a("KSByb3dzLnNvcnQoKGEsIGIpID0+IGIucHJvZml0IC0gYS5wcm9maXQpOwplbHNlIGlmIChzb3J0QnkgPT09IA==")trades") rows.sort((a, b) => b.total - a.total);
const topEdges = rows.filter(r => r.score >= 30).slice(0, 3);
const avoidEdges = rows.filter(r => r.score < 0 || (r.total >= minTrades && r.wr < 35)).slice(0, 3);
const fmtPctLocal = (v) => (v >= 0 ? "+" : "_0x4f2a("KSArIHYudG9GaXhlZCgxKSArIA==")%_0x4f2a("Owpjb25zdCBmbXRVU0RMb2NhbCA9ICh2KSA9PiAodiA+PSAwID8g")+" : "-_0x4f2a("KSArIA==")$_0x4f2a("ICsgTWF0aC5hYnModikudG9GaXhlZCgwKTsKaWYgKHRyYWRlcy5sZW5ndGggPCBtaW5UcmFkZXMpIHJldHVybiBFKA==")div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")60px 20px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTMgfSB9LApFKA==")div", { style: { fontSize: 32, marginBottom: 12 } }, "⚡_0x4f2a("KSwKRSg=")div", { style: { fontWeight: 700, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYgfSB9LCA=")Not enough data yet_0x4f2a("KSwKRSg=")div", null, `Log at least ${minTrades} trades to unlock Edge Finder.`)
);
return E("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDE2IH0gfSwKRSg=")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDggfSB9LApFKA==")div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")-.02em_0x4f2a("IH0gfSwg")⚡ Edge Finder_0x4f2a("KSwKRSg=")div", { style: { fontSize: 11.5, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDIgfSB9LCA=")Statistical edge scoring across all your trading dimensions & combos_0x4f2a("KQopLApFKA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")center_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("IH0gfSwKRSg=")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")Min trades:_0x4f2a("KSwKWzMsIDUsIDEwXS5tYXAobiA9PiBFKA==")button", {
key: n, onClick: () => setMinTrades(n),
style: { padding: "4px 12px", borderRadius: 8, border: `1.5px solid ${minTrades === n ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: minTrades === n ? _0x4f2a("dmFyKC0tYWNjTCk=") : _0x4f2a("dmFyKC0tczIp"), color: minTrades === n ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontSize: 11, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") }
}, n))
)
),
topEdges.length > 0 && E("div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.06em_0x4f2a("LCBtYXJnaW5Cb3R0b206IDggfSB9LCA=")🏆 Your Strongest Edges_0x4f2a("KSwKRSg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(auto-fill, minmax(200px,1fr))_0x4f2a("LCBnYXA6IDEwIH0gfSwKdG9wRWRnZXMubWFwKChyLCBpKSA9PiBFKA==")div", {
key: r.key,
style: { background: "var(--accF)_0x4f2a("LCBib3JkZXI6IA==")1.5px solid color-mix(in srgb, var(--acc) 40%, transparent)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")14px 16px_0x4f2a("LCBwb3NpdGlvbjog")relative_0x4f2a("LCBvdmVyZmxvdzog")hidden_0x4f2a("IH0KfSwKRSg=")div", { style: { position: "absolute_0x4f2a("LCB0b3A6IDAsIHJpZ2h0OiAwLCB3aWR0aDogNDAsIGhlaWdodDogNDAsIGJvcmRlclJhZGl1czog")0 12px 0 100%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")color-mix(in srgb, var(--acc) 12%, transparent)_0x4f2a("IH0gfSksCkUo")div", { style: { fontSize: 9, fontWeight: 800, color: "var(--acc)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.07em", marginBottom: 5 } }, `#${i + 1} Edge`),
E("div", { style: { fontSize: 12, fontWeight: 800, color: "var(--text)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjMsIG1hcmdpbkJvdHRvbTogOCB9IH0sIHIua2V5KSwKRSg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDEyIH0gfSwKRSg=")div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Win Rate_0x4f2a("KSwKRSg=")div", { style: { fontSize: 18, fontWeight: 800, color: "var(--accD)_0x4f2a("IH0gfSwgci53ci50b0ZpeGVkKDApICsg")%_0x4f2a("KQopLApFKA==")div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Trades_0x4f2a("KSwKRSg=")div", { style: { fontSize: 18, fontWeight: 800, color: "var(--text)_0x4f2a("IH0gfSwgci50b3RhbCkKKSwKRSg=")div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Net P&L_0x4f2a("KSwKRSg=")div", { style: { fontSize: 14, fontWeight: 800, color: r.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, fmtUSDLocal(r.profit))
)
),
E("div", { style: { marginTop: 10, height: 4, background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwKRSg=")div", { style: { height: "100%_0x4f2a("LCB3aWR0aDogTWF0aC5taW4oMTAwLCByLnNjb3JlICogMikgKyA=")%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")linear-gradient(90deg, var(--acc), var(--accD))_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIHRyYW5zaXRpb246IA==")width .6s ease_0x4f2a("IH0gfSkKKSwKRSg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDQsIGZvbnRXZWlnaHQ6IDYwMCB9IH0sIA==")Edge score: _0x4f2a("ICsgci5zY29yZS50b0ZpeGVkKDApKQopKQopCiksCmF2b2lkRWRnZXMubGVuZ3RoID4gMCAmJiBFKA==")div_0x4f2a("LCBudWxsLApFKA==")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.06em_0x4f2a("LCBtYXJnaW5Cb3R0b206IDggfSB9LCA=")⚠️ Edges to Avoid_0x4f2a("KSwKRSg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(auto-fill, minmax(180px,1fr))_0x4f2a("LCBnYXA6IDggfSB9LAphdm9pZEVkZ2VzLm1hcChyID0+IEUo")div", {
key: r.key,
style: { background: "var(--rBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--rBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")12px 14px_0x4f2a("IH0KfSwKRSg=")div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYgfSB9LCByLmtleSksCkUo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDEwLCBmb250U2l6ZTogMTIgfSB9LApFKA==")span", { style: { color: "var(--red)_0x4f2a("LCBmb250V2VpZ2h0OiA3MDAgfSB9LCByLndyLnRvRml4ZWQoMCkgKyA=")% WR_0x4f2a("KSwKRSg=")span", { style: { color: "var(--t3)_0x4f2a("IH0gfSwgci50b3RhbCArIA==") trades_0x4f2a("KSwKRSg=")span", { style: { color: r.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), fontWeight: 700 } }, fmtUSDLocal(r.profit))
)
))
)
),
E("div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwKRSg=")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBwYWRkaW5nOiA=")12px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDggfSB9LApFKA==")div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)" } }, `All Dimensions (${rows.length} with ≥${minTrades} trades)`),
E("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYsIGFsaWduSXRlbXM6IA==")center_0x4f2a("IH0gfSwKRSg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")Sort:_0x4f2a("KSwKW1s=")edge", _0x4f2a("RWRnZSBTY29yZQ==")], ["wr", _0x4f2a("V2luIFJhdGU=")], ["pnl", _0x4f2a("TmV0IFAmTA==")], [_0x4f2a("dHJhZGVz"), _0x4f2a("VHJhZGVz")]].map(([id, label]) =>
E(_0x4f2a("YnV0dG9u"), {
key: id, onClick: () => setSortBy(id),
style: { padding: _0x4f2a("M3B4IDEwcHg="), borderRadius: 7, border: `1px solid ${sortBy === id ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: sortBy === id ? _0x4f2a("dmFyKC0tYWNjTCk=") : _0x4f2a("dHJhbnNwYXJlbnQ="), color: sortBy === id ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), fontSize: 10, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") }
}, label)
)
)
),
E("div", { className: "analytics-table-scroll_0x4f2a("IH0sCkUo")table", { style: { width: "100%_0x4f2a("LCBtaW5XaWR0aDogNTIwLCBib3JkZXJDb2xsYXBzZTog")collapse_0x4f2a("LCB0YWJsZUxheW91dDog")fixed_0x4f2a("IH0gfSwKRSg=")colgroup_0x4f2a("LCBudWxsLApFKA==")col", { style: { width: "auto_0x4f2a("IH0gfSksCkUo")col", { style: { width: 65 } }),
E("col", { style: { width: 65 } }),
E("col", { style: { width: 78 } }),
E("col", { style: { width: 88 } }),
E("col", { style: { width: 90 } })
),
E("thead_0x4f2a("LCBudWxsLApFKA==")tr", { style: { background: "var(--s2)_0x4f2a("IH0gfSwKWw==")Dimension / Combo", _0x4f2a("VHJhZGVz"), _0x4f2a("V2luICU="), _0x4f2a("QXZnIFAmTCU="), _0x4f2a("TmV0IFAmTA=="), _0x4f2a("RWRnZQ==")].map((h, hi) =>
E("th", { key: h, style: { padding: "9px 16px_0x4f2a("LCBmb250U2l6ZTogOSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjog")var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.06em_0x4f2a("LCB0ZXh0QWxpZ246IGhpID09PSAwID8g")left" : _0x4f2a("cmlnaHQ="), borderBottom: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tczIp"), whiteSpace: _0x4f2a("bm93cmFw") } }, h)
)
)
),
E(_0x4f2a("dGJvZHk="), null,
rows.length === 0
? E("tr_0x4f2a("LCBudWxsLCBFKA==")td", { colSpan: 6, style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")32px_0x4f2a("LCBjb2xvcjog")var(--t3)", fontSize: 13 } }, `No dimensions with ≥${minTrades} trades yet.`))
: rows.map((r, i) => {
const badge = edgeLabel(r.score, r.total);
return E("tr", {
key: r.key,
style: { background: i % 2 === 0 ? "var(--surface)" : _0x4f2a("dmFyKC0tczIp"), transition: _0x4f2a("YmFja2dyb3VuZCAuMXM="), cursor: _0x4f2a("ZGVmYXVsdA==") },
onMouseEnter: e => { e.currentTarget.style.background = _0x4f2a("dmFyKC0tczMp"); },
onMouseLeave: e => { e.currentTarget.style.background = i % 2 === 0 ? _0x4f2a("dmFyKC0tc3VyZmFjZSk=") : _0x4f2a("dmFyKC0tczIp"); }
},
E("td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("IH0gfSwKRSg=")div", { style: { fontSize: 11.5, fontWeight: 600, color: "var(--text)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYsIG1pbldpZHRoOiAwIH0gfSwKRSg=")div", { style: { width: 4, height: 4, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiByLnNjb3JlID49IDMwID8g")var(--acc)_0x4f2a("IDogci5zY29yZSA+PSAxMiA/IA==")color-mix(in srgb, var(--acc) 60%, var(--t3))" : _0x4f2a("dmFyKC0tcmVkKQ=="), flexShrink: 0 } }),
E(_0x4f2a("c3Bhbg=="), { style: { overflow: _0x4f2a("aGlkZGVu"), textOverflow: _0x4f2a("ZWxsaXBzaXM="), whiteSpace: _0x4f2a("bm93cmFw") } }, r.key)
)
),
E("td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCByLnRvdGFsKSwKRSg=")td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHIud3IgPj0gNTUgPyA=")var(--accD)_0x4f2a("IDogci53ciA+PSA0NSA/IA==")var(--acc)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, r.wr.toFixed(0) + "%_0x4f2a("KSwKRSg=")td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHIuYXZnUG5sID49IDAgPyA=")var(--accD)" : _0x4f2a("dmFyKC0tdDMp") } }, fmtPctLocal(r.avgPnl)),
E("td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHIucHJvZml0ID49IDAgPyA=")var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), fontVariantNumeric: _0x4f2a("dGFidWxhci1udW1z") } }, fmtUSDLocal(r.profit)),
E("td", { style: { padding: "10px 16px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("IH0gfSwKRSg=")span", { style: { fontSize: 10, fontWeight: 700, color: badge.color, background: badge.bg, borderRadius: 6, padding: _0x4f2a("MnB4IDdweA=="), whiteSpace: _0x4f2a("bm93cmFw"), display: _0x4f2a("aW5saW5lLWJsb2Nr") } }, badge.label)
)
);
})
)
)
)
),
E("div", { style: { background: "var(--bBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--bBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")12px 16px_0x4f2a("LCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjYsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBnYXA6IDEwIH0gfSwKRSg=")span", { style: { flexShrink: 0 } }, "💡_0x4f2a("KSwKRSg=")div_0x4f2a("LCBudWxsLApFKA==")span", { style: { fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwg")How Edge Score works: "),
"Combines win rate, profit factor and sample size confidence. Scores ≥30 = strong edge you should exploit. 12–29 = developing, needs more data. <12 = no statistical edge — review or avoid."
)
)
);
}
const Analytics = memo(function Analytics2({ trades, uiBlocks = {}, capital: propCapital }) {
const capital = propCapital && propCapital > 0 ? propCapital : 5000;
var _a, _b, _c, _d, _e, _f, _g;
const [activeView, setActiveView] = useState(_0x4f2a("Y29uZmx1ZW5jZQ=="));
if (!trades.length) return  React.createElement("div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")80px 20px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("IH0gfSwg")Log at least one trade to unlock performance analytics.");
const confMap = {};
trades.forEach((t) => {
(t.confluences || []).forEach((c) => {
if (!confMap[c]) confMap[c] = { n: 0, w: 0, pnl: 0, profit: 0 };
confMap[c].n++;
if (t.profit > 0) confMap[c].w++;
confMap[c].pnl += calcPnL(t.profit, capital);
confMap[c].profit += t.profit || 0;
});
});
const confData = Object.entries(confMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const sessMap = {};
trades.forEach((t) => {
const s = t.session || _0x4f2a("VW5rbm93bg==");
if (!sessMap[s]) sessMap[s] = { n: 0, w: 0, pnl: 0, profit: 0 };
sessMap[s].n++;
if (t.profit > 0) sessMap[s].w++;
sessMap[s].pnl += calcPnL(t.profit, capital);
sessMap[s].profit += t.profit || 0;
});
const sessData = Object.entries(sessMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const modelMap = {};
trades.forEach((t) => {
const m = t.model || _0x4f2a("VW5rbm93bg==");
if (!modelMap[m]) modelMap[m] = { n: 0, w: 0, pnl: 0, profit: 0 };
modelMap[m].n++;
if (t.profit > 0) modelMap[m].w++;
modelMap[m].pnl += calcPnL(t.profit, capital);
modelMap[m].profit += t.profit || 0;
});
const modelData = Object.entries(modelMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const gradeMap = {};
trades.forEach((t) => {
const g = t.grade || "\u2014";
if (!gradeMap[g]) gradeMap[g] = { n: 0, w: 0, pnl: 0, profit: 0 };
gradeMap[g].n++;
if (t.profit > 0) gradeMap[g].w++;
gradeMap[g].pnl += calcPnL(t.profit, capital);
gradeMap[g].profit += t.profit || 0;
});
const rrMap = {};
trades.forEach((t) => {
const rr = t.expectedRR || _0x4f2a("VW5rbm93bg==");
if (!rrMap[rr]) rrMap[rr] = { n: 0, w: 0, pnl: 0 };
rrMap[rr].n++;
if (t.profit > 0) rrMap[rr].w++;
rrMap[rr].pnl += calcPnL(t.profit, capital);
});
const symMap = {};
trades.forEach((t) => {
if (!symMap[t.symbol]) symMap[t.symbol] = { n: 0, w: 0, pnl: 0, profit: 0 };
symMap[t.symbol].n++;
if (t.profit > 0) symMap[t.symbol].w++;
symMap[t.symbol].pnl += calcPnL(t.profit, capital);
symMap[t.symbol].profit += t.profit || 0;
});
const symData = Object.entries(symMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const keyLevelMap = {};
trades.forEach((t) => {
(t.keyLevels || []).forEach((kl) => {
if (!keyLevelMap[kl]) keyLevelMap[kl] = { n: 0, w: 0, pnl: 0, profit: 0 };
keyLevelMap[kl].n++;
if (t.profit > 0) keyLevelMap[kl].w++;
keyLevelMap[kl].pnl += calcPnL(t.profit, capital);
keyLevelMap[kl].profit += t.profit || 0;
});
});
const keyLevelData = Object.entries(keyLevelMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const views = [{ id: _0x4f2a("Y29uZmx1ZW5jZQ=="), label: _0x4f2a("Q29uZmx1ZW5jZXM=") }, { id: _0x4f2a("c2Vzc2lvbg=="), label: _0x4f2a("U2Vzc2lvbnM=") }, { id: _0x4f2a("bW9kZWw="), label: _0x4f2a("TW9kZWxz") }, { id: _0x4f2a("c3ltYm9s"), label: _0x4f2a("U3ltYm9scw==") }, { id: _0x4f2a("a2V5bGV2ZWw="), label: _0x4f2a("S2V5IExldmVscw==") }, { id: _0x4f2a("Z3JhZGU="), label: _0x4f2a("R3JhZGUgUXVhbGl0eQ==") }, { id: _0x4f2a("ZWRnZWZpbmRlcg=="), label: _0x4f2a("4pqhIEVkZ2UgRmluZGVy") }];
function DataTable({ data, maxWR = 100 }) {
return  React.createElement("div", { className: "analytics-table-scroll_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")table", { style: { width: "100%_0x4f2a("LCBtaW5XaWR0aDogNDIwLCBib3JkZXJDb2xsYXBzZTog")collapse_0x4f2a("LCB0YWJsZUxheW91dDog")fixed_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")colgroup_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")col", { style: { width: "auto_0x4f2a("IH0gfSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")col", { style: { width: 70 } }),
React.createElement("col", { style: { width: 80 } }),
React.createElement("col", { style: { width: 80 } }),
React.createElement("col", { style: { width: 96 } })
),
React.createElement("thead_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")tr", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IA==")10px 10px 0 0_0x4f2a("IH0gfSwKWw==")Factor", _0x4f2a("VHJhZGVz"), _0x4f2a("V2luIFJhdGU="), _0x4f2a("QXZnIFAmTCU="), "Net P&L $"].map((h, hi) =>
React.createElement("th", { key: h, style: { padding: "9px 14px_0x4f2a("LCBmb250U2l6ZTogMTAsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IA==")var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.06em_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCB0ZXh0QWxpZ246IGhpID09PSAwID8g")left" : _0x4f2a("cmlnaHQ="), borderBottom: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tczIp"), whiteSpace: _0x4f2a("bm93cmFw") } }, h)
)
)
),
React.createElement(_0x4f2a("dGJvZHk="), null,
data.map((row, i) =>
React.createElement("tr", {
key: i,
style: { background: i % 2 === 0 ? "var(--surface)" : _0x4f2a("dmFyKC0tczIp"), transition: _0x4f2a("YmFja2dyb3VuZCAuMXM="), cursor: _0x4f2a("ZGVmYXVsdA==") },
onMouseEnter: (e) => { e.currentTarget.style.background = _0x4f2a("dmFyKC0tczMp"); },
onMouseLeave: (e) => { e.currentTarget.style.background = i % 2 === 0 ? _0x4f2a("dmFyKC0tc3VyZmFjZSk=") : _0x4f2a("dmFyKC0tczIp"); }
},
React.createElement("td", { style: { padding: "10px 14px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDcgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 5, height: 5, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiByb3cud3IgPj0gNjAgPyA=")var(--green)_0x4f2a("IDogcm93LndyID49IDQwID8g")var(--acc)" : _0x4f2a("dmFyKC0tcmVkKQ=="), flexShrink: 0 } }),
React.createElement(_0x4f2a("c3Bhbg=="), { style: { overflow: _0x4f2a("aGlkZGVu"), textOverflow: _0x4f2a("ZWxsaXBzaXM="), whiteSpace: _0x4f2a("bm93cmFw") } }, row.name)
)
),
React.createElement("td", { style: { padding: "10px 14px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCByb3cubiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")td", { style: { padding: "10px 14px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHJvdy53ciA+PSA1MCA/IA==")var(--green)_0x4f2a("IDogcm93LndyID49IDQwID8g")var(--acc)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, row.wr.toFixed(0), "%_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "10px 14px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHJvdy5wbmwgPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tdDIp") } }, fmtPct(row.pnl / row.n, 2)),
React.createElement("td", { style: { padding: "10px 14px_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCB0ZXh0QWxpZ246IA==")right_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IHJvdy5wcm9maXQgPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), fontVariantNumeric: _0x4f2a("dGFidWxhci1udW1z") } }, fmtUSD(row.profit, true))
)
)
)
)
);
}
var _c2=0,_p2=0,_md=0;[...trades].sort(function(a,b){return a.entryDate.localeCompare(b.entryDate);}).forEach(function(t){_c2+=calcPnL(t.profit,capital);if(_c2>_p2)_p2=_c2;var _d=_c2-_p2;if(_d<_md)_md=_d;});
var _pf=calcProfitFactor(trades),_pfS=_pf===Infinity?"∞":_pf.toFixed(2);
var _erA=trades.filter(function(t){return t.expectedRR&&t.expectedRR!==_0x4f2a("Q3VzdG9t");}).map(function(t){return parseFloat((t.expectedRR||"1:1_0x4f2a("KS5zcGxpdCg="):")[1]||1);});
var _aER=_erA.length?_erA.reduce(function(s,v){return s+v;},0)/_erA.length:0;
var _arA=trades.filter(function(t){return t.profit>0&&t.actualRR&&!t.actualRR.startsWith("-");}).map(function(t){return parseFloat((t.actualRR||"0:0_0x4f2a("KS5zcGxpdCg="):")[1]||0);});
var _aAR=_arA.length?_arA.reduce(function(s,v){return s+v;},0)/_arA.length:0;
var _streak=calcStreak(trades);
return  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDE2IH0sIGNsYXNzTmFtZTog")fade-up_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{display:"flex_0x4f2a("LGZsZXhEaXJlY3Rpb246")column_0x4f2a("LGdhcDoxMn19LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)_0x4f2a("LGxldHRlclNwYWNpbmc6")0.06em_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo4fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{width:3,height:14,background:"var(--acc)_0x4f2a("LGJvcmRlclJhZGl1czoyfX0pLA==")Performance Metrics_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{className:"g4",style:{display:"grid_0x4f2a("LGdyaWRUZW1wbGF0ZUNvbHVtbnM6")repeat(4,1fr)",gap:14}},
[{label:"Max Drawdown_0x4f2a("LHZhbDpmbXRQY3QoX21kLDEpLHN1Yjo=")Peak-to-trough_0x4f2a("LGFjY2VudDo=")var(--red)_0x4f2a("LHN1YkNvbDo=")var(--red)"},
{label:"Profit Factor_0x4f2a("LHZhbDpfcGZTLHN1YjpfcGY+PTI/")Strong edge_0x4f2a("Ol9wZj49MT8=")Profitable":_0x4f2a("TG9zaW5nIGVkZ2U="),subCol:_pf>=1.5?_0x4f2a("dmFyKC0tZ3JlZW4p"):_pf>=1?_0x4f2a("dmFyKC0tYWNjKQ=="):_0x4f2a("dmFyKC0tcmVkKQ=="),accent:_pf>=1?_0x4f2a("dmFyKC0tYWNjKQ=="):_0x4f2a("dmFyKC0tcmVkKQ==")},
{label:_0x4f2a("QXZnIFRhcmdldCBSUg=="),val:_aER>0?"1:_0x4f2a("K19hRVIudG9GaXhlZCgxKTo=")—_0x4f2a("LHN1Yjo=")Planned reward ratio_0x4f2a("LGFjY2VudDo=")var(--purple)_0x4f2a("LHN1YkNvbDo=")var(--t3)"},
{label:"Avg Actual RR_0x4f2a("LHZhbDpfYUFSPjA/")1:_0x4f2a("K19hQVIudG9GaXhlZCgxKTo=")—_0x4f2a("LHN1YjpfYUFSPj1fYUVSPw==")On target ✓":_0x4f2a("QmVsb3cgcGxhbg=="),subCol:_aAR>=_aER?_0x4f2a("dmFyKC0tZ3JlZW4p"):_0x4f2a("dmFyKC0tdDMp"),accent:_0x4f2a("dmFyKC0tY3lhbik=")}
].map(function(k,i){return  React.createElement("div",{key:i,className:"card count-up",style:{borderTop:"3px solid _0x4f2a("K2suYWNjZW50LHBhZGRpbmdUb3A6MTgsYW5pbWF0aW9uRGVsYXk6aSo2MCs=")ms_0x4f2a("fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:10,fontWeight:600,color:"var(--t3)_0x4f2a("LGxldHRlclNwYWNpbmc6MC4zLG1hcmdpbkJvdHRvbToxMCx0ZXh0VHJhbnNmb3JtOg==")uppercase_0x4f2a("fX0say5sYWJlbCksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:28,fontWeight:800,letterSpacing:"-1.5px_0x4f2a("LGxpbmVIZWlnaHQ6MX19LGsudmFsKSwKay5zdWImJiBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div",{style:{fontSize:11,marginTop:6,color:k.subCol,fontWeight:600}},k.sub)
);})
)
),
React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)_0x4f2a("LGxldHRlclNwYWNpbmc6")0.06em_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo4fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{width:3,height:14,background:"var(--acc)_0x4f2a("LGJvcmRlclJhZGl1czoyfX0pLA==")Current Streak_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{className:"card",style:{borderTop:"3px solid _0x4f2a("Kyhfc3RyZWFrLnR5cGU9PT0=")win"?_0x4f2a("dmFyKC0tYWNjKQ=="):_streak.type===_0x4f2a("bG9zcw==")?_0x4f2a("dmFyKC0tdDIp"):_0x4f2a("dmFyKC0tYm9yZGVyKQ==")),paddingTop:18}},
React.createElement("div",{style:{display:"flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGp1c3RpZnlDb250ZW50Og==")space-between_0x4f2a("LGZsZXhXcmFwOg==")wrap_0x4f2a("LGdhcDoxNn19LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div",{style:{display:"flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDoxMn19LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div",{style:{fontSize:36,fontWeight:800,lineHeight:1,color:_streak.type==="win"?_0x4f2a("dmFyKC0tYWNjRCk="):_streak.type===_0x4f2a("bG9zcw==")?_0x4f2a("dmFyKC0tdDIp"):_0x4f2a("dmFyKC0tdDMp"),letterSpacing:_0x4f2a("LTJweA==")}},
_streak.type==="win"?"+_0x4f2a("Ol9zdHJlYWsudHlwZT09PQ==")loss"?"-":"_0x4f2a("LF9zdHJlYWsuY3VycmVudCksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:14,fontWeight:700,color:_streak.type==="win"?_0x4f2a("dmFyKC0tYWNjRCk="):_streak.type===_0x4f2a("bG9zcw==")?_0x4f2a("dmFyKC0tdDIp"):_0x4f2a("dmFyKC0tdDMp")}},
_streak.type==="win"?_0x4f2a("V2luIFN0cmVhaw=="):_streak.type===_0x4f2a("bG9zcw==")?_0x4f2a("TG9zcyBTdHJlYWs="):_0x4f2a("Tm8gVHJhZGVz")),
React.createElement("div",{style:{fontSize:11,color:"var(--t3)_0x4f2a("LG1hcmdpblRvcDoyfX0s")consecutive _0x4f2a("LF9zdHJlYWsudHlwZT09PQ==")win"?_0x4f2a("d2lucw=="):_0x4f2a("bG9zc2Vz"))
)
),
React.createElement("div",{style:{display:"flex_0x4f2a("LGdhcDozMixwYWRkaW5nTGVmdDoxNixib3JkZXJMZWZ0Og==")1px solid var(--border)_0x4f2a("fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:9,color:"var(--t3)_0x4f2a("LGZvbnRXZWlnaHQ6NjAwLGxldHRlclNwYWNpbmc6MC4wNCx0ZXh0VHJhbnNmb3JtOg==")uppercase_0x4f2a("LG1hcmdpbkJvdHRvbTozfX0s")Best Win Streak_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{style:{fontSize:22,fontWeight:700,color:"var(--accD)_0x4f2a("fX0sX3N0cmVhay5sb25nZXN0LndpbikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:9,color:"var(--t3)_0x4f2a("LGZvbnRXZWlnaHQ6NjAwLGxldHRlclNwYWNpbmc6MC4wNCx0ZXh0VHJhbnNmb3JtOg==")uppercase_0x4f2a("LG1hcmdpbkJvdHRvbTozfX0s")Worst Loss Streak_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{style:{fontSize:22,fontWeight:700,color:"var(--t2)_0x4f2a("fX0sX3N0cmVhay5sb25nZXN0Lmxvc3MpCikKKQopCiksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)_0x4f2a("LGxldHRlclNwYWNpbmc6")0.06em_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo4fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{width:3,height:14,background:"var(--purple)_0x4f2a("LGJvcmRlclJhZGl1czoyfX0pLA==")Market Breakdown_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "g4", style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(5,1fr)", gap: 14 } }, [
{ label: "Top Confluence", val: ((_b = (_a = confData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _a.name) == null ? void 0 : _b.split(" _0x4f2a("KS5zbGljZSgwLCAyKS5qb2luKA==") _0x4f2a("KSkgfHwg")\u2014", sub: confData.sort((a, b) => b.wr - a.wr)[0] ? `${confData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--acc)" },
{ label: "Best Session", val: ((_c = sessData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _c.name) || "\u2014", sub: sessData.sort((a, b) => b.wr - a.wr)[0] ? `${sessData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--blue)" },
{ label: "Best Strategy", val: ((_e = (_d = modelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _d.name) == null ? void 0 : _e.split(" _0x4f2a("KVswXSkgfHwg")\u2014", sub: modelData.sort((a, b) => b.wr - a.wr)[0] ? `${modelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--purple)" },
{ label: "Best Instrument", val: ((_f = symData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _f.name) || "\u2014", sub: symData.sort((a, b) => b.wr - a.wr)[0] ? `${symData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--green)" },
{ label: "Best Key Level", val: ((_g = keyLevelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _g.name) || "\u2014", sub: keyLevelData.sort((a, b) => b.wr - a.wr)[0] ? `${keyLevelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--cyan)_0x4f2a("IH0KXS5tYXAoKGssIGkpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: i, className: "card count-up", style: { borderTop: `3px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDEwLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwgay5sYWJlbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIGZvbnRGYW1pbHk6IA==")'Inter',sans-serif_0x4f2a("IH0gfSwgay52YWwpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11.5, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA1MDAgfSB9LCBrLnN1YikpKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "card", style: { padding: 0, overflow: "hidden_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDAsIGJvcmRlckJvdHRvbTog")1px solid var(--border)_0x4f2a("LCBvdmVyZmxvd1g6IA==")auto_0x4f2a("IH0gfSwgdmlld3MubWFwKCh2KSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { key: v.id, onClick: () => setActiveView(v.id), style: { padding: "12px 20px", fontSize: 12, fontWeight: activeView === v.id ? 700 : 500, color: activeView === v.id ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg=="), borderBottom: activeView === v.id ? _0x4f2a("MnB4IHNvbGlkIHZhcigtLWFjYyk=") : _0x4f2a("MnB4IHNvbGlkIHRyYW5zcGFyZW50"), whiteSpace: _0x4f2a("bm93cmFw"), fontFamily: _0x4f2a("aW5oZXJpdA==") } }, v.label))),
React.createElement("div", { className: "swipe-hint_0x4f2a("IH0sIA==")↔ Swipe to see all columns_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { padding: "16px_0x4f2a("IH0gfSwgYWN0aXZlVmlldyA9PT0g")confluence" &&  React.createElement(DataTable, { data: [...confData].sort((a, b) => b.wr - a.wr) }), activeView === _0x4f2a("c2Vzc2lvbg==") &&  React.createElement(DataTable, { data: [...sessData].sort((a, b) => b.wr - a.wr) }), activeView === _0x4f2a("bW9kZWw=") &&  React.createElement(DataTable, { data: [...modelData].sort((a, b) => b.wr - a.wr) }), activeView === _0x4f2a("c3ltYm9s") &&  React.createElement(DataTable, { data: [...symData].sort((a, b) => b.wr - a.wr) }), activeView === _0x4f2a("a2V5bGV2ZWw=") && (keyLevelData.length > 0 ?  React.createElement(DataTable, { data: [...keyLevelData].sort((a, b) => b.wr - a.wr) }) :  React.createElement("div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")40px 20px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTMgfSB9LCA=")\uD83D\uDCCD No key levels logged yet \u2014 add them in Trade Log to see analytics here._0x4f2a("KSksIGFjdGl2ZVZpZXcgPT09IA==")edgefinder" &&  React.createElement(EdgeFinder, { trades, capital }), activeView === "grade_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(5,1fr)", gap: 12, marginBottom: 16 } }, GRADES.map((g) => {
const d = gradeMap[g] || { n: 0, w: 0, pnl: 0, profit: 0 };
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: g, className: "card", style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")16px 12px" } },  React.createElement(GradeChip, { grade: g }),  React.createElement("div", { style: { fontSize: 22, fontWeight: 600, marginTop: 10, color: "var(--text)_0x4f2a("IH0gfSwgd3IudG9GaXhlZCgwKSwg")%_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDMgfSB9LCBkLm4sIA==") trades_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, fontWeight: 700, color: d.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), marginTop: 4 } }, d.n > 0 ? fmtUSD(d.profit) : "\u2014_0x4f2a("KSk7Cn0pKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { padding: "12px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjYgfSB9LCA=")\u{1F4A1} A+ and A setups should have your highest win rate. If B/C grades outperform, your grading criteria may need recalibration._0x4f2a("KSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCA=")Target RR vs Actual Execution_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(auto-fill,minmax(200px,1fr))", gap: 12, marginTop: 8 } }, Object.entries(rrMap).sort((a, b) => b[1].n - a[1].n).map(([rr, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: rr, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDExLCBwYWRkaW5nOiA=")14px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIGxldHRlclNwYWNpbmc6IA==")-0.01em_0x4f2a("IH0gfSwg")Target _0x4f2a("LCByciksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDEyIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuMDQsIG1hcmdpbkJvdHRvbTogMywgdGV4dFRyYW5zZm9ybTog")uppercase_0x4f2a("IH0gfSwg")Trades_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 18, fontWeight: 700 } }, d.n)),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuMDQsIG1hcmdpbkJvdHRvbTogMywgdGV4dFRyYW5zZm9ybTog")uppercase_0x4f2a("IH0gfSwg")Win Rate_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 16, fontWeight: 700, color: wr >= 50 ? "var(--green)" : _0x4f2a("dmFyKC0tdDIp") } }, wr.toFixed(0), "%_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6IDAuMDQsIG1hcmdpbkJvdHRvbTogMywgdGV4dFRyYW5zZm9ybTog")uppercase_0x4f2a("IH0gfSwg")Avg P&L_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 16, fontWeight: 700, color: d.pnl / d.n >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, fmtPct(d.pnl / d.n, 1)))));
}))),
React.createElement("div",{className:"card",style:{padding:0,overflow:"hidden_0x4f2a("fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{className:"analytics-table-scroll_0x4f2a("fSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")table",{style:{width:"100%_0x4f2a("LG1pbldpZHRoOjQyMCxib3JkZXJDb2xsYXBzZTo=")collapse_0x4f2a("LHRhYmxlTGF5b3V0Og==")fixed_0x4f2a("fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")colgroup_0x4f2a("LG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")col",{style:{width:"auto_0x4f2a("fX0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")col",{style:{width:70}}),
React.createElement("col",{style:{width:80}}),
React.createElement("col",{style:{width:80}}),
React.createElement("col",{style:{width:96}})
),
React.createElement("thead_0x4f2a("LG51bGwsClJlYWN0LmNyZWF0ZUVsZW1lbnQo")tr",{style:{background:"var(--s2)_0x4f2a("fX0sCls=")Symbol",_0x4f2a("VHJhZGVz"),_0x4f2a("V2luIFJhdGU="),_0x4f2a("QXZnIFAmTCU="),"Net P&L $"].map((h,hi)=>
React.createElement("th",{key:h,style:{padding:"9px 14px_0x4f2a("LGZvbnRTaXplOjEwLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOg==")var(--t3)_0x4f2a("LGxldHRlclNwYWNpbmc6")0.06em_0x4f2a("LHRleHRUcmFuc2Zvcm06")uppercase_0x4f2a("LHRleHRBbGlnbjpoaT09PTA/")left":_0x4f2a("cmlnaHQ="),borderBottom:_0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="),background:_0x4f2a("dmFyKC0tczIp"),whiteSpace:_0x4f2a("bm93cmFw")}},h)
)
)
),
React.createElement(_0x4f2a("dGJvZHk="),null,
(()=>{
const _sorted=[...symData].sort((a,b)=>b.profit-a.profit);
if(!_sorted.length) return  React.createElement("tr_0x4f2a("LG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")td",{colSpan:5,style:{color:"var(--t3)_0x4f2a("LGZvbnRTaXplOjEzLHRleHRBbGlnbjo=")center_0x4f2a("LHBhZGRpbmc6")20px 0"}},_0x4f2a("Tm8gdHJhZGVzIHlldA==")));
return _sorted.map((s,_si)=>
React.createElement("tr",{key:s.name,
style:{background:_si%2===0?"var(--surface)":_0x4f2a("dmFyKC0tczIp"),transition:_0x4f2a("YmFja2dyb3VuZCAuMXM="),cursor:_0x4f2a("ZGVmYXVsdA==")},
onMouseEnter:e=>{e.currentTarget.style.background=_0x4f2a("dmFyKC0tczMp")},
onMouseLeave:e=>{e.currentTarget.style.background=_si%2===0?_0x4f2a("dmFyKC0tc3VyZmFjZSk="):_0x4f2a("dmFyKC0tczIp")}
},
React.createElement("td",{style:{padding:"10px 14px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{fontSize:12,fontWeight:600,color:"var(--text)_0x4f2a("LGRpc3BsYXk6")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDo3fX0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{width:5,height:5,borderRadius:"50%_0x4f2a("LGJhY2tncm91bmQ6cy53cj49NjA/")var(--green)_0x4f2a("OnMud3I+PTQwPw==")var(--acc)":_0x4f2a("dmFyKC0tcmVkKQ=="),flexShrink:0}}),
React.createElement(_0x4f2a("c3Bhbg=="),{style:{overflow:_0x4f2a("aGlkZGVu"),textOverflow:_0x4f2a("ZWxsaXBzaXM="),whiteSpace:_0x4f2a("bm93cmFw")}},s.name)
)
),
React.createElement("td",{style:{padding:"10px 14px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("LHRleHRBbGlnbjo=")right_0x4f2a("LGZvbnRTaXplOjEyLGNvbG9yOg==")var(--t2)_0x4f2a("LGZvbnRXZWlnaHQ6NjAwfX0scy5uKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td",{style:{padding:"10px 14px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("LHRleHRBbGlnbjo=")right_0x4f2a("LGZvbnRTaXplOjEyLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOnMud3I+PTUwPw==")var(--green)_0x4f2a("OnMud3I+PTQwPw==")var(--acc)":_0x4f2a("dmFyKC0tcmVkKQ==")}},s.wr.toFixed(0),"%_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td",{style:{padding:"10px 14px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("LHRleHRBbGlnbjo=")right_0x4f2a("LGZvbnRTaXplOjEyLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOnMucG5sL3Mubj49MD8=")var(--accD)":_0x4f2a("dmFyKC0tdDIp")}},fmtPct(s.pnl/s.n,2)),
React.createElement("td",{style:{padding:"10px 14px_0x4f2a("LGJvcmRlckJvdHRvbTo=")1px solid var(--border)_0x4f2a("LHRleHRBbGlnbjo=")right_0x4f2a("LGZvbnRTaXplOjEyLGZvbnRXZWlnaHQ6NzAwLGNvbG9yOnMucHJvZml0Pj0wPw==")var(--accD)":_0x4f2a("dmFyKC0tdDIp"),fontVariantNumeric:_0x4f2a("dGFidWxhci1udW1z")}},fmtUSD(s.profit,true))
)
);
})()
)
)
)
)
);
});
const Psychology = memo(function Psychology2({ trades, uiBlocks = {}, capital: propCapital }) {
if (!trades.length) return  React.createElement("div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")80px 20px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("IH0gfSwg")Log trades with mindset data to unlock psychology insights.");
const emotBefore = {};
trades.forEach((t) => {
const e = t.emotionBefore || "Neutral";
if (!emotBefore[e]) emotBefore[e] = { n: 0, w: 0, pnl: 0 };
emotBefore[e].n++;
if (t.profit > 0) emotBefore[e].w++;
emotBefore[e].pnl += t.profit || 0;
});
const emotAfter = {};
trades.forEach((t) => {
const e = t.emotionAfter || _0x4f2a("TmV1dHJhbA==");
if (!emotAfter[e]) emotAfter[e] = { n: 0, w: 0 };
emotAfter[e].n++;
if (t.profit > 0) emotAfter[e].w++;
});
const mistakeMap = {};
trades.forEach((t) => {
const m = t.mistakes || _0x4f2a("Tm9uZQ==");
if (!mistakeMap[m]) mistakeMap[m] = { n: 0, loss: 0 };
mistakeMap[m].n++;
if (t.profit <= 0) mistakeMap[m].loss++;
});
const totalTrades = trades.length;
const disciplineScore = Math.round(trades.filter((t) => t.mistakes === _0x4f2a("Tm9uZQ==") || !t.mistakes).length / totalTrades * 100);
const bestEmotion = Object.entries(emotBefore).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
const worstEmotion = Object.entries(emotBefore).sort((a, b) => a[1].w / a[1].n - b[1].w / b[1].n)[0];
const topMistake = Object.entries(mistakeMap).filter(([m]) => m !== _0x4f2a("Tm9uZQ==")).sort((a, b) => b[1].n - a[1].n)[0];
const mistakeRate = Math.round(trades.filter((t) => t.mistakes && t.mistakes !== _0x4f2a("Tm9uZQ==")).length / totalTrades * 100);
return  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDE2IH0sIGNsYXNzTmFtZTog")fade-up_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "g4", style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(4,1fr)", gap: 14 } }, [
{ label: "Rule Adherence", val: `${disciplineScore}%`, sub: disciplineScore >= 80 ? "High discipline \u2014 stay consistent_0x4f2a("IDogZGlzY2lwbGluZVNjb3JlID49IDYwID8g")Moderate \u2014 review rule breaks" : "Low \u2014 focus on process, not P&L_0x4f2a("LCBhY2NlbnQ6IGRpc2NpcGxpbmVTY29yZSA+PSA4MCA/IA==")var(--green)_0x4f2a("IDogZGlzY2lwbGluZVNjb3JlID49IDYwID8g")var(--acc)" : _0x4f2a("dmFyKC0tdDMp"), key: _0x4f2a("ZGlzY2lwbGluZVNjb3Jl") },
{ label: _0x4f2a("UGVhayBNaW5kc2V0"), val: bestEmotion ? bestEmotion[0].split(" _0x4f2a("KVswXSB8fCA=")\u2014" : "\u2014", sub: bestEmotion ? `${(bestEmotion[1].w / bestEmotion[1].n * 100).toFixed(0)}% win rate when in this state` : "_0x4f2a("LCBhY2NlbnQ6IA==")var(--acc)_0x4f2a("LCBrZXk6IA==")bestMindset" },
{ label: "Risk Mindset_0x4f2a("LCB2YWw6IHdvcnN0RW1vdGlvbiAmJiB3b3JzdEVtb3Rpb25bMV0ubiA+IDEgPyB3b3JzdEVtb3Rpb25bMF0uc3BsaXQo") _0x4f2a("KVswXSA6IA==")\u2014", sub: worstEmotion && worstEmotion[1].n > 1 ? `Only ${(worstEmotion[1].w / worstEmotion[1].n * 100).toFixed(0)}% win rate` : _0x4f2a("Tm90IGVub3VnaCBkYXRh"), accent: _0x4f2a("dmFyKC0tYm9yZGVyMik="), key: _0x4f2a("d29yc3RNaW5kc2V0") },
{ label: _0x4f2a("RXJyb3IgUmF0ZQ=="), val: `${mistakeRate}%`, sub: topMistake && topMistake[0] !== _0x4f2a("Tm9uZQ==") ? `Most common: ${topMistake[0].split(" _0x4f2a("KS5zbGljZSgwLCAyKS5qb2luKA==") _0x4f2a("KX1gIDog")Clean execution \u2014 no mistakes_0x4f2a("LCBhY2NlbnQ6IG1pc3Rha2VSYXRlID4gMzAgPyA=")var(--orange)_0x4f2a("IDogbWlzdGFrZVJhdGUgPiAxNSA/IA==")var(--acc)" : _0x4f2a("dmFyKC0tZ3JlZW4p"), key: _0x4f2a("bWlzdGFrZVJhdGU=") }
].filter((k) => uiBlocks[k.key] !== false).map((k, i) =>  React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDEwLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwgay5sYWJlbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px_0x4f2a("LCBmb250RmFtaWx5OiA=")'Inter',sans-serif_0x4f2a("IH0gfSwgay52YWwpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 6, fontWeight: 500, lineHeight: 1.4 } }, k.sub)))),  React.createElement("div", { className: "g2", style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDE0IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCA=")Pre-Trade Mindset \u2192 Win Rate_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 8, marginTop: 6 } }, Object.entries(emotBefore).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
const positive = [_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="), _0x4f2a("Q29uZmlkZW50"), _0x4f2a("TmV1dHJhbA==")];
const col = positive.includes(e) ? _0x4f2a("dmFyKC0tYWNjKQ==") : wr >= 50 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDMp");
return  React.createElement("div", { key: e, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 10 } },  React.createElement(EmotionChip, { emotion: e }),  React.createElement("div", { style: { flex: 1, height: 5, background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: `${wr}%`, height: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiBjb2wsIGJvcmRlclJhZGl1czogNCwgb3BhY2l0eTogMC44NSB9IH0pKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, fontWeight: 500, color: col, width: 38, textAlign: "right_0x4f2a("IH0gfSwgd3IudG9GaXhlZCgwKSwg")%_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCB3aWR0aDogMzggfSB9LCBkLm4sIA==") trades_0x4f2a("KSk7Cn0pKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { marginTop: 12, padding: "10px 14px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjYgfSB9LCA=")\u{1F4A1} Your best trades happen when you're calm and prepared. If you spot FOMO, Greed, or Anxiety before a trade \u2014 sit on your hands._0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCA=")Top Rule Breaks (by frequency)_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDgsIG1hcmdpblRvcDogNiB9IH0sIE9iamVjdC5lbnRyaWVzKG1pc3Rha2VNYXApLmZpbHRlcigoW21dKSA9PiBtICE9PSA=")None").sort((a, b) => b[1].n - a[1].n).map(([m, d]) => {
const lossRate = d.n ? d.loss / d.n * 100 : 0;
return  React.createElement("div", { key: m },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)_0x4f2a("IH0gfSwgbSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("IH0gfSwgZC5uLCA=") times_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, fontWeight: 400, color: lossRate > 50 ? "var(--red)" : _0x4f2a("dmFyKC0tdDMp") } }, lossRate.toFixed(0), _0x4f2a("JSBlbmRlZCBpbiBsb3Nz")))),  React.createElement("div", { style: { height: 4, background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDMsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: `${d.n / totalTrades * 100}%`, height: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--acc)", borderRadius: 3, opacity: 0.6 } })));
}), Object.keys(mistakeMap).filter((m) => m !== _0x4f2a("Tm9uZQ==")).length === 0 &&  React.createElement("div", { style: { color: "var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTMsIHRleHRBbGlnbjog")center_0x4f2a("LCBwYWRkaW5nOiA=")20px 0_0x4f2a("IH0gfSwg")No mistakes recorded \u{1F389}_0x4f2a("KSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCA=")Trade Quality Timeline (last 20 trades)_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQsIG1hcmdpblRvcDogMTAsIGZsZXhXcmFwOiA=")wrap" } }, [...trades].sort((a, b) => b.entryDate.localeCompare(a.entryDate)).slice(0, 20).reverse().map((t, i) => {
const g = t.grade || "B_0x4f2a("Owpjb25zdCBoYXNNaXN0YWtlID0gdC5taXN0YWtlcyAmJiB0Lm1pc3Rha2VzICE9PSA=")None";
const gradeColor = { "A+": _0x4f2a("dmFyKC0tYWNjRCk="), "A": _0x4f2a("dmFyKC0tYWNjRCk="), "B": _0x4f2a("dmFyKC0tYWNjKQ=="), "C": _0x4f2a("dmFyKC0tdDIp"), "D": _0x4f2a("dmFyKC0tdDMp") }[g] || _0x4f2a("dmFyKC0tdDIp");
return  React.createElement("div", { key: i, title: `${t.symbol} ${t.entryDate} | Grade: ${g} | ${hasMistake ? "\u26A0 _0x4f2a("ICsgdC5taXN0YWtlcyA6IA==")Clean"}`, style: { width: 36, height: 52, borderRadius: 8, border: `1.5px solid ${hasMistake ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), display: _0x4f2a("ZmxleA=="), flexDirection: _0x4f2a("Y29sdW1u"), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), gap: 3, cursor: _0x4f2a("ZGVmYXVsdA==") } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 9, fontWeight: 500, color: gradeColor } }, g),  React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiB0LnByb2ZpdCA+IDAgPyA=")var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyMik=") } }), hasMistake &&  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 7, color: _0x4f2a("dmFyKC0tYWNjKQ==") } }, "!_0x4f2a("KSk7Cn0pKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDE2LCBtYXJnaW5Ub3A6IDEyLCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t3)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")\u25CF Accent = Win_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")\u25CF Gray = Loss_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")! = Mistake_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")Border = mistake flag_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "card_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCA=")Post-Trade Feeling \u2192 Actual Outcome_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(auto-fill,minmax(180px,1fr))", gap: 10, marginTop: 8 } }, Object.entries(emotAfter).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: e, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDExLCBwYWRkaW5nOiA=")12px 14px" } },  React.createElement(EmotionChip, { emotion: e }),  React.createElement("div", { style: { marginTop: 10, display: "flex_0x4f2a("LCBnYXA6IDEyIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA0MDAsIGxldHRlclNwYWNpbmc6IDAuMSwgbWFyZ2luQm90dG9tOiAyIH0gfSwg")Win Rate_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 18, fontWeight: 600, color: wr >= 50 ? "var(--acc)" : _0x4f2a("dmFyKC0tdDIp") } }, wr.toFixed(0), "%_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA0MDAsIGxldHRlclNwYWNpbmc6IDAuMSwgbWFyZ2luQm90dG9tOiAyIH0gfSwg")Count_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 18, fontWeight: 500 } }, d.n))));
}))));
});
function TradeLog({ trades, onAdd, onDelete, onEdit, onUpdateMeta, tradeMeta, onDuplicate, openFormTrigger, onFormOpened, usedConfluences = CONFLUENCES, usedSessions = SESSIONS, usedMistakes = MISTAKES, saveCustomList, customLists, onOpenSettings, capital: propCapital, accounts: allAccounts = [], activeAccId: defaultAccId = "" }) {
const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
const blank = { symbol: "_0x4f2a("LCBlbnRyeURhdGU6ICggbmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksIGVudHJ5VGltZTog")09:00:00_0x4f2a("LCBzaWRlOiA=")Long_0x4f2a("LCBlbnRyeVByaWNlOiA=")_0x4f2a("LCBleGl0UHJpY2U6IA==")_0x4f2a("LCBwbmw6IA==")_0x4f2a("LCBwcm9maXQ6IA==")_0x4f2a("LCByaXNrQW1vdW50OiA=")_0x4f2a("LCBzdG9wTG9zczog")_0x4f2a("LCB0YWtlUHJvZml0OiA=")_0x4f2a("LCBzdGF0dXM6IA==")Closed_0x4f2a("LCBncmFkZTog")_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBzZXNzaW9uOiA=")_0x4f2a("LCBtb2RlbDog")_0x4f2a("LCBlbW90aW9uQmVmb3JlOiA=")_0x4f2a("LCBlbW90aW9uQWZ0ZXI6IA==")_0x4f2a("LCBtaXN0YWtlczog")_0x4f2a("LCBjb25mbHVlbmNlczogW10sIGtleUxldmVsczogW10sIG5vdGVzOiA=")_0x4f2a("LCBhY2NvdW50SWQ6IGRlZmF1bHRBY2NJZCB8fCAoYWxsQWNjb3VudHNbMF0gJiYgYWxsQWNjb3VudHNbMF0uaWQpIHx8IA==")manual" };
const [form, setForm] = useState(blank);
const [open, setOpen] = useState(false);
const [editingId, setEditingId] = useState(null);
const formTopRef = useRef(null);
const [symF, setSymF] = useState("All_0x4f2a("KTsKY29uc3QgW3NpZGVGLCBzZXRTaWRlRl0gPSB1c2VTdGF0ZSg=")All_0x4f2a("KTsKY29uc3QgW2dyYWRlRiwgc2V0R3JhZGVGXSA9IHVzZVN0YXRlKA==")All");
const [expandedId, setExpandedId] = useState(null);
const [screenshots, setScreenshots] = useState({});
const [lightbox, setLightbox] = useState(null);
const [sf, setF] = useState(_0x4f2a("ZW50cnlEYXRl"));
const [sd, setD] = useState(-1);
const isMobile = useMediaQuery(_0x4f2a("KG1heC13aWR0aDo3NjhweCk="));
const [sessF, setSessF] = useState("All_0x4f2a("KTsKY29uc3QgW21vZGVsRiwgc2V0TW9kZWxGXSA9IHVzZVN0YXRlKA==")All");
const [showFilters, setShowFilters] = useState(false);
const [keyLevelModal, setKeyLevelModal] = useState(false);
const [page, setPage] = useState(1);
const [showAll, setShowAll] = useState(false);
const PAGE_SIZE = 10;
useEffect(() => {
if (openFormTrigger) {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId
: (allAccounts[0] ? allAccounts[0].id : _0x4f2a("bWFudWFs"));
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(true);
onFormOpened && onFormOpened();
}
}, [openFormTrigger]);
const syms = ["All_0x4f2a("LCAuLi5uZXcgU2V0KHRyYWRlcy5tYXAoKHQpID0+IHQuc3ltYm9sKSldOwpjb25zdCBzZXNzT3B0cyA9IFs=")All_0x4f2a("LCAuLi51c2VkU2Vzc2lvbnNdOwpjb25zdCBtb2RlbE9wdHMgPSBb")All", ...MODELS];
const inp = { border: "1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")8px 11px_0x4f2a("LCBmb250U2l6ZTogMTIsIG91dGxpbmU6IA==")none_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBjb2xvcjog")var(--text)_0x4f2a("LCB3aWR0aDog")100%_0x4f2a("LCBib3hTaXppbmc6IA==")border-box_0x4f2a("LCBmb250RmFtaWx5OiA=")inherit" };
const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer" });
const toggleSort = (f) => {
if (sf === f) setD((d) => -d);
else {
setF(f);
setD(-1);
}
};
const activeFilters = [symF, sideF, gradeF, sessF, modelF].filter((f) => f !== "All_0x4f2a("KS5sZW5ndGg7CmNvbnN0IHZpc2libGUgPSB1c2VNZW1vKCgpID0+IFsuLi50cmFkZXNdLmZpbHRlcigKKHQpID0+IChzeW1GID09PSA=")All_0x4f2a("IHx8IHQuc3ltYm9sID09PSBzeW1GKSAmJiAoc2lkZUYgPT09IA==")All_0x4f2a("IHx8IHQuc2lkZSA9PT0gc2lkZUYpICYmIChncmFkZUYgPT09IA==")All_0x4f2a("IHx8IHQuZ3JhZGUgPT09IGdyYWRlRikgJiYgKHNlc3NGID09PSA=")All_0x4f2a("IHx8IHQuc2Vzc2lvbiA9PT0gc2Vzc0YpICYmIChtb2RlbEYgPT09IA==")All" || t.model === modelF)
).sort((a, b) => {
let va = a[sf], vb = b[sf];
if (["pnl", _0x4f2a("ZW50cnlQcmljZQ=="), _0x4f2a("ZXhpdFByaWNl"), _0x4f2a("cHJvZml0")].includes(sf)) {
va = +va;
vb = +vb;
}
return va > vb ? sd : va < vb ? -sd : 0;
}), [trades, symF, sideF, gradeF, sessF, modelF, sf, sd]);
useEffect(() => { setPage(1); setShowAll(false); }, [symF, sideF, gradeF, sessF, modelF, sf]);
const [saving, setSaving] = useState(false);
const handleSave = useCallback(() => {
const missing = [];
if (!form.symbol || !form.symbol.trim()) missing.push(_0x4f2a("SW5zdHJ1bWVudA=="));
if (!form.entryDate) missing.push(_0x4f2a("RGF0ZQ=="));
if (!form.side) missing.push(_0x4f2a("RGlyZWN0aW9u"));
if (!form.entryPrice) missing.push(_0x4f2a("RW50cnkgUHJpY2U="));
if (!form.exitPrice && !form.profit) missing.push(_0x4f2a("RXhpdCBQcmljZSBvciBOZXQgUCZM"));
if (missing.length > 0) {
alert(_0x4f2a("UGxlYXNlIGZpbGwgcmVxdWlyZWQgZmllbGRzOiA=") + missing.join(", _0x4f2a("KSk7CmNvbnNvbGUud2Fybig=")[TJ] Trade save blocked — missing:_0x4f2a("LCBtaXNzaW5nKTsKcmV0dXJuOwp9CmlmIChzYXZpbmcpIHJldHVybjsKc2V0U2F2aW5nKHRydWUpOwpjb25zb2xlLmxvZyg=")[TJ] Saving trade:", form);
try {
const profitVal = +form.profit || 0;
const td = __spreadProps(__spreadValues({}, form), {
entryPrice: +form.entryPrice || 0,
exitPrice: +form.exitPrice || 0,
pnl: 0,
profit: profitVal,
riskAmount: +form.riskAmount || 0,
stopLoss: +form.stopLoss || 0,
takeProfit: +form.takeProfit || 0
});
if (editingId) {
onEdit(editingId, td);
} else {
onAdd(__spreadProps(__spreadValues({}, td), { id: Date.now() }));
}
console.log(_0x4f2a("W1RKXSBUcmFkZSBzYXZlZCBzdWNjZXNzZnVsbHku"));
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId : (allAccounts[0] ? allAccounts[0].id : _0x4f2a("bWFudWFs"));
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(false);
} catch(e) {
console.error(_0x4f2a("W1RKXSBTYXZlIGVycm9yOg=="), e);
} finally {
setSaving(false);
}
}, [form, editingId, onAdd, onEdit, saving]);
const startEdit = useCallback((t) => {
setForm({
symbol: t.symbol || "_0x4f2a("LAplbnRyeURhdGU6IHQuZW50cnlEYXRlIHx8IA==")_0x4f2a("LAplbnRyeVRpbWU6IHQuZW50cnlUaW1lIHx8IA==")_0x4f2a("LApzaWRlOiB0LnNpZGUgfHwgZGVyaXZlRGlyKHQpLAplbnRyeVByaWNlOiBTdHJpbmcodC5lbnRyeVByaWNlIHx8IA==")_0x4f2a("KSwKZXhpdFByaWNlOiBTdHJpbmcodC5leGl0UHJpY2UgfHwg")_0x4f2a("KSwKcG5sOiA=")0_0x4f2a("LApwcm9maXQ6IFN0cmluZyh0LnByb2ZpdCB8fCA=")_0x4f2a("KSwKcmlza0Ftb3VudDogU3RyaW5nKHQucmlza0Ftb3VudCB8fCA=")_0x4f2a("KSwKc3RvcExvc3M6IFN0cmluZyh0LnN0b3BMb3NzIHx8IA==")_0x4f2a("KSwKdGFrZVByb2ZpdDogU3RyaW5nKHQudGFrZVByb2ZpdCB8fCA=")_0x4f2a("KSwKc3RhdHVzOiB0LnN0YXR1cyB8fCA=")Closed_0x4f2a("LApncmFkZTogdC5ncmFkZSB8fCA=")_0x4f2a("LApleHBlY3RlZFJSOiB0LmV4cGVjdGVkUlIgfHwg")1:2_0x4f2a("LAphY3R1YWxSUjogdC5hY3R1YWxSUiB8fCA=")_0x4f2a("LApzZXNzaW9uOiB0LnNlc3Npb24gfHwg")_0x4f2a("LAptb2RlbDogdC5tb2RlbCB8fCA=")_0x4f2a("LAplbW90aW9uQmVmb3JlOiB0LmVtb3Rpb25CZWZvcmUgfHwg")_0x4f2a("LAplbW90aW9uQWZ0ZXI6IHQuZW1vdGlvbkFmdGVyIHx8IA==")_0x4f2a("LAptaXN0YWtlczogdC5taXN0YWtlcyB8fCA=")",
confluences: Array.isArray(t.confluences) ? t.confluences : [],
keyLevels: Array.isArray(t.keyLevels) ? t.keyLevels : [],
notes: t.notes || "_0x4f2a("LAphY2NvdW50SWQ6IHQuYWNjb3VudElkIHx8IA==")"
});
setEditingId(t.id);
setOpen(true);
const meta = tradeMeta[t.id] || {};
if (meta.hasScreenshot && !screenshots[t.id]) {
setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: _0x4f2a("X19sb2FkaW5nX18=") }));
SDB.get(t.id).then((data) => {
if (data) setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: data }));
else setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; });
}).catch(() => setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; }));
}
setTimeout(() => { if (formTopRef.current) { formTopRef.current.scrollIntoView({ behavior: _0x4f2a("c21vb3Ro"), block: _0x4f2a("c3RhcnQ=") }); } else { window.scrollTo({ top: 0, behavior: _0x4f2a("c21vb3Ro") }); } }, 60);
}, [tradeMeta, screenshots]);
const handleScreenshot = useCallback(async (id, file) => {
if (!file) return;
try {
const c = await SDB.compress(id, file);
setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [id]: c }));
onUpdateMeta(id, { hasScreenshot: true });
} catch (e) {
console.error(e);
}
}, [onUpdateMeta]);
const handleRemoveShot = useCallback(async (id) => {
try {
await SDB.remove(id);
setScreenshots((s) => {
const n = __spreadValues({}, s);
delete n[id];
return n;
});
onUpdateMeta(id, { hasScreenshot: false });
} catch (e) {
console.error(e);
}
}, [onUpdateMeta]);
useEffect(() => {
if (!expandedId) return;
const meta = tradeMeta[expandedId] || {};
if (meta.hasScreenshot && !screenshots[expandedId]) {
setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [expandedId]: _0x4f2a("X19sb2FkaW5nX18=") }));
SDB.get(expandedId).then((data) => {
if (data) setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [expandedId]: data }));
else setScreenshots((s) => {
const n = __spreadValues({}, s);
delete n[expandedId];
return n;
});
}).catch(() => setScreenshots((s) => {
const n = __spreadValues({}, s);
delete n[expandedId];
return n;
}));
}
}, [expandedId, tradeMeta]);
const toggleConfluence = (c) => {
setForm((f) => __spreadProps(__spreadValues({}, f), { confluences: f.confluences.includes(c) ? f.confluences.filter((x) => x !== c) : [...f.confluences, c] }));
};
const TH = ({ l, f }) =>  React.createElement("th", { onClick: () => toggleSort(f), style: { padding: "10px 12px_0x4f2a("LCB0ZXh0QWxpZ246IA==")left_0x4f2a("LCBmb250U2l6ZTogMTAsIGNvbG9yOiBzZiA9PT0gZiA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tdDMp"), fontWeight: 500, letterSpacing: 0.1, cursor: _0x4f2a("cG9pbnRlcg=="), userSelect: _0x4f2a("bm9uZQ=="), whiteSpace: _0x4f2a("bm93cmFw"), background: _0x4f2a("dmFyKC0tczIp"), borderBottom: `2px solid ${sf === f ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dHJhbnNwYXJlbnQ=")}`, transition: _0x4f2a("YWxsIC4xNXM=") } }, l, " _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { opacity: 0.4 } }, sf === f ? sd > 0 ? "\u2191" : "\u2193" : "\u2195_0x4f2a("KSk7CnJldHVybiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "fade-up" },
React.createElement(InputModal, { open: keyLevelModal, title: "Add Key Level_0x4f2a("LCBzdWJ0aXRsZTog")e.g. 2345.50 resistance · support · POI · liquidity zone_0x4f2a("LCBwbGFjZWhvbGRlcjog")e.g. 2345.50 resistance", onConfirm: (v) => setForm((f) => ({ ...f, keyLevels: [...(f.keyLevels || []), v] })), onClose: () => setKeyLevelModal(false) }),
lightbox &&  React.createElement("div", { onClick: () => setLightbox(null), style: { position: "fixed_0x4f2a("LCBpbnNldDogMCwgYmFja2dyb3VuZDog")rgba(0,0,0,.96)_0x4f2a("LCB6SW5kZXg6IDIxNDc0ODM2NDcsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBwYWRkaW5nOiAyNCwgY3Vyc29yOiA=")zoom-out_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "relative_0x4f2a("LCBtYXhXaWR0aDog")96vw_0x4f2a("LCBtYXhIZWlnaHQ6IA==")94vh_0x4f2a("IH0sIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")img", { src: lightbox, alt: "Chart Screenshot", onLoad: (e) => { e.target.style.opacity="1"; }, onError: (e) => { e.target.style.opacity="1"; }, style: { maxWidth: "96vw_0x4f2a("LCBtYXhIZWlnaHQ6IA==")90vh_0x4f2a("LCB3aWR0aDog")auto_0x4f2a("LCBoZWlnaHQ6IA==")auto_0x4f2a("LCBvYmplY3RGaXQ6IA==")contain_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBib3hTaGFkb3c6IA==")0 40px 120px rgba(0,0,0,.9)_0x4f2a("LCBkaXNwbGF5OiA=")block_0x4f2a("LCBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiA=")opacity .3s ease_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")transparent_0x4f2a("IH0gfSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => setLightbox(null), style: { position: "absolute_0x4f2a("LCB0b3A6IC0xNiwgcmlnaHQ6IC0xNiwgYmFja2dyb3VuZDog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IA==")50%_0x4f2a("LCB3aWR0aDogMzQsIGhlaWdodDogMzQsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBmb250U2l6ZTogMTgsIGZvbnRXZWlnaHQ6IDgwMCwgYm94U2hhZG93OiA=")0 4px 16px rgba(0,0,0,.5)_0x4f2a("LCBjb2xvcjog")#111_0x4f2a("LCBsaW5lSGVpZ2h0OiAxIH0gfSwg")\u00D7_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "absolute_0x4f2a("LCBib3R0b206IC0zMCwgbGVmdDogMCwgcmlnaHQ6IDAsIHRleHRBbGlnbjog")center_0x4f2a("LCBjb2xvcjog")rgba(255,255,255,.5)_0x4f2a("LCBmb250U2l6ZTogMTIgfSB9LCA=")Tap anywhere or \u00D7 to close_0x4f2a("KSkpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "hide-desktop", style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")5px 10px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIGRpc3BsYXk6IA==")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDUgfSB9LCA=")💡 Double-tap any trade row to edit_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEwLCBmbGV4V3JhcDog")wrap_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId
: (allAccounts[0] ? allAccounts[0].id : _0x4f2a("bWFudWFs"));
const freshBlank = __spreadProps(__spreadValues({}, blank), { accountId: defaultAcc });
if (open && !editingId) {
setForm(freshBlank);
setOpen(false);
} else {
setEditingId(null);
setForm(freshBlank);
setOpen((o) => !o);
}
}, style: { background: open ? _0x4f2a("dmFyKC0tczMp") : _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: open ? _0x4f2a("dmFyKC0tdDIp") : _0x4f2a("I2ZmZg=="), border: `1.5px solid ${open ? _0x4f2a("dmFyKC0tYm9yZGVyKQ==") : _0x4f2a("dHJhbnNwYXJlbnQ=")}`, borderRadius: 10, padding: _0x4f2a("OXB4IDE4cHg="), fontWeight: 700, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg=="), boxShadow: open ? _0x4f2a("bm9uZQ==") : _0x4f2a("MCAzcHggMTBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjKSAzNSUsIHRyYW5zcGFyZW50KQ=="), flexShrink: 0, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 6 } }, open && !editingId ? "\u2715 Cancel" : _0x4f2a("KyBMb2cgVHJhZGU=")),  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDUsIGZsZXhXcmFwOiA=")wrap_0x4f2a("IH0gfSwgc3ltcy5tYXAoKHMpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { key: s, onClick: () => setSymF(s), style: { padding: "5px 13px", borderRadius: 20, border: `1.5px solid ${symF === s ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: symF === s ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: symF === s ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: symF === s ? 700 : 500, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg==") } }, s))),  React.createElement("div", { style: { marginLeft: "auto_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDYsIGZsZXhXcmFwOiA=")wrap_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("IH0gfSwgYWN0aXZlRmlsdGVycyA+IDAgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => {
setSymF("All_0x4f2a("KTsKc2V0U2lkZUYo")All_0x4f2a("KTsKc2V0R3JhZGVGKA==")All_0x4f2a("KTsKc2V0U2Vzc0Yo")All_0x4f2a("KTsKc2V0TW9kZWxGKA==")All");
}, style: { padding: "5px 11px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3JkZXI6IA==")1.5px solid var(--rBdr)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--rBg)_0x4f2a("LCBjb2xvcjog")var(--red)_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")\u2715 Clear (_0x4f2a("LCBhY3RpdmVGaWx0ZXJzLCA="))_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => exportCSV(visible, capital), title: "Export to CSV", style: { padding: "5px 13px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--accD)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t2)_0x4f2a("Owp9IH0sIA==")\u2193 CSV_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => exportJSON(visible), title: "Export full backup as JSON (re-importable)", style: { padding: "5px 13px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--green)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--green)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t2)_0x4f2a("Owp9IH0sIA==")\u2193 JSON_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => exportTradePDF(visible, capital), title: "Export to PDF", style: { padding: "5px 13px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--purple)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--purple)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t2)_0x4f2a("Owp9IH0sIA==")\u2193 PDF_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setShowFilters((f) => !f), style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${showFilters ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: showFilters ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: showFilters ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontSize: 12, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 5 } },  React.createElement("svg", { width: "12_0x4f2a("LCBoZWlnaHQ6IA==")12_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2.5_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3_0x4f2a("IH0pKSwg")Filters", activeFilters > 0 ? ` (${activeFilters})` : "_0x4f2a("KSkpLCBzaG93RmlsdGVycyAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")14px 16px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEyLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDEwLCBmbGV4V3JhcDog")wrap_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")flex-start_0x4f2a("LCB3aWR0aDog")100%_0x4f2a("LCBib3hTaXppbmc6IA==")border-box_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { flex: "0 0 auto_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Side_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQgfSB9LCBb")All", _0x4f2a("TG9uZw=="), _0x4f2a("U2hvcnQ=")].map((s) =>  React.createElement(_0x4f2a("YnV0dG9u"), { key: s, onClick: () => setSideF(s), style: { padding: _0x4f2a("NHB4IDEycHg="), borderRadius: 20, border: `1.5px solid ${sideF === s ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: sideF === s ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: sideF === s ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: sideF === s ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, s)))),  React.createElement("div", { style: { flex: "0 0 auto_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Grade_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQgfSB9LCBb")All_0x4f2a("LCAuLi5HUkFERVNdLm1hcCgoZykgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { key: g, onClick: () => setGradeF(g), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${gradeF === g ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: gradeF === g ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: gradeF === g ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: gradeF === g ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, g)))),  React.createElement("div", { style: { flex: "1 1 160px_0x4f2a("LCBtaW5XaWR0aDogMCwgbWF4V2lkdGg6IA==")100%_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Session_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQsIGZsZXhXcmFwOiA=")wrap_0x4f2a("IH0gfSwgc2Vzc09wdHMubWFwKChzKSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { key: s, onClick: () => setSessF(s), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${sessF === s ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: sessF === s ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: sessF === s ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: sessF === s ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, s)))),  React.createElement("div", { style: { flex: "1 1 200px_0x4f2a("LCBtaW5XaWR0aDogMCwgbWF4V2lkdGg6IA==")100%_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Model_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDQsIGZsZXhXcmFwOiA=")wrap_0x4f2a("IH0gfSwgbW9kZWxPcHRzLm1hcCgobSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { key: m, onClick: () => setModelF(m), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${modelF === m ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: modelF === m ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: modelF === m ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: modelF === m ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, m))))), open &&  React.createElement("div", { ref: formTopRef, className: "card scale-in", style: { marginBottom: 16, border: editingId ? "2px solid var(--acc)" : _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik=") } },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwgZWRpdGluZ0lkID8g")\u{1F527} Edit Trade" : "\u{1F4CA} Log New Trade_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDggfSB9LCBhbGxBY2NvdW50cy5sZW5ndGggPiAwICYmICFlZGl0aW5nSWQgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.05em_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("IH0gfSwg")Account_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.accountId || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { accountId: e.target.value })), style: { border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYWNjKQ=="), borderRadius: 8, padding: _0x4f2a("NXB4IDEwcHg="), fontSize: 12, fontWeight: 700, outline: _0x4f2a("bm9uZQ=="), background: _0x4f2a("dmFyKC0tYWNjRik="), color: _0x4f2a("dmFyKC0tYWNjRCk="), cursor: _0x4f2a("cG9pbnRlcg=="), fontFamily: _0x4f2a("aW5oZXJpdA=="), maxWidth: 160 } }, allAccounts.map((a) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: a.id, value: a.id }, a.label)))),  React.createElement(_0x4f2a("YnV0dG9u"), { type: _0x4f2a("YnV0dG9u"), onClick: () => onOpenSettings(_0x4f2a("bGlzdHM=")), style: { fontSize: 10, color: _0x4f2a("dmFyKC0tdDMp"), background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 7, cursor: _0x4f2a("cG9pbnRlcg=="), fontWeight: 600, padding: _0x4f2a("NHB4IDEwcHg=") } }, "\u{1F4DD} Manage Lists_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA2IH0gfSwg")Price & P&L_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr 1fr" : _0x4f2a("cmVwZWF0KDQsMWZyKQ=="), gap: 10 } }, [
[_0x4f2a("SW5zdHJ1bWVudA=="), _0x4f2a("c3ltYm9s"), _0x4f2a("dGV4dA=="), _0x4f2a("ZS5nLiBYQVVVU0Q=")],
[_0x4f2a("RGF0ZQ=="), _0x4f2a("ZW50cnlEYXRl"), _0x4f2a("ZGF0ZQ=="), null],
[_0x4f2a("RW50cnkgVGltZQ=="), _0x4f2a("ZW50cnlUaW1l"), _0x4f2a("dGltZQ=="), null],
[_0x4f2a("RGlyZWN0aW9u"), _0x4f2a("c2lkZQ=="), _0x4f2a("c2VsZWN0"), null]
].map(([l, k, t, ph]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwgbCksIHQgPT09IA==")select_0x4f2a("ID8gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form[k], onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), null, _0x4f2a("TG9uZw==")),  React.createElement(_0x4f2a("b3B0aW9u"), null, _0x4f2a("U2hvcnQ="))) : t === _0x4f2a("ZGF0ZQ==") ?  React.createElement(CustomDatePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: _0x4f2a("MTAwJQ==") } }) : t === _0x4f2a("dGltZQ==") ?  React.createElement(CustomTimePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: _0x4f2a("MTAwJQ==") } }) :  React.createElement(_0x4f2a("aW5wdXQ="), { type: t, step: t === _0x4f2a("bnVtYmVy") ? ".01_0x4f2a("IDogdm9pZCAwLCBwbGFjZWhvbGRlcjogcGggfHwgdm9pZCAwLCB2YWx1ZTogZm9ybVtrXSB8fCA=")", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp })))),  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr 1fr" : _0x4f2a("cmVwZWF0KDMsMWZyKQ=="), gap: 10, marginTop: 10 } }, [
["Entry Price ($)", _0x4f2a("ZW50cnlQcmljZQ=="), _0x4f2a("bnVtYmVy"), _0x4f2a("ZS5nLiAyMTUwLjAw")],
["Exit Price ($)", _0x4f2a("ZXhpdFByaWNl"), _0x4f2a("bnVtYmVy"), _0x4f2a("ZS5nLiAyMTY1LjAwIChvcHRpb25hbCk=")],
["Net P&L ($)", _0x4f2a("cHJvZml0"), _0x4f2a("bnVtYmVy"), _0x4f2a("ZS5nLiA4NS4wMCBvciAtNDIuNTA=")]
].map(([l, k, t, ph]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwgbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")input", { type: t, step: ".01_0x4f2a("LCBwbGFjZWhvbGRlcjogcGggfHwgdm9pZCAwLCB2YWx1ZTogZm9ybVtrXSB8fCA=")", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA2IH0gfSwg")Trade Details_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr 1fr" : _0x4f2a("cmVwZWF0KDQsMWZyKQ=="), gap: 10 } },  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Grade_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.grade, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Grade _0x4f2a("KSwgR1JBREVTLm1hcCgoZykgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")option", { key: g }, g)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Target RR_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.expectedRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: r }, r)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Actual RR_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")input", { placeholder: "e.g. 1:2.5 (Optional)", value: form.actualRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { actualRR: e.target.value })), style: inp })),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Session_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.session, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Session _0x4f2a("KSwgdXNlZFNlc3Npb25zLm1hcCgocykgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")option", { key: s }, s)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Strategy_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.model, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Strategy _0x4f2a("KSwgTU9ERUxTLm1hcCgobSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")option", { key: m }, m)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Risk ($)_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")input", { type: "number_0x4f2a("LCBzdGVwOiA=").01_0x4f2a("LCBwbGFjZWhvbGRlcjog")Risk $ (Optional)_0x4f2a("LCB2YWx1ZTogZm9ybS5yaXNrQW1vdW50IHx8IA==")", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { riskAmount: e.target.value })), style: inp })))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA2IH0gfSwg")Psychology_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr" : _0x4f2a("cmVwZWF0KDMsMWZyKQ=="), gap: 10 } },  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Mindset Before_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.emotionBefore, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionBefore: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Mindset _0x4f2a("KSwgRU1PVElPTlNfQi5tYXAoKGUpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")option", { key: e }, e)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Mindset After_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.emotionAfter, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionAfter: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Mindset _0x4f2a("KSwgRU1PVElPTlNfQS5tYXAoKGUpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")option", { key: e }, e)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Mistake_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: form.mistakes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), { value: "_0x4f2a("IH0sIA==")Mistake _0x4f2a("KSwgdXNlZE1pc3Rha2VzLm1hcCgobSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")option", { key: m }, m)))))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Confluences \u2014 Select All That Apply_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDYgfSB9LCB1c2VkQ29uZmx1ZW5jZXMubWFwKChjKSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { key: c, type: "button", onClick: () => toggleConfluence(c), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${form.confluences.includes(c) ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: form.confluences.includes(c) ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: form.confluences.includes(c) ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontSize: 11, fontWeight: form.confluences.includes(c) ? 700 : 400, cursor: _0x4f2a("cG9pbnRlcg=="), fontFamily: _0x4f2a("aW5oZXJpdA==") } }, form.confluences.includes(c) ? "\u2713 " : "_0x4f2a("LCBjKSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBtYXJnaW5Cb3R0b206IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Key Levels_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { type: "button_0x4f2a("LCBvbkNsaWNrOiAoKSA9PiBvbk9wZW5TZXR0aW5ncyAmJiBvbk9wZW5TZXR0aW5ncyg=")lists"), style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIGN1cnNvcjog")pointer_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHBhZGRpbmc6IA==")3px 8px_0x4f2a("IH0gfSwg")\u2699\uFE0F Presets_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 8 } },
(customLists && customLists.keyLevels && customLists.keyLevels.length > 0) &&  React.createElement("div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.04em_0x4f2a("IH0gfSwg")Saved Presets \u2014 click to toggle_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap", gap: 5 } },
(customLists.keyLevels || []).map((kl, ki) => {
const isSelected = (form.keyLevels || []).includes(kl);
return  React.createElement(_0x4f2a("YnV0dG9u"), {
key: ki, type: _0x4f2a("YnV0dG9u"),
onClick: () => setForm((f) => ({ ...f, keyLevels: isSelected ? (f.keyLevels||[]).filter(x => x!==kl) : [...(f.keyLevels||[]), kl] })),
style: { padding: _0x4f2a("M3B4IDExcHg="), borderRadius: 20, border: _0x4f2a("MS41cHggc29saWQg") + (isSelected ? _0x4f2a("dmFyKC0tYmx1ZSk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")), background: isSelected ? _0x4f2a("dmFyKC0tYkJnKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: isSelected ? _0x4f2a("dmFyKC0tYmx1ZSk=") : _0x4f2a("dmFyKC0tdDIp"), fontSize: 11, fontWeight: isSelected ? 700 : 500, cursor: _0x4f2a("cG9pbnRlcg=="), transition: _0x4f2a("YWxsIC4xNXM="), fontFamily: _0x4f2a("aW5oZXJpdA==") }
}, isSelected ? "\u2713 " : "_0x4f2a("LCBrbCk7Cn0pCikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap", gap: 6 } },
(form.keyLevels || []).length > 0
? (form.keyLevels || []).map((kl, ki) =>  React.createElement("div", { key: ki, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--bBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--bBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 11, fontWeight: 600, padding: "3px 10px_0x4f2a("LCBjb2xvcjog")var(--blue)_0x4f2a("IH0gfSwga2wpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { type: "button", onClick: () => setForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), borderLeft: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJCZHIp"), color: _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 12, padding: _0x4f2a("M3B4IDdweA=="), lineHeight: 1 } }, "\u00D7_0x4f2a("KQopKQo6ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("IH0gfSwg")No key levels selected \u2014 use presets above or add in Settings \u2192 Lists_0x4f2a("KQopCikpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Trade Rationale & Notes_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")textarea", { value: form.notes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), placeholder: _0x4f2a("Tm90ZXMgKE9wdGlvbmFsKSDigJQgZW50cnkgdHJpZ2dlciwgZXhlY3V0aW9uIHF1YWxpdHksIGtleSBsZXNzb25zLi4u"), style: { width: _0x4f2a("MTAwJQ=="), minHeight: 80, border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyKQ=="), borderRadius: 10, padding: _0x4f2a("MTBweCAxMnB4"), fontSize: 12, color: _0x4f2a("dmFyKC0tdGV4dCk="), background: _0x4f2a("dmFyKC0tczIp"), resize: _0x4f2a("dmVydGljYWw="), outline: _0x4f2a("bm9uZQ=="), lineHeight: 1.7, fontFamily: _0x4f2a("aW5oZXJpdA==") } })),
editingId &&  React.createElement("div", { style: { marginBottom: 14 } },
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")span_0x4f2a("LCBudWxsLCA=")\uD83D\uDCF8 Chart Screenshot"),
(tradeMeta[editingId] || {}).hasScreenshot &&  React.createElement("span", { style: { background: "var(--gBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--gBdr)_0x4f2a("LCBjb2xvcjog")var(--green)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiA=")1px 7px_0x4f2a("LCBmb250U2l6ZTogOSwgZm9udFdlaWdodDogNzAwIH0gfSwg")\u2713 Saved_0x4f2a("KQopLApzY3JlZW5zaG90c1tlZGl0aW5nSWRdID09PSA=")__loading___0x4f2a("Cj8gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBoZWlnaHQ6IDEwMCwgYmFja2dyb3VuZDog")var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTIgfSB9LCA=")Loading\u2026_0x4f2a("KQo6IHNjcmVlbnNob3RzW2VkaXRpbmdJZF0KPyAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { position: "relative_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")img", { src: screenshots[editingId], alt: "Chart screenshot", onClick: () => setLightbox(screenshots[editingId]), style: { width: "100%_0x4f2a("LCBtYXhIZWlnaHQ6IDI0MCwgb2JqZWN0Rml0OiA=")contain_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBkaXNwbGF5OiA=")block_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")#111_0x4f2a("LCBjdXJzb3I6IA==")zoom-in_0x4f2a("IH0gfSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "absolute_0x4f2a("LCB0b3A6IDYsIHJpZ2h0OiA2LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDUgfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")label", { style: { background: "rgba(15,23,42,.75)_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXJSYWRpdXM6IDcsIHBhZGRpbmc6IA==")4px 10px_0x4f2a("LCBmb250U2l6ZTogMTAsIGN1cnNvcjog")pointer_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGJhY2tkcm9wRmlsdGVyOiA=")blur(4px)_0x4f2a("IH0gfSwK")\u21BA Replace_0x4f2a("LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")input", { type: "file_0x4f2a("LCBhY2NlcHQ6IA==")image React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => handleRemoveShot(editingId), style: { background: _0x4f2a("cmdiYSgyMjAsMzgsMzgsLjgp"), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 7, padding: _0x4f2a("NHB4IDhweA=="), fontSize: 10, cursor: _0x4f2a("cG9pbnRlcg=="), fontWeight: 600 } }, "\u2715 Remove_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { position: "absolute_0x4f2a("LCBib3R0b206IDYsIGxlZnQ6IDYsIGJhY2tncm91bmQ6IA==")rgba(0,0,0,.6)_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IA==")3px 8px_0x4f2a("LCBmb250U2l6ZTogMTAsIGZvbnRXZWlnaHQ6IDYwMCwgYmFja2Ryb3BGaWx0ZXI6IA==")blur(4px)_0x4f2a("LCBwb2ludGVyRXZlbnRzOiA=")none_0x4f2a("IH0gfSwg")\uD83D\uDD0D Click to zoom_0x4f2a("KQopCjogIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")label", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBnYXA6IDcsIGJvcmRlcjog")2px dashed var(--border2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBtaW5IZWlnaHQ6IDExMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCB0cmFuc2l0aW9uOiA=")all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IA==")var(--accF)"; },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IA==")var(--s2)_0x4f2a("OyB9Cn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 26 } }, "\uD83D\uDCF8_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")Upload chart screenshot_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBvcGFjaXR5OiAwLjcgfSB9LCA=")PNG, JPG, WebP \u2014 stored locally_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { type: "file_0x4f2a("LCBhY2NlcHQ6IA==")image React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: handleSave, disabled: saving, style: { background: saving ? "var(--s3)" : _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: saving ? _0x4f2a("dmFyKC0tdDMp") : _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 10, padding: _0x4f2a("MTBweCAyNnB4"), fontWeight: 700, fontSize: 13, cursor: saving ? _0x4f2a("bm90LWFsbG93ZWQ=") : _0x4f2a("cG9pbnRlcg=="), boxShadow: saving ? _0x4f2a("bm9uZQ==") : _0x4f2a("MCAzcHggMTBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjKSAzNSUsIHRyYW5zcGFyZW50KQ=="), opacity: saving ? 0.7 : 1 } }, saving ? _0x4f2a("U2F2aW5n4oCm") : editingId ? "\u2713 Save Changes" : "\u2713 Log Trade_0x4f2a("KSwgZWRpdGluZ0lkICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId : (allAccounts[0] ? allAccounts[0].id : _0x4f2a("bWFudWFs"));
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(false);
}, style: { background: _0x4f2a("dmFyKC0tczMp"), color: _0x4f2a("dmFyKC0tdDIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 10, padding: _0x4f2a("MTBweCAxOHB4"), fontWeight: 600, fontSize: 13, cursor: _0x4f2a("cG9pbnRlcg==") } }, _0x4f2a("Q2FuY2Vs")))),  React.createElement("div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE2LCBvdmVyZmxvdzog")hidden_0x4f2a("LCBib3hTaGFkb3c6IA==")var(--sh2)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "tlog-table-wrap", style: { overflowX: "auto_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")table", { style: { width: "100%_0x4f2a("LCBib3JkZXJDb2xsYXBzZTog")collapse_0x4f2a("LCBmb250U2l6ZTogMTEuNSwgbWluV2lkdGg6IDY4MCwgdGFibGVMYXlvdXQ6IA==")auto_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")thead_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")tr", { style: { borderBottom: "1px solid var(--border)" } },  React.createElement(TH, { l: "Symbol_0x4f2a("LCBmOiA=")symbol" }),  React.createElement(TH, { l: "Date_0x4f2a("LCBmOiA=")entryDate" }), !isMobile &&  React.createElement(TH, { l: "Time_0x4f2a("LCBmOiA=")entryTime" }),  React.createElement(TH, { l: "Side_0x4f2a("LCBmOiA=")side" }),  React.createElement(TH, { l: "Session_0x4f2a("LCBmOiA=")session" }), !isMobile &&  React.createElement(TH, { l: "Model_0x4f2a("LCBmOiA=")model" }),  React.createElement(TH, { l: "Grade_0x4f2a("LCBmOiA=")grade" }),  React.createElement(TH, { l: "Entry_0x4f2a("LCBmOiA=")entryPrice" }),  React.createElement(TH, { l: "Exit_0x4f2a("LCBmOiA=")exitPrice" }),  React.createElement(TH, { l: "P&L%_0x4f2a("LCBmOiA=")pnl" }),  React.createElement(TH, { l: "Exp.RR_0x4f2a("LCBmOiA=")expectedRR" }), !isMobile &&  React.createElement(TH, { l: "Emotion_0x4f2a("LCBmOiA=")emotionBefore_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")th", { style: { padding: "10px 12px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBmb250U2l6ZTogMTAsIGNvbG9yOiA=")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA1MDAgfSB9LCA=")Actions_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")tbody_0x4f2a("LCBudWxsLCAhdmlzaWJsZS5sZW5ndGggJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")tr_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { colSpan: 13, style: { padding: 40, textAlign: "center_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTMgfSB9LCB0cmFkZXMubGVuZ3RoID09PSAwID8gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")No trades logged yet \u2014 press _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")kbd", { style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIHBhZGRpbmc6IA==")0 5px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRGYW1pbHk6IA==")monospace_0x4f2a("IH0gfSwg")N"), _0x4f2a("IHRvIGxvZyB5b3VyIGZpcnN0IHRyYWRl")) : "No trades match your current filters \u2014 try adjusting or clearing them")), (showAll ? visible : visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)).map((t, i) => {
var _a;
const dir = deriveDir(t);
const meta = tradeMeta[t.id] || {};
const isExp = expandedId === t.id;
const hasMistake = t.mistakes && t.mistakes !== _0x4f2a("Tm9uZQ==");
const rowBg = i % 2 === 0 ? _0x4f2a("dmFyKC0tc3VyZmFjZSk=") : _0x4f2a("dmFyKC0tczIp");
return  React.createElement(React.Fragment, { key: t.id },  React.createElement(
"tr",
{
style: { background: rowBg, borderBottom: isExp ? "none_0x4f2a("IDogYDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpYCwgY3Vyc29yOiA=")pointer_0x4f2a("LCB0cmFuc2l0aW9uOiA=")background .1s" },
onClick: () => setExpandedId(isExp ? null : t.id),
onDoubleClick: () => { setExpandedId(null); startEdit(t); },
title: _0x4f2a("RG91YmxlLXRhcCB0byBlZGl0"),
onMouseEnter: (e) => {
e.currentTarget.style.background = _0x4f2a("dmFyKC0tczMp");
e.currentTarget.style.boxShadow = `inset 3px 0 0 var(--acc)`;
},
onMouseLeave: (e) => {
e.currentTarget.style.background = rowBg;
e.currentTarget.style.boxShadow = _0x4f2a("bm9uZQ==");
}
},
React.createElement("td", { style: { padding: "10px 12px_0x4f2a("LCBmb250V2VpZ2h0OiA3MDAsIG1heFdpZHRoOiAxMTAsIG92ZXJmbG93OiA=")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYsIG92ZXJmbG93OiA=")hidden_0x4f2a("LCB0ZXh0T3ZlcmZsb3c6IA==")ellipsis_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("LCBtYXhXaWR0aDog")100%_0x4f2a("IH0gfSwgdC5zeW1ib2wpKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "10px 12px_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250RmFtaWx5OiA=")JetBrains Mono,monospace_0x4f2a("LCBmb250U2l6ZTogMTEgfSB9LCB0LmVudHJ5RGF0ZSksCiFpc01vYmlsZSAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "10px 12px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250RmFtaWx5OiA=")JetBrains Mono,monospace_0x4f2a("LCBmb250U2l6ZTogMTEgfSB9LCB0LmVudHJ5VGltZSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")td", { style: { padding: "10px 12px" } },  React.createElement(Chip, { color: dir === "Long" ? _0x4f2a("dHJ1ZWdyZWVu") : "red_0x4f2a("LCBzaXplOiA=")sm_0x4f2a("IH0sIGRpciA9PT0g")Long" ? "\u2191" : "\u2193", " _0x4f2a("LCBkaXIpKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "10px 12px" } },  React.createElement(SessionChip, { session: t.session })),
!isMobile &&  React.createElement("td", { style: { padding: "10px 12px_0x4f2a("LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBtYXhXaWR0aDogMTIwLCBvdmVyZmxvdzog")hidden_0x4f2a("LCB0ZXh0T3ZlcmZsb3c6IA==")ellipsis_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("IH0gfSwgKChfYSA9IHQubW9kZWwpID09IG51bGwgPyB2b2lkIDAgOiBfYS5zcGxpdCg=") _0x4f2a("KVswXSkgfHwg")\u2014_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "10px 12px" } },  React.createElement(GradeChip, { grade: t.grade })),
React.createElement("td", { style: { padding: "10px 12px_0x4f2a("LCBmb250RmFtaWx5OiA=")JetBrains Mono,monospace_0x4f2a("LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t2)_0x4f2a("IH0gfSwgZm10UHJpY2UodC5lbnRyeVByaWNlKSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")td", { style: { padding: "10px 12px_0x4f2a("LCBmb250RmFtaWx5OiA=")JetBrains Mono,monospace_0x4f2a("LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t2)_0x4f2a("IH0gfSwgZm10UHJpY2UodC5leGl0UHJpY2UgfHwgMCkpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "10px 12px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { lineHeight: 1.3 } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, t.profit != null && t.profit !== 0 ? (t.profit >= 0 ? "+$" : "-$_0x4f2a("KSArIE1hdGguYWJzKHQucHJvZml0KS50b0ZpeGVkKDIpIDog")\u2014_0x4f2a("KSwgdC5wcm9maXQgIT0gbnVsbCAmJiB0LnByb2ZpdCAhPT0gMCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA1MDAgfSB9LCBjYWxjUG5MKHQucHJvZml0LCBjYXBpdGFsKSA+PSAwID8g")+" : "_0x4f2a("LCBjYWxjUG5MKHQucHJvZml0LCBjYXBpdGFsKS50b0ZpeGVkKDIpLCA=")%_0x4f2a("KSkpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "10px 12px_0x4f2a("LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCB0LmV4cGVjdGVkUlIgfHwg")\u2014_0x4f2a("KSwKIWlzTW9iaWxlICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "10px 12px" } },  React.createElement(EmotionChip, { emotion: t.emotionBefore })),
React.createElement("td", { style: { padding: "6px 8px_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("IH0sIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDMsIGFsaWduSXRlbXM6IA==")center_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { title: "Edit trade", onClick: () => startEdit(t),
style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCB3aWR0aDogMjgsIGhlaWdodDogMjgsIGJvcmRlclJhZGl1czogNywgZGlzcGxheTog")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmbGV4U2hyaW5rOiAwLCB0cmFuc2l0aW9uOiA=")all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.background = "var(--accF)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--acc)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--accD)"; },
onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--border)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t2)_0x4f2a("OyB9Cn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")svg", { width: "13_0x4f2a("LCBoZWlnaHQ6IA==")13_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z_0x4f2a("IH0pCikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { title: "Delete trade", onClick: () => onDelete(t.id),
style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCB3aWR0aDogMjgsIGhlaWdodDogMjgsIGJvcmRlclJhZGl1czogNywgZGlzcGxheTog")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmbGV4U2hyaW5rOiAwLCB0cmFuc2l0aW9uOiA=")all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.background = "var(--rBg)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--red)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--red)"; },
onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--border)_0x4f2a("OyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t2)_0x4f2a("OyB9Cn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")svg", { width: "13_0x4f2a("LCBoZWlnaHQ6IA==")13_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")polyline", { points: "3 6 5 6 21 6_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M10 11v6_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M14 11v6_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2_0x4f2a("IH0pCikKKQopKQopLCBpc0V4cCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")tr", { style: { background: rowBg, borderBottom: `1px solid var(--border)` } },  React.createElement("td", { colSpan: 13, style: { padding: "0 16px 16px_0x4f2a("LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { paddingTop: 14, display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiBpc01vYmlsZSA/IA==")1fr" : _0x4f2a("MWZyIDFmcg=="), gap: 14, minWidth: 0, overflow: _0x4f2a("aGlkZGVu") } },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDEyLCBtaW5XaWR0aDogMCwgb3ZlcmZsb3c6IA==")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Confluences Used_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap", gap: 5 } }, (t.confluences || []).length > 0 ? t.confluences.map((c) =>  React.createElement(Chip, { key: c, color: _0x4f2a("Z29sZA=="), size: "sm_0x4f2a("IH0sIGMpKSA6ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { color: "var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTIgfSB9LCA=")No confluences recorded_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { marginBottom: 8 } },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDUsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Key Levels_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap", gap: 5 } }, (t.keyLevels || []).length > 0 ? (t.keyLevels || []).map((kl, ki) =>  React.createElement(_0x4f2a("c3Bhbg=="), { key: ki, style: { background: _0x4f2a("dmFyKC0tYkJnKQ=="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJCZHIp"), color: _0x4f2a("dmFyKC0tYmx1ZSk="), borderRadius: 20, padding: _0x4f2a("MnB4IDEwcHg="), fontSize: 10.5, fontWeight: 600 } }, kl)) :  React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: _0x4f2a("dmFyKC0tdDMp"), fontSize: 11 } }, _0x4f2a("Tm9uZQ==")))),  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr 1fr_0x4f2a("LCBnYXA6IDggfSB9LCBbWw==")Mindset Before_0x4f2a("LCB0LmVtb3Rpb25CZWZvcmUgfHwg")\u2014_0x4f2a("XSwgWw==")Mindset After_0x4f2a("LCB0LmVtb3Rpb25BZnRlciB8fCA=")\u2014_0x4f2a("XSwgWw==")Mistake_0x4f2a("LCB0Lm1pc3Rha2VzIHx8IA==")None_0x4f2a("XV0ubWFwKChbbCwgdl0pID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: l, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwgbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 12, fontWeight: 600, color: v === "None" ? _0x4f2a("dmFyKC0tZ3JlZW4p") : (v == null ? void 0 : v.includes(_0x4f2a("Rk9NTw=="))) || (v == null ? void 0 : v.includes(_0x4f2a("UmV2ZW5nZQ=="))) || (v == null ? void 0 : v.includes(_0x4f2a("QW5ncnk="))) ? _0x4f2a("dmFyKC0tcmVkKQ==") : _0x4f2a("dmFyKC0tdGV4dCk=") } }, v)))),  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDggfSB9LCBbWw==")Target RR_0x4f2a("LCB0LmV4cGVjdGVkUlIgfHwg")\u2014_0x4f2a("XSwgWw==")Actual RR_0x4f2a("LCB0LmFjdHVhbFJSIHx8IA==")\u2014_0x4f2a("XV0ubWFwKChbbCwgdl0pID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: l, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwgbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text)_0x4f2a("LCBmb250RmFtaWx5OiA=")JetBrains Mono,monospace_0x4f2a("IH0gfSwgdikpKSksICh0LnJpc2tBbW91bnQgPiAwIHx8IHQuc3RvcExvc3MgPiAwKSAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDggfSB9LCB0LnJpc2tBbW91bnQgPiAwICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { background: "var(--rBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--rBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Risk Amount_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 14, fontWeight: 700, color: "var(--red)_0x4f2a("IH0gfSwg")$", t.riskAmount.toFixed(2))), t.riskAmount > 0 && t.profit &&  React.createElement("div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 12px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")R-Multiple_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 14, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ==") } }, (t.profit / t.riskAmount).toFixed(2), "R_0x4f2a("KSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Trade Rationale & Notes_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")textarea", { value: meta.notes || t.notes || "", onChange: (e) => onUpdateMeta(t.id, { notes: e.target.value }), onClick: (e) => e.stopPropagation(), placeholder: "Entry trigger, execution quality, key lessons learned, what you'd do differently...", style: { width: "100%_0x4f2a("LCBtaW5IZWlnaHQ6IDgwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")10px 12px_0x4f2a("LCBmb250U2l6ZTogMTIsIGNvbG9yOiA=")var(--text)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCByZXNpemU6IA==")vertical_0x4f2a("LCBvdXRsaW5lOiA=")none_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjcsIGZvbnRGYW1pbHk6IA==")inherit_0x4f2a("IH0gfSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { minWidth: 0, overflow: "hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9.5, fontWeight: 500, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYgfSB9LCA=")Chart Screenshot_0x4f2a("KSwgc2NyZWVuc2hvdHNbdC5pZF0gPT09IA==")__loading___0x4f2a("ID8gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBoZWlnaHQ6IDEyMCwgYmFja2dyb3VuZDog")var(--surface)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTIgfSB9LCA=")Loading\\u2026_0x4f2a("KSA6IHNjcmVlbnNob3RzW3QuaWRdID8gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "relative_0x4f2a("LCBjdXJzb3I6IA==")zoom-in_0x4f2a("IH0sIG9uQ2xpY2s6ICgpID0+IHNldExpZ2h0Ym94KHNjcmVlbnNob3RzW3QuaWRdKSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")img", { src: screenshots[t.id], alt: "Chart", style: { width: "100%_0x4f2a("LCBtYXhIZWlnaHQ6IDIyMCwgb2JqZWN0Rml0OiA=")contain_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBkaXNwbGF5OiA=")block_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")#111_0x4f2a("IH0gfSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { position: "absolute_0x4f2a("LCBib3R0b206IDgsIGxlZnQ6IDgsIGJhY2tncm91bmQ6IA==")rgba(0,0,0,.65)_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXJSYWRpdXM6IDcsIHBhZGRpbmc6IA==")4px 10px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgYmFja2Ryb3BGaWx0ZXI6IA==")blur(4px)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDUsIHBvaW50ZXJFdmVudHM6IA==")none_0x4f2a("IH0gfSwg")\uD83D\uDD0D Tap to zoom_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "absolute_0x4f2a("LCB0b3A6IDYsIHJpZ2h0OiA2LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDUgfSwgb25DbGljazogKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")label", { style: { background: "rgba(15,23,42,.7)_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDcsIHBhZGRpbmc6IA==")4px 10px_0x4f2a("LCBmb250U2l6ZTogMTAsIGN1cnNvcjog")pointer_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIGJhY2tkcm9wRmlsdGVyOiA=")blur(4px)_0x4f2a("IH0gfSwg")\u21BA Replace_0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { type: "file_0x4f2a("LCBhY2NlcHQ6IA==")image React.createElement(_0x4f2a("YnV0dG9u"), { onClick: (e) => {
e.stopPropagation();
handleRemoveShot(t.id);
}, style: { background: _0x4f2a("cmdiYSgyMjAsMzgsMzgsLjgp"), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 7, padding: _0x4f2a("NHB4IDhweA=="), fontSize: 10, cursor: _0x4f2a("cG9pbnRlcg=="), fontWeight: 600 } }, "\u2715_0x4f2a("KSkpIDogIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")label", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBnYXA6IDcsIGJvcmRlcjog")2px dashed var(--border2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBtaW5IZWlnaHQ6IDEyMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCB0cmFuc2l0aW9uOiA=")all .15s" }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IA==")var(--accF)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border2)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IA==")var(--s2)_0x4f2a("Owp9IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 24 } }, "\u{1F4F8}_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")Upload chart screenshot_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")input", { type: "file_0x4f2a("LCBhY2NlcHQ6IA==")image React.createElement("div", { style: { padding: "10px 16px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDggfSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDgsIGZsZXhXcmFwOiA=")wrap_0x4f2a("IH0gfSwgICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t3)_0x4f2a("IH0gfSwgc2hvd0FsbCA/IHZpc2libGUubGVuZ3RoIDogTWF0aC5taW4ocGFnZSAqIFBBR0VfU0laRSwgdmlzaWJsZS5sZW5ndGgpLCA=") of _0x4f2a("LCB2aXNpYmxlLmxlbmd0aCwg") trades_0x4f2a("KSwgICFzaG93QWxsICYmIHZpc2libGUubGVuZ3RoID4gUEFHRV9TSVpFICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDMgfSB9LCAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setPage(p => Math.max(1, p - 1)), disabled: page === 1, style: { background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 7, width: 26, height: 26, cursor: page === 1 ? _0x4f2a("ZGVmYXVsdA==") : _0x4f2a("cG9pbnRlcg=="), fontSize: 14, color: page === 1 ? _0x4f2a("dmFyKC0tdDMp") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), opacity: page === 1 ? 0.4 : 1 } }, "\u2039_0x4f2a("KSwgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t2)_0x4f2a("LCBwYWRkaW5nOiA=")0 6px_0x4f2a("LCBtaW5XaWR0aDogNzAsIHRleHRBbGlnbjog")center_0x4f2a("IH0gfSwg")Page _0x4f2a("LCBwYWdlLCA=") / _0x4f2a("LCBNYXRoLmNlaWwodmlzaWJsZS5sZW5ndGggLyBQQUdFX1NJWkUpKSwgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setPage(p => Math.min(Math.ceil(visible.length / PAGE_SIZE), p + 1)), disabled: page >= Math.ceil(visible.length / PAGE_SIZE), style: { background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 7, width: 26, height: 26, cursor: page >= Math.ceil(visible.length / PAGE_SIZE) ? _0x4f2a("ZGVmYXVsdA==") : _0x4f2a("cG9pbnRlcg=="), fontSize: 14, color: page >= Math.ceil(visible.length / PAGE_SIZE) ? _0x4f2a("dmFyKC0tdDMp") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: 700, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), opacity: page >= Math.ceil(visible.length / PAGE_SIZE) ? 0.4 : 1 } }, "\u203a_0x4f2a("KSAgKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwIH0gfSwgICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("IH0gfSwg")P&L: _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")strong", { style: { color: visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100>=0?"var(--accD)":_0x4f2a("dmFyKC0tdDIp") } }, fmtPct(visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100))),   React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => { setShowAll(v => !v); setPage(1); }, style: { fontSize: 11, fontWeight: 700, color: showAll ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), background: showAll ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tczMp"), border: `1px solid ${showAll ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgNDAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 8, padding: _0x4f2a("NHB4IDEycHg="), cursor: _0x4f2a("cG9pbnRlcg=="), whiteSpace: _0x4f2a("bm93cmFw") } }, showAll ? _0x4f2a("UGFnaW5hdGU=") : _0x4f2a("U2VlIEFsbA==")))))
);
}
const CalendarView = memo(function CalendarView2({ trades, onDayClick, capital: propCapital }) {
const [month, setMonth] = useState(( new Date()).getMonth());
const [year, setYear] = useState(( new Date()).getFullYear());
const [mode, setMode] = useState("usd_0x4f2a("KTsKY29uc3QgW2NhbFZpZXcsIHNldENhbFZpZXddID0gdXNlU3RhdGUo")monthly");
const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
const MN = [_0x4f2a("SmFudWFyeQ=="), _0x4f2a("RmVicnVhcnk="), _0x4f2a("TWFyY2g="), _0x4f2a("QXByaWw="), "May", _0x4f2a("SnVuZQ=="), _0x4f2a("SnVseQ=="), _0x4f2a("QXVndXN0"), _0x4f2a("U2VwdGVtYmVy"), _0x4f2a("T2N0b2Jlcg=="), _0x4f2a("Tm92ZW1iZXI="), _0x4f2a("RGVjZW1iZXI=")];
const MNS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec_0x4f2a("XTsKY29uc3QgRE9XID0gWw==")Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat_0x4f2a("XTsKY29uc3QgRE9XUyA9IFs=")S","M","T","W","T","F","S"];
const byDate = {};
trades.forEach((t) => {
if (!byDate[t.entryDate]) byDate[t.entryDate] = { profit: 0, count: 0, trades: [] };
byDate[t.entryDate].profit += t.profit || 0;
byDate[t.entryDate].count++;
byDate[t.entryDate].trades.push(t);
});
Object.keys(byDate).forEach((d) => {
byDate[d].pnl = calcPnL(byDate[d].profit, capital);
});
const first = new Date(year, month, 1).getDay();
const days = new Date(year, month + 1, 0).getDate();
const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
const dk = (d) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const mEntries = Object.entries(byDate).filter(([d]) => {
const [y, m] = d.split("-").map(Number);
return y === year && m - 1 === month;
});
const mProfit = mEntries.reduce((s, [, v]) => s + v.profit, 0);
const mPnl = calcPnL(mProfit, capital);
const mCount = mEntries.reduce((s, [, v]) => s + v.count, 0);
const maxP = Math.max(...Object.values(byDate).map((d) => Math.abs(d.profit)), 1);
const weeks = [];
for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
const weekStats = weeks.map((w) => {
const p = w.filter(Boolean).reduce((s, d) => {
var _a;
return s + (((_a = byDate[dk(d)]) == null ? void 0 : _a.profit) || 0);
}, 0);
return { profit: p, pnl: calcPnL(p, capital), count: w.filter(Boolean).reduce((s, d) => {
var _a;
return s + (((_a = byDate[dk(d)]) == null ? void 0 : _a.count) || 0);
}, 0) };
});
const fmt = (p, pct) => mode === "pct" ? fmtPct(pct, 1) : fmtUSD(p);
const todayStr = ( new Date()).toISOString().slice(0, 10);
const YearlyCalendar = () => {
const yEntries = Object.entries(byDate).filter(([d]) => d.startsWith(String(year)+"-"));
const yProfit = yEntries.reduce((s,[,v])=>s+v.profit,0);
const yPnl = calcPnL(yProfit, capital);
const yCount = yEntries.reduce((s,[,v])=>s+v.count,0);
const maxPY = Math.max(...Object.values(byDate).map(d=>Math.abs(d.profit)),1);
return  React.createElement("div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDIwLCBmbGV4V3JhcDog")wrap_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: ()=>setYear(y=>y-1), style: { background:"var(--surface)_0x4f2a("LCBib3JkZXI6")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTAsIHdpZHRoOjM0LCBoZWlnaHQ6MzQsIGN1cnNvcjo=")pointer_0x4f2a("LCBmb250U2l6ZToxOCwgZGlzcGxheTo=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOg==")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDo=")center_0x4f2a("LCBjb2xvcjo=")var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)_0x4f2a("O2UuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvcj0=")var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)_0x4f2a("O2UuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvcj0=")var(--t2)_0x4f2a("O30gfSwg")\u2039_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")select", { value: year, onChange: e=>setYear(+e.target.value), style: { border:"1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTAsIHBhZGRpbmc6")6px 14px_0x4f2a("LCBmb250U2l6ZToxNSwgZm9udFdlaWdodDo4MDAsIGJhY2tncm91bmQ6")var(--surface)_0x4f2a("LCBjdXJzb3I6")pointer_0x4f2a("LCBvdXRsaW5lOg==")none_0x4f2a("LCBjb2xvcjo=")var(--text)_0x4f2a("IH0gfSwgWzIwMjMsMjAyNCwyMDI1LDIwMjYsMjAyN10ubWFwKHk9PiBSZWFjdC5jcmVhdGVFbGVtZW50KA==")option",{key:y},y))),
React.createElement("button", { onClick: ()=>setYear(y=>y+1), style: { background:"var(--surface)_0x4f2a("LCBib3JkZXI6")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTAsIHdpZHRoOjM0LCBoZWlnaHQ6MzQsIGN1cnNvcjo=")pointer_0x4f2a("LCBmb250U2l6ZToxOCwgZGlzcGxheTo=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOg==")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDo=")center_0x4f2a("LCBjb2xvcjo=")var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)_0x4f2a("O2UuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvcj0=")var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)_0x4f2a("O2UuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvcj0=")var(--t2)_0x4f2a("O30gfSwg")\u203A_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display:"flex_0x4f2a("LCBib3JkZXI6")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTAsIG92ZXJmbG93Og==")hidden_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick:()=>setMode("pct"), style:{ padding:"6px 18px_0x4f2a("LCBmb250U2l6ZToxMiwgZm9udFdlaWdodDo3MDAsIGJhY2tncm91bmQ6bW9kZT09PQ==")pct"?_0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="):_0x4f2a("dmFyKC0tc3VyZmFjZSk="), color:mode==="pct"?_0x4f2a("I2ZmZg=="):_0x4f2a("dmFyKC0tdDMp"), border:_0x4f2a("bm9uZQ=="), cursor:_0x4f2a("cG9pbnRlcg==") } }, "%_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick:()=>setMode("usd"), style:{ padding:"6px 18px_0x4f2a("LCBmb250U2l6ZToxMiwgZm9udFdlaWdodDo3MDAsIGJhY2tncm91bmQ6bW9kZT09PQ==")usd"?_0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="):_0x4f2a("dmFyKC0tc3VyZmFjZSk="), color:mode==="usd"?_0x4f2a("I2ZmZg=="):_0x4f2a("dmFyKC0tdDMp"), border:_0x4f2a("bm9uZQ=="), cursor:_0x4f2a("cG9pbnRlcg==") } }, "$_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style:{ marginLeft:"auto_0x4f2a("LCBkaXNwbGF5Og==")flex_0x4f2a("LCBnYXA6OCwgYWxpZ25JdGVtczo=")center" } },
yCount>0 &&  React.createElement(Chip,{color:"gray_0x4f2a("fSx5Q291bnQs") trades_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style:{ background:yProfit>=0?"var(--accF)":_0x4f2a("dmFyKC0tczMp"), border:`1px solid ${yProfit>=0?_0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk="):_0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius:9, padding:_0x4f2a("NXB4IDE0cHg=") } },
React.createElement(_0x4f2a("c3Bhbg=="), { style:{ fontSize:13, fontWeight:700, color:yProfit>=0?_0x4f2a("dmFyKC0tYWNjRCk="):_0x4f2a("dmFyKC0tdDIp") } }, _0x4f2a("WWVhcjog"), fmt(yProfit,yPnl))
)
)
),
React.createElement("div", { style:{ display:"grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOg==")repeat(4,1fr)", gap:16 } },
Array.from({length:12},(_,mi)=>{
const mKey = `${year}-${String(mi+1).padStart(2,"0")}`;
const mDays = new Date(year,mi+1,0).getDate();
const mFirst = new Date(year,mi,1).getDay();
const mCells = [...Array(mFirst).fill(null),...Array.from({length:mDays},(_,i)=>i+1)];
const mWeeks = [];
for(let i=0;i<mCells.length;i+=7) mWeeks.push(mCells.slice(i,i+7));
const mEntries2 = Object.entries(byDate).filter(([d])=>d.startsWith(mKey+"-"));
const mP = mEntries2.reduce((s,[,v])=>s+v.profit,0);
const mPct2 = calcPnL(mP,capital);
const mC = mEntries2.reduce((s,[,v])=>s+v.count,0);
const dk2 = (d)=>`${year}-${String(mi+1).padStart(2,"0")}-${String(d).padStart(2,"0_0x4f2a("KX1gOwpyZXR1cm4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { key:mi, style:{ background:"var(--surface)_0x4f2a("LCBib3JkZXI6")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTQsIHBhZGRpbmc6")14px 12px_0x4f2a("LCBkaXNwbGF5Og==")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOg==")column_0x4f2a("LCBnYXA6OCB9IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style:{ display:"flex_0x4f2a("LCBhbGlnbkl0ZW1zOg==")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDo=")space-between_0x4f2a("LCBtYXJnaW5Cb3R0b206MiB9IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style:{ fontSize:12, fontWeight:800, color:"var(--text)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOg==")-.01em_0x4f2a("IH0gfSwgTU5TW21pXSksCm1DPjAgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style:{ fontSize:11, fontWeight:700, color:mP>=0?"var(--accD)":_0x4f2a("dmFyKC0tdDIp"), background:mP>=0?_0x4f2a("dmFyKC0tYWNjRik="):_0x4f2a("dmFyKC0tczMp"), border:`1px solid ${mP>=0?_0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMjUlLCB0cmFuc3BhcmVudCk="):_0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius:7, padding:_0x4f2a("MnB4IDhweA==") } }, fmt(mP,mPct2))
),
React.createElement("div", { style:{ display:"grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOg==")repeat(7,1fr)_0x4f2a("LCBnYXA6MS41LCBtYXJnaW5Cb3R0b206MiB9IH0sCkRPV1MubWFwKChkLGkpPT4gUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{key:i,style:{textAlign:"center_0x4f2a("LGZvbnRTaXplOjcuNSxjb2xvcjo=")var(--t3)_0x4f2a("LGZvbnRXZWlnaHQ6NjAwLHBhZGRpbmc6")1px 0_0x4f2a("fX0sZCkpCiksCm1XZWVrcy5tYXAoKHdlZWssd2kpPT4gUmVhY3QuY3JlYXRlRWxlbWVudCg=")div",{key:wi,style:{display:"grid_0x4f2a("LGdyaWRUZW1wbGF0ZUNvbHVtbnM6")repeat(7,1fr)",gap:1.5}},
[...Array(7)].map((_,ci)=>{
const d=week[ci];
if(!d) return  React.createElement("div",{key:`e${ci}`,style:{borderRadius:4,minHeight:20}});
const dKey=dk2(d);
const data=byDate[dKey];
const p=(data?.profit)||0;
const pct=(data?.pnl)||0;
const has=!!data;
const isToday=dKey===todayStr;
const intensity=has?Math.min(1,Math.abs(p)/maxPY*2):0;
const bg=!has?_0x4f2a("dmFyKC0tc3VyZmFjZSk="):p>=0?`color-mix(in srgb, var(--acc) ${Math.round((0.1+intensity*0.28)*100)}%, var(--surface))`:`rgba(148,163,184,${0.12+intensity*0.22})`;
const bdr=!has?_0x4f2a("dmFyKC0tYm9yZGVyKQ=="):p>=0?_0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk="):_0x4f2a("dmFyKC0tYm9yZGVyMik=");
return  React.createElement("div",{
key:dKey,
title:`${dKey}${has?` · ${data.count} trade${data.count!==1?"s":""} · ${fmt(p,pct)}`:""}`,
onClick:()=>{ has && onDayClick(dKey); },
style:{ background:bg, border:`1px solid ${isToday?_0x4f2a("dmFyKC0taW5kaWdvKQ=="):bdr}`, borderRadius:4, minHeight:20, cursor:has?_0x4f2a("cG9pbnRlcg=="):_0x4f2a("ZGVmYXVsdA=="), transition:_0x4f2a("dHJhbnNmb3JtIC4xcyxib3gtc2hhZG93IC4xcw=="), boxShadow:isToday?_0x4f2a("MCAwIDAgMXB4IHZhcigtLWluZGlnbyk="):_0x4f2a("bm9uZQ=="), display:_0x4f2a("ZmxleA=="), alignItems:_0x4f2a("Y2VudGVy"), justifyContent:_0x4f2a("Y2VudGVy") },
onMouseEnter:e=>{ if(has){e.currentTarget.style.transform=_0x4f2a("c2NhbGUoMS4xNSk=");e.currentTarget.style.boxShadow=_0x4f2a("dmFyKC0tc2gyKQ==");e.currentTarget.style.zIndex="2";} },
onMouseLeave:e=>{ e.currentTarget.style.transform="_0x4f2a("O2UuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3c9aXNUb2RheT8=")0 0 0 1px var(--indigo)":_0x4f2a("bm9uZQ==");e.currentTarget.style.zIndex="_0x4f2a("OyB9Cn0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")span",{style:{fontSize:7,fontWeight:isToday?900:600,color:isToday?"var(--indigo)_0x4f2a("Omhhcz9wPj0wPw==")var(--accD)":_0x4f2a("dmFyKC0tdDIp"):_0x4f2a("dmFyKC0tdDMp"),lineHeight:1}},d)
);
})
))
);
})
)
);
};
return  React.createElement("div", { className: "fade-up_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display:"flex_0x4f2a("LCBhbGlnbkl0ZW1zOg==")center_0x4f2a("LCBnYXA6OCwgbWFyZ2luQm90dG9tOjIwIH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style:{ display:"flex_0x4f2a("LCBib3JkZXI6")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6MTAsIG92ZXJmbG93Og==")hidden_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick:()=>setCalView("monthly"), style:{ padding:"7px 18px_0x4f2a("LCBmb250U2l6ZToxMiwgZm9udFdlaWdodDo3MDAsIGJhY2tncm91bmQ6Y2FsVmlldz09PQ==")monthly"?_0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="):_0x4f2a("dmFyKC0tc3VyZmFjZSk="), color:calView===_0x4f2a("bW9udGhseQ==")?_0x4f2a("I2ZmZg=="):_0x4f2a("dmFyKC0tdDMp"), border:_0x4f2a("bm9uZQ=="), cursor:_0x4f2a("cG9pbnRlcg=="), whiteSpace:_0x4f2a("bm93cmFw") } }, _0x4f2a("TW9udGhseQ==")),
React.createElement(_0x4f2a("YnV0dG9u"), { onClick:()=>setCalView(_0x4f2a("eWVhcmx5")), style:{ padding:_0x4f2a("N3B4IDE4cHg="), fontSize:12, fontWeight:700, background:calView===_0x4f2a("eWVhcmx5")?_0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="):_0x4f2a("dmFyKC0tc3VyZmFjZSk="), color:calView===_0x4f2a("eWVhcmx5")?_0x4f2a("I2ZmZg=="):_0x4f2a("dmFyKC0tdDMp"), border:_0x4f2a("bm9uZQ=="), cursor:_0x4f2a("cG9pbnRlcg=="), whiteSpace:_0x4f2a("bm93cmFw") } }, _0x4f2a("WWVhcmx5"))
)
),
calView===_0x4f2a("eWVhcmx5") &&  React.createElement(YearlyCalendar, null),
calView===_0x4f2a("bW9udGhseQ==") &&  React.createElement("div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDIwLCBmbGV4V3JhcDog")wrap_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => {
if (month === 0) {
setMonth(11);
setYear((y) => y - 1);
} else setMonth((m) => m - 1);
}, style: { background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 10, width: 34, height: 34, cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 18, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), color: _0x4f2a("dmFyKC0tdDIp") }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjKQ==");
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDIp");
} }, "\u2039_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: month, onChange: (e) => setMonth(+e.target.value), style: { border: "1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")6px 12px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgYmFja2dyb3VuZDog")var(--surface)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBvdXRsaW5lOiA=")none_0x4f2a("LCBjb2xvcjog")var(--text)_0x4f2a("IH0gfSwgTU4ubWFwKChtLCBpKSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")option", { key: i, value: i }, m))),  React.createElement("select", { value: year, onChange: (e) => setYear(+e.target.value), style: { border: "1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")6px 12px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgYmFja2dyb3VuZDog")var(--surface)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBvdXRsaW5lOiA=")none_0x4f2a("LCBjb2xvcjog")var(--text)_0x4f2a("IH0gfSwgWzIwMjQsIDIwMjUsIDIwMjYsIDIwMjddLm1hcCgoeSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")option", { key: y }, y))),  React.createElement("button", { onClick: () => {
if (month === 11) {
setMonth(0);
setYear((y) => y + 1);
} else setMonth((m) => m + 1);
}, style: { background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 10, width: 34, height: 34, cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 18, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), color: _0x4f2a("dmFyKC0tdDIp") }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjKQ==");
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDIp");
} }, "\u203A_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setMode("pct"), style: { padding: "6px 18px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgYmFja2dyb3VuZDogbW9kZSA9PT0g")pct" ? _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: mode === "pct" ? _0x4f2a("I2ZmZg==") : _0x4f2a("dmFyKC0tdDMp"), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg==") } }, "%_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setMode("usd"), style: { padding: "6px 18px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgYmFja2dyb3VuZDogbW9kZSA9PT0g")usd" ? _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: mode === "usd" ? _0x4f2a("I2ZmZg==") : _0x4f2a("dmFyKC0tdDMp"), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg==") } }, "$_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { marginLeft: "auto_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDgsIGFsaWduSXRlbXM6IA==")center" } }, mCount > 0 &&  React.createElement(Chip, { color: "gray_0x4f2a("IH0sIG1Db3VudCwg") trades_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { background: mProfit >= 0 ? "var(--accF)" : _0x4f2a("dmFyKC0tczMp"), border: `1px solid ${mProfit >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 9, padding: _0x4f2a("NXB4IDE0cHg=") } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 13, fontWeight: 700, color: mProfit >= 0 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp") } }, _0x4f2a("VG90YWw6IA=="), fmt(mProfit, mPnl))))),  React.createElement("div", { style: { overflowX: "auto_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { minWidth: 600 } },  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(7,1fr) 90px_0x4f2a("LCBnYXA6IDQsIG1hcmdpbkJvdHRvbTogNCB9IH0sIERPVy5tYXAoKGQpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: d, style: { textAlign: "center_0x4f2a("LCBmb250U2l6ZTogOS41LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA0MDAsIHBhZGRpbmc6IA==")5px 0_0x4f2a("IH0gfSwgZCkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { textAlign: "center_0x4f2a("LCBmb250U2l6ZTogOS41LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA0MDAsIHBhZGRpbmc6IA==")5px 0_0x4f2a("IH0gfSwg")WEEK_0x4f2a("KSksIHdlZWtzLm1hcCgod2Vlaywgd2kpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: wi, style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(7,1fr) 90px", gap: 4, marginBottom: 4 } }, [...Array(7)].map((_, ci) => {
const d = week[ci];
if (!d) return  React.createElement("div", { key: `e${ci}`, style: { borderRadius: 12, minHeight: 80 } });
const dateKey = dk(d);
const data = byDate[dateKey];
const p = (data == null ? void 0 : data.profit) || 0;
const pct = (data == null ? void 0 : data.pnl) || 0;
const has = !!data;
const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
const bg = !has ? _0x4f2a("dmFyKC0tc3VyZmFjZSk=") : p >= 0 ? `color-mix(in srgb, var(--acc) ${Math.round((0.07 + intensity * 0.22) * 100)}%, var(--surface))` : `rgba(148,163,184,${0.1 + intensity * 0.2})`;
const bdr = !has ? _0x4f2a("dmFyKC0tYm9yZGVyKQ==") : p >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyMik=");
const isToday = dateKey === todayStr;
return  React.createElement(
"div",
{
key: dateKey,
className: "cal-cell",
onClick: (e) => { e.currentTarget.blur(); has && onDayClick(dateKey); }, tabIndex: -1,
style: { background: bg, border: `1.5px solid ${isToday ? _0x4f2a("dmFyKC0taW5kaWdvKQ==") : bdr}`, borderRadius: 12, padding: _0x4f2a("OHB4IDEwcHg="), minHeight: 80, cursor: has ? _0x4f2a("cG9pbnRlcg==") : _0x4f2a("ZGVmYXVsdA=="), transition: _0x4f2a("dHJhbnNmb3JtIC4xMnMsYm94LXNoYWRvdyAuMTJz"), boxShadow: isToday ? _0x4f2a("MCAwIDAgMXB4IHZhcigtLWluZGlnbyk=") : _0x4f2a("bm9uZQ==") },
onMouseEnter: (e) => {
if (has) {
e.currentTarget.style.transform = _0x4f2a("dHJhbnNsYXRlWSgtMnB4KQ==");
e.currentTarget.style.boxShadow = _0x4f2a("dmFyKC0tc2gyKQ==");
}
},
onMouseLeave: (e) => {
e.currentTarget.style.transform = "_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gaXNUb2RheSA/IA==")0 0 0 1px var(--indigo)" : _0x4f2a("bm9uZQ==");
}
},
React.createElement("div", { className: "cal-day-num", style: { fontSize: 11, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : _0x4f2a("dmFyKC0tdDMp"), marginBottom: 4, textShadow: _0x4f2a("bm9uZQ==") } }, d),
has &&  React.createElement(React.Fragment, null,  React.createElement("div", { className: "cal-day-pnl", style: { fontSize: 13, fontWeight: 700, color: p >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), lineHeight: 1.1, letterSpacing: _0x4f2a("LS41cHg="), textShadow: _0x4f2a("bm9uZQ==") } }, fmt(p, pct)),  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDQsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dFNoYWRvdzog")none_0x4f2a("IH0gfSwgZGF0YS5jb3VudCwg") _0x4f2a("LCBkYXRhLmNvdW50ID09PSAxID8g")trade" : _0x4f2a("dHJhZGVz")))
);
}),  React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : _0x4f2a("cmdiYSgxNDgsMTYzLDE4NCwuMTUp") : _0x4f2a("dmFyKC0tczIp"), border: `1.5px solid ${weekStats[wi].count ? weekStats[wi].profit >= 0 ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMzAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dmFyKC0tYm9yZGVyMik=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 12, padding: "8px_0x4f2a("LCBtaW5IZWlnaHQ6IDgwLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 3 } }, weekStats[wi].count > 0 &&  React.createElement(React.Fragment, null,  React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: weekStats[wi].profit >= 0 ? "var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), textAlign: _0x4f2a("Y2VudGVy") } }, fmt(weekStats[wi].profit, weekStats[wi].pnl)),  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("IH0gfSwgd2Vla1N0YXRzW3dpXS5jb3VudCwg") trades")))))))));
});
function DayPopup({ date, trades, onClose, ic, capital: propCapital, onEdit, editingId, setEditingId, onOpenSettings, usedSessions = SESSIONS, usedMistakes = MISTAKES }) {
const capital = (propCapital && propCapital > 0) ? propCapital : ((ic && ic > 0) ? ic : 5000);
const dayTrades = trades.filter((t) => t.entryDate === date).sort((a, b) => a.entryTime.localeCompare(b.entryTime));
const [editForm, setEditForm] = useState(null);
const [saved, setSaved] = useState(null);
const [symFilter, setSymFilter] = useState("All_0x4f2a("KTsKY29uc3QgW2dyYWRlRmlsdGVyLCBzZXRHcmFkZUZpbHRlcl0gPSB1c2VTdGF0ZSg=")All_0x4f2a("KTsKY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKA==")entryTime");
const [sortDir, setSortDir] = useState(1);
const inp = { border: "1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")6px 9px_0x4f2a("LCBmb250U2l6ZTogMTIsIG91dGxpbmU6IA==")none_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBjb2xvcjog")var(--text)_0x4f2a("LCB3aWR0aDog")100%_0x4f2a("LCBib3hTaXppbmc6IA==")border-box_0x4f2a("LCBmb250RmFtaWx5OiA=")inherit" };
const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer_0x4f2a("IH0pOwpjb25zdCBzeW1zID0gWw==")All", ...new Set(dayTrades.map((t) => t.symbol))];
const visible = useMemo(
() => [...dayTrades].filter((t) => (symFilter === "All_0x4f2a("IHx8IHQuc3ltYm9sID09PSBzeW1GaWx0ZXIpICYmIChncmFkZUZpbHRlciA9PT0g")All" || t.grade === gradeFilter)).sort((a, b) => {
let va = a[sortBy], vb = b[sortBy];
if (["pnl", _0x4f2a("cHJvZml0")].includes(sortBy)) {
va = +va;
vb = +vb;
}
return va > vb ? sortDir : va < vb ? -sortDir : 0;
}),
[dayTrades, symFilter, gradeFilter, sortBy, sortDir]
);
const dayProfit = dayTrades.reduce((s, t) => s + (t.profit || 0), 0);
const dayPct = calcPnL(dayProfit, capital);
const wins = dayTrades.filter((t) => t.profit > 0).length;
const wr = dayTrades.length ? Math.round(wins / dayTrades.length * 100) : 0;
const [yr, mo, dy] = date.split("-_0x4f2a("KS5tYXAoTnVtYmVyKTsKY29uc3QgTU4gPSBb")January", _0x4f2a("RmVicnVhcnk="), _0x4f2a("TWFyY2g="), _0x4f2a("QXByaWw="), "May", _0x4f2a("SnVuZQ=="), _0x4f2a("SnVseQ=="), _0x4f2a("QXVndXN0"), _0x4f2a("U2VwdGVtYmVy"), _0x4f2a("T2N0b2Jlcg=="), _0x4f2a("Tm92ZW1iZXI="), _0x4f2a("RGVjZW1iZXI=")];
const prettyDate = `${MN[mo - 1]} ${dy}, ${yr}`;
const startEdit = (t) => {
setEditingId(t.id);
setEditForm({ symbol: t.symbol, side: t.side || deriveDir(t), entryPrice: String(t.entryPrice || "_0x4f2a("KSwgZXhpdFByaWNlOiBTdHJpbmcodC5leGl0UHJpY2UgfHwg")_0x4f2a("KSwgcG5sOiA=")0_0x4f2a("LCBwcm9maXQ6IFN0cmluZyh0LnByb2ZpdCB8fCA=")_0x4f2a("KSwgc2Vzc2lvbjogdC5zZXNzaW9uIHx8IA==")London Open_0x4f2a("LCBtb2RlbDogdC5tb2RlbCB8fCA=")In Session_0x4f2a("LCBncmFkZTogdC5ncmFkZSB8fCA=")A_0x4f2a("LCBleHBlY3RlZFJSOiB0LmV4cGVjdGVkUlIgfHwg")1:2_0x4f2a("LCBhY3R1YWxSUjogdC5hY3R1YWxSUiB8fCA=")_0x4f2a("LCBtaXN0YWtlczogdC5taXN0YWtlcyB8fCA=")None_0x4f2a("LCBrZXlMZXZlbHM6IEFycmF5LmlzQXJyYXkodC5rZXlMZXZlbHMpID8gdC5rZXlMZXZlbHMgOiBbXSwgbm90ZXM6IHQubm90ZXMgfHwg")" });
};
const cancelEdit = () => {
setEditingId(null);
setEditForm(null);
};
const saveEdit = (id) => {
if (!editForm) return;
const profitVal = +editForm.profit || 0;
onEdit(id, __spreadProps(__spreadValues({}, editForm), { entryPrice: +editForm.entryPrice, exitPrice: +editForm.exitPrice, pnl: 0, profit: profitVal, keyLevels: Array.isArray(editForm.keyLevels) ? editForm.keyLevels : [] }));
setSaved(id);
setTimeout(() => setSaved(null), 1800);
cancelEdit();
};
const toggleSort = (f) => {
if (sortBy === f) setSortDir((d) => -d);
else {
setSortBy(f);
setSortDir(1);
}
};
const SH = ({ l, f }) =>  React.createElement(_0x4f2a("c3Bhbg=="), { onClick: () => toggleSort(f), style: { fontSize: 10, fontWeight: 500, color: sortBy === f ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), letterSpacing: 0.1, cursor: _0x4f2a("cG9pbnRlcg=="), userSelect: _0x4f2a("bm9uZQ==") } }, l, sortBy === f ? sortDir > 0 ? " \u2191" : " \u2193" : " \u2195_0x4f2a("KTsKcmV0dXJuICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { position: "fixed_0x4f2a("LCBpbnNldDogMCwgYmFja2dyb3VuZDog")rgba(10,18,35,.55)_0x4f2a("LCBiYWNrZHJvcEZpbHRlcjog")blur(16px)_0x4f2a("LCB6SW5kZXg6IDUwMCwgZGlzcGxheTog")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBwYWRkaW5nOiAxNiB9LCBvbkNsaWNrOiBvbkNsb3NlIH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3hTaGFkb3c6IA==")0 32px 80px rgba(0,0,0,.2)_0x4f2a("LCB3aWR0aDogNzIwLCBtYXhXaWR0aDog")100%_0x4f2a("LCBtYXhIZWlnaHQ6IA==")93vh_0x4f2a("LCBvdmVyZmxvdzog")auto_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("IH0sIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { padding: "22px 26px 16px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")flex-start_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCBwb3NpdGlvbjog")sticky_0x4f2a("LCB0b3A6IDAsIGJhY2tncm91bmQ6IA==")var(--surface)_0x4f2a("LCB6SW5kZXg6IDEwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjEsIG1hcmdpbkJvdHRvbTogNSB9IH0sIA==")\u{1F4C5} Day Summary_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 20, fontWeight: 600, letterSpacing: "-.4px_0x4f2a("IH0gfSwgcHJldHR5RGF0ZSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: onClose, style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBmb250U2l6ZTogMTYsIHBhZGRpbmc6IA==")6px 10px", borderRadius: 9, fontWeight: 700 }, onMouseEnter: (e) => {
e.currentTarget.style.background = _0x4f2a("dmFyKC0tckJnKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tcmVkKQ==");
}, onMouseLeave: (e) => {
e.currentTarget.style.background = _0x4f2a("dmFyKC0tczMp");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDMp");
} }, "\xD7_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(4,1fr)_0x4f2a("LCBnYXA6IDEwLCBwYWRkaW5nOiA=")16px 26px 14px" } }, [
{ l: "P&L%_0x4f2a("LCB2OiBmbXRQY3QoZGF5UGN0KSwgYzogZGF5UGN0ID49IDAgPyA=")var(--accD)" : _0x4f2a("dmFyKC0tdDIp"), bg: dayPct >= 0 ? _0x4f2a("dmFyKC0tYWNjTCk=") : _0x4f2a("dmFyKC0tczMp") },
{ l: _0x4f2a("TmV0IFAmTA=="), v: fmtUSD(dayProfit), c: dayProfit >= 0 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), bg: dayProfit >= 0 ? _0x4f2a("dmFyKC0tYWNjTCk=") : _0x4f2a("dmFyKC0tczMp") },
{ l: _0x4f2a("VHJhZGVz"), v: dayTrades.length, c: _0x4f2a("dmFyKC0tdGV4dCk="), bg: _0x4f2a("dmFyKC0tczIp") },
{ l: _0x4f2a("V2luIFJhdGU="), v: `${wr}%`, c: wr >= 50 ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDIp"), bg: _0x4f2a("dmFyKC0tczIp") }
].map((m, i) =>  React.createElement("div", { key: i, style: { background: m.bg, border: "1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")14px 16px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjEsIG1hcmdpbkJvdHRvbTogOCB9IH0sIG0ubCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 20, fontWeight: 600, color: m.c, letterSpacing: "-1px_0x4f2a("IH0gfSwgbS52KSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { padding: "0 26px 12px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDYsIGZsZXhXcmFwOiA=")wrap_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiA0IH0gfSwg")Filter:_0x4f2a("KSwgc3ltcy5tYXAoKHMpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { key: s, onClick: () => setSymFilter(s), style: { padding: "3px 11px", borderRadius: 20, border: `1.5px solid ${symFilter === s ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: symFilter === s ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: symFilter === s ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: symFilter === s ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, s)),  React.createElement(_0x4f2a("c3Bhbg=="), { style: { borderLeft: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), height: 16, margin: _0x4f2a("MCA0cHg=") } }), ["All_0x4f2a("LCAuLi5HUkFERVNdLm1hcCgoZykgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { key: g, onClick: () => setGradeFilter(g), style: { padding: "3px 10px", borderRadius: 20, border: `1.5px solid ${gradeFilter === g ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: gradeFilter === g ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: gradeFilter === g ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: gradeFilter === g ? 700 : 500, fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, g)),  React.createElement("div", { style: { marginLeft: "auto_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBnYXA6IDEwLCBhbGlnbkl0ZW1zOiA=")center" } },  React.createElement(SH, { l: "Time_0x4f2a("LCBmOiA=")entryTime" }),  React.createElement(SH, { l: "P&L_0x4f2a("LCBmOiA=")pnl" }),  React.createElement(SH, { l: "Grade_0x4f2a("LCBmOiA=")grade_0x4f2a("IH0pKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { padding: "0 26px 24px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 8 } }, visible.map((t, i) => {
var _a;
const isEditing = editingId === t.id;
const isSaved = saved === t.id;
return  React.createElement("div", { key: t.id, style: { border: `1.5px solid ${isEditing ? "var(--acc)_0x4f2a("IDogaXNTYXZlZCA/IA==")var(--gBdr)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 14, overflow: _0x4f2a("aGlkZGVu"), transition: _0x4f2a("Ym9yZGVyLWNvbG9yIC4ycw=="), background: isEditing ? _0x4f2a("dmFyKC0tYWNjRik=") : isSaved ? _0x4f2a("dmFyKC0tZ0JnKQ==") : _0x4f2a("dmFyKC0tc3VyZmFjZSk=") } },  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")2fr 1.2fr 1fr 1fr 1fr 1fr auto_0x4f2a("LCBnYXA6IDgsIHBhZGRpbmc6IA==")11px 16px_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBiYWNrZ3JvdW5kOiBpICUgMiA9PT0gMCA/IA==")var(--surface)" : _0x4f2a("dmFyKC0tczIp") } },  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDIgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 13, fontWeight: 500, color: "var(--text)_0x4f2a("IH0gfSwgdC5zeW1ib2wpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("IH0gfSwgKChfYSA9IHQuZW50cnlUaW1lKSA9PSBudWxsID8gdm9pZCAwIDogX2Euc2xpY2UoMCwgNSkpIHx8IA==")\u2014", " \xB7 _0x4f2a("LCB0LnNpZGUgfHwgZGVyaXZlRGlyKHQpKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", null,  React.createElement(SessionChip, { session: t.session })),  React.createElement("div", null,  React.createElement(GradeChip, { grade: t.grade })),  React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: calcPnL(t.profit, capital) >= 0 ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp") } }, fmtPct(calcPnL(t.profit, capital))),  React.createElement("div", { style: { fontSize: 12, color: "var(--t3)_0x4f2a("IH0gfSwgdC5leHBlY3RlZFJSIHx8IA==")\u2014_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXhXaWR0aDogMTAwLCBvdmVyZmxvdzog")hidden_0x4f2a("LCB0ZXh0T3ZlcmZsb3c6IA==")ellipsis_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("IH0gfSwgdC5tb2RlbCB8fCA=")\u2014_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDUgfSB9LCAhaXNFZGl0aW5nICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => startEdit(t), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")5px 12px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("IH0gfSwg")\u{1F527} Edit_0x4f2a("KSwgaXNFZGl0aW5nICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => saveEdit(t.id), style: { background: "var(--green)_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")5px 12px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")\u2713 Save_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: cancelEdit, style: { background: "var(--s3)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")5px 10px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")\u2715_0x4f2a("KSkpKSwgaXNFZGl0aW5nICYmIGVkaXRGb3JtICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { padding: "16px_0x4f2a("LCBib3JkZXJUb3A6IA==")1px dashed color-mix(in srgb, var(--acc) 35%, transparent)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--accF)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(auto-fill,minmax(160px,1fr))_0x4f2a("LCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTAgfSB9LCBbWw==")Symbol", _0x4f2a("c3ltYm9s")], [_0x4f2a("RW50cnkgUHJpY2U="), _0x4f2a("ZW50cnlQcmljZQ==")], [_0x4f2a("RXhpdCBQcmljZQ=="), _0x4f2a("ZXhpdFByaWNl")], ["Net P&L ($)", _0x4f2a("cHJvZml0")], [_0x4f2a("QWN0dWFsIFJS"), _0x4f2a("YWN0dWFsUlI=")]].map(([l, k]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCBsKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")input", { value: editForm[k] || "", onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Side_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.side, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { side: e.target.value })), style: sel },  React.createElement(_0x4f2a("b3B0aW9u"), null, _0x4f2a("TG9uZw==")),  React.createElement(_0x4f2a("b3B0aW9u"), null, _0x4f2a("U2hvcnQ=")))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Session_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.session, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel }, usedSessions.map((s) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: s }, s)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Model_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.model, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel }, MODELS.map((m) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: m }, m)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Grade_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.grade, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel }, GRADES.map((g) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: g }, g)))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Mistakes_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.mistakes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel }, usedMistakes.map((m) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: m }, m)))),  React.createElement("div", { style: { gridColumn: "1/-1_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Key Levels_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap", gap: 5, marginTop: 4, minHeight: 28 } }, (editForm.keyLevels || []).length === 0 ?  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 10, color: _0x4f2a("dmFyKC0tdDMp") } }, _0x4f2a("Tm8ga2V5IGxldmVscw==")) : (editForm.keyLevels || []).map((kl, ki) =>  React.createElement("div", { key: ki, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--bBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--bBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 10.5, fontWeight: 600, padding: "3px 9px_0x4f2a("LCBjb2xvcjog")var(--blue)_0x4f2a("IH0gfSwga2wpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { type: "button", onClick: () => setEditForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), borderLeft: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJCZHIp"), color: _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 11, padding: _0x4f2a("M3B4IDdweA==") } }, "\u00D7_0x4f2a("KSkpKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Exp. RR_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")select", { value: editForm.expectedRR, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) =>  React.createElement(_0x4f2a("b3B0aW9u"), { key: r }, r))))),  React.createElement("div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Notes_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")textarea", { value: editForm.notes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), rows: 2, style: __spreadProps(__spreadValues({}, inp), { resize: _0x4f2a("dmVydGljYWw=") }) })),  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIG1hcmdpblRvcDogMTAgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => saveEdit(t.id), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")9px 22px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBib3hTaGFkb3c6IA==")0 3px 12px color-mix(in srgb, var(--acc) 40%, transparent)_0x4f2a("IH0gfSwg")\u2713 Save Changes_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: cancelEdit, style: { background: "var(--s3)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")9px 18px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")\u2715 Cancel_0x4f2a("KSwgb25PcGVuU2V0dGluZ3MgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { type: "button_0x4f2a("LCBvbkNsaWNrOiAoKSA9PiBvbk9wZW5TZXR0aW5ncyg=")lists"), style: { background: "var(--s2)_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")9px 14px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBtYXJnaW5MZWZ0OiA=")auto_0x4f2a("IH0gfSwg")\xf0\x9f\x93\x9d Manage Lists_0x4f2a("KSkpKTsKfSksIHZpc2libGUubGVuZ3RoID09PSAwICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { textAlign: "center_0x4f2a("LCBwYWRkaW5nOiA=")30px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTMgfSB9LCA=")No trades match filters"))));
}
function RiskRulesEditor() {
const DEFAULT_RULES = [
{ id: 1, text: "Never risk more than 1\u20132% per trade", active: true },
{ id: 2, text: "Stop after 2\u20133 consecutive losses", active: true },
{ id: 3, text: "Take profits off the table on big winners", active: true },
{ id: 4, text: "Revenge trading is the #1 account killer", active: true },
{ id: 5, text: "A missed trade is better than a bad one", active: true }
];
const [rules, setRules] = useState(() => {
try {
const r = localStorage.getItem(_0x4f2a("dGo1X3Jpc2tfcnVsZXM="));
return r ? JSON.parse(r) : DEFAULT_RULES;
} catch (e) {
return DEFAULT_RULES;
}
});
const [adding, setAdding] = useState(false);
const [newRule, setNewRule] = useState("");
const [editId, setEditId] = useState(null);
const [editText, setEditText] = useState("");
const save = (r) => {
setRules(r);
try {
localStorage.setItem("tj5_risk_rules", JSON.stringify(r));
} catch (e) {
}
};
const addRule = () => {
if (!newRule.trim()) return;
const r = [...rules, { id: Date.now(), text: newRule.trim(), active: true }];
save(r);
setNewRule("");
setAdding(false);
};
const deleteRule = (id) => save(rules.filter((r) => r.id !== id));
const toggleRule = (id) => save(rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { active: !r.active }) : r));
const saveEdit = (id) => {
save(rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { text: editText }) : r));
setEditId(null);
};
return  React.createElement("div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")16px 18px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwg")\u{1F4CC} Risk Management Rules_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDIgfSB9LCA=")Your personal trading rules \u2014 add, edit or remove_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => setAdding((a) => !a), style: { background: adding ? "var(--s3)" : _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: adding ? _0x4f2a("dmFyKC0tdDIp") : _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 9, padding: _0x4f2a("NnB4IDE0cHg="), fontSize: 11, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") } }, adding ? "\u2715 Cancel" : _0x4f2a("KyBBZGQgUnVsZQ=="))), adding &&  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")input", { autoFocus: true, value: newRule, onChange: (e) => setNewRule(e.target.value), onKeyDown: (e) => e.key === _0x4f2a("RW50ZXI=") && addRule(), placeholder: _0x4f2a("ZS5nLiBNYXggMSUgcmlzayBwZXIgdHJhZGU="), style: { flex: 1, border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyKQ=="), borderRadius: 9, padding: _0x4f2a("OHB4IDEycHg="), fontSize: 12, outline: _0x4f2a("bm9uZQ=="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdGV4dCk=") } }),  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: addRule, style: { background: _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 9, padding: _0x4f2a("OHB4IDE2cHg="), fontSize: 12, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") } }, "Add_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDYgfSB9LCBydWxlcy5tYXAoKHIsIGkpID0+ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { key: r.id, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDgsIHBhZGRpbmc6IA==")8px 10px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)", border: `1px solid ${r.active ? "var(--border)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, borderRadius: 10, opacity: r.active ? 1 : 0.55, transition: _0x4f2a("b3BhY2l0eSAuMnM=") } },  React.createElement("div", { onClick: () => toggleRule(r.id), style: { width: 16, height: 16, borderRadius: 4, border: `2px solid ${r.active ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyMik=")}`, background: r.active ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dHJhbnNwYXJlbnQ="), cursor: _0x4f2a("cG9pbnRlcg=="), flexShrink: 0, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), transition: _0x4f2a("YWxsIC4xNXM=") } }, r.active &&  React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: _0x4f2a("I2ZmZg=="), fontSize: 10, fontWeight: 900 } }, "\u2713_0x4f2a("KSksIGVkaXRJZCA9PT0gci5pZCA/ICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")input", { autoFocus: true, value: editText, onChange: (e) => setEditText(e.target.value), onKeyDown: (e) => {
if (e.key === _0x4f2a("RW50ZXI=")) saveEdit(r.id);
if (e.key === _0x4f2a("RXNjYXBl")) setEditId(null);
}, style: { flex: 1, border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYWNjKQ=="), borderRadius: 7, padding: _0x4f2a("NHB4IDhweA=="), fontSize: 12, outline: _0x4f2a("bm9uZQ=="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdGV4dCk=") } }) :  React.createElement(_0x4f2a("c3Bhbg=="), { style: { flex: 1, fontSize: 12, color: r.active ? _0x4f2a("dmFyKC0tdDIp") : _0x4f2a("dmFyKC0tdDMp"), fontWeight: 500 } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { color: _0x4f2a("dmFyKC0tYWNjKQ=="), marginRight: 6 } }, "\u2192_0x4f2a("KSwgci50ZXh0KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex", gap: 4 } }, editId === r.id ?  React.createElement(React.Fragment, null,  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => saveEdit(r.id), style: { background: _0x4f2a("dmFyKC0tZ3JlZW4p"), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 6, padding: _0x4f2a("M3B4IDhweA=="), fontSize: 10, cursor: _0x4f2a("cG9pbnRlcg=="), fontWeight: 700 } }, "\u2713_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setEditId(null), style: { background: "var(--s3)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IA==")3px 8px_0x4f2a("LCBmb250U2l6ZTogMTAsIGN1cnNvcjog")pointer_0x4f2a("IH0gfSwg")\u2715_0x4f2a("KSkgOiAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => {
setEditId(r.id);
setEditText(r.text);
}, style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), color: _0x4f2a("dmFyKC0tdDMp"), borderRadius: 6, padding: _0x4f2a("M3B4IDdweA=="), fontSize: 10, cursor: _0x4f2a("cG9pbnRlcg==") }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjKQ==");
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDMp");
} }, "\u270F_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => deleteRule(r.id), style: { background: "none_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDYsIHBhZGRpbmc6IA==")3px 7px_0x4f2a("LCBmb250U2l6ZTogMTAsIGN1cnNvcjog")pointer" }, onMouseEnter: (e) => {
e.currentTarget.style.background = "var(--rBg)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--red)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--red)";
}, onMouseLeave: (e) => {
e.currentTarget.style.background = "none_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSA=")var(--border)_0x4f2a("OwplLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSA=")var(--t3)_0x4f2a("Owp9IH0sIA==")\u2715")))))));
}
function ImportTradesPanel({ onImport }) {
const [open, setOpen] = useState(false);
const [broker, setBroker] = useState("mt5");
const [file, setFile] = useState(null);
const [preview, setPreview] = useState(null);
const [error, setError] = useState("");
const [importing, setImporting] = useState(false);
const makeFingerprintId = (fields) => {
const raw = [
fields.symbol || "_0x4f2a("LApmaWVsZHMuZW50cnlEYXRlIHx8IA==")_0x4f2a("LApmaWVsZHMuZW50cnlUaW1lIHx8IA==")_0x4f2a("LApmaWVsZHMuc2lkZSB8fCA=")_0x4f2a("LApmaWVsZHMuZW50cnlQcmljZSAhPSBudWxsID8gU3RyaW5nKGZpZWxkcy5lbnRyeVByaWNlKSA6IA==")_0x4f2a("LApmaWVsZHMuZXhpdFByaWNlICAhPSBudWxsID8gU3RyaW5nKGZpZWxkcy5leGl0UHJpY2UpICA6IA==")_0x4f2a("LApmaWVsZHMucHJvZml0ICAgICAhPSBudWxsID8gU3RyaW5nKGZpZWxkcy5wcm9maXQpICAgICA6IA==")_0x4f2a("Cl0uam9pbig=")|");
let h = 5381;
for (let ci = 0; ci < raw.length; ci++) h = (((h << 5) + h) ^ raw.charCodeAt(ci)) >>> 0;
return _0x4f2a("dHJhZF8=") + h.toString(36) + "_" + raw.length;
};
const buildTrade = (i, fields) => ({
id: makeFingerprintId(fields),
status: _0x4f2a("Q2xvc2Vk"), confluences: [], session: _0x4f2a("TmV3IFlvcms="), model: _0x4f2a("SW1wb3J0ZWQ="),
emotionBefore: _0x4f2a("TmV1dHJhbA=="), emotionAfter: _0x4f2a("TmV1dHJhbA=="), mistakes: _0x4f2a("Tm9uZQ=="),
grade: "B_0x4f2a("LCBleHBlY3RlZFJSOiA=")1:2_0x4f2a("LCBhY3R1YWxSUjog")_0x4f2a("LCBhY2NvdW50SWQ6IA==")import",
createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
tags: [], riskAmount: 0, stopLoss: 0, takeProfit: 0,
...fields
});
const parseDate = (s) => {
if (!s) return "";
s = s.trim();
if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
const dm = s.match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/);
if (dm) return `${dm[3]}-${dm[2].padStart(2,"0")}-${dm[1].padStart(2,"0")}`;
const md = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
if (md) return `${md[3]}-${md[1].padStart(2,"0")}-${md[2].padStart(2,"0")}`;
const yd = s.match(/^(\d{4})\.(\d{2})\.(\d{2})/);
if (yd) return `${yd[1]}-${yd[2]}-${yd[3]}`;
return s.split("T_0x4f2a("KVswXSB8fCA=")";
};
const parseTime = (s) => {
if (!s) return "00:00:00";
const m = s.match(/(\d{1,2}:\d{2}(:\d{2})?)/);
return m ? (m[1].length === 5 ? m[1] + ":00_0x4f2a("IDogbVsxXSkgOiA=")00:00:00";
};
const parseNum = (s) => {
if (s == null) return 0;
const n = parseFloat(String(s).replace(/[, ]/g, ""));
return isNaN(n) ? 0 : n;
};
const splitLine = (line, sep) => {
const out = []; let cur = ""; let inQ = false;
for (let i = 0; i < line.length; i++) {
const c = line[i];
if (c === '"') { inQ = !inQ; continue; }
if (!inQ && c === sep) { out.push(cur.trim()); cur = ""; continue; }
cur += c;
}
out.push(cur.trim());
return out;
};
const parseMT5HTM = (text) => {
const trades = [];
const rows = [...text.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
for (const row of rows) {
const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)]
.map(m => m[1].replace(/<[^>]+>/g, "_0x4f2a("KS5yZXBsYWNlKC8mbmJzcDsvZywg") _0x4f2a("KS5yZXBsYWNlKC8mYW1wOy9nLCA=")&_0x4f2a("KS5yZXBsYWNlKC8mbHQ7L2cs")<_0x4f2a("KS5yZXBsYWNlKC8mZ3Q7L2cs")>").trim());
if (cells.length < 8) continue;
if (!cells[0] || !/\d/.test(cells[0])) continue;
const isDateFirst = /^\d{4}[.\/-]/.test(cells[0]) || /^\d{2}[.\/-]\d{2}[.\/-]\d{4}/.test(cells[0]);
const isTicketFirst = /^\d{5,}$/.test(cells[0]);
if (!isDateFirst && !isTicketFirst) continue;
let openTime, closeTime, sym, typeStr, openPrice, closePrice, profit;
if (isDateFirst) {
openTime   = cells[0];
sym        = cells[2] || _0x4f2a("VU5LTk9XTg==");
typeStr    = cells[3] || "";
openPrice  = parseNum(cells[5]);
closeTime  = cells[8] || cells[0];
closePrice = parseNum(cells[9] || cells[5]);
profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9] ?? cells[8]);
} else {
openTime   = cells[1];
sym        = cells[2] || _0x4f2a("VU5LTk9XTg==");
typeStr    = cells[3] || "";
openPrice  = parseNum(cells[5]);
closeTime  = cells[8] || cells[1];
closePrice = parseNum(cells[9] || cells[5]);
profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9]);
}
const tl = typeStr.toLowerCase();
if (!tl.includes("buy_0x4f2a("KSAmJiAhdGwuaW5jbHVkZXMo")sell")) continue;
const cleanSym = sym.replace(/\.[A-Z0-9]+$/, "").replace(/\s+/g, "").toUpperCase();
trades.push(buildTrade(trades.length, {
symbol: cleanSym || "UNKNOWN",
entryDate: parseDate(openTime),
entryTime: parseTime(openTime),
side: tl.includes(_0x4f2a("c2VsbA==")) ? _0x4f2a("U2hvcnQ=") : _0x4f2a("TG9uZw=="),
entryPrice: openPrice,
exitPrice: closePrice,
pnl: 0,
profit,
notes: _0x4f2a("SW1wb3J0ZWQgZnJvbSBNVDU=")
}));
}
const totalProfit = trades.reduce((s, t) => s + t.profit, 0);
return trades;
};
const parseMT5CSV = (text) => {
if (/<html|<table|<tr/i.test(text)) return parseMT5HTM(text);
const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
if (rawLines.length < 2) return [];
const sep = rawLines[0].includes("\t_0x4f2a("KSA/IA==")\t" : ",";
let headerIdx = -1, headers = [];
for (let i = 0; i < Math.min(5, rawLines.length); i++) {
const h = splitLine(rawLines[i].toLowerCase(), sep);
if (h.some(c => [_0x4f2a("c3ltYm9s"),_0x4f2a("dGlja2V0"),_0x4f2a("dGltZQ=="),_0x4f2a("dHlwZQ=="),_0x4f2a("cHJvZml0"),_0x4f2a("aXRlbQ=="),_0x4f2a("c2lkZQ=="),_0x4f2a("b3Blbg==")].includes(c))) {
headerIdx = i; headers = h; break;
}
}
const trades = [];
if (headerIdx >= 0) {
const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
const iDate=ci([_0x4f2a("b3BlbiB0aW1l"),_0x4f2a("dGltZQ=="),_0x4f2a("ZGF0ZQ=="),_0x4f2a("b3Blbg==")]), iSym=ci([_0x4f2a("c3ltYm9s"),_0x4f2a("aXRlbQ=="),_0x4f2a("aW5zdHJ1bWVudA=="),_0x4f2a("cGFpcg==")]);
const iType=ci([_0x4f2a("dHlwZQ=="),_0x4f2a("ZGlyZWN0aW9u"),_0x4f2a("c2lkZQ=="),_0x4f2a("YWN0aW9u")]), iOpen=ci([_0x4f2a("b3BlbiBwcmljZQ=="),_0x4f2a("ZW50cnkgcHJpY2U="),_0x4f2a("cHJpY2Ugb3Blbg=="),_0x4f2a("ZW50cnk=")]);
const iCloseP=ci([_0x4f2a("Y2xvc2UgcHJpY2U="),_0x4f2a("ZXhpdCBwcmljZQ=="),_0x4f2a("cHJpY2UgY2xvc2U="),_0x4f2a("Y2xvc2U=")]), iProfit=ci([_0x4f2a("cHJvZml0"),"p&l","pnl",_0x4f2a("cmVhbGl6ZWQ="),_0x4f2a("bmV0IHByb2ZpdA=="),_0x4f2a("Z2Fpbg==")]);
const iPct=ci([_0x4f2a("cG5sJQ=="),_0x4f2a("cG5sICU="),_0x4f2a("cmV0dXJuICU="),"%"]);
for (let i = headerIdx + 1; i < rawLines.length; i++) {
const cols = splitLine(rawLines[i], sep);
if (cols.length < 3) continue;
const g = (idx) => idx >= 0 ? (cols[idx] || "_0x4f2a("KS50cmltKCkgOiA=")_0x4f2a("Owpjb25zdCBzeW0gPSBnKGlTeW0pLnRvVXBwZXJDYXNlKCkgfHwg")UNKNOWN";
const typeStr = g(iType).toLowerCase();
if (!sym || sym.length < 2) continue;
if (typeStr && !typeStr.includes("buy_0x4f2a("KSAmJiAhdHlwZVN0ci5pbmNsdWRlcyg=")sell_0x4f2a("KSAmJiAhdHlwZVN0ci5pbmNsdWRlcyg=")long_0x4f2a("KSAmJiAhdHlwZVN0ci5pbmNsdWRlcyg=")short")) continue;
const entryDateRaw = g(iDate);
const entryDate = parseDate(entryDateRaw);
if (!entryDate) continue;
trades.push(buildTrade(i, {
symbol: sym.replace(/\s+/g,"_0x4f2a("KSwgZW50cnlEYXRlLCBlbnRyeVRpbWU6IHBhcnNlVGltZShlbnRyeURhdGVSYXcpLApzaWRlOiAodHlwZVN0ci5pbmNsdWRlcyg=")sell_0x4f2a("KXx8dHlwZVN0ci5pbmNsdWRlcyg=")short_0x4f2a("KSkgPyA=")Short" : _0x4f2a("TG9uZw=="),
entryPrice: parseNum(g(iOpen)), exitPrice: parseNum(g(iCloseP)) || parseNum(g(iOpen)),
pnl: parseNum(g(iPct)), profit: parseNum(g(iProfit)), notes: _0x4f2a("SW1wb3J0ZWQgZnJvbSBNVDU=")
}));
}
if (trades.length) return trades;
}
const dataStart = headerIdx >= 0 ? headerIdx + 1 : 1;
for (let i = dataStart; i < rawLines.length; i++) {
const cols = splitLine(rawLines[i], sep);
if (cols.length < 8) continue;
const typeStr = (cols[3] || "_0x4f2a("KS50b0xvd2VyQ2FzZSgpOwppZiAoIXR5cGVTdHIuaW5jbHVkZXMo")buy_0x4f2a("KSAmJiAhdHlwZVN0ci5pbmNsdWRlcyg=")sell")) continue;
trades.push(buildTrade(i, {
symbol: (cols[2] || "UNKNOWN").toUpperCase(), entryDate: parseDate(cols[0]),
entryTime: parseTime(cols[0]),
side: typeStr.includes(_0x4f2a("c2VsbA==")) ? _0x4f2a("U2hvcnQ=") : _0x4f2a("TG9uZw=="),
entryPrice: parseNum(cols[5]), exitPrice: parseNum(cols[5]),
pnl: 0, profit: parseNum(cols[8] || cols[7]), notes: _0x4f2a("SW1wb3J0ZWQgZnJvbSBNVDU=")
}));
}
return trades;
};
const parseTradovateCSV = (text) => {
const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
if (rawLines.length < 2) return [];
const sep = rawLines[0].includes("\t_0x4f2a("KSA/IA==")\t" : ",";
const headers = splitLine(rawLines[0].toLowerCase(), sep);
const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
const ciExact = (names) => { for (const n of names) { const idx = headers.indexOf(n); if (idx >= 0) return idx; } return -1; };
const iSym = ciExact([_0x4f2a("c3ltYm9s"),_0x4f2a("Y29udHJhY3Q=")]) >= 0 ? ciExact([_0x4f2a("c3ltYm9s"),_0x4f2a("Y29udHJhY3Q=")]) : ci([_0x4f2a("c3ltYm9s"),_0x4f2a("aW5zdHJ1bWVudA=="),_0x4f2a("Y29udHJhY3Q="),_0x4f2a("cHJvZHVjdA==")]);
const iDate = ciExact([_0x4f2a("Ym91Z2h0dGltZXN0YW1w")]) >= 0 ? ciExact([_0x4f2a("Ym91Z2h0dGltZXN0YW1w")]) : ci([_0x4f2a("Ym91Z2h0"),_0x4f2a("ZmlsbGVk"),_0x4f2a("dGltZQ=="),_0x4f2a("ZGF0ZQ=="),_0x4f2a("ZW50cnk=")]);
const iBuyFillId = ciExact([_0x4f2a("YnV5ZmlsbGlk")]);
const iSellFillId = ciExact([_0x4f2a("c2VsbGZpbGxpZA==")]);
const iEntry = ciExact([_0x4f2a("YnV5cHJpY2U=")]) >= 0 ? ciExact([_0x4f2a("YnV5cHJpY2U=")]) : ci([_0x4f2a("YnV5IHByaWNl"),_0x4f2a("YXZnIHByaWNl"),_0x4f2a("ZmlsbCBwcmljZQ=="),_0x4f2a("ZW50cnk="),_0x4f2a("cHJpY2U=")]);
const iExit = ciExact([_0x4f2a("c2VsbHByaWNl")]) >= 0 ? ciExact([_0x4f2a("c2VsbHByaWNl")]) : ci([_0x4f2a("c2VsbCBwcmljZQ=="),_0x4f2a("ZXhpdA=="),_0x4f2a("Y2xvc2U="),_0x4f2a("ZXhpdCBwcmljZQ==")]);
const iProfit = ci(["pnl",_0x4f2a("cHJvZml0"),_0x4f2a("cmVhbGl6ZWQ="),"net",_0x4f2a("Z2Fpbg==")]);
const iPct = ci([_0x4f2a("cG5sJQ=="),_0x4f2a("cmV0dXJu"),_0x4f2a("cGVyY2VudA=="),"%_0x4f2a("XSk7CmNvbnN0IGlRdHkgPSBjaShb")qty",_0x4f2a("cXVhbnRpdHk="),_0x4f2a("c2l6ZQ=="),_0x4f2a("dm9sdW1l")]);
const parseTradPnl = (s) => {
if (!s) return 0;
const isNeg = s.includes("(_0x4f2a("KTsKY29uc3QgbnVtID0gcGFyc2VGbG9hdChzLnJlcGxhY2UoL1teMC05Ll0vZyw=")")) || 0;
return isNeg ? -num : num;
};
const parseTradDate = (s) => {
if (!s) return "";
const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
if (m) return `${m[3]}-${m[1].padStart(2,"0")}-${m[2].padStart(2,"0")}`;
return parseDate(s);
};
const parseTradTime = (s) => {
if (!s) return "00:00:00";
const m = s.match(/(\d{2}:\d{2}:\d{2})/);
return m ? m[1] : parseTime(s);
};
const trades = [];
for (let i = 1; i < rawLines.length; i++) {
const cols = splitLine(rawLines[i], sep);
if (cols.length < 3) continue;
const g = (idx) => idx >= 0 ? (cols[idx] || "_0x4f2a("KS50cmltKCkgOiA=")_0x4f2a("Owpjb25zdCBzeW0gPSBnKGlTeW0pLnJlcGxhY2UoL1teQS1aMC05XS9naSw=")_0x4f2a("KS50b1VwcGVyQ2FzZSgpIHx8IA==")UNKNOWN";
const dateRaw = g(iDate);
const entryDate = parseTradDate(dateRaw);
if (!entryDate || !sym || sym.length < 1) continue;
let side = _0x4f2a("TG9uZw==");
if (iBuyFillId >= 0 && iSellFillId >= 0) {
const buyId = parseInt(g(iBuyFillId)) || 0;
const sellId = parseInt(g(iSellFillId)) || 0;
if (buyId && sellId) side = buyId < sellId ? _0x4f2a("TG9uZw==") : _0x4f2a("U2hvcnQ=");
}
const rawProfit = parseTradPnl(g(iProfit));
const qty2 = iQty >= 0 ? (parseInt(g(iQty)) || 1) : 1;
const TRAD_COMM2 = {
ES:3.50,MES:1.00,NQ:3.50,MNQ:1.00,RTY:3.50,M2K:1.00,
NKD:3.50,YM:3.50,MYM:1.00,
A6:4.80,B6:4.80,C6:4.80,E6:4.80,J6:4.80,S6:4.80,N6:4.80,
CL:4.00,MCL:1.00,QM:4.00,QG:2.60,NG:4.00,
PL:4.60,HG:5.80,GC:4.60,MGC:1.60,SI:4.60,SIL:3.20,
HE:5.60,LE:5.60,ZS:5.60,ZC:5.60,ZL:5.60,ZM:5.60,ZW:5.60
};
const rootSym2 = sym.replace(/[A-Z]?\d+$/,"");
const commPerContract2 = TRAD_COMM2[rootSym2] !== undefined ? TRAD_COMM2[rootSym2] : 5.00;
const commission2 = qty2 * commPerContract2;
const profit = parseFloat((rawProfit - commission2).toFixed(2));
trades.push(buildTrade(i, {
symbol: sym, entryDate, entryTime: parseTradTime(dateRaw), side,
entryPrice: parseNum(g(iEntry)), exitPrice: parseNum(g(iExit)) || parseNum(g(iEntry)),
pnl: parseNum(g(iPct)), profit, notes: `Tradovate Import | Comm: -$${commission2.toFixed(2)} ($${commPerContract2}/ct)`
}));
}
return trades;
};
const handleFile = (e) => {
const f = e.target.files[0];
if (!f) return;
setFile(f);
setError("");
setPreview(null);
const reader = new FileReader();
reader.onload = (ev) => {
try {
const text = ev.target.result;
let trades = [];
if (broker === "mt5_0x4f2a("KSB0cmFkZXMgPSBwYXJzZU1UNUNTVih0ZXh0KTsKZWxzZSBpZiAoYnJva2VyID09PSA=")matchtrader_0x4f2a("KSB0cmFkZXMgPSBwYXJzZU1hdGNoVHJhZGVyQ1NWKHRleHQpOwplbHNlIGlmIChicm9rZXIgPT09IA==")tradovate_0x4f2a("KSB0cmFkZXMgPSBwYXJzZVRyYWRvdmF0ZUNTVih0ZXh0KTsKZWxzZSBpZiAoYnJva2VyID09PSA=")tradexy_0x4f2a("KSB0cmFkZXMgPSBwYXJzZUpvdXJuYWxDU1YodGV4dCk7CmVsc2UgaWYgKGJyb2tlciA9PT0g")json") trades = parseJournalJSON(text);
else trades = parseMT5CSV(text);
if (!trades.length) {
setError(broker === _0x4f2a("dHJhZGV4eQ==")
? "No trades found. Make sure you are uploading a CSV exported from this journal (\u2193 CSV button in Trade Log)._0x4f2a("CjogYnJva2VyID09PSA=")json"
? "No trades found. Make sure you are uploading a JSON backup exported from this journal (\u2193 JSON button in Trade Log)."
: _0x4f2a("Tm8gdHJhZGVzIGZvdW5kLiBDaGVjayBmaWxlIGZvcm1hdC4="));
return;
}
setPreview(trades);
} catch (err) {
setError(_0x4f2a("UGFyc2UgZXJyb3I6IA==") + err.message);
}
};
reader.readAsText(f);
};
const doImport = () => {
if (!preview || !preview.length) return;
setImporting(true);
setTimeout(() => {
onImport && onImport(preview);
setImporting(false);
setOpen(false);
setFile(null);
setPreview(null);
}, 400);
};
if (!open) return  React.createElement(
_0x4f2a("YnV0dG9u"),
{
onClick: () => setOpen(true),
style: { width: _0x4f2a("MTAwJQ=="), background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MS41cHggZGFzaGVkIHZhcigtLWJvcmRlcjIp"), borderRadius: 12, padding: _0x4f2a("MTJweA=="), fontSize: 12, fontWeight: 600, color: _0x4f2a("dmFyKC0tdDIp"), cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), gap: 8, transition: _0x4f2a("YWxsIC4xNXM=") },
onMouseEnter: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjRCk=");
},
onMouseLeave: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyMik=");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDIp");
}
},
React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 16 } }, "\u{1F4E5}"),
_0x4f2a("IEltcG9ydCBUcmFkZXMgKE1UNSAvIFRyYWRvdmF0ZSAvIFRyYWRleHkgQ1NWIC8gSlNPTik=")
);
return  React.createElement("div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1.5px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")18px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwg")\u{1F4E5} Import Trades_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => {
setOpen(false);
setFile(null);
setPreview(null);
setError("");
}, style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")5px 11px_0x4f2a("LCBmb250U2l6ZTogMTIsIGN1cnNvcjog")pointer_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")\u2715 Close_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA1IH0gfSwg")Platform / Source_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYsIGZsZXhXcmFwOiA=")wrap_0x4f2a("IH0gfSwgW1s=")mt5", _0x4f2a("TWV0YVRyYWRlciA1")], [_0x4f2a("bWF0Y2h0cmFkZXI="), _0x4f2a("TWF0Y2ggVHJhZGVy")], [_0x4f2a("dHJhZG92YXRl"), _0x4f2a("VHJhZG92YXRl")], [_0x4f2a("cHJvamVjdHg="), _0x4f2a("UHJvamVjdFggLyBGdXR1cmVz")], [_0x4f2a("dHJhZGV4eQ=="), _0x4f2a("8J+XkiBUcmFkZXh5IENTVg==")], [_0x4f2a("anNvbg=="), _0x4f2a("8J+SviBKU09OIEJhY2t1cA==")]].map(([id, label]) =>  React.createElement(_0x4f2a("YnV0dG9u"), { key: id, onClick: () => {
setBroker(id);
setFile(null);
setPreview(null);
setError("");
}, style: { padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${broker === id ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: broker === id ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: broker === id ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: broker === id ? 700 : 500, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg==") } }, label)))),  React.createElement("div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")10px 14px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjcgfSB9LCBicm9rZXIgPT09IA==")mt5_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b_0x4f2a("LCBudWxsLCA=")MT5:"), " Go to History tab \u2192 Right click \u2192 Save as Report \u2192 Tab-separated file (.htm/.csv)_0x4f2a("KSwgYnJva2VyID09PSA=")matchtrader_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b_0x4f2a("LCBudWxsLCA=")Match Trader:"), " Closed Positions tab \u2192 Export CSV (columns: ID, Symbol, Volume, Side, Open/Close prices, Commission, Profit)_0x4f2a("KSwgYnJva2VyID09PSA=")tradovate_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b_0x4f2a("LCBudWxsLCA=")Tradovate:"), " Account tab \u2192 Performance \u2192 Export to CSV_0x4f2a("KSwgYnJva2VyID09PSA=")projectx_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b_0x4f2a("LCBudWxsLCA=")ProjectX / Futures:"), _0x4f2a("IEV4cG9ydCB0cmFkZSBoaXN0b3J5IENTViBmcm9tIHlvdXIgZGFzaGJvYXJk")), broker === _0x4f2a("dHJhZGV4eQ==") &&  React.createElement(React.Fragment, null,  React.createElement("b_0x4f2a("LCBudWxsLCA=")Tradexy CSV:"), " Trade Log tab \u2192 \u2193 CSV button — re-import your own journal export with all fields preserved_0x4f2a("KSwgYnJva2VyID09PSA=")json_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b_0x4f2a("LCBudWxsLCA=")JSON Backup:"), " Trade Log tab \u2192 \u2193 JSON button — full lossless backup, restores every field including confluences & emotions_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")label", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center", gap: 8, border: `2px dashed ${file ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyMik=")}`, borderRadius: 12, padding: _0x4f2a("MjBweA=="), cursor: _0x4f2a("cG9pbnRlcg=="), background: file ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tczIp"), transition: _0x4f2a("YWxsIC4xNXM="), marginBottom: 12 } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 28 } }, file ? "\u2713_0x4f2a("IDogKGJyb2tlciA9PT0g")json" ? "\uD83D\uDCBE_0x4f2a("IDogYnJva2VyID09PSA=")tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCC4_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")span", { style: { fontSize: 12, fontWeight: 600, color: file ? "var(--accD)" : _0x4f2a("dmFyKC0tdDMp") } }, file ? file.name : _0x4f2a("Q2xpY2sgdG8gdXBsb2FkIHRyYWRlIGhpc3RvcnkgZmlsZQ==")),  React.createElement(_0x4f2a("c3Bhbg=="), { style: { fontSize: 10, color: _0x4f2a("dmFyKC0tdDMp") } }, broker === _0x4f2a("anNvbg==") ? _0x4f2a("SlNPTiBiYWNrdXAgZXhwb3J0ZWQgZnJvbSB0aGlzIGpvdXJuYWw=") : broker === _0x4f2a("dHJhZGV4eQ==") ? _0x4f2a("Q1NWIGV4cG9ydGVkIGZyb20gdGhpcyBqb3VybmFs") : _0x4f2a("Q1NWLCBUU1YsIG9yIEhUTQ==")),  React.createElement(_0x4f2a("aW5wdXQ="), { type: _0x4f2a("ZmlsZQ=="), accept: broker === _0x4f2a("anNvbg==") ? _0x4f2a("Lmpzb24=") : _0x4f2a("LmNzdiwudHN2LC5odG0sLmh0bWwsLnR4dA=="), style: { display: _0x4f2a("bm9uZQ==") }, onChange: handleFile })), error &&  React.createElement("div", { style: { background: "var(--rBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--rBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6IA==")8px 12px_0x4f2a("LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--red)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEwIH0gfSwg")\u26A0 _0x4f2a("LCBlcnJvciksIHByZXZpZXcgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { marginBottom: 12 } },  React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "var(--green)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDggfSB9LCA=")\u2713 _0x4f2a("LCBwcmV2aWV3Lmxlbmd0aCwg") trades ready to import_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBvdmVyZmxvdzog")hidden_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")table", { style: { width: "100%_0x4f2a("LCBib3JkZXJDb2xsYXBzZTog")collapse_0x4f2a("LCBmb250U2l6ZTogMTEgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")thead_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")tr", { style: { background: "var(--s3)_0x4f2a("IH0gfSwgWw==")Date", _0x4f2a("U3ltYm9s"), _0x4f2a("U2lkZQ=="), _0x4f2a("UCZMJQ=="), "Profit $"].map((h) =>  React.createElement("th", { key: h, style: { padding: "7px 10px_0x4f2a("LCB0ZXh0QWxpZ246IA==")left_0x4f2a("LCBmb250U2l6ZTogOS41LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("IH0gfSwgaCkpKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")tbody_0x4f2a("LCBudWxsLCBwcmV2aWV3LnNsaWNlKDAsIDUpLm1hcCgodCwgaSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")tr", { key: i, style: { borderTop: "1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")td", { style: { padding: "6px 10px_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250RmFtaWx5OiA=")monospace_0x4f2a("LCBmb250U2l6ZTogMTAgfSB9LCB0LmVudHJ5RGF0ZSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "6px 10px_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCB0LnN5bWJvbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "6px 10px" } },  React.createElement(Chip, { color: t.side === "Long" ? _0x4f2a("dHJ1ZWdyZWVu") : "red_0x4f2a("LCBzaXplOiA=")sm_0x4f2a("IH0sIHQuc2lkZSkpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { style: { padding: "6px 10px_0x4f2a("LCBjb2xvcjogdC5wcm9maXQgPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$_0x4f2a("LCBNYXRoLmFicyh0LnByb2ZpdCkudG9GaXhlZCgyKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")td", { style: { padding: "6px 10px_0x4f2a("LCBjb2xvcjogdC5wcm9maXQgPj0gMCA/IA==")var(--accD)" : _0x4f2a("dmFyKC0tcmVkKQ=="), fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$_0x4f2a("LCBNYXRoLmFicyh0LnByb2ZpdCkudG9GaXhlZCgyKSkpKSwgcHJldmlldy5sZW5ndGggPiA1ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")tr_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")td", { colSpan: 5, style: { padding: "6px 10px_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBmb250U2l6ZTogMTAsIHRleHRBbGlnbjog")center_0x4f2a("IH0gfSwg")\u2026and _0x4f2a("LCBwcmV2aWV3Lmxlbmd0aCAtIDUsIA==") more_0x4f2a("KSkpKSkpLCBwcmV2aWV3ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: doImport, disabled: importing, style: { width: "100%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")linear-gradient(135deg,var(--acc),var(--accD))_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")11px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("LCBib3hTaGFkb3c6IA==")0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)_0x4f2a("IH0gfSwgaW1wb3J0aW5nID8g")Importing\u2026" : "\u2713 Import _0x4f2a("ICsgcHJldmlldy5sZW5ndGggKyA=") Trades"));
}
function Sidebar({ activeTab, setTab, sidebarOpen, setSidebarOpen, setSidebarHover, userName, setUserName, accounts, seedTrades, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings, theme, setTheme }) {
const isMobile = useMediaQuery(_0x4f2a("KG1heC13aWR0aDo3NjhweCk="));
const TABS = [
{ id: _0x4f2a("b3ZlcnZpZXc="), label: _0x4f2a("T3ZlcnZpZXc="), icon:  React.createElement("svg", { width: "16_0x4f2a("LCBoZWlnaHQ6IA==")16_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")rect", { x: "3_0x4f2a("LCB5OiA=")3_0x4f2a("LCB3aWR0aDog")7_0x4f2a("LCBoZWlnaHQ6IA==")7_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")rect", { x: "14_0x4f2a("LCB5OiA=")3_0x4f2a("LCB3aWR0aDog")7_0x4f2a("LCBoZWlnaHQ6IA==")7_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")rect", { x: "3_0x4f2a("LCB5OiA=")14_0x4f2a("LCB3aWR0aDog")7_0x4f2a("LCBoZWlnaHQ6IA==")7_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")rect", { x: "14_0x4f2a("LCB5OiA=")14_0x4f2a("LCB3aWR0aDog")7_0x4f2a("LCBoZWlnaHQ6IA==")7" })) },
{ id: "analytics_0x4f2a("LCBsYWJlbDog")Analytics_0x4f2a("LCBpY29uOiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")svg", { width: "16_0x4f2a("LCBoZWlnaHQ6IA==")16_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })) },
{ id: "calendar_0x4f2a("LCBsYWJlbDog")Calendar_0x4f2a("LCBpY29uOiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")svg", { width: "16_0x4f2a("LCBoZWlnaHQ6IA==")16_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")rect", { x: "3_0x4f2a("LCB5OiA=")4_0x4f2a("LCB3aWR0aDog")18_0x4f2a("LCBoZWlnaHQ6IA==")18_0x4f2a("LCByeDog")2_0x4f2a("LCByeTog")2_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "16_0x4f2a("LCB5MTog")2_0x4f2a("LCB4Mjog")16_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "8_0x4f2a("LCB5MTog")2_0x4f2a("LCB4Mjog")8_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")10_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")10" })) },
{ id: "psychology_0x4f2a("LCBsYWJlbDog")Psychology_0x4f2a("LCBpY29uOiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")svg", { width: "16_0x4f2a("LCBoZWlnaHQ6IA==")16_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })) },
{ id: "tradelog_0x4f2a("LCBsYWJlbDog")Trade Log_0x4f2a("LCBpY29uOiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")svg", { width: "16_0x4f2a("LCBoZWlnaHQ6IA==")16_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("LCBzdHJva2VMaW5lY2FwOiA=")round_0x4f2a("LCBzdHJva2VMaW5lam9pbjog")round_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")line", { x1: "8_0x4f2a("LCB5MTog")6_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "8_0x4f2a("LCB5MTog")12_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")12_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "8_0x4f2a("LCB5MTog")18_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")18_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")6_0x4f2a("LCB4Mjog")3.01_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")12_0x4f2a("LCB4Mjog")3.01_0x4f2a("LCB5Mjog")12_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")18_0x4f2a("LCB4Mjog")3.01_0x4f2a("LCB5Mjog")18" })) }
];
const allT = accounts.length ? accounts.flatMap((a) => a.trades) : (demoDeleted ? [] : seedTrades);
const totalProfit = allT.reduce((s, t) => s + (t.profit || 0), 0);
const sidebarCapital = accounts.length > 0 && accounts[0].capital > 0 ? accounts[0].capital : 5000;
const totalPnl = calcPnL(totalProfit, sidebarCapital);
const initials = userName.split(" _0x4f2a("KS5tYXAoKHcpID0+IHdbMF0pLmpvaW4o")").slice(0, 2).toUpperCase();
const click = (id) => {
setTab(id);
if (isMobile) setSidebarOpen(false);
};
if (!sidebarOpen) return  React.createElement(
"div",
{
style: { width: isMobile ? 0 : 56, background: "var(--surface)_0x4f2a("LCBoZWlnaHQ6IA==")100vh_0x4f2a("LCBwb3NpdGlvbjog")fixed_0x4f2a("LCBsZWZ0OiAwLCB0b3A6IDAsIHpJbmRleDogMjAwLCBkaXNwbGF5OiBpc01vYmlsZSA/IA==")none" : _0x4f2a("ZmxleA=="), flexDirection: _0x4f2a("Y29sdW1u"), alignItems: _0x4f2a("Y2VudGVy"), paddingTop: 12, gap: 2, borderRight: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), boxShadow: _0x4f2a("dmFyKC0tc2gxKQ==") },
onMouseEnter: () => setSidebarHover && setSidebarHover(true),
onMouseLeave: () => setSidebarHover && setSidebarHover(false)
},
React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, overflow: "hidden_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDgsIGZsZXhTaHJpbms6IDAsIGJhY2tncm91bmQ6IA==")var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")img", { src: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQABAQADAAMBAQAAAAAAAAAAAAEHCAkCBQYEA
React.createElement(_0x4f2a("YnV0dG9u"), { onClick: (e) => { e.stopPropagation(); setSidebarOpen(true); setSidebarHover && setSidebarHover(false); }, style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), color: _0x4f2a("dmFyKC0tdDIp"), cursor: _0x4f2a("cG9pbnRlcg=="), padding: 4, borderRadius: 8, width: 40, height: 40, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), marginBottom: 4 }, title: _0x4f2a("T3BlbiBzaWRlYmFy"), onMouseEnter: (e) => {
e.currentTarget.style.background = _0x4f2a("dmFyKC0tczIp");
}, onMouseLeave: (e) => {
e.currentTarget.style.background = _0x4f2a("bm9uZQ==");
} },  React.createElement("svg", { width: "18_0x4f2a("LCBoZWlnaHQ6IA==")18_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2.5_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")line", { x1: "3_0x4f2a("LCB5MTog")6_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")12_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")12_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")18_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")18_0x4f2a("IH0pKSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: 28, height: 1, background: "var(--border)_0x4f2a("LCBtYXJnaW46IA==")2px 0 4px_0x4f2a("IH0gfSksClRBQlMubWFwKCh0KSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { key: t.id, onClick: () => click(t.id), title: t.label, style: { background: activeTab === t.id ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMTIlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), color: activeTab === t.id ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), padding: 8, borderRadius: 10, width: 38, height: 38, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), position: _0x4f2a("cmVsYXRpdmU="), transition: _0x4f2a("YWxsIC4xNXM=") }, onMouseEnter: (e) => {
if (activeTab !== t.id) e.currentTarget.style.background = _0x4f2a("dmFyKC0tczIp");
}, onMouseLeave: (e) => {
if (activeTab !== t.id) e.currentTarget.style.background = _0x4f2a("bm9uZQ==");
} }, activeTab === t.id &&  React.createElement("div", { style: { position: "absolute_0x4f2a("LCByaWdodDogLTEsIHRvcDog")50%_0x4f2a("LCB0cmFuc2Zvcm06IA==")translateY(-50%)_0x4f2a("LCB3aWR0aDogMywgaGVpZ2h0OiAyMiwgYmFja2dyb3VuZDog")var(--acc)_0x4f2a("LCBib3JkZXJSYWRpdXM6IA==")3px 0 0 3px" } }), t.icon))
);
return  React.createElement(React.Fragment, null, isMobile &&  React.createElement("div", { onClick: () => setSidebarOpen(false), style: { position: "fixed_0x4f2a("LCBpbnNldDogMCwgYmFja2dyb3VuZDog")rgba(0,0,0,.35)_0x4f2a("LCB6SW5kZXg6IDE5OSB9IH0pLCAhaXNNb2JpbGUgJiYgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "fixed_0x4f2a("LCBsZWZ0OiAwLCB0b3A6IDAsIHdpZHRoOiA4LCBoZWlnaHQ6IA==")100vh", zIndex: 198 }, onMouseEnter: () => setSidebarHover && setSidebarHover(true) }),  React.createElement(
"div",
{
style: { width: 228, background: "var(--surface)_0x4f2a("LCBoZWlnaHQ6IA==")100vh_0x4f2a("LCBwb3NpdGlvbjog")fixed_0x4f2a("LCBsZWZ0OiAwLCB0b3A6IDAsIHpJbmRleDogMjAwLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBib3JkZXJSaWdodDog")1px solid var(--border)_0x4f2a("LCBib3hTaGFkb3c6IA==")var(--sh3)_0x4f2a("LCBhbmltYXRpb246IA==")sidebarSlide .22s cubic-bezier(.22,1,.36,1)" },
onMouseLeave: () => setSidebarHover && setSidebarHover(false)
},
React.createElement("div", { style: { padding: "16px 16px 12px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: 38, height: 38, borderRadius: 10, overflow: "hidden_0x4f2a("LCBmbGV4U2hyaW5rOiAwLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")img", { src: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQABAQADAAMBAQAAAAAAAAAAAAEHCAkCBQYEA
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjKQ==");
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ==");
e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDMp");
} },  React.createElement("svg", { width: "12_0x4f2a("LCBoZWlnaHQ6IA==")12_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2.5_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")polyline", { points: "15 18 9 12 15 6_0x4f2a("IH0pKSkpLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { padding: "0 12px 14px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { "data-tour": _0x4f2a("YWRkLXRyYWRlLWJ0bg=="), onClick: () => {
click(_0x4f2a("dHJhZGVsb2c="));
setTab(_0x4f2a("dHJhZGVsb2c="));
}, style: { width: _0x4f2a("MTAwJQ=="), background: _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 11, padding: _0x4f2a("MTFweCAxNnB4"), fontSize: 13, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 8, boxShadow: _0x4f2a("MCA0cHggMTRweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjKSAzOCUsIHRyYW5zcGFyZW50KQ==") } },  React.createElement("div", { style: { width: 22, height: 22, borderRadius: 6, background: "rgba(255,255,255,.2)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDMwMCB9IH0sIA==")+"), _0x4f2a("TG9nIFRyYWRl"))),
React.createElement("div", { style: { flex: 1, padding: "0 8px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDIsIG92ZXJmbG93WTog")auto" } }, TABS.map((t) => {
const active = activeTab === t.id;
return  React.createElement(_0x4f2a("YnV0dG9u"), { key: t.id, onClick: () => click(t.id), className: _0x4f2a("bmF2LWJ0bg=="), _0x4f2a("ZGF0YS10b3Vy"): `nav-${t.id}`, style: { background: active ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMTAlLCB0cmFuc3BhcmVudCk=") : _0x4f2a("dHJhbnNwYXJlbnQ="), color: active ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: active ? 700 : 500, fontSize: 13, boxShadow: active ? _0x4f2a("aW5zZXQgMCAwIDAgMXB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2MpIDI1JSwgdHJhbnNwYXJlbnQp") : _0x4f2a("bm9uZQ==") } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { opacity: active ? 1 : 0.6 } }, t.icon),  React.createElement(_0x4f2a("c3Bhbg=="), { style: { flex: 1 } }, t.label), active &&  React.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--acc)_0x4f2a("IH0gfSkpOwp9KSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { padding: "12px 14px_0x4f2a("LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,var(--acc),var(--accD))_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IA==")#fff_0x4f2a("LCBmbGV4U2hyaW5rOiAwLCBib3hTaGFkb3c6IA==")0 2px 8px color-mix(in srgb, var(--acc) 30%, transparent)_0x4f2a("IH0gfSwgaW5pdGlhbHMpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { flex: 1, minWidth: 0 } },  React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwgdXNlck5hbWUpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDEgfSB9LCBhbGxULmxlbmd0aCwg") trades \xB7 _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { color: totalPnl >= 0 ? "var(--acc)" : _0x4f2a("dmFyKC0tdDMp"), fontWeight: 700 } }, fmtPct(totalPnl))))),  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("LCBwYWRkaW5nVG9wOiA4LCBib3JkZXJUb3A6IA==")1px solid var(--border)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjMgfSB9LCA=")Tradexy \xB7 v1.0"))
));
}
const DEFAULT_UI_BLOCKS = { bestTradeGrade: true, disciplineScore: true, bestMindset: true, worstMindset: true, mistakeRate: true, equityCurve: true, monthlyBars: true, winRateCard: true, gradeBreakdown: true, sessionBreakdown: true, modelBreakdown: true };
function OnboardingModal({ onDone, setTab, onOpenSettings }) {
const E = React.createElement;
const [step, setStep] = React.useState(0);
const [closing, setClosing] = React.useState(false);
const [previewTheme, setPreviewTheme] = React.useState(null);
const [previewAccent, setPreviewAccent] = React.useState(null);
const [spotRect, setSpotRect] = React.useState(null);
const [cardStyle, setCardStyle] = React.useState({});
const STEPS = [
{
target: null,
cardPos: 'center',
title: 'Welcome to Tradexy \uD83D\uDC4B',
subtitle: 'A quick tour of the whole app — takes under a minute. Use \u2190 \u2192 arrows or the buttons below.',
isWelcome: true,
},
{
target: '[data-tour=_0x4f2a("YWNjb3VudHMtcGFuZWw=")]',
cardPos: 'bottom-right',
tabSwitch: null,
title: '\uD83C\uDFE6 Accounts Panel',
subtitle: 'Click \u201C+ Add\u201D to create an account. Choose Demo for practice or MT5 for your live broker. Enter starting capital for accurate % P&L.',
},
{
target: '[data-tour=_0x4f2a("YWRkLXRyYWRlLWJ0bg==")]',
cardPos: 'bottom-right',
tabSwitch: null,
title: '\u270F\uFE0F Log a Trade',
subtitle: 'Click here \u2014 or press \u201CN\u201D from anywhere \u2014 to open the trade form. Log symbol, P&L, session, grade, emotions and confluences.',
},
{
target: '[data-tour=_0x4f2a("bmF2LW92ZXJ2aWV3")]',
cardPos: 'right',
tabSwitch: 'overview',
title: '\uD83D\uDCCA Overview Tab',
subtitle: 'Your main dashboard. See equity curve, win rate, profit factor and recent trades \u2014 all at a glance. Customise blocks via Settings \u2192 Edit UI.',
},
{
target: '[data-tour=_0x4f2a("bmF2LWFuYWx5dGljcw==")]',
cardPos: 'right',
tabSwitch: 'analytics',
title: '\uD83D\uDCC8 Analytics Tab',
subtitle: 'Deep-dive breakdowns by session, model, confluence and grade. The \u26A1 Edge Finder tab scores every combo to show your real statistical edges.',
},
{
target: '[data-tour=_0x4f2a("bmF2LWNhbGVuZGFy")]',
cardPos: 'right',
tabSwitch: 'calendar',
title: '\uD83D\uDCC5 Calendar Tab',
subtitle: 'Heat-map of your trading days. Green = profit, red = loss. Click any day to review all trades from that session in a popup.',
},
{
target: '[data-tour=_0x4f2a("bmF2LXBzeWNob2xvZ3k=")]',
cardPos: 'right',
tabSwitch: 'psychology',
title: '\uD83E\uDDE0 Psychology Tab',
subtitle: 'Track pre-trade emotions, mistakes and mindset patterns. See exactly which emotional states lead to wins vs losses in your data.',
},
{
target: '[data-tour=_0x4f2a("bmF2LXRyYWRlbG9n")]',
cardPos: 'right',
tabSwitch: 'tradelog',
title: '\uD83D\uDCDC Trade Log',
subtitle: 'Full history with filters. Edit any trade, attach chart screenshots, bulk-delete, and search by symbol, grade, date range and more.',
},
{
target: '[data-tour=_0x4f2a("Y2FsYy1idG4=")]',
cardPos: 'top-right',
tabSwitch: null,
title: '\uD83E\uDDEE Position Calculator',
subtitle: 'Enter your risk % and stop distance to get the exact lot size instantly. Find this at the bottom of the sidebar anytime.',
},
{
target: '[data-tour=_0x4f2a("c2V0dGluZ3MtYnRu")]',
cardPos: 'top-right',
tabSwitch: null,
title: '\u2699\uFE0F Settings',
subtitle: 'Appearance, profile, import trades from MT5/Tradovate CSV, manage lists, edit UI layout \u2014 all here.',
},
{
target: null,
cardPos: 'center',
title: '\uD83C\uDFA8 Pick Your Theme',
subtitle: 'Choose your look. Changes apply live.',
isThemePicker: true,
},
{
target: null,
cardPos: 'center',
title: "\uD83D\uDE80 You're all set!",
subtitle: 'Press N to log your first trade. Revisit this tour anytime via Settings \u2192 Guide.',
isFinish: true,
},
];
const TOTAL = STEPS.length;
const cur = STEPS[step];
const close = React.useCallback(() => {
setClosing(true);
if (previewTheme) {
const s = localStorage.getItem('tj5_theme') || 'zinc';
document.documentElement.setAttribute('data-theme', s);
}
if (previewAccent) {
const s = localStorage.getItem('tj5_accent') || 'indigo';
document.documentElement.setAttribute('data-accent', s);
}
setTimeout(() => { try { localStorage.setItem('tj_onboarding_done','1'); } catch(e){} onDone(); }, 180);
}, [onDone, previewTheme, previewAccent]);
const finish = React.useCallback(() => {
setClosing(true);
if (previewTheme) try { localStorage.setItem('tj5_theme', previewTheme); } catch(e){}
if (previewAccent) try { localStorage.setItem('tj5_accent', previewAccent); } catch(e){}
setTimeout(() => { try { localStorage.setItem('tj_onboarding_done','1'); } catch(e){} onDone(); }, 180);
}, [onDone, previewTheme, previewAccent]);
const goTo = React.useCallback((n) => {
if (n < 0 || n >= TOTAL) return;
const s = STEPS[n];
if (s.tabSwitch && setTab) setTab(s.tabSwitch);
setStep(n);
}, [TOTAL, setTab]);
React.useEffect(() => {
const h = (e) => {
if (e.key === 'Escape') close();
if (e.key === 'ArrowRight') goTo(step + 1);
if (e.key === 'ArrowLeft') goTo(step - 1);
};
window.addEventListener('keydown', h);
return () => window.removeEventListener('keydown', h);
}, [close, goTo, step]);
const applyTheme  = (id) => { document.documentElement.setAttribute('data-theme',  id); setPreviewTheme(id); };
const applyAccent = (id) => { document.documentElement.setAttribute('data-accent', id); setPreviewAccent(id); };
React.useEffect(() => {
if (!cur.target) {
setSpotRect(null);
setCardStyle({});
return;
}
const timer = setTimeout(() => {
const el = document.querySelector(cur.target);
if (!el) { setSpotRect(null); setCardStyle({}); return; }
const r = el.getBoundingClientRect();
const PAD = 7;
setSpotRect({ top: r.top - PAD, left: r.left - PAD, width: r.width + PAD * 2, height: r.height + PAD * 2 });
const pos = cur.cardPos || 'right';
const CARD_W = 310;
const VW = window.innerWidth;
const VH = window.innerHeight;
let style = { position: 'fixed', width: CARD_W, zIndex: 2147483646 };
if (pos === 'right') {
style.top = Math.max(16, Math.min(r.top, VH - 260));
style.left = Math.min(r.right + 18, VW - CARD_W - 16);
} else if (pos === 'bottom-right') {
style.top = Math.min(r.bottom + 14, VH - 220);
style.left = Math.min(r.left, VW - CARD_W - 16);
} else if (pos === 'top-right') {
const cardH = 220;
style.top = Math.max(16, r.top - cardH - 14);
style.left = Math.max(16, r.left - CARD_W - 14);
if (style.left < 16) {
style.left = Math.max(16, VW - CARD_W - 16);
style.top = Math.min(r.bottom + 12, VH - cardH - 16);
}
}
setCardStyle(style);
}, cur.tabSwitch ? 80 : 20);
return () => clearTimeout(timer);
}, [step]);
const isCentered = !cur.target;
const progress = ((step + 1) / TOTAL) * 100;
const themes = [
{ id:'zinc',     label:'Zinc',     bg:'#f4f4f5', dot:'#4f46e5' },
{ id:'light',    label:'Light',    bg:'#f0f2ff', dot:'#c8983a' },
{ id:'slate',    label:'Slate',    bg:'#f1f5f9', dot:'#475569' },
{ id:'lavender', label:'Lavender', bg:'#f0edf8', dot:'#7c3aed' },
{ id:'dark',     label:'Dark',     bg:'#0c1018', dot:'#c8983a', light:false },
{ id:'sepia',    label:'Sepia',    bg:'#f2ece0', dot:'#a87c28' },
{ id:'forest',   label:'Forest',   bg:'#eef4ee', dot:'#059669' },
{ id:'ocean',    label:'Ocean',    bg:'#e8f4f8', dot:'#0284c7' },
{ id:'rose',     label:'Rose',     bg:'#fff1f4', dot:'#e11d48' },
];
const accents = [
{ id:'indigo',  color:'#4f46e5', label:'Indigo'  },
{ id:'emerald', color:'#059669', label:'Emerald' },
{ id:'amber',   color:'#d97706', label:'Amber'   },
{ id:'rose',    color:'#e11d48', label:'Rose'    },
{ id:'cyan',    color:'#0891b2', label:'Cyan'    },
{ id:'fuchsia', color:'#c026d3', label:'Fuchsia' },
{ id:'lime',    color:'#65a30d', label:'Lime'    },
{ id:'slate',   color:'#475569', label:'Slate'   },
];
const curTheme  = document.documentElement.getAttribute('data-theme')  || 'zinc';
const curAccent = document.documentElement.getAttribute('data-accent') || 'indigo';
const cardContent = E('div', {
style: {
background: 'var(--surface)',
border: '1.5px solid var(--border2)',
borderRadius: 18,
boxShadow: 'var(--sh3)',
overflow: 'hidden',
opacity: closing ? 0 : 1,
transition: 'opacity .18s ease',
animation: 'scaleIn .22s cubic-bezier(.34,1.4,.64,1)',
...(isCentered ? { width: '100%', maxWidth: cur.isThemePicker ? 440 : 400 } : {}),
}
},
E('div', { style: { height: 3, background: 'var(--s3)' } },
E('div', { style: { height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,var(--acc),var(--accD))', transition: 'width .35s ease' } })
),
E('div', { style: { padding: '16px 18px 14px' } },
E('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 } },
E('div', { style: { fontSize: 9, fontWeight: 800, color: 'var(--acc)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--accL)', borderRadius: 6, padding: '2px 8px' } },
`${step + 1} \u00B7 ${TOTAL}`
),
E('button', {
onClick: close,
style: { background: 'var(--s2)', border: '1px solid var(--border)', borderRadius: 7, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--t3)', fontSize: 13, fontWeight: 700 }
}, '\u00D7')
),
E('div', { style: { fontSize: 14, fontWeight: 800, color: 'var(--text)', letterSpacing: '-.025em', lineHeight: 1.25, marginBottom: 7 } }, cur.title),
cur.subtitle && E('div', { style: { fontSize: 12, color: 'var(--t2)', lineHeight: 1.55, marginBottom: (cur.isThemePicker || cur.isFinish) ? 14 : 0 } }, cur.subtitle),
cur.isThemePicker && E('div', { style: { marginTop: 12 } },
E('div', { style: { fontSize: 9, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 7 } }, 'Theme'),
E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 5, marginBottom: 12 } },
...themes.map(t =>
E('div', {
key: t.id, onClick: () => applyTheme(t.id),
style: {
background: t.bg, borderRadius: 8, padding: '6px 4px 5px', textAlign: 'center', cursor: 'pointer',
border: `2px solid ${curTheme === t.id ? 'var(--acc)' : 'transparent'}`,
fontSize: 9, fontWeight: 600, color: t.light === false ? '#bbb' : '#444',
boxShadow: curTheme === t.id ? '0 0 0 2px color-mix(in srgb,var(--acc) 22%,transparent)' : 'none',
transition: 'all .12s',
}
},
E('div', { style: { width: 10, height: 10, borderRadius: '50%', background: t.dot, margin: '0 auto 4px', boxShadow: '0 1px 3px rgba(0,0,0,.2)' } }),
t.label
)
)
),
E('div', { style: { fontSize: 9, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 7 } }, 'Accent'),
E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 5 } },
...accents.slice(0, 4).map(a =>
E('div', {
key: a.id, onClick: () => applyAccent(a.id),
style: {
display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer',
padding: '5px 2px', borderRadius: 8,
background: curAccent === a.id ? 'var(--s2)' : 'transparent',
border: `1.5px solid ${curAccent === a.id ? 'var(--acc)' : 'transparent'}`,
transition: 'all .12s',
}
},
E('div', { style: { width: 18, height: 18, borderRadius: '50%', background: a.color, border: `2px solid ${curAccent === a.id ? 'white' : 'transparent'}`, boxShadow: curAccent === a.id ? `0 0 0 2px ${a.color}` : '0 1px 3px rgba(0,0,0,.15)', transition: 'all .12s' } }),
E('div', { style: { fontSize: 8, fontWeight: 700, color: curAccent === a.id ? 'var(--accD)' : 'var(--t3)', letterSpacing: '0.03em' } }, a.label)
)
)
)
),
cur.isFinish && E('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
[
{ k: 'N', v: 'New trade form from anywhere' },
{ k: '\u2190\u2192', v: 'Navigate this guide (arrow keys)' },
{ k: '\u2699\uFE0F', v: 'Settings \u2192 Guide to replay tour' },
].map((s, i) =>
E('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 8, background: 'var(--s2)', borderRadius: 8, padding: '7px 10px' } },
E('div', { style: { minWidth: 28, height: 22, background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: 'var(--acc)', fontFamily: 'monospace' } }, s.k),
E('div', { style: { fontSize: 11, color: 'var(--t2)' } }, s.v)
)
)
),
),
E('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 14px' } },
E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(6, auto)', gap: 4, alignItems: 'center' } },
Array.from({ length: TOTAL }, (_, i) =>
E('div', {
key: i, onClick: () => goTo(i),
style: { width: i === step ? 16 : 6, height: 6, borderRadius: 3, cursor: 'pointer', transition: 'all .2s', background: i === step ? 'var(--acc)' : 'var(--border2)' }
})
)
),
E('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
E('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
step === 0
? E('button', {
onClick: close,
style: { padding: '6px 13px', background: 'var(--s2)', border: '1.5px solid var(--border2)', borderRadius: 9, color: 'var(--t2)', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }
}, 'Skip')
: E('button', { onClick: () => goTo(step - 1), style: { padding: '7px 18px', borderRadius: 9, border: '1.5px solid var(--border2)', background: 'var(--s2)', color: 'var(--t2)', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' } }, '\u2190 Back'),
step < TOTAL - 1
? E('button', { onClick: () => goTo(step + 1), style: { padding: '7px 18px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg,var(--acc),var(--accD))', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px color-mix(in srgb,var(--acc) 35%,transparent)', whiteSpace: 'nowrap' } }, step === 0 ? 'Take the tour \u2192' : 'Next \u2192')
: E('button', { onClick: finish, style: { padding: '7px 18px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg,var(--acc),var(--accD))', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px color-mix(in srgb,var(--acc) 35%,transparent)' } }, '\uD83D\uDE80 Start!')
),
(step > 0 && step < TOTAL - 1) && E('div', { style: { textAlign: 'center' } },
E('button', {
onClick: close,
style: { padding: 0, background: 'none', border: 'none', color: 'var(--t3)', fontSize: 10.5, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2, letterSpacing: '-0.01em', opacity: 0.7 }
}, 'Skip tour')
)
)
)
);
if (isCentered) {
return E('div', {
onClick: (e) => { if (e.target === e.currentTarget) close(); },
style: {
position: 'fixed', inset: 0, zIndex: 2147483647,
background: 'rgba(0,0,0,.55)',
backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
opacity: closing ? 0 : 1, transition: 'opacity .18s ease',
}
}, cardContent);
}
return E('div', {
style: {
position: 'fixed', inset: 0, zIndex: 2147483646,
pointerEvents: 'none',
opacity: closing ? 0 : 1, transition: 'opacity .18s ease',
}
},
spotRect && E(React.Fragment, null,
E('div', { style: { position: 'fixed', top: 0, left: 0, right: 0, height: spotRect.top, background: 'rgba(0,0,0,.52)', transition: 'height .25s ease, top .25s ease' } }),
E('div', { style: { position: 'fixed', top: spotRect.top + spotRect.height, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,.52)', transition: 'top .25s ease' } }),
E('div', { style: { position: 'fixed', top: spotRect.top, left: 0, width: spotRect.left, height: spotRect.height, background: 'rgba(0,0,0,.52)', transition: 'all .25s ease' } }),
E('div', { style: { position: 'fixed', top: spotRect.top, left: spotRect.left + spotRect.width, right: 0, height: spotRect.height, background: 'rgba(0,0,0,.52)', transition: 'all .25s ease' } }),
E('div', { style: {
position: 'fixed',
top: spotRect.top, left: spotRect.left,
width: spotRect.width, height: spotRect.height,
border: '2px solid var(--acc)',
borderRadius: 10,
boxShadow: '0 0 0 3px color-mix(in srgb,var(--acc) 30%,transparent), 0 0 24px color-mix(in srgb,var(--acc) 20%,transparent)',
pointerEvents: 'none',
transition: 'all .25s ease',
} })
),
E('div', {
style: { ...cardStyle, pointerEvents: 'all' },
onClick: e => e.stopPropagation()
}, cardContent)
);
}
function WalletDropdown({ accounts, activeAccId, setActiveAccId, accountCapital, trueBalanceInfo, allTrades, isMobile }) {
const [open, setOpen] = React.useState(false);
const ref = React.useRef(null);
React.useEffect(() => {
function handler(e) {
if (ref.current && !ref.current.contains(e.target)) setOpen(false);
}
if (open) document.addEventListener('mousedown', handler);
return () => document.removeEventListener('mousedown', handler);
}, [open]);
const tb = trueBalanceInfo || { balance: accountCapital, adjustedCapital: accountCapital, netProfit: 0 };
const netProfit = tb.netProfit;
const capital = tb.adjustedCapital > 0 ? tb.adjustedCapital : accountCapital;
const currentBalance = tb.balance;
const netPct = capital > 0 ? (netProfit / capital * 100) : 0;
const isPos = netProfit >= 0;
const activeAcc = activeAccId === 'all' ? null : accounts.find(a => a.id === activeAccId);
const acctLabel = activeAcc ? activeAcc.label : (accounts.length > 1 ? 'All Accounts' : accounts.length === 1 ? accounts[0].label : 'No Account');
const fmt = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
const fmtFull = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);
return React.createElement('div', { ref, style: { position: 'relative' } },
React.createElement('button', {
onClick: () => setOpen(o => !o),
title: 'Account Balance',
style: {
display: 'flex', alignItems: 'center', gap: 7,
background: open ? 'var(--accF)' : 'var(--s2)',
border: `1.5px solid ${open ? 'var(--acc)' : 'var(--border)'}`,
borderRadius: 10, padding: '5px 10px 5px 9px',
cursor: 'pointer', transition: 'all .15s',
boxShadow: open ? '0 0 0 3px color-mix(in srgb, var(--acc) 15%, transparent)' : 'none'
},
onMouseEnter: (e) => { if (!open) { e.currentTarget.style.borderColor = 'var(--acc)'; e.currentTarget.style.background = 'var(--accF)'; } },
onMouseLeave: (e) => { if (!open) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--s2)'; } }
},
React.createElement('svg', { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--acc)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', style: { flexShrink: 0 } },
React.createElement('rect', { x: 1, y: 6, width: 22, height: 15, rx: 2 }),
React.createElement('path', { d: 'M1 10h22' }),
React.createElement('circle', { cx: 17, cy: 15, r: 1.5, fill: 'var(--acc)', stroke: 'none' })
),
!isMobile && React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15 } },
React.createElement('div', { style: { fontSize: 9.5, fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.04em', textTransform: 'uppercase' } },
'Balance'
),
React.createElement('div', { style: { fontSize: 12.5, fontWeight: 800, color: 'var(--text)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' } },
fmt(currentBalance)
)
),
React.createElement('svg', { width: 10, height: 10, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--t3)', strokeWidth: 3,
style: { transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', flexShrink: 0 }
},
React.createElement('polyline', { points: '6 9 12 15 18 9' })
)
),
open && React.createElement('div', {
style: {
position: 'absolute', top: 'calc(100% + 6px)', right: 0,
background: 'var(--surface)', border: '1.5px solid var(--border2)',
borderRadius: 16,
boxShadow: '0 16px 48px rgba(0,0,0,.2), 0 4px 14px rgba(0,0,0,.12)',
minWidth: 260, zIndex: 9001, padding: '14px',
animation: 'dtPickerIn .18s cubic-bezier(.22,1,.36,1)'
}
},
React.createElement('div', { style: { fontSize: 10, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10, paddingLeft: 2 } },
'💼 Current Account'
),
React.createElement('div', { style: {
background: 'linear-gradient(135deg, var(--accF), var(--s2))',
border: '1.5px solid color-mix(in srgb, var(--acc) 28%, transparent)',
borderRadius: 12, padding: '13px 14px', marginBottom: 10
} },
React.createElement('div', { style: { fontSize: 10, fontWeight: 700, color: 'var(--t3)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.04em' } },
acctLabel
),
React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 } },
React.createElement('div', { style: { fontSize: 9.5, color: 'var(--t3)', fontWeight: 600 } }, 'Starting Capital'),
React.createElement('div', { style: { fontSize: 12, fontWeight: 700, color: 'var(--t2)', fontVariantNumeric: 'tabular-nums' } }, fmtFull(capital))
),
React.createElement('div', { style: { fontSize: 24, fontWeight: 800, color: 'var(--text)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em', marginBottom: 8, lineHeight: 1 } },
fmtFull(currentBalance)
),
React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
React.createElement('div', { style: {
fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 8,
color: isPos ? 'var(--accD)' : 'var(--red)',
background: isPos ? 'color-mix(in srgb, var(--acc) 15%, transparent)' : 'var(--rBg)',
border: `1px solid ${isPos ? 'color-mix(in srgb, var(--acc) 30%, transparent)' : 'var(--rBdr)'}`,
fontVariantNumeric: 'tabular-nums'
} }, (isPos ? '▲ +' : '▼ ') + netPct.toFixed(2) + '%'),
React.createElement('div', { style: { fontSize: 11, color: isPos ? 'var(--accD)' : 'var(--red)', fontVariantNumeric: 'tabular-nums', fontWeight: 600 } },
(isPos ? '+' : '') + fmtFull(netProfit)
)
)
),
accounts.length > 1 && React.createElement('div', null,
React.createElement('div', { style: { fontSize: 9.5, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, paddingLeft: 2 } }, 'Switch Account'),
React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 3 } },
[{ id: 'all', label: '🌐 All Accounts', capital: accounts.reduce((s, a) => s + (a.capital || 0), 0), trades: accounts.flatMap(a => a.trades), color: null }]
.concat(accounts.map((a, i) => ({ id: a.id, label: a.label, capital: a.capital, trades: a.trades, color: ACC_COLS[i % ACC_COLS.length], isDemo: a.isDemo })))
.map(item => {
const iActive = activeAccId === item.id;
const tb = calcTrueBalance(item);
const accProfit = tb.netProfit;
const accCap = tb.adjustedCapital || 5000;
const accPct = accCap > 0 ? (accProfit / accCap * 100) : 0;
const accPos = accProfit >= 0;
return React.createElement('div', {
key: item.id,
onClick: () => { setActiveAccId(item.id); setOpen(false); },
style: {
display: 'flex', alignItems: 'center', justifyContent: 'space-between',
padding: '7px 10px', borderRadius: 9, cursor: 'pointer',
background: iActive ? 'var(--accF)' : 'transparent',
border: `1.5px solid ${iActive ? 'var(--acc)' : 'transparent'}`,
transition: 'all .1s'
},
onMouseEnter: (e) => { if (!iActive) e.currentTarget.style.background = 'var(--s2)'; },
onMouseLeave: (e) => { if (!iActive) e.currentTarget.style.background = 'transparent'; }
},
React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 } },
item.color
? React.createElement('div', { style: { width: 7, height: 7, borderRadius: '50%', background: item.color, flexShrink: 0 } })
: React.createElement('div', { style: { width: 7, height: 7, borderRadius: '50%', background: 'var(--acc)', flexShrink: 0 } }),
React.createElement('div', { style: { fontSize: 11.5, fontWeight: iActive ? 700 : 500, color: iActive ? 'var(--accD)' : 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 130 } },
item.label
)
),
React.createElement('div', { style: { fontSize: 10.5, fontWeight: 700, flexShrink: 0, color: accPos ? 'var(--accD)' : 'var(--red)', fontVariantNumeric: 'tabular-nums' } },
(accPos ? '+' : '') + accPct.toFixed(2) + '%'
)
);
})
)
),
accounts.length === 0 && React.createElement('div', { style: { padding: '8px 4px', fontSize: 11.5, color: 'var(--t3)', textAlign: 'center' } },
'Add an account to track your balance'
)
)
);
}
function App() {
var _a;
const [tab, setTab] = useState(_0x4f2a("b3ZlcnZpZXc="));
const [toast, setToast] = useState(null);
const [showGuide, setShowGuide] = useState(() => { try { return !localStorage.getItem(_0x4f2a("dGpfb25ib2FyZGluZ19kb25l")); } catch(e) { return true; } });
const [syncingId, setSyncingId] = useState(null);
const [activeAccId, setActiveAccId] = useState("all");
const [accounts, setAccounts] = useState(() => loadAccounts());
const [tradeMeta, setTradeMeta] = useState(() => loadTradeMeta());
const [sidebarOpen, setSidebarOpen] = useState(false);
const [sidebarHover, setSidebarHover] = useState(false);
const [uiBlocks, setUiBlocks] = useState(() => {
try {
const r = localStorage.getItem(_0x4f2a("dGo1X3VpYmxvY2tz"));
return r ? __spreadValues(__spreadValues({}, DEFAULT_UI_BLOCKS), JSON.parse(r)) : DEFAULT_UI_BLOCKS;
} catch (e) {
return DEFAULT_UI_BLOCKS;
}
});
const [editingUi, setEditingUi] = useState(false);
const [userName, setUserName] = useState(() => {
try {
return localStorage.getItem(_0x4f2a("dGo1X3VzZXJuYW1l")) || _0x4f2a("VHJhZGVy");
} catch (e) {
return _0x4f2a("VHJhZGVy");
}
});
const [dayPopup, setDayPopup] = useState(null);
const [editingDayTrade, setEditingDayTrade] = useState(null);
const [dateRange, setDateRange] = useState({ from: null, to: null });
const [theme, setTheme] = useState(() => loadTheme());
const [accent, setAccent] = useState(() => loadAccent());
const [showSettings, setShowSettings] = useState(false);
const [showCalc, setShowCalc] = useState(false);
const [dailyLimit, setDailyLimit] = useState(() => loadDailyLimit());
const [customLists, setCustomLists] = useState(() => loadCustomLists());
const usedConfluences = customLists.confluences || CONFLUENCES;
const usedSessions = customLists.sessions || SESSIONS;
const usedMistakes = customLists.mistakes || MISTAKES;
const saveCustomList = (key, val) => { const next = { ...customLists, [key]: val }; setCustomLists(next); saveCustomLists(next); };
const [openTradeForm, setOpenTradeForm] = useState(false);
const [demoBannerDismissed, setDemoBannerDismissed] = useState(function(){ try{return !!localStorage.getItem(_0x4f2a("dGo1X2RlbW9fZGlzbWlzc2Vk"));}catch(e){return false;} });
const [settingsModal, setSettingsModal] = useState(null);
const [demoDeleted, setDemoDeleted] = useState(function(){ try{return !!localStorage.getItem(_0x4f2a("dGo1X2RlbW9fZGVsZXRlZA=="));}catch(e){return false;} });
const isMobile = useMediaQuery(_0x4f2a("KG1heC13aWR0aDo3NjhweCk="));
const sidebarEffectiveOpen = sidebarOpen || sidebarHover;
useEffect(() => {
const h = (e) => {
if ([_0x4f2a("SU5QVVQ="), _0x4f2a("VEVYVEFSRUE="), _0x4f2a("U0VMRUNU")].includes(e.target.tagName)) return;
if (e.key === "n_0x4f2a("IHx8IGUua2V5ID09PSA=")N") {
e.preventDefault();
setTab("tradelog_0x4f2a("KTsKc2V0T3BlblRyYWRlRm9ybSh0cnVlKTsKfQppZiAoZS5rZXkgPT09IA==")t_0x4f2a("IHx8IGUua2V5ID09PSA=")T") {
e.preventDefault();
setTab("tradelog_0x4f2a("KTsKfQppZiAoZS5rZXkgPT09IA==")Escape_0x4f2a("KSBzZXRPcGVuVHJhZGVGb3JtKGZhbHNlKTsKfTsKd2luZG93LmFkZEV2ZW50TGlzdGVuZXIo")keydown_0x4f2a("LCBoKTsKcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKA==")keydown", h);
}, []);
useEffect(() => {
document.documentElement.setAttribute("data-theme_0x4f2a("LCB0aGVtZSk7CmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUo")data-accent", accent);
try {
localStorage.setItem("tj5_theme_0x4f2a("LCB0aGVtZSk7CmxvY2FsU3RvcmFnZS5zZXRJdGVtKA==")tj5_accent", accent);
} catch (e) {
}
}, [theme, accent]);
useEffect(() => {
if (!isMobile) setSidebarOpen(true);
}, [isMobile]);
useEffect(() => {
try {
localStorage.setItem(_0x4f2a("dGo1X3VpYmxvY2tz"), JSON.stringify(uiBlocks));
} catch (e) {
}
}, [uiBlocks]);
const toggleBlock = useCallback((k) => setUiBlocks((b) => __spreadProps(__spreadValues({}, b), { [k]: !b[k] })), []);
const resetUi = useCallback(() => setUiBlocks(DEFAULT_UI_BLOCKS), []);
useEffect(() => {
saveAccounts(accounts);
}, [accounts]);
useEffect(function(){
try{
if(!localStorage.getItem(_0x4f2a("dGo1X3Zpc2l0ZWQ="))){
localStorage.setItem(_0x4f2a("dGo1X3Zpc2l0ZWQ="),"1");
var ts=Date.now();
function _mk(o,sym,d,ti,si,en,ex,pnl,pr,se,mo,eb,ea,mi,gr,er,ar,no,co,kl){return{id:ts+o,symbol:sym,entryDate:d,entryTime:ti,side:si,entryPrice:en,exitPrice:ex,pnl:pnl,profit:pr,status:_0x4f2a("Q2xvc2Vk"),confluences:co,keyLevels:kl,session:se,model:mo,emotionBefore:eb,emotionAfter:ea,mistakes:mi,grade:gr,expectedRR:er,actualRR:ar,notes:no,riskAmount:50,stopLoss:0,takeProfit:0,accountId:_0x4f2a("ZGVtby1maXJzdA=="),tags:[_0x4f2a("U2FtcGxlIERhdGE=")],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};}
setAccounts([{id:_0x4f2a("ZGVtby1maXJzdA=="),label:_0x4f2a("RGVtbyBBY2NvdW50"),capital:10000,isDemo:true,login:"_0x4f2a("LHBhc3N3b3JkOg==")_0x4f2a("LHNlcnZlcjo=")_0x4f2a("LHR5cGU6")demo_0x4f2a("LGNvbm5lY3RlZDpmYWxzZSxsYXN0U3luYzpudWxsLGluZm86bnVsbCx0cmFkZXM6WwpfbWsoMSw=")XAUUSD",_0x4f2a("MjAyNi0wMy0wMw=="),_0x4f2a("MDk6MTU6MDA="),_0x4f2a("TG9uZw=="),2915.5,2928.3,1.25,125,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"A","1:3",_0x4f2a("MToyLjg="),_0x4f2a("U2FtcGxl"),[_0x4f2a("QnJlYWsgb2YgU3RydWN0dXJl"),_0x4f2a("RmFpciBWYWx1ZSBHYXA=")],[_0x4f2a("RGFpbHkgT3Blbg==")]),
_mk(2,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0wNA=="),_0x4f2a("MTQ6MzA6MDA="),_0x4f2a("U2hvcnQ="),2942,2935.1,0.72,72,_0x4f2a("TmV3IFlvcms="),_0x4f2a("SUNUIENvbmNlcHRz"),_0x4f2a("Q29uZmlkZW50"),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"A","1:2",_0x4f2a("MToyLjE="),_0x4f2a("U2FtcGxl"),[_0x4f2a("T3JkZXIgQmxvY2s="),_0x4f2a("TGlxdWlkaXR5IFN3ZWVw")],[_0x4f2a("UmVzaXN0YW5jZSBab25l")]),
_mk(3,_0x4f2a("RVVSVVNE"),_0x4f2a("MjAyNi0wMy0wNQ=="),_0x4f2a("MDg6MDA6MDA="),_0x4f2a("TG9uZw=="),1.082,1.0785,-0.62,-62,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("UHJpY2UgQWN0aW9u"),_0x4f2a("Rk9NTw=="),_0x4f2a("RnJ1c3RyYXRlZA=="),_0x4f2a("Rk9NTyBFbnRyeQ=="),"D","1:2","",_0x4f2a("U2FtcGxl"),[_0x4f2a("VHJlbmRsaW5lIEJvdW5jZQ==")],[_0x4f2a("U3VwcG9ydCBab25l")]),
_mk(4,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0xMA=="),_0x4f2a("MDM6MjA6MDA="),_0x4f2a("TG9uZw=="),2888,2901.5,1.05,105,_0x4f2a("QXNpYQ=="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"A+","1:3",_0x4f2a("MTozLjE="),_0x4f2a("U2FtcGxl"),[_0x4f2a("RmFpciBWYWx1ZSBHYXA="),_0x4f2a("Q2hhbmdlIG9mIENoYXJhY3Rlcg==")],[_0x4f2a("RGVtYW5kIFpvbmU=")]),
_mk(5,_0x4f2a("R0JQVVNE"),_0x4f2a("MjAyNi0wMy0xMQ=="),_0x4f2a("MTA6NDU6MDA="),_0x4f2a("U2hvcnQ="),1.294,1.296,-0.38,-38,_0x4f2a("TG9uZG9uIE1pZA=="),_0x4f2a("UHJpY2UgQWN0aW9u"),_0x4f2a("TmV1dHJhbA=="),_0x4f2a("TmV1dHJhbA=="),_0x4f2a("V3JvbmcgVGltZWZyYW1l"),"C","1:2","",_0x4f2a("U2FtcGxl"),[_0x4f2a("U3VwcGx5L0RlbWFuZCBab25l")],[_0x4f2a("V2Vla2x5IEhpZ2g=")]),
_mk(6,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0xNA=="),_0x4f2a("MDc6MDA6MDA="),_0x4f2a("TG9uZw=="),2920,2938,1.55,155,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("U2hhcnAgJiBBbGVydA=="),_0x4f2a("UHJvdWQ="),_0x4f2a("Tm9uZQ=="),"A","1:3",_0x4f2a("MTozLjI="),_0x4f2a("U2FtcGxl"),[_0x4f2a("T3JkZXIgQmxvY2s="),_0x4f2a("TWFya2V0IFN0cnVjdHVyZSBTaGlmdA=="),_0x4f2a("VldBUA==")],[_0x4f2a("T0IgTGV2ZWw="),_0x4f2a("UHJldmlvdXMgSGlnaA==")]),
_mk(7,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0xNw=="),_0x4f2a("MTU6MDA6MDA="),_0x4f2a("U2hvcnQ="),2955,2945,0.85,85,_0x4f2a("TmV3IFlvcms="),_0x4f2a("SUNUIENvbmNlcHRz"),_0x4f2a("Q29uZmlkZW50"),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"B","1:2",_0x4f2a("MToxLjk="),_0x4f2a("U2FtcGxl"),[_0x4f2a("SW5kdWNlbWVudA=="),_0x4f2a("UHJlbWl1bS9EaXNjb3VudA==")],[_0x4f2a("UHJlbWl1bSBab25l")]),
_mk(8,_0x4f2a("RVVSVVNE"),_0x4f2a("MjAyNi0wMy0xOA=="),_0x4f2a("MDk6MzA6MDA="),_0x4f2a("TG9uZw=="),1.085,1.083,-0.44,-44,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("UHJpY2UgQWN0aW9u"),_0x4f2a("T3ZlcmNvbmZpZGVudA=="),_0x4f2a("RGlzYXBwb2ludGVk"),_0x4f2a("UG9zaXRpb24gVG9vIExhcmdl"),"D","1:2","",_0x4f2a("U2FtcGxl"),[_0x4f2a("VHJlbmRsaW5lIEJvdW5jZQ==")],[_0x4f2a("RGFpbHkgTGV2ZWw=")]),
_mk(9,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0yMA=="),_0x4f2a("MDc6NDU6MDA="),_0x4f2a("TG9uZw=="),2968,2984,1.35,135,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"A","1:3",_0x4f2a("MTozLjA="),_0x4f2a("U2FtcGxl"),[_0x4f2a("QnJlYWsgb2YgU3RydWN0dXJl"),_0x4f2a("T3JkZXIgQmxvY2s=")],[_0x4f2a("RGVtYW5kIFpvbmU="),_0x4f2a("RGFpbHkgT3Blbg==")]),
_mk(10,_0x4f2a("R0JQVVNE"),_0x4f2a("MjAyNi0wMy0yMQ=="),_0x4f2a("MTQ6MTU6MDA="),_0x4f2a("U2hvcnQ="),1.2985,1.2940,0.68,68,_0x4f2a("TmV3IFlvcms="),_0x4f2a("SUNUIENvbmNlcHRz"),_0x4f2a("UGF0aWVudA=="),_0x4f2a("Q2FsbQ=="),_0x4f2a("Tm9uZQ=="),"B","1:2",_0x4f2a("MToyLjI="),_0x4f2a("U2FtcGxl"),[_0x4f2a("TGlxdWlkaXR5IFN3ZWVw"),_0x4f2a("RmFpciBWYWx1ZSBHYXA=")],[_0x4f2a("V2Vla2x5IExldmVs")]),
_mk(11,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0yNA=="),_0x4f2a("MDk6MDA6MDA="),_0x4f2a("U2hvcnQ="),3010,3024,-0.92,-92,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("UHJpY2UgQWN0aW9u"),_0x4f2a("U3RyZXNzZWQ="),_0x4f2a("QnVybmVkIE91dA=="),_0x4f2a("TW92ZWQgU3RvcCBMb3Nz"),"D","1:2","",_0x4f2a("U2FtcGxl"),[_0x4f2a("U3VwcGx5L0RlbWFuZCBab25l")],[_0x4f2a("UmVzaXN0YW5jZSBab25l")]),
_mk(12,_0x4f2a("RVVSVVNE"),_0x4f2a("MjAyNi0wMy0yNQ=="),_0x4f2a("MDM6MzA6MDA="),_0x4f2a("TG9uZw=="),1.0795,1.0840,0.75,75,_0x4f2a("QXNpYQ=="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("TW90aXZhdGVk"),_0x4f2a("RW5lcmdpemVk"),_0x4f2a("Tm9uZQ=="),"B","1:2",_0x4f2a("MToyLjQ="),_0x4f2a("U2FtcGxl"),[_0x4f2a("Q2hhbmdlIG9mIENoYXJhY3Rlcg=="),_0x4f2a("RmFpciBWYWx1ZSBHYXA=")],[_0x4f2a("RGVtYW5kIFpvbmU=")]),
_mk(13,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0yNg=="),_0x4f2a("MTU6MzA6MDA="),_0x4f2a("TG9uZw=="),3025,3045,1.65,165,_0x4f2a("TmV3IFlvcms="),_0x4f2a("SUNUIENvbmNlcHRz"),_0x4f2a("U2hhcnAgJiBBbGVydA=="),_0x4f2a("UHJvdWQ="),_0x4f2a("Tm9uZQ=="),"A+","1:4",_0x4f2a("MTozLjg="),_0x4f2a("U2FtcGxl"),[_0x4f2a("T3JkZXIgQmxvY2s="),_0x4f2a("TGlxdWlkaXR5IFN3ZWVw"),_0x4f2a("UHJlbWl1bS9EaXNjb3VudA==")],[_0x4f2a("T0IgTGV2ZWw="),_0x4f2a("RGFpbHkgT3Blbg==")]),
_mk(14,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wMy0yNw=="),_0x4f2a("MDc6MTA6MDA="),_0x4f2a("U2hvcnQ="),3048,3039,0.62,62,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"B","1:2",_0x4f2a("MToxLjg="),_0x4f2a("U2FtcGxl"),[_0x4f2a("TWFya2V0IFN0cnVjdHVyZSBTaGlmdA=="),_0x4f2a("VldBUA==")],[_0x4f2a("UHJlbWl1bSBab25l")]),
_mk(15,_0x4f2a("R0JQVVNE"),_0x4f2a("MjAyNi0wMy0zMQ=="),_0x4f2a("MDk6NDU6MDA="),_0x4f2a("TG9uZw=="),1.2910,1.2885,-0.45,-45,_0x4f2a("TG9uZG9uIE9wZW4="),_0x4f2a("UHJpY2UgQWN0aW9u"),_0x4f2a("SGVzaXRhbnQ="),_0x4f2a("Q29uZnVzZWQ="),_0x4f2a("TGF0ZSBFbnRyeQ=="),"C","1:2","",_0x4f2a("U2FtcGxl"),[_0x4f2a("VHJlbmRsaW5lIEJvdW5jZQ==")],[_0x4f2a("U3VwcG9ydCBab25l")]),
_mk(16,_0x4f2a("WEFVVVNE"),_0x4f2a("MjAyNi0wNC0wMQ=="),_0x4f2a("MDM6MTU6MDA="),_0x4f2a("TG9uZw=="),3060,3078,1.42,142,_0x4f2a("QXNpYQ=="),_0x4f2a("U01DIChTbWFydCBNb25leSk="),_0x4f2a("Q2FsbSAmIEZvY3VzZWQ="),_0x4f2a("U2F0aXNmaWVk"),_0x4f2a("Tm9uZQ=="),"A","1:3",_0x4f2a("MToyLjk="),_0x4f2a("U2FtcGxl"),[_0x4f2a("RmFpciBWYWx1ZSBHYXA="),_0x4f2a("QnJlYWsgb2YgU3RydWN0dXJl")],[_0x4f2a("RGVtYW5kIFpvbmU="),_0x4f2a("V2Vla2x5IExldmVs")])
]}]);
}
}catch(e){}
},[]);
useEffect(() => {
saveTradeMeta(tradeMeta);
}, [tradeMeta]);
useEffect(() => {
saveDailyLimit(dailyLimit);
}, [dailyLimit]);
const showToast = useCallback((msg, type = _0x4f2a("aW5mbw==")) => {
setToast({ msg, type });
setTimeout(() => setToast(null), 4500);
}, []);
const handleSync = useCallback(async (acc) => {
if (acc.isDemo) {
showToast(`${acc.label} is a demo account \u2014 no sync needed`, _0x4f2a("aW5mbw=="));
return;
}
setSyncingId(acc.id);
try {
const res = await fetch(`${API_URL}/sync-account`, { method: _0x4f2a("UE9TVA=="), headers: { _0x4f2a("Q29udGVudC1UeXBl"): _0x4f2a("YXBwbGljYXRpb24vanNvbg==") }, body: JSON.stringify({ login: acc.login, password: acc.password, server: acc.server }) });
if (!res.ok) {
let m = `Server error ${res.status}`;
try {
const j = await res.json();
m = j.error || m;
} catch (e) {
}
throw new Error(m);
}
const data = await res.json();
const incoming = (data.trades || []).map((t) => __spreadProps(__spreadValues({}, t), { accountId: acc.id }));
setAccounts((prev) => prev.map((a) => {
if (a.id !== acc.id) return a;
const existingMap = {};
(a.trades || []).forEach((et) => {
if (et.id) existingMap[String(et.id)] = et;
});
const MANUAL_FIELDS = [_0x4f2a("Y29uZmx1ZW5jZXM="), _0x4f2a("bm90ZXM="), _0x4f2a("Z3JhZGU="), _0x4f2a("ZW1vdGlvbkJlZm9yZQ=="), _0x4f2a("ZW1vdGlvbkFmdGVy"), _0x4f2a("bWlzdGFrZXM="), _0x4f2a("dGFncw=="), _0x4f2a("c2Vzc2lvbg=="), _0x4f2a("bW9kZWw="), _0x4f2a("ZXhwZWN0ZWRSUg=="), _0x4f2a("YWN0dWFsUlI="), _0x4f2a("cmlza0Ftb3VudA=="), _0x4f2a("c3RvcExvc3M="), _0x4f2a("dGFrZVByb2ZpdA==")];
const merged = incoming.map((it) => {
const key = String(it.id);
const existing = existingMap[key];
if (!existing) return sanitizeTrade(it);
const manualOverrides = {};
MANUAL_FIELDS.forEach((f) => {
if (existing[f] !== void 0 && existing[f] !== null && existing[f] !== "") {
if (f === "confluences") {
manualOverrides[f] = Array.isArray(existing[f]) && existing[f].length > 0 ? existing[f] : it[f] || [];
} else {
manualOverrides[f] = existing[f];
}
}
});
return sanitizeTrade(__spreadProps(__spreadValues(__spreadValues({}, it), manualOverrides), { accountId: acc.id }));
});
return __spreadProps(__spreadValues({}, a), { trades: merged, info: data.account || null, connected: true, lastSync: ( new Date()).toLocaleTimeString() });
}));
showToast(`\u2713 ${acc.label} \u2014 ${incoming.length} trades synced (manual data preserved)`, _0x4f2a("c3VjY2Vzcw=="));
} catch (err) {
showToast(err.message.includes(_0x4f2a("ZmV0Y2g=")) || err.message.includes(_0x4f2a("RmFpbGVk")) ? _0x4f2a("Q2Fubm90IHJlYWNoIE1UNSBiYWNrZW5k") : err.message, _0x4f2a("ZXJyb3I="));
setAccounts((prev) => prev.map((a) => a.id !== acc.id ? a : __spreadProps(__spreadValues({}, a), { connected: false })));
} finally {
setSyncingId(null);
}
}, [showToast]);
const handleAddAdjustment = useCallback((accId, adj) => {
setAccounts(prev => prev.map(a => a.id !== accId ? a : {
...a,
balanceAdjustments: [...(a.balanceAdjustments || []), adj].sort((x, y) => x.date.localeCompare(y.date))
}));
}, []);
const handleRemoveAdjustment = useCallback((accId, idx) => {
setAccounts(prev => prev.map(a => a.id !== accId ? a : {
...a,
balanceAdjustments: (a.balanceAdjustments || []).filter((_, i) => i !== idx)
}));
}, []);
const handleAddAcc = useCallback((c) => {
const id = Date.now().toString();
const na = __spreadProps(__spreadValues({}, c), { id, trades: [], info: null, connected: false, lastSync: null });
setAccounts((p) => [...p, na]);
setDemoDeleted(false);
try { localStorage.removeItem(_0x4f2a("dGo1X2RlbW9fZGVsZXRlZA==")); } catch(e) {}
if (!c.isDemo) setTimeout(() => handleSync(na), 60);
else showToast(`\u2713 ${c.label} demo account created`, _0x4f2a("c3VjY2Vzcw=="));
}, [handleSync, showToast]);
const handleRemoveAcc = useCallback((id) => {
setAccounts((p) => {
const next = p.filter((a) => a.id !== id);
if (next.length === 0) {
setDemoDeleted(true);
try { localStorage.setItem(_0x4f2a("dGo1X2RlbW9fZGVsZXRlZA=="), "1"); } catch(e) {}
}
return next;
});
if (activeAccId === id) setActiveAccId("all");
}, [activeAccId]);
const selectedAccount = useMemo(() => {
if (activeAccId === "all") return null;
return accounts.find((a) => a.id === activeAccId) || null;
}, [accounts, activeAccId]);
const trueBalanceInfo = useMemo(() => {
if (selectedAccount) return calcTrueBalance(selectedAccount);
if (accounts.length > 0) {
const totalBalance = accounts.reduce((s, a) => s + calcTrueBalance(a).balance, 0);
const totalCapital = accounts.reduce((s, a) => s + (a.capital || 0), 0);
return { balance: totalBalance, capital: totalCapital, adjustedCapital: totalCapital, netProfit: totalBalance - totalCapital };
}
return { balance: 5000, capital: 5000, adjustedCapital: 5000, netProfit: 0 };
}, [selectedAccount, accounts]);
const accountCapital = useMemo(() => {
return trueBalanceInfo.adjustedCapital > 0 ? trueBalanceInfo.adjustedCapital : 5000;
}, [trueBalanceInfo]);
const allTrades = useMemo(() => {
var _a2;
if (accounts.length === 0) return demoDeleted ? [] : SEED;
if (activeAccId === "all") return accounts.flatMap((a) => a.trades);
return ((_a2 = accounts.find((a) => a.id === activeAccId)) == null ? void 0 : _a2.trades) || [];
}, [accounts, activeAccId, demoDeleted]);
const displayTrades = useMemo(() => {
if (!dateRange.from && !dateRange.to) return allTrades;
return allTrades.filter((t) => (!dateRange.from || t.entryDate >= dateRange.from) && (!dateRange.to || t.entryDate <= dateRange.to));
}, [allTrades, dateRange]);
const handleDeleteTrade = useCallback((id, skipConfirm = false) => {
setAccounts((p) => p.map((a) => __spreadProps(__spreadValues({}, a), { trades: a.trades.filter((t) => t.id !== id) })));
}, []);
const handleEditTrade = useCallback((id, patch) => setAccounts((p) => p.map((a) => __spreadProps(__spreadValues({}, a), { trades: a.trades.map((t) => t.id !== id ? t : sanitizeTrade(__spreadProps(__spreadValues(__spreadValues({}, t), patch), { id, updatedAt: ( new Date()).toISOString() })) || t) }))), []);
const handleDuplicateTrade = useCallback((t) => {
const dup = sanitizeTrade(__spreadProps(__spreadValues({}, t), { id: Date.now(), notes: `[Duplicate] ${t.notes || ""}`.trim(), createdAt: ( new Date()).toISOString(), updatedAt: ( new Date()).toISOString() }));
if (!dup) return;
setAccounts((p) => p.map((a, i) => i === 0 ? __spreadProps(__spreadValues({}, a), { trades: [dup, ...a.trades] }) : a));
}, []);
const handleAddTrade = useCallback((t) => {
const targetAccId = t.accountId || _0x4f2a("bWFudWFs");
const nt = sanitizeTrade(__spreadProps(__spreadValues({}, t), { id: Date.now(), accountId: targetAccId, createdAt: ( new Date()).toISOString(), updatedAt: ( new Date()).toISOString() }));
if (!nt) return;
setAccounts((p) => {
if (p.length === 0) {
const demo = { id: _0x4f2a("bWFudWFsLWRlZmF1bHQ="), label: _0x4f2a("TXkgSm91cm5hbA=="), isDemo: true, connected: false, capital: 1e4, login: "_0x4f2a("LCBwYXNzd29yZDog")_0x4f2a("LCBzZXJ2ZXI6IA==")_0x4f2a("LCB0eXBlOiA=")demo", info: null, lastSync: null, trades: [nt] };
return [demo];
}
const targetIdx = p.findIndex((a) => a.id === targetAccId);
const idx = targetIdx >= 0 ? targetIdx : 0;
return p.map((a, i) => i === idx ? __spreadProps(__spreadValues({}, a), { trades: [nt, ...a.trades] }) : a);
});
setDemoDeleted(false);
try { localStorage.removeItem(_0x4f2a("dGo1X2RlbW9fZGVsZXRlZA==")); } catch(e) {}
}, []);
const handleImportTrades = useCallback((importedTrades) => {
const sanitized = importedTrades.map((t) => sanitizeTrade(__spreadProps(__spreadValues({}, t), { accountId: _0x4f2a("bWFudWFs"), createdAt: t.createdAt || ( new Date()).toISOString(), updatedAt: ( new Date()).toISOString() }))).filter(Boolean);
if (!sanitized.length) return;
setAccounts((p) => {
if (p.length === 0) {
const demo = { id: _0x4f2a("bWFudWFsLWRlZmF1bHQ="), label: _0x4f2a("TXkgSm91cm5hbA=="), isDemo: true, connected: false, capital: 1e4, login: "_0x4f2a("LCBwYXNzd29yZDog")_0x4f2a("LCBzZXJ2ZXI6IA==")_0x4f2a("LCB0eXBlOiA=")demo", info: null, lastSync: null, trades: sanitized };
return [demo];
}
return p.map((a, i) => {
if (i !== 0) return a;
const existingIds = new Set((a.trades || []).map(t => String(t.id)));
const newOnly = sanitized.filter(t => !existingIds.has(String(t.id)));
return __spreadProps(__spreadValues({}, a), { trades: [...newOnly, ...a.trades] });
});
});
showToast(`\u2713 Imported ${sanitized.length} trades successfully`, _0x4f2a("c3VjY2Vzcw=="));
}, [showToast]);
const handleImportToAccount = useCallback((importedTrades, targetAccId) => {
const isFullFidelity = importedTrades.length > 0 && (importedTrades[0]._importType === _0x4f2a("ZnVsbA=="));
const valid = isFullFidelity
? importedTrades.filter(t => t && t.symbol && t.entryDate)
: importedTrades.filter(t => typeof t.profit === _0x4f2a("bnVtYmVy") && t.profit !== 0 && !isNaN(t.profit));
if (!valid.length) { showToast(_0x4f2a("Tm8gdmFsaWQgdHJhZGVzIHRvIGltcG9ydA=="), _0x4f2a("ZXJyb3I=")); return; }
const PRESERVE = [_0x4f2a("Y29uZmx1ZW5jZXM="),_0x4f2a("bm90ZXM="),_0x4f2a("Z3JhZGU="),_0x4f2a("ZW1vdGlvbkJlZm9yZQ=="),_0x4f2a("ZW1vdGlvbkFmdGVy"),_0x4f2a("bWlzdGFrZXM="),_0x4f2a("dGFncw=="),_0x4f2a("c2Vzc2lvbg=="),_0x4f2a("bW9kZWw="),_0x4f2a("ZXhwZWN0ZWRSUg=="),_0x4f2a("YWN0dWFsUlI="),_0x4f2a("cmlza0Ftb3VudA=="),_0x4f2a("c3RvcExvc3M="),_0x4f2a("dGFrZVByb2ZpdA=="),_0x4f2a("a2V5TGV2ZWxz")];
setAccounts((p) => {
if (p.length === 0) {
const demoId = _0x4f2a("ZGVtby1pbXBvcnRlZC0=") + Date.now();
const newTrades = valid.map(t => sanitizeTrade({ ...t, id: t.id || (Date.now() + Math.random()), accountId: demoId, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })).filter(Boolean);
const demo = { id: demoId, label: _0x4f2a("SW1wb3J0ZWQgVHJhZGVz"), isDemo: true, connected: false, capital: 1e4, login: "_0x4f2a("LCBwYXNzd29yZDog")_0x4f2a("LCBzZXJ2ZXI6IA==")_0x4f2a("LCB0eXBlOiA=")demo", info: null, lastSync: null, trades: newTrades };
return [demo];
}
const mergeIntoAccount = (a) => {
if (!a.isDemo) return a;
const existing = a.trades || [];
const existingById = {};
existing.forEach(et => { if (et.id != null) existingById[String(et.id)] = et; });
let addedCount = 0, updatedCount = 0;
const updatedExisting = existing.map(et => {
const incoming = valid.find(it => String(it.id) === String(et.id));
if (!incoming) return et;
const preserved = {};
PRESERVE.forEach(f => {
const ev = et[f];
const hasVal = ev !== undefined && ev !== null && ev !== "" && !(Array.isArray(ev) && ev.length === 0);
if (hasVal) preserved[f] = ev;
});
updatedCount++;
return sanitizeTrade({ ...et, ...incoming, ...preserved, id: et.id, accountId: a.id, updatedAt: new Date().toISOString() }) || et;
});
const newTrades = valid
.filter(it => !existingById[String(it.id)])
.map(it => { addedCount++; return sanitizeTrade({ ...it, id: it.id || (Date.now() + Math.random()), accountId: a.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); })
.filter(Boolean);
return { ...a, trades: [...newTrades, ...updatedExisting] };
};
if (targetAccId) {
return p.map(a => a.id !== targetAccId ? a : mergeIntoAccount(a));
}
const firstDemoIdx = p.findIndex(a => a.isDemo);
if (firstDemoIdx >= 0) {
return p.map((a, i) => i !== firstDemoIdx ? a : mergeIntoAccount(a));
}
return p.map((a, i) => i === 0 ? mergeIntoAccount(a) : a);
});
const existingIds = new Set();
setAccounts(p => {
const acc = p.find(a => a.id === targetAccId) || p.find(a => a.isDemo) || p[0];
if (acc) (acc.trades || []).forEach(t => existingIds.add(String(t.id)));
return p;
});
const newCount = valid.filter(t => !existingIds.has(String(t.id))).length;
const updCount = valid.length - newCount;
showToast(`\u2713 Import done: ${newCount} new trade${newCount!==1?'s':''} added${updCount>0?`, ${updCount} updated (manual data preserved)`:''}`, _0x4f2a("c3VjY2Vzcw=="));
}, [showToast]);
const handleUpdateMeta = useCallback((id, patch) => {
setTradeMeta((m) => {
const next = __spreadProps(__spreadValues({}, m), { [id]: __spreadValues(__spreadValues({}, m[id] || {}), patch) });
saveTradeMeta(next);
return next;
});
}, []);
const saveUserName = (n) => {
setUserName(n);
try {
localStorage.setItem(_0x4f2a("dGo1X3VzZXJuYW1l"), n);
} catch (e) {
}
};
const TABS_INFO = [{ id: _0x4f2a("b3ZlcnZpZXc="), label: _0x4f2a("T3ZlcnZpZXc=") }, { id: _0x4f2a("YW5hbHl0aWNz"), label: _0x4f2a("QW5hbHl0aWNz") }, { id: _0x4f2a("cHN5Y2hvbG9neQ=="), label: _0x4f2a("UHN5Y2hvbG9neQ==") }, { id: _0x4f2a("dHJhZGVsb2c="), label: _0x4f2a("RnVsbCBUcmFkZXM=") }, { id: _0x4f2a("Y2FsZW5kYXI="), label: _0x4f2a("Q2FsZW5kYXI=") }];
const live = accounts.filter((a) => a.connected).length;
const showDateBar = [_0x4f2a("b3ZlcnZpZXc="), _0x4f2a("YW5hbHl0aWNz"), _0x4f2a("dHJhZGVsb2c=")].includes(tab);
const sideW = isMobile ? 0 : sidebarEffectiveOpen ? 228 : 56;
const ic = accountCapital;
const [settingsTab, setSettingsTab] = useState(_0x4f2a("YXBwZWFyYW5jZQ=="));
const THEMES = [
{ id: _0x4f2a("emluYw=="),     label: _0x4f2a("WmluYw=="),     icon: "\u{1FA76}" },
{ id: "light_0x4f2a("LCAgICBsYWJlbDog")Light_0x4f2a("LCAgICBpY29uOiA=")\u2600\uFE0F" },
{ id: "slate_0x4f2a("LCAgICBsYWJlbDog")Slate_0x4f2a("LCAgICBpY29uOiA=")\u{1F5F3}\uFE0F" },
{ id: "lavender_0x4f2a("LCBsYWJlbDog")Lavender_0x4f2a("LCBpY29uOiA=")\u{1F338}" },
{ id: "dark_0x4f2a("LCAgICAgbGFiZWw6IA==")Dark_0x4f2a("LCAgICAgaWNvbjog")\u{1F319}" },
{ id: "sepia_0x4f2a("LCAgICBsYWJlbDog")Sepia_0x4f2a("LCAgICBpY29uOiA=")\u{1F4DC}" },
{ id: "forest_0x4f2a("LCAgIGxhYmVsOiA=")Forest_0x4f2a("LCAgIGljb246IA==")\u{1F333}" },
{ id: "ocean_0x4f2a("LCAgICBsYWJlbDog")Ocean_0x4f2a("LCAgICBpY29uOiA=")\u{1F30A}" },
{ id: "rose_0x4f2a("LCAgICAgbGFiZWw6IA==")Rose_0x4f2a("LCAgICAgaWNvbjog")\u{1F339}" },
];
const ACCENTS = [
{ id: "indigo_0x4f2a("LCAgbGFiZWw6IA==")Indigo_0x4f2a("LCAgY29sOiA=")#4f46e5" },
{ id: "emerald_0x4f2a("LCBsYWJlbDog")Emerald_0x4f2a("LCBjb2w6IA==")#059669" },
{ id: "amber_0x4f2a("LCAgIGxhYmVsOiA=")Amber_0x4f2a("LCAgIGNvbDog")#d97706" },
{ id: "rose_0x4f2a("LCAgICBsYWJlbDog")Rose_0x4f2a("LCAgICBjb2w6IA==")#e11d48" },
{ id: "fuchsia_0x4f2a("LCBsYWJlbDog")Fuchsia_0x4f2a("LCBjb2w6IA==")#c026d3" },
{ id: "pink_0x4f2a("LCAgICBsYWJlbDog")Pink_0x4f2a("LCAgICBjb2w6IA==")#db2777" },
{ id: "cyan_0x4f2a("LCAgICBsYWJlbDog")Cyan_0x4f2a("LCAgICBjb2w6IA==")#0891b2" },
{ id: "lime_0x4f2a("LCAgICBsYWJlbDog")Lime_0x4f2a("LCAgICBjb2w6IA==")#65a30d" },
{ id: "slate_0x4f2a("LCAgIGxhYmVsOiA=")Slate_0x4f2a("LCAgIGNvbDog")#475569" }
];
const _settingsOnImport = handleImportTrades;
return  React.createElement(ErrorBoundary, null,  React.createElement("div", { style: { minHeight: "100vh_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--bg)_0x4f2a("LCBjb2xvcjog")var(--text)" } }, showGuide &&  React.createElement(OnboardingModal, { onDone: () => { setShowGuide(false); try { localStorage.setItem(_0x4f2a("dGpfb25ib2FyZGluZ19kb25l"), "1"); } catch(e) {} }, setTab, onOpenSettings: () => { setShowSettings(true); } }), showSettings &&  React.createElement("div", { style: { position: "fixed_0x4f2a("LCBpbnNldDogMCwgYmFja2dyb3VuZDog")rgba(0,0,0,.5)_0x4f2a("LCBiYWNrZHJvcEZpbHRlcjog")blur(12px)_0x4f2a("LCB6SW5kZXg6IDYwMCwgZGlzcGxheTog")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBwYWRkaW5nOiAxNiwgYW5pbWF0aW9uOiA=")fadeIn .2s ease_0x4f2a("IH0sIG9uQ2xpY2s6ICgpID0+IHNldFNob3dTZXR0aW5ncyhmYWxzZSkgfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCB3aWR0aDogODIwLCBtYXhXaWR0aDog")100%_0x4f2a("LCBtYXhIZWlnaHQ6IA==")calc(100vh - 32px)_0x4f2a("LCBvdmVyZmxvd1k6IA==")auto_0x4f2a("LCBib3hTaGFkb3c6IA==")var(--sh3)_0x4f2a("LCBhbmltYXRpb246IA==")scaleIn .22s cubic-bezier(.22,1,.36,1)_0x4f2a("IH0sIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { padding: "20px 24px 0_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 15, fontWeight: 700, letterSpacing: "-.3px_0x4f2a("IH0gfSwg")Settings_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setShowSettings(false), style: { background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")6px 11px_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIA==")\xD7_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "settings-tab-bar", style: { display: "flex", gap: 0 } }, [{ id: "appearance_0x4f2a("LCBsYWJlbDog")\u{1F3A8} Appearance" }, { id: "account_0x4f2a("LCBsYWJlbDog")\u{1F464} Profile" }, { id: "lists_0x4f2a("LCBsYWJlbDog")\u{1F4DD} Lists" }, { id: "import_0x4f2a("LCBsYWJlbDog")\u{1F4E5} Import Trades" }, { id: "editui_0x4f2a("LCBsYWJlbDog")\u{1F9E9} Edit UI" }, { id: "guide_0x4f2a("LCBsYWJlbDog")\uD83D\uDCD6 Guide_0x4f2a("IH1dLm1hcCgodCkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { key: t.id, onClick: () => setSettingsTab(t.id), style: { padding: "8px 16px", fontSize: 12, fontWeight: settingsTab === t.id ? 700 : 500, color: settingsTab === t.id ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDMp"), background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg=="), borderBottom: settingsTab === t.id ? _0x4f2a("MnB4IHNvbGlkIHZhcigtLWFjYyk=") : _0x4f2a("MnB4IHNvbGlkIHRyYW5zcGFyZW50"), whiteSpace: _0x4f2a("bm93cmFw") } }, t.label)))),  React.createElement("div", { style: { padding: "20px 24px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDIwIH0gfSwgc2V0dGluZ3NUYWIgPT09IA==")appearance_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDIwIH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDE2IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDEyLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Theme Mode_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(4,1fr)_0x4f2a("LCBnYXA6IDggfSB9LCBUSEVNRVMubWFwKCh0KSA9PgpSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { key: t.id, onClick: () => setTheme(t.id), style: { padding: "14px 10px", borderRadius: 12, border: `2px solid ${theme === t.id ? "var(--acc)" : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: theme === t.id ? _0x4f2a("Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjYykgMTAlLCB2YXIoLS1zdXJmYWNlKSk=") : _0x4f2a("dmFyKC0tczIp"), cursor: _0x4f2a("cG9pbnRlcg=="), transition: _0x4f2a("YWxsIC4ycw=="), textAlign: _0x4f2a("Y2VudGVy") } },
React.createElement("div", { style: { fontSize: 22, marginBottom: 6 } }, t.icon),
React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: theme === t.id ? "var(--accD)" : _0x4f2a("dmFyKC0tdGV4dCk=") } }, t.label),
theme === t.id &&  React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--acc)_0x4f2a("LCBtYXJnaW46IA==")6px auto 0_0x4f2a("IH0gfSkKKQopKQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")18px_0x4f2a("LCBmbGV4OiAxIH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEyLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Live Preview_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDEwIH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { background: "var(--surface)_0x4f2a("LCBib3JkZXI6IGAycHggc29saWQgdmFyKC0tYWNjKWAsIGJvcmRlclJhZGl1czogMTIsIHBhZGRpbmc6IA==")12px 16px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Net P&L_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 22, fontWeight: 800, color: "var(--accD)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")-1px_0x4f2a("IH0gfSwg")+10.4%_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDggfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { style: { flex: 1, background: "linear-gradient(135deg,var(--acc),var(--accD))_0x4f2a("LCBjb2xvcjog")#fff_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 16px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")default_0x4f2a("IH0gfSwg")+ Log Trade_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { flex: 1, background: "var(--gBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--gBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")10px 16px_0x4f2a("LCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IA==")var(--green)_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("IH0gfSwg")Win ✓_0x4f2a("KQopLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCB0ZXh0QWxpZ246IA==")center_0x4f2a("LCBtYXJnaW5Ub3A6IDIgfSB9LCA=")Changes apply instantly_0x4f2a("KQopCikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDEyLCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Accent Colour_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")repeat(4,1fr)_0x4f2a("LCBnYXA6IDEwIH0gfSwgQUNDRU5UUy5tYXAoKGEpID0+ClJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { key: a.id, onClick: () => setAccent(a.id), style: { padding: "14px 8px", borderRadius: 12, border: `2px solid ${accent === a.id ? a.col : "var(--border)"}`, background: accent === a.id ? `${a.col}18` : "var(--s2)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCB0cmFuc2l0aW9uOiA=")all .18s_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDggfSB9LApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { width: 26, height: 26, borderRadius: "50%", background: a.col, boxShadow: accent === a.id ? `0 0 0 3px ${a.col}40` : "none_0x4f2a("LCB0cmFuc2l0aW9uOiA=")box-shadow .2s_0x4f2a("IH0gfSksClJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 10.5, fontWeight: 700, color: accent === a.id ? a.col : "var(--t3)_0x4f2a("IH0gfSwgYS5sYWJlbCkKKQopKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { marginTop: 14, padding: "10px 14px_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--accF)_0x4f2a("LCBib3JkZXI6IA==")1px solid color-mix(in srgb, var(--acc) 30%, transparent)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--accD)_0x4f2a("LCBmb250V2VpZ2h0OiA2MDAgfSB9LCA=")✓ Changes apply instantly · Edit Confluences, Sessions & Mistakes in 📝 Lists tab_0x4f2a("KQopCikKKSwgc2V0dGluZ3NUYWIgPT09IA==")editui_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Customise Dashboard Blocks_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2IH0gfSwg")Toggle which cards and sections are visible on your dashboard._0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr", gap: 8 } },
Object.entries({ bestTradeGrade: "Best Trade Grade_0x4f2a("LCBkaXNjaXBsaW5lU2NvcmU6IA==")Discipline Score_0x4f2a("LCBiZXN0TWluZHNldDog")Best Mindset_0x4f2a("LCB3b3JzdE1pbmRzZXQ6IA==")Worst Mindset_0x4f2a("LCBtaXN0YWtlUmF0ZTog")Mistake Rate_0x4f2a("LCBlcXVpdHlDdXJ2ZTog")Equity Curve_0x4f2a("LCBtb250aGx5QmFyczog")Monthly Bars_0x4f2a("LCB3aW5SYXRlQ2FyZDog")Win Rate Card_0x4f2a("LCBncmFkZUJyZWFrZG93bjog")Grade Breakdown_0x4f2a("LCBzZXNzaW9uQnJlYWtkb3duOiA=")Session Breakdown_0x4f2a("LCBtb2RlbEJyZWFrZG93bjog")Model Breakdown_0x4f2a("IH0pLm1hcCgoW2ssIGxhYmVsXSkgPT4KUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { key: k, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")10px 14px_0x4f2a("IH0gfSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { fontSize: 12, fontWeight: 600, color: uiBlocks[k] !== false ? "var(--text)" : _0x4f2a("dmFyKC0tdDMp") } }, label),
React.createElement("div", { onClick: () => toggleBlock(k), style: { width: 36, height: 20, borderRadius: 10, background: uiBlocks[k] !== false ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyMik="), position: _0x4f2a("cmVsYXRpdmU="), cursor: _0x4f2a("cG9pbnRlcg=="), transition: _0x4f2a("YmFja2dyb3VuZCAuMnM="), flexShrink: 0 } },
React.createElement("div", { style: { position: "absolute", top: 2, left: uiBlocks[k] !== false ? 16 : 2, width: 16, height: 16, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")#fff_0x4f2a("LCB0cmFuc2l0aW9uOiA=")left .15s_0x4f2a("LCBib3hTaGFkb3c6IA==")0 1px 3px rgba(0,0,0,.2)_0x4f2a("IH0gfSkKKQopCikKKSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: resetUi, style: { marginTop: 8, background: "var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBjb2xvcjog")var(--t2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IA==")8px 16px_0x4f2a("LCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCwgY3Vyc29yOiA=")pointer_0x4f2a("IH0gfSwg")Reset to Defaults_0x4f2a("KQopLCBzZXR0aW5nc1RhYiA9PT0g")lists_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column", gap: 20 } }, [{ key: "confluences_0x4f2a("LCBsYWJlbDog")Confluences_0x4f2a("LCBpY29uOiA=")\u{1F4CC}_0x4f2a("LCBkZWZhdWx0czogQ09ORkxVRU5DRVMsIGRlc2M6IA==")Setups shown in trade form" }, { key: "sessions_0x4f2a("LCBsYWJlbDog")Sessions_0x4f2a("LCBpY29uOiA=")\u23F0_0x4f2a("LCBkZWZhdWx0czogU0VTU0lPTlMsIGRlc2M6IA==")Sessions shown in dropdowns" }, { key: "mistakes_0x4f2a("LCBsYWJlbDog")Mistakes_0x4f2a("LCBpY29uOiA=")\u26A0\uFE0F_0x4f2a("LCBkZWZhdWx0czogTUlTVEFLRVMsIGRlc2M6IA==")Mistakes in psychology section" }, { key: "keyLevels_0x4f2a("LCBsYWJlbDog")Key Level Presets_0x4f2a("LCBpY29uOiA=")\u{1F4CD}_0x4f2a("LCBkZWZhdWx0czogW10sIGRlc2M6IA==")Common key levels (e.g. OB, FVG, resistance)" }].map(({ key, label, icon, defaults, desc }) =>  React.createElement("div", { key, style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")16px 18px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")flex-start_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEyIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYgfSB9LCBpY29uLCA=") _0x4f2a("LCBsYWJlbCksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDMgfSB9LCBkZXNjKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDYgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setSettingsModal({ title: "Add Item_0x4f2a("LCBwbGFjZWhvbGRlcjog")Enter name…", onConfirm: (v) => { const cur = customLists[key] || defaults; saveCustomList(key, [...cur, v]); } }), style: { background: _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: _0x4f2a("I2ZmZg=="), border: _0x4f2a("bm9uZQ=="), borderRadius: 8, padding: _0x4f2a("NnB4IDEycHg="), fontSize: 11, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") } }, _0x4f2a("KyBBZGQ=")),  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => saveCustomList(key, null), style: { background: _0x4f2a("dmFyKC0tczMp"), color: _0x4f2a("dmFyKC0tdDMp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 8, padding: _0x4f2a("NnB4IDEwcHg="), fontSize: 11, cursor: _0x4f2a("cG9pbnRlcg==") } }, _0x4f2a("UmVzZXQ=")))),  React.createElement("div", { style: { display: "flex_0x4f2a("LCBmbGV4V3JhcDog")wrap_0x4f2a("LCBnYXA6IDYgfSB9LCAoY3VzdG9tTGlzdHNba2V5XSB8fCBkZWZhdWx0cykubWFwKChpdGVtKSA9PiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { key: item, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBvdmVyZmxvdzog")hidden_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 11, fontWeight: 500, padding: "4px 10px_0x4f2a("LCBjb2xvcjog")var(--text)_0x4f2a("IH0gfSwgaXRlbSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")button", { onClick: () => setSettingsModal({ title: "Rename Item", placeholder: item, defaultVal: item, onConfirm: (v) => { if (v && v !== item) saveCustomList(key, (customLists[key] || defaults).map((x) => x === item ? v : x)); } }), style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), borderLeft: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), color: _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 11, padding: _0x4f2a("NHB4IDdweA=="), lineHeight: 1 } }, "\u270F\uFE0F_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => { if ((customLists[key] || defaults).length > 1) saveCustomList(key, (customLists[key] || defaults).filter((x) => x !== item)); }, style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), borderLeft: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), color: _0x4f2a("dmFyKC0tdDMp"), cursor: _0x4f2a("cG9pbnRlcg=="), fontSize: 12, padding: _0x4f2a("NHB4IDdweA=="), lineHeight: 1 } }, "\u00D7_0x4f2a("KSkpKSkpKSApLCBzZXR0aW5nc1RhYiA9PT0g")import" &&  React.createElement(ImportTradesPanel, { onImport: _settingsOnImport }), settingsTab === _0x4f2a("cnVsZXM=") &&  React.createElement(React.Fragment, null,  React.createElement("div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDE2LCBhbGlnbkl0ZW1zOiA=")start_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")16px 18px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")space-between_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBtYXJnaW5Cb3R0b206IGRhaWx5TGltaXQuZW5hYmxlZCA/IDE2IDogMCB9IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwg")Daily Trade Limits_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDIgfSB9LCA=")Stop trading automatically when limits are hit_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { enabled: !d.enabled })), style: { width: 44, height: 24, borderRadius: 12, background: dailyLimit.enabled ? _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyMik="), position: _0x4f2a("cmVsYXRpdmU="), cursor: _0x4f2a("cG9pbnRlcg=="), transition: _0x4f2a("YmFja2dyb3VuZCAuMnM="), flexShrink: 0 } },  React.createElement("div", { style: { position: "absolute", top: 3, left: dailyLimit.enabled ? 21 : 3, width: 18, height: 18, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")#fff_0x4f2a("LCB0cmFuc2l0aW9uOiA=")left .15s_0x4f2a("LCBib3hTaGFkb3c6IA==")0 1px 4px rgba(0,0,0,.25)_0x4f2a("IH0gfSkpKSwgZGFpbHlMaW1pdC5lbmFibGVkICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "grid_0x4f2a("LCBncmlkVGVtcGxhdGVDb2x1bW5zOiA=")1fr 1fr_0x4f2a("LCBnYXA6IDEyIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Max Trades / Day_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: Math.max(1, d.maxTrades - 1) })), style: { width: 30, height: 30, borderRadius: 8, border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdDIp"), fontSize: 16, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy") } }, "\u2212_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text)_0x4f2a("LCBtaW5XaWR0aDogMzIsIHRleHRBbGlnbjog")center_0x4f2a("IH0gfSwgZGFpbHlMaW1pdC5tYXhUcmFkZXMpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: d.maxTrades + 1 })), style: { width: 30, height: 30, borderRadius: 8, border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdDIp"), fontSize: 16, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy") } }, "+_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDQgfSB9LCA=")Stop after _0x4f2a("LCBkYWlseUxpbWl0Lm1heFRyYWRlcywg") trade_0x4f2a("LCBkYWlseUxpbWl0Lm1heFRyYWRlcyAhPT0gMSA/IA==")s" : "_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDYsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0IH0gfSwg")Max Loss / Day (%)_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss + 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdDIp"), fontSize: 16, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy") } }, "\u2212_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 22, fontWeight: 800, color: "var(--red)_0x4f2a("LCBtaW5XaWR0aDogNDQsIHRleHRBbGlnbjog")center_0x4f2a("IH0gfSwgZGFpbHlMaW1pdC5tYXhMb3NzLCA=")%_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss - 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), background: _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: _0x4f2a("dmFyKC0tdDIp"), fontSize: 16, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy") } }, "+_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { fontSize: 10, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDQgfSB9LCA=")Stop at _0x4f2a("LCBkYWlseUxpbWl0Lm1heExvc3MsIA==")% daily loss_0x4f2a("KSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", null,  React.createElement(RiskRulesEditor, null))), dailyLimit.enabled && (() => {
const today = ( new Date()).toISOString().slice(0, 10);
const todayTrades = allTrades.filter((t) => t.entryDate === today);
const todayPnl = calcPnL(todayTrades.reduce((s, t) => s + (t.profit||0), 0), accountCapital);
const tradesBreach = todayTrades.length >= dailyLimit.maxTrades;
const lossBreach = todayPnl <= dailyLimit.maxLoss;
const breached = tradesBreach || lossBreach;
return  React.createElement("div", { style: { background: breached ? "var(--rBg)" : _0x4f2a("dmFyKC0tZ0JnKQ=="), border: `1px solid ${breached ? _0x4f2a("dmFyKC0tckJkcik=") : _0x4f2a("dmFyKC0tZ0Jkcik=")}`, borderRadius: 12, padding: _0x4f2a("MTJweCAxNnB4") } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: breached ? "var(--red)" : _0x4f2a("dmFyKC0tZ3JlZW4p"), marginBottom: 6 } }, breached ? "\u{1F6AB} Daily limit reached \u2014 stop trading today" : "\u2713 Within daily limits_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBnYXA6IDE2LCBmb250U2l6ZTogMTEsIGNvbG9yOiA=")var(--t2)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span_0x4f2a("LCBudWxsLCA=")Trades today: _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b", { style: { color: tradesBreach ? "var(--red)" : _0x4f2a("dmFyKC0tdGV4dCk=") } }, todayTrades.length, "/_0x4f2a("LCBkYWlseUxpbWl0Lm1heFRyYWRlcykpLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span_0x4f2a("LCBudWxsLCA=")P&L today: _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")b", { style: { color: lossBreach ? "var(--red)" : _0x4f2a("dmFyKC0tYWNjRCk=") } }, todayPnl >= 0 ? "+" : "_0x4f2a("LCB0b2RheVBubC50b0ZpeGVkKDIpLCA=")%_0x4f2a("KSkpKTsKfSkoKSksIHNldHRpbmdzVGFiID09PSA=")guide_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDAgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { background: "linear-gradient(135deg, var(--accF), var(--s2))_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nOiA=")20px 22px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE2LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDE2IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 38, lineHeight: 1 } }, "\uD83D\uDCD6_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 16, fontWeight: 800, color: "var(--text)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")-.02em_0x4f2a("IH0gfSwg")How to use Tradexy_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 13, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDMgfSB9LCA=")Step-by-step guide to get the most from your journal_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button", { onClick: () => { setShowGuide(true); setShowSettings(false); }, style: { marginTop: 10, padding: _0x4f2a("N3B4IDE2cHg="), borderRadius: 10, border: _0x4f2a("bm9uZQ=="), background: _0x4f2a("bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1hY2MpLHZhcigtLWFjY0QpKQ=="), color: _0x4f2a("I2ZmZg=="), fontSize: 12, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg==") } }, "\uD83D\uDE80 Open Interactive Guide"))), ...[{ step:"01_0x4f2a("LCBpY29uOg==")\uD83C\uDFE6_0x4f2a("LCBjb2w6")var(--bBg)_0x4f2a("LCBiZHI6")var(--bBdr)_0x4f2a("LCB0aXRsZTo=")Add Your Account_0x4f2a("LCBpdGVtczpb")Click \"+ Add\_0x4f2a("IGluIHRoZSBUcmFkaW5nIEFjY291bnRzIHBhbmVs"),_0x4f2a("Q2hvb3NlIERlbW8gKHBhcGVyIHRyYWRpbmcpIG9yIE1UNSAobGl2ZSBicm9rZXIp"),_0x4f2a("RW50ZXIgeW91ciBzdGFydGluZyBjYXBpdGFsIOKAlCByZXF1aXJlZCBmb3IgTVQ1"),_0x4f2a("Q2xpY2sgQ3JlYXRlIOKAlCBhY2NvdW50IGFwcGVhcnMgaW4gc2lkZWJhciByZWFkeSB0byB1c2U=")] },{ step:"02_0x4f2a("LCBpY29uOg==")\u270D\uFE0F_0x4f2a("LCBjb2w6")var(--pBg)_0x4f2a("LCBiZHI6")var(--pBdr)_0x4f2a("LCB0aXRsZTo=")Log Your Trades_0x4f2a("LCBpdGVtczpb")Press N anywhere to open the trade form instantly","Fill symbol, entry/exit, Net P&L ($), session, grade",_0x4f2a("QWRkIGVtb3Rpb25zLCBjb25mbHVlbmNlcyAmIG1pc3Rha2VzIGZvciBwc3ljaG9sb2d5IHRyYWNraW5n"),"Click \"Log Trade\_0x4f2a("IOKAlCBzYXZlZCB0byBzZWxlY3RlZCBhY2NvdW50")] },{ step:"03_0x4f2a("LCBpY29uOg==")\uD83D\uDCCA_0x4f2a("LCBjb2w6")var(--gBg)_0x4f2a("LCBiZHI6")var(--gBdr)_0x4f2a("LCB0aXRsZTo=")Analyse Performance_0x4f2a("LCBpdGVtczpb")Overview: win rate, profit factor, equity curve",_0x4f2a("QW5hbHl0aWNzOiBicmVha2Rvd24gYnkgc2Vzc2lvbiwgbW9kZWwsIGNvbmZsdWVuY2UsIGdyYWRl"),_0x4f2a("Q2FsZW5kYXI6IGhlYXQtbWFwIG9mIHlvdXIgYmVzdCBhbmQgd29yc3QgZGF5cw=="),_0x4f2a("UHN5Y2hvbG9neTogc3BvdCBlbW90aW9uIHBhdHRlcm5zIGh1cnRpbmcgeW91ciBlZGdl")] },{ step:"04_0x4f2a("LCBpY29uOg==")\uD83D\uDCE5_0x4f2a("LCBjb2w6")var(--oBg)_0x4f2a("LCBiZHI6")var(--oBdr)_0x4f2a("LCB0aXRsZTo=")Import from Broker_0x4f2a("LCBpdGVtczpb")Go to Settings \u2192 Import Trades",_0x4f2a("VXBsb2FkIENTViBmcm9tIE1UNSwgVHJhZG92YXRlLCBvciBQcm9qZWN0WA=="),_0x4f2a("VHJhZGVzIGFyZSBtYXBwZWQgYXV0b21hdGljYWxseSB0byB5b3VyIGFjY291bnQ="),_0x4f2a("UmV2aWV3IGltcG9ydGVkIHRyYWRlcyBpbiB0aGUgVHJhZGUgTG9nIHRhYg==")] },{ step:"05_0x4f2a("LCBpY29uOg==")\u2328\uFE0F_0x4f2a("LCBjb2w6")var(--s2)_0x4f2a("LCBiZHI6")var(--border)_0x4f2a("LCB0aXRsZTo=")Tips & Shortcuts_0x4f2a("LCBpdGVtczpb")N = open new trade form from anywhere","\u2190\u2192 arrow keys = navigate the interactive guide","Settings \u2192 Appearance = change theme & accent colour",_0x4f2a("Q2xpY2sgYW55IGNhbGVuZGFyIGRheSB0byByZXZpZXcgdHJhZGVzIGZyb20gdGhhdCBkYXk=")] }].map((s) =>  React.createElement("div", { key: s.step, style: { background: s.col, border: "1px solid _0x4f2a("K3MuYmRyLCBib3JkZXJSYWRpdXM6IDE0LCBwYWRkaW5nOiA=")16px 18px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDEwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEyLCBtYXJnaW5Cb3R0b206IDEwIH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { width: 36, height: 36, borderRadius: 10, background: "var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid _0x4f2a("K3MuYmRyLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogMTgsIGZsZXhTaHJpbms6IDAgfSB9LCBzLmljb24pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 9, fontWeight: 700, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiA=")0.08em_0x4f2a("LCB0ZXh0VHJhbnNmb3JtOiA=")uppercase_0x4f2a("IH0gfSwg")Step _0x4f2a("LCBzLnN0ZXApLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)_0x4f2a("IH0gfSwgcy50aXRsZSkpKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { display: "flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDUgfSB9LCAuLi5zLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { key: i, style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")flex-start_0x4f2a("LCBnYXA6IDgsIGZvbnRTaXplOiAxMiwgY29sb3I6IA==")var(--t2)_0x4f2a("LCBsaW5lSGVpZ2h0OiAxLjUgfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { style: { width: 18, height: 18, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--surface)_0x4f2a("LCBib3JkZXI6IA==")1px solid _0x4f2a("K3MuYmRyLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBqdXN0aWZ5Q29udGVudDog")center_0x4f2a("LCBmb250U2l6ZTogOSwgZm9udFdlaWdodDogODAwLCBjb2xvcjog")var(--acc)_0x4f2a("LCBmbGV4U2hyaW5rOiAwLCBtYXJnaW5Ub3A6IDEgfSB9LCBpKzEpLCBpdGVtKSkpKSkpLCBzZXR0aW5nc1RhYiA9PT0g")account_0x4f2a("ICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div_0x4f2a("LCBudWxsLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)_0x4f2a("LCBsZXR0ZXJTcGFjaW5nOiAwLjA0LCBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06IA==")uppercase_0x4f2a("IH0gfSwg")Display Name_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")input", { value: userName, onChange: (e) => saveUserName(e.target.value), placeholder: _0x4f2a("WW91ciBuYW1l"), style: { width: _0x4f2a("MTAwJQ=="), border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tYm9yZGVyKQ=="), borderRadius: 9, padding: _0x4f2a("MTBweCAxNHB4"), fontSize: 13, outline: _0x4f2a("bm9uZQ=="), background: _0x4f2a("dmFyKC0tczIp"), color: _0x4f2a("dmFyKC0tdGV4dCk="), boxSizing: _0x4f2a("Ym9yZGVyLWJveA==") } }),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBtYXJnaW5Ub3A6IDYgfSB9LCA=")Shown in the sidebar and trade summaries_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { background: "var(--s2)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")14px 16px_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBmbGV4RGlyZWN0aW9uOiA=")column_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)_0x4f2a("LCBtYXJnaW5Cb3R0b206IDQgfSB9LCA=")Data Storage_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t2)_0x4f2a("IH0gfSwg")All trade data is stored locally in your browser via _0x4f2a("LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")code", { style: { background: "var(--s3)_0x4f2a("LCBwYWRkaW5nOiA=")1px 5px_0x4f2a("LCBib3JkZXJSYWRpdXM6IDQsIGZvbnRTaXplOiAxMCB9IH0sIA==")localStorage"), _0x4f2a("LiBOb3RoaW5nIGlzIHNlbnQgdG8gYW55IHNlcnZlciB1bmxlc3MgeW91IGNvbm5lY3QgYW4gTVQ1IGFjY291bnQu")),  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => {
{
[_0x4f2a("dGo1X2FjY291bnRz"), _0x4f2a("dGo1X21ldGE="), _0x4f2a("dGo1X3VpYmxvY2tz"), _0x4f2a("dGo1X3VzZXJuYW1l"), _0x4f2a("dGo1X3RoZW1l"), _0x4f2a("dGo1X2FjY2VudA=="), _0x4f2a("dGo1X2RhaWx5X2xpbWl0")].forEach((k) => localStorage.removeItem(k));
window.location.reload();
}
}, style: { padding: _0x4f2a("OHB4IDE2cHg="), borderRadius: 9, border: _0x4f2a("MS41cHggc29saWQgdmFyKC0tckJkcik="), background: _0x4f2a("dmFyKC0tckJnKQ=="), color: _0x4f2a("dmFyKC0tcmVkKQ=="), fontSize: 11, fontWeight: 700, cursor: _0x4f2a("cG9pbnRlcg=="), alignSelf: _0x4f2a("ZmxleC1zdGFydA==") } }, _0x4f2a("Q2xlYXIgQWxsIExvY2FsIERhdGE="))))))),  React.createElement(InputModal, { open: !!settingsModal, title: settingsModal && settingsModal.title, subtitle: settingsModal && settingsModal.subtitle, placeholder: settingsModal && settingsModal.placeholder, defaultVal: settingsModal && settingsModal.defaultVal, onConfirm: (v) => { settingsModal && settingsModal.onConfirm(v); setSettingsModal(null); }, onClose: () => setSettingsModal(null) }), dayPopup &&  React.createElement(DayPopup, { date: dayPopup, trades: allTrades, onClose: () => {
setDayPopup(null);
setEditingDayTrade(null);
}, ic, capital: accountCapital, onEdit: handleEditTrade, editingId: editingDayTrade, setEditingId: setEditingDayTrade, onOpenSettings: () => { setShowSettings(true); setSettingsTab(_0x4f2a("bGlzdHM=")); }, usedSessions: usedSessions || SESSIONS, usedMistakes: usedMistakes || MISTAKES }),  React.createElement(Sidebar, { activeTab: tab, setTab, sidebarOpen: sidebarEffectiveOpen, setSidebarOpen, setSidebarHover, userName, setUserName: saveUserName, accounts, seedTrades: SEED, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings: () => setShowSettings(true), theme, setTheme }),  React.createElement(FloatingCalc, { capital: accountCapital, open: showCalc, setOpen: setShowCalc }), toast &&  React.createElement("div", { style: { position: "fixed_0x4f2a("LCBib3R0b206IDI0LCByaWdodDogMjQsIHpJbmRleDogOTk5OSwgYmFja2dyb3VuZDog")var(--surface)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nOiA=")13px 18px_0x4f2a("LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgYm94U2hhZG93OiA=")var(--sh3)_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEyLCBtYXhXaWR0aDogaXNNb2JpbGUgPyA=")calc(100vw - 32px)_0x4f2a("IDogNDAwLCBhbmltYXRpb246IA==")fadeUp .25s ease", border: `1px solid ${toast.type === "success" ? _0x4f2a("dmFyKC0tZ0Jkcik=") : toast.type === _0x4f2a("ZXJyb3I=") ? _0x4f2a("dmFyKC0tckJkcik=") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}` } },  React.createElement(_0x4f2a("c3Bhbg=="), { style: { width: 32, height: 32, borderRadius: 9, background: toast.type === _0x4f2a("c3VjY2Vzcw==") ? _0x4f2a("dmFyKC0tZ0JnKQ==") : toast.type === _0x4f2a("ZXJyb3I=") ? _0x4f2a("dmFyKC0tckJnKQ==") : _0x4f2a("dmFyKC0tczIp"), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), fontSize: 15, flexShrink: 0 } }, toast.type === _0x4f2a("c3VjY2Vzcw==") ? "\u2713_0x4f2a("IDogdG9hc3QudHlwZSA9PT0g")error" ? "\u2715" : "\u2139_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { flex: 1, lineHeight: 1.5 } }, toast.msg),  React.createElement("button", { onClick: () => setToast(null), style: { background: "none_0x4f2a("LCBib3JkZXI6IA==")none_0x4f2a("LCBjb2xvcjog")var(--t3)_0x4f2a("LCBjdXJzb3I6IA==")pointer_0x4f2a("LCBmb250U2l6ZTogMTgsIHBhZGRpbmc6IA==")0 2px_0x4f2a("LCBsaW5lSGVpZ2h0OiAxIH0gfSwg")\xD7_0x4f2a("KSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { marginLeft: sideW, transition: "margin-left .2s ease_0x4f2a("LCBtaW5IZWlnaHQ6IA==")100vh_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { background: "var(--topbar-bg)_0x4f2a("LCBib3JkZXJCb3R0b206IA==")1px solid var(--border)_0x4f2a("LCBwYWRkaW5nOiA=")0 20px_0x4f2a("LCBoZWlnaHQ6IDUyLCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBwb3NpdGlvbjog")sticky_0x4f2a("LCB0b3A6IDAsIHpJbmRleDogMTAwLCBiYWNrZHJvcEZpbHRlcjog")blur(12px)_0x4f2a("LCBXZWJraXRCYWNrZHJvcEZpbHRlcjog")blur(12px)_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,var(--acc),transparent)`, opacity: 0.7 } }), isMobile &&  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => setSidebarOpen(true), style: { background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("bm9uZQ=="), cursor: _0x4f2a("cG9pbnRlcg=="), padding: 6, display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), color: _0x4f2a("dmFyKC0tdDIp") } },  React.createElement("svg", { width: "20_0x4f2a("LCBoZWlnaHQ6IA==")20_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("IH0sICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")line", { x1: "3_0x4f2a("LCB5MTog")6_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")6_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")12_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")12_0x4f2a("IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")line", { x1: "3_0x4f2a("LCB5MTog")18_0x4f2a("LCB4Mjog")21_0x4f2a("LCB5Mjog")18_0x4f2a("IH0pKSksICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDggfSB9LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { width: 3, height: 20, background: `linear-gradient(180deg,var(--acc),var(--accD))`, borderRadius: 2 } }),  React.createElement("h1", { style: { margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: "-0.025em_0x4f2a("LCBmb250RmFtaWx5OiA=")'Inter',sans-serif" } }, ((_a = TABS_INFO.find((t) => t.id === tab)) == null ? void 0 : _a.label) || "_0x4f2a("KSksIGxpdmUgPiAwICYmICBSZWFjdC5jcmVhdGVFbGVtZW50KA==")div", { className: "hide-m", style: { display: "flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDYsIGZvbnRTaXplOiAxMSwgY29sb3I6IA==")var(--green)_0x4f2a("LCBmb250V2VpZ2h0OiA3MDAsIGJhY2tncm91bmQ6IA==")var(--gBg)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--gBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiA=")3px 11px_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { width: 6, height: 6, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--green)_0x4f2a("LCBkaXNwbGF5OiA=")inline-block_0x4f2a("LCBhbmltYXRpb246IA==")pulse 2s infinite_0x4f2a("IH0gfSksIGxpdmUsIA==") Live_0x4f2a("KSwgYWNjb3VudHMubGVuZ3RoID09PSAwICYmICFkZW1vRGVsZXRlZCAmJiAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { className: "hide-m", style: { fontSize: 11, color: "var(--t3)_0x4f2a("LCBiYWNrZ3JvdW5kOiA=")var(--s3)_0x4f2a("LCBib3JkZXI6IA==")1px solid var(--border)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiA=")3px 11px_0x4f2a("IH0gfSwg")Demo Mode \xB7 Sample data_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")div", { style: { marginLeft: "auto_0x4f2a("LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center", gap: 8 } },
React.createElement(WalletDropdown, { accounts, activeAccId, setActiveAccId, accountCapital, trueBalanceInfo, allTrades, isMobile }),
React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => { const allThemes = [_0x4f2a("emluYw=="),_0x4f2a("bGlnaHQ="),_0x4f2a("c2xhdGU="),_0x4f2a("bGF2ZW5kZXI="),_0x4f2a("ZGFyaw=="),_0x4f2a("c2VwaWE="),_0x4f2a("Zm9yZXN0"),_0x4f2a("b2NlYW4="),_0x4f2a("cm9zZQ==")]; const idx = allThemes.indexOf(theme); setTheme(allThemes[(idx + 1) % allThemes.length]); }, title: _0x4f2a("Q3ljbGUgdGhlbWU="),
style: { background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 9, width: 32, height: 32, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), fontSize: 14, color: _0x4f2a("dmFyKC0tdDIp"), transition: _0x4f2a("YWxsIC4xNXM=") },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjRCk="); },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDIp"); }
}, theme === _0x4f2a("bGlnaHQ=") ? "\u{1F319}_0x4f2a("IDogdGhlbWUgPT09IA==")dark" ? "\u2600\uFE0F_0x4f2a("IDogdGhlbWUgPT09IA==")sepia" ? "\u{1F4DC}_0x4f2a("IDogdGhlbWUgPT09IA==")forest" ? "\u{1F333}_0x4f2a("IDogdGhlbWUgPT09IA==")ocean" ? "\u{1F30A}_0x4f2a("IDogdGhlbWUgPT09IA==")midnight" ? "\u{1F30C}_0x4f2a("IDogdGhlbWUgPT09IA==")zinc" ? "\u26AA" : "\u{1F338}_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { "data-tour": _0x4f2a("Y2FsYy1idG4="), onClick: () => setShowCalc(c => !c), title: _0x4f2a("UG9zaXRpb24gU2l6ZSBDYWxjdWxhdG9y"),
style: { background: showCalc ? _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tczIp"), border: showCalc ? _0x4f2a("MXB4IHNvbGlkIHZhcigtLWFjYyk=") : _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 9, width: 32, height: 32, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), fontSize: 15, color: showCalc ? _0x4f2a("dmFyKC0tYWNjRCk=") : _0x4f2a("dmFyKC0tdDIp"), transition: _0x4f2a("YWxsIC4xNXM=") },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tYWNjRCk="); },
onMouseLeave: (e) => { if (!showCalc) { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ=="); e.currentTarget.style.color = _0x4f2a("dmFyKC0tdDIp"); } }
}, "🧮_0x4f2a("KSwKUmVhY3QuY3JlYXRlRWxlbWVudCg=")button", { "data-tour": _0x4f2a("c2V0dGluZ3MtYnRu"), onClick: () => setShowSettings(true), title: _0x4f2a("U2V0dGluZ3M="),
style: { background: _0x4f2a("dmFyKC0tczIp"), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLWJvcmRlcik="), borderRadius: 9, width: 32, height: 32, cursor: _0x4f2a("cG9pbnRlcg=="), display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), justifyContent: _0x4f2a("Y2VudGVy"), color: _0x4f2a("dmFyKC0tdDIp"), transition: _0x4f2a("YWxsIC4xNXM=") },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYWNjKQ=="); },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = _0x4f2a("dmFyKC0tYm9yZGVyKQ=="); }
},
React.createElement("svg", { width: "14_0x4f2a("LCBoZWlnaHQ6IA==")14_0x4f2a("LCB2aWV3Qm94OiA=")0 0 24 24_0x4f2a("LCBmaWxsOiA=")none_0x4f2a("LCBzdHJva2U6IA==")currentColor_0x4f2a("LCBzdHJva2VXaWR0aDog")2_0x4f2a("IH0sClJlYWN0LmNyZWF0ZUVsZW1lbnQo")circle", { cx: "12_0x4f2a("LCBjeTog")12_0x4f2a("LCByOiA=")3_0x4f2a("IH0pLApSZWFjdC5jcmVhdGVFbGVtZW50KA==")path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z_0x4f2a("IH0pCikKKQopKSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { className: "content-area", style: { maxWidth: tab === "calendar_0x4f2a("ID8gMTQwMCA6IDExODAsIG1hcmdpbjog")0 auto_0x4f2a("LCBwYWRkaW5nOiA=")22px 20px 80px" } },  React.createElement(AccountsPanel, { accounts, onSync: handleSync, onRemove: handleRemoveAcc, onAdd: handleAddAcc, onAddAdjustment: handleAddAdjustment, onRemoveAdjustment: handleRemoveAdjustment, syncingId, onImportToAccount: handleImportToAccount }), accounts.length > 0 &&  React.createElement("div", { style: { display: "flex_0x4f2a("LCBnYXA6IDcsIG1hcmdpbkJvdHRvbTogMTgsIGZsZXhXcmFwOiA=")wrap_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center" } }, [{ id: "all_0x4f2a("LCBsYWJlbDog")\u{1F310} All", cnt: accounts.reduce((s, a) => s + a.trades.length, 0), col: null }, ...accounts.map((a, i) => ({ id: a.id, label: a.label, cnt: a.trades.length, col: ACC_COLS[i % ACC_COLS.length], isDemo: a.isDemo }))].map((item) =>  React.createElement(_0x4f2a("YnV0dG9u"), { key: item.id, className: _0x4f2a("YWNjdC1maWx0ZXItcGlsbA=="), onClick: () => setActiveAccId(item.id), style: { display: _0x4f2a("ZmxleA=="), alignItems: _0x4f2a("Y2VudGVy"), gap: 6, padding: _0x4f2a("NnB4IDE0cHg="), borderRadius: 20, border: `1.5px solid ${activeAccId === item.id ? item.col || _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tYm9yZGVyKQ==")}`, background: activeAccId === item.id ? item.col ? item.col + "20" : _0x4f2a("dmFyKC0tYWNjRik=") : _0x4f2a("dmFyKC0tc3VyZmFjZSk="), color: activeAccId === item.id ? item.col || _0x4f2a("dmFyKC0tYWNjKQ==") : _0x4f2a("dmFyKC0tdDIp"), fontWeight: activeAccId === item.id ? 700 : 500, fontSize: 12, cursor: _0x4f2a("cG9pbnRlcg=="), maxWidth: isMobile ? 90 : _0x4f2a("bm9uZQ=="), overflow: _0x4f2a("aGlkZGVu"), textOverflow: _0x4f2a("ZWxsaXBzaXM="), whiteSpace: _0x4f2a("bm93cmFw") } }, item.col &&  React.createElement(_0x4f2a("c3Bhbg=="), { style: { width: 7, height: 7, borderRadius: "50%_0x4f2a("LCBiYWNrZ3JvdW5kOiBpdGVtLmNvbCB9IH0pLCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span", { className: "acct-filter-label", style: { overflow: "hidden_0x4f2a("LCB0ZXh0T3ZlcmZsb3c6IA==")ellipsis_0x4f2a("LCB3aGl0ZVNwYWNlOiA=")nowrap_0x4f2a("LCBtYXhXaWR0aDogaXNNb2JpbGUgPyA3MiA6IA==")none" } }, item.label), !isMobile && item.isDemo &&  React.createElement(Chip, { color: _0x4f2a("cHVycGxl"), size: "sm_0x4f2a("IH0sIA==")Demo_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { background: "var(--s3)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiA=")1px 7px", fontSize: 10, fontWeight: 700 } }, item.cnt)))), showDateBar &&  React.createElement(DateRangeBar, { trades: allTrades, dateRange, setDateRange, capital: accountCapital }), (!demoBannerDismissed&&accounts.length>0&&accounts.some(function(a){return a.isDemo&&(a.trades||[]).some(function(t){return(t.tags||[]).indexOf(_0x4f2a("U2FtcGxlIERhdGE="))>=0;});})) ?  React.createElement("div",{style:{background:"var(--bBg)_0x4f2a("LGJvcmRlcjo=")1.5px solid var(--bBdr)_0x4f2a("LGJvcmRlclJhZGl1czoxMixwYWRkaW5nOg==")10px 16px_0x4f2a("LG1hcmdpbkJvdHRvbToxNCxkaXNwbGF5Og==")flex_0x4f2a("LGFsaWduSXRlbXM6")center_0x4f2a("LGdhcDoxMH19LCAgUmVhY3QuY3JlYXRlRWxlbWVudCg=")span",{style:{fontSize:18}},"🧪_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div",{style:{flex:1,fontSize:12,color:"var(--blue)_0x4f2a("LGZvbnRXZWlnaHQ6NTAwfX0s")This is demo data — explore freely. Delete sample trades anytime from Trade Log._0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")button",{onClick:function(){setDemoBannerDismissed(true);try{localStorage.setItem("tj5_demo_dismissed","1");}catch(e){}},style:{fontSize:11,fontWeight:700,color:"var(--blue)_0x4f2a("LGJhY2tncm91bmQ6")none_0x4f2a("LGJvcmRlcjo=")1px solid var(--bBdr)_0x4f2a("LGJvcmRlclJhZGl1czo3LHBhZGRpbmc6")4px 10px_0x4f2a("LGN1cnNvcjo=")pointer_0x4f2a("LGZvbnRGYW1pbHk6")inherit"}},_0x4f2a("RGlzbWlzcw=="))) : null, dailyLimit.enabled && (() => {
const today = ( new Date()).toISOString().slice(0, 10);
const todayT = allTrades.filter((t) => t.entryDate === today);
const todayProfit = todayT.reduce((s, t) => s + (t.profit || 0), 0);
const todayPnl = calcPnL(todayProfit, accountCapital);
const tradesBreach = todayT.length >= dailyLimit.maxTrades;
const lossBreach = todayPnl <= dailyLimit.maxLoss;
if (!tradesBreach && !lossBreach) return null;
return  React.createElement("div", { style: { background: "var(--rBg)_0x4f2a("LCBib3JkZXI6IA==")1.5px solid var(--rBdr)_0x4f2a("LCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiA=")10px 16px_0x4f2a("LCBtYXJnaW5Cb3R0b206IDE0LCBkaXNwbGF5OiA=")flex_0x4f2a("LCBhbGlnbkl0ZW1zOiA=")center_0x4f2a("LCBnYXA6IDEwLCBhbmltYXRpb246IA==")fadeUp .3s ease_0x4f2a("IH0gfSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")span", { style: { fontSize: 18 } }, "\u{1F6AB}_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { flex: 1 } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--red)_0x4f2a("IH0gfSwg")Daily limit reached \u2014 stop trading for today_0x4f2a("KSwgIFJlYWN0LmNyZWF0ZUVsZW1lbnQo")div", { style: { fontSize: 11, color: "var(--t2)", marginTop: 2 } }, tradesBreach && `${todayT.length}/${dailyLimit.maxTrades} trades used`, tradesBreach && lossBreach && " \xB7 ", lossBreach && `${todayPnl.toFixed(2)}% P&L (limit: ${dailyLimit.maxLoss}%)`)),  React.createElement(_0x4f2a("YnV0dG9u"), { onClick: () => setShowSettings(true), style: { fontSize: 11, fontWeight: 600, color: _0x4f2a("dmFyKC0tcmVkKQ=="), background: _0x4f2a("bm9uZQ=="), border: _0x4f2a("MXB4IHNvbGlkIHZhcigtLXJCZHIp"), borderRadius: 7, padding: _0x4f2a("NHB4IDEwcHg="), cursor: _0x4f2a("cG9pbnRlcg==") } }, _0x4f2a("RWRpdCBydWxlcw==")));
})(),  React.createElement("div", { key: tab, className: "fade-up_0x4f2a("IH0sIHRhYiA9PT0g")overview" &&  React.createElement(Overview, { trades: displayTrades, allTrades, uiBlocks, capital: accountCapital }), tab === _0x4f2a("YW5hbHl0aWNz") &&  React.createElement(Analytics, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === _0x4f2a("cHN5Y2hvbG9neQ==") &&  React.createElement(Psychology, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === _0x4f2a("dHJhZGVsb2c=") &&  React.createElement(TradeLog, { trades: displayTrades, onAdd: handleAddTrade, onDelete: handleDeleteTrade, onEdit: handleEditTrade, onUpdateMeta: handleUpdateMeta, tradeMeta, onDuplicate: handleDuplicateTrade, openFormTrigger: openTradeForm, onFormOpened: () => setOpenTradeForm(false), usedConfluences, usedSessions, usedMistakes, saveCustomList, customLists, onOpenSettings: (tab) => { setShowSettings(true); setSettingsTab(tab || _0x4f2a("bGlzdHM=")); }, capital: accountCapital, accounts: accounts, activeAccId: activeAccId }), tab === _0x4f2a("Y2FsZW5kYXI=") &&  React.createElement(CalendarView, { trades: allTrades, onDayClick: setDayPopup, capital: accountCapital }))))));
}
const rootEl = document.getElementById(_0x4f2a("cm9vdA=="));
if (rootEl) {
ReactDOM.createRoot(rootEl).render( React.createElement(App, null));
}