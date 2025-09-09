export default function ProductLayout({
  children,
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modals}
    </>
  );
}
