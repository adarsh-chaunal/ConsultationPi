export const UserQueryHolder = {
    GET_BY_ID: `SELECT * FROM Users WHERE Id = $1`,
    GET_BY_UNIQUE_ID: `SELECT * FROM Users WHERE UniqueId = $1`,
    GET_BY_EMAIL: `SELECT * FROM Users WHERE Email = $1`,
    CREATE: `INSERT INTO Users (FirstName, LastName, Email, Password) VALUES ($1, $2, $3, $4) RETURNING *`,
    UPDATE: `UPDATE Users SET FirstName = $1, LastName = $2, Email = $3 WHERE UniqueId = $4 RETURNING *`,
    DELETE: `DELETE FROM Users WHERE UniqueId = $1`,
    GET_ALL: `SELECT * FROM Users`,
    ARCHIVE: `UPDATE Users SET IsArchived = true WHERE UniqueId = $1`,    
    ACTIVATE: `UPDATE Users SET IsActive = true WHERE UniqueId = $1`,
    GET_ALL_ACTIVE: `SELECT * FROM Users WHERE IsActive = true`,
    GET_ALL_ARCHIVED: `SELECT * FROM Users WHERE IsArchived = true`,
    GET_ALL_INACTIVE: `SELECT * FROM Users WHERE IsActive = false`,
    DEACTIVATE: `UPDATE Users SET IsActive = false WHERE UniqueId = $1`,
    GET_ALL_INACTIVE_ARCHIVED: `SELECT * FROM Users WHERE IsActive = false AND IsArchived = true`,
    GET_ALL_INACTIVE_ACTIVE: `SELECT * FROM Users WHERE IsActive = false AND IsArchived = false`,
    GET_ALL_ARCHIVED_ACTIVE: `SELECT * FROM Users WHERE IsActive = true AND IsArchived = true`,
    GET_ALL_ARCHIVED_INACTIVE: `SELECT * FROM Users WHERE IsActive = false AND isArchived = true`
}