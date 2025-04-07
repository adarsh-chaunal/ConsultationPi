import db from '../config/db';
import { User } from '../models/entities/user.entity';
import { UserQueryHolder } from './constants/user.queryHolder';

const getById = async (id: number): Promise<User | null> => {
    return await db.oneOrNone<User>(
        UserQueryHolder.GET_BY_ID,
        [id]
    );
}

const getByEmail = async (email: string): Promise<User | null> => {
    return await db.oneOrNone<User>(
        UserQueryHolder.GET_BY_EMAIL,
        [email]
    );
}

const create = async (user: User): Promise<User | null> => {
    return await db.oneOrNone<User>(
        UserQueryHolder.CREATE,
        [user.uniqueId, user.firstName, user.lastName, user.email, user.password, user.createdBy, user.updatedBy, user.isArchived, user.isActive, user.createdAt, user.updatedAt]
    );
}

const update = async (user: Partial<User>): Promise<User> => {
    const updatedUser = await db.oneOrNone<User>(
        UserQueryHolder.UPDATE,
        [user.firstName, user.lastName, user.email, user.uniqueId]
    )

    if (!updatedUser) throw new Error("User not created.");

    return updatedUser;
}

// async function delete(uniqueId: string): Promise<void> {
//     await db.none(UserQueryHolder.DELETE, [uniqueId]);
// }

const getAll = async (): Promise<User[]> => {
    return await db.manyOrNone<User>(
        UserQueryHolder.GET_ALL
    );
}

const archive = async (uniqueId: string): Promise<void> => {
    await db.none(UserQueryHolder.ARCHIVE, [uniqueId]);
}

const activate = async (uniqueId: string): Promise<void> => {
    await db.none(UserQueryHolder.ACTIVATE, [uniqueId]);
}

const deactivate = async (uniqueId: string): Promise<void> => {
    await db.none(UserQueryHolder.DEACTIVATE, [uniqueId]);
}

const getByUniqueId = async (uniqueId: string): Promise<User | null> => {
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