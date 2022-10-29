import { StatusBar } from "expo-status-bar";

// upper navigation
import ExpenseContextProvider from "./store/expense-context";
import { Navigation } from "./infrastructure/navigation";
import { AuthenticationContextProvider } from "./services/authentication.context";
import { SafeArea } from "./util/safe-area.component";

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
