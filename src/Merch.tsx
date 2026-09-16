import { useMemo, useState } from 'react';

/* ── Data ─────────────────────────────────────────────────────────────── */

const DESIGNS = [
  { id: 'warrior-two', name: 'Warrior Two', art: './designs/warrior-two.jpg', blurb: 'Two on the water, arms wide, pier behind.' },
  { id: 'chill', name: 'Chill', art: './designs/chill.jpg', blurb: 'Board, phone, golden hour. The whole vibe.' },
  { id: 'kneeling', name: 'Kneel', art: './designs/kneeling.jpg', blurb: 'Grounded and lit warm. Quiet strength.' },
  { id: 'grass', name: 'Grass', art: './designs/grass.jpg', blurb: 'Off the water, still in the light.' },
  { id: 'sunset-silhouette', name: 'Silhouette', art: './designs/sunset-silhouette.jpg', blurb: 'Paddling into the last of the day.' },
];

const ATTIRE = [
  { id: 'tee', name: 'T-Shirt', price: 32, sizes: ['S', 'M', 'L', 'XL', '2XL'] },
  { id: 'hoodie', name: 'Hoodie', price: 54, sizes: ['S', 'M', 'L', 'XL', '2XL'] },
  { id: 'tank', name: 'Tank', price: 28, sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'hat', name: 'Cap', price: 26, sizes: ['One Size'] },
  { id: 'tote', name: 'Tote', price: 22, sizes: ['One Size'] },
];

const STEPS = ['Design', 'Attire', 'Mockup', 'Cart'];

/* ── Component ────────────────────────────────────────────────────────── */

export function Merch() {
  const [step, setStep] = useState(1);
  const [design, setDesign] = useState<typeof DESIGNS[number] | null>(null);
  const [attire, setAttire] = useState<typeof ATTIRE[number] | null>(null);
  const [size, setSize] = useState<string>('');
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState<Array<{ design: string; attire: string; size: string; qty: number; price: number; art: string }>>([]);
  const [checkingOut, setCheckingOut] = useState(false);

  const total = useMemo(() => cart.reduce((t, i) => t + i.price * i.qty, 0), [cart]);
  const count = useMemo(() => cart.reduce((t, i) => t + i.qty, 0), [cart]);

  function pickDesign(d: typeof DESIGNS[number]) {
    setDesign(d);
    setTimeout(() => setStep(2), 300);
  }
  function pickAttire(a: typeof ATTIRE[number]) {
    setAttire(a);
    setSize(a.sizes[0]);
    setQty(1);
    setStep(3);
  }
  function addToCart() {
    if (!design || !attire) return;
    setCart((c) => [...c, { design: design.name, attire: attire.name, size, qty, price: attire.price, art: design.art }]);
    setStep(4);
  }
  function removeItem(i: number) {
    setCart((c) => c.filter((_, x) => x !== i));
  }

  async function checkout() {
    setCheckingOut(true);
    try {
      const items = cart.map((i) => ({ design: i.design, attire: i.attire, size: i.size, qty: i.qty, price: i.price }));
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else { alert('Checkout error: ' + (data.error || 'try again')); setCheckingOut(false); }
    } catch {
      alert('Network error'); setCheckingOut(false);
    }
  }

  return (
    <div className="merch">
      <header className="merch-hero">
        <span className="step-badge">Build Your Own</span>
        <h1>Field Trip Merch</h1>
        <p>Pick a design, choose your garment, see it, check out. Printed + shipped on demand.</p>
      </header>

      {/* progress rail */}
      <div className="progress">
        {STEPS.map((label, i) => {
          const n = i + 1;
          return (
            <div key={label} className={`progress-step ${step === n ? 'active' : ''} ${step > n ? 'done' : ''}`}>
              <span className="dot">{n}</span><span>{label}</span>
            </div>
          );
        })}
      </div>

      {/* STEP 1 — design */}
      {step === 1 && (
        <div className="design-grid">
          {DESIGNS.map((d) => (
            <button key={d.id} className={`design-card ${design?.id === d.id ? 'selected' : ''}`} onClick={() => pickDesign(d)}>
              <img src={d.art} alt={d.name} loading="lazy" />
              <span className="design-card__name">{d.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* STEP 2 — attire */}
      {step === 2 && design && (
        <div>
          <div className="chosen-strip">
            <img src={design.art} alt="" />
            <div>
              <strong>{design.name}</strong>
              <button className="link-btn" onClick={() => setStep(1)}>Change design</button>
            </div>
          </div>
          <div className="attire-grid">
            {ATTIRE.map((a) => (
              <button key={a.id} className="attire-card" onClick={() => pickAttire(a)}>
                <div className="attire-card__mock"><img src={design.art} alt={a.name} loading="lazy" /></div>
                <div className="attire-card__name">{a.name}</div>
                <div className="attire-card__price">${a.price}</div>
                <div className="attire-card__sizes">{a.sizes.join(' · ')}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3 — mockup */}
      {step === 3 && design && attire && (
        <div className="mockup-wrap">
          <img className="mockup-img" src={design.art} alt="Mockup" />
          <div className="mockup-side">
            <h3>{design.name} {attire.name}</h3>
            <p className="muted">{design.blurb}</p>
            <div className="sizes">
              {attire.sizes.map((z) => (
                <button key={z} className={`size-btn ${z === size ? 'active' : ''}`} onClick={() => setSize(z)}>{z}</button>
              ))}
            </div>
            <div className="qty-row">
              <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <div className="mockup-price">${attire.price}</div>
            <button className="cta" onClick={addToCart}>Add to Cart</button>
            <button className="link-btn" onClick={() => setStep(2)}>Change garment</button>
          </div>
        </div>
      )}

      {/* STEP 4 — cart */}
      {step === 4 && (
        <div>
          {cart.length === 0 ? (
            <p className="muted center">Your cart is empty.</p>
          ) : (
            <div className="cart-list">
              {cart.map((it, i) => (
                <div key={i} className="cart-item">
                  <img src={it.art} alt="" />
                  <div className="cart-item__info">
                    <strong>{it.design} {it.attire}</strong>
                    <span className="muted">Size {it.size} × {it.qty}</span>
                  </div>
                  <div className="cart-item__price">${it.price * it.qty}</div>
                  <button className="cart-item__remove" onClick={() => removeItem(i)}>×</button>
                </div>
              ))}
            </div>
          )}
          <div className="cart-total-row"><span>Total</span><strong>${total}</strong></div>
          <button className="cta" disabled={!cart.length || checkingOut} onClick={checkout}>
            {checkingOut ? 'Opening checkout…' : 'Buy Now — Secure Checkout'}
          </button>
          <p className="fineprint">Payments by Stripe. Fulfilled by Printful.</p>
          <button className="link-btn" onClick={() => setStep(1)}>Keep shopping</button>
        </div>
      )}

      {/* sticky cart bar */}
      {count > 0 && step !== 4 && (
        <div className="cart-bar">
          <span>{count} {count === 1 ? 'item' : 'items'}</span>
          <button className="cta cta--small" onClick={() => setStep(4)}>View Cart →</button>
        </div>
      )}
    </div>
  );
}
