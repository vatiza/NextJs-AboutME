"use client";

const RafsanTravels = () => {
  return (
    <div className="flex gap-8">
      <div>
        <a
          className="btn btn-warning btn-sm"
          href="https://rafsan-tourist-travels-bd.web.app/"
        >
          Live View
        </a>
      </div>
      <div>
        <button
          className="btn btn-outline btn-success btn-sm"
          onClick={() => document.getElementById("features").showModal()}
        >
          Features
        </button>
        <dialog id="features" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Features of Rafsan Tourist & Travel BD!
            </h3>
            <div className="py-4">
              <ul>
                <li>* User Authentication</li>
                <li>* Booking and User Management</li>
                <li>* Admin Functionalities</li>
                <li>* Dynamic Data Loading</li>
                <li>* Routing</li>
                <li>* Payment Processing</li>
              </ul>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error btn-sm">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        <button
          className="btn btn-outline btn-success btn-sm"
          onClick={() => document.getElementById("technology").showModal()}
        >
          Technologies
        </button>
        <dialog id="technology" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Used Technologies.</h3>
            <div className="py-4">
              <ul>
                <li className="font-bold">* Frontend:</li>
                <li className="ms-4">React.js</li>
                <li className="ms-4">SwiperJS</li>
                <li className="ms-4">EmailJS</li>
                <li className="ms-4">React Hook Form</li>
                <li className="ms-4">TanStack Query</li>
                <li className="ms-4">Axios</li>
                <li className="ms-4">Parallax</li>
                <li className="font-bold">* Backend:</li>
                <li className="ms-4">Express.Js</li>
                <li className="ms-4">MongoDB</li>
                <li className="font-bold">Payment Integration</li>
                <li className="ms-4">BKash</li>
              </ul>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error btn-sm ">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default RafsanTravels;
