import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hotels: <T = Array<Hotel | null>>(args: { where?: HotelWhereInput | null, orderBy?: HotelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reservations: <T = Array<Reservation | null>>(args: { where?: ReservationWhereInput | null, orderBy?: ReservationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    hotel: <T = Hotel | null>(args: { where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    reservation: <T = Reservation | null>(args: { where: ReservationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hotelsConnection: <T = HotelConnection>(args: { where?: HotelWhereInput | null, orderBy?: HotelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reservationsConnection: <T = ReservationConnection>(args: { where?: ReservationWhereInput | null, orderBy?: ReservationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHotel: <T = Hotel>(args: { data: HotelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReservation: <T = Reservation>(args: { data: ReservationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateHotel: <T = Hotel | null>(args: { data: HotelUpdateInput, where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateReservation: <T = Reservation | null>(args: { data: ReservationUpdateInput, where: ReservationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteHotel: <T = Hotel | null>(args: { where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteReservation: <T = Reservation | null>(args: { where: ReservationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHotel: <T = Hotel>(args: { where: HotelWhereUniqueInput, create: HotelCreateInput, update: HotelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReservation: <T = Reservation>(args: { where: ReservationWhereUniqueInput, create: ReservationCreateInput, update: ReservationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHotels: <T = BatchPayload>(args: { data: HotelUpdateManyMutationInput, where?: HotelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReservations: <T = BatchPayload>(args: { data: ReservationUpdateManyMutationInput, where?: ReservationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHotels: <T = BatchPayload>(args: { where?: HotelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReservations: <T = BatchPayload>(args: { where?: ReservationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    hotel: <T = HotelSubscriptionPayload | null>(args: { where?: HotelSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    reservation: <T = ReservationSubscriptionPayload | null>(args: { where?: ReservationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Hotel: (where?: HotelWhereInput) => Promise<boolean>
  Reservation: (where?: ReservationWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateHotel {
  count: Int!
}

type AggregateReservation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Hotel implements Node {
  id: ID!
  name: String!
  address: String!
  phone: String!
  fax: String!
  status: Status!
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type HotelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HotelEdge]!
  aggregate: AggregateHotel!
}

input HotelCreateInput {
  name: String!
  address: String!
  phone: String!
  fax: String!
  status: Status
  reservations: ReservationCreateManyWithoutHotelInput
}

input HotelCreateOneWithoutReservationsInput {
  create: HotelCreateWithoutReservationsInput
  connect: HotelWhereUniqueInput
}

input HotelCreateWithoutReservationsInput {
  name: String!
  address: String!
  phone: String!
  fax: String!
  status: Status
}

"""An edge in a connection."""
type HotelEdge {
  """The item at the end of the edge."""
  node: Hotel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HotelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  phone_ASC
  phone_DESC
  fax_ASC
  fax_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HotelPreviousValues {
  id: ID!
  name: String!
  address: String!
  phone: String!
  fax: String!
  status: Status!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HotelSubscriptionPayload {
  mutation: MutationType!
  node: Hotel
  updatedFields: [String!]
  previousValues: HotelPreviousValues
}

input HotelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HotelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HotelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HotelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HotelWhereInput
}

input HotelUpdateInput {
  name: String
  address: String
  phone: String
  fax: String
  status: Status
  reservations: ReservationUpdateManyWithoutHotelInput
}

input HotelUpdateManyMutationInput {
  name: String
  address: String
  phone: String
  fax: String
  status: Status
}

input HotelUpdateOneRequiredWithoutReservationsInput {
  create: HotelCreateWithoutReservationsInput
  connect: HotelWhereUniqueInput
  update: HotelUpdateWithoutReservationsDataInput
  upsert: HotelUpsertWithoutReservationsInput
}

input HotelUpdateWithoutReservationsDataInput {
  name: String
  address: String
  phone: String
  fax: String
  status: Status
}

input HotelUpsertWithoutReservationsInput {
  update: HotelUpdateWithoutReservationsDataInput!
  create: HotelCreateWithoutReservationsInput!
}

input HotelWhereInput {
  """Logical AND on all given filters."""
  AND: [HotelWhereInput!]

  """Logical OR on all given filters."""
  OR: [HotelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HotelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  fax: String

  """All values that are not equal to given value."""
  fax_not: String

  """All values that are contained in given list."""
  fax_in: [String!]

  """All values that are not contained in given list."""
  fax_not_in: [String!]

  """All values less than the given value."""
  fax_lt: String

  """All values less than or equal the given value."""
  fax_lte: String

  """All values greater than the given value."""
  fax_gt: String

  """All values greater than or equal the given value."""
  fax_gte: String

  """All values containing the given string."""
  fax_contains: String

  """All values not containing the given string."""
  fax_not_contains: String

  """All values starting with the given string."""
  fax_starts_with: String

  """All values not starting with the given string."""
  fax_not_starts_with: String

  """All values ending with the given string."""
  fax_ends_with: String

  """All values not ending with the given string."""
  fax_not_ends_with: String
  status: Status

  """All values that are not equal to given value."""
  status_not: Status

  """All values that are contained in given list."""
  status_in: [Status!]

  """All values that are not contained in given list."""
  status_not_in: [Status!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  reservations_every: ReservationWhereInput
  reservations_some: ReservationWhereInput
  reservations_none: ReservationWhereInput
}

input HotelWhereUniqueInput {
  id: ID
  name: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createHotel(data: HotelCreateInput!): Hotel!
  createReservation(data: ReservationCreateInput!): Reservation!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateHotel(data: HotelUpdateInput!, where: HotelWhereUniqueInput!): Hotel
  updateReservation(data: ReservationUpdateInput!, where: ReservationWhereUniqueInput!): Reservation
  deleteUser(where: UserWhereUniqueInput!): User
  deleteHotel(where: HotelWhereUniqueInput!): Hotel
  deleteReservation(where: ReservationWhereUniqueInput!): Reservation
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertHotel(where: HotelWhereUniqueInput!, create: HotelCreateInput!, update: HotelUpdateInput!): Hotel!
  upsertReservation(where: ReservationWhereUniqueInput!, create: ReservationCreateInput!, update: ReservationUpdateInput!): Reservation!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyHotels(data: HotelUpdateManyMutationInput!, where: HotelWhereInput): BatchPayload!
  updateManyReservations(data: ReservationUpdateManyMutationInput!, where: ReservationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyHotels(where: HotelWhereInput): BatchPayload!
  deleteManyReservations(where: ReservationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel]!
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation]!
  user(where: UserWhereUniqueInput!): User
  hotel(where: HotelWhereUniqueInput!): Hotel
  reservation(where: ReservationWhereUniqueInput!): Reservation
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  hotelsConnection(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HotelConnection!
  reservationsConnection(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReservationConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Reservation implements Node {
  id: ID!
  arrivalDate: DateTime!
  departureDate: DateTime!
  bookedBy: User!
  hotel: Hotel!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ReservationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReservationEdge]!
  aggregate: AggregateReservation!
}

input ReservationCreateInput {
  arrivalDate: DateTime!
  departureDate: DateTime!
  bookedBy: UserCreateOneWithoutReservationsInput!
  hotel: HotelCreateOneWithoutReservationsInput!
}

input ReservationCreateManyWithoutBookedByInput {
  create: [ReservationCreateWithoutBookedByInput!]
  connect: [ReservationWhereUniqueInput!]
}

input ReservationCreateManyWithoutHotelInput {
  create: [ReservationCreateWithoutHotelInput!]
  connect: [ReservationWhereUniqueInput!]
}

input ReservationCreateWithoutBookedByInput {
  arrivalDate: DateTime!
  departureDate: DateTime!
  hotel: HotelCreateOneWithoutReservationsInput!
}

input ReservationCreateWithoutHotelInput {
  arrivalDate: DateTime!
  departureDate: DateTime!
  bookedBy: UserCreateOneWithoutReservationsInput!
}

"""An edge in a connection."""
type ReservationEdge {
  """The item at the end of the edge."""
  node: Reservation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReservationOrderByInput {
  id_ASC
  id_DESC
  arrivalDate_ASC
  arrivalDate_DESC
  departureDate_ASC
  departureDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReservationPreviousValues {
  id: ID!
  arrivalDate: DateTime!
  departureDate: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ReservationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ReservationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReservationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReservationScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  arrivalDate: DateTime

  """All values that are not equal to given value."""
  arrivalDate_not: DateTime

  """All values that are contained in given list."""
  arrivalDate_in: [DateTime!]

  """All values that are not contained in given list."""
  arrivalDate_not_in: [DateTime!]

  """All values less than the given value."""
  arrivalDate_lt: DateTime

  """All values less than or equal the given value."""
  arrivalDate_lte: DateTime

  """All values greater than the given value."""
  arrivalDate_gt: DateTime

  """All values greater than or equal the given value."""
  arrivalDate_gte: DateTime
  departureDate: DateTime

  """All values that are not equal to given value."""
  departureDate_not: DateTime

  """All values that are contained in given list."""
  departureDate_in: [DateTime!]

  """All values that are not contained in given list."""
  departureDate_not_in: [DateTime!]

  """All values less than the given value."""
  departureDate_lt: DateTime

  """All values less than or equal the given value."""
  departureDate_lte: DateTime

  """All values greater than the given value."""
  departureDate_gt: DateTime

  """All values greater than or equal the given value."""
  departureDate_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type ReservationSubscriptionPayload {
  mutation: MutationType!
  node: Reservation
  updatedFields: [String!]
  previousValues: ReservationPreviousValues
}

input ReservationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReservationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReservationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReservationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReservationWhereInput
}

input ReservationUpdateInput {
  arrivalDate: DateTime
  departureDate: DateTime
  bookedBy: UserUpdateOneRequiredWithoutReservationsInput
  hotel: HotelUpdateOneRequiredWithoutReservationsInput
}

input ReservationUpdateManyDataInput {
  arrivalDate: DateTime
  departureDate: DateTime
}

input ReservationUpdateManyMutationInput {
  arrivalDate: DateTime
  departureDate: DateTime
}

input ReservationUpdateManyWithoutBookedByInput {
  create: [ReservationCreateWithoutBookedByInput!]
  connect: [ReservationWhereUniqueInput!]
  set: [ReservationWhereUniqueInput!]
  disconnect: [ReservationWhereUniqueInput!]
  delete: [ReservationWhereUniqueInput!]
  update: [ReservationUpdateWithWhereUniqueWithoutBookedByInput!]
  updateMany: [ReservationUpdateManyWithWhereNestedInput!]
  deleteMany: [ReservationScalarWhereInput!]
  upsert: [ReservationUpsertWithWhereUniqueWithoutBookedByInput!]
}

input ReservationUpdateManyWithoutHotelInput {
  create: [ReservationCreateWithoutHotelInput!]
  connect: [ReservationWhereUniqueInput!]
  set: [ReservationWhereUniqueInput!]
  disconnect: [ReservationWhereUniqueInput!]
  delete: [ReservationWhereUniqueInput!]
  update: [ReservationUpdateWithWhereUniqueWithoutHotelInput!]
  updateMany: [ReservationUpdateManyWithWhereNestedInput!]
  deleteMany: [ReservationScalarWhereInput!]
  upsert: [ReservationUpsertWithWhereUniqueWithoutHotelInput!]
}

input ReservationUpdateManyWithWhereNestedInput {
  where: ReservationScalarWhereInput!
  data: ReservationUpdateManyDataInput!
}

input ReservationUpdateWithoutBookedByDataInput {
  arrivalDate: DateTime
  departureDate: DateTime
  hotel: HotelUpdateOneRequiredWithoutReservationsInput
}

input ReservationUpdateWithoutHotelDataInput {
  arrivalDate: DateTime
  departureDate: DateTime
  bookedBy: UserUpdateOneRequiredWithoutReservationsInput
}

input ReservationUpdateWithWhereUniqueWithoutBookedByInput {
  where: ReservationWhereUniqueInput!
  data: ReservationUpdateWithoutBookedByDataInput!
}

input ReservationUpdateWithWhereUniqueWithoutHotelInput {
  where: ReservationWhereUniqueInput!
  data: ReservationUpdateWithoutHotelDataInput!
}

input ReservationUpsertWithWhereUniqueWithoutBookedByInput {
  where: ReservationWhereUniqueInput!
  update: ReservationUpdateWithoutBookedByDataInput!
  create: ReservationCreateWithoutBookedByInput!
}

input ReservationUpsertWithWhereUniqueWithoutHotelInput {
  where: ReservationWhereUniqueInput!
  update: ReservationUpdateWithoutHotelDataInput!
  create: ReservationCreateWithoutHotelInput!
}

input ReservationWhereInput {
  """Logical AND on all given filters."""
  AND: [ReservationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReservationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReservationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  arrivalDate: DateTime

  """All values that are not equal to given value."""
  arrivalDate_not: DateTime

  """All values that are contained in given list."""
  arrivalDate_in: [DateTime!]

  """All values that are not contained in given list."""
  arrivalDate_not_in: [DateTime!]

  """All values less than the given value."""
  arrivalDate_lt: DateTime

  """All values less than or equal the given value."""
  arrivalDate_lte: DateTime

  """All values greater than the given value."""
  arrivalDate_gt: DateTime

  """All values greater than or equal the given value."""
  arrivalDate_gte: DateTime
  departureDate: DateTime

  """All values that are not equal to given value."""
  departureDate_not: DateTime

  """All values that are contained in given list."""
  departureDate_in: [DateTime!]

  """All values that are not contained in given list."""
  departureDate_not_in: [DateTime!]

  """All values less than the given value."""
  departureDate_lt: DateTime

  """All values less than or equal the given value."""
  departureDate_lte: DateTime

  """All values greater than the given value."""
  departureDate_gt: DateTime

  """All values greater than or equal the given value."""
  departureDate_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  bookedBy: UserWhereInput
  hotel: HotelWhereInput
}

input ReservationWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  USER
}

enum Status {
  ACTIVE
  INACTIVE
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  hotel(where: HotelSubscriptionWhereInput): HotelSubscriptionPayload
  reservation(where: ReservationSubscriptionWhereInput): ReservationSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  status: Status!
  role: Role!
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  status: Status
  role: Role
  reservations: ReservationCreateManyWithoutBookedByInput
}

input UserCreateOneWithoutReservationsInput {
  create: UserCreateWithoutReservationsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReservationsInput {
  name: String!
  email: String!
  password: String!
  status: Status
  role: Role
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  status_ASC
  status_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  status: Status!
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  status: Status
  role: Role
  reservations: ReservationUpdateManyWithoutBookedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  status: Status
  role: Role
}

input UserUpdateOneRequiredWithoutReservationsInput {
  create: UserCreateWithoutReservationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutReservationsDataInput
  upsert: UserUpsertWithoutReservationsInput
}

input UserUpdateWithoutReservationsDataInput {
  name: String
  email: String
  password: String
  status: Status
  role: Role
}

input UserUpsertWithoutReservationsInput {
  update: UserUpdateWithoutReservationsDataInput!
  create: UserCreateWithoutReservationsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  status: Status

  """All values that are not equal to given value."""
  status_not: Status

  """All values that are contained in given list."""
  status_in: [Status!]

  """All values that are not contained in given list."""
  status_not_in: [Status!]
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  reservations_every: ReservationWhereInput
  reservations_some: ReservationWhereInput
  reservations_none: ReservationWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type HotelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'address_ASC' |
  'address_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'fax_ASC' |
  'fax_DESC' |
  'status_ASC' |
  'status_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ReservationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'arrivalDate_ASC' |
  'arrivalDate_DESC' |
  'departureDate_ASC' |
  'departureDate_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type Role =   'ADMIN' |
  'USER'

export type Status =   'ACTIVE' |
  'INACTIVE'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'status_ASC' |
  'status_DESC' |
  'role_ASC' |
  'role_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface HotelCreateInput {
  name: String
  address: String
  phone: String
  fax: String
  status?: Status | null
  reservations?: ReservationCreateManyWithoutHotelInput | null
}

export interface HotelCreateOneWithoutReservationsInput {
  create?: HotelCreateWithoutReservationsInput | null
  connect?: HotelWhereUniqueInput | null
}

export interface HotelCreateWithoutReservationsInput {
  name: String
  address: String
  phone: String
  fax: String
  status?: Status | null
}

export interface HotelSubscriptionWhereInput {
  AND?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput | null
  OR?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput | null
  NOT?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: HotelWhereInput | null
}

export interface HotelUpdateInput {
  name?: String | null
  address?: String | null
  phone?: String | null
  fax?: String | null
  status?: Status | null
  reservations?: ReservationUpdateManyWithoutHotelInput | null
}

export interface HotelUpdateManyMutationInput {
  name?: String | null
  address?: String | null
  phone?: String | null
  fax?: String | null
  status?: Status | null
}

export interface HotelUpdateOneRequiredWithoutReservationsInput {
  create?: HotelCreateWithoutReservationsInput | null
  connect?: HotelWhereUniqueInput | null
  update?: HotelUpdateWithoutReservationsDataInput | null
  upsert?: HotelUpsertWithoutReservationsInput | null
}

export interface HotelUpdateWithoutReservationsDataInput {
  name?: String | null
  address?: String | null
  phone?: String | null
  fax?: String | null
  status?: Status | null
}

export interface HotelUpsertWithoutReservationsInput {
  update: HotelUpdateWithoutReservationsDataInput
  create: HotelCreateWithoutReservationsInput
}

export interface HotelWhereInput {
  AND?: HotelWhereInput[] | HotelWhereInput | null
  OR?: HotelWhereInput[] | HotelWhereInput | null
  NOT?: HotelWhereInput[] | HotelWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  fax?: String | null
  fax_not?: String | null
  fax_in?: String[] | String | null
  fax_not_in?: String[] | String | null
  fax_lt?: String | null
  fax_lte?: String | null
  fax_gt?: String | null
  fax_gte?: String | null
  fax_contains?: String | null
  fax_not_contains?: String | null
  fax_starts_with?: String | null
  fax_not_starts_with?: String | null
  fax_ends_with?: String | null
  fax_not_ends_with?: String | null
  status?: Status | null
  status_not?: Status | null
  status_in?: Status[] | Status | null
  status_not_in?: Status[] | Status | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  reservations_every?: ReservationWhereInput | null
  reservations_some?: ReservationWhereInput | null
  reservations_none?: ReservationWhereInput | null
}

export interface HotelWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface ReservationCreateInput {
  arrivalDate: DateTime
  departureDate: DateTime
  bookedBy: UserCreateOneWithoutReservationsInput
  hotel: HotelCreateOneWithoutReservationsInput
}

export interface ReservationCreateManyWithoutBookedByInput {
  create?: ReservationCreateWithoutBookedByInput[] | ReservationCreateWithoutBookedByInput | null
  connect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
}

export interface ReservationCreateManyWithoutHotelInput {
  create?: ReservationCreateWithoutHotelInput[] | ReservationCreateWithoutHotelInput | null
  connect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
}

export interface ReservationCreateWithoutBookedByInput {
  arrivalDate: DateTime
  departureDate: DateTime
  hotel: HotelCreateOneWithoutReservationsInput
}

export interface ReservationCreateWithoutHotelInput {
  arrivalDate: DateTime
  departureDate: DateTime
  bookedBy: UserCreateOneWithoutReservationsInput
}

export interface ReservationScalarWhereInput {
  AND?: ReservationScalarWhereInput[] | ReservationScalarWhereInput | null
  OR?: ReservationScalarWhereInput[] | ReservationScalarWhereInput | null
  NOT?: ReservationScalarWhereInput[] | ReservationScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  arrivalDate?: DateTime | null
  arrivalDate_not?: DateTime | null
  arrivalDate_in?: DateTime[] | DateTime | null
  arrivalDate_not_in?: DateTime[] | DateTime | null
  arrivalDate_lt?: DateTime | null
  arrivalDate_lte?: DateTime | null
  arrivalDate_gt?: DateTime | null
  arrivalDate_gte?: DateTime | null
  departureDate?: DateTime | null
  departureDate_not?: DateTime | null
  departureDate_in?: DateTime[] | DateTime | null
  departureDate_not_in?: DateTime[] | DateTime | null
  departureDate_lt?: DateTime | null
  departureDate_lte?: DateTime | null
  departureDate_gt?: DateTime | null
  departureDate_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ReservationSubscriptionWhereInput {
  AND?: ReservationSubscriptionWhereInput[] | ReservationSubscriptionWhereInput | null
  OR?: ReservationSubscriptionWhereInput[] | ReservationSubscriptionWhereInput | null
  NOT?: ReservationSubscriptionWhereInput[] | ReservationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ReservationWhereInput | null
}

export interface ReservationUpdateInput {
  arrivalDate?: DateTime | null
  departureDate?: DateTime | null
  bookedBy?: UserUpdateOneRequiredWithoutReservationsInput | null
  hotel?: HotelUpdateOneRequiredWithoutReservationsInput | null
}

export interface ReservationUpdateManyDataInput {
  arrivalDate?: DateTime | null
  departureDate?: DateTime | null
}

export interface ReservationUpdateManyMutationInput {
  arrivalDate?: DateTime | null
  departureDate?: DateTime | null
}

export interface ReservationUpdateManyWithoutBookedByInput {
  create?: ReservationCreateWithoutBookedByInput[] | ReservationCreateWithoutBookedByInput | null
  connect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  set?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  disconnect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  delete?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  update?: ReservationUpdateWithWhereUniqueWithoutBookedByInput[] | ReservationUpdateWithWhereUniqueWithoutBookedByInput | null
  updateMany?: ReservationUpdateManyWithWhereNestedInput[] | ReservationUpdateManyWithWhereNestedInput | null
  deleteMany?: ReservationScalarWhereInput[] | ReservationScalarWhereInput | null
  upsert?: ReservationUpsertWithWhereUniqueWithoutBookedByInput[] | ReservationUpsertWithWhereUniqueWithoutBookedByInput | null
}

export interface ReservationUpdateManyWithoutHotelInput {
  create?: ReservationCreateWithoutHotelInput[] | ReservationCreateWithoutHotelInput | null
  connect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  set?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  disconnect?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  delete?: ReservationWhereUniqueInput[] | ReservationWhereUniqueInput | null
  update?: ReservationUpdateWithWhereUniqueWithoutHotelInput[] | ReservationUpdateWithWhereUniqueWithoutHotelInput | null
  updateMany?: ReservationUpdateManyWithWhereNestedInput[] | ReservationUpdateManyWithWhereNestedInput | null
  deleteMany?: ReservationScalarWhereInput[] | ReservationScalarWhereInput | null
  upsert?: ReservationUpsertWithWhereUniqueWithoutHotelInput[] | ReservationUpsertWithWhereUniqueWithoutHotelInput | null
}

export interface ReservationUpdateManyWithWhereNestedInput {
  where: ReservationScalarWhereInput
  data: ReservationUpdateManyDataInput
}

export interface ReservationUpdateWithoutBookedByDataInput {
  arrivalDate?: DateTime | null
  departureDate?: DateTime | null
  hotel?: HotelUpdateOneRequiredWithoutReservationsInput | null
}

export interface ReservationUpdateWithoutHotelDataInput {
  arrivalDate?: DateTime | null
  departureDate?: DateTime | null
  bookedBy?: UserUpdateOneRequiredWithoutReservationsInput | null
}

export interface ReservationUpdateWithWhereUniqueWithoutBookedByInput {
  where: ReservationWhereUniqueInput
  data: ReservationUpdateWithoutBookedByDataInput
}

export interface ReservationUpdateWithWhereUniqueWithoutHotelInput {
  where: ReservationWhereUniqueInput
  data: ReservationUpdateWithoutHotelDataInput
}

export interface ReservationUpsertWithWhereUniqueWithoutBookedByInput {
  where: ReservationWhereUniqueInput
  update: ReservationUpdateWithoutBookedByDataInput
  create: ReservationCreateWithoutBookedByInput
}

export interface ReservationUpsertWithWhereUniqueWithoutHotelInput {
  where: ReservationWhereUniqueInput
  update: ReservationUpdateWithoutHotelDataInput
  create: ReservationCreateWithoutHotelInput
}

export interface ReservationWhereInput {
  AND?: ReservationWhereInput[] | ReservationWhereInput | null
  OR?: ReservationWhereInput[] | ReservationWhereInput | null
  NOT?: ReservationWhereInput[] | ReservationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  arrivalDate?: DateTime | null
  arrivalDate_not?: DateTime | null
  arrivalDate_in?: DateTime[] | DateTime | null
  arrivalDate_not_in?: DateTime[] | DateTime | null
  arrivalDate_lt?: DateTime | null
  arrivalDate_lte?: DateTime | null
  arrivalDate_gt?: DateTime | null
  arrivalDate_gte?: DateTime | null
  departureDate?: DateTime | null
  departureDate_not?: DateTime | null
  departureDate_in?: DateTime[] | DateTime | null
  departureDate_not_in?: DateTime[] | DateTime | null
  departureDate_lt?: DateTime | null
  departureDate_lte?: DateTime | null
  departureDate_gt?: DateTime | null
  departureDate_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  bookedBy?: UserWhereInput | null
  hotel?: HotelWhereInput | null
}

export interface ReservationWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  status?: Status | null
  role?: Role | null
  reservations?: ReservationCreateManyWithoutBookedByInput | null
}

export interface UserCreateOneWithoutReservationsInput {
  create?: UserCreateWithoutReservationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutReservationsInput {
  name: String
  email: String
  password: String
  status?: Status | null
  role?: Role | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
  email?: String | null
  password?: String | null
  status?: Status | null
  role?: Role | null
  reservations?: ReservationUpdateManyWithoutBookedByInput | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  email?: String | null
  password?: String | null
  status?: Status | null
  role?: Role | null
}

export interface UserUpdateOneRequiredWithoutReservationsInput {
  create?: UserCreateWithoutReservationsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutReservationsDataInput | null
  upsert?: UserUpsertWithoutReservationsInput | null
}

export interface UserUpdateWithoutReservationsDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  status?: Status | null
  role?: Role | null
}

export interface UserUpsertWithoutReservationsInput {
  update: UserUpdateWithoutReservationsDataInput
  create: UserCreateWithoutReservationsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  status?: Status | null
  status_not?: Status | null
  status_in?: Status[] | Status | null
  status_not_in?: Status[] | Status | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | Role | null
  role_not_in?: Role[] | Role | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  reservations_every?: ReservationWhereInput | null
  reservations_some?: ReservationWhereInput | null
  reservations_none?: ReservationWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateHotel {
  count: Int
}

export interface AggregateReservation {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Hotel extends Node {
  id: ID_Output
  name: String
  address: String
  phone: String
  fax: String
  status: Status
  reservations?: Array<Reservation> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface HotelConnection {
  pageInfo: PageInfo
  edges: Array<HotelEdge | null>
  aggregate: AggregateHotel
}

/*
 * An edge in a connection.

 */
export interface HotelEdge {
  node: Hotel
  cursor: String
}

export interface HotelPreviousValues {
  id: ID_Output
  name: String
  address: String
  phone: String
  fax: String
  status: Status
  createdAt: DateTime
  updatedAt: DateTime
}

export interface HotelSubscriptionPayload {
  mutation: MutationType
  node?: Hotel | null
  updatedFields?: Array<String> | null
  previousValues?: HotelPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Reservation extends Node {
  id: ID_Output
  arrivalDate: DateTime
  departureDate: DateTime
  bookedBy: User
  hotel: Hotel
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ReservationConnection {
  pageInfo: PageInfo
  edges: Array<ReservationEdge | null>
  aggregate: AggregateReservation
}

/*
 * An edge in a connection.

 */
export interface ReservationEdge {
  node: Reservation
  cursor: String
}

export interface ReservationPreviousValues {
  id: ID_Output
  arrivalDate: DateTime
  departureDate: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ReservationSubscriptionPayload {
  mutation: MutationType
  node?: Reservation | null
  updatedFields?: Array<String> | null
  previousValues?: ReservationPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  status: Status
  role: Role
  reservations?: Array<Reservation> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  status: Status
  role: Role
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string