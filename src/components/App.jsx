import _ from "lodash";

const modals = [
  { id: 1, title: "Welcome 1", title1: "Hey", text: "text" },
  { id: 2, title: "Welcome 2", title1: "Hey", text: "text" },
  { id: 3, title: "Welcome 3", title1: "Hey", text: "text" },
  { id: 4, title: "Welcome 4", title1: "Hey", text: "text" },
  { id: 5, title: "Welcome 5", title1: "Hey", text: "text" },
];

const App = ({ store, setStore }) => {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="main">
        {modals.map((modal, index) => {
          return (
            <button
              key={`modal-${index}`}
              onClick={() => {
                const newStore = _.cloneDeep(store);
                _.set(newStore, `modalProperty.showModal`, modal.title);
                _.set(newStore, `modalProperty.title`, modal.title);
                _.set(newStore, `modalProperty.title1`, modal.title1);
                _.set(newStore, `modalText`, modal.text);
                setStore(newStore);
              }}
            >
              Modal {modal.id}
            </button>
          );
        })}

        {/* <button id="modal-1">Modal 1</button>
        <button id="modal-2">Modal 2</button>
        <button id="modal-3">Modal 3</button>
        <button id="modal-4">Modal 4</button>
        <button id="modal-5">Modal 5</button> */}
      </div>
    </div>
  );
};

export default App;
