import raw from "../data/site.json";

interface Job {
  period: string;
  company: string;
  role: string;
  description?: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title?: string;
}

// site.json plus a few derived values. Fields added in v2 may be missing
// or empty, so every page reads them through here.
export const site = {
  ...raw,
  workHistory: ((raw as { workHistory?: Job[] }).workHistory ?? []).filter((j) => j?.company),
  testimonials: ((raw as { testimonials?: Testimonial[] }).testimonials ?? []).filter((t) => t?.quote),
  phone: (raw as { phone?: string }).phone?.trim() ?? "",
  // An uploaded PDF wins over an external résumé link.
  resumeUrl: (raw as { resumeFile?: string }).resumeFile?.trim() || raw.resume || "",
};

// "0912 345 678" -> "0912345678" for tel: and Zalo links.
export const phoneDigits = site.phone.replace(/[^\d+]/g, "");
