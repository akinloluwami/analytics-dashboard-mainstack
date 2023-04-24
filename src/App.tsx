import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="flex overflow-y-scroll">
      <div className="w-1/5 bg-white py-5 fixed border-l border-[#EFF1F6]">
        <Sidebar />
      </div>
      <div className="w-4/5 ml-[20%] px-10 py-5">
        <Main />
      </div>
    </div>
  );
};

export default App;
