// adopt an animal
function adoptAnimal(id) {
    fetch(`/animals/adopt/${id}`, {
      method: 'POST'
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error adopting animal.'));
  }
  
  // delete an animal
  function deleteAnimal(id) {
    fetch(`/animals/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error deleting animal.'));
  }
  
  //update species
  function updateSpecies(id) {
    const newSpecies = prompt("Update species");
    fetch(`/species/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newSpecies })
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error updating species.'));
  }
  
  // delete species
  function deleteSpecies(id) {
    fetch(`/species/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error deleting species.'));
  }
  
  // update temperament
  function updateTemperament(id) {
    const newTemperament = prompt("Update temperament");
    fetch(`/temperament/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newTemperament })
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error updating temperament.'));
  }
  
  // delete temperament
  function deleteTemperament(id) {
    fetch(`/temperament/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => alert('Error deleting temperament.'));
  }
  