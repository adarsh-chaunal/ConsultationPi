export const UserQueryHolder = {
    GET_BY_ID: `SELECT * FROM users WHERE id = $1`,
    GET_BY_UNIQUE_ID: `SELECT * FROM users WHERE uniqueId = $1`,
    GET_BY_EMAIL: `SELECT * FROM users WHERE email = $1`,
    CREATE: `INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
    UPDATE: `UPDATE users SET firstName = $1, lastName = $2, email = $3 WHERE uniqueId = $4 RETURNING *`,
    DELETE: `DELETE FROM users WHERE uniqueId = $1`,
    GET_ALL: `SELECT * FROM users`,
    ARCHIVE: `UPDATE users SET isArchived = true WHERE uniqueId = $1`,    
    ACTIVATE: `UPDATE users SET isActive = true WHERE uniqueId = $1`,
    GET_ALL_ACTIVE: `SELECT * FROM users WHERE isActive = true`,
    GET_ALL_ARCHIVED: `SELECT * FROM users WHERE isArchived = true`,
    GET_ALL_INACTIVE: `SELECT * FROM users WHERE isActive = false`,
    DEACTIVATE: `UPDATE users SET isActive = false WHERE uniqueId = $1`,
    GET_ALL_INACTIVE_ARCHIVED: `SELECT * FROM users WHERE isActive = false AND isArchived = true`,
    GET_ALL_INACTIVE_ACTIVE: `SELECT * FROM users WHERE isActive = false AND isArchived = false`,
    GET_ALL_ARCHIVED_ACTIVE: `SELECT * FROM users WHERE isActive = true AND isArchived = true`,
    GET_ALL_ARCHIVED_INACTIVE: `SELECT * FROM users WHERE isActive = false AND isArchived = true`
}