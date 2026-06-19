export interface UserSession {
  role: "Customer" | "Homemaker" | "Admin" | null;
  email: string | null;
  homemakerId?: string;
}

const SESSION_KEY = "her_homenest_session";

export const getActiveSession = (): UserSession => {
  if (typeof window === "undefined") {
    return { role: null, email: null };
  }

  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) {
    return { role: null, email: null };
  }

  try {
    return JSON.parse(stored) as UserSession;
  } catch {
    return { role: null, email: null };
  }
};

export const setActiveSession = (session: UserSession) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
};
