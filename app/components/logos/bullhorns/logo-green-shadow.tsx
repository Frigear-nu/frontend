import Image from "next/image";
import logoGreenShadow from "@/public/logos/frigear-bullhorn-icon-4a2fda-d-blue.png";

interface LogoFullProps {
  width?: number;
  height?: number;
}

export default function LogoGreenShadow({ width, height }: LogoFullProps) {
  return (
    <Image
      src={logoGreenShadow}
      width={width}
      height={height}
      alt="Frigear Tekst-logo png"
      className="bullhorn-logo"
    />
  );
}
