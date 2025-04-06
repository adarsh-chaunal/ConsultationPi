import db from '../config/db';
import { User } from '../models/entities/user.entity';
import { UserQueryHolder } from './constants/user.queryHolder';

async function getById(id: number): Promise<User | null> {
    return await db.oneOrNone<User>(
        UserQueryHolder.GET_BY_ID,
        [id]
    );
}

async function getByEmail(email: string): Promise<User | null> {
    return await db.oneOrNone<User>(
        UserQueryHolder.GET_BY_EMAIL,
        [email]
    );
}

async function create(user: User): Promise<User> {
    return await db.one<User>(
        UserQueryHolder.CREATE,
        [user.uniqueId, user.firstName, user.lastName, user.email, user.password, user.createdBy, user.updatedBy, user.isArchived, user.isActive, user.createdAt, user.updatedAt]
    );
}

async function update(uniqueId: string, user: Partial<User>): Promise<User | null> {
    return await db.oneOrNone<User>(
        UserQueryHolder.UPDATE,
        [user.firstName, user.lastName, user.email, uniqueId]
    );
}

// async function delete(uniqueId: string): Promise<void> {
//     await db.none(UserQueryHolder.DELETE, [uniqueId]);
// }

async function getAll(): Promise<User[]> {
    return await db.manyOrNone<User>(
        UserQueryHolder.GET_ALL
    );
}

async function archive(uniqueId: string): Promise<void> {
    await db.none(UserQueryHolder.ARCHIVE, [uniqueId]);
}

async function activate(uniqueId: string): Promise<void> {
    await db.none(UserQueryHolder.ACTIVATE, [uniqueId]);
}

async function deactivate(uniqueId: string): Promise<void> {
    await db.none(UserQueryHolder.DEACTIVATE, [uniqueId]);
}

async function getByUniqueId(uniqueId: string): Promise<User | null> {
    return await db.oneOrNone<User>(
        UserQueryHolder.GET_BY_UNIQUE_ID,
        [uniqueId]
    );
}

const UserRepository = {
    getById,
    getByEmail,
    create,
    update,
    // delete,
    getAll,
    archive,
    activate,
    deactivate,
    getByUniqueId
};

export default UserRepository;
