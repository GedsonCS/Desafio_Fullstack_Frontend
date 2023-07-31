import { RoutesMain } from "./Routes";
import { ContactProvider } from "./providers/ContactProvider";
import { RegisterLoginProvider } from "./providers/RegistesLoginProvider";
function App() {
  return (
    <>
      <RegisterLoginProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </RegisterLoginProvider>
    </>
  );
}

export default App;
