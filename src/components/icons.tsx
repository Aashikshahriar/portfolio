import {
  SiGooglescholar,
  SiResearchgate,
  SiOrcid,
  SiGithub,
  SiKaggle,
  SiFacebook,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";
import type { SocialLink } from "@/data/profile";

const iconMap: Record<SocialLink["icon"], IconType> = {
  mail: HiOutlineMail,
  scholar: SiGooglescholar,
  researchgate: SiResearchgate,
  orcid: SiOrcid,
  github: SiGithub,
  kaggle: SiKaggle,
  linkedin: FaLinkedin,
  facebook: SiFacebook,
};

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}
