module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("Address", {
    address: Sequelize.STRING,
    district: Sequelize.STRING,
    city: Sequelize.STRING,
    province: Sequelize.STRING,
    longitude: Sequelize.STRING,
    latitude: Sequelize.STRING,
  });
  return Address;
};
