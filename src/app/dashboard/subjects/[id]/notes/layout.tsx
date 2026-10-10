import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes - Graphite',
  description: 'View and manage all your raw markdown notes synced for this subject.',
};

export default function NotesLayout({ 
  children,
  params
}: { 
  children: React.ReactNode,
  params: Promise<{ id: string }>
}) {
  return <>{children}</>;
}
