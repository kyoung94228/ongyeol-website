import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

const quickLinks = [['⌂', '방문간호', '/nursing'], ['♧', '방문요양', '/care'], ['♨', '방문목욕', '/bath'], ['⌕', '상담문의', '/contact'], ['↑', 'TOP', '/']];
function QrCard({ type, label }) { return <div className="qr-card"><div className="qr" aria-label={`${label} QR 임시 영역`}><span>QR</span></div><p><b className={type}>{type === 'instagram' ? '◎' : '▶'}</b>{label}</p></div>; }

export default function Home() {
  return <main><SiteHeader/><section className="hero" id="home">
    <aside className="quick-nav" aria-label="빠른 메뉴">{quickLinks.map(([icon, name, href]) => <Link href={href} key={name}><i>{icon}</i><span>{name}</span></Link>)}</aside>
    <div className="hero-copy"><p className="eyebrow">ONGYEOL SENIOR CARE CENTER</p><h1>일상에 스며드는<br/><em>따뜻한 돌봄,</em><br/>온결이 함께합니다.</h1><p className="intro">어르신의 하루는 편안하게,<br/>가족의 마음은 조금 더 가볍게.<br/>일상의 온기를 잇는 돌봄을 전합니다.</p><Link className="cta" href="/care">돌봄 서비스 살펴보기 <span>→</span></Link><a className="phone" href="tel:0624133650">상담전화 <strong>062-413-3650</strong></a></div>
    <div className="hero-image"><img src="/caregivers.png" alt="미소 짓는 두 명의 돌봄 의료진"/></div><div className="qrs"><QrCard type="instagram" label="인스타그램"/><QrCard type="youtube" label="유튜브"/></div><span className="scroll">SCROLL<br/>⌄</span>
  </section><section className="service-strip"><p>온결은 어르신의 일상과 가족의 마음을 잇습니다.</p><div><Link href="/nursing">방문간호</Link><Link href="/care">방문요양</Link><Link href="/bath">방문목욕</Link><Link href="/contact">상담문의</Link></div></section><footer>© ONGYEOL SENIOR CARE CENTER <a href="tel:0624133650">062-413-3650</a></footer></main>;
}
