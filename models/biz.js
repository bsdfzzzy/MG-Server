export default (sequelize, DataTypes) => {
    let Biz = sequelize.define("Biz", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        column: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        playStart: {
            type: DataTypes.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        playFinish: {
            type: DataTypes.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        numOfNeeds: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        allReadyTime: {
            type: DataTypes.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        state: {
            type: DataTypes.BOOLEAN,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        }
    },{});
    return Biz;
}