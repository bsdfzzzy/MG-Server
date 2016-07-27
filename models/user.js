export default (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        priority: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        time: {
            type: DataTypes.NOW,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        }
    }, {
        classMethods: {
            associate: models => {
                User.hasMany(models.Task);
            }
        }
    });
    return User;
}