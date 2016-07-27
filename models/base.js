export default (sequelize, DataTypes) => {
    let Base = sequelize.define("Base", {
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
        subsystem: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        supervisor_1: DataTypes.STRING,
        supervisor_2: DataTypes.STRING,
        supervisor_3: DataTypes.STRING,
        respector: DataTypes.STRING,
        experiment: DataTypes.STRING,
        IP: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        type: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        work: DataTypes.TEXT,
        category: DataTypes.STRING,
        stateOrData: DataTypes.STRING,
        More: DataTypes.STRING
    }, {});
    return Base;
}