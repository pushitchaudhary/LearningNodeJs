module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      }
    });
    return Blogs;
  };