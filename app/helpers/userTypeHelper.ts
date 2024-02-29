import { Session } from "next-auth";

// Extend the Session interface
interface ExtendedSession extends Session {
  user_types?: string;
}
