import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  wrapperClassName?: string;
  logoClassName?: string;
  sideBarOpen?: boolean;
  textClassName?: string;
}

export default function Logo({
  wrapperClassName,
  logoClassName,
  sideBarOpen,
  textClassName,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", wrapperClassName)}>
      <Image
        src={"/images/logo.png"}
        alt="Website logo"
        width={40}
        height={40}
        className={cn("size-10 object-cover", logoClassName)}
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
      />
      <h3
        className={cn(
          "bg-gradient-to-r from-[#e6adc5] to-[#8d00f7] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent transition-[transform,opacity,display] ease-in-out duration-300 whitespace-nowrap",
          textClassName,
          sideBarOpen === false
            ? "-translate-x-96 opacity-0 hidden"
            : "translate-x-0 opacity-100"
        )}
      >
        {siteConfig.name}
      </h3>
    </div>
  );
}
