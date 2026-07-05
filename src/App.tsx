import GameMain from "./components/GameMain";
import TopNav from "./components/TopNav";
import SnapContextProvider from "./context/SnapContextProvider";

function App() {
  return (
    <SnapContextProvider>
      <TopNav />
      <GameMain />
    </SnapContextProvider>
  );
}

export default App;
