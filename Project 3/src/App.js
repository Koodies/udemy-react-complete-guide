import Users from "./Components/Users";

function App() {
  return (
    <div class="wrapper">
      <header class="main-head">Header</header>
      <section class="content">
        <Users />
      </section>
      <aside class="left-side">test left</aside>
      <aside class="right-side">right side</aside>
    </div>
  );
}

export default App;
