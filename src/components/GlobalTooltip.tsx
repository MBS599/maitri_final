import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Tip = { text: string; x: number; y: number; placement: 'top' | 'bottom' };

const SHOW_DELAY = 300;
const GAP = 10;

/**
 * Renders every `title` attribute on the site as a styled tooltip.
 * The native tooltip is unreliable here: hover animations move the icon under a
 * still cursor, which resets the browser's tooltip timer, so it never appears.
 */
export default function GlobalTooltip() {
  const [tip, setTip] = useState<Tip | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const active = useRef<HTMLElement | null>(null);
  const bubble = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textOf = (el: HTMLElement) => {
      const title = el.getAttribute('title');
      if (title) {
        // keep the text but stop the native tooltip from showing as well
        el.setAttribute('data-tooltip', title);
        el.removeAttribute('title');
        if (!el.getAttribute('aria-label') && !el.textContent?.trim()) el.setAttribute('aria-label', title);
      }
      return el.getAttribute('data-tooltip') || '';
    };

    const targetFrom = (node: EventTarget | null) =>
      node instanceof Element ? (node.closest('[title], [data-tooltip]') as HTMLElement | null) : null;

    const place = (el: HTMLElement, text: string) => {
      const r = el.getBoundingClientRect();
      const placement: Tip['placement'] = r.top > 56 ? 'top' : 'bottom';
      setTip({
        text,
        x: r.left + r.width / 2,
        y: placement === 'top' ? r.top - GAP : r.bottom + GAP,
        placement,
      });
    };

    const show = (el: HTMLElement, delay: number) => {
      const text = textOf(el);
      if (!text) return;
      active.current = el;
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => active.current === el && place(el, text), delay);
    };

    const hide = () => {
      window.clearTimeout(timer.current);
      active.current = null;
      setTip(null);
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const el = targetFrom(e.target);
      if (el && el !== active.current) show(el, SHOW_DELAY);
    };
    const onOut = (e: PointerEvent) => {
      const el = active.current;
      if (el && !(e.relatedTarget instanceof Node && el.contains(e.relatedTarget))) hide();
    };
    const onFocus = (e: FocusEvent) => {
      const el = targetFrom(e.target);
      if (el && (e.target as Element).matches(':focus-visible')) show(el, 0);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && hide();

    document.addEventListener('pointerover', onOver, true);
    document.addEventListener('pointerout', onOut, true);
    document.addEventListener('focusin', onFocus, true);
    document.addEventListener('focusout', hide, true);
    document.addEventListener('pointerdown', hide, true);
    window.addEventListener('scroll', hide, true);
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer.current);
      document.removeEventListener('pointerover', onOver, true);
      document.removeEventListener('pointerout', onOut, true);
      document.removeEventListener('focusin', onFocus, true);
      document.removeEventListener('focusout', hide, true);
      document.removeEventListener('pointerdown', hide, true);
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // keep the bubble inside the viewport horizontally
  useEffect(() => {
    const b = bubble.current;
    if (!b || !tip) return;
    const w = b.offsetWidth;
    const left = Math.min(Math.max(tip.x - w / 2, 8), window.innerWidth - w - 8);
    b.style.left = `${left}px`;
  }, [tip]);

  if (!tip || typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={bubble}
      role="tooltip"
      className="pointer-events-none fixed z-[200] max-w-xs rounded-lg bg-on-surface px-2.5 py-1.5 text-xs font-semibold leading-snug text-surface shadow-card-hover ring-1 ring-white/15 animate-[fadeIn_120ms_ease-out]"
      style={{
        left: tip.x,
        top: tip.y,
        transform: tip.placement === 'top' ? 'translateY(-100%)' : undefined,
      }}
    >
      {tip.text}
    </div>,
    document.body
  );
}
