import _ from "lodash";

const Modal = ({ store, setStore }) => {
  return (
    <div
      className="modal"
      style={{
        display: store.modalProperty.showModal ? "block" : "none",
      }}
    >
      <div className="background"></div>

      <div className="modal-container">
        <div className="header">
          {store.modalProperty.title}
          <button
            onClick={() => {
              const newStore = _.cloneDeep(store);
              _.set(newStore, `modalProperty.showModal`, false);
              setStore(newStore);
            }}
          >
            x
          </button>
        </div>
        <div className="body">
          <h2>{store.modalProperty.title1}</h2>

          <p>{store.modalText}</p>
        </div>
      </div>
    </div>

    // <div

    //   className="modal-content"
    //   style={
    //     {
    //       // display: "none"
    //     }
    //   }
    // >
    //   <h2
    //     style={{
    //       textAling: "left",
    //     }}
    //   >
    //     Welcome!
    //   </h2>
    //   <p>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    //     deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi
    //     eos, corrupti animi repellat aliquam, deleniti facere quidem itaque
    //     eligendi?
    //   </p>
    // </div>
  );
};

export default Modal;
