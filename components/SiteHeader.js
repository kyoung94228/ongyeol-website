'use client';

import Link from 'next/link';
import { useState } from 'react';

const menu = [['센터소개', '/about'], ['방문간호', '/nursing'], ['방문요양', '/care'], ['방문목욕', '/bath'], ['상담문의', '/contact']];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <Link className="brand" href="/"><span className="brand-mark">♡</span><span><strong>온결시니어케어센터</strong><small>ONGYEOL SENIOR CARE CENTER</small></span></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>☰</button>
    <nav className={open ? 'open' : ''}>{menu.map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}</nav>
  </header>;
}
