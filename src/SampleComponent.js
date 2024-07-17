const SampleComponent = () => {
  const companies = [
    { name : "Sogeti", location: "France" },
    { name : "Capgemini", location: "USA" }
  ];
  return (
    <div>
      {companies.map((company) => (
        <p>{company.name} is company from [{company.location}]</p>
      ))}
    </div>
  )
}
export default SampleComponent;
