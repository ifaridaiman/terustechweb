import Link from "next/link";

import { announcementBar } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="bg-accent-tint py-2 text-center text-small text-ink">
      {announcementBar.text}{" "}
      <Link
        href={announcementBar.href}
        className="underline decoration-ink underline-offset-2 hover:decoration-2"
      >
        {announcementBar.linkText} →
      </Link>
    </div>
  );
}
