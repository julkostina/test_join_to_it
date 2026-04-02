import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import CalendarView from "./components/Calendar/CalendarView";
import { MainContainer, CalendarSectionContainer, H2Container} from "./App.styled";
function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Aside />
        <CalendarSectionContainer>
          <H2Container>Calendar</H2Container>
          <CalendarView />
        </CalendarSectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
