// wrappers import
import Container from "./components/utils/wrappers/Container";
import FlexColumnWrapper from "./components/utils/wrappers/FlexColumnWrapper";
import FlexRowWrapper from "./components/utils/wrappers/FlexRowWrapper";
import { useMetamask } from "./hooks/useMetamask";

function App() {
  const { signer, accounts, network, connect, getAccounts, sendTransaction } =
    useMetamask();
  console.log(accounts, signer);
  return (
    <Container>
      <button onClick={connect}>Connect Metamask</button>
      <FlexRowWrapper>Flex Row Wrapper</FlexRowWrapper>
      <FlexColumnWrapper>Flex Column Wrapper</FlexColumnWrapper>
    </Container>
  );
}

export default App;
