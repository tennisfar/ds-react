const WELCOME_SHOULD_SHOW_KEY = 'KlubLottoWelcomeShouldShow';
const ONBOARDING_SHOULD_SHOW_KEY = 'KlubLottoOnboardingShouldShow';

export function setMembershipCreatedStorageItems(): void {
  localStorage.setItem(WELCOME_SHOULD_SHOW_KEY, 'true');
  localStorage.setItem(ONBOARDING_SHOULD_SHOW_KEY, 'true');
}

export function shouldShowWelcome(): boolean {
  return localStorage.getItem(WELCOME_SHOULD_SHOW_KEY) === 'true';
}

export function shouldShowOnboarding(): boolean {
  return localStorage.getItem(ONBOARDING_SHOULD_SHOW_KEY) === 'true';
}

export function hasSeenWelcome(): void {
  localStorage.removeItem(WELCOME_SHOULD_SHOW_KEY);
}

export function hasSeenOnboarding(): void {
  localStorage.removeItem(ONBOARDING_SHOULD_SHOW_KEY);
}
