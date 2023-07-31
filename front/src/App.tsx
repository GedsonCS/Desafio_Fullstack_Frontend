import { RoutesMain } from "./Routes";
import { ContactProvider } from "./providers/ContactProvider";
import { RegisterLoginProvider } from "./providers/RegistesLoginProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RegisterLoginProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </RegisterLoginProvider>
      <ToastContainer />
    </>
  );
}

export default App;
