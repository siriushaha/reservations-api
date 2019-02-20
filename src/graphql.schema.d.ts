/* tslint:disable */
export enum HotelOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    address_ASC = "address_ASC",
    address_DESC = "address_DESC",
    phone_ASC = "phone_ASC",
    phone_DESC = "phone_DESC",
    fax_ASC = "fax_ASC",
    fax_DESC = "fax_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum ReservationOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    arrivalDate_ASC = "arrivalDate_ASC",
    arrivalDate_DESC = "arrivalDate_DESC",
    departureDate_ASC = "departureDate_ASC",
    departureDate_DESC = "departureDate_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class HotelCreateInput {
    name: string;
    address: string;
    phone: string;
    fax: string;
    status: Status;
    reservations?: ReservationCreateManyWithoutHotelInput;
}

export class HotelCreateOneWithoutReservationsInput {
    create?: HotelCreateWithoutReservationsInput;
    connect?: HotelWhereUniqueInput;
}

export class HotelCreateWithoutReservationsInput {
    name: string;
    address: string;
    phone: string;
    fax: string;
    status: Status;
}

export class HotelSubscriptionWhereInput {
    AND: HotelSubscriptionWhereInput[];
    OR: HotelSubscriptionWhereInput[];
    NOT: HotelSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: HotelWhereInput;
}

export class HotelUpdateInput {
    name?: string;
    address?: string;
    phone?: string;
    fax?: string;
    status?: Status;
    reservations?: ReservationUpdateManyWithoutHotelInput;
}

export class HotelUpdateManyMutationInput {
    name?: string;
    address?: string;
    phone?: string;
    fax?: string;
    status?: Status;
}

export class HotelUpdateOneRequiredWithoutReservationsInput {
    create?: HotelCreateWithoutReservationsInput;
    connect?: HotelWhereUniqueInput;
    update?: HotelUpdateWithoutReservationsDataInput;
    upsert?: HotelUpsertWithoutReservationsInput;
}

export class HotelUpdateWithoutReservationsDataInput {
    name?: string;
    address?: string;
    phone?: string;
    fax?: string;
    status?: Status;
}

export class HotelUpsertWithoutReservationsInput {
    update: HotelUpdateWithoutReservationsDataInput;
    create: HotelCreateWithoutReservationsInput;
}

export class HotelWhereInput {
    AND: HotelWhereInput[];
    OR: HotelWhereInput[];
    NOT: HotelWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    address?: string;
    address_not?: string;
    address_in: string[];
    address_not_in: string[];
    address_lt?: string;
    address_lte?: string;
    address_gt?: string;
    address_gte?: string;
    address_contains?: string;
    address_not_contains?: string;
    address_starts_with?: string;
    address_not_starts_with?: string;
    address_ends_with?: string;
    address_not_ends_with?: string;
    phone?: string;
    phone_not?: string;
    phone_in: string[];
    phone_not_in: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    fax?: string;
    fax_not?: string;
    fax_in: string[];
    fax_not_in: string[];
    fax_lt?: string;
    fax_lte?: string;
    fax_gt?: string;
    fax_gte?: string;
    fax_contains?: string;
    fax_not_contains?: string;
    fax_starts_with?: string;
    fax_not_starts_with?: string;
    fax_ends_with?: string;
    fax_not_ends_with?: string;
    status?: Status;
    status_not?: Status;
    status_in: Status[];
    status_not_in: Status[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    reservations_every?: ReservationWhereInput;
    reservations_some?: ReservationWhereInput;
    reservations_none?: ReservationWhereInput;
}

export class HotelWhereUniqueInput {
    id?: string;
    name?: string;
}

export class ReservationCreateInput {
    arrivalDate: DateTime;
    departureDate: DateTime;
    bookedBy: UserCreateOneWithoutReservationsInput;
    hotel: HotelCreateOneWithoutReservationsInput;
}

export class ReservationCreateManyWithoutBookedByInput {
    create: ReservationCreateWithoutBookedByInput[];
    connect: ReservationWhereUniqueInput[];
}

export class ReservationCreateManyWithoutHotelInput {
    create: ReservationCreateWithoutHotelInput[];
    connect: ReservationWhereUniqueInput[];
}

export class ReservationCreateWithoutBookedByInput {
    arrivalDate: DateTime;
    departureDate: DateTime;
    hotel: HotelCreateOneWithoutReservationsInput;
}

export class ReservationCreateWithoutHotelInput {
    arrivalDate: DateTime;
    departureDate: DateTime;
    bookedBy: UserCreateOneWithoutReservationsInput;
}

export class ReservationScalarWhereInput {
    AND: ReservationScalarWhereInput[];
    OR: ReservationScalarWhereInput[];
    NOT: ReservationScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    arrivalDate?: DateTime;
    arrivalDate_not?: DateTime;
    arrivalDate_in: DateTime[];
    arrivalDate_not_in: DateTime[];
    arrivalDate_lt?: DateTime;
    arrivalDate_lte?: DateTime;
    arrivalDate_gt?: DateTime;
    arrivalDate_gte?: DateTime;
    departureDate?: DateTime;
    departureDate_not?: DateTime;
    departureDate_in: DateTime[];
    departureDate_not_in: DateTime[];
    departureDate_lt?: DateTime;
    departureDate_lte?: DateTime;
    departureDate_gt?: DateTime;
    departureDate_gte?: DateTime;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class ReservationSubscriptionWhereInput {
    AND: ReservationSubscriptionWhereInput[];
    OR: ReservationSubscriptionWhereInput[];
    NOT: ReservationSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: ReservationWhereInput;
}

export class ReservationUpdateInput {
    arrivalDate?: DateTime;
    departureDate?: DateTime;
    bookedBy?: UserUpdateOneRequiredWithoutReservationsInput;
    hotel?: HotelUpdateOneRequiredWithoutReservationsInput;
}

export class ReservationUpdateManyDataInput {
    arrivalDate?: DateTime;
    departureDate?: DateTime;
}

export class ReservationUpdateManyMutationInput {
    arrivalDate?: DateTime;
    departureDate?: DateTime;
}

export class ReservationUpdateManyWithoutBookedByInput {
    create: ReservationCreateWithoutBookedByInput[];
    connect: ReservationWhereUniqueInput[];
    set: ReservationWhereUniqueInput[];
    disconnect: ReservationWhereUniqueInput[];
    delete: ReservationWhereUniqueInput[];
    update: ReservationUpdateWithWhereUniqueWithoutBookedByInput[];
    updateMany: ReservationUpdateManyWithWhereNestedInput[];
    deleteMany: ReservationScalarWhereInput[];
    upsert: ReservationUpsertWithWhereUniqueWithoutBookedByInput[];
}

export class ReservationUpdateManyWithoutHotelInput {
    create: ReservationCreateWithoutHotelInput[];
    connect: ReservationWhereUniqueInput[];
    set: ReservationWhereUniqueInput[];
    disconnect: ReservationWhereUniqueInput[];
    delete: ReservationWhereUniqueInput[];
    update: ReservationUpdateWithWhereUniqueWithoutHotelInput[];
    updateMany: ReservationUpdateManyWithWhereNestedInput[];
    deleteMany: ReservationScalarWhereInput[];
    upsert: ReservationUpsertWithWhereUniqueWithoutHotelInput[];
}

export class ReservationUpdateManyWithWhereNestedInput {
    where: ReservationScalarWhereInput;
    data: ReservationUpdateManyDataInput;
}

export class ReservationUpdateWithoutBookedByDataInput {
    arrivalDate?: DateTime;
    departureDate?: DateTime;
    hotel?: HotelUpdateOneRequiredWithoutReservationsInput;
}

export class ReservationUpdateWithoutHotelDataInput {
    arrivalDate?: DateTime;
    departureDate?: DateTime;
    bookedBy?: UserUpdateOneRequiredWithoutReservationsInput;
}

export class ReservationUpdateWithWhereUniqueWithoutBookedByInput {
    where: ReservationWhereUniqueInput;
    data: ReservationUpdateWithoutBookedByDataInput;
}

export class ReservationUpdateWithWhereUniqueWithoutHotelInput {
    where: ReservationWhereUniqueInput;
    data: ReservationUpdateWithoutHotelDataInput;
}

export class ReservationUpsertWithWhereUniqueWithoutBookedByInput {
    where: ReservationWhereUniqueInput;
    update: ReservationUpdateWithoutBookedByDataInput;
    create: ReservationCreateWithoutBookedByInput;
}

export class ReservationUpsertWithWhereUniqueWithoutHotelInput {
    where: ReservationWhereUniqueInput;
    update: ReservationUpdateWithoutHotelDataInput;
    create: ReservationCreateWithoutHotelInput;
}

export class ReservationWhereInput {
    AND: ReservationWhereInput[];
    OR: ReservationWhereInput[];
    NOT: ReservationWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    arrivalDate?: DateTime;
    arrivalDate_not?: DateTime;
    arrivalDate_in: DateTime[];
    arrivalDate_not_in: DateTime[];
    arrivalDate_lt?: DateTime;
    arrivalDate_lte?: DateTime;
    arrivalDate_gt?: DateTime;
    arrivalDate_gte?: DateTime;
    departureDate?: DateTime;
    departureDate_not?: DateTime;
    departureDate_in: DateTime[];
    departureDate_not_in: DateTime[];
    departureDate_lt?: DateTime;
    departureDate_lte?: DateTime;
    departureDate_gt?: DateTime;
    departureDate_gte?: DateTime;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    bookedBy?: UserWhereInput;
    hotel?: HotelWhereInput;
}

export class ReservationWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    name: string;
    email: string;
    password: string;
    status: Status;
    role?: Role;
    reservations?: ReservationCreateManyWithoutBookedByInput;
}

export class UserCreateOneWithoutReservationsInput {
    create?: UserCreateWithoutReservationsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutReservationsInput {
    name: string;
    email: string;
    password: string;
    status: Status;
    role?: Role;
}

export class UserSubscriptionWhereInput {
    AND: UserSubscriptionWhereInput[];
    OR: UserSubscriptionWhereInput[];
    NOT: UserSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
    email?: string;
    password?: string;
    status?: Status;
    role?: Role;
    reservations?: ReservationUpdateManyWithoutBookedByInput;
}

export class UserUpdateManyMutationInput {
    name?: string;
    email?: string;
    password?: string;
    status?: Status;
    role?: Role;
}

export class UserUpdateOneRequiredWithoutReservationsInput {
    create?: UserCreateWithoutReservationsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutReservationsDataInput;
    upsert?: UserUpsertWithoutReservationsInput;
}

export class UserUpdateWithoutReservationsDataInput {
    name?: string;
    email?: string;
    password?: string;
    status?: Status;
    role?: Role;
}

export class UserUpsertWithoutReservationsInput {
    update: UserUpdateWithoutReservationsDataInput;
    create: UserCreateWithoutReservationsInput;
}

export class UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in: string[];
    password_not_in: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    status?: Status;
    status_not?: Status;
    status_in: Status[];
    status_not_in: Status[];
    role?: Role;
    role_not?: Role;
    role_in: Role[];
    role_not_in: Role[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    reservations_every?: ReservationWhereInput;
    reservations_some?: ReservationWhereInput;
    reservations_none?: ReservationWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateHotel {
    count: number;
}

export class AggregateReservation {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Hotel implements Node {
    id: string;
    name: string;
    address: string;
    phone: string;
    fax: string;
    status: Status;
    abstract reservations(where?: ReservationWhereInput, orderBy?: ReservationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Reservation[] | Promise<Reservation[]>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class HotelConnection {
    pageInfo: PageInfo;
    edges?: HotelEdge[];
    aggregate: AggregateHotel;
}

export class HotelEdge {
    node: Hotel;
    cursor: string;
}

export class HotelPreviousValues {
    id: string;
    name: string;
    address: string;
    phone: string;
    fax: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class HotelSubscriptionPayload {
    mutation: MutationType;
    node?: Hotel;
    updatedFields: string[];
    previousValues?: HotelPreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createHotel(data: HotelCreateInput): Hotel | Promise<Hotel>;
    abstract createReservation(data: ReservationCreateInput): Reservation | Promise<Reservation>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateHotel(data: HotelUpdateInput, where: HotelWhereUniqueInput): Hotel | Promise<Hotel>;
    abstract updateReservation(data: ReservationUpdateInput, where: ReservationWhereUniqueInput): Reservation | Promise<Reservation>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteHotel(where: HotelWhereUniqueInput): Hotel | Promise<Hotel>;
    abstract deleteReservation(where: ReservationWhereUniqueInput): Reservation | Promise<Reservation>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertHotel(where: HotelWhereUniqueInput, create: HotelCreateInput, update: HotelUpdateInput): Hotel | Promise<Hotel>;
    abstract upsertReservation(where: ReservationWhereUniqueInput, create: ReservationCreateInput, update: ReservationUpdateInput): Reservation | Promise<Reservation>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyHotels(data: HotelUpdateManyMutationInput, where?: HotelWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyReservations(data: ReservationUpdateManyMutationInput, where?: ReservationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyHotels(where?: HotelWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyReservations(where?: ReservationWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract hotels(where?: HotelWhereInput, orderBy?: HotelOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Hotel[] | Promise<Hotel[]>;
    abstract reservations(where?: ReservationWhereInput, orderBy?: ReservationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Reservation[] | Promise<Reservation[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract hotel(where: HotelWhereUniqueInput): Hotel | Promise<Hotel>;
    abstract reservation(where: ReservationWhereUniqueInput): Reservation | Promise<Reservation>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract hotelsConnection(where?: HotelWhereInput, orderBy?: HotelOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): HotelConnection | Promise<HotelConnection>;
    abstract reservationsConnection(where?: ReservationWhereInput, orderBy?: ReservationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ReservationConnection | Promise<ReservationConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract temp__(): boolean | Promise<boolean>;
}

export class Reservation implements Node {
    id: string;
    arrivalDate: DateTime;
    departureDate: DateTime;
    bookedBy: User;
    hotel: Hotel;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class ReservationConnection {
    pageInfo: PageInfo;
    edges?: ReservationEdge[];
    aggregate: AggregateReservation;
}

export class ReservationEdge {
    node: Reservation;
    cursor: string;
}

export class ReservationPreviousValues {
    id: string;
    arrivalDate: DateTime;
    departureDate: DateTime;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class ReservationSubscriptionPayload {
    mutation: MutationType;
    node?: Reservation;
    updatedFields: string[];
    previousValues?: ReservationPreviousValues;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract hotel(where?: HotelSubscriptionWhereInput): HotelSubscriptionPayload | Promise<HotelSubscriptionPayload>;
    abstract reservation(where?: ReservationSubscriptionWhereInput): ReservationSubscriptionPayload | Promise<ReservationSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
    email: string;
    password: string;
    status: Status;
    role: Role;
    abstract reservations(where?: ReservationWhereInput, orderBy?: ReservationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Reservation[] | Promise<Reservation[]>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
    email: string;
    password: string;
    status: Status;
    role: Role;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
