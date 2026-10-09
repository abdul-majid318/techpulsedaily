/**
 * Future RevBid integration boundary. Do not add script URLs, publisher IDs,
 * bidder settings, consent vendor IDs, refresh logic, or unit IDs until RevBid
 * provides and approves the exact production configuration.
 */
export function canLoadRevBid({ advertisingConsent, approvedConfiguration }: { advertisingConsent: boolean; approvedConfiguration: boolean }) {
  return advertisingConsent && approvedConfiguration;
}
