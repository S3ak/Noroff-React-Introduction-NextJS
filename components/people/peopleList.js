import { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();

      setPeople(json.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <section>
      {people.map((person) => (
        <div key={person.id}>
          <h2>{person.first_name}</h2>
          <p>{person.email}</p>
          <img src={person.avatar} alt={person.first_name} />
        </div>
      ))}
    </section>
  );
};

export default People;
