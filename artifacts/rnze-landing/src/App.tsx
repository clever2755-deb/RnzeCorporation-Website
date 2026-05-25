import { Router as WouterRouter, Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
