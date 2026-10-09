/**
 * Public website configuration.
 *
 * Set these values in the deployment environment only after the publisher has
 * verified them. The fallback URL is a reserved example domain so it cannot be
 * mistaken for a live publisher website.
 */
function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return "https://techledger.example";
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return "https://techledger.example";
  }
}

function getOptionalValue(value: string | undefined) {
  const trimmedValue = value?.trim();
  return trimmedValue || null;
}

function getBooleanValue(value: string | undefined) {
  return value === "true";
}

export const siteConfig = {
  name: "TechPulseDaily",
  url: getSiteUrl(),
  publisherName: getOptionalValue(process.env.NEXT_PUBLIC_PUBLISHER_NAME),
  contactEmail: getOptionalValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  optionalCookiesEnabled: getBooleanValue(process.env.NEXT_PUBLIC_OPTIONAL_COOKIES_ENABLED),
  adPlacementsEnabled: getBooleanValue(process.env.NEXT_PUBLIC_AD_PLACEMENTS_ENABLED),
};

/**
 * Add only publisher-verified public biographical information here. `null`
 * deliberately renders a transparent editorial-team fallback instead of a
 * fictional person, credential, or social account.
 */
export const authorProfiles = {
  "maya-chen": { name: null, title: null, bio: null, social: [] },
  "eli-hart": { name: null, title: null, bio: null, social: [] },
  "sophia-rivera": { name: null, title: null, bio: null, social: [] },
  "nolan-price": { name: null, title: null, bio: null, social: [] },
  "zoe-martin": { name: null, title: null, bio: null, social: [] },
} as const;

export const unverifiedAuthorProfile = {
  name: "TechPulseDaily Editorial Team",
  title: "Contributor information pending verification",
  bio: "This byline is associated with TechPulseDaily editorial content. Individual contributor details will be published only after the publisher has verified them.",
};

export const hasConfiguredSiteUrl = siteConfig.url !== "https://techledger.example";

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString();
}
