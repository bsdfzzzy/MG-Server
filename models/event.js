export default (sequelize, DataTypes) => {
    let Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        system: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        event: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        }
    }, {});
    return Event;
}