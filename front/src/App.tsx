import { RoutesMain } from "./Routes";
import { RegisterLoginProvider } from "./providers/RegistesLoginProvider";
function App() {
  return (
    <>
      <RegisterLoginProvider>
        <RoutesMain />
      </RegisterLoginProvider>
    </>
  );
}

export default App;
