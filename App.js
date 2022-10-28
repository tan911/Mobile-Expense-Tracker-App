import { StatusBar } from "expo-status-bar";

// upper navigation
import ExpenseContextProvider from "./store/expense-context";
import { AuthenticationContextProvider } from "./services/authentication.context";
import { Navigation } from "./infrastructure/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthenticationContextProvider>
        <ExpenseContextProvider>
          <Navigation />
        </ExpenseContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}
