var __defProp = Object.defineProperty;
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
if (this.state.err) return  React.createElement("div", { style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f7f8fa", fontFamily: "'Inter',sans-serif" } },  React.createElement("div", { style: { fontSize: 48, marginBottom: 16 } }, "\u26A0\uFE0F"),  React.createElement("h2", { style: { fontSize: 18, fontWeight: 600, marginBottom: 8 } }, "Something went wrong"),  React.createElement("p", { style: { color: "#3d4a5c", marginBottom: 20, fontSize: 14, maxWidth: 340, textAlign: "center", lineHeight: 1.7 } }, this.state.msg || "An unexpected error occurred."),  React.createElement("button", { onClick: () => this.setState({ err: false }), style: { background: "#c8983a", color: "#fff", border: "none", borderRadius: 10, padding: "11px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer" } }, "Try Again"));
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
const handleKey = (e) => { if (e.key === "Enter") submit(); if (e.key === "Escape") onClose(); };
return React.createElement("div", {
className: "custom-modal-backdrop",
onClick: onClose
}, React.createElement("div", {
className: "custom-modal-box",
onClick: (e) => e.stopPropagation()
},
React.createElement("div", { className: "custom-modal-title" }, title || "Add Value"),
subtitle && React.createElement("div", { className: "custom-modal-sub" }, subtitle),
React.createElement("input", {
ref: inputRef,
className: "custom-modal-input",
placeholder: placeholder || "Enter value…",
value: val,
onChange: (e) => setVal(e.target.value),
onKeyDown: handleKey
}),
React.createElement("div", { className: "custom-modal-btns" },
React.createElement("button", { className: "custom-modal-cancel", onClick: onClose }, "Cancel"),
React.createElement("button", { className: "custom-modal-add", onClick: submit, disabled: !val.trim() }, "Add")
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
const API_URL = "https://api.tradexy.online";
const SDB = {
_db: null,
_N: "TJScreenshots",
_S: "shots",
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
const tx = db.transaction(this._S, "readwrite");
tx.objectStore(this._S).put(url, String(id));
tx.oncomplete = () => res();
tx.onerror = () => rej(tx.error);
});
},
async get(id) {
const db = await this.open();
return new Promise((res, rej) => {
const tx = db.transaction(this._S, "readonly");
const r = tx.objectStore(this._S).get(String(id));
r.onsuccess = () => res(r.result || null);
r.onerror = () => rej(r.error);
});
},
async remove(id) {
const db = await this.open();
return new Promise((res, rej) => {
const tx = db.transaction(this._S, "readwrite");
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
const c = document.createElement("canvas");
const sc = Math.min(1, maxW / img.width);
c.width = img.width * sc;
c.height = img.height * sc;
c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
const d = c.toDataURL("image/webp", 0.78);
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
const CONFLUENCES = ["Break of Structure", "Fair Value Gap", "Order Block", "Liquidity Sweep", "Inducement", "Change of Character", "Market Structure Shift", "Premium/Discount", "VWAP", "EMA Confluence", "Supply/Demand Zone", "Fibonacci Level", "Session Open", "News Catalyst", "Trendline Bounce", "Divergence", "Volume Spike", "Pin Bar", "Engulfing", "Inside Bar", "Liq Sweep", "TL BO", "RTO Bullish", "V Shape", "TL BD", "4H Bullish", "IFVG", "Rejection Candle", "4H Bearish", "RTO Bearish", "NYO Rejection", "4H Flip", "S/D Zone", "1H Flip", "RTO Flip"];
const SESSIONS = ["London Open", "New York", "Out of Session", "London Mid", "Asia"];
const MODELS = ["In Session", "Off Session", "Off Session Reversal", "In Session Reversal", "SMC (Smart Money)", "ICT Concepts", "Price Action", "Scalping", "Swing Trade", "Trend Following", "Counter Trend", "Breakout", "Reversal", "Range", "Momentum", "VWAP Strategy", "News Play"];
const EMOTIONS_B = ["Calm & Focused", "Confident", "Neutral", "Slightly Anxious", "FOMO", "Greedy", "Fearful", "Overconfident", "Tired/Unfocused", "Excited", "Impatient", "Revenge Mindset", "Bored", "Stressed", "Doubtful", "Impulsive", "Motivated", "Distracted", "Sharp & Alert", "Patient", "Reckless", "Hesitant"];
const EMOTIONS_A = ["Satisfied", "Disciplined", "Neutral", "Slightly Regretful", "Regretful", "Euphoric", "Frustrated", "Angry", "Relieved", "Disappointed", "Proud", "Lesson Learned", "Calm", "Energized", "Burned Out", "Motivated", "Detached", "Overthinking", "At Peace", "Confused", "Confident", "Humbled", "Sharp", "Grateful"];
const MISTAKES = ["None", "Moved Stop Loss", "Position Too Large", "Revenge Trading", "FOMO Entry", "Early Exit", "Late Entry", "No Trading Plan", "Ignored Rules", "Overtraded", "Chased Price", "Poor RR Setup", "Wrong Timeframe", "Emotional Decision", "Skipped Analysis"];
const GRADES = ["A+", "A", "B", "C", "D"];
const RR_OPTIONS = ["1:0.5", "1:1", "1:1.5", "1:2", "1:2.5", "1:3", "1:4", "1:5", "1:6+", "Custom"];
const ACC_COLS = ["#c8983a", "#2563eb", "#7c3aed", "#16a34a", "#ea580c", "#0891b2", "#ec4899"];
const fmtPct = (n, d = 2) => (n >= 0 ? "+" : "") + n.toFixed(d) + "%";
const fmtUSD = (n, plus = true) => (plus && n >= 0 ? "+" : "") + new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
const fmtK = (v) => v >= 1e3 ? (v / 1e3).toFixed(1) + "k" : v.toFixed(0);
const fmtPrice = (n) => (n == null ? void 0 : n.toLocaleString("en-US", { maximumFractionDigits: 5 })) || "\u2014";
const tTxt = (n) => n >= 0 ? "var(--accD)" : "var(--t2)";
const tBg = (n) => n >= 0 ? "var(--accL)" : "var(--s2)";
const tBdr = (n) => n >= 0 ? "color-mix(in srgb, var(--acc) 25%, transparent)" : "var(--border)";
function calcPnL(profit, capital) {
const cap = (capital && capital > 0) ? capital : 5000;
return (profit / cap) * 100;
}
function inferCapital(trades) { return 5000; }
function deriveDir(t) {
if (t.entryPrice && t.exitPrice && t.profit !== 0) {
const up = t.exitPrice > t.entryPrice, win = t.profit > 0;
if (up && win) return "Long";
if (up && !win) return "Short";
if (!up && win) return "Short";
return "Long";
}
return t.side || "Long";
}
function useMediaQuery(q) {
const [m, setM] = useState(() => window.matchMedia(q).matches);
useEffect(() => {
const mq = window.matchMedia(q);
const h = (e) => setM(e.matches);
mq.addEventListener("change", h);
return () => mq.removeEventListener("change", h);
}, [q]);
return m;
}
const BLANK_TRADE = {
id: 0,
symbol: "",
entryDate: "",
entryTime: "",
side: "Long",
entryPrice: 0,
exitPrice: 0,
pnl: 0,
profit: 0,
status: "Closed",
confluences: [],
keyLevels: [],
session: "",
model: "",
emotionBefore: "",
emotionAfter: "",
mistakes: "",
grade: "",
expectedRR: "1:2",
actualRR: "",
notes: "",
riskAmount: 0,
stopLoss: 0,
takeProfit: 0,
accountId: "manual",
tags: [],
createdAt: "",
updatedAt: ""
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
if (!a || typeof a !== "object") return null;
return {
id: a.id || String(Date.now()),
label: a.label || "My Account",
capital: Number(a.capital) || (Boolean(a.isDemo) ? 1e4 : 0),
isDemo: Boolean(a.isDemo),
login: a.login || "",
password: a.password || "",
server: a.server || "",
type: a.type || "demo",
connected: Boolean(a.connected),
lastSync: a.lastSync || null,
info: a.info || null,
balanceAdjustments: Array.isArray(a.balanceAdjustments) ? a.balanceAdjustments : [],
trades: Array.isArray(a.trades) ? a.trades.map(sanitizeTrade).filter(Boolean) : []
};
}
function loadAccounts() {
try {
const r = localStorage.getItem("tj5_accounts");
if (!r) return [];
const parsed = JSON.parse(r);
if (!Array.isArray(parsed)) return [];
return parsed.map(sanitizeAccount).filter(Boolean);
} catch (e) {
console.warn("[TJ] loadAccounts failed:", e);
return [];
}
}
function saveAccounts(accs) {
try {
if (!Array.isArray(accs)) return;
const clean = accs.map(sanitizeAccount).filter(Boolean);
localStorage.setItem("tj5_accounts", JSON.stringify(clean));
} catch (e) {
console.warn("[TJ] saveAccounts failed:", e);
}
}
function loadTradeMeta() {
try {
const r = localStorage.getItem("tj5_meta");
return r ? JSON.parse(r) : {};
} catch (e) {
return {};
}
}
function saveTradeMeta(meta) {
try {
localStorage.setItem("tj5_meta", JSON.stringify(meta));
} catch (e) {
}
}
function loadTheme() {
try {
return localStorage.getItem("tj5_theme") || "zinc";
} catch (e) {
return "light";
}
}
function loadAccent() {
try {
return localStorage.getItem("tj5_accent") || "indigo";
} catch (e) {
return "slate";
}
}
function loadDailyLimit() {
try {
const r = localStorage.getItem("tj5_daily_limit");
return r ? JSON.parse(r) : { enabled: false, maxTrades: 3, maxLoss: -2 };
} catch (e) {
return { enabled: false, maxTrades: 3, maxLoss: -2 };
}
}
function saveDailyLimit(s) {
try {
localStorage.setItem("tj5_daily_limit", JSON.stringify(s));
} catch (e) {
}
}
function loadCustomLists() {
try { const r = localStorage.getItem("tj5_custom_lists"); return r ? JSON.parse(r) : { confluences: null, sessions: null, mistakes: null, keyLevels: null }; } catch (e) { return { confluences: null, sessions: null, mistakes: null, keyLevels: null }; }
}
function saveCustomLists(lists) {
try { localStorage.setItem("tj5_custom_lists", JSON.stringify(lists)); } catch (e) {}
}
function exportCSV(trades, capital) {
const cap = (capital && capital > 0) ? capital : 5000;
const headers = ["ID", "Symbol", "Date", "Time", "Side", "Entry", "Exit", "P&L%", "Net P&L $", "Session", "Model", "Grade", "Expected RR", "Actual RR", "Emotion Before", "Emotion After", "Mistakes", "Confluences", "Notes"];
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
(t.confluences || []).join("; "),
`"${(t.notes || "").replace(/"/g, '""')}"`
]);
const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
const a = document.createElement("a");
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
return gl ? (gw / gl).toFixed(2) : "\u221E";
})();
const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Trade Journal Export</title>
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
<div class="stats">
<div class="stat"><div class="stat-label">Gross P&L</div><div class="stat-val" style="color:${grossPct >= 0 ? "#c8983a" : "#64748b"}">${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%</div></div>
<div class="stat"><div class="stat-label">Net P&L ($)</div><div class="stat-val" style="color:${grossUSD >= 0 ? "#c8983a" : "#64748b"}">${grossUSD >= 0 ? "+$" : "-$"}${Math.abs(grossUSD).toFixed(2)}</div></div>
<div class="stat"><div class="stat-label">Win Rate</div><div class="stat-val">${wr}%</div></div>
<div class="stat"><div class="stat-label">Total Trades</div><div class="stat-val">${trades.length}</div></div>
<div class="stat"><div class="stat-label">Profit Factor</div><div class="stat-val">${profitFactor}</div></div>
</div>
<table><thead><tr><th>Date</th><th>Symbol</th><th>Side</th><th>Entry</th><th>Exit</th><th>P&L%</th><th>Net P&L $</th><th>Grade</th><th>Session</th><th>RR</th><th>Notes</th></tr></thead><tbody>
${trades.sort((a, b) => b.entryDate.localeCompare(a.entryDate)).map((t) => { const tPct = calcPnL(t.profit, cap); return `<tr>
<td>${t.entryDate}</td><td><b>${t.symbol}</b></td>
<td>${t.side}</td><td>${t.entryPrice}</td><td>${t.exitPrice || "\u2014"}</td>
<td class="${tPct >= 0 ? "win" : "loss"}">${tPct >= 0 ? "+" : ""}${tPct.toFixed(2)}%</td>
<td class="${t.profit >= 0 ? "win" : "loss"}">${t.profit >= 0 ? "+$" : "-$"}${Math.abs(t.profit).toFixed(2)}</td>
<td>${t.grade || "\u2014"}</td><td>${t.session || "\u2014"}</td><td>${t.actualRR || "\u2014"}</td>
<td style="max-width:200px;overflow:hidden;">${t.notes || ""}</td>
</tr>`; }).join("")}
</tbody></table></body></html>`;
const w = window.open("", "_blank");
w.document.write(html);
w.document.close();
setTimeout(() => w.print(), 400);
}
function calcStreak(trades) {
if (!trades.length) return { current: 0, type: "none", longest: { win: 0, loss: 0 } };
const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
let cur = 0, curType = "none", maxW = 0, maxL = 0, runW = 0, runL = 0;
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
curType = w ? "win" : "loss";
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
const h = parseInt((t.entryTime || "00:00").split(":")[0], 10);
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
const k = t.model || "Unknown";
m[k] = (m[k] || 0) + 1;
return m;
}, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0];
const topMistake = (_b = Object.entries(wk.filter((t) => t.mistakes && t.mistakes !== "None").reduce((m, t) => {
m[t.mistakes] = (m[t.mistakes] || 0) + 1;
return m;
}, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _b[0];
const disciplined = Math.round(wk.filter((t) => !t.mistakes || t.mistakes === "None").length / wk.length * 100);
return { from: weekStr(mon), to: weekStr(sun), total: wk.length, wins: wins.length, wr: wr.toFixed(0), pnl: pnl.toFixed(2), profit: profit.toFixed(2), topModel, topMistake, disciplined };
}
const SEED = [
{ id: 54565171, symbol: "XAUUSD", entryDate: "2025-12-12", entryTime: "09:07:11", side: "Long", entryPrice: 4285.82, exitPrice: 4287.65, stopLoss: 4287.69, takeProfit: 4292.9, pnl: 0.2745, profit: 27.45, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 54999710, symbol: "XAUUSD", entryDate: "2025-12-16", entryTime: "05:11:18", side: "Short", entryPrice: 4284.8, exitPrice: 4289.45, stopLoss: 4289.49, takeProfit: 4277.99, pnl: -0.6975, profit: -69.75, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 55193310, symbol: "XAUUSD", entryDate: "2025-12-17", entryTime: "07:22:07", side: "Long", entryPrice: 4334.94, exitPrice: 4336.42, stopLoss: 4336.52, takeProfit: 4341.9, pnl: 0.222, profit: 22.2, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 55393921, symbol: "XAUUSD", entryDate: "2025-12-18", entryTime: "18:10:22", side: "Long", entryPrice: 4349.15, exitPrice: 4356.48, stopLoss: 4353.41, takeProfit: 4355.95, pnl: 1.0995, profit: 109.95, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 55750744, symbol: "XAUUSD", entryDate: "2025-12-22", entryTime: "01:50:17", side: "Long", entryPrice: 4356.52, exitPrice: 4363.45, stopLoss: 4360.81, takeProfit: 4363.4, pnl: 1.0395, profit: 103.95, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 56208180, symbol: "XAUUSD", entryDate: "2025-12-26", entryTime: "03:04:53", side: "Long", entryPrice: 4525.9, exitPrice: 4527.75, stopLoss: 4527.95, takeProfit: 4532.25, pnl: 0.2775, profit: 27.75, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 56393594, symbol: "XAUUSD", entryDate: "2025-12-29", entryTime: "02:30:15", side: "Short", entryPrice: 4475.2, exitPrice: 4479.93, stopLoss: 4479.95, takeProfit: 4468.45, pnl: -0.7095, profit: -70.95, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 56694483, symbol: "XAUUSD", entryDate: "2025-12-31", entryTime: "07:40:31", side: "Short", entryPrice: 4318.51, exitPrice: 4327.39, stopLoss: 4327.2, takeProfit: 4315.7, pnl: -1.332, profit: -133.2, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 56836027, symbol: "XAUUSD", entryDate: "2026-01-02", entryTime: "05:34:08", side: "Long", entryPrice: 4373.61, exitPrice: 4371.4, stopLoss: 4368.6, takeProfit: 4380.1, pnl: -0.3315, profit: -33.15, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 56986286, symbol: "XAUUSD", entryDate: "2026-01-05", entryTime: "03:02:02", side: "Long", entryPrice: 4402.35, exitPrice: 4409.46, stopLoss: 4402.35, takeProfit: 4409.25, pnl: 1.0665, profit: 106.65, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 57188896, symbol: "XAUUSD", entryDate: "2026-01-06", entryTime: "01:09:49", side: "Long", entryPrice: 4457.21, exitPrice: 4456.71, stopLoss: 4451.0, takeProfit: 4462.5, pnl: -0.075, profit: -7.5, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 57445777, symbol: "XAUUSD", entryDate: "2026-01-07", entryTime: "01:39:17", side: "Long", entryPrice: 4496.93, exitPrice: 4492.72, stopLoss: 4492.75, takeProfit: 4504.27, pnl: -0.6315, profit: -63.15, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 57656217, symbol: "XAUUSD", entryDate: "2026-01-08", entryTime: "07:16:33", side: "Short", entryPrice: 4423.4, exitPrice: 4428.06, stopLoss: 4428.0, takeProfit: 4416.5, pnl: -0.699, profit: -69.9, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 58227401, symbol: "XAUUSD", entryDate: "2026-01-13", entryTime: "16:47:15", side: "Long", entryPrice: 4630.24, exitPrice: 4629.93, stopLoss: 4630.24, takeProfit: 4637.03, pnl: -0.0465, profit: -4.65, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 58432980, symbol: "XAUUSD", entryDate: "2026-01-14", entryTime: "07:01:55", side: "Long", entryPrice: 4634.34, exitPrice: 4634.35, stopLoss: 4634.34, takeProfit: 4641.25, pnl: 0.0015, profit: 0.15, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 58607668, symbol: "XAUUSD", entryDate: "2026-01-15", entryTime: "03:31:33", side: "Short", entryPrice: 4588.39, exitPrice: 4589.61, stopLoss: 4595.9, takeProfit: 4584.4, pnl: -0.183, profit: -18.3, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 58805785, symbol: "XAUUSD", entryDate: "2026-01-16", entryTime: "17:27:02", side: "Short", entryPrice: 4580.79, exitPrice: 4574.1, stopLoss: 4577.02, takeProfit: 4574.1, pnl: 1.0035, profit: 100.35, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 59950685, symbol: "XAUUSD", entryDate: "2026-01-27", entryTime: "08:12:43", side: "Long", entryPrice: 5077.33, exitPrice: 5091.49, stopLoss: 5064.91, takeProfit: 5091.2, pnl: 1.1328, profit: 113.28, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.08", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 60725731, symbol: "XAUUSD", entryDate: "2026-02-03", entryTime: "11:27:25", side: "Long", entryPrice: 4896.49, exitPrice: 4922.22, stopLoss: 4873.6, takeProfit: 4952.66, pnl: 0.5146, profit: 51.46, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 60845776, symbol: "XAUUSD", entryDate: "2026-02-04", entryTime: "09:06:17", side: "Long", entryPrice: 5065.82, exitPrice: 5064.68, stopLoss: 5038.2, takeProfit: 5120.11, pnl: -0.0229, profit: -2.29, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 60918734, symbol: "XAUUSD", entryDate: "2026-02-04", entryTime: "17:12:27", side: "Long", entryPrice: 4984.73, exitPrice: 4951.19, stopLoss: 4951.19, takeProfit: 5036.55, pnl: -0.6708, profit: -67.08, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 60986864, symbol: "XAUUSD", entryDate: "2026-02-05", entryTime: "09:38:35", side: "Long", entryPrice: 4908.78, exitPrice: 4876.65, stopLoss: 4876.66, takeProfit: 4962.33, pnl: -0.6426, profit: -64.26, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 61234020, symbol: "XAUUSD", entryDate: "2026-02-09", entryTime: "13:26:46", side: "Short", entryPrice: 4999.26, exitPrice: 5012.53, stopLoss: 5012.35, takeProfit: 0, pnl: -0.5308, profit: -53.08, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 62009733, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "10:34:32", side: "Long", entryPrice: 4922.03, exitPrice: 4916.96, stopLoss: 4917.0, takeProfit: 0, pnl: -0.4563, profit: -45.63, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.09", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 62013424, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "11:02:26", side: "Short", entryPrice: 4918.72, exitPrice: 4925.25, stopLoss: 4925.23, takeProfit: 4898.54, pnl: -0.4571, profit: -45.71, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 62041928, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "15:23:41", side: "Short", entryPrice: 4954.37, exitPrice: 4959.4, stopLoss: 4959.37, takeProfit: 4946.75, pnl: -0.3521, profit: -35.21, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 62587430, symbol: "XAUUSD", entryDate: "2026-02-25", entryTime: "11:16:15", side: "Long", entryPrice: 5183.95, exitPrice: 5189.66, stopLoss: 5184.12, takeProfit: 5189.59, pnl: 1.0849, profit: 108.49, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.19", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63483394, symbol: "XAUUSD", entryDate: "2026-03-09", entryTime: "10:05:14", side: "Long", entryPrice: 5092.33, exitPrice: 5100.69, stopLoss: 5092.83, takeProfit: 5100.69, pnl: 1.0868, profit: 108.68, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63707874, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "07:09:02", side: "Long", entryPrice: 5204.89, exitPrice: 5198.83, stopLoss: 5199.26, takeProfit: 5209.66, pnl: -0.4848, profit: -48.48, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.08", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63745820, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "14:13:41", side: "Short", entryPrice: 5185.98, exitPrice: 5177.13, stopLoss: 5193.54, takeProfit: 5177.43, pnl: 0.531, profit: 53.1, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.06", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63765842, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "16:44:28", side: "Short", entryPrice: 5168.31, exitPrice: 5151.18, stopLoss: 5181.64, takeProfit: 5152.72, pnl: 0.5139, profit: 51.39, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.03", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63828907, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "07:17:23", side: "Long", entryPrice: 5153.63, exitPrice: 5149.7, stopLoss: 5149.85, takeProfit: 5157.43, pnl: -0.5109, profit: -51.09, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63829367, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "07:35:28", side: "Short", entryPrice: 5148.86, exitPrice: 5142.15, stopLoss: 5148.75, takeProfit: 5142.0, pnl: 0.7381, profit: 73.81, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.11", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63866886, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "14:12:04", side: "Short", entryPrice: 5179.97, exitPrice: 5175.91, stopLoss: 5183.9, takeProfit: 5176.0, pnl: 0.4872, profit: 48.72, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.12", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63964767, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "10:06:02", side: "Long", entryPrice: 5090.49, exitPrice: 5083.42, stopLoss: 5083.51, takeProfit: 5091.3, pnl: -0.4949, profit: -49.49, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63965869, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "10:17:20", side: "Short", entryPrice: 5083.37, exitPrice: 5083.25, stopLoss: 5083.22, takeProfit: 5070.82, pnl: 0.0072, profit: 0.72, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.06", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 63992147, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "14:07:59", side: "Short", entryPrice: 5090.72, exitPrice: 5097.86, stopLoss: 5097.63, takeProfit: 5083.17, pnl: -0.4998, profit: -49.98, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64000266, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "15:39:04", side: "Short", entryPrice: 5111.62, exitPrice: 5116.67, stopLoss: 5116.29, takeProfit: 5106.49, pnl: -0.505, profit: -50.5, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64001191, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "15:45:36", side: "Long", entryPrice: 5116.55, exitPrice: 5111.8, stopLoss: 5111.8, takeProfit: 5126.75, pnl: -0.475, profit: -47.5, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64007109, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "16:35:48", side: "Short", entryPrice: 5100.26, exitPrice: 5109.43, stopLoss: 5109.39, takeProfit: 0, pnl: -0.4585, profit: -45.85, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.05", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64066114, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "07:16:05", side: "Long", entryPrice: 5026.19, exitPrice: 5018.84, stopLoss: 5018.84, takeProfit: 0, pnl: -0.735, profit: -73.5, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64066847, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "07:38:08", side: "Short", entryPrice: 5018.53, exitPrice: 5008.18, stopLoss: 5026.21, takeProfit: 5008.4, pnl: 1.035, profit: 103.5, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64076903, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:06:19", side: "Short", entryPrice: 5011.28, exitPrice: 5015.82, stopLoss: 5015.74, takeProfit: 5007.3, pnl: -0.908, profit: -90.8, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64077199, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:09:52", side: "Long", entryPrice: 5015.98, exitPrice: 5009.62, stopLoss: 5009.74, takeProfit: 0, pnl: -0.954, profit: -95.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64077804, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:15:19", side: "Short", entryPrice: 5009.08, exitPrice: 4995.71, stopLoss: 5013.9, takeProfit: 4996.08, pnl: 2.674, profit: 267.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64180734, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "07:11:11", side: "Long", entryPrice: 5029.55, exitPrice: 5026.32, stopLoss: 5026.36, takeProfit: 5032.95, pnl: -0.0646, profit: -6.46, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64181187, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "07:23:31", side: "Long", entryPrice: 5029.33, exitPrice: 5026.28, stopLoss: 5026.3, takeProfit: 5032.79, pnl: -0.793, profit: -79.3, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.26", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64220280, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "14:08:07", side: "Long", entryPrice: 5002.21, exitPrice: 5009.44, stopLoss: 4996.45, takeProfit: 5009.14, pnl: 0.9399, profit: 93.99, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64229916, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "15:43:48", side: "Short", entryPrice: 5017.7, exitPrice: 5012.36, stopLoss: 5022.81, takeProfit: 5012.41, pnl: 0.801, profit: 80.1, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64289090, symbol: "XAUUSD", entryDate: "2026-03-18", entryTime: "07:24:24", side: "Long", entryPrice: 4993.0, exitPrice: 4989.52, stopLoss: 4989.53, takeProfit: 0, pnl: -0.696, profit: -69.6, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64289367, symbol: "XAUUSD", entryDate: "2026-03-18", entryTime: "07:33:03", side: "Short", entryPrice: 4989.13, exitPrice: 4984.48, stopLoss: 4989.06, takeProfit: 4983.83, pnl: 0.8835, profit: 88.35, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.19", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64405935, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "07:07:15", side: "Short", entryPrice: 4848.25, exitPrice: 4851.53, stopLoss: 4851.53, takeProfit: 4844.35, pnl: -0.6888, profit: -68.88, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.21", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64406272, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "07:15:43", side: "Long", entryPrice: 4851.72, exitPrice: 4848.64, stopLoss: 4848.67, takeProfit: 4856.23, pnl: -0.7084, profit: -70.84, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.23", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64457428, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "15:38:28", side: "Long", entryPrice: 4616.76, exitPrice: 4598.04, stopLoss: 4598.73, takeProfit: 0, pnl: -0.7488, profit: -74.88, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64457735, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "15:40:17", side: "Short", entryPrice: 4598.45, exitPrice: 4566.13, stopLoss: 4597.97, takeProfit: 4567.22, pnl: 1.2928, profit: 129.28, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64802852, symbol: "XAUUSD", entryDate: "2026-03-24", entryTime: "17:05:40", side: "Short", entryPrice: 4389.53, exitPrice: 4405.79, stopLoss: 4405.54, takeProfit: 4368.1, pnl: -0.813, profit: -81.3, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.05", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64806419, symbol: "XAUUSD", entryDate: "2026-03-24", entryTime: "17:22:41", side: "Long", entryPrice: 4406.07, exitPrice: 4427.24, stopLoss: 4389.51, takeProfit: 4427.24, pnl: 1.9053, profit: 190.53, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.09", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64867305, symbol: "XAUUSD", entryDate: "2026-03-25", entryTime: "10:25:59", side: "Short", entryPrice: 4557.3, exitPrice: 4548.43, stopLoss: 4555.36, takeProfit: 4547.22, pnl: 1.2418, profit: 124.18, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.14", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64867394, symbol: "USTEC", entryDate: "2026-03-25", entryTime: "10:26:50", side: "Short", entryPrice: 24149.12, exitPrice: 24158.86, stopLoss: 24192.25, takeProfit: 24102.5, pnl: -0.224, profit: -22.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.23", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64959744, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "07:06:03", side: "Short", entryPrice: 4512.35, exitPrice: 4517.62, stopLoss: 4517.59, takeProfit: 4505.39, pnl: -0.7905, profit: -79.05, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 64959901, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "07:11:27", side: "Long", entryPrice: 4518.22, exitPrice: 4518.23, stopLoss: 4518.39, takeProfit: 4526.58, pnl: 0.0018, profit: 0.18, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.18", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 65002890, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "14:17:01", side: "Short", entryPrice: 4440.48, exitPrice: 4448.72, stopLoss: 4448.66, takeProfit: 4430.77, pnl: -0.9888, profit: -98.88, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.12", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 65075738, symbol: "XAUUSD", entryDate: "2026-03-27", entryTime: "07:09:03", side: "Short", entryPrice: 4435.3, exitPrice: 4440.19, stopLoss: 4439.8, takeProfit: 4430.43, pnl: -1.0758, profit: -107.58, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.22", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
{ id: 65111573, symbol: "XAUUSD", entryDate: "2026-03-27", entryTime: "14:07:06", side: "Short", entryPrice: 4409.01, exitPrice: 4417.46, stopLoss: 4417.46, takeProfit: 4398.97, pnl: -0.9295, profit: -92.95, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.11", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] }
];
const C = {
green: "var(--green)",
gBg: "var(--gBg)",
gBdr: "var(--gBdr)",
red: "var(--red)",
rBg: "var(--rBg)",
rBdr: "var(--rBdr)",
gold: "var(--acc)",
goldD: "var(--accD)",
goldL: "var(--accL)",
goldF: "var(--accF)",
blue: "var(--blue)",
bBg: "var(--bBg)",
bBdr: "var(--bBdr)",
purple: "var(--purple)",
pBg: "var(--pBg)",
pBdr: "var(--pBdr)",
text: "var(--text)",
t2: "var(--t2)",
t3: "var(--t3)",
surface: "var(--surface)",
s2: "var(--s2)",
s3: "var(--s3)",
border: "var(--border)",
border2: "var(--border2)",
bg: "var(--bg)",
indigo: "var(--indigo)"
};
function Chip({ children, color = "gray", size = "sm" }) {
const map = {
green: ["var(--gBg)", "var(--gBdr)", "var(--green)"],
profit: ["var(--accL)", "color-mix(in srgb, var(--acc) 30%, transparent)", "var(--accD)"],
loss: ["var(--s3)", "var(--border2)", "var(--t2)"],
gold: ["var(--accF)", "color-mix(in srgb, var(--acc) 35%, transparent)", "var(--accD)"],
blue: ["var(--bBg)", "var(--bBdr)", "var(--blue)"],
purple: ["var(--pBg)", "var(--pBdr)", "var(--purple)"],
orange: ["var(--oBg)", "var(--oBdr)", "var(--orange)"],
cyan: ["var(--cBg)", "var(--cBdr)", "var(--cyan)"],
red: ["var(--rBg)", "var(--rBdr)", "var(--red)"],
gray: ["var(--s3)", "var(--border)", "var(--t2)"],
truegreen: ["var(--gBg)", "var(--gBdr)", "var(--green)"]
};
const [bg, bdr, txt] = map[color] || map.gray;
const pad = size === "sm" ? "2px 8px" : size === "lg" ? "5px 14px" : "4px 11px";
const fs = size === "sm" ? "10px" : size === "lg" ? "13px" : "11px";
return  React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: pad, fontSize: fs } }, children);
}
function StatPill({ val, pnl }) {
const col = pnl >= 0 ? C.goldD : C.t2;
const bg = pnl >= 0 ? C.goldL : C.s3;
const bdr = pnl >= 0 ? "color-mix(in srgb, var(--acc) 25%, transparent)" : C.border;
return  React.createElement("span", { style: { background: bg, border: `1px solid ${bdr}`, color: col, borderRadius: 7, padding: "2px 9px", fontSize: 10.5, fontWeight: 700 } }, val);
}
function Label({ children }) {
return  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.06, marginBottom: 8, textTransform: "uppercase", fontFamily: "'Inter',sans-serif" } }, children);
}
function PnlBadge({ pnl, profit, size = 12 }) {
const col = pnl >= 0 ? C.goldD : C.t2;
return  React.createElement("span", { style: { color: col, fontSize: size, fontWeight: 700 } }, fmtPct(pnl), profit != null && profit !== 0 &&  React.createElement("span", { style: { fontSize: size - 1, opacity: 0.7, marginLeft: 4 } }, "(", fmtUSD(profit), ")"));
}
function GradeChip({ grade }) {
const map = { "A+": [C.goldF, "color-mix(in srgb, var(--acc) 40%, transparent)", C.goldD], "A": [C.gBg, C.gBdr, C.green], "B": [C.bBg, C.bBdr, C.blue], "C": [C.pBg, C.pBdr, C.purple], "D": [C.rBg, C.rBdr, C.red] };
const [bg, bdr, txt] = map[grade || "B"] || map["B"];
return  React.createElement("span", { style: { background: bg, border: `1px solid ${bdr}`, color: txt, borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 600 } }, grade || "\u2014");
}
function SessionChip({ session }) {
const map = { "Asian": ["#ecfeff", "#a5f3fc", "#0891b2"], "London": ["#eff6ff", "#bfdbfe", "#2563eb"], "New York": ["#fef3c7", "color-mix(in srgb, var(--acc) 30%, transparent)", "#a87c28"], "London-NY Overlap": ["#f5f3ff", "#ddd6fe", "#7c3aed"], "Pre-Market": ["var(--s3)", "var(--border2)", "var(--t2)"], "After Hours": ["var(--s3)", "var(--border2)", "var(--t2)"], "Weekly Open": ["#f0fdf4", "#bbf7d0", "#16a34a"], "Weekly Close": ["#fef2f2", "#fecaca", "#dc2626"] };
const [bg, bdr, txt] = map[session] || ["var(--s3)", "var(--border)", "var(--t2)"];
return  React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: "2px 8px", fontSize: 10 } }, session || "\u2014");
}
function EmotionChip({ emotion, type = "before" }) {
const positive = ["Calm & Focused", "Confident", "Neutral", "Disciplined", "Satisfied", "Proud", "Relieved"];
const negative = ["FOMO", "Greedy", "Fearful", "Angry", "Revenge Mindset", "Impatient", "Euphoric", "Overconfident"];
const isPos = positive.includes(emotion);
const isNeg = negative.includes(emotion);
const bg = isPos ? C.gBg : isNeg ? C.rBg : C.bBg;
const bdr = isPos ? C.gBdr : isNeg ? C.rBdr : C.bBdr;
const col = isPos ? C.green : isNeg ? C.red : C.blue;
const icon = isPos ? "\u{1F60C}" : isNeg ? "\u{1F630}" : "\u{1F610}";
return  React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: col, padding: "2px 8px", fontSize: 10 } }, icon, " ", emotion || "\u2014");
}
function Sparkline({ pts, w = 120, h = 36, color }) {
if (!pts || pts.length < 2) return  React.createElement("div", { style: { width: w, height: h } });
const lo = Math.min(...pts), hi = Math.max(...pts), rng = hi - lo || 1;
const P = 2, IW = w - P * 2, IH = h - P * 2;
const xi = (i) => i / (pts.length - 1 || 1) * IW + P;
const yi = (v) => IH - (v - lo) / rng * IH + P;
const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${xi(i).toFixed(1)},${yi(v).toFixed(1)}`).join(" ");
const last = pts[pts.length - 1];
const col = color || (last >= 0 ? "var(--acc)" : "#94a3b8");
const fill = `${d} L${xi(pts.length - 1).toFixed(1)},${IH + P} L${P},${IH + P} Z`;
const gid = `sg${w}${h}${Math.abs(last).toFixed(0)}`;
return  React.createElement("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, style: { display: "block", overflow: "hidden" } },  React.createElement("defs", null,  React.createElement("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" },  React.createElement("stop", { offset: "0%", stopColor: col, stopOpacity: 0.2 }),  React.createElement("stop", { offset: "100%", stopColor: col, stopOpacity: 0.02 }))),  React.createElement("path", { d: fill, fill: `url(#${gid})` }),  React.createElement("path", { d, fill: "none", stroke: col, strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" }));
}
function HBar({ label, value, max, color = "var(--acc)", subtitle, rightLabel }) {
const pct = max > 0 ? Math.min(100, Math.abs(value) / max * 100) : 0;
return  React.createElement("div", { style: { marginBottom: 10 } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 } },  React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)" } }, label),  React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } }, subtitle &&  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, subtitle), rightLabel &&  React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: value >= 0 ? "var(--accD)" : "var(--t2)" } }, rightLabel))),  React.createElement("div", { style: { height: 7, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } },  React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s cubic-bezier(.22,1,.36,1)" } })));
}
function Donut({ pct, size = 56, color = "var(--acc)", label }) {
const r = 23, cx = 32, cy = 32, circ = 2 * Math.PI * r;
const dash = Math.max(0, Math.min(circ, circ * (pct / 100)));
return  React.createElement("svg", { width: size, height: size, viewBox: "0 0 64 64" },  React.createElement("circle", { cx, cy, r, fill: "none", stroke: "var(--s3)", strokeWidth: 7 }),  React.createElement(
"circle",
{
cx,
cy,
r,
fill: "none",
stroke: color,
strokeWidth: 7,
strokeDasharray: `${dash} ${circ}`,
strokeLinecap: "round",
transform: "rotate(-90 32 32)",
style: { transition: "stroke-dasharray .6s ease" }
}
),  React.createElement("text", { x: cx, y: cy + 4, textAnchor: "middle", fontSize: 11, fontWeight: 700, fill: "var(--text)", fontFamily: "Inter" }, label || pct.toFixed(0) + "%"));
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
pathRef.current.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)";
requestAnimationFrame(() => {
pathRef.current && (pathRef.current.style.strokeDashoffset = "0");
});
}, [mounted]);
const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
let cum = 0, peak = 0;
const allPts = [{ x: 0, y: 0, dd: 0, date: "Start" }, ...sorted.map((t, i) => {
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
const col = last >= 0 ? "var(--acc)" : "#94a3b8";
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
return  React.createElement("div", { style: { position: "relative" } },  React.createElement(
"svg",
{
ref: svgRef,
width: "100%",
viewBox: `0 0 ${W} ${H}`,
style: { display: "block", cursor: "crosshair" },
onMouseMove: handleMove,
onMouseLeave: () => setHover(null)
},
React.createElement("defs", null,  React.createElement("linearGradient", { id: "pcg", x1: "0", y1: "0", x2: "0", y2: "1" },  React.createElement("stop", { offset: "0%", stopColor: col, stopOpacity: 0.18 }),  React.createElement("stop", { offset: "100%", stopColor: col, stopOpacity: 0.01 })),  React.createElement("linearGradient", { id: "ddg", x1: "0", y1: "0", x2: "0", y2: "1" },  React.createElement("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: 0.22 }),  React.createElement("stop", { offset: "100%", stopColor: "#ef4444", stopOpacity: 0.04 })),  React.createElement("clipPath", { id: "pcc" },  React.createElement("rect", { x: PAD.l, y: PAD.t, width: IW, height: IH }))),
ySteps.map((v, i) =>  React.createElement("g", { key: i },  React.createElement("line", { x1: PAD.l, x2: PAD.l + IW, y1: sy(v), y2: sy(v), stroke: "var(--border)", strokeWidth: 0.6 }),  React.createElement("text", { x: PAD.l - 5, y: sy(v) + 4, textAnchor: "end", fontSize: 9, fill: "var(--t3)", fontFamily: "Inter" }, fmtPct(v, 0)))),
lo < 0 && hi > 0 &&  React.createElement("line", { x1: PAD.l, x2: PAD.l + IW, y1: zero, y2: zero, stroke: "var(--border2)", strokeWidth: 1, strokeDasharray: "4,3" }),
showDD && ddFillPath &&  React.createElement("path", { d: ddFillPath, fill: "url(#ddg)", clipPath: "url(#pcc)", opacity: mounted ? 1 : 0, style: { transition: "opacity .6s" } }),
showDD && ddPath &&  React.createElement("path", { d: ddPath, fill: "none", stroke: "#ef4444", strokeWidth: 1.2, strokeDasharray: "4,2", strokeLinecap: "round", clipPath: "url(#pcc)", opacity: mounted ? 0.65 : 0, style: { transition: "opacity .6s" } }),
React.createElement("path", { d: fill, fill: "url(#pcg)", clipPath: "url(#pcc)", style: { opacity: mounted ? 1 : 0, transition: "opacity .6s" } }),
React.createElement("path", { ref: pathRef, d, fill: "none", stroke: col, strokeWidth: 2.2, strokeLinejoin: "round", strokeLinecap: "round", clipPath: "url(#pcc)" }),
React.createElement("circle", { cx: sx(maxX), cy: sy(last), r: 4, fill: col, stroke: "white", strokeWidth: 2, opacity: mounted ? 1 : 0, style: { transition: "opacity .3s .8s" } }),
hp && hover.idx > 0 &&  React.createElement("g", { style: { pointerEvents: "none" } },  React.createElement("line", { x1: sx(hover.idx), x2: sx(hover.idx), y1: PAD.t, y2: PAD.t + IH, stroke: col, strokeWidth: 1, strokeDasharray: "3,3", opacity: 0.4 }),  React.createElement("circle", { cx: sx(hover.idx), cy: sy(hp.y), r: 5, fill: col, stroke: "white", strokeWidth: 2 }), showDD &&  React.createElement("circle", { cx: sx(hover.idx), cy: sy(hp.dd), r: 3, fill: "#ef4444", stroke: "white", strokeWidth: 1.5 }), "      ")
), hp && hover.idx > 0 && (() => {
const frac = sx(hover.idx) / W;
const left = frac > 0.72 ? "auto" : `calc(${Math.round(frac * 100)}% + 10px)`;
const right = frac > 0.72 ? "10px" : "auto";
return  React.createElement("div", { style: { position: "absolute", top: 4, left, right, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "11px 15px", fontSize: 11, pointerEvents: "none", zIndex: 10, minWidth: 180, boxShadow: "0 8px 30px rgba(0,0,0,.15)" } },  React.createElement("div", { style: { fontWeight: 600, marginBottom: 6, fontSize: 12, borderBottom: "1px solid var(--border)", paddingBottom: 6, color: "var(--text)" } }, hp.date, " \xB7 ", hp.label || "Start"),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 14 } },  React.createElement("span", { style: { color: "var(--t3)" } }, "Equity"),  React.createElement("span", { style: { fontWeight: 700, color: hp.y >= 0 ? "var(--accD)" : "var(--red)" } }, fmtPct(hp.y))), hp.pnl != null &&  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 14 } },  React.createElement("span", { style: { color: "var(--t3)" } }, "This trade"),  React.createElement("span", { style: { fontWeight: 700, color: hp.pnl >= 0 ? "var(--accD)" : "var(--red)" } }, hp.profit != null && hp.profit !== 0 ? (hp.profit >= 0 ? "+$" : "-$") + Math.abs(hp.profit).toFixed(2) + " " : "", fmtPct(hp.pnl)))));
})());
});
function parseMT5Html(htmlText) {
const parser = new DOMParser();
const doc = parser.parseFromString(htmlText, "text/html");
const rows = Array.from(doc.querySelectorAll("tr"));
const datePat = /^\d{4}\.\d{2}\.\d{2}\s+\d{2}:\d{2}:\d{2}$/;
const trades = [];
for (const row of rows) {
const cells = Array.from(row.querySelectorAll("td:not(.hidden)")).map(c => c.textContent.trim());
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
const entryDate = datePart.replace(/\./g,"-");
const h = parseInt(timePart);
const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : h < 20 ? "London Mid" : "Out of Session";
const symbol = symRaw.replace(/\.QTT|\.$/g,"");
const side = type.includes("buy") ? "Long" : "Short";
const _mt5Raw = [symbol, entryDate, timePart, side, String(entryPrice), String(exitPrice), String(parseFloat(profit.toFixed(2)))].join("|");
let _mt5h = 5381; for (let _i = 0; _i < _mt5Raw.length; _i++) _mt5h = (((_mt5h << 5) + _mt5h) ^ _mt5Raw.charCodeAt(_i)) >>> 0;
trades.push({
id: "mt5_" + _mt5h.toString(36) + "_" + _mt5Raw.length,
symbol, entryDate, entryTime: timePart,
side, entryPrice, exitPrice, stopLoss: sl, takeProfit: tp,
pnl: 0,
profit: parseFloat(profit.toFixed(2)),
status: "Closed", confluences: [], session,
model: "In Session", emotionBefore: "Calm & Focused",
emotionAfter: profit > 0 ? "Satisfied" : "Lesson Learned",
mistakes: "None", grade: profit > 50 ? "A" : profit > 0 ? "B" : profit > -50 ? "C" : "D",
expectedRR: "1:2", actualRR: "", notes: `MT5 | Vol:${vol}`,
riskAmount: 0, tags: ["MT5"], accountId: ""
});
} catch(e) {}
}
return trades;
}
function parseMatchTraderCSV(csvText) {
const lines = csvText.trim().split(/\r?\n/);
if (lines.length < 2) return [];
const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
const iId       = headers.indexOf("id");
const iSym      = headers.indexOf("symbol");
const iOpenTime = headers.indexOf("open time");
const iVol      = headers.indexOf("volume");
const iSide     = headers.indexOf("side");
const iCloseTime= headers.indexOf("close time");
const iOpenPx   = headers.indexOf("open price");
const iClosePx  = headers.indexOf("close price");
const iSL       = headers.indexOf("stop loss");
const iTP       = headers.indexOf("take profit");
const iSwap     = headers.indexOf("swap");
const iComm     = headers.indexOf("commission");
const iProfit   = headers.indexOf("profit");
const iReason   = headers.indexOf("reason");
if (iSym < 0 || iOpenTime < 0 || iProfit < 0) return [];
const trades = [];
for (let i = 1; i < lines.length; i++) {
const raw = lines[i];
if (!raw.trim()) continue;
const cells = raw.split(",").map(c => c.trim().replace(/^"|"$/g, ""));
try {
const sym        = iSym >= 0      ? cells[iSym]  : "";
const openRaw    = iOpenTime >= 0 ? cells[iOpenTime] : "";
const closeRaw   = iCloseTime >= 0? cells[iCloseTime]: "";
const vol        = iVol >= 0      ? parseFloat(cells[iVol])   || 0 : 0;
const sideRaw    = iSide >= 0     ? cells[iSide].toUpperCase() : "BUY";
const openPx     = iOpenPx >= 0   ? parseFloat(cells[iOpenPx])  || 0 : 0;
const closePx    = iClosePx >= 0  ? parseFloat(cells[iClosePx]) || 0 : 0;
const sl         = iSL >= 0       ? parseFloat(cells[iSL])   || 0 : 0;
const tp         = iTP >= 0       ? parseFloat(cells[iTP])   || 0 : 0;
const swap       = iSwap >= 0     ? parseFloat(cells[iSwap]) || 0 : 0;
const comm       = iComm >= 0     ? parseFloat(cells[iComm]) || 0 : 0;
const profit     = iProfit >= 0   ? parseFloat(cells[iProfit]) || 0 : 0;
const reason     = iReason >= 0   ? cells[iReason] : "";
if (!sym || !openRaw) continue;
const [datePart, timeFull] = openRaw.split("T");
const timePart = timeFull ? timeFull.split(".")[0] : "00:00:00";
const entryDate = datePart;
const h = parseInt(timePart.split(":")[0]);
const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : h < 20 ? "London Mid" : "Out of Session";
const side = sideRaw === "BUY" ? "Long" : "Short";
const netProfit = parseFloat((profit + swap + comm).toFixed(2));
const _mtRaw = [sym, entryDate, timePart, side, String(openPx), String(closePx), String(netProfit)].join("|");
let _mth = 5381; for (let _i = 0; _i < _mtRaw.length; _i++) _mth = (((_mth << 5) + _mth) ^ _mtRaw.charCodeAt(_i)) >>> 0;
trades.push({
id: "mt_" + _mth.toString(36) + "_" + _mtRaw.length,
symbol: sym, entryDate, entryTime: timePart,
side, entryPrice: openPx, exitPrice: closePx, stopLoss: sl, takeProfit: tp,
pnl: 0,
profit: netProfit,
status: "Closed", confluences: [], session,
model: "In Session", emotionBefore: "Calm & Focused",
emotionAfter: netProfit > 0 ? "Satisfied" : "Lesson Learned",
mistakes: "None",
grade: netProfit > 50 ? "A" : netProfit > 0 ? "B" : netProfit > -50 ? "C" : "D",
expectedRR: "1:2", actualRR: "",
notes: `Match Trader | Vol:${vol}${reason ? " | " + reason : ""}`,
riskAmount: 0, tags: ["Match Trader"], accountId: ""
});
} catch(e) {}
}
return trades;
}
function parseTradovateCSV(csvText) {
const lines = csvText.trim().split(/\r?\n/);
if (lines.length < 2) return [];
const headers = lines[0].split(",").map(h => h.trim().replace(/"/g,"").toLowerCase());
const trades = [];
const find = (keys) => { for (const k of keys) { const i = headers.indexOf(k); if (i >= 0) return i; } return -1; };
const findPartial = (keys) => { for (const k of keys) { const i = headers.findIndex(h => h.includes(k)); if (i >= 0) return i; } return -1; };
const iSym = find(["symbol","contract"]);
const iDate = find(["boughttimestamp","buy time","entry time","buy datetime","datetime","date"]);
const iExitDate = find(["soldtimestamp","sell time","exit time","sold datetime"]);
const iBuyFillId = find(["buyFillId","buyfillid"]);
const iSellFillId = find(["sellFillId","sellfillid"]);
const iEntry = find(["buyprice","buy price","entry price","fill price","price"]);
const iExit = find(["sellprice","sell price","exit price","close price"]);
const iProfit = find(["pnl","p&l","profit","realized pnl","net pnl","realized p&l"]);
const iQty = find(["qty","quantity","size","volume"]);
const parsePnl = (s) => {
if (!s) return 0;
const isNeg = s.includes("(");
const num = parseFloat(s.replace(/[^0-9.]/g,"")) || 0;
return isNeg ? -num : num;
};
const parseTradeDate = (s) => {
if (!s) return { date: "", time: "00:00:00" };
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
const cols = lines[i].split(",").map(c => c.trim().replace(/"/g,""));
if (cols.length < 3) continue;
try {
const profit = parsePnl(cols[iProfit]);
const rawDate = iDate >= 0 ? cols[iDate] : "";
const { date: entryDate, time: entryTime } = parseTradeDate(rawDate);
if (!entryDate) continue;
const symbol = iSym >= 0 ? cols[iSym].replace(/[^A-Z0-9]/gi,"") : "UNKNOWN";
if (!symbol) continue;
let side = "Long";
if (iBuyFillId >= 0 && iSellFillId >= 0) {
const buyId = parseInt(cols[iBuyFillId]) || 0;
const sellId = parseInt(cols[iSellFillId]) || 0;
side = buyId < sellId ? "Long" : "Short";
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
const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : "Out of Session";
const _fpRaw = [symbol, entryDate, entryTime, side, String(entryPrice), String(exitPrice), String(netProfit)].join("|");
let _h = 5381;
for (let _ci = 0; _ci < _fpRaw.length; _ci++) _h = (((_h << 5) + _h) ^ _fpRaw.charCodeAt(_ci)) >>> 0;
const _stableId = "tv_" + _h.toString(36) + "_" + _fpRaw.length;
trades.push({
id: _stableId,
symbol, entryDate, entryTime, side, entryPrice, exitPrice,
stopLoss: 0, takeProfit: 0,
pnl: 0,
profit: netProfit,
status: "Closed", confluences: [], session,
model: "In Session", emotionBefore: "Calm & Focused",
emotionAfter: netProfit > 0 ? "Satisfied" : "Lesson Learned",
mistakes: "None", grade: netProfit > 50 ? "A" : netProfit > 0 ? "B" : netProfit > -50 ? "C" : "D",
expectedRR: "1:2", actualRR: "", notes: `Tradovate Import | Comm: -$${commission.toFixed(2)} ($${commPerContract}/ct)`,
riskAmount: 0, tags: ["Tradovate"], accountId: ""
});
} catch(e) {}
}
return trades;
}
function parseProjectXCSV(csvText) {
const trades = parseTradovateCSV(csvText);
return trades.map(t => ({ ...t, notes: "Futures Import", tags: ["Futures"] }));
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
const isTradexy = headers.includes("symbol") && headers.includes("date") &&
(headers.includes("net p&l $") || headers.includes("net p&l") || headers.includes("grade")) &&
(headers.includes("emotion before") || headers.includes("session"));
if (!isTradexy) return [];
const fi = (names) => { for (const n of names) { const i = headers.indexOf(n); if (i >= 0) return i; } return -1; };
const iID      = fi(["id"]);
const iSym     = fi(["symbol"]);
const iDate    = fi(["date"]);
const iTime    = fi(["time"]);
const iSide    = fi(["side"]);
const iEntry   = fi(["entry"]);
const iExit    = fi(["exit"]);
const iPct     = fi(["p&l%","p&l %","pnl%"]);
const iProfit  = fi(["net p&l $","net p&l","profit $","profit"]);
const iSession = fi(["session"]);
const iModel   = fi(["model"]);
const iGrade   = fi(["grade"]);
const iExpRR   = fi(["expected rr"]);
const iActRR   = fi(["actual rr"]);
const iEmoBef  = fi(["emotion before"]);
const iEmoAft  = fi(["emotion after"]);
const iMistake = fi(["mistakes"]);
const iConfl   = fi(["confluences"]);
const iNotes   = fi(["notes"]);
const trades = [];
for (let i = 1; i < lines.length; i++) {
const cols = splitCSVLine(lines[i]);
if (cols.length < 3) continue;
const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
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
entryTime: g(iTime) || "00:00:00",
side: g(iSide) || "Long",
entryPrice: parseFloat(g(iEntry)) || 0,
exitPrice: parseFloat(g(iExit)) || 0,
pnl: parseFloat(g(iPct)) || 0,
profit,
session: g(iSession) || "New York",
model: g(iModel) || "Imported",
grade: g(iGrade) || "B",
expectedRR: g(iExpRR) || "1:2",
actualRR: g(iActRR) || "",
emotionBefore: g(iEmoBef) || "Neutral",
emotionAfter: g(iEmoAft) || "Neutral",
mistakes: g(iMistake) || "None",
confluences,
notes: g(iNotes) || "",
status: "Closed",
stopLoss: 0, takeProfit: 0, riskAmount: 0,
tags: ["Tradexy Import"],
accountId: "",
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
const isTradeObj = (t) => t && typeof t === "object" && ("symbol" in t || "entryDate" in t);
const trades = arr.filter(isTradeObj);
return trades.map((t, i) => ({
id: t.id || Date.now() + i + Math.random(),
symbol: t.symbol || "UNKNOWN",
entryDate: t.entryDate || "",
entryTime: t.entryTime || "00:00:00",
side: t.side || "Long",
entryPrice: t.entryPrice || 0,
exitPrice: t.exitPrice || 0,
pnl: t.pnl || 0,
profit: t.profit || 0,
session: t.session || "New York",
model: t.model || "Imported",
grade: t.grade || "B",
expectedRR: t.expectedRR || "1:2",
actualRR: t.actualRR || "",
emotionBefore: t.emotionBefore || "Neutral",
emotionAfter: t.emotionAfter || "Neutral",
mistakes: t.mistakes || "None",
confluences: Array.isArray(t.confluences) ? t.confluences : [],
notes: t.notes || "",
status: t.status || "Closed",
stopLoss: t.stopLoss || 0,
takeProfit: t.takeProfit || 0,
riskAmount: t.riskAmount || 0,
tags: Array.isArray(t.tags) ? [...t.tags.filter(x => x !== "Tradexy Import"), "JSON Import"] : ["JSON Import"],
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
const [mode, setMode] = useState("demo");
const [creds, setCreds] = useState({ label: "", capital: "", login: "", password: "", server: "", type: "live" });
const [showPw, setShowPw] = useState(false);
const [importMode, setImportMode] = useState(false);
const [importType, setImportType] = useState("mt5html");
const [importStatus, setImportStatus] = useState(null);
const firstDemoId = accounts.find(a => a.isDemo)?.id || "";
const [targetAccId, setTargetAccId] = useState("");
const fileRef = React.useRef(null);
const panelRef = React.useRef(null);
const isMobile = useMediaQuery("(max-width:768px)");
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
const mt5CapOk = mode !== "mt5" || (+creds.capital > 0);
const canAdd = mode === "demo" ? creds.label : (creds.login && creds.password && creds.server && mt5CapOk);
const inp = { width: "100%", border: "1.5px solid var(--border)", borderRadius: 9, padding: "9px 12px", fontSize: 13, outline: "none", background: "var(--s2)", color: "var(--text)", boxSizing: "border-box", fontFamily: "inherit" };
const handleAdd = () => {
if (!canAdd) return;
if (mode === "demo") {
onAdd({ label: creds.label || "Demo Account", capital: +creds.capital || 1e4, isDemo: true, login: "demo", password: "demo", server: "demo", type: "demo" });
} else {
if (!creds.capital || +creds.capital <= 0) { alert("Enter starting capital for MT5 account"); return; }
onAdd({ label: creds.label || `Account #${creds.login}`, capital: +creds.capital, isDemo: false, login: creds.login, password: creds.password, server: creds.server, type: creds.type });
}
setCreds({ label: "", capital: mode === "demo" ? "10000" : "", login: "", password: "", server: "", type: "live" });
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
if (importType === "mt5html") parsed = parseMT5Html(text);
else if (importType === "matchtrader") parsed = parseMatchTraderCSV(text);
else if (importType === "tradovate") parsed = parseTradovateCSV(text);
else if (importType === "futures") parsed = parseProjectXCSV(text);
else if (importType === "tradexy") parsed = parseJournalCSV(text);
else if (importType === "json") parsed = parseJournalJSON(text);
} catch(err) {
setImportStatus({ ok: false, msg: "Parse error: " + err.message });
return;
}
const isFullFidelity = importType === "tradexy" || importType === "json";
const valid = isFullFidelity
? parsed.filter(t => t && t.symbol && t.entryDate)
: parsed.filter(t => typeof t.profit === "number" && t.profit !== 0 && !isNaN(t.profit));
if (!valid.length) {
setImportStatus({ ok: false, msg: isFullFidelity
? "No trades found. Make sure you are uploading a Tradexy CSV or JSON export."
: "No valid trades found. Check file format and that trades have non-zero PnL." });
return;
}
const effectiveAccId = targetAccId || firstDemoId;
if (!effectiveAccId) {
setImportStatus({ ok: false, msg: "Please select an account to import trades into." });
return;
}
const targetAcc = accounts.find(a => a.id === effectiveAccId);
if (targetAcc && !targetAcc.isDemo) {
setImportStatus({ ok: false, msg: `⚠️ "${targetAcc.label}" is a live MT5 account — create a Demo account first, then import trades into it.` });
return;
}
const tagged = valid.map(t => ({ ...t, accountId: effectiveAccId, _importType: isFullFidelity ? "full" : "broker" }));
onImportToAccount(tagged, effectiveAccId);
const skipped = parsed.length - valid.length;
setImportStatus({ ok: true, msg: `✓ ${tagged.length} trades processed (duplicates merged, manual data preserved)${skipped > 0 ? ` · ${skipped} skipped (zero PnL)` : ""}.` });
if (fileRef.current) fileRef.current.value = "";
};
const liveCount = accounts.filter((a) => a.connected).length;
const hasAccounts = accounts.length > 0;
const demoAccounts = accounts.filter(a => a.isDemo);
return React.createElement("div", { ref: panelRef, "data-tour": "accounts-panel", style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, marginBottom: 16, boxShadow: "var(--sh1)" } },
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", cursor: hasAccounts ? "pointer" : "default" }, onClick: hasAccounts ? () => setExpanded((v) => !v) : undefined },
React.createElement("div", { style: { width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,var(--accF),var(--s3))", border: "1.5px solid color-mix(in srgb, var(--acc) 25%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 } }, "\u21CC"),
React.createElement("div", { style: { flex: 1, minWidth: 0 } },
React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 7 } },
"Trading Accounts",
hasAccounts && React.createElement("span", { className: "acct-badge", style: { background: "var(--accF)", color: "var(--accD)", border: "1px solid color-mix(in srgb, var(--acc) 30%, transparent)", borderRadius: 20, padding: "1px 8px", fontSize: 10, fontWeight: 700 } }, accounts.length),
liveCount > 0 && React.createElement("span", { className: "acct-badge", style: { background: "var(--gBg)", color: "var(--green)", border: "1px solid var(--gBdr)", borderRadius: 20, padding: "1px 8px", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 } }, React.createElement("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" } }), liveCount, " live")
),
!hasAccounts && React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, "No accounts yet")
),
!expanded && hasAccounts && React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center", flexWrap: "nowrap", overflow: "hidden", maxWidth: 200 } },
accounts.slice(0, 3).map((acc, i) => React.createElement("span", { key: acc.id, className: "acct-badge", style: { background: "var(--s2)", border: `1px solid ${ACC_COLS[i % ACC_COLS.length]}50`, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 600, color: ACC_COLS[i % ACC_COLS.length], whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 80 } }, acc.label)),
accounts.length > 3 && React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 600 } }, "+", accounts.length - 3)
),
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 }, onClick: (e) => e.stopPropagation() },
React.createElement("button", {
onClick: () => { setAdding((a) => !a); setImportMode(false); setExpanded(true); },
style: { background: adding ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: adding ? "var(--t2)" : "#fff", border: `1px solid ${adding ? "var(--border)" : "transparent"}`, borderRadius: 8, padding: "5px 12px", fontWeight: 700, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: adding ? "none" : "0 2px 8px color-mix(in srgb, var(--acc) 35%, transparent)", transition: "all .15s" }
}, adding ? "\u2715 Close" : "+ Add"),
React.createElement("button", {
onClick: (e) => { e.stopPropagation(); setImportMode((v) => !v); setAdding(false); setExpanded(true); setImportStatus(null); },
style: { background: importMode ? "var(--bBg)" : "var(--s2)", color: importMode ? "var(--blue)" : "var(--t2)", border: `1px solid ${importMode ? "var(--bBdr)" : "var(--border)"}`, borderRadius: 8, padding: "5px 11px", fontWeight: 700, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, transition: "all .15s" },
title: "Import Trades from MT5 / Tradovate / Futures"
}, "\u2197 Import"),
hasAccounts && React.createElement("button", { onClick: (e) => { e.stopPropagation(); setExpanded((v) => !v); }, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t3)", transition: "all .15s", flexShrink: 0 } },
React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" } },
React.createElement("polyline", { points: "6 9 12 15 18 9" })
)
)
)
),
expanded && hasAccounts && React.createElement("div", { style: { borderTop: "1px solid var(--border)", padding: "10px 16px", display: "flex", flexDirection: "column", gap: 8 } },
accounts.map((acc, i) => {
const col = ACC_COLS[i % ACC_COLS.length];
const isSyncing = syncingId === acc.id;
const tb = calcTrueBalance(acc);
const adjs = acc.balanceAdjustments || [];
return React.createElement("div", { key: acc.id, style: { background: "var(--s2)", border: `1px solid ${acc.connected ? "var(--gBdr)" : "var(--border)"}`, borderRadius: 10 } },
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 13px", flexWrap: "wrap" } },
React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: col, flexShrink: 0, boxShadow: `0 0 0 2px ${col}25` } }),
React.createElement("div", { style: { flex: 1, minWidth: 0 } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } }, acc.label, acc.isDemo && React.createElement(Chip, { color: "purple", size: "sm" }, "DEMO"), acc.connected && !acc.isDemo && React.createElement(Chip, { color: "truegreen", size: "sm" }, "\u25CF LIVE")),
React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } },
acc.isDemo
? `Capital: ${fmtUSD(acc.capital || 1e4, false)} · ${acc.trades ? acc.trades.length : 0} trades`
: `#${acc.login} · ${acc.server}`,
acc.lastSync && ` · synced ${acc.lastSync}`,
adjs.length > 0 && React.createElement("span", { style: { color: "var(--orange)", fontWeight: 700, marginLeft: 4 } }, `· ${adjs.length} adjustment${adjs.length > 1 ? 's' : ''}`)
)
),
!acc.isDemo && React.createElement("button", { onClick: () => onSync(acc), disabled: isSyncing, style: { background: isSyncing ? "var(--s3)" : col, color: "#fff", border: "none", borderRadius: 7, padding: "5px 11px", fontWeight: 700, fontSize: 10, cursor: isSyncing ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: 4, opacity: isSyncing ? 0.65 : 1 } },
React.createElement("span", { style: { display: "inline-block", animation: isSyncing ? "spin 1s linear infinite" : "none" } }, "\u27F3"),
isSyncing ? "Syncing" : "Sync"
),
React.createElement("button", { onClick: () => onRemove(acc.id), style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "4px 8px", borderRadius: 6 }, onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; }, onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t3)"; } }, "\u2715")
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
importMode && React.createElement("div", { style: { padding: "16px 18px", borderTop: "1px solid var(--border)", background: "var(--s2)", borderBottomLeftRadius: 14, borderBottomRightRadius: 14, animation: "fadeUp .2s ease" } },
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 } },
React.createElement("div", { style: { width: 28, height: 28, borderRadius: 8, background: "var(--bBg)", border: "1px solid var(--bBdr)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 } }, "\u2197"),
React.createElement("div", null,
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)" } }, "Import Trade History"),
React.createElement("div", { style: { fontSize: 10, color: "var(--t3)" } }, "MT5 Report \u00B7 Tradovate CSV \u00B7 Futures / Project X CSV")
)
),
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Source Format"),
React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" } },
[
{ id: "mt5html", label: "\uD83D\uDCE1 MT5 HTML Report", desc: ".html from MetaTrader 5 Account History" },
{ id: "matchtrader", label: "\uD83D\uDCCA Match Trader CSV", desc: ".csv Closed Positions from Match Trader" },
{ id: "tradovate", label: "\uD83D\uDCCA Tradovate CSV", desc: ".csv from Tradovate Trade History" },
{ id: "futures", label: "\u26A1 Futures / Project X", desc: ".csv from any futures platform" },
{ id: "tradexy", label: "\uD83D\uDDD2 Tradexy CSV", desc: ".csv exported from this journal" },
{ id: "json", label: "\uD83D\uDCBE JSON Backup", desc: ".json full backup exported from this journal" },
].map(opt =>
React.createElement("button", { key: opt.id, onClick: () => { setImportType(opt.id); setImportStatus(null); },
title: opt.desc,
style: { padding: "6px 12px", borderRadius: 9, border: `1.5px solid ${importType === opt.id ? "var(--blue)" : "var(--border)"}`, background: importType === opt.id ? "var(--bBg)" : "var(--surface)", color: importType === opt.id ? "var(--blue)" : "var(--t2)", fontWeight: 700, fontSize: 11, cursor: "pointer", transition: "all .15s" } },
opt.label
)
)
),
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Import Into Account"),
hasAccounts
? React.createElement("div", { style: { marginBottom: 14 } },
accounts.some(a => !a.isDemo) && React.createElement("div", { style: { background: "var(--oBg)", border: "1px solid var(--oBdr)", borderRadius: 9, padding: "9px 12px", marginBottom: 10, fontSize: 11, color: "var(--orange)", fontWeight: 600, display: "flex", gap: 8, alignItems: "flex-start" } },
React.createElement("span", { style: { fontSize: 14 } }, "\u26A0\uFE0F"),
React.createElement("div", null, "Live MT5 accounts cannot receive imported trades. ",
React.createElement("b", null, "Please select a Demo account"), " or create a new Demo account first.")
),
React.createElement("select", {
value: targetAccId || firstDemoId,
onChange: (e) => setTargetAccId(e.target.value),
style: { ...inp, marginBottom: 0 }
},
React.createElement("option", { value: "", disabled: true }, "— Select an account —"),
...accounts.map(a =>
React.createElement("option", { key: a.id, value: a.id, disabled: !a.isDemo },
`${a.label}${a.isDemo ? " (Demo)" : " ⛔ Live — cannot import"}`)
)
)
)
: React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 9, padding: "9px 12px", marginBottom: 14, fontSize: 11, color: "var(--red)", fontWeight: 600, display: "flex", gap: 8, alignItems: "flex-start" } },
React.createElement("span", { style: { fontSize: 14 } }, "\u26A0\uFE0F"),
React.createElement("div", null, "You must add an account before importing. ", React.createElement("b", null, "Click \u201C+ Add\u201D above"), " to create a Demo account first, then come back to import.")
),
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } },
importType === "mt5html" ? "Upload MT5 Trade History HTML" : importType === "matchtrader" ? "Upload Match Trader CSV" : importType === "tradovate" ? "Upload Tradovate CSV" : importType === "tradexy" ? "Upload Tradexy Journal CSV" : importType === "json" ? "Upload Tradexy JSON Backup" : "Upload Futures CSV"
),
React.createElement("div", { style: { border: "2px dashed var(--border2)", borderRadius: 10, padding: "16px", textAlign: "center", background: "var(--surface)", marginBottom: 12, cursor: "pointer", transition: "border-color .15s" },
onClick: () => fileRef.current && fileRef.current.click(),
onDragOver: (e) => { e.preventDefault(); e.currentTarget.style.borderColor = "var(--blue)"; },
onDragLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; },
onDrop: (e) => {
e.preventDefault(); e.currentTarget.style.borderColor = "var(--border2)";
const f = e.dataTransfer.files[0];
if (f && fileRef.current) { const dt = new DataTransfer(); dt.items.add(f); fileRef.current.files = dt.files; handleImportFile({ target: fileRef.current }); }
}
},
React.createElement("div", { style: { fontSize: 20, marginBottom: 6 } }, importType === "mt5html" ? "\uD83D\uDCC4" : importType === "json" ? "\uD83D\uDCBE" : importType === "tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCCA"),
React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)" } }, "Click or drag & drop file here"),
React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } },
importType === "mt5html" ? "MetaTrader 5 → Account History → Save as HTML" :
importType === "matchtrader" ? "Match Trader → Closed Positions tab → Export CSV" :
importType === "tradovate" ? "Tradovate → Performance → Trade History → Export CSV" :
importType === "tradexy" ? "Trade Log → ↓ CSV button — re-import your own journal export" :
importType === "json" ? "Trade Log → ↓ JSON button — full backup with all fields preserved" :
"Project X / NinjaTrader → Export Trades as CSV"
)
),
React.createElement("input", { ref: fileRef, type: "file", accept: importType === "mt5html" ? ".html,.htm" : importType === "json" ? ".json" : ".csv", style: { display: "none" }, onChange: handleImportFile }),
React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", marginBottom: 12, fontSize: 10, color: "var(--t3)", lineHeight: 1.7 } },
React.createElement("b", { style: { color: "var(--text)", display: "block", marginBottom: 4 } }, "\uD83D\uDCA1 Rules"),
React.createElement("div", null, "\u2022 Only trades with non-zero PnL are imported (except Tradexy CSV & JSON — all trades kept)"),
React.createElement("div", null, "\u2022 Live MT5 accounts are protected — import into Demo only"),
importType === "mt5html" && React.createElement("div", null, "\u2022 MT5: Go to History tab \u2192 right-click \u2192 Save as HTML Report"),
importType === "matchtrader" && React.createElement("div", null, "\u2022 Match Trader: Closed Positions tab \u2192 Export CSV (includes ID, Symbol, Volume, Side, prices, Commission, Profit)"),
importType === "tradexy" && React.createElement("div", null, "\u2022 Tradexy CSV: exported from Trade Log using the \u2193 CSV button"),
importType === "json" && React.createElement("div", null, "\u2022 JSON Backup: exported from Trade Log using the \u2193 JSON button — all fields fully restored")
),
importStatus && React.createElement("div", { style: { background: importStatus.ok ? "var(--gBg)" : "var(--rBg)", border: `1px solid ${importStatus.ok ? "var(--gBdr)" : "var(--rBdr)"}`, borderRadius: 9, padding: "10px 14px", fontSize: 12, fontWeight: 600, color: importStatus.ok ? "var(--green)" : "var(--red)", animation: "fadeUp .2s ease" } },
importStatus.msg
)
),
adding && React.createElement("div", { style: { padding: "16px", borderTop: "1px solid var(--border)", background: "var(--s2)", borderBottomLeftRadius: 14, borderBottomRightRadius: 14 } },
React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } },
React.createElement("button", { onClick: () => setMode("demo"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "demo" ? "var(--purple)" : "var(--border)"}`, background: mode === "demo" ? "var(--pBg)" : "var(--surface)", color: mode === "demo" ? "var(--purple)" : "var(--t2)", fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "\uD83C\uDFAE Demo Account"),
React.createElement("button", { onClick: () => setMode("mt5"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "mt5" ? "var(--acc)" : "var(--border)"}`, background: mode === "mt5" ? "var(--accF)" : "var(--surface)", color: mode === "mt5" ? "var(--accD)" : "var(--t2)", fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "\uD83D\uDCE1 MT5 Account")
),
React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 12 } },
React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Account Label"), React.createElement("input", { placeholder: "e.g. Prop Firm — Phase 1", value: creds.label, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { label: e.target.value })), style: inp })),
React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Starting Capital ($)"), React.createElement("input", { type: "number", placeholder: mode === "mt5" ? "Required — e.g. 10000" : "e.g. 10000", value: creds.capital, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { capital: e.target.value })), style: mode === "mt5" ? {...inp, borderColor: +creds.capital > 0 ? "var(--border)" : "color-mix(in srgb, var(--acc) 60%, transparent)"} : inp })),
mode === "mt5" && React.createElement(React.Fragment, null,
React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Login ID"), React.createElement("input", { placeholder: "12345678", value: creds.login, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { login: e.target.value })), style: inp })),
React.createElement("div", { style: { position: "relative" } }, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Investor Password"), React.createElement("input", { type: showPw ? "text" : "password", placeholder: "Read-only password", value: creds.password, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { password: e.target.value })), style: { ...inp, paddingRight: 36 } }), React.createElement("button", { type: "button", onClick: () => setShowPw((s) => !s), style: { position: "absolute", right: 10, top: 30, background: "none", border: "none", cursor: "pointer", color: "var(--t3)", fontSize: 13 } }, showPw ? "\u25CF" : "\u25CB")),
React.createElement("div", { style: { gridColumn: "1/-1" } }, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Server"), React.createElement("input", { placeholder: "Broker-Server", value: creds.server, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { server: e.target.value })), style: inp }))
)
),
React.createElement("button", { onClick: handleAdd, disabled: !canAdd, style: { background: canAdd ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--s3)", color: canAdd ? "#fff" : "var(--t3)", border: "none", borderRadius: 10, padding: "10px 22px", fontWeight: 600, fontSize: 12, cursor: canAdd ? "pointer" : "not-allowed", boxShadow: canAdd ? "0 3px 12px color-mix(in srgb, var(--acc) 40%, transparent)" : "none" } }, mode === "demo" ? "\u2713 Create Demo Account" : "\u27F3 Add & Sync MT5"),
mode === "mt5" && React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", marginLeft: 12 } }, "Use investor (read-only) password")
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
{ id: "all", label: "All", fn: () => apply("all", null, null) },
{ id: "thisweek", label: "This Week", fn: () => {
const mon = new Date(today);
mon.setDate(today.getDate() - (today.getDay() + 6) % 7);
const sun = new Date(mon);
sun.setDate(mon.getDate() + 6);
apply("thisweek", mon.toISOString().slice(0, 10), sun.toISOString().slice(0, 10));
} },
{ id: "thismonth", label: "Month", fn: () => {
const y = today.getFullYear(), m = today.getMonth();
const last = new Date(y, m + 1, 0);
apply("thismonth", `${y}-${String(m + 1).padStart(2, "0")}-01`, last.toISOString().slice(0, 10));
} },
{ id: "30d", label: "30 Days", fn: () => {
const from = new Date(today);
from.setDate(from.getDate() - 30);
apply("30d", from.toISOString().slice(0, 10), today.toISOString().slice(0, 10));
} }
];
const filtered = dateRange.from || dateRange.to ? trades.filter((t) => (!dateRange.from || t.entryDate >= dateRange.from) && (!dateRange.to || t.entryDate <= dateRange.to)) : trades;
const totalP = filtered.reduce((s, t) => s + (t.profit || 0), 0);
const totalPnl = calcPnL(totalP, cap);
return  React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 13, padding: "11px 16px", marginBottom: 16, display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } }, presets.map((p) =>  React.createElement("button", { key: p.id, onClick: p.fn, style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${mode === p.id ? "var(--acc)" : "var(--border)"}`, background: mode === p.id ? "var(--accF)" : "var(--surface)", color: mode === p.id ? "var(--accD)" : "var(--t2)", fontWeight: mode === p.id ? 700 : 500, fontSize: 12, cursor: "pointer" } }, p.label)),  React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" } },  React.createElement(CustomDatePicker, { value: dateRange.from || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { from: v || null })) }),  React.createElement("span", { style: { color: "var(--t3)", fontSize: 14 } }, "\u2192"),  React.createElement(CustomDatePicker, { value: dateRange.to || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { to: v || null })) }),  React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: totalP >= 0 ? "var(--accD)" : "var(--t2)" } }, totalP !== 0 ? (totalP >= 0 ? "+$" : "-$") + Math.abs(totalP).toFixed(0) + " \xB7 " : "", fmtPct(totalPnl, 2), " \xB7 ", filtered.length, " trades")));
}
function MiniCalendarWidget({ trades, ic, capital: propCapital }) {
const capital = (propCapital && propCapital > 0) ? propCapital : (ic && ic > 0 ? ic : 5000);
const now = new Date();
const [calYear, setCalYear] = useState(now.getFullYear());
const [calMonth, setCalMonth] = useState(now.getMonth());
const [showUSD, setShowUSD] = useState(true);
const [dayPopup, setDayPopup] = useState(null);
const MN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
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
const dk = (d) => calYear + "-" + String(calMonth + 1).padStart(2,"0") + "-" + String(d).padStart(2,"0");
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
const btnStyle = { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, width: 24, height: 24, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)", fontSize: 12, padding: 0 };
return React.createElement("div", { style: { marginTop: 16, borderTop: "1px solid var(--border)", paddingTop: 16 } },
React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, gap: 8 } },
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
React.createElement("button", { style: btnStyle, onClick: prevMonth }, "‹"),
React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", letterSpacing: "-.2px", minWidth: 90, textAlign: "center" } }, MN[calMonth], " ", calYear),
React.createElement("button", { style: { ...btnStyle, opacity: isCurrentMonth ? 0.35 : 1 }, onClick: isCurrentMonth ? null : nextMonth, disabled: isCurrentMonth }, "›"),
mCount > 0 && React.createElement("span", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 20, padding: "1px 8px", fontSize: 9.5, fontWeight: 700, color: "var(--t3)", marginLeft: 4 } }, mCount, " trades")
),
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
React.createElement("div", { style: { display: "flex", background: "var(--s3)", borderRadius: 8, padding: 2, gap: 2 } },
React.createElement("button", { onClick: () => setShowUSD(false), style: { padding: "2px 9px", borderRadius: 6, border: "none", background: !showUSD ? "var(--surface)" : "transparent", color: !showUSD ? "var(--accD)" : "var(--t3)", fontWeight: !showUSD ? 700 : 500, fontSize: 10.5, cursor: "pointer", boxShadow: !showUSD ? "var(--sh1)" : "none", transition: "all .15s" } }, "%"),
React.createElement("button", { onClick: () => setShowUSD(true), style: { padding: "2px 9px", borderRadius: 6, border: "none", background: showUSD ? "var(--surface)" : "transparent", color: showUSD ? "var(--accD)" : "var(--t3)", fontWeight: showUSD ? 700 : 500, fontSize: 10.5, cursor: "pointer", boxShadow: showUSD ? "var(--sh1)" : "none", transition: "all .15s" } }, "$")
),
React.createElement("div", { style: { background: mProfit >= 0 ? "var(--accF)" : "var(--s3)", border: `1px solid ${mProfit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border)"}`, borderRadius: 8, padding: "3px 10px" } },
React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: mProfit >= 0 ? "var(--accD)" : "var(--t2)" } },
showUSD
? (mProfit >= 0 ? "+$" : "-$") + Math.abs(mProfit).toFixed(0)
: (mPnl >= 0 ? "+" : "") + mPnl.toFixed(1) + "%"
)
)
)
),
React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 52px", gap: 3, marginBottom: 3 } },
DOW_MINI.map((d) => React.createElement("div", { key: d, style: { textAlign: "center", fontSize: 8.5, color: "var(--t3)", fontWeight: 600, padding: "3px 0" } }, d)),
React.createElement("div", { style: { textAlign: "center", fontSize: 8.5, color: "var(--t3)", fontWeight: 600, padding: "3px 0" } }, "WEEK")
),
React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } },
weeks.map((week, wi) =>
React.createElement("div", { key: wi, style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 52px", gap: 3 } },
[...Array(7)].map((_, ci) => {
const d = week[ci];
if (!d) return React.createElement("div", { key: "e" + ci, style: { borderRadius: 7, minHeight: 44 } });
const dateKey = dk(d);
const data = byDate[dateKey];
const p = (data && data.profit) || 0;
const pct = (data && data.pnl) || 0;
const has = !!data;
const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
const bg = !has ? "var(--surface)" : p >= 0
? "color-mix(in srgb, var(--acc) " + Math.round((0.07 + intensity * 0.22) * 100) + "%, var(--surface))"
: "rgba(148,163,184," + (0.1 + intensity * 0.2) + ")";
const bdr = !has ? "var(--border)" : p >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)";
const isToday = dateKey === todayStr;
const displayVal = has ? (showUSD
? (p >= 0 ? "+$" : "-$") + Math.abs(p).toFixed(0)
: (p >= 0 ? "+" : "") + pct.toFixed(1) + "%"
) : null;
return React.createElement("div", {
key: dateKey,
className: "cal-cell",
style: { background: bg, border: "1.5px solid " + (isToday ? "var(--indigo)" : bdr), borderRadius: 7, padding: "5px 5px 4px", minHeight: 44, cursor: has ? "pointer" : "default", transition: "transform .12s,box-shadow .12s", boxShadow: isToday ? "0 0 0 1px var(--indigo)" : "none", position: "relative" },
onClick: has ? (e) => { e.currentTarget.blur(); setDayPopup({ dateKey, data }); } : null, tabIndex: -1,
onMouseEnter: (e) => { if (has) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--sh2)"; } },
onMouseLeave: (e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = isToday ? "0 0 0 1px var(--indigo)" : "none"; }
},
React.createElement("div", { style: { fontSize: 9, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : "var(--t3)", marginBottom: 2 } }, d),
has && React.createElement(React.Fragment, null,
React.createElement("div", { style: { fontSize: 9.5, fontWeight: 700, color: p >= 0 ? "var(--accD)" : "var(--t2)", lineHeight: 1.1, letterSpacing: "-.3px" } }, displayVal),
React.createElement("div", { style: { fontSize: 8, color: "var(--t3)", marginTop: 2, fontWeight: 600 } }, data.count, data.count === 1 ? " trade" : " trades")
)
);
}),
React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "rgba(148,163,184,.15)" : "var(--s2)", border: "1.5px solid " + (weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)" : "var(--border)"), borderRadius: 7, padding: "5px 4px", minHeight: 44, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 } },
weekStats[wi].count > 0 && React.createElement(React.Fragment, null,
React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: weekStats[wi].profit >= 0 ? "var(--accD)" : "var(--t2)", textAlign: "center", letterSpacing: "-.2px" } },
showUSD
? (weekStats[wi].profit >= 0 ? "+$" : "-$") + Math.abs(weekStats[wi].profit).toFixed(0)
: (weekStats[wi].pnl >= 0 ? "+" : "") + weekStats[wi].pnl.toFixed(1) + "%"
),
React.createElement("div", { style: { fontSize: 7.5, color: "var(--t3)", textAlign: "center" } }, weekStats[wi].count, weekStats[wi].count === 1 ? " trade" : " trades")
)
)
)
)
),
dayPopup && React.createElement("div", {
style: { position: "fixed", inset: 0, zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.6)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" },
onClick: () => setDayPopup(null)
},
React.createElement("div", {
style: { background: "var(--surface)", borderRadius: 18, border: "1px solid var(--border)", padding: "20px 22px", minWidth: 300, maxWidth: 400, width: "92vw", boxShadow: "0 30px 80px rgba(0,0,0,.35)", animation: "scaleIn .2s ease" },
onClick: (e) => e.stopPropagation()
},
React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
React.createElement("div", null,
React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, new Date(dayPopup.dateKey + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })),
React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, dayPopup.data.count, " trade", dayPopup.data.count !== 1 ? "s" : "")
),
React.createElement("div", { style: { textAlign: "right" } },
React.createElement("div", { style: { fontSize: 18, fontWeight: 800, color: dayPopup.data.profit >= 0 ? "var(--accD)" : "var(--t2)", letterSpacing: "-1px" } },
(dayPopup.data.profit >= 0 ? "+$" : "-$") + Math.abs(dayPopup.data.profit).toFixed(2)
),
React.createElement("div", { style: { fontSize: 11, color: dayPopup.data.pnl >= 0 ? "var(--accD)" : "var(--t2)", fontWeight: 700 } },
(dayPopup.data.pnl >= 0 ? "+" : "") + dayPopup.data.pnl.toFixed(2) + "%"
)
)
),
React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
dayPopup.data.trades.map((t, i) =>
React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 10, background: "var(--s2)", borderRadius: 9, padding: "8px 12px", border: "1px solid var(--border)" } },
React.createElement("div", { style: { flex: 1 } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)" } }, t.symbol),
React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, t.side, " · ", t.session || "")
),
React.createElement("div", { style: { textAlign: "right" } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--t2)" } },
(t.profit >= 0 ? "+$" : "-$") + Math.abs(t.profit || 0).toFixed(2)
),
React.createElement("div", { style: { fontSize: 10, color: calcPnL(t.profit, capital) >= 0 ? "var(--accD)" : "var(--t2)", fontWeight: 600 } },
(calcPnL(t.profit, capital) >= 0 ? "+" : "") + calcPnL(t.profit, capital).toFixed(2) + "%"
)
)
)
)
),
React.createElement("button", { onClick: () => setDayPopup(null), style: { marginTop: 14, width: "100%", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "8px", fontSize: 12, fontWeight: 600, color: "var(--t2)", cursor: "pointer" } }, "Close")
)
)
);
}
function FloatingCalc({ capital, open, setOpen }) {
const E = React.createElement;
const defaultCap = (capital && capital > 0) ? capital : 5000;
const [accountSize, setAccountSize] = React.useState(String(defaultCap));
const [editingCap, setEditingCap] = React.useState(false);
const [slMode, setSlMode] = React.useState("pips");
const [riskMode, setRiskMode] = React.useState("pct");
const [riskPct, setRiskPct] = React.useState("1");
const [riskAmt, setRiskAmt] = React.useState("");
const [slPips, setSlPips] = React.useState("");
const [entryPrice, setEntryPrice] = React.useState("");
const [slPrice, setSlPrice] = React.useState("");
const [pipValueMode, setPipValueMode] = React.useState("100");
const [pipValue, setPipValue] = React.useState("100");
React.useEffect(() => {
if (capital && capital > 0) setAccountSize(String(capital));
}, [capital]);
const PIP_PRESETS = [
{label:"Gold XAUUSD",            val:"100",  pipSize:0.1},
{label:"Forex Majors (EUR/USD)", val:"10",   pipSize:0.0001},
{label:"GBP/USD, AUD/USD",       val:"10",   pipSize:0.0001},
{label:"JPY Pairs (USD/JPY)",    val:"1000", pipSize:0.01},
{label:"US30 / NAS100",          val:"1",    pipSize:1},
{label:"Crypto (BTC/USD)",       val:"0.1",  pipSize:1},
{label:"Custom",                 val:"custom",pipSize:null},
];
const selectedPreset = PIP_PRESETS.find(p=>p.val===pipValueMode);
const pipSizeForCalc = selectedPreset?.pipSize || 0.0001;
const cap = parseFloat(accountSize) || 5000;
const riskDollars = riskMode === "pct"
? (parseFloat(riskPct)||0) / 100 * cap
: (parseFloat(riskAmt)||0);
let slPipsCalc = 0;
if (slMode === "pips") {
slPipsCalc = parseFloat(slPips) || 0;
} else {
const ep = parseFloat(entryPrice) || 0;
const sp = parseFloat(slPrice) || 0;
if (ep && sp) {
const priceDiff = Math.abs(ep - sp);
slPipsCalc = priceDiff / pipSizeForCalc;
}
}
const pipVal = pipValueMode === "custom" ? (parseFloat(pipValue) || 10) : parseFloat(pipValueMode) || 10;
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
const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
window.addEventListener("mousemove", onMove);
window.addEventListener("mouseup", onUp);
e.preventDefault();
}, []);
const inp = {border:"1.5px solid var(--border2)",borderRadius:8,padding:"8px 10px",fontSize:12,
outline:"none",background:"var(--s2)",color:"var(--text)",fontFamily:"inherit",
width:"100%",boxSizing:"border-box",transition:"border-color .15s"};
const segBtn = (active,onClick,txt) => E("button",{onClick,style:{
flex:1,padding:"5px 0",borderRadius:6,border:"none",fontSize:11,fontWeight:active?700:500,
background:active?"var(--surface)":"transparent",color:active?"var(--accD)":"var(--t3)",
boxShadow:active?"var(--sh1)":"none",cursor:"pointer",transition:"all .12s"}}, txt);
if (!open) return null;
const basePopup = {
width:360, maxWidth:"calc(100vw - 24px)",
background:"var(--surface)", border:"1.5px solid var(--border2)",
borderRadius:18, boxShadow:"0 20px 60px rgba(0,0,0,.28),0 4px 16px rgba(0,0,0,.14)",
maxHeight:"calc(100vh - 60px)", overflowY:"auto",
opacity: calcVisible ? 1 : 0,
transition: "opacity .18s ease, transform .18s cubic-bezier(.22,1,.36,1)",
};
const popupStyle = pos
? { ...basePopup, position:"fixed", left:pos.x, top:pos.y, zIndex:9100,
transform: calcVisible ? "scale(1)" : "scale(0.94)" }
: { ...basePopup, position:"fixed", top:"50%", left:"50%", zIndex:9100,
transform: calcVisible ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(0.94)" };
return E("div", null,
E("div", {
onClick:()=>{ setOpen(false); setPos(null); },
style:{position:"fixed",inset:0,zIndex:9090,background:"rgba(0,0,0,.25)",backdropFilter:"blur(3px)"}
}),
E("div", { ref:dragRef, style:popupStyle },
E("div",{
onMouseDown:startDrag,
style:{padding:"14px 16px 10px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10,
cursor:"grab",userSelect:"none",borderRadius:"18px 18px 0 0"}
},
E("span",{style:{fontSize:18}},"🧮"),
E("div",{style:{flex:1}},
E("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)",letterSpacing:"-.02em"}}, "Lot Size Calculator"),
E("div",{style:{fontSize:10,color:"var(--t3)"}}, "Drag to move · Know your size before you enter")
),
E("button",{onClick:()=>{ setOpen(false); setPos(null); },
style:{background:"none",border:"none",color:"var(--t3)",cursor:"pointer",fontSize:18,padding:"2px 4px",lineHeight:1}}, "×")
),
E("div",{style:{padding:"12px 14px",display:"flex",flexDirection:"column",gap:10}},
E("div",{style:{background:"var(--s2)",borderRadius:10,padding:"8px 12px",display:"flex",alignItems:"center",gap:8}},
E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",flex:1}}, "Account"),
editingCap
? E("input",{type:"number",value:accountSize,autoFocus:true,
onChange:e=>setAccountSize(e.target.value),
onBlur:()=>setEditingCap(false),
onKeyDown:e=>{if(e.key==="Enter"||e.key==="Escape")setEditingCap(false);},
style:{...inp,width:110,textAlign:"right",padding:"4px 8px",fontSize:13,fontWeight:700}})
: E("div",{style:{display:"flex",alignItems:"center",gap:6},onClick:()=>setEditingCap(true)},
E("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)",cursor:"pointer"}}, "$"+parseFloat(accountSize||5000).toLocaleString()),
E("span",{style:{fontSize:10,color:"var(--acc)",cursor:"pointer",fontWeight:700}}, "✏️")
)
),
E("div",null,
E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Instrument"),
E("select",{value:pipValueMode,onChange:e=>{
setPipValueMode(e.target.value);
if(e.target.value!=="custom") setPipValue(e.target.value);
},style:{...inp,cursor:"pointer"}},
PIP_PRESETS.map(p=>E("option",{key:p.val,value:p.val},p.label))
),
pipValueMode==="custom" && E("input",{type:"number",step:"0.01",placeholder:"$ per pip per std lot",
value:pipValue==="custom"?"":pipValue,onChange:e=>setPipValue(e.target.value),
style:{...inp,marginTop:5}})
),
E("div",null,
E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Risk"),
E("div",{style:{display:"flex",background:"var(--s3)",borderRadius:8,padding:2,gap:2,marginBottom:6}},
segBtn(riskMode==="pct",()=>setRiskMode("pct"),"% Account"),
segBtn(riskMode==="fixed",()=>setRiskMode("fixed"),"Fixed $")
),
riskMode==="pct"
? E("div",{style:{display:"flex",alignItems:"center",gap:6}},
E("input",{type:"number",step:"0.1",min:"0.1",max:"10",placeholder:"1",
value:riskPct,onChange:e=>setRiskPct(e.target.value),style:{...inp,flex:1}}),
E("div",{style:{fontSize:11,color:"var(--t3)",whiteSpace:"nowrap"}},
riskPct ? "= $"+(parseFloat(riskPct)/100*cap).toFixed(0) : "")
)
: E("input",{type:"number",step:"1",placeholder:"e.g. 50",
value:riskAmt,onChange:e=>setRiskAmt(e.target.value),style:inp})
),
E("div",null,
E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Stop Loss"),
E("div",{style:{display:"flex",background:"var(--s3)",borderRadius:8,padding:2,gap:2,marginBottom:6}},
segBtn(slMode==="pips",()=>setSlMode("pips"),"Pips"),
segBtn(slMode==="price",()=>setSlMode("price"),"Price")
),
slMode==="pips"
? E("input",{type:"number",step:"1",min:"1",placeholder:"e.g. 240",
value:slPips,onChange:e=>setSlPips(e.target.value),style:inp})
: E("div",{style:{display:"flex",flexDirection:"column",gap:5}},
E("input",{type:"number",step:"0.00001",placeholder:"Entry price",
value:entryPrice,onChange:e=>setEntryPrice(e.target.value),style:inp}),
E("input",{type:"number",step:"0.00001",placeholder:"SL price",
value:slPrice,onChange:e=>setSlPrice(e.target.value),style:inp}),
entryPrice&&slPrice&&E("div",{style:{fontSize:10,color:"var(--t3)"}},
"= "+(Math.abs((parseFloat(entryPrice)||0)-(parseFloat(slPrice)||0))/pipSizeForCalc).toFixed(1)+" pips  (",
selectedPreset?.label||"instrument",")")
)
),
lotSize > 0
? E("div",{style:{background:"linear-gradient(135deg,var(--accF),var(--s2))",
border:"1.5px solid color-mix(in srgb,var(--acc) 35%,transparent)",
borderRadius:12,padding:"12px 14px"}},
E("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8}},
E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em"}}, "Mini Lots"),
E("div",{style:{fontSize:32,fontWeight:800,color:"var(--accD)",letterSpacing:"-2px",lineHeight:1}},
miniLots.toFixed(2)
)
),
E("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}},
[
["Std Lots", lotSize>=0.01?lotSize.toFixed(2):lotSize.toFixed(4)],
["Risk $", "$"+riskDollars.toFixed(2)],
["SL Pips", slPipsCalc.toFixed(1)],
["Pip Value", "$"+pipVal+"/pip"]
].map(([l,v])=>E("div",{key:l,style:{display:"flex",justifyContent:"space-between",
fontSize:10.5,borderTop:"1px solid var(--border)",paddingTop:3}},
E("span",{style:{color:"var(--t3)"}},l),
E("span",{style:{fontWeight:700,color:"var(--text)"}},v)
))
)
)
: E("div",{style:{textAlign:"center",padding:"10px 0",color:"var(--t3)",fontSize:11,lineHeight:1.5}},
"Fill in the fields to calculate lot size"
),
E("div",{style:{fontSize:9.5,color:"var(--t3)",lineHeight:1.5,paddingTop:4,borderTop:"1px solid var(--border)"}},
"⚠️ Always verify with your broker. Size down during drawdown."
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
if (!total) return  React.createElement("div", { style: { textAlign: "center", padding: "100px 20px" }, className: "fade-up" },  React.createElement("div", { style: { width: 88, height: 88, borderRadius: 22, background: "linear-gradient(135deg,var(--accF),var(--s3))", border: "2px dashed color-mix(in srgb, var(--acc) 40%, transparent)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 } }, "\u{1F4CA}"),  React.createElement("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-.5px" } }, "No trades yet"),  React.createElement("div", { style: { fontSize: 14, color: "var(--t2)", lineHeight: 1.8, maxWidth: 380, margin: "0 auto" } }, "Add an account and log your first trade to start tracking performance. Press ",  React.createElement("kbd", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 5, padding: "1px 6px", fontSize: 12, fontFamily: "monospace" } }, "N"), " anywhere to open the trade form."));
const gradeMap = {};
trades.forEach((t) => {
const g = t.grade || "B";
if (!gradeMap[g]) gradeMap[g] = { n: 0, w: 0 };
gradeMap[g].n++;
if (t.profit > 0) gradeMap[g].w++;
});
const topGrade = Object.entries(gradeMap).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
const expectedRR = trades.filter((t) => t.expectedRR && t.expectedRR !== "Custom").map((t) => {
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
const W = 60, H = height, pts = values.map((v, i) => `${i / (values.length - 1) * W},${H - ((v - mn) / rng * (H - 4) + 2)}`).join(" ");
return  React.createElement("svg", { width: W, height: H, style: { display: "block", flexShrink: 0 } },  React.createElement("polyline", { points: pts, fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }));
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
return  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" },  React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } }, [
{ label: "Total Trades", val: total, sub: `${wins.length}W \xB7 ${losses.length}L`, subCol: "var(--t3)", accent: "var(--blue)", spark: last7Days.map((d) => {
var _a;
return ((_a = dayPnlMap[d]) == null ? void 0 : _a.n) || 0;
}), sparkCol: "#3b82f6" },
{ label: "Win Rate", val: wr.toFixed(1) + "%", sub: wr >= 50 ? "Above average" : "Below average", subCol: wr >= 50 ? "var(--accD)" : "var(--t3)", accent: wr >= 50 ? "var(--acc)" : "var(--t2)", spark: sparkWR, sparkCol: wr >= 50 ? "#16a34a" : "#9ca3af" },
{ label: "Net P&L", val: grossUSD !== 0 ? fmtUSD(grossUSD, false).replace(/^\+/, "") : fmtPct(grossPct), sub: grossUSD !== 0 ? `${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%` : "", subCol: grossPct >= 0 ? "var(--accD)" : "var(--red)", accent: grossPct >= 0 ? "var(--acc)" : "var(--red)", spark: sparkPnl, sparkCol: grossPct >= 0 ? "var(--acc)" : "#ef4444" },
{ label: "Win/Loss Ratio", val: wlR, sub: parseFloat(wlR) >= 1.5 ? "Excellent" : "Needs improvement", subCol: parseFloat(wlR) >= 1 ? "var(--green)" : "var(--t3)", accent: "var(--green)", spark: [], sparkCol: "#16a34a" }
].map((kpi, i) =>  React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${kpi.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms`, position: "relative", overflow: "hidden" } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.3, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "uppercase" } }, kpi.label,  React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: kpi.accent, opacity: 0.7 } })),  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 30, fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1, color: "var(--text)", fontFamily: "'Inter',sans-serif" } }, kpi.val), kpi.sub &&  React.createElement("div", { style: { fontSize: 11, marginTop: 6, color: kpi.subCol, fontWeight: 500 } }, kpi.sub)), kpi.spark && kpi.spark.length > 1 &&  React.createElement(MiniSparkline, { values: kpi.spark, color: kpi.sparkCol }))))), uiBlocks.equityCurve !== false &&  React.createElement("div", { className: "card" },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 6, textTransform: "uppercase" } }, "Cumulative P&L"),  React.createElement("div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px", color: grossPct >= 0 ? "var(--accD)" : "var(--red)", fontFamily: "'Inter',sans-serif" } }, fmtPct(grossPct), grossUSD !== 0 &&  React.createElement("span", { style: { fontSize: 15, marginLeft: 10, fontWeight: 600, opacity: 0.65 } }, fmtUSD(grossUSD)))),  React.createElement("div", { style: { display: "flex", gap: 16, fontSize: 11 } },  React.createElement("div", { style: { textAlign: "center" } },  React.createElement("div", { style: { fontWeight: 500, color: "var(--accD)", fontSize: 16 } }, wins.length),  React.createElement("div", { style: { color: "var(--t3)", fontWeight: 600, letterSpacing: 0.5 } }, "WINS")),  React.createElement("div", { style: { width: 1, background: "var(--border)" } }),  React.createElement("div", { style: { textAlign: "center" } },  React.createElement("div", { style: { fontWeight: 500, color: "var(--t2)", fontSize: 16 } }, losses.length),  React.createElement("div", { style: { color: "var(--t3)", fontWeight: 600, letterSpacing: 0.5 } }, "LOSSES")))),  React.createElement(ProfitCurve, { trades, height: 150, capital }),  React.createElement("div", { style: { border: "1px solid var(--border)", borderRadius: 12, padding: "12px", marginTop: 20, background: "var(--s2)" } }, React.createElement(MiniCalendarWidget, { trades: allTrades || trades, ic: capital, capital })), weeklySummary ?  React.createElement("div", { className: "card" },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, "This Week \xB7 ", weeklySummary.from, " \u2192 ", weeklySummary.to),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 } }, [
{ l: "Trades", v: weeklySummary.total, c: "var(--text)" },
{ l: "Win Rate", v: `${weeklySummary.wr}%`, c: +weeklySummary.wr >= 50 ? "var(--green)" : "var(--t2)" },
{ l: "Net P&L", v: `${weeklySummary.pnl >= 0 ? "+" : ""}${weeklySummary.pnl}%`, c: +weeklySummary.pnl >= 0 ? "var(--accD)" : "var(--red)" }
].map((x) =>  React.createElement("div", { key: x.l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", textAlign: "center" } },  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, textTransform: "uppercase", marginBottom: 4 } }, x.l),  React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: x.c, letterSpacing: "-1px" } }, x.v)))),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5, fontSize: 11, color: "var(--t2)" } }, weeklySummary.topModel &&  React.createElement("div", { style: { display: "flex", gap: 6 } },  React.createElement("span", { style: { color: "var(--t3)" } }, "Best model:"),  React.createElement("span", { style: { fontWeight: 600 } }, weeklySummary.topModel)), weeklySummary.topMistake &&  React.createElement("div", { style: { display: "flex", gap: 6 } },  React.createElement("span", { style: { color: "var(--t3)" } }, "Top mistake:"),  React.createElement("span", { style: { fontWeight: 600, color: "var(--red)" } }, weeklySummary.topMistake)),  React.createElement("div", { style: { display: "flex", gap: 6 } },  React.createElement("span", { style: { color: "var(--t3)" } }, "Discipline:"),  React.createElement("span", { style: { fontWeight: 600, color: weeklySummary.disciplined >= 80 ? "var(--green)" : weeklySummary.disciplined >= 60 ? "var(--acc)" : "var(--red)" } }, weeklySummary.disciplined, "%")))) :  React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 140 } },  React.createElement("div", { style: { fontSize: 28 } }, "\u{1F4C5}"),  React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--t2)" } }, "No trades this week yet"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)" } }, "Your weekly summary will appear here"))),  React.createElement("div", { className: "g2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },  React.createElement("div", { className: "card" },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" } }, "Performance Breakdown"),  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 20 } }, (() => {
const r = 60, cx = 75, cy = 75, stroke = 12;
const circ = 2 * Math.PI * r;
const wrFrac = wr / 100;
return  React.createElement("svg", { width: "150", height: "150", style: { flexShrink: 0 } },  React.createElement("circle", { cx, cy, r, fill: "none", stroke: "var(--s3)", strokeWidth: stroke }),  React.createElement(
"circle",
{
cx,
cy,
r,
fill: "none",
stroke: "var(--green)",
strokeWidth: stroke,
strokeDasharray: `${circ * wrFrac} ${circ * (1 - wrFrac)}`,
strokeDashoffset: circ * 0.25,
strokeLinecap: "round",
style: { transition: "stroke-dasharray .8s cubic-bezier(.22,1,.36,1)" }
}
),  React.createElement("circle", { cx, cy, r: r - stroke - 4, fill: "none", stroke: "var(--border)", strokeWidth: 1 }),  React.createElement("text", { x: cx, y: cy - 6, textAnchor: "middle", fontSize: "22", fontWeight: "900", fill: "var(--text)", fontFamily: "Inter,sans-serif" }, wr.toFixed(0), "%"),  React.createElement("text", { x: cx, y: cy + 12, textAnchor: "middle", fontSize: "9.5", fontWeight: "700", fill: "var(--t3)", letterSpacing: "1", fontFamily: "Inter,sans-serif" }, "WIN RATE"));
})(),  React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 10 } }, [
{ label: "Winning Trades", val: wins.length, pct: wr.toFixed(0) + "%", col: "var(--green)" },
{ label: "Losing Trades", val: losses.length, pct: (losses.length / total * 100).toFixed(0) + "%", col: "var(--t3)" },
{ label: "Avg Win", val: fmtPct(wins.length ? wins.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / wins.length : 0, 2), col: "var(--green)" },
{ label: "Avg Loss", val: fmtPct(losses.length ? losses.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / losses.length : 0, 2), col: "var(--red)" }
].map((r, i) =>  React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },  React.createElement("span", { style: { fontSize: 11.5, color: "var(--t3)", fontWeight: 500 } }, r.label),  React.createElement("span", { style: { fontSize: 13, fontWeight: 500, color: r.col, fontFamily: "'Inter',sans-serif" } }, r.pct || r.val)))))), uiBlocks.monthlyBars !== false &&  React.createElement("div", { className: "card" },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" } }, "Monthly P&L"),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginTop: 4 } }, months.slice(-5).map(([m, data]) => {
const maxV = Math.max(...months.map(([, x]) => Math.abs(x.profit)), 1);
const pct = Math.abs(data.profit) / maxV * 100;
return  React.createElement("div", { key: m, style: { display: "flex", alignItems: "center", gap: 10 } },  React.createElement("div", { style: { width: 32, fontSize: 10.5, color: "var(--t3)", fontWeight: 700, flexShrink: 0 } }, m.slice(5)),  React.createElement("div", { style: { flex: 1, height: 8, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } },  React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: data.profit >= 0 ? "linear-gradient(90deg,var(--acc),var(--accD))" : "var(--border2)", borderRadius: 4, transition: "width .8s cubic-bezier(.22,1,.36,1)" } })),  React.createElement("div", { style: { width: 66, textAlign: "right", fontSize: 12, fontWeight: 500, color: data.profit >= 0 ? "var(--accD)" : "var(--t2)", fontFamily: "'Inter',sans-serif" } }, data.profit >= 0 ? "+$" : "-$", Math.abs(data.profit).toFixed(0)),  React.createElement("div", { style: { width: 42, textAlign: "right", fontSize: 10.5, color: "var(--t3)", fontWeight: 600 } }, fmtPct(data.pnl, 1)));
})))), hourlyStats.length > 0 &&  React.createElement("div", { className: "card" },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 14, textTransform: "uppercase" } }, "Best Time of Day"),  React.createElement("div", { style: { display: "flex", gap: 2, alignItems: "flex-end", height: 68, marginBottom: 4 } }, Array.from({ length: 24 }, (_, h) => {
const stat = hourlyStats.find((x) => x.h === h);
if (!stat) return  React.createElement("div", { key: h, style: { flex: 1, height: 4, background: "var(--s3)", borderRadius: 2, opacity: 0.35 } });
const maxP = Math.max(...hourlyStats.map((x) => Math.abs(x.profit)), 1);
const ht = Math.max(6, Math.round(Math.abs(stat.profit) / maxP * 64));
const col = stat.profit >= 0 ? "var(--acc)" : "var(--border2)";
return  React.createElement(
"div",
{
key: h,
title: `${String(h).padStart(2, "0")}:00 \xB7 ${stat.n} trade${stat.n !== 1 ? "s" : ""} \xB7 ${stat.wr.toFixed(0)}% WR \xB7 avg $${(stat.profit / stat.n).toFixed(2)}`,
style: { flex: 1, height: ht, background: col, borderRadius: "3px 3px 0 0", cursor: "default", opacity: 0.8, transition: "opacity .1s" },
onMouseEnter: (e) => e.currentTarget.style.opacity = "1",
onMouseLeave: (e) => e.currentTarget.style.opacity = ".8"
}
);
})),  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--t3)", fontWeight: 600 } }, ["00", "03", "06", "09", "12", "15", "18", "21"].map((h) =>  React.createElement("span", { key: h }, h))), bestHour &&  React.createElement("div", { style: { marginTop: 10, padding: "8px 12px", background: "var(--s2)", borderRadius: 9, fontSize: 11, color: "var(--t2)" } }, "Peak: ",  React.createElement("span", { style: { fontWeight: 700, color: "var(--accD)" } }, String(bestHour.h).padStart(2, "0"), ":00"),  React.createElement("span", { style: { color: "var(--t3)", marginLeft: 6 } }, bestHour.n, " trades \xB7 ", bestHour.wr.toFixed(0), "% WR \xB7 avg $", (bestHour.profit / bestHour.n).toFixed(2)))))
});
function EdgeFinder({ trades, capital }) {
const E = React.createElement;
const [minTrades, setMinTrades] = React.useState(5);
const [sortBy, setSortBy] = React.useState("edge");
function edgeScore(wins, total) {
if (total < 1) return 0;
const wr = wins / total;
const kelly = wr - (1 - wr);
const confidence = Math.min(1, Math.sqrt(total / 20));
return Math.max(0, kelly * confidence * 100);
}
function edgeLabel(score, total) {
if (total < minTrades) return { label: "⬜ Too Few", color: "var(--t3)", bg: "var(--s2)" };
if (score >= 30) return { label: "✦ Strong Edge", color: "var(--accD)", bg: "var(--accL)" };
if (score >= 12) return { label: "◈ Building", color: "var(--acc)", bg: "var(--accF)" };
if (score >= 0) return { label: "🔴 Avoid", color: "var(--red)", bg: "var(--rBg)" };
return { label: "🔴 Avoid", color: "var(--red)", bg: "var(--rBg)" };
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
const sess = t.session || "Unknown";
const sym = t.symbol || "Unknown";
const model = t.model || "Unknown";
const grade = t.grade || "–";
const rr = t.expectedRR || "–";
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
if (sess !== "Unknown") addDim(`${c} in ${sess}`, t);
});
});
let rows = Object.entries(dims).map(([key, d]) => {
const wr = d.total ? d.wins / d.total * 100 : 0;
const score = edgeScore(d.wins, d.total);
const avgPnl = d.total ? d.pnl / d.total : 0;
return { key, ...d, wr, score, avgPnl };
}).filter(r => r.total >= minTrades);
if (sortBy === "edge") rows.sort((a, b) => b.score - a.score);
else if (sortBy === "wr") rows.sort((a, b) => b.wr - a.wr);
else if (sortBy === "pnl") rows.sort((a, b) => b.profit - a.profit);
else if (sortBy === "trades") rows.sort((a, b) => b.total - a.total);
const topEdges = rows.filter(r => r.score >= 30).slice(0, 3);
const avoidEdges = rows.filter(r => r.score < 0 || (r.total >= minTrades && r.wr < 35)).slice(0, 3);
const fmtPctLocal = (v) => (v >= 0 ? "+" : "") + v.toFixed(1) + "%";
const fmtUSDLocal = (v) => (v >= 0 ? "+" : "-") + "$" + Math.abs(v).toFixed(0);
if (trades.length < minTrades) return E("div", { style: { textAlign: "center", padding: "60px 20px", color: "var(--t3)", fontSize: 13 } },
E("div", { style: { fontSize: 32, marginBottom: 12 } }, "⚡"),
E("div", { style: { fontWeight: 700, color: "var(--text)", marginBottom: 6 } }, "Not enough data yet"),
E("div", null, `Log at least ${minTrades} trades to unlock Edge Finder.`)
);
return E("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
E("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 } },
E("div", null,
E("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text)", letterSpacing: "-.02em" } }, "⚡ Edge Finder"),
E("div", { style: { fontSize: 11.5, color: "var(--t3)", marginTop: 2 } }, "Statistical edge scoring across all your trading dimensions & combos")
),
E("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" } },
E("div", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Min trades:"),
[3, 5, 10].map(n => E("button", {
key: n, onClick: () => setMinTrades(n),
style: { padding: "4px 12px", borderRadius: 8, border: `1.5px solid ${minTrades === n ? "var(--acc)" : "var(--border)"}`, background: minTrades === n ? "var(--accL)" : "var(--s2)", color: minTrades === n ? "var(--accD)" : "var(--t2)", fontSize: 11, fontWeight: 700, cursor: "pointer" }
}, n))
)
),
topEdges.length > 0 && E("div", null,
E("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 } }, "🏆 Your Strongest Edges"),
E("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10 } },
topEdges.map((r, i) => E("div", {
key: r.key,
style: { background: "var(--accF)", border: "1.5px solid color-mix(in srgb, var(--acc) 40%, transparent)", borderRadius: 12, padding: "14px 16px", position: "relative", overflow: "hidden" }
},
E("div", { style: { position: "absolute", top: 0, right: 0, width: 40, height: 40, borderRadius: "0 12px 0 100%", background: "color-mix(in srgb, var(--acc) 12%, transparent)" } }),
E("div", { style: { fontSize: 9, fontWeight: 800, color: "var(--acc)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 } }, `#${i + 1} Edge`),
E("div", { style: { fontSize: 12, fontWeight: 800, color: "var(--text)", lineHeight: 1.3, marginBottom: 8 } }, r.key),
E("div", { style: { display: "flex", gap: 12 } },
E("div", null,
E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Win Rate"),
E("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--accD)" } }, r.wr.toFixed(0) + "%")
),
E("div", null,
E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Trades"),
E("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--text)" } }, r.total)
),
E("div", null,
E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Net P&L"),
E("div", { style: { fontSize: 14, fontWeight: 800, color: r.profit >= 0 ? "var(--accD)" : "var(--red)" } }, fmtUSDLocal(r.profit))
)
),
E("div", { style: { marginTop: 10, height: 4, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } },
E("div", { style: { height: "100%", width: Math.min(100, r.score * 2) + "%", background: "linear-gradient(90deg, var(--acc), var(--accD))", borderRadius: 4, transition: "width .6s ease" } })
),
E("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4, fontWeight: 600 } }, "Edge score: " + r.score.toFixed(0))
))
)
),
avoidEdges.length > 0 && E("div", null,
E("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 } }, "⚠️ Edges to Avoid"),
E("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: 8 } },
avoidEdges.map(r => E("div", {
key: r.key,
style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 10, padding: "12px 14px" }
},
E("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 6 } }, r.key),
E("div", { style: { display: "flex", gap: 10, fontSize: 12 } },
E("span", { style: { color: "var(--red)", fontWeight: 700 } }, r.wr.toFixed(0) + "% WR"),
E("span", { style: { color: "var(--t3)" } }, r.total + " trades"),
E("span", { style: { color: r.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, fmtUSDLocal(r.profit))
)
))
)
),
E("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" } },
E("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--s2)", flexWrap: "wrap", gap: 8 } },
E("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)" } }, `All Dimensions (${rows.length} with ≥${minTrades} trades)`),
E("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
E("div", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 600 } }, "Sort:"),
[["edge", "Edge Score"], ["wr", "Win Rate"], ["pnl", "Net P&L"], ["trades", "Trades"]].map(([id, label]) =>
E("button", {
key: id, onClick: () => setSortBy(id),
style: { padding: "3px 10px", borderRadius: 7, border: `1px solid ${sortBy === id ? "var(--acc)" : "var(--border)"}`, background: sortBy === id ? "var(--accL)" : "transparent", color: sortBy === id ? "var(--accD)" : "var(--t3)", fontSize: 10, fontWeight: 700, cursor: "pointer" }
}, label)
)
)
),
E("div", { className: "analytics-table-scroll" },
E("table", { style: { width: "100%", minWidth: 520, borderCollapse: "collapse", tableLayout: "fixed" } },
E("colgroup", null,
E("col", { style: { width: "auto" } }),
E("col", { style: { width: 65 } }),
E("col", { style: { width: 65 } }),
E("col", { style: { width: 78 } }),
E("col", { style: { width: 88 } }),
E("col", { style: { width: 90 } })
),
E("thead", null,
E("tr", { style: { background: "var(--s2)" } },
["Dimension / Combo", "Trades", "Win %", "Avg P&L%", "Net P&L", "Edge"].map((h, hi) =>
E("th", { key: h, style: { padding: "9px 16px", fontSize: 9, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: hi === 0 ? "left" : "right", borderBottom: "1px solid var(--border)", background: "var(--s2)", whiteSpace: "nowrap" } }, h)
)
)
),
E("tbody", null,
rows.length === 0
? E("tr", null, E("td", { colSpan: 6, style: { textAlign: "center", padding: "32px", color: "var(--t3)", fontSize: 13 } }, `No dimensions with ≥${minTrades} trades yet.`))
: rows.map((r, i) => {
const badge = edgeLabel(r.score, r.total);
return E("tr", {
key: r.key,
style: { background: i % 2 === 0 ? "var(--surface)" : "var(--s2)", transition: "background .1s", cursor: "default" },
onMouseEnter: e => { e.currentTarget.style.background = "var(--s3)"; },
onMouseLeave: e => { e.currentTarget.style.background = i % 2 === 0 ? "var(--surface)" : "var(--s2)"; }
},
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)" } },
E("div", { style: { fontSize: 11.5, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 6, minWidth: 0 } },
E("div", { style: { width: 4, height: 4, borderRadius: "50%", background: r.score >= 30 ? "var(--acc)" : r.score >= 12 ? "color-mix(in srgb, var(--acc) 60%, var(--t3))" : "var(--red)", flexShrink: 0 } }),
E("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, r.key)
)
),
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, color: "var(--t2)", fontWeight: 600 } }, r.total),
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.wr >= 55 ? "var(--accD)" : r.wr >= 45 ? "var(--acc)" : "var(--red)" } }, r.wr.toFixed(0) + "%"),
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.avgPnl >= 0 ? "var(--accD)" : "var(--t3)" } }, fmtPctLocal(r.avgPnl)),
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.profit >= 0 ? "var(--accD)" : "var(--red)", fontVariantNumeric: "tabular-nums" } }, fmtUSDLocal(r.profit)),
E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right" } },
E("span", { style: { fontSize: 10, fontWeight: 700, color: badge.color, background: badge.bg, borderRadius: 6, padding: "2px 7px", whiteSpace: "nowrap", display: "inline-block" } }, badge.label)
)
);
})
)
)
)
),
E("div", { style: { background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 10, padding: "12px 16px", fontSize: 12, color: "var(--t2)", lineHeight: 1.6, display: "flex", gap: 10 } },
E("span", { style: { flexShrink: 0 } }, "💡"),
E("div", null,
E("span", { style: { fontWeight: 700, color: "var(--text)" } }, "How Edge Score works: "),
"Combines win rate, profit factor and sample size confidence. Scores ≥30 = strong edge you should exploit. 12–29 = developing, needs more data. <12 = no statistical edge — review or avoid."
)
)
);
}
const Analytics = memo(function Analytics2({ trades, uiBlocks = {}, capital: propCapital }) {
const capital = propCapital && propCapital > 0 ? propCapital : 5000;
var _a, _b, _c, _d, _e, _f, _g;
const [activeView, setActiveView] = useState("confluence");
if (!trades.length) return  React.createElement("div", { style: { textAlign: "center", padding: "80px 20px", color: "var(--t3)" } }, "Log at least one trade to unlock performance analytics.");
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
const s = t.session || "Unknown";
if (!sessMap[s]) sessMap[s] = { n: 0, w: 0, pnl: 0, profit: 0 };
sessMap[s].n++;
if (t.profit > 0) sessMap[s].w++;
sessMap[s].pnl += calcPnL(t.profit, capital);
sessMap[s].profit += t.profit || 0;
});
const sessData = Object.entries(sessMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
const modelMap = {};
trades.forEach((t) => {
const m = t.model || "Unknown";
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
const rr = t.expectedRR || "Unknown";
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
const views = [{ id: "confluence", label: "Confluences" }, { id: "session", label: "Sessions" }, { id: "model", label: "Models" }, { id: "symbol", label: "Symbols" }, { id: "keylevel", label: "Key Levels" }, { id: "grade", label: "Grade Quality" }, { id: "edgefinder", label: "⚡ Edge Finder" }];
function DataTable({ data, maxWR = 100 }) {
return  React.createElement("div", { className: "analytics-table-scroll" },
React.createElement("table", { style: { width: "100%", minWidth: 420, borderCollapse: "collapse", tableLayout: "fixed" } },
React.createElement("colgroup", null,
React.createElement("col", { style: { width: "auto" } }),
React.createElement("col", { style: { width: 70 } }),
React.createElement("col", { style: { width: 80 } }),
React.createElement("col", { style: { width: 80 } }),
React.createElement("col", { style: { width: 96 } })
),
React.createElement("thead", null,
React.createElement("tr", { style: { background: "var(--s2)", borderRadius: "10px 10px 0 0" } },
["Factor", "Trades", "Win Rate", "Avg P&L%", "Net P&L $"].map((h, hi) =>
React.createElement("th", { key: h, style: { padding: "9px 14px", fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: hi === 0 ? "left" : "right", borderBottom: "1px solid var(--border)", background: "var(--s2)", whiteSpace: "nowrap" } }, h)
)
)
),
React.createElement("tbody", null,
data.map((row, i) =>
React.createElement("tr", {
key: i,
style: { background: i % 2 === 0 ? "var(--surface)" : "var(--s2)", transition: "background .1s", cursor: "default" },
onMouseEnter: (e) => { e.currentTarget.style.background = "var(--s3)"; },
onMouseLeave: (e) => { e.currentTarget.style.background = i % 2 === 0 ? "var(--surface)" : "var(--s2)"; }
},
React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)" } },
React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 7 } },
React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: row.wr >= 60 ? "var(--green)" : row.wr >= 40 ? "var(--acc)" : "var(--red)", flexShrink: 0 } }),
React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, row.name)
)
),
React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, color: "var(--t2)", fontWeight: 600 } }, row.n),
React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.wr >= 50 ? "var(--green)" : row.wr >= 40 ? "var(--acc)" : "var(--red)" } }, row.wr.toFixed(0), "%"),
React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.pnl >= 0 ? "var(--accD)" : "var(--t2)" } }, fmtPct(row.pnl / row.n, 2)),
React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.profit >= 0 ? "var(--accD)" : "var(--t2)", fontVariantNumeric: "tabular-nums" } }, fmtUSD(row.profit, true))
)
)
)
)
);
}
var _c2=0,_p2=0,_md=0;[...trades].sort(function(a,b){return a.entryDate.localeCompare(b.entryDate);}).forEach(function(t){_c2+=calcPnL(t.profit,capital);if(_c2>_p2)_p2=_c2;var _d=_c2-_p2;if(_d<_md)_md=_d;});
var _pf=calcProfitFactor(trades),_pfS=_pf===Infinity?"∞":_pf.toFixed(2);
var _erA=trades.filter(function(t){return t.expectedRR&&t.expectedRR!=="Custom";}).map(function(t){return parseFloat((t.expectedRR||"1:1").split(":")[1]||1);});
var _aER=_erA.length?_erA.reduce(function(s,v){return s+v;},0)/_erA.length:0;
var _arA=trades.filter(function(t){return t.profit>0&&t.actualRR&&!t.actualRR.startsWith("-");}).map(function(t){return parseFloat((t.actualRR||"0:0").split(":")[1]||0);});
var _aAR=_arA.length?_arA.reduce(function(s,v){return s+v;},0)/_arA.length:0;
var _streak=calcStreak(trades);
return  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" },
React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},
React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
React.createElement("div",{style:{width:3,height:14,background:"var(--acc)",borderRadius:2}}),"Performance Metrics"),
React.createElement("div",{className:"g4",style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}},
[{label:"Max Drawdown",val:fmtPct(_md,1),sub:"Peak-to-trough",accent:"var(--red)",subCol:"var(--red)"},
{label:"Profit Factor",val:_pfS,sub:_pf>=2?"Strong edge":_pf>=1?"Profitable":"Losing edge",subCol:_pf>=1.5?"var(--green)":_pf>=1?"var(--acc)":"var(--red)",accent:_pf>=1?"var(--acc)":"var(--red)"},
{label:"Avg Target RR",val:_aER>0?"1:"+_aER.toFixed(1):"—",sub:"Planned reward ratio",accent:"var(--purple)",subCol:"var(--t3)"},
{label:"Avg Actual RR",val:_aAR>0?"1:"+_aAR.toFixed(1):"—",sub:_aAR>=_aER?"On target ✓":"Below plan",subCol:_aAR>=_aER?"var(--green)":"var(--t3)",accent:"var(--cyan)"}
].map(function(k,i){return  React.createElement("div",{key:i,className:"card count-up",style:{borderTop:"3px solid "+k.accent,paddingTop:18,animationDelay:i*60+"ms"}},
React.createElement("div",{style:{fontSize:10,fontWeight:600,color:"var(--t3)",letterSpacing:0.3,marginBottom:10,textTransform:"uppercase"}},k.label),
React.createElement("div",{style:{fontSize:28,fontWeight:800,letterSpacing:"-1.5px",lineHeight:1}},k.val),
k.sub&& React.createElement("div",{style:{fontSize:11,marginTop:6,color:k.subCol,fontWeight:600}},k.sub)
);})
)
),
React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
React.createElement("div",{style:{width:3,height:14,background:"var(--acc)",borderRadius:2}}),"Current Streak"),
React.createElement("div",{className:"card",style:{borderTop:"3px solid "+(_streak.type==="win"?"var(--acc)":_streak.type==="loss"?"var(--t2)":"var(--border)"),paddingTop:18}},
React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}},
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},
React.createElement("div",{style:{fontSize:36,fontWeight:800,lineHeight:1,color:_streak.type==="win"?"var(--accD)":_streak.type==="loss"?"var(--t2)":"var(--t3)",letterSpacing:"-2px"}},
_streak.type==="win"?"+":_streak.type==="loss"?"-":"",_streak.current),
React.createElement("div",null,
React.createElement("div",{style:{fontSize:14,fontWeight:700,color:_streak.type==="win"?"var(--accD)":_streak.type==="loss"?"var(--t2)":"var(--t3)"}},
_streak.type==="win"?"Win Streak":_streak.type==="loss"?"Loss Streak":"No Trades"),
React.createElement("div",{style:{fontSize:11,color:"var(--t3)",marginTop:2}},"consecutive ",_streak.type==="win"?"wins":"losses")
)
),
React.createElement("div",{style:{display:"flex",gap:32,paddingLeft:16,borderLeft:"1px solid var(--border)"}},
React.createElement("div",null,
React.createElement("div",{style:{fontSize:9,color:"var(--t3)",fontWeight:600,letterSpacing:0.04,textTransform:"uppercase",marginBottom:3}},"Best Win Streak"),
React.createElement("div",{style:{fontSize:22,fontWeight:700,color:"var(--accD)"}},_streak.longest.win)
),
React.createElement("div",null,
React.createElement("div",{style:{fontSize:9,color:"var(--t3)",fontWeight:600,letterSpacing:0.04,textTransform:"uppercase",marginBottom:3}},"Worst Loss Streak"),
React.createElement("div",{style:{fontSize:22,fontWeight:700,color:"var(--t2)"}},_streak.longest.loss)
)
)
)
),
React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
React.createElement("div",{style:{width:3,height:14,background:"var(--purple)",borderRadius:2}}),"Market Breakdown"),
React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 } }, [
{ label: "Top Confluence", val: ((_b = (_a = confData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _a.name) == null ? void 0 : _b.split(" ").slice(0, 2).join(" ")) || "\u2014", sub: confData.sort((a, b) => b.wr - a.wr)[0] ? `${confData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--acc)" },
{ label: "Best Session", val: ((_c = sessData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _c.name) || "\u2014", sub: sessData.sort((a, b) => b.wr - a.wr)[0] ? `${sessData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--blue)" },
{ label: "Best Strategy", val: ((_e = (_d = modelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _d.name) == null ? void 0 : _e.split(" ")[0]) || "\u2014", sub: modelData.sort((a, b) => b.wr - a.wr)[0] ? `${modelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--purple)" },
{ label: "Best Instrument", val: ((_f = symData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _f.name) || "\u2014", sub: symData.sort((a, b) => b.wr - a.wr)[0] ? `${symData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--green)" },
{ label: "Best Key Level", val: ((_g = keyLevelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _g.name) || "\u2014", sub: keyLevelData.sort((a, b) => b.wr - a.wr)[0] ? `${keyLevelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--cyan)" }
].map((k, i) =>  React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `3px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, k.label),  React.createElement("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text)", marginBottom: 4, fontFamily: "'Inter',sans-serif" } }, k.val),  React.createElement("div", { style: { fontSize: 11.5, color: "var(--t3)", fontWeight: 500 } }, k.sub)))),  React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } },
React.createElement("div", { style: { display: "flex", gap: 0, borderBottom: "1px solid var(--border)", overflowX: "auto" } }, views.map((v) =>  React.createElement("button", { key: v.id, onClick: () => setActiveView(v.id), style: { padding: "12px 20px", fontSize: 12, fontWeight: activeView === v.id ? 700 : 500, color: activeView === v.id ? "var(--accD)" : "var(--t3)", background: "none", border: "none", cursor: "pointer", borderBottom: activeView === v.id ? "2px solid var(--acc)" : "2px solid transparent", whiteSpace: "nowrap", fontFamily: "inherit" } }, v.label))),
React.createElement("div", { className: "swipe-hint" }, "↔ Swipe to see all columns"),
React.createElement("div", { style: { padding: "16px" } }, activeView === "confluence" &&  React.createElement(DataTable, { data: [...confData].sort((a, b) => b.wr - a.wr) }), activeView === "session" &&  React.createElement(DataTable, { data: [...sessData].sort((a, b) => b.wr - a.wr) }), activeView === "model" &&  React.createElement(DataTable, { data: [...modelData].sort((a, b) => b.wr - a.wr) }), activeView === "symbol" &&  React.createElement(DataTable, { data: [...symData].sort((a, b) => b.wr - a.wr) }), activeView === "keylevel" && (keyLevelData.length > 0 ?  React.createElement(DataTable, { data: [...keyLevelData].sort((a, b) => b.wr - a.wr) }) :  React.createElement("div", { style: { textAlign: "center", padding: "40px 20px", color: "var(--t3)", fontSize: 13 } }, "\uD83D\uDCCD No key levels logged yet \u2014 add them in Trade Log to see analytics here.")), activeView === "edgefinder" &&  React.createElement(EdgeFinder, { trades, capital }), activeView === "grade" &&  React.createElement("div", null,  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 16 } }, GRADES.map((g) => {
const d = gradeMap[g] || { n: 0, w: 0, pnl: 0, profit: 0 };
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: g, className: "card", style: { textAlign: "center", padding: "16px 12px" } },  React.createElement(GradeChip, { grade: g }),  React.createElement("div", { style: { fontSize: 22, fontWeight: 600, marginTop: 10, color: "var(--text)" } }, wr.toFixed(0), "%"),  React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 3 } }, d.n, " trades"),  React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: d.profit >= 0 ? "var(--accD)" : "var(--t2)", marginTop: 4 } }, d.n > 0 ? fmtUSD(d.profit) : "\u2014"));
})),  React.createElement("div", { style: { padding: "12px", background: "var(--s2)", borderRadius: 10, fontSize: 12, color: "var(--t2)", lineHeight: 1.6 } }, "\u{1F4A1} A+ and A setups should have your highest win rate. If B/C grades outperform, your grading criteria may need recalibration.")))),  React.createElement("div", { className: "card" },  React.createElement(Label, null, "Target RR vs Actual Execution"),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12, marginTop: 8 } }, Object.entries(rrMap).sort((a, b) => b[1].n - a[1].n).map(([rr, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: rr, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 11, padding: "14px" } },  React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" } }, "Target ", rr),  React.createElement("div", { style: { display: "flex", gap: 12 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Trades"),  React.createElement("div", { style: { fontSize: 18, fontWeight: 700 } }, d.n)),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Win Rate"),  React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: wr >= 50 ? "var(--green)" : "var(--t2)" } }, wr.toFixed(0), "%")),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Avg P&L"),  React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: d.pnl / d.n >= 0 ? "var(--accD)" : "var(--red)" } }, fmtPct(d.pnl / d.n, 1)))));
}))),
React.createElement("div",{className:"card",style:{padding:0,overflow:"hidden"}},
React.createElement("div",{className:"analytics-table-scroll"},
React.createElement("table",{style:{width:"100%",minWidth:420,borderCollapse:"collapse",tableLayout:"fixed"}},
React.createElement("colgroup",null,
React.createElement("col",{style:{width:"auto"}}),
React.createElement("col",{style:{width:70}}),
React.createElement("col",{style:{width:80}}),
React.createElement("col",{style:{width:80}}),
React.createElement("col",{style:{width:96}})
),
React.createElement("thead",null,
React.createElement("tr",{style:{background:"var(--s2)"}},
["Symbol","Trades","Win Rate","Avg P&L%","Net P&L $"].map((h,hi)=>
React.createElement("th",{key:h,style:{padding:"9px 14px",fontSize:10,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",textAlign:hi===0?"left":"right",borderBottom:"1px solid var(--border)",background:"var(--s2)",whiteSpace:"nowrap"}},h)
)
)
),
React.createElement("tbody",null,
(()=>{
const _sorted=[...symData].sort((a,b)=>b.profit-a.profit);
if(!_sorted.length) return  React.createElement("tr",null, React.createElement("td",{colSpan:5,style:{color:"var(--t3)",fontSize:13,textAlign:"center",padding:"20px 0"}},"No trades yet"));
return _sorted.map((s,_si)=>
React.createElement("tr",{key:s.name,
style:{background:_si%2===0?"var(--surface)":"var(--s2)",transition:"background .1s",cursor:"default"},
onMouseEnter:e=>{e.currentTarget.style.background="var(--s3)"},
onMouseLeave:e=>{e.currentTarget.style.background=_si%2===0?"var(--surface)":"var(--s2)"}
},
React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)"}},
React.createElement("div",{style:{fontSize:12,fontWeight:600,color:"var(--text)",display:"flex",alignItems:"center",gap:7}},
React.createElement("div",{style:{width:5,height:5,borderRadius:"50%",background:s.wr>=60?"var(--green)":s.wr>=40?"var(--acc)":"var(--red)",flexShrink:0}}),
React.createElement("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},s.name)
)
),
React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,color:"var(--t2)",fontWeight:600}},s.n),
React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.wr>=50?"var(--green)":s.wr>=40?"var(--acc)":"var(--red)"}},s.wr.toFixed(0),"%"),
React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.pnl/s.n>=0?"var(--accD)":"var(--t2)"}},fmtPct(s.pnl/s.n,2)),
React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.profit>=0?"var(--accD)":"var(--t2)",fontVariantNumeric:"tabular-nums"}},fmtUSD(s.profit,true))
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
if (!trades.length) return  React.createElement("div", { style: { textAlign: "center", padding: "80px 20px", color: "var(--t3)" } }, "Log trades with mindset data to unlock psychology insights.");
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
const e = t.emotionAfter || "Neutral";
if (!emotAfter[e]) emotAfter[e] = { n: 0, w: 0 };
emotAfter[e].n++;
if (t.profit > 0) emotAfter[e].w++;
});
const mistakeMap = {};
trades.forEach((t) => {
const m = t.mistakes || "None";
if (!mistakeMap[m]) mistakeMap[m] = { n: 0, loss: 0 };
mistakeMap[m].n++;
if (t.profit <= 0) mistakeMap[m].loss++;
});
const totalTrades = trades.length;
const disciplineScore = Math.round(trades.filter((t) => t.mistakes === "None" || !t.mistakes).length / totalTrades * 100);
const bestEmotion = Object.entries(emotBefore).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
const worstEmotion = Object.entries(emotBefore).sort((a, b) => a[1].w / a[1].n - b[1].w / b[1].n)[0];
const topMistake = Object.entries(mistakeMap).filter(([m]) => m !== "None").sort((a, b) => b[1].n - a[1].n)[0];
const mistakeRate = Math.round(trades.filter((t) => t.mistakes && t.mistakes !== "None").length / totalTrades * 100);
return  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" },  React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } }, [
{ label: "Rule Adherence", val: `${disciplineScore}%`, sub: disciplineScore >= 80 ? "High discipline \u2014 stay consistent" : disciplineScore >= 60 ? "Moderate \u2014 review rule breaks" : "Low \u2014 focus on process, not P&L", accent: disciplineScore >= 80 ? "var(--green)" : disciplineScore >= 60 ? "var(--acc)" : "var(--t3)", key: "disciplineScore" },
{ label: "Peak Mindset", val: bestEmotion ? bestEmotion[0].split(" ")[0] || "\u2014" : "\u2014", sub: bestEmotion ? `${(bestEmotion[1].w / bestEmotion[1].n * 100).toFixed(0)}% win rate when in this state` : "", accent: "var(--acc)", key: "bestMindset" },
{ label: "Risk Mindset", val: worstEmotion && worstEmotion[1].n > 1 ? worstEmotion[0].split(" ")[0] : "\u2014", sub: worstEmotion && worstEmotion[1].n > 1 ? `Only ${(worstEmotion[1].w / worstEmotion[1].n * 100).toFixed(0)}% win rate` : "Not enough data", accent: "var(--border2)", key: "worstMindset" },
{ label: "Error Rate", val: `${mistakeRate}%`, sub: topMistake && topMistake[0] !== "None" ? `Most common: ${topMistake[0].split(" ").slice(0, 2).join(" ")}` : "Clean execution \u2014 no mistakes", accent: mistakeRate > 30 ? "var(--orange)" : mistakeRate > 15 ? "var(--acc)" : "var(--green)", key: "mistakeRate" }
].filter((k) => uiBlocks[k.key] !== false).map((k, i) =>  React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, k.label),  React.createElement("div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "'Inter',sans-serif" } }, k.val),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 6, fontWeight: 500, lineHeight: 1.4 } }, k.sub)))),  React.createElement("div", { className: "g2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },  React.createElement("div", { className: "card" },  React.createElement(Label, null, "Pre-Trade Mindset \u2192 Win Rate"),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 6 } }, Object.entries(emotBefore).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
const positive = ["Calm & Focused", "Confident", "Neutral"];
const col = positive.includes(e) ? "var(--acc)" : wr >= 50 ? "var(--acc)" : "var(--t3)";
return  React.createElement("div", { key: e, style: { display: "flex", alignItems: "center", gap: 10 } },  React.createElement(EmotionChip, { emotion: e }),  React.createElement("div", { style: { flex: 1, height: 5, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } },  React.createElement("div", { style: { width: `${wr}%`, height: "100%", background: col, borderRadius: 4, opacity: 0.85 } })),  React.createElement("span", { style: { fontSize: 11, fontWeight: 500, color: col, width: 38, textAlign: "right" } }, wr.toFixed(0), "%"),  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", width: 38 } }, d.n, " trades"));
})),  React.createElement("div", { style: { marginTop: 12, padding: "10px 14px", background: "var(--s2)", borderRadius: 10, fontSize: 12, color: "var(--t2)", lineHeight: 1.6 } }, "\u{1F4A1} Your best trades happen when you're calm and prepared. If you spot FOMO, Greed, or Anxiety before a trade \u2014 sit on your hands.")),  React.createElement("div", { className: "card" },  React.createElement(Label, null, "Top Rule Breaks (by frequency)"),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 6 } }, Object.entries(mistakeMap).filter(([m]) => m !== "None").sort((a, b) => b[1].n - a[1].n).map(([m, d]) => {
const lossRate = d.n ? d.loss / d.n * 100 : 0;
return  React.createElement("div", { key: m },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 } },  React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)" } }, m),  React.createElement("div", { style: { display: "flex", gap: 8 } },  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, d.n, " times"),  React.createElement("span", { style: { fontSize: 11, fontWeight: 400, color: lossRate > 50 ? "var(--red)" : "var(--t3)" } }, lossRate.toFixed(0), "% ended in loss"))),  React.createElement("div", { style: { height: 4, background: "var(--s3)", borderRadius: 3, overflow: "hidden" } },  React.createElement("div", { style: { width: `${d.n / totalTrades * 100}%`, height: "100%", background: "var(--acc)", borderRadius: 3, opacity: 0.6 } })));
}), Object.keys(mistakeMap).filter((m) => m !== "None").length === 0 &&  React.createElement("div", { style: { color: "var(--t3)", fontSize: 13, textAlign: "center", padding: "20px 0" } }, "No mistakes recorded \u{1F389}")))),  React.createElement("div", { className: "card" },  React.createElement(Label, null, "Trade Quality Timeline (last 20 trades)"),  React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" } }, [...trades].sort((a, b) => b.entryDate.localeCompare(a.entryDate)).slice(0, 20).reverse().map((t, i) => {
const g = t.grade || "B";
const hasMistake = t.mistakes && t.mistakes !== "None";
const gradeColor = { "A+": "var(--accD)", "A": "var(--accD)", "B": "var(--acc)", "C": "var(--t2)", "D": "var(--t3)" }[g] || "var(--t2)";
return  React.createElement("div", { key: i, title: `${t.symbol} ${t.entryDate} | Grade: ${g} | ${hasMistake ? "\u26A0 " + t.mistakes : "Clean"}`, style: { width: 36, height: 52, borderRadius: 8, border: `1.5px solid ${hasMistake ? "var(--accD)" : "var(--border)"}`, background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, cursor: "default" } },  React.createElement("span", { style: { fontSize: 9, fontWeight: 500, color: gradeColor } }, g),  React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: t.profit > 0 ? "var(--acc)" : "var(--border2)" } }), hasMistake &&  React.createElement("span", { style: { fontSize: 7, color: "var(--acc)" } }, "!"));
})),  React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: "var(--t3)" } },  React.createElement("span", null, "\u25CF Accent = Win"),  React.createElement("span", null, "\u25CF Gray = Loss"),  React.createElement("span", null, "! = Mistake"),  React.createElement("span", null, "Border = mistake flag"))),  React.createElement("div", { className: "card" },  React.createElement(Label, null, "Post-Trade Feeling \u2192 Actual Outcome"),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 10, marginTop: 8 } }, Object.entries(emotAfter).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
const wr = d.n ? d.w / d.n * 100 : 0;
return  React.createElement("div", { key: e, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 11, padding: "12px 14px" } },  React.createElement(EmotionChip, { emotion: e }),  React.createElement("div", { style: { marginTop: 10, display: "flex", gap: 12 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", fontWeight: 400, letterSpacing: 0.1, marginBottom: 2 } }, "Win Rate"),  React.createElement("div", { style: { fontSize: 18, fontWeight: 600, color: wr >= 50 ? "var(--acc)" : "var(--t2)" } }, wr.toFixed(0), "%")),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", fontWeight: 400, letterSpacing: 0.1, marginBottom: 2 } }, "Count"),  React.createElement("div", { style: { fontSize: 18, fontWeight: 500 } }, d.n))));
}))));
});
function TradeLog({ trades, onAdd, onDelete, onEdit, onUpdateMeta, tradeMeta, onDuplicate, openFormTrigger, onFormOpened, usedConfluences = CONFLUENCES, usedSessions = SESSIONS, usedMistakes = MISTAKES, saveCustomList, customLists, onOpenSettings, capital: propCapital, accounts: allAccounts = [], activeAccId: defaultAccId = "" }) {
const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
const blank = { symbol: "", entryDate: ( new Date()).toISOString().slice(0, 10), entryTime: "09:00:00", side: "Long", entryPrice: "", exitPrice: "", pnl: "", profit: "", riskAmount: "", stopLoss: "", takeProfit: "", status: "Closed", grade: "", expectedRR: "1:2", actualRR: "", session: "", model: "", emotionBefore: "", emotionAfter: "", mistakes: "", confluences: [], keyLevels: [], notes: "", accountId: defaultAccId || (allAccounts[0] && allAccounts[0].id) || "manual" };
const [form, setForm] = useState(blank);
const [open, setOpen] = useState(false);
const [editingId, setEditingId] = useState(null);
const formTopRef = useRef(null);
const [symF, setSymF] = useState("All");
const [sideF, setSideF] = useState("All");
const [gradeF, setGradeF] = useState("All");
const [expandedId, setExpandedId] = useState(null);
const [screenshots, setScreenshots] = useState({});
const [lightbox, setLightbox] = useState(null);
const [sf, setF] = useState("entryDate");
const [sd, setD] = useState(-1);
const isMobile = useMediaQuery("(max-width:768px)");
const [sessF, setSessF] = useState("All");
const [modelF, setModelF] = useState("All");
const [showFilters, setShowFilters] = useState(false);
const [keyLevelModal, setKeyLevelModal] = useState(false);
const [page, setPage] = useState(1);
const [showAll, setShowAll] = useState(false);
const PAGE_SIZE = 10;
useEffect(() => {
if (openFormTrigger) {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId
: (allAccounts[0] ? allAccounts[0].id : "manual");
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(true);
onFormOpened && onFormOpened();
}
}, [openFormTrigger]);
const syms = ["All", ...new Set(trades.map((t) => t.symbol))];
const sessOpts = ["All", ...usedSessions];
const modelOpts = ["All", ...MODELS];
const inp = { border: "1.5px solid var(--border)", borderRadius: 9, padding: "8px 11px", fontSize: 12, outline: "none", background: "var(--s2)", color: "var(--text)", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };
const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer" });
const toggleSort = (f) => {
if (sf === f) setD((d) => -d);
else {
setF(f);
setD(-1);
}
};
const activeFilters = [symF, sideF, gradeF, sessF, modelF].filter((f) => f !== "All").length;
const visible = useMemo(() => [...trades].filter(
(t) => (symF === "All" || t.symbol === symF) && (sideF === "All" || t.side === sideF) && (gradeF === "All" || t.grade === gradeF) && (sessF === "All" || t.session === sessF) && (modelF === "All" || t.model === modelF)
).sort((a, b) => {
let va = a[sf], vb = b[sf];
if (["pnl", "entryPrice", "exitPrice", "profit"].includes(sf)) {
va = +va;
vb = +vb;
}
return va > vb ? sd : va < vb ? -sd : 0;
}), [trades, symF, sideF, gradeF, sessF, modelF, sf, sd]);
useEffect(() => { setPage(1); setShowAll(false); }, [symF, sideF, gradeF, sessF, modelF, sf]);
const [saving, setSaving] = useState(false);
const handleSave = useCallback(() => {
const missing = [];
if (!form.symbol || !form.symbol.trim()) missing.push("Instrument");
if (!form.entryDate) missing.push("Date");
if (!form.side) missing.push("Direction");
if (!form.entryPrice) missing.push("Entry Price");
if (!form.exitPrice && !form.profit) missing.push("Exit Price or Net P&L");
if (missing.length > 0) {
alert("Please fill required fields: " + missing.join(", "));
console.warn("[TJ] Trade save blocked — missing:", missing);
return;
}
if (saving) return;
setSaving(true);
console.log("[TJ] Saving trade:", form);
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
console.log("[TJ] Trade saved successfully.");
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId : (allAccounts[0] ? allAccounts[0].id : "manual");
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(false);
} catch(e) {
console.error("[TJ] Save error:", e);
} finally {
setSaving(false);
}
}, [form, editingId, onAdd, onEdit, saving]);
const startEdit = useCallback((t) => {
setForm({
symbol: t.symbol || "",
entryDate: t.entryDate || "",
entryTime: t.entryTime || "",
side: t.side || deriveDir(t),
entryPrice: String(t.entryPrice || ""),
exitPrice: String(t.exitPrice || ""),
pnl: "0",
profit: String(t.profit || ""),
riskAmount: String(t.riskAmount || ""),
stopLoss: String(t.stopLoss || ""),
takeProfit: String(t.takeProfit || ""),
status: t.status || "Closed",
grade: t.grade || "",
expectedRR: t.expectedRR || "1:2",
actualRR: t.actualRR || "",
session: t.session || "",
model: t.model || "",
emotionBefore: t.emotionBefore || "",
emotionAfter: t.emotionAfter || "",
mistakes: t.mistakes || "",
confluences: Array.isArray(t.confluences) ? t.confluences : [],
keyLevels: Array.isArray(t.keyLevels) ? t.keyLevels : [],
notes: t.notes || "",
accountId: t.accountId || ""
});
setEditingId(t.id);
setOpen(true);
const meta = tradeMeta[t.id] || {};
if (meta.hasScreenshot && !screenshots[t.id]) {
setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: "__loading__" }));
SDB.get(t.id).then((data) => {
if (data) setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: data }));
else setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; });
}).catch(() => setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; }));
}
setTimeout(() => { if (formTopRef.current) { formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); } else { window.scrollTo({ top: 0, behavior: "smooth" }); } }, 60);
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
setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [expandedId]: "__loading__" }));
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
const TH = ({ l, f }) =>  React.createElement("th", { onClick: () => toggleSort(f), style: { padding: "10px 12px", textAlign: "left", fontSize: 10, color: sf === f ? "var(--accD)" : "var(--t3)", fontWeight: 500, letterSpacing: 0.1, cursor: "pointer", userSelect: "none", whiteSpace: "nowrap", background: "var(--s2)", borderBottom: `2px solid ${sf === f ? "var(--acc)" : "transparent"}`, transition: "all .15s" } }, l, " ",  React.createElement("span", { style: { opacity: 0.4 } }, sf === f ? sd > 0 ? "\u2191" : "\u2193" : "\u2195"));
return  React.createElement("div", { className: "fade-up" },
React.createElement(InputModal, { open: keyLevelModal, title: "Add Key Level", subtitle: "e.g. 2345.50 resistance · support · POI · liquidity zone", placeholder: "e.g. 2345.50 resistance", onConfirm: (v) => setForm((f) => ({ ...f, keyLevels: [...(f.keyLevels || []), v] })), onClose: () => setKeyLevelModal(false) }),
lightbox &&  React.createElement("div", { onClick: () => setLightbox(null), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.96)", zIndex: 2147483647, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "zoom-out" } },  React.createElement("div", { style: { position: "relative", maxWidth: "96vw", maxHeight: "94vh" }, onClick: (e) => e.stopPropagation() },  React.createElement("img", { src: lightbox, alt: "Chart Screenshot", onLoad: (e) => { e.target.style.opacity="1"; }, onError: (e) => { e.target.style.opacity="1"; }, style: { maxWidth: "96vw", maxHeight: "90vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: 10, boxShadow: "0 40px 120px rgba(0,0,0,.9)", display: "block", opacity: 0, transition: "opacity .3s ease", background: "transparent" } }),  React.createElement("button", { onClick: () => setLightbox(null), style: { position: "absolute", top: -16, right: -16, background: "#fff", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, fontWeight: 800, boxShadow: "0 4px 16px rgba(0,0,0,.5)", color: "#111", lineHeight: 1 } }, "\u00D7"),  React.createElement("div", { style: { position: "absolute", bottom: -30, left: 0, right: 0, textAlign: "center", color: "rgba(255,255,255,.5)", fontSize: 12 } }, "Tap anywhere or \u00D7 to close"))),
React.createElement("div", { className: "hide-desktop", style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", borderRadius: 8, padding: "5px 10px", marginBottom: 8, display: "flex", alignItems: "center", gap: 5 } }, "💡 Double-tap any trade row to edit"),  React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 10, flexWrap: "wrap" } },  React.createElement("button", { onClick: () => {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId
: (allAccounts[0] ? allAccounts[0].id : "manual");
const freshBlank = __spreadProps(__spreadValues({}, blank), { accountId: defaultAcc });
if (open && !editingId) {
setForm(freshBlank);
setOpen(false);
} else {
setEditingId(null);
setForm(freshBlank);
setOpen((o) => !o);
}
}, style: { background: open ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: open ? "var(--t2)" : "#fff", border: `1.5px solid ${open ? "var(--border)" : "transparent"}`, borderRadius: 10, padding: "9px 18px", fontWeight: 700, fontSize: 12, cursor: "pointer", boxShadow: open ? "none" : "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)", flexShrink: 0, display: "flex", alignItems: "center", gap: 6 } }, open && !editingId ? "\u2715 Cancel" : "+ Log Trade"),  React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, syms.map((s) =>  React.createElement("button", { key: s, onClick: () => setSymF(s), style: { padding: "5px 13px", borderRadius: 20, border: `1.5px solid ${symF === s ? "var(--acc)" : "var(--border)"}`, background: symF === s ? "var(--accF)" : "var(--surface)", color: symF === s ? "var(--acc)" : "var(--t2)", fontWeight: symF === s ? 700 : 500, fontSize: 12, cursor: "pointer" } }, s))),  React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } }, activeFilters > 0 &&  React.createElement("button", { onClick: () => {
setSymF("All");
setSideF("All");
setGradeF("All");
setSessF("All");
setModelF("All");
}, style: { padding: "5px 11px", borderRadius: 20, border: "1.5px solid var(--rBdr)", background: "var(--rBg)", color: "var(--red)", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2715 Clear (", activeFilters, ")"),  React.createElement("button", { onClick: () => exportCSV(visible, capital), title: "Export to CSV", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--accD)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t2)";
} }, "\u2193 CSV"),  React.createElement("button", { onClick: () => exportJSON(visible), title: "Export full backup as JSON (re-importable)", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--green)";
e.currentTarget.style.color = "var(--green)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t2)";
} }, "\u2193 JSON"),  React.createElement("button", { onClick: () => exportTradePDF(visible, capital), title: "Export to PDF", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--purple)";
e.currentTarget.style.color = "var(--purple)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t2)";
} }, "\u2193 PDF"),  React.createElement("button", { onClick: () => setShowFilters((f) => !f), style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${showFilters ? "var(--acc)" : "var(--border)"}`, background: showFilters ? "var(--accF)" : "var(--surface)", color: showFilters ? "var(--accD)" : "var(--t2)", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 } },  React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" },  React.createElement("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })), "Filters", activeFilters > 0 ? ` (${activeFilters})` : ""))), showFilters &&  React.createElement("div", { style: { background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start", width: "100%", boxSizing: "border-box" } },  React.createElement("div", { style: { flex: "0 0 auto" } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Side"),  React.createElement("div", { style: { display: "flex", gap: 4 } }, ["All", "Long", "Short"].map((s) =>  React.createElement("button", { key: s, onClick: () => setSideF(s), style: { padding: "4px 12px", borderRadius: 20, border: `1.5px solid ${sideF === s ? "var(--acc)" : "var(--border)"}`, background: sideF === s ? "var(--accF)" : "var(--surface)", color: sideF === s ? "var(--accD)" : "var(--t2)", fontWeight: sideF === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)))),  React.createElement("div", { style: { flex: "0 0 auto" } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Grade"),  React.createElement("div", { style: { display: "flex", gap: 4 } }, ["All", ...GRADES].map((g) =>  React.createElement("button", { key: g, onClick: () => setGradeF(g), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${gradeF === g ? "var(--acc)" : "var(--border)"}`, background: gradeF === g ? "var(--accF)" : "var(--surface)", color: gradeF === g ? "var(--accD)" : "var(--t2)", fontWeight: gradeF === g ? 700 : 500, fontSize: 11, cursor: "pointer" } }, g)))),  React.createElement("div", { style: { flex: "1 1 160px", minWidth: 0, maxWidth: "100%" } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Session"),  React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, sessOpts.map((s) =>  React.createElement("button", { key: s, onClick: () => setSessF(s), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${sessF === s ? "var(--acc)" : "var(--border)"}`, background: sessF === s ? "var(--accF)" : "var(--surface)", color: sessF === s ? "var(--accD)" : "var(--t2)", fontWeight: sessF === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)))),  React.createElement("div", { style: { flex: "1 1 200px", minWidth: 0, maxWidth: "100%" } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Model"),  React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, modelOpts.map((m) =>  React.createElement("button", { key: m, onClick: () => setModelF(m), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${modelF === m ? "var(--acc)" : "var(--border)"}`, background: modelF === m ? "var(--accF)" : "var(--surface)", color: modelF === m ? "var(--accD)" : "var(--t2)", fontWeight: modelF === m ? 700 : 500, fontSize: 11, cursor: "pointer" } }, m))))), open &&  React.createElement("div", { ref: formTopRef, className: "card scale-in", style: { marginBottom: 16, border: editingId ? "2px solid var(--acc)" : "1px solid var(--border)" } },  React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 } },  React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, editingId ? "\u{1F527} Edit Trade" : "\u{1F4CA} Log New Trade"),  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, allAccounts.length > 0 && !editingId &&  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" } }, "Account"),  React.createElement("select", { value: form.accountId || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { accountId: e.target.value })), style: { border: "1.5px solid var(--acc)", borderRadius: 8, padding: "5px 10px", fontSize: 12, fontWeight: 700, outline: "none", background: "var(--accF)", color: "var(--accD)", cursor: "pointer", fontFamily: "inherit", maxWidth: 160 } }, allAccounts.map((a) =>  React.createElement("option", { key: a.id, value: a.id }, a.label)))),  React.createElement("button", { type: "button", onClick: () => onOpenSettings("lists"), style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, cursor: "pointer", fontWeight: 600, padding: "4px 10px" } }, "\u{1F4DD} Manage Lists"))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Price & P&L"),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 10 } }, [
["Instrument", "symbol", "text", "e.g. XAUUSD"],
["Date", "entryDate", "date", null],
["Entry Time", "entryTime", "time", null],
["Direction", "side", "select", null]
].map(([l, k, t, ph]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, l), t === "select" ?  React.createElement("select", { value: form[k], onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: sel },  React.createElement("option", null, "Long"),  React.createElement("option", null, "Short")) : t === "date" ?  React.createElement(CustomDatePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: "100%" } }) : t === "time" ?  React.createElement(CustomTimePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: "100%" } }) :  React.createElement("input", { type: t, step: t === "number" ? ".01" : void 0, placeholder: ph || void 0, value: form[k] || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp })))),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3,1fr)", gap: 10, marginTop: 10 } }, [
["Entry Price ($)", "entryPrice", "number", "e.g. 2150.00"],
["Exit Price ($)", "exitPrice", "number", "e.g. 2165.00 (optional)"],
["Net P&L ($)", "profit", "number", "e.g. 85.00 or -42.50"]
].map(([l, k, t, ph]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, l),  React.createElement("input", { type: t, step: ".01", placeholder: ph || void 0, value: form[k] || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Trade Details"),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 10 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Grade"),  React.createElement("select", { value: form.grade, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Grade "), GRADES.map((g) =>  React.createElement("option", { key: g }, g)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Target RR"),  React.createElement("select", { value: form.expectedRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) =>  React.createElement("option", { key: r }, r)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Actual RR"),  React.createElement("input", { placeholder: "e.g. 1:2.5 (Optional)", value: form.actualRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { actualRR: e.target.value })), style: inp })),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Session"),  React.createElement("select", { value: form.session, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Session "), usedSessions.map((s) =>  React.createElement("option", { key: s }, s)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Strategy"),  React.createElement("select", { value: form.model, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Strategy "), MODELS.map((m) =>  React.createElement("option", { key: m }, m)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Risk ($)"),  React.createElement("input", { type: "number", step: ".01", placeholder: "Risk $ (Optional)", value: form.riskAmount || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { riskAmount: e.target.value })), style: inp })))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Psychology"),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 10 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mindset Before"),  React.createElement("select", { value: form.emotionBefore, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionBefore: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Mindset "), EMOTIONS_B.map((e) =>  React.createElement("option", { key: e }, e)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mindset After"),  React.createElement("select", { value: form.emotionAfter, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionAfter: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Mindset "), EMOTIONS_A.map((e) =>  React.createElement("option", { key: e }, e)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mistake"),  React.createElement("select", { value: form.mistakes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel },  React.createElement("option", { value: "" }, "Mistake "), usedMistakes.map((m) =>  React.createElement("option", { key: m }, m)))))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.04 } }, "Confluences \u2014 Select All That Apply"),  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, usedConfluences.map((c) =>  React.createElement("button", { key: c, type: "button", onClick: () => toggleConfluence(c), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${form.confluences.includes(c) ? "var(--acc)" : "var(--border)"}`, background: form.confluences.includes(c) ? "var(--accF)" : "var(--surface)", color: form.confluences.includes(c) ? "var(--accD)" : "var(--t2)", fontSize: 11, fontWeight: form.confluences.includes(c) ? 700 : 400, cursor: "pointer", fontFamily: "inherit" } }, form.confluences.includes(c) ? "\u2713 " : "", c)))),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: 0.04 } }, "Key Levels"),  React.createElement("button", { type: "button", onClick: () => onOpenSettings && onOpenSettings("lists"), style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 6, cursor: "pointer", fontWeight: 600, padding: "3px 8px" } }, "\u2699\uFE0F Presets")),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
(customLists && customLists.keyLevels && customLists.keyLevels.length > 0) &&  React.createElement("div", null,
React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Saved Presets \u2014 click to toggle"),
React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } },
(customLists.keyLevels || []).map((kl, ki) => {
const isSelected = (form.keyLevels || []).includes(kl);
return  React.createElement("button", {
key: ki, type: "button",
onClick: () => setForm((f) => ({ ...f, keyLevels: isSelected ? (f.keyLevels||[]).filter(x => x!==kl) : [...(f.keyLevels||[]), kl] })),
style: { padding: "3px 11px", borderRadius: 20, border: "1.5px solid " + (isSelected ? "var(--blue)" : "var(--border)"), background: isSelected ? "var(--bBg)" : "var(--surface)", color: isSelected ? "var(--blue)" : "var(--t2)", fontSize: 11, fontWeight: isSelected ? 700 : 500, cursor: "pointer", transition: "all .15s", fontFamily: "inherit" }
}, isSelected ? "\u2713 " : "", kl);
})
)
),
React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } },
(form.keyLevels || []).length > 0
? (form.keyLevels || []).map((kl, ki) =>  React.createElement("div", { key: ki, style: { display: "flex", alignItems: "center", background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 20, overflow: "hidden" } },
React.createElement("span", { style: { fontSize: 11, fontWeight: 600, padding: "3px 10px", color: "var(--blue)" } }, kl),
React.createElement("button", { type: "button", onClick: () => setForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: "none", border: "none", borderLeft: "1px solid var(--bBdr)", color: "var(--t3)", cursor: "pointer", fontSize: 12, padding: "3px 7px", lineHeight: 1 } }, "\u00D7")
))
:  React.createElement("span", { style: { fontSize: 11, color: "var(--t3)" } }, "No key levels selected \u2014 use presets above or add in Settings \u2192 Lists")
)
)),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Trade Rationale & Notes"),  React.createElement("textarea", { value: form.notes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), placeholder: "Notes (Optional) — entry trigger, execution quality, key lessons...", style: { width: "100%", minHeight: 80, border: "1.5px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "var(--text)", background: "var(--s2)", resize: "vertical", outline: "none", lineHeight: 1.7, fontFamily: "inherit" } })),
editingId &&  React.createElement("div", { style: { marginBottom: 14 } },
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.04, display: "flex", alignItems: "center", gap: 6 } },
React.createElement("span", null, "\uD83D\uDCF8 Chart Screenshot"),
(tradeMeta[editingId] || {}).hasScreenshot &&  React.createElement("span", { style: { background: "var(--gBg)", border: "1px solid var(--gBdr)", color: "var(--green)", borderRadius: 20, padding: "1px 7px", fontSize: 9, fontWeight: 700 } }, "\u2713 Saved")
),
screenshots[editingId] === "__loading__"
?  React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 100, background: "var(--s2)", borderRadius: 10, border: "1.5px solid var(--border)", color: "var(--t3)", fontSize: 12 } }, "Loading\u2026")
: screenshots[editingId]
?  React.createElement("div", { style: { position: "relative" } },
React.createElement("img", { src: screenshots[editingId], alt: "Chart screenshot", onClick: () => setLightbox(screenshots[editingId]), style: { width: "100%", maxHeight: 240, objectFit: "contain", borderRadius: 10, border: "1px solid var(--border)", display: "block", background: "#111", cursor: "zoom-in" } }),
React.createElement("div", { style: { position: "absolute", top: 6, right: 6, display: "flex", gap: 5 } },
React.createElement("label", { style: { background: "rgba(15,23,42,.75)", color: "#fff", borderRadius: 7, padding: "4px 10px", fontSize: 10, cursor: "pointer", fontWeight: 600, backdropFilter: "blur(4px)" } },
"\u21BA Replace",
React.createElement("input", { type: "file", accept: "image React.createElement("button", { onClick: () => handleRemoveShot(editingId), style: { background: "rgba(220,38,38,.8)", color: "#fff", border: "none", borderRadius: 7, padding: "4px 8px", fontSize: 10, cursor: "pointer", fontWeight: 600 } }, "\u2715 Remove")
),
React.createElement("div", { style: { position: "absolute", bottom: 6, left: 6, background: "rgba(0,0,0,.6)", color: "#fff", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 600, backdropFilter: "blur(4px)", pointerEvents: "none" } }, "\uD83D\uDD0D Click to zoom")
)
:  React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, border: "2px dashed var(--border2)", borderRadius: 10, minHeight: 110, cursor: "pointer", background: "var(--s2)", transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.background = "var(--accF)"; },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--s2)"; }
},
React.createElement("span", { style: { fontSize: 26 } }, "\uD83D\uDCF8"),
React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Upload chart screenshot"),
React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", opacity: 0.7 } }, "PNG, JPG, WebP \u2014 stored locally"),
React.createElement("input", { type: "file", accept: "image React.createElement("div", { style: { display: "flex", gap: 8 } },  React.createElement("button", { onClick: handleSave, disabled: saving, style: { background: saving ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: saving ? "var(--t3)" : "#fff", border: "none", borderRadius: 10, padding: "10px 26px", fontWeight: 700, fontSize: 13, cursor: saving ? "not-allowed" : "pointer", boxShadow: saving ? "none" : "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)", opacity: saving ? 0.7 : 1 } }, saving ? "Saving…" : editingId ? "\u2713 Save Changes" : "\u2713 Log Trade"), editingId &&  React.createElement("button", { onClick: () => {
const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
? defaultAccId : (allAccounts[0] ? allAccounts[0].id : "manual");
setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
setEditingId(null);
setOpen(false);
}, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 18px", fontWeight: 600, fontSize: 13, cursor: "pointer" } }, "Cancel"))),  React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--sh2)" } },  React.createElement("div", { className: "tlog-table-wrap", style: { overflowX: "auto" } },  React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 11.5, minWidth: 680, tableLayout: "auto" } },  React.createElement("thead", null,  React.createElement("tr", { style: { borderBottom: "1px solid var(--border)" } },  React.createElement(TH, { l: "Symbol", f: "symbol" }),  React.createElement(TH, { l: "Date", f: "entryDate" }), !isMobile &&  React.createElement(TH, { l: "Time", f: "entryTime" }),  React.createElement(TH, { l: "Side", f: "side" }),  React.createElement(TH, { l: "Session", f: "session" }), !isMobile &&  React.createElement(TH, { l: "Model", f: "model" }),  React.createElement(TH, { l: "Grade", f: "grade" }),  React.createElement(TH, { l: "Entry", f: "entryPrice" }),  React.createElement(TH, { l: "Exit", f: "exitPrice" }),  React.createElement(TH, { l: "P&L%", f: "pnl" }),  React.createElement(TH, { l: "Exp.RR", f: "expectedRR" }), !isMobile &&  React.createElement(TH, { l: "Emotion", f: "emotionBefore" }),  React.createElement("th", { style: { padding: "10px 12px", background: "var(--s2)", fontSize: 10, color: "var(--t3)", fontWeight: 500 } }, "Actions"))),  React.createElement("tbody", null, !visible.length &&  React.createElement("tr", null,  React.createElement("td", { colSpan: 13, style: { padding: 40, textAlign: "center", color: "var(--t3)", fontSize: 13 } }, trades.length === 0 ?  React.createElement("span", null, "No trades logged yet \u2014 press ",  React.createElement("kbd", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 4, padding: "0 5px", fontSize: 11, fontFamily: "monospace" } }, "N"), " to log your first trade") : "No trades match your current filters \u2014 try adjusting or clearing them")), (showAll ? visible : visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)).map((t, i) => {
var _a;
const dir = deriveDir(t);
const meta = tradeMeta[t.id] || {};
const isExp = expandedId === t.id;
const hasMistake = t.mistakes && t.mistakes !== "None";
const rowBg = i % 2 === 0 ? "var(--surface)" : "var(--s2)";
return  React.createElement(React.Fragment, { key: t.id },  React.createElement(
"tr",
{
style: { background: rowBg, borderBottom: isExp ? "none" : `1px solid var(--border)`, cursor: "pointer", transition: "background .1s" },
onClick: () => setExpandedId(isExp ? null : t.id),
onDoubleClick: () => { setExpandedId(null); startEdit(t); },
title: "Double-tap to edit",
onMouseEnter: (e) => {
e.currentTarget.style.background = "var(--s3)";
e.currentTarget.style.boxShadow = `inset 3px 0 0 var(--acc)`;
},
onMouseLeave: (e) => {
e.currentTarget.style.background = rowBg;
e.currentTarget.style.boxShadow = "none";
}
},
React.createElement("td", { style: { padding: "10px 12px", fontWeight: 700, maxWidth: 110, overflow: "hidden" } },  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" } }, t.symbol)),
React.createElement("td", { style: { padding: "10px 12px", color: "var(--t2)", fontFamily: "JetBrains Mono,monospace", fontSize: 11 } }, t.entryDate),
!isMobile &&  React.createElement("td", { style: { padding: "10px 12px", color: "var(--t3)", fontFamily: "JetBrains Mono,monospace", fontSize: 11 } }, t.entryTime),
React.createElement("td", { style: { padding: "10px 12px" } },  React.createElement(Chip, { color: dir === "Long" ? "truegreen" : "red", size: "sm" }, dir === "Long" ? "\u2191" : "\u2193", " ", dir)),
React.createElement("td", { style: { padding: "10px 12px" } },  React.createElement(SessionChip, { session: t.session })),
!isMobile &&  React.createElement("td", { style: { padding: "10px 12px", fontSize: 11, color: "var(--t2)", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, ((_a = t.model) == null ? void 0 : _a.split(" ")[0]) || "\u2014"),
React.createElement("td", { style: { padding: "10px 12px" } },  React.createElement(GradeChip, { grade: t.grade })),
React.createElement("td", { style: { padding: "10px 12px", fontFamily: "JetBrains Mono,monospace", fontSize: 11, color: "var(--t2)" } }, fmtPrice(t.entryPrice)),
React.createElement("td", { style: { padding: "10px 12px", fontFamily: "JetBrains Mono,monospace", fontSize: 11, color: "var(--t2)" } }, fmtPrice(t.exitPrice || 0)),
React.createElement("td", { style: { padding: "10px 12px" } },  React.createElement("div", { style: { lineHeight: 1.3 } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--red)" } }, t.profit != null && t.profit !== 0 ? (t.profit >= 0 ? "+$" : "-$") + Math.abs(t.profit).toFixed(2) : "\u2014"), t.profit != null && t.profit !== 0 &&  React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 500 } }, calcPnL(t.profit, capital) >= 0 ? "+" : "", calcPnL(t.profit, capital).toFixed(2), "%"))),
React.createElement("td", { style: { padding: "10px 12px", fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, t.expectedRR || "\u2014"),
!isMobile &&  React.createElement("td", { style: { padding: "10px 12px" } },  React.createElement(EmotionChip, { emotion: t.emotionBefore })),
React.createElement("td", { style: { padding: "6px 8px", whiteSpace: "nowrap" }, onClick: (e) => e.stopPropagation() },  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3, alignItems: "center" } },
React.createElement("button", { title: "Edit trade", onClick: () => startEdit(t),
style: { background: "var(--s2)", border: "1px solid var(--border)", color: "var(--t2)", cursor: "pointer", width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.background = "var(--accF)"; e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
},
React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
React.createElement("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
React.createElement("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
)
),
React.createElement("button", { title: "Delete trade", onClick: () => onDelete(t.id),
style: { background: "var(--s2)", border: "1px solid var(--border)", color: "var(--t2)", cursor: "pointer", width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.background = "var(--rBg)"; e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; },
onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
},
React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
React.createElement("polyline", { points: "3 6 5 6 21 6" }),
React.createElement("path", { d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" }),
React.createElement("path", { d: "M10 11v6" }),
React.createElement("path", { d: "M14 11v6" }),
React.createElement("path", { d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" })
)
)
))
), isExp &&  React.createElement("tr", { style: { background: rowBg, borderBottom: `1px solid var(--border)` } },  React.createElement("td", { colSpan: 13, style: { padding: "0 16px 16px", borderTop: "1px solid var(--border)" } },  React.createElement("div", { style: { paddingTop: 14, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, minWidth: 0, overflow: "hidden" } },  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, minWidth: 0, overflow: "hidden" } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Confluences Used"),  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, (t.confluences || []).length > 0 ? t.confluences.map((c) =>  React.createElement(Chip, { key: c, color: "gold", size: "sm" }, c)) :  React.createElement("span", { style: { color: "var(--t3)", fontSize: 12 } }, "No confluences recorded"))),  React.createElement("div", { style: { marginBottom: 8 } },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Key Levels"),  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, (t.keyLevels || []).length > 0 ? (t.keyLevels || []).map((kl, ki) =>  React.createElement("span", { key: ki, style: { background: "var(--bBg)", border: "1px solid var(--bBdr)", color: "var(--blue)", borderRadius: 20, padding: "2px 10px", fontSize: 10.5, fontWeight: 600 } }, kl)) :  React.createElement("span", { style: { color: "var(--t3)", fontSize: 11 } }, "None"))),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 } }, [["Mindset Before", t.emotionBefore || "\u2014"], ["Mindset After", t.emotionAfter || "\u2014"], ["Mistake", t.mistakes || "None"]].map(([l, v]) =>  React.createElement("div", { key: l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } },  React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, l),  React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: v === "None" ? "var(--green)" : (v == null ? void 0 : v.includes("FOMO")) || (v == null ? void 0 : v.includes("Revenge")) || (v == null ? void 0 : v.includes("Angry")) ? "var(--red)" : "var(--text)" } }, v)))),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, [["Target RR", t.expectedRR || "\u2014"], ["Actual RR", t.actualRR || "\u2014"]].map(([l, v]) =>  React.createElement("div", { key: l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } },  React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, l),  React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text)", fontFamily: "JetBrains Mono,monospace" } }, v)))), (t.riskAmount > 0 || t.stopLoss > 0) &&  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, t.riskAmount > 0 &&  React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 9, padding: "10px 12px" } },  React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, "Risk Amount"),  React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--red)" } }, "$", t.riskAmount.toFixed(2))), t.riskAmount > 0 && t.profit &&  React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } },  React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, "R-Multiple"),  React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--red)" } }, (t.profit / t.riskAmount).toFixed(2), "R"))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Trade Rationale & Notes"),  React.createElement("textarea", { value: meta.notes || t.notes || "", onChange: (e) => onUpdateMeta(t.id, { notes: e.target.value }), onClick: (e) => e.stopPropagation(), placeholder: "Entry trigger, execution quality, key lessons learned, what you'd do differently...", style: { width: "100%", minHeight: 80, border: "1.5px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "var(--text)", background: "var(--surface)", resize: "vertical", outline: "none", lineHeight: 1.7, fontFamily: "inherit" } }))),  React.createElement("div", { style: { minWidth: 0, overflow: "hidden" } },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 500, color: "var(--t3)", marginBottom: 6 } }, "Chart Screenshot"), screenshots[t.id] === "__loading__" ?  React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 120, background: "var(--surface)", borderRadius: 10, border: "1.5px solid var(--border)", color: "var(--t3)", fontSize: 12 } }, "Loading\\u2026") : screenshots[t.id] ?  React.createElement("div", { style: { position: "relative", cursor: "zoom-in" }, onClick: () => setLightbox(screenshots[t.id]) },  React.createElement("img", { src: screenshots[t.id], alt: "Chart", style: { width: "100%", maxHeight: 220, objectFit: "contain", borderRadius: 10, border: "1px solid var(--border)", display: "block", background: "#111" } }),  React.createElement("div", { style: { position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,.65)", color: "#fff", borderRadius: 7, padding: "4px 10px", fontSize: 11, fontWeight: 700, backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: 5, pointerEvents: "none" } }, "\uD83D\uDD0D Tap to zoom"),  React.createElement("div", { style: { position: "absolute", top: 6, right: 6, display: "flex", gap: 5 }, onClick: (e) => e.stopPropagation() },  React.createElement("label", { style: { background: "rgba(15,23,42,.7)", color: "#fff", border: "none", borderRadius: 7, padding: "4px 10px", fontSize: 10, cursor: "pointer", fontWeight: 600, backdropFilter: "blur(4px)" } }, "\u21BA Replace",  React.createElement("input", { type: "file", accept: "image React.createElement("button", { onClick: (e) => {
e.stopPropagation();
handleRemoveShot(t.id);
}, style: { background: "rgba(220,38,38,.8)", color: "#fff", border: "none", borderRadius: 7, padding: "4px 8px", fontSize: 10, cursor: "pointer", fontWeight: 600 } }, "\u2715"))) :  React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, border: "2px dashed var(--border2)", borderRadius: 10, minHeight: 120, cursor: "pointer", background: "var(--s2)", transition: "all .15s" }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.background = "var(--accF)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border2)";
e.currentTarget.style.background = "var(--s2)";
} },  React.createElement("span", { style: { fontSize: 24 } }, "\u{1F4F8}"),  React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Upload chart screenshot"),  React.createElement("input", { type: "file", accept: "image React.createElement("div", { style: { padding: "10px 16px", background: "var(--s2)", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 } }, React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" } },   React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t3)" } }, showAll ? visible.length : Math.min(page * PAGE_SIZE, visible.length), " of ", visible.length, " trades"),  !showAll && visible.length > PAGE_SIZE &&  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 3 } },     React.createElement("button", { onClick: () => setPage(p => Math.max(1, p - 1)), disabled: page === 1, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, cursor: page === 1 ? "default" : "pointer", fontSize: 14, color: page === 1 ? "var(--t3)" : "var(--t2)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === 1 ? 0.4 : 1 } }, "\u2039"),     React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t2)", padding: "0 6px", minWidth: 70, textAlign: "center" } }, "Page ", page, " / ", Math.ceil(visible.length / PAGE_SIZE)),     React.createElement("button", { onClick: () => setPage(p => Math.min(Math.ceil(visible.length / PAGE_SIZE), p + 1)), disabled: page >= Math.ceil(visible.length / PAGE_SIZE), style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, cursor: page >= Math.ceil(visible.length / PAGE_SIZE) ? "default" : "pointer", fontSize: 14, color: page >= Math.ceil(visible.length / PAGE_SIZE) ? "var(--t3)" : "var(--t2)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", opacity: page >= Math.ceil(visible.length / PAGE_SIZE) ? 0.4 : 1 } }, "\u203a")  )), React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },   React.createElement("span", { style: { fontSize: 11, color: "var(--t3)" } }, "P&L: ",  React.createElement("strong", { style: { color: visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100>=0?"var(--accD)":"var(--t2)" } }, fmtPct(visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100))),   React.createElement("button", { onClick: () => { setShowAll(v => !v); setPage(1); }, style: { fontSize: 11, fontWeight: 700, color: showAll ? "var(--accD)" : "var(--t3)", background: showAll ? "var(--accF)" : "var(--s3)", border: `1px solid ${showAll ? "color-mix(in srgb, var(--acc) 40%, transparent)" : "var(--border)"}`, borderRadius: 8, padding: "4px 12px", cursor: "pointer", whiteSpace: "nowrap" } }, showAll ? "Paginate" : "See All"))))
);
}
const CalendarView = memo(function CalendarView2({ trades, onDayClick, capital: propCapital }) {
const [month, setMonth] = useState(( new Date()).getMonth());
const [year, setYear] = useState(( new Date()).getFullYear());
const [mode, setMode] = useState("usd");
const [calView, setCalView] = useState("monthly");
const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
const MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MNS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DOWS = ["S","M","T","W","T","F","S"];
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
return  React.createElement("div", null,
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" } },
React.createElement("button", { onClick: ()=>setYear(y=>y-1), style: { background:"var(--surface)", border:"1px solid var(--border)", borderRadius:10, width:34, height:34, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)";e.currentTarget.style.color="var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--t2)";} }, "\u2039"),
React.createElement("select", { value: year, onChange: e=>setYear(+e.target.value), style: { border:"1px solid var(--border)", borderRadius:10, padding:"6px 14px", fontSize:15, fontWeight:800, background:"var(--surface)", cursor:"pointer", outline:"none", color:"var(--text)" } }, [2023,2024,2025,2026,2027].map(y=> React.createElement("option",{key:y},y))),
React.createElement("button", { onClick: ()=>setYear(y=>y+1), style: { background:"var(--surface)", border:"1px solid var(--border)", borderRadius:10, width:34, height:34, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)";e.currentTarget.style.color="var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--t2)";} }, "\u203A"),
React.createElement("div", { style: { display:"flex", border:"1.5px solid var(--border)", borderRadius:10, overflow:"hidden" } },
React.createElement("button", { onClick:()=>setMode("pct"), style:{ padding:"6px 18px", fontSize:12, fontWeight:700, background:mode==="pct"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:mode==="pct"?"#fff":"var(--t3)", border:"none", cursor:"pointer" } }, "%"),
React.createElement("button", { onClick:()=>setMode("usd"), style:{ padding:"6px 18px", fontSize:12, fontWeight:700, background:mode==="usd"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:mode==="usd"?"#fff":"var(--t3)", border:"none", cursor:"pointer" } }, "$")
),
React.createElement("div", { style:{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" } },
yCount>0 &&  React.createElement(Chip,{color:"gray"},yCount," trades"),
React.createElement("div", { style:{ background:yProfit>=0?"var(--accF)":"var(--s3)", border:`1px solid ${yProfit>=0?"color-mix(in srgb, var(--acc) 30%, transparent)":"var(--border)"}`, borderRadius:9, padding:"5px 14px" } },
React.createElement("span", { style:{ fontSize:13, fontWeight:700, color:yProfit>=0?"var(--accD)":"var(--t2)" } }, "Year: ", fmt(yProfit,yPnl))
)
)
),
React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 } },
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
const dk2 = (d)=>`${year}-${String(mi+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
return  React.createElement("div", { key:mi, style:{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:14, padding:"14px 12px", display:"flex", flexDirection:"column", gap:8 } },
React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:2 } },
React.createElement("div", { style:{ fontSize:12, fontWeight:800, color:"var(--text)", letterSpacing:"-.01em" } }, MNS[mi]),
mC>0 &&  React.createElement("div", { style:{ fontSize:11, fontWeight:700, color:mP>=0?"var(--accD)":"var(--t2)", background:mP>=0?"var(--accF)":"var(--s3)", border:`1px solid ${mP>=0?"color-mix(in srgb, var(--acc) 25%, transparent)":"var(--border)"}`, borderRadius:7, padding:"2px 8px" } }, fmt(mP,mPct2))
),
React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:1.5, marginBottom:2 } },
DOWS.map((d,i)=> React.createElement("div",{key:i,style:{textAlign:"center",fontSize:7.5,color:"var(--t3)",fontWeight:600,padding:"1px 0"}},d))
),
mWeeks.map((week,wi)=> React.createElement("div",{key:wi,style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1.5}},
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
const bg=!has?"var(--surface)":p>=0?`color-mix(in srgb, var(--acc) ${Math.round((0.1+intensity*0.28)*100)}%, var(--surface))`:`rgba(148,163,184,${0.12+intensity*0.22})`;
const bdr=!has?"var(--border)":p>=0?"color-mix(in srgb, var(--acc) 30%, transparent)":"var(--border2)";
return  React.createElement("div",{
key:dKey,
title:`${dKey}${has?` · ${data.count} trade${data.count!==1?"s":""} · ${fmt(p,pct)}`:""}`,
onClick:()=>{ has && onDayClick(dKey); },
style:{ background:bg, border:`1px solid ${isToday?"var(--indigo)":bdr}`, borderRadius:4, minHeight:20, cursor:has?"pointer":"default", transition:"transform .1s,box-shadow .1s", boxShadow:isToday?"0 0 0 1px var(--indigo)":"none", display:"flex", alignItems:"center", justifyContent:"center" },
onMouseEnter:e=>{ if(has){e.currentTarget.style.transform="scale(1.15)";e.currentTarget.style.boxShadow="var(--sh2)";e.currentTarget.style.zIndex="2";} },
onMouseLeave:e=>{ e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=isToday?"0 0 0 1px var(--indigo)":"none";e.currentTarget.style.zIndex=""; }
},
React.createElement("span",{style:{fontSize:7,fontWeight:isToday?900:600,color:isToday?"var(--indigo)":has?p>=0?"var(--accD)":"var(--t2)":"var(--t3)",lineHeight:1}},d)
);
})
))
);
})
)
);
};
return  React.createElement("div", { className: "fade-up" },
React.createElement("div", { style: { display:"flex", alignItems:"center", gap:8, marginBottom:20 } },
React.createElement("div", { style:{ display:"flex", border:"1.5px solid var(--border)", borderRadius:10, overflow:"hidden" } },
React.createElement("button", { onClick:()=>setCalView("monthly"), style:{ padding:"7px 18px", fontSize:12, fontWeight:700, background:calView==="monthly"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:calView==="monthly"?"#fff":"var(--t3)", border:"none", cursor:"pointer", whiteSpace:"nowrap" } }, "Monthly"),
React.createElement("button", { onClick:()=>setCalView("yearly"), style:{ padding:"7px 18px", fontSize:12, fontWeight:700, background:calView==="yearly"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:calView==="yearly"?"#fff":"var(--t3)", border:"none", cursor:"pointer", whiteSpace:"nowrap" } }, "Yearly")
)
),
calView==="yearly" &&  React.createElement(YearlyCalendar, null),
calView==="monthly" &&  React.createElement("div", null,
React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" } },  React.createElement("button", { onClick: () => {
if (month === 0) {
setMonth(11);
setYear((y) => y - 1);
} else setMonth((m) => m - 1);
}, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, width: 34, height: 34, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)" }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--acc)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t2)";
} }, "\u2039"),  React.createElement("select", { value: month, onChange: (e) => setMonth(+e.target.value), style: { border: "1px solid var(--border)", borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 700, background: "var(--surface)", cursor: "pointer", outline: "none", color: "var(--text)" } }, MN.map((m, i) =>  React.createElement("option", { key: i, value: i }, m))),  React.createElement("select", { value: year, onChange: (e) => setYear(+e.target.value), style: { border: "1px solid var(--border)", borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 700, background: "var(--surface)", cursor: "pointer", outline: "none", color: "var(--text)" } }, [2024, 2025, 2026, 2027].map((y) =>  React.createElement("option", { key: y }, y))),  React.createElement("button", { onClick: () => {
if (month === 11) {
setMonth(0);
setYear((y) => y + 1);
} else setMonth((m) => m + 1);
}, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, width: 34, height: 34, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)" }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--acc)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t2)";
} }, "\u203A"),  React.createElement("div", { style: { display: "flex", border: "1.5px solid var(--border)", borderRadius: 10, overflow: "hidden" } },  React.createElement("button", { onClick: () => setMode("pct"), style: { padding: "6px 18px", fontSize: 12, fontWeight: 700, background: mode === "pct" ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--surface)", color: mode === "pct" ? "#fff" : "var(--t3)", border: "none", cursor: "pointer" } }, "%"),  React.createElement("button", { onClick: () => setMode("usd"), style: { padding: "6px 18px", fontSize: 12, fontWeight: 700, background: mode === "usd" ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--surface)", color: mode === "usd" ? "#fff" : "var(--t3)", border: "none", cursor: "pointer" } }, "$")),  React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" } }, mCount > 0 &&  React.createElement(Chip, { color: "gray" }, mCount, " trades"),  React.createElement("div", { style: { background: mProfit >= 0 ? "var(--accF)" : "var(--s3)", border: `1px solid ${mProfit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border)"}`, borderRadius: 9, padding: "5px 14px" } },  React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: mProfit >= 0 ? "var(--accD)" : "var(--t2)" } }, "Total: ", fmt(mProfit, mPnl))))),  React.createElement("div", { style: { overflowX: "auto" } },  React.createElement("div", { style: { minWidth: 600 } },  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 90px", gap: 4, marginBottom: 4 } }, DOW.map((d) =>  React.createElement("div", { key: d, style: { textAlign: "center", fontSize: 9.5, color: "var(--t3)", fontWeight: 400, padding: "5px 0" } }, d)),  React.createElement("div", { style: { textAlign: "center", fontSize: 9.5, color: "var(--t3)", fontWeight: 400, padding: "5px 0" } }, "WEEK")), weeks.map((week, wi) =>  React.createElement("div", { key: wi, style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 90px", gap: 4, marginBottom: 4 } }, [...Array(7)].map((_, ci) => {
const d = week[ci];
if (!d) return  React.createElement("div", { key: `e${ci}`, style: { borderRadius: 12, minHeight: 80 } });
const dateKey = dk(d);
const data = byDate[dateKey];
const p = (data == null ? void 0 : data.profit) || 0;
const pct = (data == null ? void 0 : data.pnl) || 0;
const has = !!data;
const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
const bg = !has ? "var(--surface)" : p >= 0 ? `color-mix(in srgb, var(--acc) ${Math.round((0.07 + intensity * 0.22) * 100)}%, var(--surface))` : `rgba(148,163,184,${0.1 + intensity * 0.2})`;
const bdr = !has ? "var(--border)" : p >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)";
const isToday = dateKey === todayStr;
return  React.createElement(
"div",
{
key: dateKey,
className: "cal-cell",
onClick: (e) => { e.currentTarget.blur(); has && onDayClick(dateKey); }, tabIndex: -1,
style: { background: bg, border: `1.5px solid ${isToday ? "var(--indigo)" : bdr}`, borderRadius: 12, padding: "8px 10px", minHeight: 80, cursor: has ? "pointer" : "default", transition: "transform .12s,box-shadow .12s", boxShadow: isToday ? "0 0 0 1px var(--indigo)" : "none" },
onMouseEnter: (e) => {
if (has) {
e.currentTarget.style.transform = "translateY(-2px)";
e.currentTarget.style.boxShadow = "var(--sh2)";
}
},
onMouseLeave: (e) => {
e.currentTarget.style.transform = "";
e.currentTarget.style.boxShadow = isToday ? "0 0 0 1px var(--indigo)" : "none";
}
},
React.createElement("div", { className: "cal-day-num", style: { fontSize: 11, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : "var(--t3)", marginBottom: 4, textShadow: "none" } }, d),
has &&  React.createElement(React.Fragment, null,  React.createElement("div", { className: "cal-day-pnl", style: { fontSize: 13, fontWeight: 700, color: p >= 0 ? "var(--accD)" : "var(--t2)", lineHeight: 1.1, letterSpacing: "-.5px", textShadow: "none" } }, fmt(p, pct)),  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", marginTop: 4, fontWeight: 600, textShadow: "none" } }, data.count, " ", data.count === 1 ? "trade" : "trades"))
);
}),  React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "rgba(148,163,184,.15)" : "var(--s2)", border: `1.5px solid ${weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)" : "var(--border)"}`, borderRadius: 12, padding: "8px", minHeight: 80, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3 } }, weekStats[wi].count > 0 &&  React.createElement(React.Fragment, null,  React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: weekStats[wi].profit >= 0 ? "var(--accD)" : "var(--t2)", textAlign: "center" } }, fmt(weekStats[wi].profit, weekStats[wi].pnl)),  React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", textAlign: "center" } }, weekStats[wi].count, " trades")))))))));
});
function DayPopup({ date, trades, onClose, ic, capital: propCapital, onEdit, editingId, setEditingId, onOpenSettings, usedSessions = SESSIONS, usedMistakes = MISTAKES }) {
const capital = (propCapital && propCapital > 0) ? propCapital : ((ic && ic > 0) ? ic : 5000);
const dayTrades = trades.filter((t) => t.entryDate === date).sort((a, b) => a.entryTime.localeCompare(b.entryTime));
const [editForm, setEditForm] = useState(null);
const [saved, setSaved] = useState(null);
const [symFilter, setSymFilter] = useState("All");
const [gradeFilter, setGradeFilter] = useState("All");
const [sortBy, setSortBy] = useState("entryTime");
const [sortDir, setSortDir] = useState(1);
const inp = { border: "1.5px solid var(--border)", borderRadius: 8, padding: "6px 9px", fontSize: 12, outline: "none", background: "var(--s2)", color: "var(--text)", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };
const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer" });
const syms = ["All", ...new Set(dayTrades.map((t) => t.symbol))];
const visible = useMemo(
() => [...dayTrades].filter((t) => (symFilter === "All" || t.symbol === symFilter) && (gradeFilter === "All" || t.grade === gradeFilter)).sort((a, b) => {
let va = a[sortBy], vb = b[sortBy];
if (["pnl", "profit"].includes(sortBy)) {
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
const [yr, mo, dy] = date.split("-").map(Number);
const MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const prettyDate = `${MN[mo - 1]} ${dy}, ${yr}`;
const startEdit = (t) => {
setEditingId(t.id);
setEditForm({ symbol: t.symbol, side: t.side || deriveDir(t), entryPrice: String(t.entryPrice || ""), exitPrice: String(t.exitPrice || ""), pnl: "0", profit: String(t.profit || ""), session: t.session || "London Open", model: t.model || "In Session", grade: t.grade || "A", expectedRR: t.expectedRR || "1:2", actualRR: t.actualRR || "", mistakes: t.mistakes || "None", keyLevels: Array.isArray(t.keyLevels) ? t.keyLevels : [], notes: t.notes || "" });
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
const SH = ({ l, f }) =>  React.createElement("span", { onClick: () => toggleSort(f), style: { fontSize: 10, fontWeight: 500, color: sortBy === f ? "var(--accD)" : "var(--t3)", letterSpacing: 0.1, cursor: "pointer", userSelect: "none" } }, l, sortBy === f ? sortDir > 0 ? " \u2191" : " \u2193" : " \u2195");
return  React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(10,18,35,.55)", backdropFilter: "blur(16px)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, onClick: onClose },  React.createElement("div", { style: { background: "var(--surface)", borderRadius: 20, boxShadow: "0 32px 80px rgba(0,0,0,.2)", width: 720, maxWidth: "100%", maxHeight: "93vh", overflow: "auto", border: "1px solid var(--border)" }, onClick: (e) => e.stopPropagation() },  React.createElement("div", { style: { padding: "22px 26px 16px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "var(--surface)", zIndex: 10 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.1, marginBottom: 5 } }, "\u{1F4C5} Day Summary"),  React.createElement("div", { style: { fontSize: 20, fontWeight: 600, letterSpacing: "-.4px" } }, prettyDate)),  React.createElement("button", { onClick: onClose, style: { background: "var(--s3)", border: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 16, padding: "6px 10px", borderRadius: 9, fontWeight: 700 }, onMouseEnter: (e) => {
e.currentTarget.style.background = "var(--rBg)";
e.currentTarget.style.color = "var(--red)";
}, onMouseLeave: (e) => {
e.currentTarget.style.background = "var(--s3)";
e.currentTarget.style.color = "var(--t3)";
} }, "\xD7")),  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, padding: "16px 26px 14px" } }, [
{ l: "P&L%", v: fmtPct(dayPct), c: dayPct >= 0 ? "var(--accD)" : "var(--t2)", bg: dayPct >= 0 ? "var(--accL)" : "var(--s3)" },
{ l: "Net P&L", v: fmtUSD(dayProfit), c: dayProfit >= 0 ? "var(--accD)" : "var(--t2)", bg: dayProfit >= 0 ? "var(--accL)" : "var(--s3)" },
{ l: "Trades", v: dayTrades.length, c: "var(--text)", bg: "var(--s2)" },
{ l: "Win Rate", v: `${wr}%`, c: wr >= 50 ? "var(--acc)" : "var(--t2)", bg: "var(--s2)" }
].map((m, i) =>  React.createElement("div", { key: i, style: { background: m.bg, border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" } },  React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.1, marginBottom: 8 } }, m.l),  React.createElement("div", { style: { fontSize: 20, fontWeight: 600, color: m.c, letterSpacing: "-1px" } }, m.v)))),  React.createElement("div", { style: { padding: "0 26px 12px", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } },  React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600, marginRight: 4 } }, "Filter:"), syms.map((s) =>  React.createElement("button", { key: s, onClick: () => setSymFilter(s), style: { padding: "3px 11px", borderRadius: 20, border: `1.5px solid ${symFilter === s ? "var(--acc)" : "var(--border)"}`, background: symFilter === s ? "var(--accF)" : "var(--surface)", color: symFilter === s ? "var(--accD)" : "var(--t2)", fontWeight: symFilter === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)),  React.createElement("span", { style: { borderLeft: "1px solid var(--border)", height: 16, margin: "0 4px" } }), ["All", ...GRADES].map((g) =>  React.createElement("button", { key: g, onClick: () => setGradeFilter(g), style: { padding: "3px 10px", borderRadius: 20, border: `1.5px solid ${gradeFilter === g ? "var(--acc)" : "var(--border)"}`, background: gradeFilter === g ? "var(--accF)" : "var(--surface)", color: gradeFilter === g ? "var(--accD)" : "var(--t2)", fontWeight: gradeFilter === g ? 700 : 500, fontSize: 11, cursor: "pointer" } }, g)),  React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" } },  React.createElement(SH, { l: "Time", f: "entryTime" }),  React.createElement(SH, { l: "P&L", f: "pnl" }),  React.createElement(SH, { l: "Grade", f: "grade" }))),  React.createElement("div", { style: { padding: "0 26px 24px", display: "flex", flexDirection: "column", gap: 8 } }, visible.map((t, i) => {
var _a;
const isEditing = editingId === t.id;
const isSaved = saved === t.id;
return  React.createElement("div", { key: t.id, style: { border: `1.5px solid ${isEditing ? "var(--acc)" : isSaved ? "var(--gBdr)" : "var(--border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color .2s", background: isEditing ? "var(--accF)" : isSaved ? "var(--gBg)" : "var(--surface)" } },  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 1fr auto", gap: 8, padding: "11px 16px", alignItems: "center", background: i % 2 === 0 ? "var(--surface)" : "var(--s2)" } },  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },  React.createElement("span", { style: { fontSize: 13, fontWeight: 500, color: "var(--text)" } }, t.symbol),  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, ((_a = t.entryTime) == null ? void 0 : _a.slice(0, 5)) || "\u2014", " \xB7 ", t.side || deriveDir(t))),  React.createElement("div", null,  React.createElement(SessionChip, { session: t.session })),  React.createElement("div", null,  React.createElement(GradeChip, { grade: t.grade })),  React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: calcPnL(t.profit, capital) >= 0 ? "var(--accD)" : "var(--t2)" } }, fmtPct(calcPnL(t.profit, capital))),  React.createElement("div", { style: { fontSize: 12, color: "var(--t3)" } }, t.expectedRR || "\u2014"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, t.model || "\u2014"),  React.createElement("div", { style: { display: "flex", gap: 5 } }, !isEditing &&  React.createElement("button", { onClick: () => startEdit(t), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" } }, "\u{1F527} Edit"), isEditing &&  React.createElement(React.Fragment, null,  React.createElement("button", { onClick: () => saveEdit(t.id), style: { background: "var(--green)", color: "#fff", border: "none", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2713 Save"),  React.createElement("button", { onClick: cancelEdit, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2715")))), isEditing && editForm &&  React.createElement("div", { style: { padding: "16px", borderTop: "1px dashed color-mix(in srgb, var(--acc) 35%, transparent)", background: "var(--accF)" } },  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8, marginBottom: 10 } }, [["Symbol", "symbol"], ["Entry Price", "entryPrice"], ["Exit Price", "exitPrice"], ["Net P&L ($)", "profit"], ["Actual RR", "actualRR"]].map(([l, k]) =>  React.createElement("div", { key: k },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, l),  React.createElement("input", { value: editForm[k] || "", onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Side"),  React.createElement("select", { value: editForm.side, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { side: e.target.value })), style: sel },  React.createElement("option", null, "Long"),  React.createElement("option", null, "Short"))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Session"),  React.createElement("select", { value: editForm.session, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel }, usedSessions.map((s) =>  React.createElement("option", { key: s }, s)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Model"),  React.createElement("select", { value: editForm.model, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel }, MODELS.map((m) =>  React.createElement("option", { key: m }, m)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Grade"),  React.createElement("select", { value: editForm.grade, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel }, GRADES.map((g) =>  React.createElement("option", { key: g }, g)))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Mistakes"),  React.createElement("select", { value: editForm.mistakes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel }, usedMistakes.map((m) =>  React.createElement("option", { key: m }, m)))),  React.createElement("div", { style: { gridColumn: "1/-1" } },  React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 } },  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase" } }, "Key Levels"),  React.createElement("span", null)),  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4, minHeight: 28 } }, (editForm.keyLevels || []).length === 0 ?  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, "No key levels") : (editForm.keyLevels || []).map((kl, ki) =>  React.createElement("div", { key: ki, style: { display: "flex", alignItems: "center", background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 20, overflow: "hidden" } },  React.createElement("span", { style: { fontSize: 10.5, fontWeight: 600, padding: "3px 9px", color: "var(--blue)" } }, kl),  React.createElement("button", { type: "button", onClick: () => setEditForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: "none", border: "none", borderLeft: "1px solid var(--bBdr)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "3px 7px" } }, "\u00D7"))))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Exp. RR"),  React.createElement("select", { value: editForm.expectedRR, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) =>  React.createElement("option", { key: r }, r))))),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Notes"),  React.createElement("textarea", { value: editForm.notes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), rows: 2, style: __spreadProps(__spreadValues({}, inp), { resize: "vertical" }) })),  React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 10 } },  React.createElement("button", { onClick: () => saveEdit(t.id), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 10, padding: "9px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 3px 12px color-mix(in srgb, var(--acc) 40%, transparent)" } }, "\u2713 Save Changes"),  React.createElement("button", { onClick: cancelEdit, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" } }, "\u2715 Cancel"), onOpenSettings &&  React.createElement("button", { type: "button", onClick: () => onOpenSettings("lists"), style: { background: "var(--s2)", color: "var(--t3)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", marginLeft: "auto" } }, "\xf0\x9f\x93\x9d Manage Lists"))));
}), visible.length === 0 &&  React.createElement("div", { style: { textAlign: "center", padding: "30px", color: "var(--t3)", fontSize: 13 } }, "No trades match filters"))));
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
const r = localStorage.getItem("tj5_risk_rules");
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
return  React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, "\u{1F4CC} Risk Management Rules"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, "Your personal trading rules \u2014 add, edit or remove")),  React.createElement("button", { onClick: () => setAdding((a) => !a), style: { background: adding ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: adding ? "var(--t2)" : "#fff", border: "none", borderRadius: 9, padding: "6px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, adding ? "\u2715 Cancel" : "+ Add Rule")), adding &&  React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12 } },  React.createElement("input", { autoFocus: true, value: newRule, onChange: (e) => setNewRule(e.target.value), onKeyDown: (e) => e.key === "Enter" && addRule(), placeholder: "e.g. Max 1% risk per trade", style: { flex: 1, border: "1.5px solid var(--border)", borderRadius: 9, padding: "8px 12px", fontSize: 12, outline: "none", background: "var(--surface)", color: "var(--text)" } }),  React.createElement("button", { onClick: addRule, style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 9, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" } }, "Add")),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, rules.map((r, i) =>  React.createElement("div", { key: r.id, style: { display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "var(--surface)", border: `1px solid ${r.active ? "var(--border)" : "var(--border)"}`, borderRadius: 10, opacity: r.active ? 1 : 0.55, transition: "opacity .2s" } },  React.createElement("div", { onClick: () => toggleRule(r.id), style: { width: 16, height: 16, borderRadius: 4, border: `2px solid ${r.active ? "var(--acc)" : "var(--border2)"}`, background: r.active ? "var(--acc)" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" } }, r.active &&  React.createElement("span", { style: { color: "#fff", fontSize: 10, fontWeight: 900 } }, "\u2713")), editId === r.id ?  React.createElement("input", { autoFocus: true, value: editText, onChange: (e) => setEditText(e.target.value), onKeyDown: (e) => {
if (e.key === "Enter") saveEdit(r.id);
if (e.key === "Escape") setEditId(null);
}, style: { flex: 1, border: "1.5px solid var(--acc)", borderRadius: 7, padding: "4px 8px", fontSize: 12, outline: "none", background: "var(--surface)", color: "var(--text)" } }) :  React.createElement("span", { style: { flex: 1, fontSize: 12, color: r.active ? "var(--t2)" : "var(--t3)", fontWeight: 500 } },  React.createElement("span", { style: { color: "var(--acc)", marginRight: 6 } }, "\u2192"), r.text),  React.createElement("div", { style: { display: "flex", gap: 4 } }, editId === r.id ?  React.createElement(React.Fragment, null,  React.createElement("button", { onClick: () => saveEdit(r.id), style: { background: "var(--green)", color: "#fff", border: "none", borderRadius: 6, padding: "3px 8px", fontSize: 10, cursor: "pointer", fontWeight: 700 } }, "\u2713"),  React.createElement("button", { onClick: () => setEditId(null), style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 6, padding: "3px 8px", fontSize: 10, cursor: "pointer" } }, "\u2715")) :  React.createElement(React.Fragment, null,  React.createElement("button", { onClick: () => {
setEditId(r.id);
setEditText(r.text);
}, style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", borderRadius: 6, padding: "3px 7px", fontSize: 10, cursor: "pointer" }, onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--acc)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t3)";
} }, "\u270F"),  React.createElement("button", { onClick: () => deleteRule(r.id), style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", borderRadius: 6, padding: "3px 7px", fontSize: 10, cursor: "pointer" }, onMouseEnter: (e) => {
e.currentTarget.style.background = "var(--rBg)";
e.currentTarget.style.borderColor = "var(--red)";
e.currentTarget.style.color = "var(--red)";
}, onMouseLeave: (e) => {
e.currentTarget.style.background = "none";
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t3)";
} }, "\u2715")))))));
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
fields.symbol || "",
fields.entryDate || "",
fields.entryTime || "",
fields.side || "",
fields.entryPrice != null ? String(fields.entryPrice) : "",
fields.exitPrice  != null ? String(fields.exitPrice)  : "",
fields.profit     != null ? String(fields.profit)     : ""
].join("|");
let h = 5381;
for (let ci = 0; ci < raw.length; ci++) h = (((h << 5) + h) ^ raw.charCodeAt(ci)) >>> 0;
return "trad_" + h.toString(36) + "_" + raw.length;
};
const buildTrade = (i, fields) => ({
id: makeFingerprintId(fields),
status: "Closed", confluences: [], session: "New York", model: "Imported",
emotionBefore: "Neutral", emotionAfter: "Neutral", mistakes: "None",
grade: "B", expectedRR: "1:2", actualRR: "", accountId: "import",
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
return s.split("T")[0] || "";
};
const parseTime = (s) => {
if (!s) return "00:00:00";
const m = s.match(/(\d{1,2}:\d{2}(:\d{2})?)/);
return m ? (m[1].length === 5 ? m[1] + ":00" : m[1]) : "00:00:00";
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
.map(m => m[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim());
if (cells.length < 8) continue;
if (!cells[0] || !/\d/.test(cells[0])) continue;
const isDateFirst = /^\d{4}[.\/-]/.test(cells[0]) || /^\d{2}[.\/-]\d{2}[.\/-]\d{4}/.test(cells[0]);
const isTicketFirst = /^\d{5,}$/.test(cells[0]);
if (!isDateFirst && !isTicketFirst) continue;
let openTime, closeTime, sym, typeStr, openPrice, closePrice, profit;
if (isDateFirst) {
openTime   = cells[0];
sym        = cells[2] || "UNKNOWN";
typeStr    = cells[3] || "";
openPrice  = parseNum(cells[5]);
closeTime  = cells[8] || cells[0];
closePrice = parseNum(cells[9] || cells[5]);
profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9] ?? cells[8]);
} else {
openTime   = cells[1];
sym        = cells[2] || "UNKNOWN";
typeStr    = cells[3] || "";
openPrice  = parseNum(cells[5]);
closeTime  = cells[8] || cells[1];
closePrice = parseNum(cells[9] || cells[5]);
profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9]);
}
const tl = typeStr.toLowerCase();
if (!tl.includes("buy") && !tl.includes("sell")) continue;
const cleanSym = sym.replace(/\.[A-Z0-9]+$/, "").replace(/\s+/g, "").toUpperCase();
trades.push(buildTrade(trades.length, {
symbol: cleanSym || "UNKNOWN",
entryDate: parseDate(openTime),
entryTime: parseTime(openTime),
side: tl.includes("sell") ? "Short" : "Long",
entryPrice: openPrice,
exitPrice: closePrice,
pnl: 0,
profit,
notes: "Imported from MT5"
}));
}
const totalProfit = trades.reduce((s, t) => s + t.profit, 0);
return trades;
};
const parseMT5CSV = (text) => {
if (/<html|<table|<tr/i.test(text)) return parseMT5HTM(text);
const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
if (rawLines.length < 2) return [];
const sep = rawLines[0].includes("\t") ? "\t" : ",";
let headerIdx = -1, headers = [];
for (let i = 0; i < Math.min(5, rawLines.length); i++) {
const h = splitLine(rawLines[i].toLowerCase(), sep);
if (h.some(c => ["symbol","ticket","time","type","profit","item","side","open"].includes(c))) {
headerIdx = i; headers = h; break;
}
}
const trades = [];
if (headerIdx >= 0) {
const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
const iDate=ci(["open time","time","date","open"]), iSym=ci(["symbol","item","instrument","pair"]);
const iType=ci(["type","direction","side","action"]), iOpen=ci(["open price","entry price","price open","entry"]);
const iCloseP=ci(["close price","exit price","price close","close"]), iProfit=ci(["profit","p&l","pnl","realized","net profit","gain"]);
const iPct=ci(["pnl%","pnl %","return %","%"]);
for (let i = headerIdx + 1; i < rawLines.length; i++) {
const cols = splitLine(rawLines[i], sep);
if (cols.length < 3) continue;
const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
const sym = g(iSym).toUpperCase() || "UNKNOWN";
const typeStr = g(iType).toLowerCase();
if (!sym || sym.length < 2) continue;
if (typeStr && !typeStr.includes("buy") && !typeStr.includes("sell") && !typeStr.includes("long") && !typeStr.includes("short")) continue;
const entryDateRaw = g(iDate);
const entryDate = parseDate(entryDateRaw);
if (!entryDate) continue;
trades.push(buildTrade(i, {
symbol: sym.replace(/\s+/g,""), entryDate, entryTime: parseTime(entryDateRaw),
side: (typeStr.includes("sell")||typeStr.includes("short")) ? "Short" : "Long",
entryPrice: parseNum(g(iOpen)), exitPrice: parseNum(g(iCloseP)) || parseNum(g(iOpen)),
pnl: parseNum(g(iPct)), profit: parseNum(g(iProfit)), notes: "Imported from MT5"
}));
}
if (trades.length) return trades;
}
const dataStart = headerIdx >= 0 ? headerIdx + 1 : 1;
for (let i = dataStart; i < rawLines.length; i++) {
const cols = splitLine(rawLines[i], sep);
if (cols.length < 8) continue;
const typeStr = (cols[3] || "").toLowerCase();
if (!typeStr.includes("buy") && !typeStr.includes("sell")) continue;
trades.push(buildTrade(i, {
symbol: (cols[2] || "UNKNOWN").toUpperCase(), entryDate: parseDate(cols[0]),
entryTime: parseTime(cols[0]),
side: typeStr.includes("sell") ? "Short" : "Long",
entryPrice: parseNum(cols[5]), exitPrice: parseNum(cols[5]),
pnl: 0, profit: parseNum(cols[8] || cols[7]), notes: "Imported from MT5"
}));
}
return trades;
};
const parseTradovateCSV = (text) => {
const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
if (rawLines.length < 2) return [];
const sep = rawLines[0].includes("\t") ? "\t" : ",";
const headers = splitLine(rawLines[0].toLowerCase(), sep);
const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
const ciExact = (names) => { for (const n of names) { const idx = headers.indexOf(n); if (idx >= 0) return idx; } return -1; };
const iSym = ciExact(["symbol","contract"]) >= 0 ? ciExact(["symbol","contract"]) : ci(["symbol","instrument","contract","product"]);
const iDate = ciExact(["boughttimestamp"]) >= 0 ? ciExact(["boughttimestamp"]) : ci(["bought","filled","time","date","entry"]);
const iBuyFillId = ciExact(["buyfillid"]);
const iSellFillId = ciExact(["sellfillid"]);
const iEntry = ciExact(["buyprice"]) >= 0 ? ciExact(["buyprice"]) : ci(["buy price","avg price","fill price","entry","price"]);
const iExit = ciExact(["sellprice"]) >= 0 ? ciExact(["sellprice"]) : ci(["sell price","exit","close","exit price"]);
const iProfit = ci(["pnl","profit","realized","net","gain"]);
const iPct = ci(["pnl%","return","percent","%"]);
const iQty = ci(["qty","quantity","size","volume"]);
const parseTradPnl = (s) => {
if (!s) return 0;
const isNeg = s.includes("(");
const num = parseFloat(s.replace(/[^0-9.]/g,"")) || 0;
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
const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
const sym = g(iSym).replace(/[^A-Z0-9]/gi,"").toUpperCase() || "UNKNOWN";
const dateRaw = g(iDate);
const entryDate = parseTradDate(dateRaw);
if (!entryDate || !sym || sym.length < 1) continue;
let side = "Long";
if (iBuyFillId >= 0 && iSellFillId >= 0) {
const buyId = parseInt(g(iBuyFillId)) || 0;
const sellId = parseInt(g(iSellFillId)) || 0;
if (buyId && sellId) side = buyId < sellId ? "Long" : "Short";
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
if (broker === "mt5") trades = parseMT5CSV(text);
else if (broker === "matchtrader") trades = parseMatchTraderCSV(text);
else if (broker === "tradovate") trades = parseTradovateCSV(text);
else if (broker === "tradexy") trades = parseJournalCSV(text);
else if (broker === "json") trades = parseJournalJSON(text);
else trades = parseMT5CSV(text);
if (!trades.length) {
setError(broker === "tradexy"
? "No trades found. Make sure you are uploading a CSV exported from this journal (\u2193 CSV button in Trade Log)."
: broker === "json"
? "No trades found. Make sure you are uploading a JSON backup exported from this journal (\u2193 JSON button in Trade Log)."
: "No trades found. Check file format.");
return;
}
setPreview(trades);
} catch (err) {
setError("Parse error: " + err.message);
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
"button",
{
onClick: () => setOpen(true),
style: { width: "100%", background: "var(--s2)", border: "1.5px dashed var(--border2)", borderRadius: 12, padding: "12px", fontSize: 12, fontWeight: 600, color: "var(--t2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .15s" },
onMouseEnter: (e) => {
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--accD)";
},
onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border2)";
e.currentTarget.style.color = "var(--t2)";
}
},
React.createElement("span", { style: { fontSize: 16 } }, "\u{1F4E5}"),
" Import Trades (MT5 / Tradovate / Tradexy CSV / JSON)"
);
return  React.createElement("div", { style: { background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "18px", marginBottom: 16 } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },  React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, "\u{1F4E5} Import Trades"),  React.createElement("button", { onClick: () => {
setOpen(false);
setFile(null);
setPreview(null);
setError("");
}, style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 11px", fontSize: 12, cursor: "pointer", color: "var(--t2)", fontWeight: 600 } }, "\u2715 Close")),  React.createElement("div", { style: { marginBottom: 14 } },  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.05 } }, "Platform / Source"),  React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, [["mt5", "MetaTrader 5"], ["matchtrader", "Match Trader"], ["tradovate", "Tradovate"], ["projectx", "ProjectX / Futures"], ["tradexy", "🗒 Tradexy CSV"], ["json", "💾 JSON Backup"]].map(([id, label]) =>  React.createElement("button", { key: id, onClick: () => {
setBroker(id);
setFile(null);
setPreview(null);
setError("");
}, style: { padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${broker === id ? "var(--acc)" : "var(--border)"}`, background: broker === id ? "var(--accF)" : "var(--surface)", color: broker === id ? "var(--accD)" : "var(--t2)", fontWeight: broker === id ? 700 : 500, fontSize: 12, cursor: "pointer" } }, label)))),  React.createElement("div", { style: { background: "var(--s2)", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 11, color: "var(--t2)", lineHeight: 1.7 } }, broker === "mt5" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "MT5:"), " Go to History tab \u2192 Right click \u2192 Save as Report \u2192 Tab-separated file (.htm/.csv)"), broker === "matchtrader" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "Match Trader:"), " Closed Positions tab \u2192 Export CSV (columns: ID, Symbol, Volume, Side, Open/Close prices, Commission, Profit)"), broker === "tradovate" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "Tradovate:"), " Account tab \u2192 Performance \u2192 Export to CSV"), broker === "projectx" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "ProjectX / Futures:"), " Export trade history CSV from your dashboard"), broker === "tradexy" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "Tradexy CSV:"), " Trade Log tab \u2192 \u2193 CSV button — re-import your own journal export with all fields preserved"), broker === "json" &&  React.createElement(React.Fragment, null,  React.createElement("b", null, "JSON Backup:"), " Trade Log tab \u2192 \u2193 JSON button — full lossless backup, restores every field including confluences & emotions")),  React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, border: `2px dashed ${file ? "var(--acc)" : "var(--border2)"}`, borderRadius: 12, padding: "20px", cursor: "pointer", background: file ? "var(--accF)" : "var(--s2)", transition: "all .15s", marginBottom: 12 } },  React.createElement("span", { style: { fontSize: 28 } }, file ? "\u2713" : (broker === "json" ? "\uD83D\uDCBE" : broker === "tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCC4")),  React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: file ? "var(--accD)" : "var(--t3)" } }, file ? file.name : "Click to upload trade history file"),  React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, broker === "json" ? "JSON backup exported from this journal" : broker === "tradexy" ? "CSV exported from this journal" : "CSV, TSV, or HTM"),  React.createElement("input", { type: "file", accept: broker === "json" ? ".json" : ".csv,.tsv,.htm,.html,.txt", style: { display: "none" }, onChange: handleFile })), error &&  React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: "var(--red)", marginBottom: 10 } }, "\u26A0 ", error), preview &&  React.createElement("div", { style: { marginBottom: 12 } },  React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "var(--green)", marginBottom: 8 } }, "\u2713 ", preview.length, " trades ready to import"),  React.createElement("div", { style: { background: "var(--s2)", borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)" } },  React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 11 } },  React.createElement("thead", null,  React.createElement("tr", { style: { background: "var(--s3)" } }, ["Date", "Symbol", "Side", "P&L%", "Profit $"].map((h) =>  React.createElement("th", { key: h, style: { padding: "7px 10px", textAlign: "left", fontSize: 9.5, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase" } }, h)))),  React.createElement("tbody", null, preview.slice(0, 5).map((t, i) =>  React.createElement("tr", { key: i, style: { borderTop: "1px solid var(--border)" } },  React.createElement("td", { style: { padding: "6px 10px", color: "var(--t2)", fontFamily: "monospace", fontSize: 10 } }, t.entryDate),  React.createElement("td", { style: { padding: "6px 10px", fontWeight: 600 } }, t.symbol),  React.createElement("td", { style: { padding: "6px 10px" } },  React.createElement(Chip, { color: t.side === "Long" ? "truegreen" : "red", size: "sm" }, t.side)),  React.createElement("td", { style: { padding: "6px 10px", color: t.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$", Math.abs(t.profit).toFixed(2)),  React.createElement("td", { style: { padding: "6px 10px", color: t.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$", Math.abs(t.profit).toFixed(2)))), preview.length > 5 &&  React.createElement("tr", null,  React.createElement("td", { colSpan: 5, style: { padding: "6px 10px", color: "var(--t3)", fontSize: 10, textAlign: "center" } }, "\u2026and ", preview.length - 5, " more")))))), preview &&  React.createElement("button", { onClick: doImport, disabled: importing, style: { width: "100%", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)" } }, importing ? "Importing\u2026" : "\u2713 Import " + preview.length + " Trades"));
}
function Sidebar({ activeTab, setTab, sidebarOpen, setSidebarOpen, setSidebarHover, userName, setUserName, accounts, seedTrades, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings, theme, setTheme }) {
const isMobile = useMediaQuery("(max-width:768px)");
const TABS = [
{ id: "overview", label: "Overview", icon:  React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },  React.createElement("rect", { x: "3", y: "3", width: "7", height: "7" }),  React.createElement("rect", { x: "14", y: "3", width: "7", height: "7" }),  React.createElement("rect", { x: "3", y: "14", width: "7", height: "7" }),  React.createElement("rect", { x: "14", y: "14", width: "7", height: "7" })) },
{ id: "analytics", label: "Analytics", icon:  React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },  React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })) },
{ id: "calendar", label: "Calendar", icon:  React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },  React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),  React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),  React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),  React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" })) },
{ id: "psychology", label: "Psychology", icon:  React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },  React.createElement("path", { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })) },
{ id: "tradelog", label: "Trade Log", icon:  React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },  React.createElement("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),  React.createElement("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),  React.createElement("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),  React.createElement("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),  React.createElement("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),  React.createElement("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })) }
];
const allT = accounts.length ? accounts.flatMap((a) => a.trades) : (demoDeleted ? [] : seedTrades);
const totalProfit = allT.reduce((s, t) => s + (t.profit || 0), 0);
const sidebarCapital = accounts.length > 0 && accounts[0].capital > 0 ? accounts[0].capital : 5000;
const totalPnl = calcPnL(totalProfit, sidebarCapital);
const initials = userName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
const click = (id) => {
setTab(id);
if (isMobile) setSidebarOpen(false);
};
if (!sidebarOpen) return  React.createElement(
"div",
{
style: { width: isMobile ? 0 : 56, background: "var(--surface)", height: "100vh", position: "fixed", left: 0, top: 0, zIndex: 200, display: isMobile ? "none" : "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, gap: 2, borderRight: "1px solid var(--border)", boxShadow: "var(--sh1)" },
onMouseEnter: () => setSidebarHover && setSidebarHover(true),
onMouseLeave: () => setSidebarHover && setSidebarHover(false)
},
React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, flexShrink: 0, background: "var(--surface)", border: "1px solid var(--border)" } },  React.createElement("img", { src: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQABAQADAAMBAQAAAAAAAAAAAAEHCAkCBQYEA
React.createElement("button", { onClick: (e) => { e.stopPropagation(); setSidebarOpen(true); setSidebarHover && setSidebarHover(false); }, style: { background: "none", border: "none", color: "var(--t2)", cursor: "pointer", padding: 4, borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }, title: "Open sidebar", onMouseEnter: (e) => {
e.currentTarget.style.background = "var(--s2)";
}, onMouseLeave: (e) => {
e.currentTarget.style.background = "none";
} },  React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" },  React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),  React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),  React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))),
React.createElement("div", { style: { width: 28, height: 1, background: "var(--border)", margin: "2px 0 4px" } }),
TABS.map((t) =>  React.createElement("button", { key: t.id, onClick: () => click(t.id), title: t.label, style: { background: activeTab === t.id ? "color-mix(in srgb, var(--acc) 12%, transparent)" : "none", border: "none", color: activeTab === t.id ? "var(--acc)" : "var(--t3)", cursor: "pointer", padding: 8, borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", transition: "all .15s" }, onMouseEnter: (e) => {
if (activeTab !== t.id) e.currentTarget.style.background = "var(--s2)";
}, onMouseLeave: (e) => {
if (activeTab !== t.id) e.currentTarget.style.background = "none";
} }, activeTab === t.id &&  React.createElement("div", { style: { position: "absolute", right: -1, top: "50%", transform: "translateY(-50%)", width: 3, height: 22, background: "var(--acc)", borderRadius: "3px 0 0 3px" } }), t.icon))
);
return  React.createElement(React.Fragment, null, isMobile &&  React.createElement("div", { onClick: () => setSidebarOpen(false), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", zIndex: 199 } }), !isMobile &&  React.createElement("div", { style: { position: "fixed", left: 0, top: 0, width: 8, height: "100vh", zIndex: 198 }, onMouseEnter: () => setSidebarHover && setSidebarHover(true) }),  React.createElement(
"div",
{
style: { width: 228, background: "var(--surface)", height: "100vh", position: "fixed", left: 0, top: 0, zIndex: 200, display: "flex", flexDirection: "column", borderRight: "1px solid var(--border)", boxShadow: "var(--sh3)", animation: "sidebarSlide .22s cubic-bezier(.22,1,.36,1)" },
onMouseLeave: () => setSidebarHover && setSidebarHover(false)
},
React.createElement("div", { style: { padding: "16px 16px 12px", display: "flex", alignItems: "center", gap: 10 } },  React.createElement("div", { style: { width: 38, height: 38, borderRadius: 10, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface)", border: "1px solid var(--border)" } },  React.createElement("img", { src: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQABAQADAAMBAQAAAAAAAAAAAAEHCAkCBQYEA
e.currentTarget.style.borderColor = "var(--acc)";
e.currentTarget.style.color = "var(--acc)";
}, onMouseLeave: (e) => {
e.currentTarget.style.borderColor = "var(--border)";
e.currentTarget.style.color = "var(--t3)";
} },  React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" },  React.createElement("polyline", { points: "15 18 9 12 15 6" })))),
React.createElement("div", { style: { padding: "0 12px 14px" } },  React.createElement("button", { "data-tour": "add-trade-btn", onClick: () => {
click("tradelog");
setTab("tradelog");
}, style: { width: "100%", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 11, padding: "11px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 14px color-mix(in srgb, var(--acc) 38%, transparent)" } },  React.createElement("div", { style: { width: 22, height: 22, borderRadius: 6, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 300 } }, "+"), "Log Trade")),
React.createElement("div", { style: { flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" } }, TABS.map((t) => {
const active = activeTab === t.id;
return  React.createElement("button", { key: t.id, onClick: () => click(t.id), className: "nav-btn", "data-tour": `nav-${t.id}`, style: { background: active ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "transparent", color: active ? "var(--acc)" : "var(--t2)", fontWeight: active ? 700 : 500, fontSize: 13, boxShadow: active ? "inset 0 0 0 1px color-mix(in srgb, var(--acc) 25%, transparent)" : "none" } },  React.createElement("span", { style: { opacity: active ? 1 : 0.6 } }, t.icon),  React.createElement("span", { style: { flex: 1 } }, t.label), active &&  React.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--acc)" } }));
})),
React.createElement("div", { style: { padding: "12px 14px", borderTop: "1px solid var(--border)" } },  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 } },  React.createElement("div", { style: { width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,var(--acc),var(--accD))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#fff", flexShrink: 0, boxShadow: "0 2px 8px color-mix(in srgb, var(--acc) 30%, transparent)" } }, initials),  React.createElement("div", { style: { flex: 1, minWidth: 0 } },  React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)" } }, userName),  React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, allT.length, " trades \xB7 ",  React.createElement("span", { style: { color: totalPnl >= 0 ? "var(--acc)" : "var(--t3)", fontWeight: 700 } }, fmtPct(totalPnl))))),  React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", textAlign: "center", paddingTop: 8, borderTop: "1px solid var(--border)", letterSpacing: 0.3 } }, "Tradexy \xB7 v1.0"))
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
target: '[data-tour="accounts-panel"]',
cardPos: 'bottom-right',
tabSwitch: null,
title: '\uD83C\uDFE6 Accounts Panel',
subtitle: 'Click \u201C+ Add\u201D to create an account. Choose Demo for practice or MT5 for your live broker. Enter starting capital for accurate % P&L.',
},
{
target: '[data-tour="add-trade-btn"]',
cardPos: 'bottom-right',
tabSwitch: null,
title: '\u270F\uFE0F Log a Trade',
subtitle: 'Click here \u2014 or press \u201CN\u201D from anywhere \u2014 to open the trade form. Log symbol, P&L, session, grade, emotions and confluences.',
},
{
target: '[data-tour="nav-overview"]',
cardPos: 'right',
tabSwitch: 'overview',
title: '\uD83D\uDCCA Overview Tab',
subtitle: 'Your main dashboard. See equity curve, win rate, profit factor and recent trades \u2014 all at a glance. Customise blocks via Settings \u2192 Edit UI.',
},
{
target: '[data-tour="nav-analytics"]',
cardPos: 'right',
tabSwitch: 'analytics',
title: '\uD83D\uDCC8 Analytics Tab',
subtitle: 'Deep-dive breakdowns by session, model, confluence and grade. The \u26A1 Edge Finder tab scores every combo to show your real statistical edges.',
},
{
target: '[data-tour="nav-calendar"]',
cardPos: 'right',
tabSwitch: 'calendar',
title: '\uD83D\uDCC5 Calendar Tab',
subtitle: 'Heat-map of your trading days. Green = profit, red = loss. Click any day to review all trades from that session in a popup.',
},
{
target: '[data-tour="nav-psychology"]',
cardPos: 'right',
tabSwitch: 'psychology',
title: '\uD83E\uDDE0 Psychology Tab',
subtitle: 'Track pre-trade emotions, mistakes and mindset patterns. See exactly which emotional states lead to wins vs losses in your data.',
},
{
target: '[data-tour="nav-tradelog"]',
cardPos: 'right',
tabSwitch: 'tradelog',
title: '\uD83D\uDCDC Trade Log',
subtitle: 'Full history with filters. Edit any trade, attach chart screenshots, bulk-delete, and search by symbol, grade, date range and more.',
},
{
target: '[data-tour="calc-btn"]',
cardPos: 'top-right',
tabSwitch: null,
title: '\uD83E\uDDEE Position Calculator',
subtitle: 'Enter your risk % and stop distance to get the exact lot size instantly. Find this at the bottom of the sidebar anytime.',
},
{
target: '[data-tour="settings-btn"]',
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
const [tab, setTab] = useState("overview");
const [toast, setToast] = useState(null);
const [showGuide, setShowGuide] = useState(() => { try { return !localStorage.getItem("tj_onboarding_done"); } catch(e) { return true; } });
const [syncingId, setSyncingId] = useState(null);
const [activeAccId, setActiveAccId] = useState("all");
const [accounts, setAccounts] = useState(() => loadAccounts());
const [tradeMeta, setTradeMeta] = useState(() => loadTradeMeta());
const [sidebarOpen, setSidebarOpen] = useState(false);
const [sidebarHover, setSidebarHover] = useState(false);
const [uiBlocks, setUiBlocks] = useState(() => {
try {
const r = localStorage.getItem("tj5_uiblocks");
return r ? __spreadValues(__spreadValues({}, DEFAULT_UI_BLOCKS), JSON.parse(r)) : DEFAULT_UI_BLOCKS;
} catch (e) {
return DEFAULT_UI_BLOCKS;
}
});
const [editingUi, setEditingUi] = useState(false);
const [userName, setUserName] = useState(() => {
try {
return localStorage.getItem("tj5_username") || "Trader";
} catch (e) {
return "Trader";
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
const [demoBannerDismissed, setDemoBannerDismissed] = useState(function(){ try{return !!localStorage.getItem("tj5_demo_dismissed");}catch(e){return false;} });
const [settingsModal, setSettingsModal] = useState(null);
const [demoDeleted, setDemoDeleted] = useState(function(){ try{return !!localStorage.getItem("tj5_demo_deleted");}catch(e){return false;} });
const isMobile = useMediaQuery("(max-width:768px)");
const sidebarEffectiveOpen = sidebarOpen || sidebarHover;
useEffect(() => {
const h = (e) => {
if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
if (e.key === "n" || e.key === "N") {
e.preventDefault();
setTab("tradelog");
setOpenTradeForm(true);
}
if (e.key === "t" || e.key === "T") {
e.preventDefault();
setTab("tradelog");
}
if (e.key === "Escape") setOpenTradeForm(false);
};
window.addEventListener("keydown", h);
return () => window.removeEventListener("keydown", h);
}, []);
useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
document.documentElement.setAttribute("data-accent", accent);
try {
localStorage.setItem("tj5_theme", theme);
localStorage.setItem("tj5_accent", accent);
} catch (e) {
}
}, [theme, accent]);
useEffect(() => {
if (!isMobile) setSidebarOpen(true);
}, [isMobile]);
useEffect(() => {
try {
localStorage.setItem("tj5_uiblocks", JSON.stringify(uiBlocks));
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
if(!localStorage.getItem("tj5_visited")){
localStorage.setItem("tj5_visited","1");
var ts=Date.now();
function _mk(o,sym,d,ti,si,en,ex,pnl,pr,se,mo,eb,ea,mi,gr,er,ar,no,co,kl){return{id:ts+o,symbol:sym,entryDate:d,entryTime:ti,side:si,entryPrice:en,exitPrice:ex,pnl:pnl,profit:pr,status:"Closed",confluences:co,keyLevels:kl,session:se,model:mo,emotionBefore:eb,emotionAfter:ea,mistakes:mi,grade:gr,expectedRR:er,actualRR:ar,notes:no,riskAmount:50,stopLoss:0,takeProfit:0,accountId:"demo-first",tags:["Sample Data"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};}
setAccounts([{id:"demo-first",label:"Demo Account",capital:10000,isDemo:true,login:"",password:"",server:"",type:"demo",connected:false,lastSync:null,info:null,trades:[
_mk(1,"XAUUSD","2026-03-03","09:15:00","Long",2915.5,2928.3,1.25,125,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:2.8","Sample",["Break of Structure","Fair Value Gap"],["Daily Open"]),
_mk(2,"XAUUSD","2026-03-04","14:30:00","Short",2942,2935.1,0.72,72,"New York","ICT Concepts","Confident","Satisfied","None","A","1:2","1:2.1","Sample",["Order Block","Liquidity Sweep"],["Resistance Zone"]),
_mk(3,"EURUSD","2026-03-05","08:00:00","Long",1.082,1.0785,-0.62,-62,"London Open","Price Action","FOMO","Frustrated","FOMO Entry","D","1:2","","Sample",["Trendline Bounce"],["Support Zone"]),
_mk(4,"XAUUSD","2026-03-10","03:20:00","Long",2888,2901.5,1.05,105,"Asia","SMC (Smart Money)","Calm & Focused","Satisfied","None","A+","1:3","1:3.1","Sample",["Fair Value Gap","Change of Character"],["Demand Zone"]),
_mk(5,"GBPUSD","2026-03-11","10:45:00","Short",1.294,1.296,-0.38,-38,"London Mid","Price Action","Neutral","Neutral","Wrong Timeframe","C","1:2","","Sample",["Supply/Demand Zone"],["Weekly High"]),
_mk(6,"XAUUSD","2026-03-14","07:00:00","Long",2920,2938,1.55,155,"London Open","SMC (Smart Money)","Sharp & Alert","Proud","None","A","1:3","1:3.2","Sample",["Order Block","Market Structure Shift","VWAP"],["OB Level","Previous High"]),
_mk(7,"XAUUSD","2026-03-17","15:00:00","Short",2955,2945,0.85,85,"New York","ICT Concepts","Confident","Satisfied","None","B","1:2","1:1.9","Sample",["Inducement","Premium/Discount"],["Premium Zone"]),
_mk(8,"EURUSD","2026-03-18","09:30:00","Long",1.085,1.083,-0.44,-44,"London Open","Price Action","Overconfident","Disappointed","Position Too Large","D","1:2","","Sample",["Trendline Bounce"],["Daily Level"]),
_mk(9,"XAUUSD","2026-03-20","07:45:00","Long",2968,2984,1.35,135,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:3.0","Sample",["Break of Structure","Order Block"],["Demand Zone","Daily Open"]),
_mk(10,"GBPUSD","2026-03-21","14:15:00","Short",1.2985,1.2940,0.68,68,"New York","ICT Concepts","Patient","Calm","None","B","1:2","1:2.2","Sample",["Liquidity Sweep","Fair Value Gap"],["Weekly Level"]),
_mk(11,"XAUUSD","2026-03-24","09:00:00","Short",3010,3024,-0.92,-92,"London Open","Price Action","Stressed","Burned Out","Moved Stop Loss","D","1:2","","Sample",["Supply/Demand Zone"],["Resistance Zone"]),
_mk(12,"EURUSD","2026-03-25","03:30:00","Long",1.0795,1.0840,0.75,75,"Asia","SMC (Smart Money)","Motivated","Energized","None","B","1:2","1:2.4","Sample",["Change of Character","Fair Value Gap"],["Demand Zone"]),
_mk(13,"XAUUSD","2026-03-26","15:30:00","Long",3025,3045,1.65,165,"New York","ICT Concepts","Sharp & Alert","Proud","None","A+","1:4","1:3.8","Sample",["Order Block","Liquidity Sweep","Premium/Discount"],["OB Level","Daily Open"]),
_mk(14,"XAUUSD","2026-03-27","07:10:00","Short",3048,3039,0.62,62,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","B","1:2","1:1.8","Sample",["Market Structure Shift","VWAP"],["Premium Zone"]),
_mk(15,"GBPUSD","2026-03-31","09:45:00","Long",1.2910,1.2885,-0.45,-45,"London Open","Price Action","Hesitant","Confused","Late Entry","C","1:2","","Sample",["Trendline Bounce"],["Support Zone"]),
_mk(16,"XAUUSD","2026-04-01","03:15:00","Long",3060,3078,1.42,142,"Asia","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:2.9","Sample",["Fair Value Gap","Break of Structure"],["Demand Zone","Weekly Level"])
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
const showToast = useCallback((msg, type = "info") => {
setToast({ msg, type });
setTimeout(() => setToast(null), 4500);
}, []);
const handleSync = useCallback(async (acc) => {
if (acc.isDemo) {
showToast(`${acc.label} is a demo account \u2014 no sync needed`, "info");
return;
}
setSyncingId(acc.id);
try {
const res = await fetch(`${API_URL}/sync-account`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ login: acc.login, password: acc.password, server: acc.server }) });
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
const MANUAL_FIELDS = ["confluences", "notes", "grade", "emotionBefore", "emotionAfter", "mistakes", "tags", "session", "model", "expectedRR", "actualRR", "riskAmount", "stopLoss", "takeProfit"];
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
showToast(`\u2713 ${acc.label} \u2014 ${incoming.length} trades synced (manual data preserved)`, "success");
} catch (err) {
showToast(err.message.includes("fetch") || err.message.includes("Failed") ? "Cannot reach MT5 backend" : err.message, "error");
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
try { localStorage.removeItem("tj5_demo_deleted"); } catch(e) {}
if (!c.isDemo) setTimeout(() => handleSync(na), 60);
else showToast(`\u2713 ${c.label} demo account created`, "success");
}, [handleSync, showToast]);
const handleRemoveAcc = useCallback((id) => {
setAccounts((p) => {
const next = p.filter((a) => a.id !== id);
if (next.length === 0) {
setDemoDeleted(true);
try { localStorage.setItem("tj5_demo_deleted", "1"); } catch(e) {}
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
const targetAccId = t.accountId || "manual";
const nt = sanitizeTrade(__spreadProps(__spreadValues({}, t), { id: Date.now(), accountId: targetAccId, createdAt: ( new Date()).toISOString(), updatedAt: ( new Date()).toISOString() }));
if (!nt) return;
setAccounts((p) => {
if (p.length === 0) {
const demo = { id: "manual-default", label: "My Journal", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: [nt] };
return [demo];
}
const targetIdx = p.findIndex((a) => a.id === targetAccId);
const idx = targetIdx >= 0 ? targetIdx : 0;
return p.map((a, i) => i === idx ? __spreadProps(__spreadValues({}, a), { trades: [nt, ...a.trades] }) : a);
});
setDemoDeleted(false);
try { localStorage.removeItem("tj5_demo_deleted"); } catch(e) {}
}, []);
const handleImportTrades = useCallback((importedTrades) => {
const sanitized = importedTrades.map((t) => sanitizeTrade(__spreadProps(__spreadValues({}, t), { accountId: "manual", createdAt: t.createdAt || ( new Date()).toISOString(), updatedAt: ( new Date()).toISOString() }))).filter(Boolean);
if (!sanitized.length) return;
setAccounts((p) => {
if (p.length === 0) {
const demo = { id: "manual-default", label: "My Journal", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: sanitized };
return [demo];
}
return p.map((a, i) => {
if (i !== 0) return a;
const existingIds = new Set((a.trades || []).map(t => String(t.id)));
const newOnly = sanitized.filter(t => !existingIds.has(String(t.id)));
return __spreadProps(__spreadValues({}, a), { trades: [...newOnly, ...a.trades] });
});
});
showToast(`\u2713 Imported ${sanitized.length} trades successfully`, "success");
}, [showToast]);
const handleImportToAccount = useCallback((importedTrades, targetAccId) => {
const isFullFidelity = importedTrades.length > 0 && (importedTrades[0]._importType === "full");
const valid = isFullFidelity
? importedTrades.filter(t => t && t.symbol && t.entryDate)
: importedTrades.filter(t => typeof t.profit === "number" && t.profit !== 0 && !isNaN(t.profit));
if (!valid.length) { showToast("No valid trades to import", "error"); return; }
const PRESERVE = ["confluences","notes","grade","emotionBefore","emotionAfter","mistakes","tags","session","model","expectedRR","actualRR","riskAmount","stopLoss","takeProfit","keyLevels"];
setAccounts((p) => {
if (p.length === 0) {
const demoId = "demo-imported-" + Date.now();
const newTrades = valid.map(t => sanitizeTrade({ ...t, id: t.id || (Date.now() + Math.random()), accountId: demoId, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })).filter(Boolean);
const demo = { id: demoId, label: "Imported Trades", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: newTrades };
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
showToast(`\u2713 Import done: ${newCount} new trade${newCount!==1?'s':''} added${updCount>0?`, ${updCount} updated (manual data preserved)`:''}`, "success");
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
localStorage.setItem("tj5_username", n);
} catch (e) {
}
};
const TABS_INFO = [{ id: "overview", label: "Overview" }, { id: "analytics", label: "Analytics" }, { id: "psychology", label: "Psychology" }, { id: "tradelog", label: "Full Trades" }, { id: "calendar", label: "Calendar" }];
const live = accounts.filter((a) => a.connected).length;
const showDateBar = ["overview", "analytics", "tradelog"].includes(tab);
const sideW = isMobile ? 0 : sidebarEffectiveOpen ? 228 : 56;
const ic = accountCapital;
const [settingsTab, setSettingsTab] = useState("appearance");
const THEMES = [
{ id: "zinc",     label: "Zinc",     icon: "\u{1FA76}" },
{ id: "light",    label: "Light",    icon: "\u2600\uFE0F" },
{ id: "slate",    label: "Slate",    icon: "\u{1F5F3}\uFE0F" },
{ id: "lavender", label: "Lavender", icon: "\u{1F338}" },
{ id: "dark",     label: "Dark",     icon: "\u{1F319}" },
{ id: "sepia",    label: "Sepia",    icon: "\u{1F4DC}" },
{ id: "forest",   label: "Forest",   icon: "\u{1F333}" },
{ id: "ocean",    label: "Ocean",    icon: "\u{1F30A}" },
{ id: "rose",     label: "Rose",     icon: "\u{1F339}" },
];
const ACCENTS = [
{ id: "indigo",  label: "Indigo",  col: "#4f46e5" },
{ id: "emerald", label: "Emerald", col: "#059669" },
{ id: "amber",   label: "Amber",   col: "#d97706" },
{ id: "rose",    label: "Rose",    col: "#e11d48" },
{ id: "fuchsia", label: "Fuchsia", col: "#c026d3" },
{ id: "pink",    label: "Pink",    col: "#db2777" },
{ id: "cyan",    label: "Cyan",    col: "#0891b2" },
{ id: "lime",    label: "Lime",    col: "#65a30d" },
{ id: "slate",   label: "Slate",   col: "#475569" }
];
const _settingsOnImport = handleImportTrades;
return  React.createElement(ErrorBoundary, null,  React.createElement("div", { style: { minHeight: "100vh", background: "var(--bg)", color: "var(--text)" } }, showGuide &&  React.createElement(OnboardingModal, { onDone: () => { setShowGuide(false); try { localStorage.setItem("tj_onboarding_done", "1"); } catch(e) {} }, setTab, onOpenSettings: () => { setShowSettings(true); } }), showSettings &&  React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", backdropFilter: "blur(12px)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, animation: "fadeIn .2s ease" }, onClick: () => setShowSettings(false) },  React.createElement("div", { style: { background: "var(--surface)", borderRadius: 20, border: "1px solid var(--border)", width: 820, maxWidth: "100%", maxHeight: "calc(100vh - 32px)", overflowY: "auto", boxShadow: "var(--sh3)", animation: "scaleIn .22s cubic-bezier(.22,1,.36,1)" }, onClick: (e) => e.stopPropagation() },  React.createElement("div", { style: { padding: "20px 24px 0", borderBottom: "1px solid var(--border)" } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },  React.createElement("div", { style: { fontSize: 15, fontWeight: 700, letterSpacing: "-.3px" } }, "Settings"),  React.createElement("button", { onClick: () => setShowSettings(false), style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 9, padding: "6px 11px", cursor: "pointer", color: "var(--t2)", fontSize: 16, fontWeight: 700 } }, "\xD7")),  React.createElement("div", { className: "settings-tab-bar", style: { display: "flex", gap: 0 } }, [{ id: "appearance", label: "\u{1F3A8} Appearance" }, { id: "account", label: "\u{1F464} Profile" }, { id: "lists", label: "\u{1F4DD} Lists" }, { id: "import", label: "\u{1F4E5} Import Trades" }, { id: "editui", label: "\u{1F9E9} Edit UI" }, { id: "guide", label: "\uD83D\uDCD6 Guide" }].map((t) =>  React.createElement("button", { key: t.id, onClick: () => setSettingsTab(t.id), style: { padding: "8px 16px", fontSize: 12, fontWeight: settingsTab === t.id ? 700 : 500, color: settingsTab === t.id ? "var(--accD)" : "var(--t3)", background: "none", border: "none", cursor: "pointer", borderBottom: settingsTab === t.id ? "2px solid var(--acc)" : "2px solid transparent", whiteSpace: "nowrap" } }, t.label)))),  React.createElement("div", { style: { padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 } }, settingsTab === "appearance" &&  React.createElement(React.Fragment, null,
React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },
React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
React.createElement("div", null,
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 12, textTransform: "uppercase" } }, "Theme Mode"),
React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 } }, THEMES.map((t) =>
React.createElement("button", { key: t.id, onClick: () => setTheme(t.id), style: { padding: "14px 10px", borderRadius: 12, border: `2px solid ${theme === t.id ? "var(--acc)" : "var(--border)"}`, background: theme === t.id ? "color-mix(in srgb, var(--acc) 10%, var(--surface))" : "var(--s2)", cursor: "pointer", transition: "all .2s", textAlign: "center" } },
React.createElement("div", { style: { fontSize: 22, marginBottom: 6 } }, t.icon),
React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: theme === t.id ? "var(--accD)" : "var(--text)" } }, t.label),
theme === t.id &&  React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: "var(--acc)", margin: "6px auto 0" } })
)
))
),
React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px", flex: 1 } },
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.04 } }, "Live Preview"),
React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
React.createElement("div", { style: { background: "var(--surface)", border: `2px solid var(--acc)`, borderRadius: 12, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" } },
React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.04 } }, "Net P&L"),
React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--accD)", letterSpacing: "-1px" } }, "+10.4%")
),
React.createElement("div", { style: { display: "flex", gap: 8 } },
React.createElement("button", { style: { flex: 1, background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 9, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "default" } }, "+ Log Trade"),
React.createElement("div", { style: { flex: 1, background: "var(--gBg)", border: "1px solid var(--gBdr)", borderRadius: 9, padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "var(--green)", textAlign: "center" } }, "Win ✓")
),
React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", textAlign: "center", marginTop: 2 } }, "Changes apply instantly")
)
)
),
React.createElement("div", null,
React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 12, textTransform: "uppercase" } }, "Accent Colour"),
React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 } }, ACCENTS.map((a) =>
React.createElement("button", { key: a.id, onClick: () => setAccent(a.id), style: { padding: "14px 8px", borderRadius: 12, border: `2px solid ${accent === a.id ? a.col : "var(--border)"}`, background: accent === a.id ? `${a.col}18` : "var(--s2)", cursor: "pointer", transition: "all .18s", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } },
React.createElement("div", { style: { width: 26, height: 26, borderRadius: "50%", background: a.col, boxShadow: accent === a.id ? `0 0 0 3px ${a.col}40` : "none", transition: "box-shadow .2s" } }),
React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, color: accent === a.id ? a.col : "var(--t3)" } }, a.label)
)
)),
React.createElement("div", { style: { marginTop: 14, padding: "10px 14px", background: "var(--accF)", border: "1px solid color-mix(in srgb, var(--acc) 30%, transparent)", borderRadius: 10, fontSize: 11, color: "var(--accD)", fontWeight: 600 } }, "✓ Changes apply instantly · Edit Confluences, Sessions & Mistakes in 📝 Lists tab")
)
)
), settingsTab === "editui" &&  React.createElement(React.Fragment, null,
React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 } }, "Customise Dashboard Blocks"),
React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginBottom: 16 } }, "Toggle which cards and sections are visible on your dashboard."),
React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
Object.entries({ bestTradeGrade: "Best Trade Grade", disciplineScore: "Discipline Score", bestMindset: "Best Mindset", worstMindset: "Worst Mindset", mistakeRate: "Mistake Rate", equityCurve: "Equity Curve", monthlyBars: "Monthly Bars", winRateCard: "Win Rate Card", gradeBreakdown: "Grade Breakdown", sessionBreakdown: "Session Breakdown", modelBreakdown: "Model Breakdown" }).map(([k, label]) =>
React.createElement("div", { key: k, style: { display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" } },
React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: uiBlocks[k] !== false ? "var(--text)" : "var(--t3)" } }, label),
React.createElement("div", { onClick: () => toggleBlock(k), style: { width: 36, height: 20, borderRadius: 10, background: uiBlocks[k] !== false ? "var(--acc)" : "var(--border2)", position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0 } },
React.createElement("div", { style: { position: "absolute", top: 2, left: uiBlocks[k] !== false ? 16 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left .15s", boxShadow: "0 1px 3px rgba(0,0,0,.2)" } })
)
)
)
),
React.createElement("button", { onClick: resetUi, style: { marginTop: 8, background: "var(--s3)", border: "1px solid var(--border)", color: "var(--t2)", borderRadius: 9, padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "Reset to Defaults")
), settingsTab === "lists" &&  React.createElement(React.Fragment, null,  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, [{ key: "confluences", label: "Confluences", icon: "\u{1F4CC}", defaults: CONFLUENCES, desc: "Setups shown in trade form" }, { key: "sessions", label: "Sessions", icon: "\u23F0", defaults: SESSIONS, desc: "Sessions shown in dropdowns" }, { key: "mistakes", label: "Mistakes", icon: "\u26A0\uFE0F", defaults: MISTAKES, desc: "Mistakes in psychology section" }, { key: "keyLevels", label: "Key Level Presets", icon: "\u{1F4CD}", defaults: [], desc: "Common key levels (e.g. OB, FVG, resistance)" }].map(({ key, label, icon, defaults, desc }) =>  React.createElement("div", { key, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 6 } }, icon, " ", label),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 3 } }, desc)),  React.createElement("div", { style: { display: "flex", gap: 6 } },  React.createElement("button", { onClick: () => setSettingsModal({ title: "Add Item", placeholder: "Enter name…", onConfirm: (v) => { const cur = customLists[key] || defaults; saveCustomList(key, [...cur, v]); } }), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "+ Add"),  React.createElement("button", { onClick: () => saveCustomList(key, null), style: { background: "var(--s3)", color: "var(--t3)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 10px", fontSize: 11, cursor: "pointer" } }, "Reset"))),  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, (customLists[key] || defaults).map((item) =>  React.createElement("div", { key: item, style: { display: "flex", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" } },  React.createElement("span", { style: { fontSize: 11, fontWeight: 500, padding: "4px 10px", color: "var(--text)" } }, item),  React.createElement("button", { onClick: () => setSettingsModal({ title: "Rename Item", placeholder: item, defaultVal: item, onConfirm: (v) => { if (v && v !== item) saveCustomList(key, (customLists[key] || defaults).map((x) => x === item ? v : x)); } }), style: { background: "none", border: "none", borderLeft: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "4px 7px", lineHeight: 1 } }, "\u270F\uFE0F"),  React.createElement("button", { onClick: () => { if ((customLists[key] || defaults).length > 1) saveCustomList(key, (customLists[key] || defaults).filter((x) => x !== item)); }, style: { background: "none", border: "none", borderLeft: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 12, padding: "4px 7px", lineHeight: 1 } }, "\u00D7"))))))) ), settingsTab === "import" &&  React.createElement(ImportTradesPanel, { onImport: _settingsOnImport }), settingsTab === "rules" &&  React.createElement(React.Fragment, null,  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" } },  React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } },  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: dailyLimit.enabled ? 16 : 0 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, "Daily Trade Limits"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, "Stop trading automatically when limits are hit")),  React.createElement("div", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { enabled: !d.enabled })), style: { width: 44, height: 24, borderRadius: 12, background: dailyLimit.enabled ? "var(--acc)" : "var(--border2)", position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0 } },  React.createElement("div", { style: { position: "absolute", top: 3, left: dailyLimit.enabled ? 21 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left .15s", boxShadow: "0 1px 4px rgba(0,0,0,.25)" } }))), dailyLimit.enabled &&  React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Max Trades / Day"),  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },  React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: Math.max(1, d.maxTrades - 1) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"),  React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text)", minWidth: 32, textAlign: "center" } }, dailyLimit.maxTrades),  React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: d.maxTrades + 1 })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "+")),  React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } }, "Stop after ", dailyLimit.maxTrades, " trade", dailyLimit.maxTrades !== 1 ? "s" : "")),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Max Loss / Day (%)"),  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },  React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss + 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"),  React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--red)", minWidth: 44, textAlign: "center" } }, dailyLimit.maxLoss, "%"),  React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss - 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "+")),  React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } }, "Stop at ", dailyLimit.maxLoss, "% daily loss")))),  React.createElement("div", null,  React.createElement(RiskRulesEditor, null))), dailyLimit.enabled && (() => {
const today = ( new Date()).toISOString().slice(0, 10);
const todayTrades = allTrades.filter((t) => t.entryDate === today);
const todayPnl = calcPnL(todayTrades.reduce((s, t) => s + (t.profit||0), 0), accountCapital);
const tradesBreach = todayTrades.length >= dailyLimit.maxTrades;
const lossBreach = todayPnl <= dailyLimit.maxLoss;
const breached = tradesBreach || lossBreach;
return  React.createElement("div", { style: { background: breached ? "var(--rBg)" : "var(--gBg)", border: `1px solid ${breached ? "var(--rBdr)" : "var(--gBdr)"}`, borderRadius: 12, padding: "12px 16px" } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: breached ? "var(--red)" : "var(--green)", marginBottom: 6 } }, breached ? "\u{1F6AB} Daily limit reached \u2014 stop trading today" : "\u2713 Within daily limits"),  React.createElement("div", { style: { display: "flex", gap: 16, fontSize: 11, color: "var(--t2)" } },  React.createElement("span", null, "Trades today: ",  React.createElement("b", { style: { color: tradesBreach ? "var(--red)" : "var(--text)" } }, todayTrades.length, "/", dailyLimit.maxTrades)),  React.createElement("span", null, "P&L today: ",  React.createElement("b", { style: { color: lossBreach ? "var(--red)" : "var(--accD)" } }, todayPnl >= 0 ? "+" : "", todayPnl.toFixed(2), "%"))));
})()), settingsTab === "guide" &&  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } },  React.createElement("div", { style: { background: "linear-gradient(135deg, var(--accF), var(--s2))", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px", marginBottom: 16, display: "flex", alignItems: "center", gap: 16 } },  React.createElement("div", { style: { fontSize: 38, lineHeight: 1 } }, "\uD83D\uDCD6"),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 16, fontWeight: 800, color: "var(--text)", letterSpacing: "-.02em" } }, "How to use Tradexy"),  React.createElement("div", { style: { fontSize: 13, color: "var(--t3)", marginTop: 3 } }, "Step-by-step guide to get the most from your journal"),  React.createElement("button", { onClick: () => { setShowGuide(true); setShowSettings(false); }, style: { marginTop: 10, padding: "7px 16px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" } }, "\uD83D\uDE80 Open Interactive Guide"))), ...[{ step:"01", icon:"\uD83C\uDFE6", col:"var(--bBg)", bdr:"var(--bBdr)", title:"Add Your Account", items:["Click \"+ Add\" in the Trading Accounts panel","Choose Demo (paper trading) or MT5 (live broker)","Enter your starting capital — required for MT5","Click Create — account appears in sidebar ready to use"] },{ step:"02", icon:"\u270D\uFE0F", col:"var(--pBg)", bdr:"var(--pBdr)", title:"Log Your Trades", items:["Press N anywhere to open the trade form instantly","Fill symbol, entry/exit, Net P&L ($), session, grade","Add emotions, confluences & mistakes for psychology tracking","Click \"Log Trade\" — saved to selected account"] },{ step:"03", icon:"\uD83D\uDCCA", col:"var(--gBg)", bdr:"var(--gBdr)", title:"Analyse Performance", items:["Overview: win rate, profit factor, equity curve","Analytics: breakdown by session, model, confluence, grade","Calendar: heat-map of your best and worst days","Psychology: spot emotion patterns hurting your edge"] },{ step:"04", icon:"\uD83D\uDCE5", col:"var(--oBg)", bdr:"var(--oBdr)", title:"Import from Broker", items:["Go to Settings \u2192 Import Trades","Upload CSV from MT5, Tradovate, or ProjectX","Trades are mapped automatically to your account","Review imported trades in the Trade Log tab"] },{ step:"05", icon:"\u2328\uFE0F", col:"var(--s2)", bdr:"var(--border)", title:"Tips & Shortcuts", items:["N = open new trade form from anywhere","\u2190\u2192 arrow keys = navigate the interactive guide","Settings \u2192 Appearance = change theme & accent colour","Click any calendar day to review trades from that day"] }].map((s) =>  React.createElement("div", { key: s.step, style: { background: s.col, border: "1px solid "+s.bdr, borderRadius: 14, padding: "16px 18px", marginBottom: 10 } },  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 } },  React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, background: "var(--surface)", border: "1px solid "+s.bdr, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 } }, s.icon),  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", textTransform: "uppercase" } }, "Step ", s.step),  React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, s.title))),  React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, ...s.items.map((item, i) =>  React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "var(--t2)", lineHeight: 1.5 } },  React.createElement("span", { style: { width: 18, height: 18, borderRadius: "50%", background: "var(--surface)", border: "1px solid "+s.bdr, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "var(--acc)", flexShrink: 0, marginTop: 1 } }, i+1), item)))))), settingsTab === "account" &&  React.createElement(React.Fragment, null,  React.createElement("div", null,  React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 8, textTransform: "uppercase" } }, "Display Name"),  React.createElement("input", { value: userName, onChange: (e) => saveUserName(e.target.value), placeholder: "Your name", style: { width: "100%", border: "1.5px solid var(--border)", borderRadius: 9, padding: "10px 14px", fontSize: 13, outline: "none", background: "var(--s2)", color: "var(--text)", boxSizing: "border-box" } }),  React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 6 } }, "Shown in the sidebar and trade summaries")),  React.createElement("div", { style: { background: "var(--s2)", borderRadius: 12, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 } },  React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 4 } }, "Data Storage"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t2)" } }, "All trade data is stored locally in your browser via ",  React.createElement("code", { style: { background: "var(--s3)", padding: "1px 5px", borderRadius: 4, fontSize: 10 } }, "localStorage"), ". Nothing is sent to any server unless you connect an MT5 account."),  React.createElement("button", { onClick: () => {
{
["tj5_accounts", "tj5_meta", "tj5_uiblocks", "tj5_username", "tj5_theme", "tj5_accent", "tj5_daily_limit"].forEach((k) => localStorage.removeItem(k));
window.location.reload();
}
}, style: { padding: "8px 16px", borderRadius: 9, border: "1.5px solid var(--rBdr)", background: "var(--rBg)", color: "var(--red)", fontSize: 11, fontWeight: 700, cursor: "pointer", alignSelf: "flex-start" } }, "Clear All Local Data")))))),  React.createElement(InputModal, { open: !!settingsModal, title: settingsModal && settingsModal.title, subtitle: settingsModal && settingsModal.subtitle, placeholder: settingsModal && settingsModal.placeholder, defaultVal: settingsModal && settingsModal.defaultVal, onConfirm: (v) => { settingsModal && settingsModal.onConfirm(v); setSettingsModal(null); }, onClose: () => setSettingsModal(null) }), dayPopup &&  React.createElement(DayPopup, { date: dayPopup, trades: allTrades, onClose: () => {
setDayPopup(null);
setEditingDayTrade(null);
}, ic, capital: accountCapital, onEdit: handleEditTrade, editingId: editingDayTrade, setEditingId: setEditingDayTrade, onOpenSettings: () => { setShowSettings(true); setSettingsTab("lists"); }, usedSessions: usedSessions || SESSIONS, usedMistakes: usedMistakes || MISTAKES }),  React.createElement(Sidebar, { activeTab: tab, setTab, sidebarOpen: sidebarEffectiveOpen, setSidebarOpen, setSidebarHover, userName, setUserName: saveUserName, accounts, seedTrades: SEED, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings: () => setShowSettings(true), theme, setTheme }),  React.createElement(FloatingCalc, { capital: accountCapital, open: showCalc, setOpen: setShowCalc }), toast &&  React.createElement("div", { style: { position: "fixed", bottom: 24, right: 24, zIndex: 9999, background: "var(--surface)", borderRadius: 16, padding: "13px 18px", fontSize: 13, fontWeight: 600, boxShadow: "var(--sh3)", display: "flex", alignItems: "center", gap: 12, maxWidth: isMobile ? "calc(100vw - 32px)" : 400, animation: "fadeUp .25s ease", border: `1px solid ${toast.type === "success" ? "var(--gBdr)" : toast.type === "error" ? "var(--rBdr)" : "var(--border)"}` } },  React.createElement("span", { style: { width: 32, height: 32, borderRadius: 9, background: toast.type === "success" ? "var(--gBg)" : toast.type === "error" ? "var(--rBg)" : "var(--s2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 } }, toast.type === "success" ? "\u2713" : toast.type === "error" ? "\u2715" : "\u2139"),  React.createElement("span", { style: { flex: 1, lineHeight: 1.5 } }, toast.msg),  React.createElement("button", { onClick: () => setToast(null), style: { background: "none", border: "none", color: "var(--t3)", cursor: "pointer", fontSize: 18, padding: "0 2px", lineHeight: 1 } }, "\xD7")),  React.createElement("div", { style: { marginLeft: sideW, transition: "margin-left .2s ease", minHeight: "100vh" } },  React.createElement("div", { style: { background: "var(--topbar-bg)", borderBottom: "1px solid var(--border)", padding: "0 20px", height: 52, display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } },  React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,var(--acc),transparent)`, opacity: 0.7 } }), isMobile &&  React.createElement("button", { onClick: () => setSidebarOpen(true), style: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", alignItems: "center", color: "var(--t2)" } },  React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },  React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),  React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),  React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))),  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },  React.createElement("div", { style: { width: 3, height: 20, background: `linear-gradient(180deg,var(--acc),var(--accD))`, borderRadius: 2 } }),  React.createElement("h1", { style: { margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: "-0.025em", fontFamily: "'Inter',sans-serif" } }, ((_a = TABS_INFO.find((t) => t.id === tab)) == null ? void 0 : _a.label) || "")), live > 0 &&  React.createElement("div", { className: "hide-m", style: { display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--green)", fontWeight: 700, background: "var(--gBg)", border: "1px solid var(--gBdr)", borderRadius: 20, padding: "3px 11px" } },  React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" } }), live, " Live"), accounts.length === 0 && !demoDeleted &&  React.createElement("div", { className: "hide-m", style: { fontSize: 11, color: "var(--t3)", background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 20, padding: "3px 11px" } }, "Demo Mode \xB7 Sample data"),
React.createElement("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 } },
React.createElement(WalletDropdown, { accounts, activeAccId, setActiveAccId, accountCapital, trueBalanceInfo, allTrades, isMobile }),
React.createElement("button", { onClick: () => { const allThemes = ["zinc","light","slate","lavender","dark","sepia","forest","ocean","rose"]; const idx = allThemes.indexOf(theme); setTheme(allThemes[(idx + 1) % allThemes.length]); }, title: "Cycle theme",
style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--t2)", transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
}, theme === "light" ? "\u{1F319}" : theme === "dark" ? "\u2600\uFE0F" : theme === "sepia" ? "\u{1F4DC}" : theme === "forest" ? "\u{1F333}" : theme === "ocean" ? "\u{1F30A}" : theme === "midnight" ? "\u{1F30C}" : theme === "zinc" ? "\u26AA" : "\u{1F338}"),
React.createElement("button", { "data-tour": "calc-btn", onClick: () => setShowCalc(c => !c), title: "Position Size Calculator",
style: { background: showCalc ? "var(--accF)" : "var(--s2)", border: showCalc ? "1px solid var(--acc)" : "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, color: showCalc ? "var(--accD)" : "var(--t2)", transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
onMouseLeave: (e) => { if (!showCalc) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; } }
}, "🧮"),
React.createElement("button", { "data-tour": "settings-btn", onClick: () => setShowSettings(true), title: "Settings",
style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)", transition: "all .15s" },
onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; },
onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; }
},
React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
React.createElement("circle", { cx: "12", cy: "12", r: "3" }),
React.createElement("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" })
)
)
)),  React.createElement("div", { className: "content-area", style: { maxWidth: tab === "calendar" ? 1400 : 1180, margin: "0 auto", padding: "22px 20px 80px" } },  React.createElement(AccountsPanel, { accounts, onSync: handleSync, onRemove: handleRemoveAcc, onAdd: handleAddAcc, onAddAdjustment: handleAddAdjustment, onRemoveAdjustment: handleRemoveAdjustment, syncingId, onImportToAccount: handleImportToAccount }), accounts.length > 0 &&  React.createElement("div", { style: { display: "flex", gap: 7, marginBottom: 18, flexWrap: "wrap", alignItems: "center" } }, [{ id: "all", label: "\u{1F310} All", cnt: accounts.reduce((s, a) => s + a.trades.length, 0), col: null }, ...accounts.map((a, i) => ({ id: a.id, label: a.label, cnt: a.trades.length, col: ACC_COLS[i % ACC_COLS.length], isDemo: a.isDemo }))].map((item) =>  React.createElement("button", { key: item.id, className: "acct-filter-pill", onClick: () => setActiveAccId(item.id), style: { display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${activeAccId === item.id ? item.col || "var(--acc)" : "var(--border)"}`, background: activeAccId === item.id ? item.col ? item.col + "20" : "var(--accF)" : "var(--surface)", color: activeAccId === item.id ? item.col || "var(--acc)" : "var(--t2)", fontWeight: activeAccId === item.id ? 700 : 500, fontSize: 12, cursor: "pointer", maxWidth: isMobile ? 90 : "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, item.col &&  React.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: item.col } }),  React.createElement("span", { className: "acct-filter-label", style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: isMobile ? 72 : "none" } }, item.label), !isMobile && item.isDemo &&  React.createElement(Chip, { color: "purple", size: "sm" }, "Demo"),  React.createElement("span", { style: { background: "var(--s3)", borderRadius: 10, padding: "1px 7px", fontSize: 10, fontWeight: 700 } }, item.cnt)))), showDateBar &&  React.createElement(DateRangeBar, { trades: allTrades, dateRange, setDateRange, capital: accountCapital }), (!demoBannerDismissed&&accounts.length>0&&accounts.some(function(a){return a.isDemo&&(a.trades||[]).some(function(t){return(t.tags||[]).indexOf("Sample Data")>=0;});})) ?  React.createElement("div",{style:{background:"var(--bBg)",border:"1.5px solid var(--bBdr)",borderRadius:12,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:10}},  React.createElement("span",{style:{fontSize:18}},"🧪"),  React.createElement("div",{style:{flex:1,fontSize:12,color:"var(--blue)",fontWeight:500}},"This is demo data — explore freely. Delete sample trades anytime from Trade Log."),  React.createElement("button",{onClick:function(){setDemoBannerDismissed(true);try{localStorage.setItem("tj5_demo_dismissed","1");}catch(e){}},style:{fontSize:11,fontWeight:700,color:"var(--blue)",background:"none",border:"1px solid var(--bBdr)",borderRadius:7,padding:"4px 10px",cursor:"pointer",fontFamily:"inherit"}},"Dismiss")) : null, dailyLimit.enabled && (() => {
const today = ( new Date()).toISOString().slice(0, 10);
const todayT = allTrades.filter((t) => t.entryDate === today);
const todayProfit = todayT.reduce((s, t) => s + (t.profit || 0), 0);
const todayPnl = calcPnL(todayProfit, accountCapital);
const tradesBreach = todayT.length >= dailyLimit.maxTrades;
const lossBreach = todayPnl <= dailyLimit.maxLoss;
if (!tradesBreach && !lossBreach) return null;
return  React.createElement("div", { style: { background: "var(--rBg)", border: "1.5px solid var(--rBdr)", borderRadius: 12, padding: "10px 16px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10, animation: "fadeUp .3s ease" } },  React.createElement("span", { style: { fontSize: 18 } }, "\u{1F6AB}"),  React.createElement("div", { style: { flex: 1 } },  React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--red)" } }, "Daily limit reached \u2014 stop trading for today"),  React.createElement("div", { style: { fontSize: 11, color: "var(--t2)", marginTop: 2 } }, tradesBreach && `${todayT.length}/${dailyLimit.maxTrades} trades used`, tradesBreach && lossBreach && " \xB7 ", lossBreach && `${todayPnl.toFixed(2)}% P&L (limit: ${dailyLimit.maxLoss}%)`)),  React.createElement("button", { onClick: () => setShowSettings(true), style: { fontSize: 11, fontWeight: 600, color: "var(--red)", background: "none", border: "1px solid var(--rBdr)", borderRadius: 7, padding: "4px 10px", cursor: "pointer" } }, "Edit rules"));
})(),  React.createElement("div", { key: tab, className: "fade-up" }, tab === "overview" &&  React.createElement(Overview, { trades: displayTrades, allTrades, uiBlocks, capital: accountCapital }), tab === "analytics" &&  React.createElement(Analytics, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === "psychology" &&  React.createElement(Psychology, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === "tradelog" &&  React.createElement(TradeLog, { trades: displayTrades, onAdd: handleAddTrade, onDelete: handleDeleteTrade, onEdit: handleEditTrade, onUpdateMeta: handleUpdateMeta, tradeMeta, onDuplicate: handleDuplicateTrade, openFormTrigger: openTradeForm, onFormOpened: () => setOpenTradeForm(false), usedConfluences, usedSessions, usedMistakes, saveCustomList, customLists, onOpenSettings: (tab) => { setShowSettings(true); setSettingsTab(tab || "lists"); }, capital: accountCapital, accounts: accounts, activeAccId: activeAccId }), tab === "calendar" &&  React.createElement(CalendarView, { trades: allTrades, onDayClick: setDayPopup, capital: accountCapital }))))));
}
const rootEl = document.getElementById("root");
if (rootEl) {
ReactDOM.createRoot(rootEl).render( React.createElement(App, null));
}