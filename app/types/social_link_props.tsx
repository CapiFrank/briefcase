import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SocialLinkProps {
  icon: IconProp;
  href: string;
  label?: string;
  isEmail?: boolean;
}
