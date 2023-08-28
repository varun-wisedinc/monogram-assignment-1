import Card from "../components/Card";
import Cover from "../components/Cover";
import Navbar from "../components/Navbar";
import card1 from "../images/card1.webp";
function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Card
        title="MINI CONSOLE"
        text="Ideal for everyday shortcuts. Adaptable to any workflow."
        preOrder={true}
        imageLink={card1}
        price={202}
        width={550}
        height={350}
      />
    </div>
  );
}

export default App;
