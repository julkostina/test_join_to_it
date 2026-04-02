import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import CalendarView from "./components/Calendar/CalendarView";
import {
  MainContainer,
  CalendarSectionContainer,
  CalendarCard,
  PageTitle,
} from "./App.styled";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Aside />
        <CalendarSectionContainer>
          <PageTitle>Calendar</PageTitle>
          <CalendarCard>
            <CalendarView />
          </CalendarCard>
        </CalendarSectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
