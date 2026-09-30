"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";
import type { MapPoint } from "./ListingMap";

// Leaflet itself: loaded only when the visitor opens the map (next/dynamic
// in ListingMap), so the list pages do not carry ~45 kB of map code.
// Tiles: OpenStreetMap with its attribution (docs/architecture/map.md).

function pinHtml(accent: string, selected: boolean): string {
  const size = selected ? 34 : 26;
  return `<span style="display:block;width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${accent};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35)"></span>`;
}

function pinIcon(accent: string, selected: boolean) {
  const size = selected ? 34 : 26;
  return L.divIcon({
    className: "",
    html: pinHtml(accent, selected),
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });
}

export default function ListingMapInner({
  points,
  accent,
  origin,
  selectedId,
  onSelect,
}: {
  points: MapPoint[];
  accent: string;
  origin: { lat: number; lng: number } | null;
  selectedId: number | null;
  onSelect: (id: number | null) => void;
}) {
  const el = useRef<HTMLDivElement>(null);
  const markers = useRef(new Map<number, L.Marker>());
  const select = useRef(onSelect);
  useEffect(() => {
    select.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    if (!el.current) return;
    // CSS variables do not resolve inside Leaflet's HTML strings on every
    // browser, so the accent is read once from the page.
    const color = accent.startsWith("var(")
      ? getComputedStyle(el.current)
          .getPropertyValue(accent.slice(4, -1))
          .trim() || "#1f6feb"
      : accent;
    const map = L.map(el.current, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const byId = markers.current;
    for (const p of points) {
      const marker = L.marker([p.lat, p.lng], {
        icon: pinIcon(color, false),
        title: p.name,
        keyboard: true,
      })
        .on("click", () => select.current(p.id))
        .addTo(map);
      (marker as L.Marker & { accent?: string }).accent = color;
      byId.set(p.id, marker);
    }
    if (origin) {
      L.circleMarker([origin.lat, origin.lng], {
        radius: 8,
        color: "#fff",
        weight: 3,
        fillColor: "#2563eb",
        fillOpacity: 1,
      }).addTo(map);
    }
    const bounds = L.latLngBounds(
      points.map((p) => [p.lat, p.lng] as [number, number]),
    );
    if (origin) bounds.extend([origin.lat, origin.lng]);
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 15 });
    map.on("click", () => select.current(null));
    return () => {
      byId.clear();
      map.remove();
    };
  }, [points, accent, origin]);

  // Enlarge the selected pin and bring it to the front.
  useEffect(() => {
    for (const [id, marker] of markers.current) {
      const color =
        (marker as L.Marker & { accent?: string }).accent ?? "#1f6feb";
      marker.setIcon(pinIcon(color, id === selectedId));
      marker.setZIndexOffset(id === selectedId ? 1000 : 0);
    }
  }, [selectedId]);

  return <div ref={el} className="h-full w-full" />;
}
