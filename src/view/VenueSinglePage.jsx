import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import { BsCalendarDate } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./styles.css";
const VenueSinglePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const { venue } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center bg-primary text-white w-100">
          Mater Dei College {venue.building}
        </h1>
        {error && (
          <p className="text-danger text-center">
            Something's wrong fetching the API
          </p>
        )}
        {loading && (
          <p className="text-white bg-success text-center">
            Loading building and schedule record ....
          </p>
        )}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1
          className={
            schedule.length > 0
              ? "text-center text-white bg-primary"
              : "text-white text-center bg-info"
          }
        >
          {schedule.length > 0 ? "Schedules" : "No Schedule Found"}
        </h1>
        <div className="wrapper">
          {Object.keys(schedule)?.map((sched, index) => {
            return (
              <div
                className="card m-2 elevation-3"
                style={{
                  width: "400px",
                  height: "290px",
                }}
                key={index}
              >
                <div>
                  <div className="card-header bg-primary text-white">
                    <p className="card-text">ID: {schedule[sched].id}</p>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      <BsFillJournalBookmarkFill
                        color="red"
                        style={{ marginRight: "5", marginLeft: "2" }}
                      />
                      Course No.
                      {schedule[sched].course_no}
                    </p>
                    <p className="card-text">
                      <TbFileDescription color="blue" fontSize={20} />{" "}
                      Description: {schedule[sched].description}
                    </p>
                    <p className="card-text">
                      <BsCalendarDate
                        color="green"
                        style={{ marginLeft: "2", marginRight: "7" }}
                      />
                      Schedule: {schedule[sched].schedule}
                    </p>
                    <p className="card-text">Size: {schedule[sched].size}</p>
                    <p className="card-footer card-text">
                      <CgProfile
                        color="orangered"
                        style={{ marginRight: "2", marginTop: "-4" }}
                      />
                      Teacher: <strong>{schedule[sched].teacher}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link to="/" className="btn btn-sm btn-primary mt-1">
        <BiArrowBack />
        back
      </Link>
    </>
  );
};

export default VenueSinglePage;
