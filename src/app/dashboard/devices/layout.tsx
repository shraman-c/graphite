import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devices - Graphite',
  description: 'Manage your connected devices and sync status for Graphite.',
};

export default function DevicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
