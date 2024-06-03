interface IconArrowProps {
  className?: string;
}

export default function IconArrow({ className }: IconArrowProps) {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="icon arrow"
    >
      <path
        d="M20.1625 28.7803C17.8084 30.934 20.1854 33.0877 22.5823 30.934C24.9792 28.7803 39.3478 16.0118 39.3478 16.0118C39.3478 16.0118 25.2038 3.24332 22.5823 1.0896C19.9608 -1.06412 17.4654 0.962583 20.1625 3.24332C22.1781 4.94771 29.1927 11.2354 32.6092 14.3043H0.913086V17.6956H32.6073C29.1279 20.7788 21.9297 27.1635 20.1625 28.7803Z"
        fill="currentColor"
      />
    </svg>
  );
}
