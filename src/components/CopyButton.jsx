import { useClipboard } from "../hooks/useClipboard.js";

function CopyButton({ textToCopy, ariaLabel, title }) {
  const { copied, copy } = useClipboard();

  return (
    <button
      onClick={() => {
        copy(textToCopy);
      }}
      className="ml-1 flex-shrink-0 cursor-pointer opacity-40 transition-opacity hover:opacity-100"
      aria-label={ariaLabel}
      title={title}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent)" }}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default CopyButton;
