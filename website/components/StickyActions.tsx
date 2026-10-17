"use client";

import { useEffect, useState } from "react";
import { QuickActions } from "./QuickActions";
import type { Locale } from "@/lib/i18n";

/** Call, Website and Directions pinned to the bottom of a phone screen on a
 *  place page (owner, 2026-10-17, like ZocDoc's "Book an appointment").
 *  Hidden while the contact card with the same buttons is on screen, and at
 *  the footer. Not shown at lg and up (the contact card is a sidebar there). */
export function StickyActions({
  businessId,
  phone,
  website,
  address,
  locale,
}: {
  businessId: number;
  phone: string | null;
  website: string | null;
  address: string;
  locale: Locale;
}) {
  const [contactInView, setContactInView] = useState(true);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    const footer = document.querySelector("body > footer");
    const observers: IntersectionObserver[] = [];
    if (contact) {
      const o = new IntersectionObserver(([e]) => setContactInView(e.isIntersecting));
      o.observe(contact);
      observers.push(o);
    }
    if (footer) {
      const o = new IntersectionObserver(([e]) => setFooterInView(e.isIntersecting));
      o.observe(footer);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (contactInView || footerInView) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto max-w-xl">
        <QuickActions businessId={businessId} phone={phone} website={website} address={address} layout="grid" locale={locale} />
      </div>
    </div>
  );
}
