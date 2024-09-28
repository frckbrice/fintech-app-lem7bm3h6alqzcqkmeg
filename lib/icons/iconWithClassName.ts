import type { LucideIcon } from 'lucide-react-native';
import { cn } from '../utils';

export function iconWithClassName(icon: LucideIcon) {
  cn(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}