import type { StaticImageData } from "next/image";
import OmmarLogo from "@/assets/img/project/ommar-logo.png";
import OmmarProject from "@/assets/img/project/ommar-project.png";
import SagaraLogo from "@/assets/img/project/sagara-logo.png";
import SagaraProject from "@/assets/img/project/sagara-project.png";
import StampLogo from "@/assets/img/project/stamp-logo.png";
import StampProject from "@/assets/img/project/stamp-project.png";
import SagaraIcon from "@/assets/img/experiences/ic-sagara.png";
import SoluvasIcon from "@/assets/img/experiences/ic-soluvas.png";
import MagprotechIcon from "@/assets/img/experiences/ic-magprotech.svg";
import BpjsLogo from "@/assets/img/experiences/ic-bpjs.svg";
import OcbcLogo from "@/assets/img/experiences/ocbc.svg";
import MaybankLogo from "@/assets/img/experiences/maybank.svg";

export const portfolioAssets: Record<string, StaticImageData> = {
  "ommar-logo": OmmarLogo,
  "ommar-project": OmmarProject,
  "sagara-logo": SagaraLogo,
  "sagara-project": SagaraProject,
  "stamp-logo": StampLogo,
  "stamp-project": StampProject,
  sagara: SagaraIcon,
  soluvas: SoluvasIcon,
  magprotech: MagprotechIcon,
  bpjs: BpjsLogo,
  ocbc: OcbcLogo,
  maybank: MaybankLogo,
};

export function resolvePortfolioAsset(value: string): StaticImageData | string {
  return portfolioAssets[value] ?? value;
}
