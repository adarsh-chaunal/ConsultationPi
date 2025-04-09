export const MessageQueryHolder = {
    CREATE: `INSERT INTO Message (UniqueId, ChatId, Content, CreatedBy, CreatedAt, UpdatedBy, UpdatedAt, IsActive) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    UPDATE: `UPDATE Message SET Content = $1, UpdatedBy = $2, UpdatedAt = $3 WHERE UniqueId = $4 RETURNING *`,
    DELETE: `DELETE FROM Message WHERE UniqueId = $1 RETURNING *`,
    GET_BY_CHAT_ID: `SELECT * FROM Message WHERE ChatId = $1 AND IsActive = true ORDER BY CreatedAt DESC`,
    GET_BY_UNIQUE_ID: `SELECT * FROM Message WHERE UniqueId = $1 AND IsActive = true`,
    GET_BY_ID: `SELECT * FROM Message WHERE Id = $1 AND IsActive = true`,
}