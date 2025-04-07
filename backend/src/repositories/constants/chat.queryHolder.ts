export const ChatQueryHolder = {
    CREATE: `INSERT INTO Chat (UniqueId, UserId, Name, CreatedBy, CreatedAt, UpdatedBy, UpdatedAt, IsActive, IsArchived) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    UPDATE: `UPDATE Chat SET Name = $1, UpdatedBy = $2, UpdatedAt = $3, IsActive = $4, IsArchived = $5 WHERE UniqueId = $6 RETURNING *`,
}