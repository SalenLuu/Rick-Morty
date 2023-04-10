import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ residents }) => {
  return (
    <div>
      <section className="residentlist">
        {residents.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </section>
    </div>
  );
};

export default ResidentList;
