const paths = {
  ospf: <><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><circle cx="12" cy="14" r="2.2"/><path d="M12 7.2v4.6M10.4 15.4 6.6 17.4M13.6 15.4l3.8 2"/></>,
  shield: <path d="M12 3 5 6v5.5c0 4.2 2.8 7.6 7 9.5 4.2-1.9 7-5.3 7-9.5V6l-7-3Z"/>,
  router: <><rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 12.5h.01M11 12.5h.01M7 8V5M17 8V5"/></>,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>,
  chart: <path d="M4 20V14M10 20V10M16 20v-6M21 6l-6 6-3-3-5 5M21 6h-4M21 6v4"/>,
  tool: <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-2.3-.7-.7-2.3 2.4-2.4Z"/>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></>,
};
export default function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>
  );
}
