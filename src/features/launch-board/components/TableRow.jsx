import { useRef, useState } from "react";
import { Modal } from "../../../components";
import { useDetectClickOutside } from "../../../hooks";
import { LaunchInfo } from "./LaunchInfo";

const TableRow = ({ launch }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useDetectClickOutside(modalRef, setShowModal);

  const { mission_name, flight_number, rocket, launch_date_local, launch_success, upcoming } =
    launch;

  return (
    <>
      <tr
        onClick={() => setShowModal(true)}
        title={mission_name}
        className=" hover:bg-slate-50 hover:text-zinc-900 transition-colors cursor-pointer"
      >
        <td className="p-2">{mission_name}</td>
        <td>{flight_number}</td>
        <td>{rocket.rocket_name}</td>
        <td>{`${new Date(launch_date_local).getDate()}/${new Date(
          launch_date_local
        ).getMonth()}/${new Date(launch_date_local).getFullYear()}`}</td>
        <td>{launch_success ? "Success" : upcoming ? "Upcoming" : "Failed"}</td>
        <td className="hover:bg-zinc-900 hover:text-slate-50 cursor-auto">
          <Modal showModal={showModal}>
            <LaunchInfo ref={modalRef} launch={launch} setShowModal={setShowModal} />
          </Modal>
        </td>
      </tr>
    </>
  );
};

export { TableRow };
