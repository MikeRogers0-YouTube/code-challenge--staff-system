function StaffList() {
  var users = [];
  var listElement = document.querySelector('#staff-list');
  var addUserElement = document.querySelector('#add-user');

  function addUser(user) {
    users.push( user );
  }

  function removeUser(user){
    users.pop(user)
  }

  function render() {
    listElement.innerHTML = users.map(function(user, index){
      return `<li data-index="${index}">${user.name} - ${user.email}</li>`;
    }).join('');
  }

  function addUserFormSubmitEvent(event) {
    event.preventDefault();
    var user = User(
      this.querySelector('[name="name"]').value,
      this.querySelector('[name="email"]').value
    );

    addUser( user );
    render();
  }

  // Add our listener in.
  addUserElement.addEventListener('submit', addUserFormSubmitEvent);

  return {
    addUser: addUser,
    removeUser: removeUser,
    render: render
  };
}
