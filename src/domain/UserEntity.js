class User {
  constructor({ id, name, email, password, role = 'patient', createdAt, updatedAt }) {
    this.id = id; //optional
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;


  }
}
module.exports = User;