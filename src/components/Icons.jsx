// Small inline SVG icons, so there are no extra image files to load.

export function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M5 1v8M1 5h8" />
    </svg>
  );
}

export function MinusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M1 5h8" />
    </svg>
  );
}

export function RemoveIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
      <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" />
    </svg>
  );
}

export function TreeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(159, 69%, 38%)"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21v-6" />
      <path d="M12 15c-4 0-7-3-7-7a7 7 0 0 1 14 0c0 4-3 7-7 7Z" />
      <path d="M12 12l3-3" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="hsl(159, 69%, 38%)" />
      <path d="M14 25l7 7 13-14" stroke="#fff" strokeWidth="4" strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  );
}

export function EmptyCartIcon() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" aria-hidden="true">
      <ellipse cx="64" cy="92" rx="44" ry="10" fill="hsl(13, 31%, 94%)" />
      <path d="M34 88 52 40h40l-10 48Z" fill="hsl(14, 25%, 72%)" />
      <path d="M52 40h40l-3 14H49Z" fill="hsl(20, 50%, 98%)" />
      <circle cx="74" cy="32" r="7" fill="hsl(14, 86%, 42%)" />
    </svg>
  );
}