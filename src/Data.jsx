export default function Data({ props }) {
  const Data = [
    {
      name: " Kalu Rosabel",
      class: "400 Level",
      course: "Computer Science",
      Id: "0023457903",
    },
    {
      name: "Esther Hyginus",
      class: "300 Level",
      course: "Mathematics",
      Id: "0023457904",
    },
    {
      name: "James Sifon",
      class: "100 Level",
      course: "Micro-Biology",
      Id: "0023457905",
    },
    {
      name: "Nsidibe Prosper",
      class: "100 Level",
      course: "Public Administration",
      Id: "0023457909",
    },
    {
      name: "Happiness Oyomoifo",
      class: "400 Level",
      course: "Mass Communication",
      Id: "0023457900",
    },
    {
      name: "Mark Christabel",
      class: "200 Level",
      course: "Agricultural Science",
      Id: "0023457911",
    },
  ];

  console.log(props);
  return (
    <ul>
      {Data.map((props) => (
        <li key={props.name}>
          {props.name} / {props.class} / {props.course} / {props.Id}
        </li>
      ))}
    </ul>
  );
}
