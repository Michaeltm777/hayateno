import Image from "next/image";

export function Logo({
  className = "h-12 w-12",
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <span className={`relative inline-block overflow-hidden rounded-full ${className}`}>
      <Image
        src="/images/HayatehNo_logo.png"
        alt=""
        fill
        sizes="48px"
        className="object-cover"
        preload={preload}
      />
    </span>
  );
}
